import {NavLink} from 'react-router-dom'
import {useContext} from 'react'
import BookContext from '../BookContext'

export const Nav = () => {
  const {books} = useContext(BookContext)
  const booksInArray = books.filter(book => book.status)

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="/">Personal Library</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="justify-content-end collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link" to={"/"}>All Books</NavLink>
            <NavLink className="nav-link" to={"/bookForm"}>Add Books</NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}