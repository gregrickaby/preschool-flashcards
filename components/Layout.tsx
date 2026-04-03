import type {ReactNode} from 'react'
import BackButton from '@/components/BackButton'

interface Props {
  children: ReactNode
}

const Layout = ({children}: Props) => (
  <div className="max-w-xs pt-12 m-auto text-center">
    <BackButton />
    <main>{children}</main>
  </div>
)

export default Layout
