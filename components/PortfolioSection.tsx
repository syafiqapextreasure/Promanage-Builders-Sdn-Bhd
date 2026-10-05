import ProjectGallery from './ProjectGallery';
export default function PortfolioSection() {
 return <section id="portfolio" className="border-b border-stone-200 bg-[#FAF8F5] py-16 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  <p className="font-bold uppercase tracking-widest text-[#8A6A2C]">Selected Work</p>
  <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#1F2722] sm:text-4xl lg:text-5xl">Featured Projects</h2>
  <p className="mb-10 mt-4 max-w-3xl text-lg leading-relaxed text-stone-700 sm:text-xl">Explore three of our featured spaces. Swipe through the images or open a gallery to see the details.</p>
  <ProjectGallery featured />
 </div></section>;
}
