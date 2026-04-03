import type {Metadata} from 'next'
import Layout from '@/components/Layout'
import NumbersCarousel from './NumbersCarousel'

export const metadata: Metadata = {
  title: '123s',
  description: 'Numbers in flashcard form.'
}

export default function NumbersPage() {
  return (
    <Layout>
      <NumbersCarousel />
    </Layout>
  )
}
