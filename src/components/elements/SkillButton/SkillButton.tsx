import { useForm, useSection } from '$hooks';
import { Button } from '../Button';

interface SkillButtonProps {
  name?: string;
}

const SKILLS_KEY = 'section-3';

const SkillButton = ({ name = '' }: SkillButtonProps) => {
  const { formFields, updateField } = useForm();
  const selectedSkills = formFields[SKILLS_KEY] as string[];
  const isSelected = selectedSkills?.includes(name);

  const handleClick = () => {
    const updated = isSelected
      ? selectedSkills.filter((s) => s !== name)
      : [name, ...selectedSkills];

    updateField(SKILLS_KEY, updated);
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