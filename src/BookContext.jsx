import { createContext } from 'react'
import { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import { useLocalStorage } from './useLocalStorage'


const BookContext = createContext()
export default BookContext


export const BookProvider = ({children}) => {
  const { data, loading, error } = useFetch('https://backend-ra-books.vercel.app/books')

  const [books, setBooks] = useLocalStorage('books', [])
  
  // const [books, setBooks] = useState([])

  useEffect(() => {
    if (data && books.length === 0) setBooks(data)
  }, [data])

  const removeBook = (bookId) => {
    const updatedBooks = books.filter((book) => book._id !== bookId);
    setBooks(updatedBooks);
  };


  const handleToggle = (bookId) => {
    const updatedBooks = books.map((book) =>
      book._id === bookId ? { ...book, status: !book.status } : book
    );
    setBooks(updatedBooks);
  };

  loading && (<div>Loading...</div>)
  error && (<div>Error occured while loading books.</div>)

  return (
      <BookContext.Provider value={{books, setBooks, removeBook, handleToggle, loading, error}}>
        {children}
      </BookContext.Provider>
  )
}
