import Footer from '@/components/Footer'
import SiteHead from '@/components/SiteHead'
import Slider from 'react-slick'
import config from '@/lib/config'
import data from '@/data/numbers.json'

const Numbers = () => (
  <div className="max-w-xs pt-32 m-auto text-center">
    <SiteHead
      title={`Numbers - ${config.siteName}`}
      description="Numbers in flashcard form."
    />
    <main>
      <Slider {...config.slickSettings}>
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

export default Numbers
