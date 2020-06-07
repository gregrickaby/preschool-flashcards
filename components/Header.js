import Link from 'next/link'

const Header = () => (
  <header id="header" className="max-w-sm m-auto">
    <h1 className="text-4xl mb-4">Kindergarten Flashcards</h1>
    <p className="text-1xl mb-4">
      The alphabet, numbers, and fry (sight) words in flashcard form.
    </p>
    <nav className="mb-4">
      <ul className="flex flex-wrap space-x-4 justify-center">
        <li>
          <Link href="/alphabet">
            <a>Alphabet</a>
          </Link>
        </li>
        <li>
          <Link href="/numbers">
            <a>Numbers</a>
          </Link>
        </li>
        <li>
          <Link href="/fry-words">
            <a>Fry Words</a>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
