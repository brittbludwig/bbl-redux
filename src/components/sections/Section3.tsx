import { Clouds, Plane } from '../art';
import { SkillBox, Filter, Container } from '../elements';
import { BaseSectionProps, Skill } from '$types';

interface Section3Props extends BaseSectionProps {
  filterHeader?: string;
}

const Section3 = ({
  sectionHeader = '',
  sectionContent = [],
  sectionId,
  filterHeader = '',
}: Section3Props) => (
  <Container id={sectionId}>
    <Clouds anchor="left" id={sectionId} />
    <Clouds anchor="right" id={sectionId} />
    <Plane id={sectionId} />

    <Container.Inner className="py-16">
      <Container.Column>
        <SkillBox header={sectionHeader} skills={sectionContent as Skill[]} />
        <Filter header={filterHeader} skills={sectionContent as Skill[]} />
      </Container.Column>
    </Container.Inner>
  </Container>
);

export default Section3;