import Footer from '@/components/Footer'
import SiteHead from '@/components/SiteHead'
import Slider from 'react-slick'
import config from '@/lib/config'
import data from '@/data/alphabet.json'

const Alphabet = () => (
  <div className="max-w-xs pt-32 m-auto text-center">
    <SiteHead
      title={`Alphabet - ${config.siteName}`}
      description="The alphabet in flashcard form."
    />
    <main>
      <Slider {...config.slickSettings}>
        {data.items.map((item, index) => (
          <p
            key={index}
            className="flashcard leading-tight tracking-tight m-0 p-0"
          >
            {item.letter}
            <span className="flashcard-description flashcard-lowercase leading-tight tracking-tight">
              {item.lowercase}
            </span>
          </p>
        ))}
      </Slider>
    </main>
    <Footer />
  </div>
)

export default Alphabet
