import ProjectStudyPage from '@/components/ProjectStudyPage';
import { findProjectStudy } from '@/data/project-studies';
import { pageMetadata } from '@/lib/seo';
const study = findProjectStudy('common-area-maintenance')!;
export const metadata = pageMetadata(study.title, study.description, '/portfolio/common-area-maintenance', study.hero.src);
export default function Page() { return <ProjectStudyPage slug="common-area-maintenance" />; }
