import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'

function Layout() {
  return (
    <>
      <Header name="Batyr" role="Web Developer" />
      <main>
        <Outlet />
      </main>
      <Footer text="Batyr. All rights reserved." />
    </>
  )
}

export default Layout