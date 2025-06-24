import './App.css'
import Banner from './components/banner'
import BestSeller from './components/best-seller'
import Follow from './components/follow'
import Footer from './components/footer'
import Header from './components/header'
import HotCategory from './components/hot-category'
import Logobar from './components/logobar'
import Newsletter from './components/newsletter'
import SeeCollection from './components/see-collection'
import './index.css'

function App() {

  return (
    <>
      <Header />
      <Banner />
      <Logobar />
      <HotCategory />
      <Newsletter />
      <SeeCollection />
      <BestSeller />
      <Follow />
      <Footer />
    </>
  )
}

export default App
