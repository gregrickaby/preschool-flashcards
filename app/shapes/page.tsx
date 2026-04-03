import type {Metadata} from 'next'
import Layout from '@/components/Layout'
import ShapesCarousel from './ShapesCarousel'

export const metadata: Metadata = {
  title: 'Shapes',
  description: 'Shapes in flashcard form.'
}

export default function ShapesPage() {
  return (
    <Layout>
      <ShapesCarousel />
    </Layout>
  )
}
