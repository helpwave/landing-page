import type { GetStaticPaths, GetStaticProps } from 'next'
import type { NextPage } from 'next'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useLandingPageTranslation } from '@/i18n/useLandingPageTranslation'
import { Page } from '@/components/Page'
import { SectionBase } from '@/components/sections/SectionBase'
import { getAllPostSlugs, getPostBySlug } from '@/utils/blog'
import type { BlogPost } from '@/utils/blog'

type BlogPostPageProps = {
  post: BlogPost,
}

const BlogPostPage: NextPage<BlogPostPageProps> = ({ post }) => {
  const translation = useLandingPageTranslation()

  return (
    <Page pageTitle={post.frontmatter.title}>
      <SectionBase>
        <div className="col gap-y-6 max-w-[720px]">
          <Link href="/blog" className="typography-body-lg underline w-fit">
            {translation('backToBlog')}
          </Link>
          <h1 className="typography-headline-md">{post.frontmatter.title}</h1>
          <span className="text-sm opacity-80">
            {translation('publishedOn', { date: new Date(post.frontmatter.date) })}
          </span>
          <article
            className="col gap-y-4 blog-prose"
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => <h1 className="typography-headline-md">{children}</h1>,
                h2: ({ children }) => <h2 className="typography-title-lg mt-6">{children}</h2>,
                h3: ({ children }) => <h3 className="typography-title-md mt-4">{children}</h3>,
                p: ({ children }) => <p className="typography-body-lg">{children}</p>,
                ul: ({ children }) => <ul className="list-disc pl-6 typography-body-lg">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal pl-6 typography-body-lg">{children}</ol>,
                li: ({ children }) => <li className="my-1">{children}</li>,
                code: ({ className, children }) =>
                  className ? (
                    <code className={className}>{children}</code>
                  ) : (
                    <code className="bg-section-variant px-1.5 py-0.5 rounded text-sm">{children}</code>
                  ),
                pre: ({ children }) => (
                  <pre className="bg-section-variant p-4 rounded overflow-x-auto my-4 typography-body-md">
                    {children}
                  </pre>
                ),
                a: ({ href, children }) => (
                  <a href={href} className="underline" target="_blank" rel="noopener noreferrer">
                    {children}
                  </a>
                )
              }}
            >
              {post.content}
            </ReactMarkdown>
          </article>
        </div>
      </SectionBase>
    </Page>
  )
}

export default BlogPostPage

export const getStaticPaths: GetStaticPaths = () => {
  const slugs = getAllPostSlugs()
  const paths = slugs.map((slug) => ({ params: { slug } }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<BlogPostPageProps, { slug: string }> = ({ params }) => {
  if (!params?.slug) return { notFound: true }
  const post = getPostBySlug(params.slug)
  if (!post) return { notFound: true }
  return { props: { post } }
}
