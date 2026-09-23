export interface ToolItem {
  id: string;
  name: string;
  role: string;
  iconPath: string;
  category: 'Editing' | 'Motion' | 'Color' | 'Design' | 'Social' | 'Code';
  description: string;
}

export const TOOLS: ToolItem[] = [
  {
    id: 'tool-davinci',
    name: 'DaVinci Resolve',
    role: 'Color Grading & Finishing',
    iconPath: '/images/icons/Logo Davinci Resolve.jfif',
    category: 'Color',
    description: 'Precision color grading, film tone curves, and high-fidelity finishing.',
  },
  {
    id: 'tool-premiere',
    name: 'Adobe Premiere Pro',
    role: 'Editorial Timeline & Narrative',
    iconPath: '/images/icons/Logo Premiere.jfif',
    category: 'Editing',
    description: 'Rhythm, story assembly, audio architecture, and multicam sequencing.',
  },
  {
    id: 'tool-aftereffects',
    name: 'Adobe After Effects',
    role: 'Motion Graphics & Visual FX',
    iconPath: '/images/icons/Logo After effect.png',
    category: 'Motion',
    description: 'Kinetic typography, tracking, screen graphics, and dynamic visual treatments.',
  },
  {
    id: 'tool-photoshop',
    name: 'Adobe Photoshop',
    role: 'Asset Lookdev & Frame Prep',
    iconPath: '/images/icons/Logo Photoshop.png',
    category: 'Design',
    description: 'Custom texture generation, matte cutouts, and frame look development.',
  },
  {
    id: 'tool-capcut',
    name: 'CapCut',
    role: 'Rapid Short-Form Social',
    iconPath: '/images/icons/Logo Capcut.png',
    category: 'Social',
    description: 'High-turnaround social workflows optimized for retention and vertical formats.',
  },
  {
    id: 'tool-remotion',
    name: 'Remotion',
    role: 'Programmatic Video & Motion',
    iconPath: '/images/icons/Logo Remotion.jfif',
    category: 'Code',
    description: 'Code-driven programmatic video rendering and reactive motion generation.',
  },
];
