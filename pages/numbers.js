import Layout from '@/components/Layout'
import {CarouselProvider, Slider, Slide} from 'pure-react-carousel'
import CarouselButtons from '@/components/CarouselButtons'
import data from '@/data/numbers.json'

const Numbers = () => (
  <Layout>
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
      <CarouselButtons />
    </CarouselProvider>
  </Layout>
)

export default Numbers
