import { useForm } from '$hooks';
import { Button } from '../Button';

const skillCategories: Record<string, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  design: 'Design',
  tools: 'Tools',
};

interface FilterButtonProps {
  skill: string;
}

const FilterButton = ({ skill }: FilterButtonProps) => {
  const { formFields, updateField } = useForm();
  const skillsToFilter = formFields['section-3'] as string[];
  const isSelected = skillsToFilter.includes(skill);

  const handleClick = () => {
    const updated = isSelected
      ? skillsToFilter.filter((s) => s !== skill)
      : [...skillsToFilter, skill];

    updateField('section-3', updated);
  };

  return (
    <Button
      label={skillCategories[skill] ?? skill}
      handleClick={handleClick}
      isSelected={isSelected}
    />
  );
};

export default FilterButton;