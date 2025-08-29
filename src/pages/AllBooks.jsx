import { useContext } from "react"
import BookContext from "../BookContext"


export const AllBooks = () => {
  const {books, setBooks, removeBook, handleToggle} = useContext(BookContext)
  const booksRead = books.filter(book => book.status)
  const booksUnread = books.filter(book => !book.status)
  console.log(books)

  return (
    <>
      <div className="container my-4">
        <span className="d-flex justify-content-between py-3">
            <h1>Book List</h1>
            <div>Read {booksRead.length} | Unread {booksUnread.length} | Total Books {books.length}</div>
        </span>
        <div>
          <ul className="list-group w-lg-50">
            {books.map((book) => (
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