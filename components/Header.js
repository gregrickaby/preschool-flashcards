import config from '@/lib/config'

const Header = () => (
  <header className="max-w-sm m-auto p-4">
    <h1 className="text-3xl font-bold leading-tight">{config.siteName}</h1>
    <p className="text-1xl my-4 italic">{config.siteDescription}</p>
  </header>
)

export default Header
