import { ContentBox, FieldBox, Container } from '../elements';
import { Rocket } from '../art';
import { BaseSectionProps } from '$types';

const Section2 = ({
  sectionHeader = '',
  sectionContent = [],
  sectionId,
  fieldContent = '',
}: BaseSectionProps) => (
  <>
    <Container id={sectionId}>
      <Rocket id={sectionId} />

      <Container.Inner>
        <Container.Column width="7/12" lgOrder={2} lgAlign="end">
          <Container.Panel portrait className="mt-[5%] lg:mt-0">
            <ContentBox header={sectionHeader} content={sectionContent} />
          </Container.Panel>
        </Container.Column>

        <Container.Column width="5/12" lgOrder={1} lgAlign="end">
          <Container.Panel className="mt-4 lg:mt-[85%]">
            <FieldBox fieldText={fieldContent} section={sectionId} />
          </Container.Panel>
        </Container.Column>
      </Container.Inner>
    </Container>
  </>
);

export default Section2;