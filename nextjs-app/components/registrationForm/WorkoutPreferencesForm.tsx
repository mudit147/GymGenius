import { CheckedState } from '@radix-ui/react-checkbox';
import { Checkbox } from '../ui/checkbox';
import FormWrapper from './FormWrapper';

type WorkoutPreferenceFormData = {
  preferences: string[];
};

type WorkoutPreferenceFormProps = WorkoutPreferenceFormData & {
  updateFields: (fields: Partial<WorkoutPreferenceFormData>) => void;
};

type PreferenceProps = {
  preference: string;
  checked: CheckedState;
  onChange: (checked: CheckedState) => void;
};

const WorkoutPreferenceCheckbox = ({
  preference,
  checked,
  onChange,
}: PreferenceProps) => {
  return (
    <div className="flex items-center gap-3">
      <Checkbox id={preference} checked={checked} onCheckedChange={onChange} />
      <label htmlFor={preference}>{preference}</label>
    </div>
  );
};

const WorkoutPreferenceForm = ({
  preferences,
  updateFields,
}: WorkoutPreferenceFormProps) => {
  const handlePreferenceChange = (
    preference: string,
    checked: CheckedState,
  ) => {
    // Convert "indeterminate" to true, otherwise use the provided boolean value
    const isChecked = checked === 'indeterminate' ? true : checked;
    if (isChecked) {
      updateFields({ preferences: [...preferences, preference] });
    } else {
      updateFields({
        preferences: preferences.filter((pref) => pref !== preference),
      });
    }
  };

  return (
    <FormWrapper
      title="Preferences"
      description="What are your workout preferences?"
    >
      <div className="text-white">
        <WorkoutPreferenceCheckbox
          preference="Home Workout"
          checked={preferences.includes('home workout')}
          onChange={(checked) =>
            handlePreferenceChange('home workout', checked)
          }
        />

        <WorkoutPreferenceCheckbox
          preference="Mix"
          checked={preferences.includes('mix')}
          onChange={(checked) => handlePreferenceChange('mix', checked)}
        />

        <WorkoutPreferenceCheckbox
          preference="Calestanics"
          checked={preferences.includes('calestanics')}
          onChange={(checked) => handlePreferenceChange('calestanics', checked)}
        />

        <WorkoutPreferenceCheckbox
          preference="Dumbles Only"
          checked={preferences.includes('dumbles only')}
          onChange={(checked) =>
            handlePreferenceChange('dumbles only', checked)
          }
        />

        <WorkoutPreferenceCheckbox
          preference="Barbell Only"
          checked={preferences.includes('barbell only')}
          onChange={(checked) =>
            handlePreferenceChange('barbell only', checked)
          }
        />

        <WorkoutPreferenceCheckbox
          preference="Full Equipment"
          checked={preferences.includes('full equipment')}
          onChange={(checked) =>
            handlePreferenceChange('full equipment', checked)
          }
        />

        <WorkoutPreferenceCheckbox
          preference="Machines Only"
          checked={preferences.includes('machines only')}
          onChange={(checked) =>
            handlePreferenceChange('machines only', checked)
          }
        />

        <WorkoutPreferenceCheckbox
          preference="No Machine"
          checked={preferences.includes('no machine')}
          onChange={(checked) => handlePreferenceChange('no machine', checked)}
        />
      </div>
    </FormWrapper>
  );
};

export default WorkoutPreferenceForm;
