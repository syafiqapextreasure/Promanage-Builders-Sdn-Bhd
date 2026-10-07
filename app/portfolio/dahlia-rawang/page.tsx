import ProjectStudyPage from '@/components/ProjectStudyPage';
import { findProjectStudy } from '@/data/project-studies';
import { pageMetadata } from '@/lib/seo';
const study = findProjectStudy('dahlia-rawang')!;
export const metadata = pageMetadata(study.title, study.description, '/portfolio/dahlia-rawang', study.hero.src);
export default function Page() { return <ProjectStudyPage slug="dahlia-rawang" />; }
