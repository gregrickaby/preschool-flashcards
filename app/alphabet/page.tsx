import type {Metadata} from 'next'
import Layout from '@/components/Layout'
import AlphabetCarousel from './AlphabetCarousel'

export const metadata: Metadata = {
  title: 'ABCs',
  description: 'The alphabet in flashcard form.'
}

export default function AlphabetPage() {
  return (
    <Layout>
      <AlphabetCarousel />
    </Layout>
  )
}
