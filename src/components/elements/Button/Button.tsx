interface ButtonProps {
  label?: string;
  theme?: 'primary' | 'light' | 'dark';
  handleClick?: () => void;
  isSelected?: boolean;
}

const themeClasses: Record<string, string> = {
  primary: 'bg-white/20 text-white border border-white/30 hover:bg-white/30',
  'primary--selected': 'bg-white text-purple-900 border border-white hover:bg-white/90',
  light: 'bg-white text-blue-900 hover:text-purple-900',
  dark: 'bg-blue-900 text-white hover:bg-purple-900',
};

const Button = ({ label = '', theme = 'primary', handleClick = () => {}, isSelected = false }: ButtonProps) => {
  const selectedTheme = theme === 'primary' && isSelected ? 'primary--selected' : theme;

  return (
    <button
      onClick={handleClick}
      className={`
        rounded-lg py-1 px-3 mr-3 last:mr-0 w-auto
        font-medium text-sm tracking-wide
        transition-all duration-200 cursor-pointer
        ${themeClasses[selectedTheme] ?? ''}
      `}
    >
      {label}
    </button>
  );
};

export default Button;