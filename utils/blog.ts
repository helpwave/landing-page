import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

export type BlogFrontmatter = {
  title: string
  date: string
  excerpt?: string
}

export type BlogPost = {
  frontmatter: BlogFrontmatter
  content: string
  slug: string
}

function slugFromFilename(filename: string): string {
  return filename.replace(/\.md$/, '')
}

export function getAllPostSlugs(): string[] {
  const dir = BLOG_DIR
  if (!fs.existsSync(dir)) return []
  const files = fs.readdirSync(dir)
  return files
    .filter((f) => f.endsWith('.md'))
    .map((f) => slugFromFilename(f))
}

function normalizeFrontmatter(data: Record<string, unknown>): BlogFrontmatter {
  const d = data
  const dateVal = d['date']
  const date = dateVal instanceof Date ? dateVal.toISOString().slice(0, 10) : String(dateVal ?? '')
  return {
    title: String(d['title'] ?? ''),
    date,
    excerpt: d['excerpt'] != null ? String(d['excerpt']) : undefined
  }
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf-8')
  const parsed = matter(raw)
  const frontmatter = normalizeFrontmatter(parsed.data)
  return {
    frontmatter,
    content: parsed.content,
    slug
  }
}

export function getAllPosts(): BlogPost[] {
  const slugs = getAllPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is BlogPost => p !== null)
  posts.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date).getTime()
    const dateB = new Date(b.frontmatter.date).getTime()
    return dateB - dateA
  })
  return posts
}
