import Link from 'next/link'
import SiteHead from '@/components/SiteHead'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonPlay,
  ButtonBack,
  ButtonNext
} from 'pure-react-carousel'
import data from '@/data/colors.json'
import config from '@/lib/config'

const FryWords = () => (
  <div className="max-w-xs pt-32 m-auto text-center">
    <SiteHead
      title={`Colors - ${config.siteName}`}
      description="Colors in flashcard form."
    />
    <Link href="/">
      <a className="fixed top-0 left-0 pt-4 pl-4 text-xl">&larr;</a>
    </Link>
    <main>
      <CarouselProvider
        infinite={true}
        interval={3000}
        lockOnWindowScroll={true}
        naturalSlideHeight={200}
        naturalSlideWidth={200}
        totalSlides={10}
        visibleSlides={1}
      >
        <Slider>
          {data.items.map((item, index) => (
            <Slide key={index} index={index}>
              <div
                className="flashcard-color m-auto"
                style={{backgroundColor: item.hex}}
              />
              <span className="flashcard-description leading-tight tracking-tight">
                {item.name}
              </span>
            </Slide>
          ))}
        </Slider>
        <ButtonBack className="text-3xl mr-12">&lsaquo;</ButtonBack>
        <ButtonPlay className="text-2xl">&#9654;</ButtonPlay>
        <ButtonNext className="text-3xl ml-12">&rsaquo;</ButtonNext>
      </CarouselProvider>
    </main>
  </div>
)

export default FryWords
