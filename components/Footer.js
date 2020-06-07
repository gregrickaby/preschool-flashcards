import Link from 'next/link'

const Footer = () => (
  <footer className="absolute bottom-0 right-0 left-0 border-t bg-white">
    <section className="flex flex-col justify-center items-center py-2">
      <Link href="/">
        <a>&larr; Back</a>
      </Link>
    </section>
  </footer>
)

export default Footer
