import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';

export type Service = {
  slug: string;
  title: string;
  excerpt: string;
  order: number;
  image: string;
  seoTitle?: string;
  seoDescription?: string;
  body: string;
};

export type Project = {
  slug: string;
  title: string;
  location: string;
  excerpt: string;
  imageBefore: string;
  imageAfter: string;
  year: string;
  seoTitle?: string;
  seoDescription?: string;
  body: string;
};

type BaseFrontmatter = {
  title: string;
  excerpt: string;
  seoTitle?: string;
  seoDescription?: string;
};

type ServiceFrontmatter = BaseFrontmatter & {
  order: number;
  image: string;
};

type ProjectFrontmatter = BaseFrontmatter & {
  location: string;
  imageBefore: string;
  imageAfter: string;
  year: string;
};

const servicesDir = path.join(process.cwd(), 'src/content/services');
const projectsDir = path.join(process.cwd(), 'src/content/projects');

function getMarkdownFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => file.endsWith('.md'));
}

function readMarkdownFile(dir: string, filename: string) {
  const fullPath = path.join(dir, filename);
  return fs.readFileSync(fullPath, 'utf8');
}

export function getAllServices(): Service[] {
  return getMarkdownFiles(servicesDir)
    .map((filename) => {
      const fileContent = readMarkdownFile(servicesDir, filename);
      const { data, content } = matter(fileContent);
      const slug = filename.replace(/\.md$/, '');
      const frontmatter = data as ServiceFrontmatter;

      return {
        slug,
        title: frontmatter.title,
        excerpt: frontmatter.excerpt,
        order: frontmatter.order,
        image: frontmatter.image,
        seoTitle: frontmatter.seoTitle,
        seoDescription: frontmatter.seoDescription,
        body: content
      };
    })
    .sort((a, b) => a.order - b.order);
}

export function getServiceBySlug(slug: string): Service | null {
  const filePath = path.join(servicesDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  const frontmatter = data as ServiceFrontmatter;

  return {
    slug,
    title: frontmatter.title,
    excerpt: frontmatter.excerpt,
    order: frontmatter.order,
    image: frontmatter.image,
    seoTitle: frontmatter.seoTitle,
    seoDescription: frontmatter.seoDescription,
    body: content
  };
}

export function getAllProjects(): Project[] {
  return getMarkdownFiles(projectsDir)
    .map((filename) => {
      const fileContent = readMarkdownFile(projectsDir, filename);
      const { data, content } = matter(fileContent);
      const slug = filename.replace(/\.md$/, '');
      const frontmatter = data as ProjectFrontmatter;

      return {
        slug,
        title: frontmatter.title,
        location: frontmatter.location,
        excerpt: frontmatter.excerpt,
        imageBefore: frontmatter.imageBefore,
        imageAfter: frontmatter.imageAfter,
        year: frontmatter.year,
        seoTitle: frontmatter.seoTitle,
        seoDescription: frontmatter.seoDescription,
        body: content
      };
    })
    .sort((a, b) => b.year.localeCompare(a.year));
}

export function getProjectBySlug(slug: string): Project | null {
  const filePath = path.join(projectsDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  const frontmatter = data as ProjectFrontmatter;

  return {
    slug,
    title: frontmatter.title,
    location: frontmatter.location,
    excerpt: frontmatter.excerpt,
    imageBefore: frontmatter.imageBefore,
    imageAfter: frontmatter.imageAfter,
    year: frontmatter.year,
    seoTitle: frontmatter.seoTitle,
    seoDescription: frontmatter.seoDescription,
    body: content
  };
}

export async function markdownToHtml(markdown: string) {
  const processedContent = await remark().use(remarkGfm).use(remarkHtml).process(markdown);
  return processedContent.toString();
}
