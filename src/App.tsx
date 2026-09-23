import React, { useState } from 'react';
import { SoundProvider } from './context/SoundContext';
import { Navigation } from './components/Navigation';
import { CoverSection } from './components/CoverSection';
import { AboutSection } from './components/AboutSection';
import { WorkOverview } from './components/WorkOverview';
import { FeaturedSection } from './components/FeaturedSection';
import { ShowcaseSection } from './components/ShowcaseSection';
import { ShortVideoGallery } from './components/ShortVideoGallery';
import { VideoGridSection } from './components/VideoGridSection';
import { ToolsSection } from './components/ToolsSection';
import { ContactSection } from './components/ContactSection';
import { VideoModal } from './components/VideoModal';
import { PROJECTS, Project } from './data/projects';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const featuredProject = PROJECTS.find(p => p.isFeatured) || PROJECTS[0];

  const filteredProjects = activeCategory === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => {
        if (activeCategory === 'travel') return p.categoryShort === 'TRAVEL';
        if (activeCategory === 'destination') return p.categoryShort === 'DESTINATION';
        if (activeCategory === 'commercial') return p.categoryShort === 'COMMERCIAL';
        return true;
      });

  return (
    <SoundProvider>
      <div className="relative min-h-screen bg-forest-950 text-[#F0F2ED] selection:bg-gold-500 selection:text-forest-950">
        {/* Minimal Navigation & Master Audio Toggle */}
        <Navigation />

        {/* 01. COVER (Ref 01) */}
        <CoverSection />

        {/* 02. ABOUT ME (Ref 02) */}
        <AboutSection />

        {/* 03. WORK OVERVIEW (Ref 03) */}
        <WorkOverview 
          activeCategory={activeCategory} 
          onSelectCategory={(cat) => {
            setActiveCategory(cat);
            // Smooth scroll to showcase
            const el = document.getElementById('showcase');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }} 
        />

        {/* 04. FEATURED PROJECT (Ref 05) */}
        <FeaturedSection 
          featuredProject={featuredProject}
          onOpenProject={(proj) => setSelectedProject(proj)}
        />

        {/* 05. PROJECT SHOWCASE (Ref 04, 06, 07, 08) */}
        <ShowcaseSection 
          projects={filteredProjects}
          activeCategory={activeCategory}
          onOpenProject={(proj) => setSelectedProject(proj)}
        />

        {/* 06. SHORT VIDEO GALLERY (Ref 09) */}
        <ShortVideoGallery 
          projects={PROJECTS}
          onOpenProject={(proj) => setSelectedProject(proj)}
        />

        {/* 07. VIDEO GRID / SELECTED WORK (Ref 10) */}
        <VideoGridSection 
          projects={PROJECTS}
          onOpenProject={(proj) => setSelectedProject(proj)}
        />

        {/* 08. TOOLS (Ref visual style & Section 15) */}
        <ToolsSection />

        {/* 09. CONTACT / ENDING (Ref 12) */}
        <ContactSection />

        {/* Cinematic Lightbox Video Modal */}
        <VideoModal 
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </SoundProvider>
  );
};

export default App;
