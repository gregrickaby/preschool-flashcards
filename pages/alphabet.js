import Footer from '@/components/Footer'
import SiteHead from '@/components/SiteHead'
import Slider from 'react-slick'
import data from '@/data/alphabet.json'

const Alphabet = () => {
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
    <div className="max-w-xs pt-32 m-auto text-center">
      <SiteHead
        title="Alphabet - Kindergarten Flashcards"
        description="The alphabet in flashcard form."
      />
      <main>
        <Slider {...slickSettings}>
          {data.items.map((item, index) => (
            <p key={index} className="flashcard leading-none m-0 p-0">
              {item.letter}
            </p>
          ))}
        </Slider>
      </main>
      <Footer />
    </div>
  )
}

export default Alphabet
