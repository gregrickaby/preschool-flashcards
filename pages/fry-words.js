import Layout from '@/components/Layout'
import {CarouselProvider, Slider, Slide} from 'pure-react-carousel'
import CarouselButtons from '@/components/CarouselButtons'
import data from '@/data/frywords.json'

const FryWords = () => {
  // Randomize an array using Durstenfield Shuffle.
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }

    return array
  }

  const words = shuffleArray(data.items)

  return (
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
          {words.map((item, index) => (
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
}

export default FryWords
