import Layout from '@/components/Layout'
import {CarouselProvider, Slider, Slide} from 'pure-react-carousel'
import CarouselButtons from '@/components/CarouselButtons'
import data from '@/data/alphabet.json'
import AudioPlayer from '@/components/AudioPlayer'

const Alphabet = () => (
  <Layout>
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
            <AudioPlayer path={item.audio_path} />
          </Slide>
        ))}
      </Slider>
      <CarouselButtons />
    </CarouselProvider>
  </Layout>
)

export default Alphabet
