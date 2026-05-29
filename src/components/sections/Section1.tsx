import React from 'react';
import { Moon, Stars } from '../art';
import { Container, ContentBox, FieldBox } from '../elements';
import { BaseSectionProps } from '$types';
import { sectionClasses } from '../../constants';

const Section1 = ({
  sectionHeader = '',
  sectionContent = [],
  sectionId,
  fieldContent = '',
}: BaseSectionProps) => {
  return (
    <Container id={sectionId}>
      <Container.Inner className="lg:portrait:mt-8">
        <Container.Column lgOrder={1} className='lg:w-auto'>
          <Container.Panel className="mt-20">
            <ContentBox header={sectionHeader} content={sectionContent} />
          </Container.Panel>
          <Container.Panel className="mt-4 lg:mt-[15%] lg:ml-[20%]">
            <FieldBox section={sectionId} fieldText={fieldContent}/>
          </Container.Panel>
        </Container.Column>

        <Container.Column width="1/2" lgOrder={2} lgAlign="end" align="end">
          <Moon id={sectionId} />
        </Container.Column>
      </Container.Inner>
    </Container>
  );
};

export default Section1;