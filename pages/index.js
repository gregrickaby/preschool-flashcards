import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Link from 'next/link'
import SiteHead from '@/components/SiteHead'

const HomePage = () => (
  <div className="max-w-3xl m-auto text-center">
    <SiteHead />
    <Header />
    <main className="p-4">
      <div className="grid sm:grid-cols-3 gap-6">
        <div className="border rounded-lg py-4 text-xl text-center hover:bg-gray-300">
          <Link href="/alphabet">
            <a>ABCs</a>
          </Link>
        </div>
        <div className="border rounded-lg py-4 text-xl text-center hover:bg-gray-300">
          <Link href="/numbers">
            <a>123s</a>
          </Link>
        </div>
        <div className="border rounded-lg py-4 text-xl text-center hover:bg-gray-300">
          <Link href="/shapes">
            <a>Shapes</a>
          </Link>
        </div>
        <div className="border rounded-lg py-4 text-xl text-center hover:bg-gray-300">
          <Link href="/colors">
            <a>Colors</a>
          </Link>
        </div>
        <div className="border rounded-lg py-4 text-xl text-center hover:bg-gray-300">
          <Link href="/fry-words">
            <a>Fry Words</a>
          </Link>
        </div>
      </div>
      <p className="my-12">
        Click a box above to get started. You can swipe, click, or use the arrow
        keys to control the flashcards.
      </p>
    </main>
    <Footer />
  </div>
)

export default HomePage
