import { CheckedState } from '@radix-ui/react-checkbox';
import { Checkbox } from '../ui/checkbox';
import FormWrapper from './FormWrapper';

type FitnessGoalsFormData = {
  fitnessGoals: string[];
};

type FitnessGoalsFormProps = FitnessGoalsFormData & {
  updateFields: (fields: Partial<FitnessGoalsFormData>) => void;
};

type FitnessGoalProps = {
  goal: string;
  checked: CheckedState;
  onChange: (checked: CheckedState) => void;
};

const FitnessGoalCheckbox = ({ goal, checked, onChange }: FitnessGoalProps) => {
  return (
    <div className="flex items-center gap-3">
      <Checkbox id={goal} checked={checked} onCheckedChange={onChange} />
      <label htmlFor={goal}>{goal}</label>
    </div>
  );
};

const FitnessGoalsForm = ({
  fitnessGoals,
  updateFields,
}: FitnessGoalsFormProps) => {
  const handleFitnessGoalChange = (goal: string, checked: CheckedState) => {
    // Convert "indeterminate" to true, otherwise use the provided boolean value
    const isChecked = checked === 'indeterminate' ? true : checked;
    if (isChecked) {
      updateFields({ fitnessGoals: [...fitnessGoals, goal] });
    } else {
      updateFields({
        fitnessGoals: fitnessGoals.filter((item) => item !== goal),
      });
    }
  };

  return (
    <FormWrapper title="Goals" description="Tell us your Fitness Goals">
      <div className="text-white">
        <label>Fitness Goals:</label>
        <div>
          <FitnessGoalCheckbox
            goal="Weight Loss"
            checked={fitnessGoals.includes('Weight Loss')}
            onChange={(checked) =>
              handleFitnessGoalChange('Weight Loss', checked)
            }
          />

          <FitnessGoalCheckbox
            goal="Muscle Gain"
            checked={fitnessGoals.includes('Muscle Gain')}
            onChange={(checked) =>
              handleFitnessGoalChange('Muscle Gain', checked)
            }
          />

          <FitnessGoalCheckbox
            goal="Strength"
            checked={fitnessGoals.includes('Strength')}
            onChange={(checked) => handleFitnessGoalChange('Strength', checked)}
          />

          <FitnessGoalCheckbox
            goal="Toning and Definition"
            checked={fitnessGoals.includes('Toning and Definition')}
            onChange={(checked) =>
              handleFitnessGoalChange('Toning and Definition', checked)
            }
          />

          <FitnessGoalCheckbox
            goal="Improved Cardiovascular Health"
            checked={fitnessGoals.includes('Improved Cardiovascular Health')}
            onChange={(checked) =>
              handleFitnessGoalChange('Improved Cardiovascular Health', checked)
            }
          />

          <FitnessGoalCheckbox
            goal="Flexibility and Mobility"
            checked={fitnessGoals.includes('Flexibility and Mobility')}
            onChange={(checked) =>
              handleFitnessGoalChange('Flexibility and Mobility', checked)
            }
          />

          <FitnessGoalCheckbox
            goal="Functional Strength"
            checked={fitnessGoals.includes('Functional Strength')}
            onChange={(checked) =>
              handleFitnessGoalChange('Functional Strength', checked)
            }
          />

          <FitnessGoalCheckbox
            goal="Injury Rehabilitation"
            checked={fitnessGoals.includes('Injury Rehabilitation')}
            onChange={(checked) =>
              handleFitnessGoalChange('Injury Rehabilitation', checked)
            }
          />

          <FitnessGoalCheckbox
            goal="Posture Improvement"
            checked={fitnessGoals.includes('Posture Improvement')}
            onChange={(checked) =>
              handleFitnessGoalChange('Posture Improvement', checked)
            }
          />

          <FitnessGoalCheckbox
            goal="General Fitness"
            checked={fitnessGoals.includes('General Fitness')}
            onChange={(checked) =>
              handleFitnessGoalChange('General Fitness', checked)
            }
          />
        </div>
      </div>
    </FormWrapper>
  );
};

export default FitnessGoalsForm;
