export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  customSize?: 'small' | 'medium' | 'large';
  error?: string;
  icon?: React.ReactNode;
}
