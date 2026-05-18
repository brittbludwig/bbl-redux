import { useMemo } from 'react';
import { FilterButton } from '../FilterButton';
import { Skill } from '$types';

interface FilterProps {
  header?: string;
  skills?: Skill[];
}

const Filter = ({ header = '', skills = [] }: FilterProps) => {
  const uniqueTypes = useMemo(() => {
    return [...new Set(skills.map((skill) => skill.type))];
  }, [skills]);

  return (
    <div className="w-full bg-white/50 rounded-b-lg text-base p-4 text-right md:text-base">
      <h2 className="w-full text-center text-white text-2xl mb-4">{header}</h2>
      <div className="ml-auto max-w-[90%] lg:max-w-[80%]">
        <div className="flex flex-wrap items-center justify-end gap-y-2">
          {uniqueTypes.map((type) => (
            <FilterButton key={type} skill={type} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;