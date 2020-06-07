import Slider from 'react-slick'
import Footer from '@/components/Footer'
import SiteHead from '@/components/SiteHead'
import data from '@/data/frywords.json'

const FryWords = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <div className="max-w-3xl p-4 m-auto text-center">
      <SiteHead
        title="Fry Words - Kindergarten Flashcards"
        description="Fry Words in flashcard form. Swipe right, or use the left/right arrow keys to navigate between words."
      />
      <main>
        <Slider {...settings}>
          {data.items.map((item, index) => (
            <p key={index} className="item item-word">
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
