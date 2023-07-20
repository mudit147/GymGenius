import FormWrapper from './FormWrapper';

type WorkoutPreferenceFormData = {
  preferences: string[];
};

type WorkoutPreferenceFormProps = WorkoutPreferenceFormData & {
  updateFields: (fields: Partial<WorkoutPreferenceFormData>) => void;
};

const WorkoutPreferenceForm = ({
  preferences,
  updateFields,
}: WorkoutPreferenceFormProps) => {
  const handlePreferenceChange = (preference: string, checked: boolean) => {
    if (checked) {
      updateFields({ preferences: [...preferences, preference] });
    } else {
      updateFields({
        preferences: preferences.filter((pref) => pref !== preference),
      });
    }
  };

  return (
    <FormWrapper title="What are your workout preferences?">
      <div>
        <label>Workout Preferences:</label>
        <div>
          <input
            type="checkbox"
            name="preferences"
            value="home workout"
            checked={preferences.includes('home workout')}
            onChange={(e) =>
              handlePreferenceChange('home workout', e.target.checked)
            }
          />
          <label>Home Workout</label>
          <br />

          <input
            type="checkbox"
            name="preferences"
            value="mix"
            checked={preferences.includes('mix')}
            onChange={(e) => handlePreferenceChange('mix', e.target.checked)}
          />
          <label>Mix</label>
          <br />

          <input
            type="checkbox"
            name="preferences"
            value="calestanics"
            checked={preferences.includes('calestanics')}
            onChange={(e) =>
              handlePreferenceChange('calestanics', e.target.checked)
            }
          />
          <label>Calestanics</label>
          <br />

          <input
            type="checkbox"
            name="preferences"
            value="dumbles only"
            checked={preferences.includes('dumbles only')}
            onChange={(e) =>
              handlePreferenceChange('dumbles only', e.target.checked)
            }
          />
          <label>Dumbles Only</label>
          <br />

          <input
            type="checkbox"
            name="preferences"
            value="barbell only"
            checked={preferences.includes('barbell only')}
            onChange={(e) =>
              handlePreferenceChange('barbell only', e.target.checked)
            }
          />
          <label>Barbell Only</label>
          <br />

          <input
            type="checkbox"
            name="preferences"
            value="full equipment"
            checked={preferences.includes('full equipment')}
            onChange={(e) =>
              handlePreferenceChange('full equipment', e.target.checked)
            }
          />
          <label>Full Equipment</label>
          <br />

          <input
            type="checkbox"
            name="preferences"
            value="machines only"
            checked={preferences.includes('machines only')}
            onChange={(e) =>
              handlePreferenceChange('machines only', e.target.checked)
            }
          />
          <label>Machines Only</label>
          <br />

          <input
            type="checkbox"
            name="preferences"
            value="no machine"
            checked={preferences.includes('no machine')}
            onChange={(e) =>
              handlePreferenceChange('no machine', e.target.checked)
            }
          />
          <label>No Machine</label>
          <br />
        </div>
      </div>
    </FormWrapper>
  );
};

export default WorkoutPreferenceForm;
