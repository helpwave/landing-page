import type { TextImageProps } from '@helpwave/hightide'
import { Carousel, Dialog, MarkdownInterpreter } from '@helpwave/hightide'
import { useState } from 'react'
import Scrollbars from 'react-custom-scrollbars-2'
import { SectionBase } from '@/components/sections/SectionBase'
import { TextImage } from '@/components/TextImage'
import { useLandingPageTranslation } from '@/i18n/useLandingPageTranslation'

/**
 * A Section for showing steps need for Digitalization
 */
export const StepsToDigitalizationSection = () => {
  const translation = useLandingPageTranslation()
  const [modalValue, setModalValue] = useState<{ titleText: string, description: string }>()
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const items: TextImageProps[] = [
    {
      badge: `${translation('step')} #1`,
      title: translation('section.digitalization.step1Title'),
      description: translation('section.digitalization.step1Description'),
      // make attribution https://www.freepik.com/free-photo/doctors-looking-laptop-while-sitting_5480800.htm#fromView=search&page=1&position=38&uuid=4c39262c-c1b1-4f11-a15e-7446ad1974d3
      imageUrl: 'https://cdn.helpwave.de/landing_page/doctors_discussing.jpg',
      color: 'primary',
    },
    {
      badge: `${translation('step')} #2`,
      title: translation('section.digitalization.step2Title'),
      description: translation('section.digitalization.step2Description'),
      // make attribution https://www.freepik.com/free-photo/wide-shot-huge-tree-trunk-near-lake-surrounded-by-trees-blue-sky_7841618.htm#fromView=search&page=1&position=0&uuid=0752105f-3120-4f34-b3b7-48dd4a616223
      imageUrl: 'https://cdn.helpwave.de/landing_page/lake.jpg',
      color: 'secondary',
    },
    {
      badge: `${translation('step')} #3`,
      title: translation('section.digitalization.step3Title'),
      description: translation('section.digitalization.step3Description'),
      // make attribution https://www.freepik.com/free-vector/infographic-dashboard-element-set_6209714.htm#fromView=search&page=1&position=45&uuid=12db1ee2-bec5-40ce-a317-5d240ad56f12
      imageUrl: 'https://cdn.helpwave.de/landing_page/dashboard.jpg',
      color: 'dark',
    },
  ]

  return (
    <SectionBase className="flex-col-8 w-full !max-w-[1600px]" outerClassName="!px-0">
      <div className="flex-col-2 items-center text-center">
        <h2 className="typography-title-lg"><MarkdownInterpreter text={translation('section.digitalization.title')}/></h2>
        <span className="typography-title-sm"><MarkdownInterpreter text={translation('section.digitalization.description')}/></span>
      </div>
      <Carousel
        hintNext={true}
        isLooping={true}
        isAutoPlaying={true}
        heightClassName="h-[24rem] tablet:max-desktop:h-[19rem]"
        slideClassName="w-1/2 max-tablet:w-[75%]"
        onSlideChanged={setCurrentIndex}
      >
        {items.map((value, index) => (
          <div
            key={index}
            className="mx-[2.5%] h-full border-4 rounded-2xl border-transparent group-focus-within/slide:border-black group-focus-within/slide:dark:border-white"
          >
            <TextImage
              {...value}
              disableMoreClick={currentIndex !== index}
              onShowMoreClicked={() => {
                setModalValue({
                  titleText: value.title,
                  description: value.description
                })
              }}
              className="h-full overflow-hidden"
            />
          </div>
        ))}
      </Carousel>
      <Dialog
        isOpen={modalValue !== undefined}
        titleElement={modalValue?.titleText}
        description={null}
        onClose={() => setModalValue(undefined)}
        className="max-w-64"
      >
        <Scrollbars autoHeightMax={500} autoHeight={true}>
          {modalValue?.description}
        </Scrollbars>
      </Dialog>
    </SectionBase>
  )
}
