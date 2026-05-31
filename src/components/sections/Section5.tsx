import { ContentBox, FieldBox, Headshot, Container } from '../elements';
import { Sun, Birds, Hills } from '../art';
import { BaseSectionProps } from '$types';

const Section5 = ({
  sectionHeader = '',
  sectionContent = [],
  sectionId,
  fieldContent = '',
}: BaseSectionProps) => (
  <Container
    id={sectionId}
    className="bg-linear-to-b from-[#ff9f04] to-[#ffc104]"
  >
    <Sun id={sectionId} />
    <Birds id={sectionId} />
    <Hills anchor="left" id={sectionId} />
    <Hills anchor="right" id={sectionId} />

    <Container.Inner className="pb-16 md:pb-12 lg:pb-12 sm:landscape:pt-8">
      <Container.Column width="7/12" align="start">
        <div className="portrait:mt-8 relative m-auto">
          <ContentBox header={sectionHeader} content={sectionContent} />
          <Headshot id={sectionId} />
        </div>
      </Container.Column>

      <Container.Column width="5/12" lgAlign="end">
        <Container.Panel size="wide" className="mt-4 mb-auto lg:mt-[70%]">
          <FieldBox fieldText={fieldContent} section={sectionId} />
        </Container.Panel>
      </Container.Column>
    </Container.Inner>
  </Container>
);

export default Section5;