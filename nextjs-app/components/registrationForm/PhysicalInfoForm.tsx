import { useState } from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger } from '../ui/select';
import FormWrapper from './FormWrapper';

type PhysicalInfoFormData = {
  weight: String;
  weightUnit?: string;
  height: string;
  heightUnit?: string;
  bodyFatPercentage?: string;
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
  const [weightUnitState, setWeightUnitState] = useState(weightUnit);
  const [heightUnitState, setHeightUnitState] = useState(heightUnit);

  const handleWeightUnitChange = (value: string) => {
    setWeightUnitState(value);
    updateFields({ weightUnit: value });
  };

  const handleHeightUnitChange = (value: string) => {
    setHeightUnitState(value);
    updateFields({ heightUnit: value });
  };

  return (
    <FormWrapper
      title="Health Statistics"
      description="Tell us about your health statistics"
    >
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>Weight</Label>
          <Input
            required
            autoFocus
            type="number"
            name="weight"
            value={weight.toString()}
            onChange={(e) => updateFields({ weight: e.target.value })}
          />
        </div>

        <div>
          <Label>Weight Unit</Label>
          <Select
            value={weightUnitState}
            onValueChange={handleWeightUnitChange}
          >
            <SelectTrigger>{weightUnitState}</SelectTrigger>
            <SelectContent>
              <SelectItem value="kg">kg</SelectItem>
              <SelectItem value="lbs">lbs</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>Height</Label>
          <Input
            required
            type="number"
            name="height"
            value={height}
            onChange={(e) => updateFields({ height: e.target.value })}
          />
        </div>

        <div>
          <Label>Height Unit</Label>
          <Select
            value={heightUnitState}
            onValueChange={handleHeightUnitChange}
          >
            <SelectTrigger>{heightUnitState}</SelectTrigger>
            <SelectContent>
              <SelectItem value="cm">cm</SelectItem>
              <SelectItem value="ft">ft</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Label>Body Fat Percentage</Label>
      <Input
        type="number"
        name="bodyFatPercentage"
        value={bodyFatPercentage}
        onChange={(e) => updateFields({ bodyFatPercentage: e.target.value })}
      />
    </FormWrapper>
  );
};

export default PhysicalInfoForm;
