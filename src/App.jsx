import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Article1 from './pages/article/Article1'
import Article2 from './pages/article/Article2'
import Article3 from './pages/article/Article3'
import Layout from './layout/Layout'

function App() {
  

  return (
    <>
    <Layout>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/1" element={<Article1 />} />
        <Route path="/article/2" element={<Article2 />} />
        <Route path="/article/3" element={<Article3 />} />
      </Routes>
    </Layout>
     
    </>
  )
}

export default App
