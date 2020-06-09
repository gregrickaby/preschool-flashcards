import {ButtonPlay, ButtonBack, ButtonNext} from 'pure-react-carousel'

const CarouselButtons = () => (
  <>
    <ButtonBack className="text-4xl mr-12">
      <span role="img" aria-label="back">
        ⏪
      </span>
    </ButtonBack>
    <ButtonPlay className="text-4xl">
      <span role="img" aria-label="play or pause">
        ⏯
      </span>
    </ButtonPlay>
    <ButtonNext className="text-4xl ml-12">
      <span role="img" aria-label="forward">
        ⏩
      </span>
    </ButtonNext>
  </>
)

export default CarouselButtons
