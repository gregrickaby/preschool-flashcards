import Slider from 'react-slick'
import Footer from '@/components/Footer'
import SiteHead from '@/components/SiteHead'
import data from '@/data/shapes.json'

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
        title="Shapes - Kindergarten Flashcards"
        description="Shapes in flashcard form."
      />
      <main>
        <Slider {...slickSettings}>
          {data.items.map((item, index) => (
            <>
              <p key={index} className="flashcard">
                <object
                  className=" flashcard-shape"
                  type="image/svg+xml"
                  data={`/shapes/${item.file}`}
                  aria-label={item.name}
                />
              </p>
              <span className="flashcard-description">{item.name}</span>
            </>
          ))}
        </Slider>
      </main>
      <Footer />
    </div>
  )
}

export default FryWords
