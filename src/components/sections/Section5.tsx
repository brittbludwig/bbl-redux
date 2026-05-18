import { ContentBox, FieldBox, Headshot } from '../elements';
import { BaseSectionProps } from '$types';
import { sectionClasses } from '$constants';
import { Sun, Birds, Hills } from '../art';

const Section5 = ({
  sectionHeader = '',
  sectionContent = [],
  sectionId,
  fieldContent = '',
}: BaseSectionProps) => {
  return (
    <div id={sectionId} className={sectionClasses}>
      <Sun id={sectionId} />
      <Birds id={sectionId} />
      <Hills anchor="left" id={sectionId} />
      <Hills anchor="right" id={sectionId} />
      <div className="relative flex flex-wrap items-center lg:items-start justify-center w-full h-full">
        <div className="w-full lg:w-7/12 flex flex-col lg:flex-row items-center justify-start lg:min-h-175">
          <div className="w-full md:w-[80%] portrait:mt-8 relative m-auto">
            <ContentBox header={sectionHeader} content={sectionContent} />
            <Headshot id={sectionId} />
          </div>
        </div>
        <div className="w-full lg:w-5/12 flex flex-col lg:flex-row items-center lg:items-end justify-center lg:min-h-175">
          <div className="w-full md:w-[80%] mt-4 mb-auto lg:mt-[70%]">
            <FieldBox fieldText={fieldContent} section={sectionId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;