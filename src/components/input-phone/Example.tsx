import { z } from 'zod';
import { Button } from '@mui/material';

import { FormWrapper } from '../form/Form-wrapper';

import { InputPhone } from './InputPhone';

export default function ExamplePhoneInput() {
  const handleSubmit = (value: z.infer<typeof phoneValidation>) => {
    console.log(value, 'value');
  };

  const defaultValue = {
    phone: '',
  };

  const phoneValidation = z.object({
    phone: z.string({ message: 'Category is required' }).min(1, { message: 'Phone number is required' }),
  });

  return (
    <FormWrapper defaultValues={defaultValue} formSchema={phoneValidation} onSubmitAction={handleSubmit}>
      <InputPhone name="phone" defaultCountry="IN" placeholder="hello" />
      <Button type="submit">Submit</Button>
    </FormWrapper>
  );
}
