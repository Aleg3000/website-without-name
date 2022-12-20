import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MainPage } from './Pages/MainPage'
import { AboutPage } from './Pages/AboutPage'
import { NotFoundPage } from './Pages/404'
import './App.css'
import { Layout } from './Components/Layout'
import { ProjectsPage } from './Pages/ProjectsPage'
import { SingleProjectPage } from './Pages/SingleProjectPage'

function App () {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path='projects' element={<ProjectsPage />} />
          <Route path='projects/:id' element={<SingleProjectPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
