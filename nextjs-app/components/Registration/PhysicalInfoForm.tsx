import FormWrapper from './FormWrapper';

type PhysicalInfoFormData = {
  weight: string;
  weightUnit: string;
  height: string;
  heightUnit: string;
  bodyFatPercentage: string;
};

type PhysicalInfoFormProps = PhysicalInfoFormData & {
  updateFields: (fields: Partial<PhysicalInfoFormData>) => void;
};

const PhysicalInfoForm = ({
  weight,
  weightUnit,
  height,
  heightUnit,
  bodyFatPercentage,
  updateFields,
}: PhysicalInfoFormProps) => {
  return (
    <FormWrapper title="Tell us about your health statistics">
      <label>Weight</label>
      <input
        required
        autoFocus
        type="number"
        name="weight"
        value={weight}
        onChange={(e) => updateFields({ weight: e.target.value })}
      />

      <label>Weight Unit</label>
      <select
        required
        name="weightUnit"
        value={weightUnit}
        onChange={(e) => updateFields({ weightUnit: e.target.value })}
      >
        <option value="lbs">lbs</option>
        <option value="kg">kg</option>
      </select>

      <label>Height</label>
      <input
        required
        type="number"
        name="height"
        value={height}
        onChange={(e) => updateFields({ height: e.target.value })}
      />

      <label>Height Unit</label>
      <select
        required
        name="heightUnit"
        value={heightUnit}
        onChange={(e) => updateFields({ heightUnit: e.target.value })}
      >
        <option value="ft">ft</option>
        <option value="cm">cm</option>
      </select>

      <label>Body Fat Percentage</label>
      <input
        required
        type="number"
        name="bodyFatPercentage"
        value={bodyFatPercentage}
        onChange={(e) => updateFields({ bodyFatPercentage: e.target.value })}
      />
    </FormWrapper>
  );
};

export default PhysicalInfoForm;
