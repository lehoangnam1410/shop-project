import './App.css'
import Banner from './components/banner'
import Header from './components/header'
import Logobar from './components/logobar'
import Newsletter from './components/newsletter'
import ProductList from './components/product-list'
import HotCategory from './components/hot-category'
import './index.css'

function App() {

  return (
    <>
      <Header />
      <Banner />
      <Logobar />
      <HotCategory />
      <ProductList />
      <Newsletter />
    </>
  )
}

export default App
