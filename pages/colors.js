import Footer from '@/components/Footer'
import SiteHead from '@/components/SiteHead'
import Slider from 'react-slick'
import data from '@/data/colors.json'
import config from '@/lib/config'

const FryWords = () => (
  <div className="max-w-xs pt-32 m-auto text-center">
    <SiteHead
      title={`Colors - ${config.siteName}`}
      description="Colors in flashcard form."
    />
    <main>
      <Slider {...config.slickSettings}>
        {data.items.map((item, index) => (
          <>
            <div key={index} className="flashcard">
              <div
                className="flashcard-color"
                style={{backgroundColor: item.hex}}
              />
              <span className="flashcard-description leading-tight tracking-tight">
                {item.name}
              </span>
            </div>
          </>
        ))}
      </Slider>
    </main>
    <Footer />
  </div>
)

export default FryWords
