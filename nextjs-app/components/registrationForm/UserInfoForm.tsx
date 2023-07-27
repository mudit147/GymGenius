import { useState } from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger } from '../ui/select';
import FormWrapper from './FormWrapper';

type UserInfoData = {
  firstName: string;
  lastName?: string;
  dob: string;
  gender: string;
};

type UserInfoProps = UserInfoData & {
  updateFields: (fields: Partial<UserInfoData>) => void;
};

const UserInfoForm = ({
  firstName,
  lastName,
  dob,
  gender,
  updateFields,
}: UserInfoProps) => {
  const [genderState, setGenderState] = useState(gender);

  const handleGenderChange = (value: string) => {
    setGenderState(value);
    updateFields({ gender: value });
  };

  return (
    <FormWrapper title="User Info" description="Tell us about you">
      <div className="w-full flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <Label>First Name</Label>
          <Input
            required
            autoFocus
            type="text"
            placeholder="e.g. Stephen"
            name="First Name"
            className="w-full"
            value={firstName}
            onChange={(e) => updateFields({ firstName: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label>Last Name</Label>
          <Input
            type="text"
            placeholder="e.g. Watson"
            name="Last Name"
            value={lastName}
            onChange={(e) => updateFields({ lastName: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label>Date of Birth</Label>
          <Input
            required
            type="date"
            name="dob"
            value={dob}
            onChange={(e) => updateFields({ dob: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label>Gender</Label>
          <Select value={genderState} onValueChange={handleGenderChange}>
            <SelectTrigger>{genderState}</SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </FormWrapper>
  );
};

export default UserInfoForm;
