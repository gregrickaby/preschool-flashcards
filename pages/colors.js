import Layout from '@/components/Layout'
import {CarouselProvider, Slider, Slide} from 'pure-react-carousel'
import CarouselButtons from '@/components/CarouselButtons'
import data from '@/data/colors.json'

const Colors = () => (
  <Layout>
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
      <CarouselButtons />
    </CarouselProvider>
  </Layout>
)

export default Colors
