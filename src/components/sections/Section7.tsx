import { Contact, Container } from '../elements';
import { Seaweed, Seaweed2, Seaweed3, Seaweed4, Sign, Submarine } from '../art';
import { BaseSectionProps } from '$types';

const Section7 = ({
  sectionHeader = '',
  sectionContent = [],
  sectionId,
  fieldContent = '',
}: BaseSectionProps) => (
  <Container id={sectionId} className="md:pb-0">
    <Submarine id={sectionId} />
    <Seaweed />
    <Seaweed2 />
    <Seaweed3 />
    <Seaweed4 />
    <Sign />

    <Container.Inner>
      <Container.Column>
        <Container.Panel portrait size="wide" className="lg:max-w-[60%] mx-auto">
          <Contact
            header={sectionHeader}
            content={sectionContent as string[]}
            sectionId={sectionId}
            fieldContent={fieldContent}
          />
        </Container.Panel>
      </Container.Column>
    </Container.Inner>

    <p className="text-white text-[0.5rem] text-center absolute bottom-0 w-full [&_a]:text-purple-900 [&_a:hover]:text-purple-900">
      © {new Date().getFullYear()} Brittany Ludwig
    </p>
  </Container>
);

export default Section7;