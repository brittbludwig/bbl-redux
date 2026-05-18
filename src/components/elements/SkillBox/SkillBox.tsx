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
  const skillsToFilter = formFields['section-3'] as string[];

  const filteredSkills = useMemo(() => {
    return skills.filter((skill) => !skillsToFilter.includes(skill.type));
  }, [skills, skillsToFilter]);

  return (
    <div className="w-full bg-white/50 rounded-t-lg text-xs md:text-base p-4 min-h-78">
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