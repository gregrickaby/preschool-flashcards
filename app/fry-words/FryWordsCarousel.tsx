'use client'

import {CarouselProvider, Slider, Slide} from 'pure-react-carousel'
import CarouselButtons from '@/components/CarouselButtons'
import randomizeArray from '@/lib/randomize'
import data from '@/data/frywords.json'

export default function FryWordsCarousel() {
  const words = randomizeArray([...data.items])

  return (
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
            <p className="flashcard flashcard-word leading-snug tracking-tight">
              {item.word}
            </p>
          </Slide>
        ))}
      </Slider>
      <CarouselButtons />
    </CarouselProvider>
  )
}
