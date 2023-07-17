import React from 'react'
// 포트폴리오 => 설계(제작) => 라우트설정
import ThemeContextProvider from './contexts/ThemeContextProvider'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Nav, Header, Footer } from './components'
import { Layout, PostLayout } from './Layouts'
import {
    About, Contact, Home, NotFound, PostDetail, Posts
} from './routes'
import './App.css'
const App = () => {
  return (
    <ThemeContextProvider>
        <BrowserRouter>
        <Header />
        <Routes>
            <Route  element={<Layout />}>
                <Route path="/" element={<Home />} />  
 
                {/* <Route path="/coins" element={ <Outlet /> }>
                    <Route index element={<Coins />} />  
                    <Route path=":id" element={<CoinDetail />} /> 
                </Route>

                <Route path="/products" element={<Products />} />  
                <Route path="/products/:name" element={<ProductDetail />} />  */}

                <Route  path="/posts" element={<PostLayout />}>
                    <Route index element={<Posts />} /> 
                    <Route path="post" element={<PostDetail />} />  
                </Route>

                {/* <Route  path="/host" element={<HostLayout />}>
                    <Route index element={<Dashboard />} /> 
                    <Route path="income" element={<Income />} /> 
                    <Route path="reviews" element={<Reviews />} /> 
                </Route> */}

                <Route path="/about" element={<About />} /> 
                <Route path="/contact" element={<Contact />} /> 
                <Route path="/*" element={<NotFound />} /> 
            </Route>
        </Routes>
        <Footer />
    </BrowserRouter>
    </ThemeContextProvider>
  )
}

export default App