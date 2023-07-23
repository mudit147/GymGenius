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
  return (
    <FormWrapper title="Tell us about you">
      <label>First Name </label>
      <input
        required
        autoFocus
        type="text"
        name="First Name"
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
      />
      <label>Last Name </label>
      <input
        type="text"
        name="Last Name"
        value={lastName}
        onChange={(e) => updateFields({ lastName: e.target.value })}
      />

      <label>Date of Birth</label>
      <input
        required
        type="date"
        name="dob"
        value={dob}
        onChange={(e) => updateFields({ dob: e.target.value })}
      />

      <label>Gender</label>
      <select
        required
        name="gender"
        value={gender}
        onChange={(e) => updateFields({ gender: e.target.value })}
      >
        <option value="">Select</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </FormWrapper>
  );
};

export default UserInfoForm;
