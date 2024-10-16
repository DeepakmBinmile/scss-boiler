import { z } from 'zod';
import { Button, Stack } from '@mui/material';

import { InputText } from '../input-text/InputText';
import { InputDropdown } from '../input-dropdown/InputDrowdown';
import { InputRadio } from '../input-radio/InputRadio';

import { FormWrapper } from './Form-wrapper';

export default function ExampleForm() {
  const userForm = z.object({
    name: z.string({ message: 'Category is required' }),
    age: z.string({ message: 'Category is required' }),
    gender: z.string({ message: 'Category is required' }),
  });

  const defaultValue = {
    name: '',
    age: '18+',
    gender: '',
  };

  const handleSubmit = (values: z.infer<typeof userForm>) => {
    console.log(values, 'values');
  };

  return (
    <FormWrapper defaultValues={defaultValue} formSchema={userForm} onSubmitAction={handleSubmit}>
      <Stack gap={5}>
        <InputText name="name" placeholder="Enter your name" label="name" />
        <InputDropdown
          name="age"
          label="Age"
          options={[
            { label: 'above 18', value: '18+' },
            { label: 'below 18', value: '18-' },
          ]}
          placeholder="Select your age"
        />
        <InputRadio
          name="gender"
          label="Gender"
          options={[
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' },
          ]}
        />
        <Button type="submit">Submit</Button>
      </Stack>
    </FormWrapper>
  );
}
