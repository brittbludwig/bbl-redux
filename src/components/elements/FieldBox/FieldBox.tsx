import { useForm } from '$hooks';
import { Field } from '../Field';

interface FieldBoxProps {
  fieldText?: string;
  section?: string;
}

const FieldBox = ({ fieldText = '', section }: FieldBoxProps) => {
  const { updateField } = useForm();

  const handleChange = (value: string) => {
    if (section) updateField(section, value);
  };

  return (
    <div className="relative w-full pb-6 lg:min-w-[16rem] bg-black/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 shadow-lg">
      {fieldText && (
        <p className="text-white/80 text-base leading-relaxed">{fieldText}</p>
      )}
      <div className="absolute -bottom-6 left-0 w-full lg:-bottom-5 lg:left-[50%] lg:w-auto">
        <Field handleChange={handleChange} />
      </div>
    </div>
  );
};

export default FieldBox;