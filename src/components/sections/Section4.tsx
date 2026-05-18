import { ContentBox, FieldBox } from '../elements';
import { Balloon, Clouds } from '../art';
import { BaseSectionProps } from '$types';
import { sectionClasses } from '$constants';

const Section4 = ({
  sectionHeader = '',
  sectionContent = [],
  sectionId,
  fieldContent = '',
}: BaseSectionProps) => {
  return (
    <div id={sectionId} className={`${sectionClasses} p-8`}>
      <Balloon id={sectionId} />

      <div className="relative flex flex-wrap items-center justify-center w-full h-full">

        <div className="w-full lg:w-5/12 flex flex-col items-center lg:items-start justify-center lg:min-h-175 order-2 md:order-1">
          <div className="w-full max-w-lg mt-4 mb-auto lg:mb-[40%]">
            <FieldBox fieldText={fieldContent} section={sectionId} />
          </div>
        </div>

        <div className="w-full lg:w-7/12 flex flex-col items-center lg:items-end justify-center lg:min-h-175 order-1 md:order-2">
          <div className="
            w-full max-w-lg portrait:mt-8
            mt-0 mb-auto
            md:mt-[30%] md:mb-auto
            lg:mt-auto lg:mb-[20%] lg:max-w-[90%]
          ">
            <ContentBox header={sectionHeader} content={sectionContent} />
          </div>
        </div>
      </div>

      <Clouds anchor="left" id={sectionId} />
    </div>
  );
};

export default Section4;