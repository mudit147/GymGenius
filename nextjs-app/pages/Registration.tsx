//create a react component to render the registration form
// age: ask for DOB, have a calender
//   gender , options to chose from
//   weight, a slidebar for wight, give option for lbs or kg
//   height , same as weight, optioon for cms or feet inches
//   bodyFatPercentage , input to type
//   fitnessGoals: option to choose from: fat loss, muscle gain, both
//   preferences : options multiple choose- home workout, full gym, mix, calestanics, dumbles only, barbell only, full equipment, machines only, no machine
// injuries: input to type injuries

import FitnessGoalsForm from '@/components/Registration/FitnessGoalsForm';
import InjusriesForm from '@/components/Registration/InjuriesForm';
import PhysicalInfoForm from '@/components/Registration/PhysicalInfoForm';
import SignUpForm from '@/components/Registration/SignUpForm';
import UserInfoForm from '@/components/Registration/UserInfoForm';
import WorkoutPreferenceForm from '@/components/Registration/WorkoutPreferencesForm';
import useMultistepForm from '@/utils/useMultistepForm';
import { FormEvent, useState } from 'react';

type FormData = {
  firstName: string;
  lastName: string;
  dob: string;
  gender: string;
  weight: string;
  weightUnit: string;
  height: string;
  heightUnit: string;
  bodyFatPercentage: string;
  fitnessGoals: string[];
  preferences: string[];
  injuries: string;
  email: string;
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
      <InjusriesForm {...data} updateFields={updateFields} />,
      <SignUpForm {...data} updateFields={updateFields} />,
    ]);

  const onsubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isLastStep) {
      return next();
    }
    alert('Submit');
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
