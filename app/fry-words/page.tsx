import type {Metadata} from 'next'
import Layout from '@/components/Layout'
import FryWordsCarousel from './FryWordsCarousel'

export const metadata: Metadata = {
  title: 'Fry Words',
  description: 'Fry (sight) words in flashcard form.'
}

export default function FryWordsPage() {
  return (
    <Layout>
      <FryWordsCarousel />
    </Layout>
  )
}
