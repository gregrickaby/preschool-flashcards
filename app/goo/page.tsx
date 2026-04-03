import type {Metadata} from 'next'
import Layout from '@/components/Layout'
import GooView from './GooView'

export const metadata: Metadata = {
  title: 'Goo!',
  description: 'A gooey interactive effect.'
}

export default function GooPage() {
  return (
    <Layout>
      <GooView />
    </Layout>
  )
}
