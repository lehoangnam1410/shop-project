import './App.css'
import './index.css'
import Header from './components/header'
import Banner from './components/banner'
import ProductList from './components/product-list'
import ProductShowcase from './components/product-showcase'
import Newsletter from './components/newsletter'
import HeroSection from './components/herosection'
import Logobar from './components/logobar'

function App() {

  return (
    <>
      <Header />
      <HeroSection />
      <Banner />
      <Logobar />
      <ProductList />
      <ProductShowcase />
      <Newsletter />
    </>
  )
}

export default App
