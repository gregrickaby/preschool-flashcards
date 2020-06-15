import PropTypes from 'prop-types'

const AudioPlayer = (props) => (
  <audio>
    <source src={props.path} type="audio/mpeg" />
  </audio>
)

AudioPlayer.propTypes = {
  path: PropTypes.object
}

export default AudioPlayer
