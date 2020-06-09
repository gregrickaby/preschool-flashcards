import Link from 'next/link'
import SiteHead from '@/components/SiteHead'
import {CarouselProvider, Slider, Slide} from 'pure-react-carousel'
import CarouselButtons from '@/components/CarouselButtons'
import config from '@/lib/config'
import data from '@/data/frywords.json'

const FryWords = () => (
  <div className="max-w-xs pt-10 m-auto text-center">
    <SiteHead
      title={`Fry Words - ${config.siteName}`}
      description="Fry Words in flashcard form."
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
        totalSlides={100}
        visibleSlides={1}
      >
        <Slider>
          {data.items.map((item, index) => (
            <Slide key={index} index={index}>
              <p
                key={index}
                className="flashcard flashcard-word leading-snug tracking-tight"
              >
                {item.word}
              </p>
            </Slide>
          ))}
        </Slider>
        <CarouselButtons />
      </CarouselProvider>
    </main>
  </div>
)

export default FryWords
