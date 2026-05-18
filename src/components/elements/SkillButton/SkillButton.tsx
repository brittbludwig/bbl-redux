import { useForm, useSection } from '$hooks';
import { Button } from '../Button';

interface SkillButtonProps {
  name?: string;
}

const SkillButton = ({ name = '' }: SkillButtonProps) => {
  const { formFields, updateField } = useForm();
  const { activeSection } = useSection();
  const selectedSkills = formFields[activeSection] as string[];
  const isSelected = selectedSkills?.includes(name);

  const handleClick = () => {
    const updated = isSelected
      ? selectedSkills.filter((s) => s !== name)
      : [name, ...selectedSkills];

    updateField(activeSection, updated);
  };

  return (
    <Button
      theme="primary"
      label={name}
      handleClick={handleClick}
      isSelected={isSelected}
    />
  );
};

export default SkillButton;