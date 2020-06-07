import Slider from 'react-slick'
import Footer from '@/components/Footer'
import SiteHead from '@/components/SiteHead'
import data from '@/data/frywords.json'

const FryWords = () => {
  const slickSettings = {
    autoplay: true,
    dots: false,
    infinite: true,
    pauseOnFocus: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500
  }

  return (
    <div className="max-w-sm p-4 m-auto text-center">
      <SiteHead
        title="Fry Words - Kindergarten Flashcards"
        description="Fry Words in flashcard form."
      />
      <main>
        <Slider {...slickSettings}>
          {data.items.map((item, index) => (
            <p key={index} className="flashcard flashcard-word">
              {item.word}
            </p>
          ))}
        </Slider>
      </main>
      <Footer />
    </div>
  )
}

export default FryWords
