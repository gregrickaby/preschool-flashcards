import Footer from '@/components/Footer'
import SiteHead from '@/components/SiteHead'
import Slider from 'react-slick'
import config from '@/lib/config'
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
    <div className="max-w-xs pt-32 m-auto text-center">
      <SiteHead
        title={`Fry Words - ${config.siteName}`}
        description="Fry Words in flashcard form."
      />
      <main>
        <Slider {...slickSettings}>
          {data.items.map((item, index) => (
            <p key={index} className="flashcard flashcard-word leading-snug">
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
