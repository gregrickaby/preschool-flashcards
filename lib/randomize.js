import PropTypes from 'prop-types'

/**
 * Randomize an array using the Durstenfeld shuffle.
 *
 * @param {array}  array  Any array that needs to be randomized.
 * @return {array}        The randomized array.
 */
export default function randomizeArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }

  return array
}

randomizeArray.propTypes = {
  array: PropTypes.array.isRequired
}
