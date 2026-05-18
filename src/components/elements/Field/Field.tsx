interface FieldProps {
  handleChange: (value: string, id?: string) => void;
  id?: string;
  placeholder?: string;
}

const Field = ({ handleChange, id, placeholder = 'Type here...' }: FieldProps) => {
  return (
    <div className="w-full lg:w-auto">
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        onChange={(e) => handleChange(e.target.value, id)}
        className="
          w-full bg-white/90 backdrop-blur-sm rounded-lg py-2 px-4
          text-gray-800 placeholder:text-gray-400
          border border-white/20
          focus:outline-none focus:border-white/50 focus:ring-2 focus:ring-white/30
          transition-all duration-200
          shadow-lg
        "
      />
    </div>
  );
};

export default Field;