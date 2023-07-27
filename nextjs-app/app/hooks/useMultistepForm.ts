import { ReactElement, useState } from 'react';

const userMultistepForm = (steps: ReactElement[]) => {
  const [currentStepIdx, setCurrentStepIdx] = useState(0);

  const next = () => {
    if (currentStepIdx >= steps.length - 1) {
      return currentStepIdx;
    }
    setCurrentStepIdx(currentStepIdx + 1);
  };
  const back = () => {
    if (currentStepIdx <= 0) {
      return currentStepIdx;
    }
    setCurrentStepIdx(currentStepIdx - 1);
  };

  const goTo = (step: number) => {
    setCurrentStepIdx(step);
  };

  return {
    isFirstStep: currentStepIdx === 0,
    isLastStep: currentStepIdx === steps.length - 1,
    steps,
    currentStepIdx,
    step: steps[currentStepIdx],
    next,
    back,
    goTo,
  };
};

export default userMultistepForm;
