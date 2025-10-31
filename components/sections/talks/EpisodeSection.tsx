import Image from 'next/image'
import Link from 'next/link'
import type { PropsForTranslation, Translation } from '@helpwave/hightide'
import { LoadingAnimation, useTranslation } from '@helpwave/hightide'
import { useQuery } from '@tanstack/react-query'
import { SectionBase } from '@/components/sections/SectionBase'

type EpisodeSectionTranslation = {
  allEpisodes: string,
}

const defaultEpisodeTranslation: Translation<EpisodeSectionTranslation> = {
  en: {
    allEpisodes: 'All episodes...'
  },
  de: {
    allEpisodes: 'Alle Episoden...'
  }
}

const getEpisodes = async (): Promise<{
  id: string,
  title: string,
  description: string,
  date: Date,
  link: string,
  imageURL: string,
}[]> => {
  const podcastRSS = 'https://anchor.fm/s/e5155fa0/podcast/rss'

  const removeCDATA = (value: string | undefined): (string | undefined) => {
    if (!value) {
      return undefined
    }

    const regex = /<!\[CDATA\[(.*)]]>/
    const match = regex.exec(value.replaceAll('\n', ' ').replaceAll('\r', ''))
    return match ? match[1] : undefined
  }

  const removeHTMLTags = (html: string): string => {
    const div = document.createElement('div')
    div.innerHTML = html
    return div.innerText
  }

  return await fetch(podcastRSS)
    // TODO do this with proper type casting
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, 'text/xml'))
    .then(data => {
      const items = Array.from(data.querySelectorAll('item'))

      return items.map(item => {
        const id = item.querySelector('guid')?.innerHTML || ''
        const title = removeCDATA(item.querySelector('title')?.innerHTML) || ''
        const description = removeHTMLTags(removeCDATA(item.querySelector('description')?.innerHTML) || '')
        const link = item.querySelector('link')?.innerHTML || ''
        const imageURL = item.querySelector('image')?.getAttribute('href') || ''
        const date = new Date(item.querySelector('pubDate')?.innerHTML || '')

        return { id, title, description, date, link, imageURL }
      })
    })
}

const EpisodeSection = ({ overwriteTranslation }: PropsForTranslation<EpisodeSectionTranslation>) => {
  const translation = useTranslation([defaultEpisodeTranslation], overwriteTranslation)
  const { isLoading, data } = useQuery({ queryKey: ['episodes'], queryFn: getEpisodes })

  const size = 1024

  return (
    <SectionBase>
      <div className="flex flex-wrap w-full justify-start">
        <h2 className="font-space text-5xl overline">{translation('allEpisodes')}</h2>
        <ul>
          {isLoading ? (<LoadingAnimation/>) : data?.map(episode => (
            <li key={episode.id}>
              <Link href={episode.link} target="_blank">
                <div
                  className="flex-row-16 p-8 my-8 w-full shadow-sm hover:border-solid hover:border-primary rounded-lg transition-all duration-500 border-dashed border-2 bg-surface text-on-surface">
                  <div className="w-3/4 max-tablet:!w-full">
                    <h3 className="font-space text-2xl font-bold">{episode.title}</h3>
                    <p className="text-description text-justify">published on {episode.date.toLocaleDateString('de-DE')}</p>
                    <p className="text-on-surface/90 text-justify">{episode.description}</p>
                  </div>
                  <Image
                    alt="Episode Thumbnail" src={episode.imageURL}
                    style={{ objectFit: 'cover' }} width={size} height={size}
                    className="max-tablet:hidden transition-all duration-500 shadow-md hover:shadow-2xl w-1/4 h-auto m-auto rounded-md"
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </SectionBase>
  )
}

export default EpisodeSection
