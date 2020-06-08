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
import data from '@/data/shapes.json'
import config from '@/lib/config'

const FryWords = () => (
  <div className="max-w-xs pt-10 m-auto text-center">
    <SiteHead
      title={`Shapes - ${config.siteName}`}
      description="Shapes in flashcard form."
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
        totalSlides={6}
        visibleSlides={1}
      >
        <Slider>
          {data.items.map((item, index) => (
            <Slide key={index} index={index}>
              <p key={index} className="flashcard">
                <object
                  className="flashcard-shape m-auto"
                  type="image/svg+xml"
                  data={`/shapes/${item.file}`}
                  aria-label={item.name}
                />
              </p>
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
