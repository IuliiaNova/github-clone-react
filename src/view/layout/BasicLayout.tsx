import { Suspense, lazy} from 'react'
import { Outlet } from 'react-router-dom'
import './basicLayout.scss'

const Header = lazy(() => import('../components/Header/Header'))
const Sidebar = lazy(() => import('../components/Sidebar/Sidebar'))

const BasicLayout = () => {
  return (
    <Suspense fallback={<></>}>
      <>
      <Sidebar/>
      <Header />
      </>
      <main className='basic-layout__main'>
        <div className='basic-layout__main--content'>
          <Outlet />
        </div>
      </main>
    </Suspense>
  )
}

export default BasicLayout