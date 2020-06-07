const config = {
  siteName: 'Kindergarten Flashcards',
  siteDescription:
    'The alphabet, numbers shapes, colors, and fry (sight) words in flashcard form.',
  menu: [
    {label: 'Alphabet', href: '/alphabet'},
    {label: 'Numbers', href: '/numbers'},
    {label: 'Shapes', href: '/shapes'},
    {label: 'Colors', href: '/colors'},
    {label: 'Fry Words', href: '/fry-words'}
  ],
  slickSettings: {
    dots: false,
    infinite: true,
    pauseOnFocus: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500
  },
  social: {
    github: {
      label: 'Github',
      href: 'https://github.com/gregrickaby/kindergarten-flashcards'
    }
  }
}

export default config
