import { useMemo } from 'react';
import { useForm } from '$hooks';
import { SkillButton } from '../SkillButton';
import { Skill } from '$types';

interface SkillBoxProps {
  header?: string;
  skills?: Skill[];
}

const SkillBox = ({ header = '', skills = [] }: SkillBoxProps) => {
  const { formFields } = useForm();
  const activeFilters = (formFields['section-3-filters'] as string[]) ?? [];

  const filteredSkills = useMemo(() => {
    if (activeFilters.length === 0) return skills;
    return skills.filter((skill) => activeFilters.includes(skill.type));
  }, [skills, activeFilters]);

  return (
    <div className="w-full bg-black/10 backdrop-blur-sm border border-white/20 rounded-t-lg text-xs md:text-base p-6 min-h-78">
      <h2 className="text-white text-2xl mb-4">{header}</h2>
      <div className="flex flex-wrap gap-2">
        {filteredSkills.map((skill, i) => (
          <SkillButton key={i} name={skill.name} />
        ))}
      </div>
    </div>
  );
};

export default SkillBox;