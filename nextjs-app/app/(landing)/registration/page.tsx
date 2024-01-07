/* eslint-disable react/jsx-key */
'use client';

import useMultistepForm from '@/app/hooks/useMultistepForm';
import FormSideBar from '@/components/registrationForm/FormSidebar';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { FormEvent, useState } from 'react';
import FitnessGoalsForm from '../../../components/registrationForm/FitnessGoalsForm';
import InjuriesForm from '../../../components/registrationForm/InjuriesForm';
import PhysicalInfoForm from '../../../components/registrationForm/PhysicalInfoForm';
import SignUpForm from '../../../components/registrationForm/SignUpForm';
import UserInfoForm from '../../../components/registrationForm/UserInfoForm';
import WorkoutPreferenceForm from '../../../components/registrationForm/WorkoutPreferencesForm';

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
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => ({ ...prev, ...fields }));
  }

  function validateForm(fields: Partial<FormData>) {
    const { firstName, email } = fields;
    const newErrors: Record<string, string> = {};

    if (firstName && firstName.trim().length < 3) {
      newErrors.firstName = 'Name should be at least 3 characters long';
    } else if (firstName && firstName.trim().length > 15) {
      newErrors.firstName = 'Name should be no longer than 15 characters';
    }

    if (email && !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  const {
    steps,
    currentStepIdx,
    step,
    isFirstStep,
    isLastStep,
    back,
    next,
    goTo,
  } = useMultistepForm([
    <UserInfoForm {...data} updateFields={updateFields} />,
    <PhysicalInfoForm {...data} updateFields={updateFields} />,
    <FitnessGoalsForm {...data} updateFields={updateFields} />,
    <WorkoutPreferenceForm {...data} updateFields={updateFields} />,
    <InjuriesForm {...data} updateFields={updateFields} />,
    <SignUpForm {...data} updateFields={updateFields} />,
  ]);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!isLastStep) {
      return next();
    }

    if (validateForm(data)) {
      try {
        await axios.post('/api/register', data);
        setShowSuccessMsg(true);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="flex flex-col w-11/12 max-w-4xl relative m-1 rounded-lg border border-neutral-700 bg-[#262626] p-4">
      <FormSideBar currentStepIndex={currentStepIdx} goTo={goTo} />
      <main className="w-full md:mt-5">
        <form onSubmit={onSubmit} className="w-full mx-auto">
          {currentStepIdx === 0 && (
            <UserInfoForm key="step1" {...data} updateFields={updateFields} />
          )}
          {currentStepIdx === 1 && (
            <PhysicalInfoForm
              key="step2"
              {...data}
              updateFields={updateFields}
            />
          )}
          {currentStepIdx === 2 && (
            <FitnessGoalsForm
              key="step3"
              {...data}
              updateFields={updateFields}
            />
          )}
          {currentStepIdx === 3 && (
            <WorkoutPreferenceForm
              key="step4"
              {...data}
              updateFields={updateFields}
            />
          )}
          {currentStepIdx === 4 && (
            <InjuriesForm key="step5" {...data} updateFields={updateFields} />
          )}
          {currentStepIdx === 5 && (
            <SignUpForm key="step6" {...data} updateFields={updateFields} />
          )}

          <div className="flex items-center justify-between p-4">
            <div className="relative ">
              <Button
                onClick={back}
                type="button"
                variant="ghost"
                className={`text-white bg-transparent border border-white hover:bg-white ${
                  isFirstStep ? 'invisible' : 'visible'
                }`}
              >
                Go Back
              </Button>
            </div>

            <div className="flex items-center">
              <div className="relative after:pointer-events-none after:absolute after:inset-px after:rounded-[11px] after:shadow-highlight after:shadow-white/10 focus-within:after:shadow-[#77f6aa] after:transition">
                <Button
                  type="submit"
                  className="bg-transparent border border-white hover:bg-white text-white"
                >
                  {isLastStep ? 'Confirm' : 'Next Step'}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Registration;
