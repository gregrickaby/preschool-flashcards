import Footer from '@/components/Footer'
import SiteHead from '@/components/SiteHead'
import Slider from 'react-slick'
import data from '@/data/colors.json'
import config from '@/lib/config'

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
        title={`Colors - ${config.siteName}`}
        description="Colors in flashcard form."
      />
      <main>
        <Slider {...slickSettings}>
          {data.items.map((item, index) => (
            <>
              <div key={index} className="flashcard">
                <div
                  className="flashcard-color"
                  style={{backgroundColor: item.hex}}
                />
                <span className="flashcard-description">{item.name}</span>
              </div>
            </>
          ))}
        </Slider>
      </main>
      <Footer />
    </div>
  )
}

export default FryWords
