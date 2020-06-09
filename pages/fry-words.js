import Layout from '@/components/Layout'
import {CarouselProvider, Slider, Slide} from 'pure-react-carousel'
import CarouselButtons from '@/components/CarouselButtons'
import data from '@/data/frywords.json'

const FryWords = () => (
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
              className="flashcard flashcard-word leading-snug tracking-tight"
            >
              {item.word}
            </p>
          </Slide>
        ))}
      </Slider>
      <CarouselButtons />
    </CarouselProvider>
  </Layout>
)

export default FryWords
