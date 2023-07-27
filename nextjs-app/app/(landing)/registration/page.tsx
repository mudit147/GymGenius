'use client';

import useMultistepForm from '@/app/hooks/useMultistepForm';
import FitnessGoalsForm from '@/components/Registration/FitnessGoalsForm';
import InjuriesForm from '@/components/Registration/InjuriesForm';
import PhysicalInfoForm from '@/components/Registration/PhysicalInfoForm';
import SignUpForm from '@/components/Registration/SignUpForm';
import UserInfoForm from '@/components/Registration/UserInfoForm';
import WorkoutPreferenceForm from '@/components/Registration/WorkoutPreferencesForm';
import axios from 'axios';
import { FormEvent, useState } from 'react';

type FormData = {
  firstName: string;
  lastName?: string;
  email: string;
  dob: string;
  age?: string;
  gender: string;
  weight: String;
  weightUnit?: string;
  height: string;
  heightUnit?: string;
  bodyFatPercentage?: string;
  injuries?: string;
  fitnessGoals: string[];
  preferences: string[];
};

const INITIAL_DATA: FormData = {
  firstName: '',
  lastName: '',
  dob: '',
  gender: '',
  weight: '',
  weightUnit: '',
  height: '',
  heightUnit: '',
  bodyFatPercentage: '',
  fitnessGoals: [],
  preferences: [],
  injuries: '',
  email: '',
};

const Registration = () => {
  const [data, setData] = useState<FormData>(INITIAL_DATA);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => ({ ...prev, ...fields }));
  }

  const { steps, currentStepIdx, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <UserInfoForm {...data} updateFields={updateFields} />,
      <PhysicalInfoForm {...data} updateFields={updateFields} />,
      <FitnessGoalsForm {...data} updateFields={updateFields} />,
      <WorkoutPreferenceForm {...data} updateFields={updateFields} />,
      <InjuriesForm {...data} updateFields={updateFields} />,
      <SignUpForm {...data} updateFields={updateFields} />,
    ]);

  const onsubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!isLastStep) {
      return next();
    }

    axios.post('/api/register', data).catch((err) => console.log(err));
  };
  return (
    <div
      style={{
        position: 'relative',
        backgroundColor: 'white',
        border: '1px solid black',
        padding: '2rem', // Adjust the padding value to your preference
        margin: '1rem',
        borderRadius: '0.5rem',
        fontFamily: 'sans-serif',
      }}
    >
      <form onSubmit={onsubmit}>
        <div
          style={{
            position: 'absolute',
            top: '.5rem',
            right: '.5rem',
          }}
        >
          {currentStepIdx + 1} / {steps.length}
        </div>
        {step}
        <div
          style={{
            marginTop: '1rem',
            display: 'flex',
            gap: '0.5rem',
            justifyContent: 'flex-end',
          }}
        >
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}

          <button type="submit">{isLastStep ? 'Submit' : 'Next'}</button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
