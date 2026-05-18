import React from 'react';
import { Moon, Stars } from '../art';
import { ContentBox, FieldBox } from '../elements';
import { BaseSectionProps } from '$types';
import { sectionClasses } from '../../constants';

const Section1 = ({
  sectionHeader = '',
  sectionContent = [],
  sectionId,
  fieldContent = '',
}: BaseSectionProps) => {
  return (
    <div id={sectionId} className={sectionClasses}>
      <div className="flex flex-wrap items-center justify-center p-8 lg:portrait:mt-8 md:p-0 md:pl-8 lg:p-0 lg:pl-16">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center order-2 lg:order-1 lg:min-h-150">
          <div className="w-full max-w-lg mt-20">
            <ContentBox header={sectionHeader} content={sectionContent} />
          </div>
          <div className="w-full max-w-lg mt-4 lg:mt-[15%] lg:ml-[20%]">
            <FieldBox section={sectionId} fieldText={fieldContent}/>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex items-end justify-end order-1 lg:order-2 lg:min-h-150">
          <Moon id={sectionId} />
        </div>
      </div>
    </div>
  );
};

export default Section1;