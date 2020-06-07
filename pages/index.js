import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Link from 'next/link'
import SiteHead from '@/components/SiteHead'

const HomePage = () => (
  <div className="max-w-3xl p-4 m-auto text-center">
    <SiteHead />
    <Header />
    <main>
      <div className="grid sm:grid-cols-3 gap-8">
        <div className="border rounded-lg py-12 text-xl text-center hover:bg-gray-300">
          <Link href="/alphabet">
            <a>ABCs</a>
          </Link>
        </div>
        <div className="border rounded-lg py-12 text-xl text-center hover:bg-gray-300">
          <Link href="/numbers">
            <a>123s</a>
          </Link>
        </div>
        <div className="border rounded-lg py-12 text-xl text-center hover:bg-gray-300">
          <Link href="/shapes">
            <a>Shapes</a>
          </Link>
        </div>
        <div className="border rounded-lg py-12 text-xl text-center hover:bg-gray-300">
          <Link href="/colors">
            <a>Colors</a>
          </Link>
        </div>
        <div className="border rounded-lg py-12 text-xl text-center hover:bg-gray-300">
          <Link href="/fry-words">
            <a>Words</a>
          </Link>
        </div>
      </div>
    </main>
    <Footer />
  </div>
)

export default HomePage
