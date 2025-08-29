import { useState } from 'react'
// import './App.css'
import { BookProvider } from './BookContext'
import { Nav } from './components/Nav'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AllBooks } from './pages/AllBooks'
import { AddBookForm } from './pages/BookForm'

function App() {

  return (
    <>
      <BookProvider>
        <Router>
          <Nav />
          <Routes>
            <Route path={"/"} element={<AllBooks />}></Route>
            <Route path={"/bookForm"} element={<AddBookForm />}>Book Form</Route>
          </Routes>
        </Router>
      </BookProvider>
    </>
  )
}

export default App
