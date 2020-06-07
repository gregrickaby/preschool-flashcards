import Slider from 'react-slick'
import Footer from '@/components/Footer'
import SiteHead from '@/components/SiteHead'
import data from '@/data/numbers.json'

const Numbers = () => {
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
        title="Numbers - Kindergarten Flashcards"
        description="Numbers in flashcard form."
      />
      <main>
        <Slider {...slickSettings}>
          {data.items.map((item, index) => (
            <>
              <p key={index} className="flashcard leading-none m-0 p-0">
                {item.number}
              </p>
              <span className="flashcard-description">{item.spelling}</span>
            </>
          ))}
        </Slider>
      </main>
      <Footer />
    </div>
  )
}

export default Numbers
