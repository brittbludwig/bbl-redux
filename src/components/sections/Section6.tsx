import { Links, FieldBox } from '../elements';
import { Bass, Fish, Trout, Turtle } from '../art';
import { LinksSectionProps } from '$types';
import { sectionClasses } from '$constants';

const Section6 = ({
  sectionHeader = '',
  sectionContent = [],
  sectionId,
  fieldContent = '',
}: LinksSectionProps) => {
  return (
    <div id={sectionId} className={`${sectionClasses} pb-8 md:pb-0`}>
      <Bass id={sectionId} />
      <Fish id={sectionId} />
      <Trout id={sectionId} />
      <Turtle id={sectionId} />

      <div className="relative flex flex-wrap items-center justify-center w-full h-full">

        <div className="w-full lg:w-7/12 flex flex-col items-center justify-center order-1 lg:order-2 lg:min-h-175">
          <div className="w-full md:w-[80%] portrait:mt-8 [&_a]:text-purple-900 [&_a:hover]:text-purple-900">
            <Links header={sectionHeader} content={sectionContent} />
          </div>
        </div>

        <div className="w-full lg:w-5/12 flex flex-col items-center justify-center order-2 lg:order-1 lg:min-h-175">
          <div className="w-full md:w-[80%] mt-4">
            <FieldBox fieldText={fieldContent} section={sectionId} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Section6;