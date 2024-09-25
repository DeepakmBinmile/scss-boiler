import { useTheme } from '../../context/theme-provider';

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <div>
      <button onClick={() => setTheme('light')}>Light</button>
      <button onClick={() => setTheme('dark')}>Dark</button>
    </div>
  );
}
