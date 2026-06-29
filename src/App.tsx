import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './component/Home'
import Navbar from './component/Navbar'
import About from './component/About'
import Projects from './component/Projects'
import WhatWeDo from './component/WhatWeDo'
import WhySolar from './component/WhySolar'
import News from './component/News'
import Promos from './component/Promos'
import Blogs from './component/Blogs'
import Faqs from './component/Faqs'
import ContactUs from './component/ContactUs'
import FreeQuotes from './component/FreeQuote'

function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/why-solar" element={<WhySolar />} />
        <Route path="/news" element={<News />} />
        <Route path="/promos" element={<Promos />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/free-quote" element={<FreeQuotes />} />
      </Routes>

    </>
  )
}

export default App
