import config from '@/lib/config'

const Header = () => (
  <header className="max-w-sm m-auto p-4">
    <img className="mx-auto" src="/favicon/apple-icon.png" alt="site logo" />
    <h1 className="mt-2 text-3xl font-bold leading-tight">{config.siteName}</h1>
    <p className="text-1xl my-4 italic">{config.siteDescription}</p>
  </header>
)

export default Header
