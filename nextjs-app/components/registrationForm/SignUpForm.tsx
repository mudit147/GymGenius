import { useState } from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
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
    <FormWrapper title="Sign up" description="Ready to get started?">
      <Label>
        <Input
          placeholder="Email"
          autoFocus
          type="email"
          name="email"
          required
          value={emailState}
          onChange={handleInputChange}
        />
      </Label>
    </FormWrapper>
  );
};

export default SignUpForm;
