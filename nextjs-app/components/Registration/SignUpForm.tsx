import { useState } from 'react';
import FormWrapper from './FormWrapper';

type SignUpFormData = {
  email: string;
};

type SignUpFormProps = SignUpFormData & {
  updateFields: (fields: Partial<SignUpFormData>) => void;
};

const SignUpForm = ({ email, updateFields }: SignUpFormProps) => {
  const [emailState, setEmailState] = useState(email);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmailState(value);
    updateFields({ email: value });
  };

  return (
    <FormWrapper title="Ready to get started?">
      <label>
        Please tell us your email address:
        <input
          autoFocus
          type="email"
          name="email"
          required
          value={emailState}
          onChange={handleInputChange}
        />
      </label>
    </FormWrapper>
  );
};

export default SignUpForm;
