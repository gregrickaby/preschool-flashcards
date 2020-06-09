import Layout from '@/components/Layout'
import {CarouselProvider, Slider, Slide} from 'pure-react-carousel'
import CarouselButtons from '@/components/CarouselButtons'
import data from '@/data/shapes.json'

const FryWords = () => (
  <Layout>
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
      <CarouselButtons />
    </CarouselProvider>
  </Layout>
)

export default FryWords
