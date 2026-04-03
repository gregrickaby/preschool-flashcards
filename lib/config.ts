interface MenuItem {
  label: string
  href: string
}

interface Config {
  siteName: string
  siteDescription: string
  siteUrl: string
  author: string
  menu: MenuItem[]
  social: {
    github: {
      label: string
      href: string
    }
  }
}

const config: Config = {
  siteName: 'Preschool Flashcards',
  siteDescription:
    'The alphabet, numbers shapes, colors, and fry (sight) words in flashcard form.',
  siteUrl: 'https://flashcards.gregrickaby.com/',
  author: '@gregrickaby',
  menu: [
    {label: 'ABCs', href: '/alphabet'},
    {label: '123s', href: '/numbers'},
    {label: 'Shapes', href: '/shapes'},
    {label: 'Colors', href: '/colors'},
    {label: 'Fry Words', href: '/fry-words'},
    {label: 'Goo!', href: '/goo'}
  ],
  social: {
    github: {
      label: 'Github',
      href: 'https://github.com/gregrickaby/kindergarten-flashcards'
    }
  }
}

export default config
