import FormWrapper from './FormWrapper';

type FitnessGoalsFormData = {
  fitnessGoals: string[];
};

type FitnessGoalsFormProps = FitnessGoalsFormData & {
  updateFields: (fields: Partial<FitnessGoalsFormData>) => void;
};

const FitnessGoalsForm = ({
  fitnessGoals,
  updateFields,
}: FitnessGoalsFormProps) => {
  const handleFitnessGoalChange = (goal: string, checked: boolean) => {
    if (checked) {
      updateFields({ fitnessGoals: [...fitnessGoals, goal] });
    } else {
      updateFields({
        fitnessGoals: fitnessGoals.filter((item) => item !== goal),
      });
    }
  };

  return (
    <FormWrapper title="Tell us your Fitness Goals">
      <div>
        <label>Fitness Goals:</label>
        <div>
          <input
            type="checkbox"
            name="fitnessGoals"
            value="Weight Loss"
            checked={fitnessGoals.includes('Weight Loss')}
            onChange={(e) =>
              handleFitnessGoalChange('Weight Loss', e.target.checked)
            }
          />
          <label>Weight Loss</label>
          <br />
          <input
            type="checkbox"
            name="fitnessGoals"
            value="Muscle Gain"
            checked={fitnessGoals.includes('Muscle Gain')}
            onChange={(e) =>
              handleFitnessGoalChange('Muscle Gain', e.target.checked)
            }
          />
          <label>Muscle Gain</label>
          <br />
          <input
            type="checkbox"
            name="fitnessGoals"
            value="Strength"
            checked={fitnessGoals.includes('Strength')}
            onChange={(e) =>
              handleFitnessGoalChange('Strength', e.target.checked)
            }
          />
          <label>Strength</label>
          <br />
          <input
            type="checkbox"
            name="fitnessGoals"
            value="Toning and Definition"
            checked={fitnessGoals.includes('Toning and Definition')}
            onChange={(e) =>
              handleFitnessGoalChange('Toning and Definition', e.target.checked)
            }
          />
          <label>Toning and Definition</label>
          <br />
          <input
            type="checkbox"
            name="fitnessGoals"
            value="Improved Cardiovascular Health"
            checked={fitnessGoals.includes('Improved Cardiovascular Health')}
            onChange={(e) =>
              handleFitnessGoalChange(
                'Improved Cardiovascular Health',
                e.target.checked,
              )
            }
          />
          <label>Improved Cardiovascular Health</label>
          <br />
          <input
            type="checkbox"
            name="fitnessGoals"
            value="Flexibility and Mobility"
            checked={fitnessGoals.includes('Flexibility and Mobility')}
            onChange={(e) =>
              handleFitnessGoalChange(
                'Flexibility and Mobility',
                e.target.checked,
              )
            }
          />
          <label>Flexibility and Mobility</label>
          <br />
          <input
            type="checkbox"
            name="fitnessGoals"
            value="Functional Strength"
            checked={fitnessGoals.includes('Functional Strength')}
            onChange={(e) =>
              handleFitnessGoalChange('Functional Strength', e.target.checked)
            }
          />
          <label>Functional Strength</label>
          <br />
          <input
            type="checkbox"
            name="fitnessGoals"
            value="Injury Rehabilitation"
            checked={fitnessGoals.includes('Injury Rehabilitation')}
            onChange={(e) =>
              handleFitnessGoalChange('Injury Rehabilitation', e.target.checked)
            }
          />
          <label>Injury Rehabilitation</label>
          <br />
          <input
            type="checkbox"
            name="fitnessGoals"
            value="Posture Improvement"
            checked={fitnessGoals.includes('Posture Improvement')}
            onChange={(e) =>
              handleFitnessGoalChange('Posture Improvement', e.target.checked)
            }
          />
          <label>Posture Improvement</label>
          <br />
          <input
            type="checkbox"
            name="fitnessGoals"
            value="General Fitness"
            checked={fitnessGoals.includes('General Fitness')}
            onChange={(e) =>
              handleFitnessGoalChange('General Fitness', e.target.checked)
            }
          />
          <label>General Fitness</label>
          <br />
        </div>
      </div>
    </FormWrapper>
  );
};

export default FitnessGoalsForm;
