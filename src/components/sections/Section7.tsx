import { Contact, FieldBox } from '../elements';
import { Seaweed, Seaweed2, Seaweed3, Seaweed4, Sign, Submarine } from '../art';
import { BaseSectionProps } from '$types';
import { sectionClasses } from '$constants';

const Section7 = ({
  sectionId,
  fieldContent = '',
}: BaseSectionProps) => {
  return (
    <div id={sectionId} className={`${sectionClasses} pb-8 md:pb-0`}>
      <Submarine id={sectionId} />
      <Seaweed />
      <Seaweed2 />
      <Seaweed3 />
      <Seaweed4 />
      <Sign />

      <div className="relative flex flex-wrap items-center justify-center w-full h-full">
        <div className="w-full lg:w-7/12 flex flex-col items-center justify-center portrait:mt-8 lg:min-h-175">
          <Contact  />
        </div>
      </div>

      {/* Footer */}
      <p className="text-white text-[0.5rem] text-center absolute bottom-0 w-full [&_a]:text-purple-900 [&_a:hover]:text-purple-900">
        © {new Date().getFullYear()} Brittany Ludwig
      </p>

    </div>
  );
};

export default Section7;