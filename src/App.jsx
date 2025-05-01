import './App.css'
import Header from './components/header'
import ProductCard from './components/productCard';

function App() {
  

  return (
    <>
     <Header/>
     <ProductCard name="One Hike" description="lorem djjd ueekj eksjr" price="1000" picture="https://picsum.photos/200/300/?blur"/>
     <ProductCard name="Two Hike" description="lorem djjd ueekj eksjr" price="1000" picture="https://picsum.photos/200/300/?blur=2"/>
     
    </>
  )
}

export default App
