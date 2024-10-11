import { useForm, DefaultValues, FormProvider } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@mui/material';

interface FormProps<T extends z.ZodTypeAny> {
  formSchema: T;
  defaultValues: DefaultValues<z.infer<T>>;
  children: React.ReactNode;
  onSubmitAction: (values: z.infer<T>) => void;
}
export const FormWrapper = <T extends z.ZodTypeAny>({
  formSchema,
  defaultValues,
  children,
  onSubmitAction,
}: FormProps<T>) => {
  const form = useForm<T>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = (values: z.infer<T>) => {
    console.log(form.getValues());
    onSubmitAction(values);
    alert(form.getValues());
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {children}
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};
