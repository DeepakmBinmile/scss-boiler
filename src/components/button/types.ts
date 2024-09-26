export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary'|'icons';
    size?: 'small' | 'medium' | 'large';
    icon?: React.ReactNode;
    loading?: boolean;
  }
  