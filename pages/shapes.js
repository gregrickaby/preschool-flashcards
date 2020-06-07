import Footer from '@/components/Footer'
import SiteHead from '@/components/SiteHead'
import Slider from 'react-slick'
import data from '@/data/shapes.json'
import config from '@/lib/config'

const FryWords = () => (
  <div className="max-w-xs pt-32 m-auto text-center">
    <SiteHead
      title={`Shapes - ${config.siteName}`}
      description="Shapes in flashcard form."
    />
    <main>
      <Slider {...config.slickSettings}>
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
            <span className="flashcard-description leading-tight tracking-tight">
              {item.name}
            </span>
          </>
        ))}
      </Slider>
    </main>
    <Footer />
  </div>
)

export default FryWords
