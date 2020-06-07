import Footer from '@/components/Footer'
import SiteHead from '@/components/SiteHead'
import Header from '@/components/Header'

const HomePage = () => (
  <div className="max-w-3xl p-4 m-auto text-center">
    <SiteHead />
    <Header />
    <main>Click a link above to get started.</main>
    <Footer />
  </div>
)

export default HomePage
