import { ContentBox, FieldBox, Container } from '../elements';
import { Balloon, Clouds } from '../art';
import { BaseSectionProps } from '$types';

const Section4 = ({
  sectionHeader = '',
  sectionContent = [],
  sectionId,
  fieldContent = '',
}: BaseSectionProps) => (
  <Container
    id={sectionId}
    className="bg-linear-to-b from-[#fc2ee1] to-[#ff9f04]"
  >
    <Balloon id={sectionId} />

    <Container.Inner className="pb-40 lg:pb-0">
      <Container.Column width="5/12" lgOrder={1} lgAlign="start">
        <Container.Panel className="mt-4 mb-auto lg:mb-[40%] md:pb-20">
          <FieldBox fieldText={fieldContent} section={sectionId} />
        </Container.Panel>
      </Container.Column>

      <Container.Column width="7/12" lgOrder={2} lgAlign="end">
        <Container.Panel
          portrait
          className="mt-0 mb-auto md:mt-[30%] lg:mt-auto lg:mb-[20%] lg:max-w-[90%]"
        >
          <ContentBox header={sectionHeader} content={sectionContent} />
        </Container.Panel>
      </Container.Column>
    </Container.Inner>

    <Clouds anchor="left" id={sectionId} />
  </Container>
);

export default Section4;