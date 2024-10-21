import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, DefaultValues, FormProvider } from 'react-hook-form';
import { z } from 'zod';

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
    onSubmitAction(values);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};
