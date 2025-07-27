import { MetadataRoute } from 'next'
import { getAllSLIITFaculties } from './data/faculty-programs';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.sliitgpacalculator.com';

  // Get all faculty pages
  const facultyPages = getAllSLIITFaculties().map((faculty) => ({
    url: `${baseUrl}${faculty.slug}`,
    lastModified: new Date(),
  }));

  // Add static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: new Date(),
    },
  ];
  
  return [...staticPages, ...facultyPages];
}