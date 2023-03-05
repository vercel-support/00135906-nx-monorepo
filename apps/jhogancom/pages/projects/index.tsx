import JHoganComLayout from '../../components/layout/JHoganComLayout';
import ProjectSection from '../../components/projects/ProjectSection';
import { Section } from '@with-nx/react-tailwind-ui';
export default function Projects() {
  return (
    <JHoganComLayout>
      <Section>
        <ProjectSection />
      </Section>
    </JHoganComLayout>
  );
}
