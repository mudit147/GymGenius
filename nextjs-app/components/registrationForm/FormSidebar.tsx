import { RoughNotation } from 'react-rough-notation';

type FormSideBarProps = {
  currentStepIndex: number;
  goTo: (index: number) => void;
};

const FormSideBar = ({ currentStepIndex, goTo }: FormSideBarProps) => {
  const steps = [
    'Your Info',
    'Physical Info',
    'Fitness Goals',
    'Workout Preferences',
    'Injuries',
    'Sign Up',
  ];

  return (
    <nav className="flex justify-between py-5 text-slate-200 bg-neutral-900 rounded-md border border-neutral-700 p-5">
      <ul className="flex gap-5">
        {steps.map((stepTitle, index) => (
          <li
            key={index}
            className={`flex items-center font-medium rounded ${
              currentStepIndex === index
                ? 'bg-gray-900 text-[#ffe666]'
                : 'text-white'
            }`}
          >
            <button
              tabIndex={0}
              onClick={() => goTo(index)}
              className={`text-xs ${
                currentStepIndex === index ? 'text-[#ffe666]' : 'text-white'
              } md:text-base`}
            >
              <RoughNotation
                type="underline"
                show={currentStepIndex === index}
                color="#ffe666"
              >
                {stepTitle}
              </RoughNotation>
            </button>
          </li>
        ))}
      </ul>
      <span className="hidden md:flex md:flex-col text-neutral-500 uppercase text-sm">
        Step {currentStepIndex + 1}
      </span>
    </nav>
  );
};

export default FormSideBar;
