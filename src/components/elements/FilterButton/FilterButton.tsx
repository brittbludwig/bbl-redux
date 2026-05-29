import { useForm } from '$hooks';
import { Button } from '../Button';

const skillCategories: Record<string, string> = {
  languages: 'Languages',
  frameworks: 'Frameworks',
  apis: 'APIs',
  libraries: 'Libraries',
  platforms: 'Platforms',
  methodologies: 'Methodologies',
  certifications: 'Certifications',
  tools: 'Tools',
};

interface FilterButtonProps {
  skill: string;
}

const FILTER_KEY = 'section-3-filters';

const FilterButton = ({ skill }: FilterButtonProps) => {
  const { formFields, updateField } = useForm();
  const activeFilters = (formFields[FILTER_KEY] as string[]) ?? [];
  const isSelected = activeFilters.includes(skill);

  const handleClick = () => {
    const updated = isSelected
      ? activeFilters.filter((s) => s !== skill)
      : [...activeFilters, skill];
    updateField(FILTER_KEY, updated);
  };

  return (
    <Button
      label={skillCategories[skill]}
      handleClick={handleClick}
      isSelected={isSelected}
    />
  );
};

export default FilterButton;