import React from 'react';
import { Moon, Stars } from '../art';
import { Container, ContentBox, FieldBox } from '../elements';
import { BaseSectionProps } from '$types';

const Section1 = ({
  sectionHeader = '',
  sectionContent = [],
  sectionId,
  fieldContent = '',
}: BaseSectionProps) => {
  return (
    <Container id={sectionId}>
      <Container.Inner className="relative lg:portrait:mt-8 lg:min-w-1/2">
        <Container.Column lgOrder={1} className='lg:w-1/3 lg:portrait:w-1/2'>
          <Container.Panel className="lg:mr-40">
            <ContentBox header={sectionHeader} content={sectionContent} />
          </Container.Panel>
          <Container.Panel className="mt-4 lg:mt-[15%] lg:ml-[20%]">
            <FieldBox section={sectionId} fieldText={fieldContent}/>
          </Container.Panel>
        </Container.Column>
        <Moon id={sectionId} />
      </Container.Inner>
 
    </Container>
  );
};

export default Section1;