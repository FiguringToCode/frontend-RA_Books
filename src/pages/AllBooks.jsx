import { useContext, useState } from "react"
import BookContext from "../BookContext"


export const AllBooks = () => {
  const {books, loading, error, removeBook, handleToggle} = useContext(BookContext)
  const booksRead = books.filter(book => book.status)
  const booksUnread = books.filter(book => !book.status)
  const [statusFilter, setStatusFilter] = useState('All')
  const filteredStatus = statusFilter === "All" ? books : books.filter(book => String(book.status) === statusFilter)
  console.log(books)

  return (
    <>
      <div className="container my-4">
        <span className="d-flex justify-content-between py-3">
            <h1>Book List</h1>
            <div>
              <select className="border rounder-2 px-3 py-1" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                <option value="All">All Books</option>
                <option value="true">Read</option>
                <option value="false">Unread</option>
              </select>
            </div>
            <div>Read {booksRead.length} | Unread {booksUnread.length} | Total Books {books.length}</div>
        </span>
        <div>
          {error && <p>No Books Found</p>}
          {loading && <p>Loading....</p>}
          <ul className="list-group w-lg-50">
            {filteredStatus.map((book) => (
              <li key={book._id} className="list-group-item d-flex justify-content-between">
                <span>
                  <h3>{book.title}</h3>By  {book.author}
                </span>
                <span>
                  <button style={{backgroundColor: book.status ? "lightgreen" : 'tomato', color: "white"}} className="btn border border-2 mx-2" onClick={() => handleToggle(book._id)}>{book.status ? 'Read' : 'Unread'}</button>
                  <button style={{backgroundColor: "tomato", color: "white"}} className="btn border border-2 mx-2" onClick={() => removeBook(book._id)}>Delete</button>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
