import type {Metadata} from 'next'
import Layout from '@/components/Layout'
import ColorsCarousel from './ColorsCarousel'

export const metadata: Metadata = {
  title: 'Colors',
  description: 'Colors in flashcard form.'
}

export default function ColorsPage() {
  return (
    <Layout>
      <ColorsCarousel />
    </Layout>
  )
}
