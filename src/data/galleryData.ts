export type Category = 
  | "All"
  | "Leopards"
  | "Village Life"
  | "Temples"
  | "Birds"
  | "Wildlife"
  | "Camping"
  | "Landscape"
  | "Farming"
  | "Vehicles";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: Category;
  width?: string;
  height?: string;
}

export const CATEGORIES: Category[] = [
  "All",
  "Leopards",
  "Village Life",
  "Temples",
  "Birds",
  "Wildlife",
  "Camping",
  "Landscape",
  "Farming",
  "Vehicles"
];

// Updated to use existing images in public/images/
export const GALLERY_IMAGES: GalleryImage[] = [
  // Leopards
  { id: 'l1', category: 'Leopards', alt: 'Leopard on Granite', src: '/images/leopard jawai.jpg' },
  { id: 'l2', category: 'Leopards', alt: 'Leopard Sighting', src: '/images/2.jpeg' },
  { id: 'l3', category: 'Leopards', alt: 'Leopard Resting', src: '/images/1.jpeg' },
  
  // Village Life
  { id: 'v1', category: 'Village Life', alt: 'Rabari Shepherd', src: '/images/shepherd jawai.jpg' },
  { id: 'v2', category: 'Village Life', alt: 'Village Morning', src: '/images/village walk.jpg' },
  { id: 'v3', category: 'Village Life', alt: 'Traditional Attire', src: '/images/5.jpeg' },
  { id: 'v4', category: 'Village Life', alt: 'Local Culture', src: '/images/10.jpeg' },

  // Temples (Using placeholders from general images if specific ones missing)
  { id: 't1', category: 'Temples', alt: 'Hilltop Temple', src: '/images/6.jpeg' },
  
  // Birds
  { id: 'b1', category: 'Birds', alt: 'Bird Watching', src: '/images/jawai 7.webp' },
  
  // Wildlife
  { id: 'w1', category: 'Wildlife', alt: 'Jawai Wildlife', src: '/images/8.jpeg' },
  { id: 'w2', category: 'Wildlife', alt: 'Nature Trails', src: '/images/11.jpg' },

  // Camping
  { id: 'c1', category: 'Camping', alt: 'Luxury Tent Exterior', src: '/images/tents (Large).jpg' },
  { id: 'c2', category: 'Camping', alt: 'Campfire Night', src: '/images/4.jpeg' },
  { id: 'c3', category: 'Camping', alt: 'Comfort Stay', src: '/images/comfort stay.jpg' },
  { id: 'c4', category: 'Camping', alt: 'Tent Interior', src: '/images/3.jpeg' },

  // Landscape
  { id: 'ls1', category: 'Landscape', alt: 'Granite Hills Sunset', src: '/images/jawai sunrise.jpg' },
  { id: 'ls2', category: 'Landscape', alt: 'Jawai Dam View', src: '/images/jawai 4 (Large).jpg' },
  { id: 'ls3', category: 'Landscape', alt: 'Bush Dinner', src: '/images/bush.jpg' },

  // Vehicles
  { id: 'vh1', category: 'Vehicles', alt: 'Safari Jeep', src: '/images/11.jpg' },
];
