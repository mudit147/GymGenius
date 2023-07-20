import { useState } from 'react';
import FormWrapper from './FormWrapper';

type InjuriesFormData = {
  injuries: string;
};

type InjuriesFormProps = InjuriesFormData & {
  updateFields: (fields: Partial<InjuriesFormData>) => void;
};

const InjuriesForm = ({ injuries, updateFields }: InjuriesFormProps) => {
  const [injuriesState, setInjuriesState] = useState(injuries);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInjuriesState(value);
    updateFields({ injuries: value });
  };

  return (
    <FormWrapper title="Do you have any injuries we must know?">
      <label>Injuries:</label>
      <textarea
        autoFocus
        name="injuries"
        rows={4}
        cols={50}
        value={injuriesState}
        onChange={handleInputChange}
      />
    </FormWrapper>
  );
};

export default InjuriesForm;
