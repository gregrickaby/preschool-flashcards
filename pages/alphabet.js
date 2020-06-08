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
import config from '@/lib/config'
import data from '@/data/alphabet.json'

const Alphabet = () => (
  <div className="max-w-xs pt-10 m-auto text-center">
    <SiteHead
      title={`Alphabet - ${config.siteName}`}
      description="The alphabet in flashcard form."
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
        <ButtonBack className="text-3xl mr-12">&lsaquo;</ButtonBack>
        <ButtonPlay className="text-2xl">&#9654;</ButtonPlay>
        <ButtonNext className="text-3xl ml-12">&rsaquo;</ButtonNext>
      </CarouselProvider>
    </main>
  </div>
)

export default Alphabet
