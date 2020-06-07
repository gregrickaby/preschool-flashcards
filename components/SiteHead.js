import PropTypes from 'prop-types'
import Head from 'next/head'

const SiteHead = (props) => (
  <Head>
    <title>{props.title}</title>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    <meta name="description" content={props.description} />
  </Head>
)

SiteHead.defeaultProps = {
  title: 'Kindergarten Flashcards',
  description: 'The alphabet, numbers, and fry (sight) words in flashcard form.'
}

SiteHead.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}

export default SiteHead
