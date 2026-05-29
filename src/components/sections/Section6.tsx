import { Links, FieldBox, Container } from '../elements';
import { Bass, Fish, Trout, Turtle } from '../art';
import { LinksSectionProps } from '$types';

const Section6 = ({
  sectionHeader = '',
  sectionContent = [],
  sectionId,
  fieldContent = '',
}: LinksSectionProps) => (
  <Container id={sectionId} className="md:pb-0">
    <Bass id={sectionId} />
    <Fish id={sectionId} />
    <Trout id={sectionId} />
    <Turtle id={sectionId} />

    <Container.Inner>
      <Container.Column width="7/12" lgOrder={2}>
        <Container.Panel size="wide" portrait>
          <Links header={sectionHeader} content={sectionContent} />
        </Container.Panel>
      </Container.Column>

      <Container.Column width="5/12" lgOrder={1}>
        <Container.Panel size="wide" className="mt-4">
          <FieldBox fieldText={fieldContent} section={sectionId} />
        </Container.Panel>
      </Container.Column>
    </Container.Inner>
  </Container>
);

export default Section6;