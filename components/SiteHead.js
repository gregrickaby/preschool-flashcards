import config from '@/lib/config'
import Head from 'next/head'
import PropTypes from 'prop-types'

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

SiteHead.defaultProps = {
  title: config.siteName,
  description: config.siteDescription
}

SiteHead.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}

export default SiteHead
