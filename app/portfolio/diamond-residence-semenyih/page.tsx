import ProjectStudyPage from '@/components/ProjectStudyPage';
import { findProjectStudy } from '@/data/project-studies';
import { pageMetadata } from '@/lib/seo';
const study = findProjectStudy('diamond-residence-semenyih')!;
export const metadata = pageMetadata(study.title, study.description, '/portfolio/diamond-residence-semenyih', study.hero.src);
export default function Page() { return <ProjectStudyPage slug="diamond-residence-semenyih" />; }
