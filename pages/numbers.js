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
import data from '@/data/numbers.json'

const Numbers = () => (
  <div className="max-w-xs pt-32 m-auto text-center">
    <SiteHead
      title={`Numbers - ${config.siteName}`}
      description="Numbers in flashcard form."
    />
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
                className="flashcard leading-none tracking-tight m-0 p-0"
              >
                {item.number}
              </p>
              <span className="flashcard-description leading-tight tracking-tight">
                {item.spelling}
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

export default Numbers
