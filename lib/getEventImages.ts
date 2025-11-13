import fs from 'fs';
import path from 'path';

export interface EventGallery {
  title: string;
  images: string[];
}

export function getEventImages(eventTitle: string): string[] {
  try {
    const imagesDirectory = path.join(process.cwd(), 'public', 'images', eventTitle);
    
    if (!fs.existsSync(imagesDirectory)) {
      return [];
    }

    const files = fs.readdirSync(imagesDirectory);
    
    const imageFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext);
    });

    return imageFiles.map(file => `/images/${eventTitle}/${file}`);
  } catch (error) {
    console.error(`Error reading images for ${eventTitle}:`, error);
    return [];
  }
}

export function getAllEventGalleries(eventTitles: string[]): EventGallery[] {
  return eventTitles
    .map(title => ({
      title,
      images: getEventImages(title)
    }))
    .filter(event => event.images.length > 0);
}
