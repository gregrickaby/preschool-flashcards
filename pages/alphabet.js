import SiteHead from '@/components/SiteHead'
import BackButton from '@/components/BackButton'
import {CarouselProvider, Slider, Slide} from 'pure-react-carousel'
import CarouselButtons from '@/components/CarouselButtons'
import config from '@/lib/config'
import data from '@/data/alphabet.json'

const Alphabet = () => (
  <div className="max-w-xs pt-10 m-auto text-center">
    <SiteHead
      title={`Alphabet - ${config.siteName}`}
      description="The alphabet in flashcard form."
    />
    <BackButton />
    <main>
      <CarouselProvider
        infinite={true}
        interval={3000}
        lockOnWindowScroll={true}
        naturalSlideHeight={200}
        naturalSlideWidth={200}
        totalSlides={26}
        visibleSlides={1}
      >
        <Slider>
          {data.items.map((item, index) => (
            <Slide key={index} index={index}>
              <p className="flashcard leading-tight tracking-tight m-0 p-0">
                {item.letter}
                <span className="flashcard-description flashcard-lowercase leading-tight tracking-tight">
                  {item.lowercase}
                </span>
              </p>
            </Slide>
          ))}
        </Slider>
        <CarouselButtons />
      </CarouselProvider>
    </main>
  </div>
)

export default Alphabet
