import type { GetStaticProps } from 'next'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useLandingPageTranslation } from '@/i18n/useLandingPageTranslation'
import { Page } from '@/components/Page'
import { SectionBase } from '@/components/sections/SectionBase'
import { getAllPosts } from '@/utils/blog'
import type { BlogPost } from '@/utils/blog'

type BlogIndexProps = {
  posts: BlogPost[],
}

const BlogIndex: NextPage<BlogIndexProps> = ({ posts }) => {
  const translation = useLandingPageTranslation()

  return (
    <Page pageTitle={translation('blog')}>
      <SectionBase>
        <div className="col gap-y-8">
          <h1 className="typography-headline-md">{translation('blog')}</h1>
          <ul className="col gap-y-6">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="col gap-y-1 block">
                  <span className="typography-title-md">{post.frontmatter.title}</span>
                  <span className="text-sm opacity-80">
                    {translation('publishedOn', { date: new Date(post.frontmatter.date) })}
                  </span>
                  {post.frontmatter.excerpt && (
                    <span className="typography-body-lg">{post.frontmatter.excerpt}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </SectionBase>
    </Page>
  )
}

export default BlogIndex

export const getStaticProps: GetStaticProps<BlogIndexProps> = () => {
  const posts = getAllPosts()
  return { props: { posts } }
}
