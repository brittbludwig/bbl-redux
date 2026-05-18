import { Clouds, Plane } from '../art';
import { SkillBox, Filter } from '../elements';
import { BaseSectionProps, Skill } from '$types';
import { sectionClasses } from '$constants';

interface Section3Props extends BaseSectionProps {
  filterHeader?: string;
}

const Section3 = ({
  sectionHeader = '',
  sectionContent = [],
  sectionId,
  filterHeader = '',
}: Section3Props) => {
  return (
    <div id={sectionId} className={sectionClasses}>
      <Clouds anchor="left" id={sectionId} />
      <Clouds anchor="right" id={sectionId} />
      <Plane id={sectionId} />

      <div className="flex items-center justify-center w-full md:max-w-[50%] md:m-auto h-full py-16">
        <div className="flex flex-col items-center justify-center w-full">
          <SkillBox header={sectionHeader}  skills={sectionContent as Skill[]}  />
          <Filter header={filterHeader}  skills={sectionContent as Skill[]}  />
        </div>
      </div>
    </div>
  );
};

export default Section3;