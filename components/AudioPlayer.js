import PropTypes from 'prop-types'

const AudioPlayer = (props) => <audio src={props.path} type="audio/mpeg" /> // eslint-disable-line

AudioPlayer.propTypes = {
  path: PropTypes.string
}

export default AudioPlayer
