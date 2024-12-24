import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Home'
import Signin from './Pages/Auth/Signin'
import Signup from './Pages/Auth/Signup'
import Readblog from './Pages/Content/Read/readBlog'
import Writeblog from './Pages/Content/Write/writeBlog'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/readBlog/:id" element={<Readblog />} />
        <Route path="/writeBlog" element={<Writeblog />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
