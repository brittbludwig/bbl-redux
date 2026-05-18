import { ContentBox, FieldBox } from '../elements';
import { Rocket } from '../art';
import { BaseSectionProps } from '$types';
import { sectionClasses } from '$constants';

const Section2 = ({
  sectionHeader = '',
  sectionContent = [],
  sectionId,
  fieldContent = '',
}: BaseSectionProps) => {
  return (
    <div id={sectionId} className={sectionClasses}>
      <Rocket id={sectionId} />

      <div className="relative flex flex-wrap items-center justify-center w-full h-full p-8">
        <div className="w-full lg:w-7/12 flex flex-col items-center lg:items-end justify-center order-1 lg:order-2 lg:min-h-187.5">
          <div className="w-full max-w-lg mt-[5%] lg:mt-0 portrait:mt-8">
            <ContentBox header={sectionHeader} content={sectionContent} />
          </div>
        </div>

        <div className="w-full lg:w-5/12 flex flex-col items-center lg:items-end justify-center order-2 lg:order-1 lg:min-h-187.5">
          <div className="w-full max-w-lg mt-4 lg:mt-[85%]">
            <FieldBox fieldText={fieldContent} section={sectionId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;