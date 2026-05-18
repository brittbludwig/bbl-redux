import { Navigation, Section1, Section2, Section3, Section4, Section5, Section6, Section7, Stars } from '$components';
import React from 'react';
import content from '../content';
import { useBackgroundScroll, useSection } from '$hooks';
import { LinkItem } from '$types';


const Home: React.FC = () => {
  const gradient = useBackgroundScroll();
  const {activeSection } = useSection();

  return (
    <div className="relative w-full min-h-screen">
      <div
        className="fixed inset-0 -z-10 transition-all duration-700"
        style={{ backgroundImage: gradient }}
      />
      <Navigation />
      <Stars>
        <Section1
          sectionHeader={content[0].header}
          sectionContent={[]}
          sectionId={content[0].id}
          fieldContent={content[0].formText}
        />
        <Section2
          sectionHeader={content[1].header}
          sectionContent={content[1].content}
          sectionId={content[1].id}
          fieldContent={content[1].formText}
        />
        <Section3
          sectionHeader={content[2].header}
          sectionContent={content[2].content}
          sectionId={content[2].id}
          fieldContent={content[2].formText}
        />
      </Stars>
      <Section4
        sectionHeader={content[3].header}
        sectionContent={content[3].content}
        sectionId={content[3].id}
        fieldContent={content[3].formText}
      />
      <Section5
        sectionHeader={content[4].header}
        sectionContent={content[4].content}
        sectionId={content[4].id}
        fieldContent={content[4].formText}
      />
      <Section6
        sectionHeader={content[5].header}
        sectionContent={content[5].content as LinkItem[]}
        sectionId={content[5].id}
        fieldContent={content[5].formText}
      />
      <Section7
        sectionHeader={content[6].header}
        sectionContent={content[6].content as LinkItem[]}
        sectionId={content[6].id}
        fieldContent={content[6].formText}
      />
    </div>
  );
};

export default Home;