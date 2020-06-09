import Link from 'next/link'

const BackButton = () => (
  <>
    <Link href="/">
      <a className="fixed top-0 left-0 pt-1 pl-4 text-4xl">&larr;</a>
    </Link>
  </>
)

export default BackButton
