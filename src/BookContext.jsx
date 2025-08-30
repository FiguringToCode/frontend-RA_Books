import { createContext } from 'react'
import { useLocalStorage } from './useLocalStorage'


const BookContext = createContext()
export default BookContext

const initialBooks = [
  {id: 1, title: "Sapiens", author: "Yuval Noah Harari", status: false},
  {id: 2, title: "Fight Club", author: "Chuck Palahniuk", status: false},
  {id: 3, title: "Atomic Habits", author: "James Clear", status: false},
  {id: 4, title: "Children of Blood and Bone", author: "Tomi Adeyemi", status: false},
  {id: 5, title: "Crushing It!", author: "Gary Vaynerchuk", status: false},
  {id: 6, title: "The Metamorphosis", author: "Franz Kafka", status: false},
]

export const BookProvider = ({children}) => {

<<<<<<< HEAD
  const [books, setBooks] = useLocalStorage('books', initialBooks)
  
  // const [books, setBooks] = useState([])
=======
  const [books, setBooks] = useLocalStorage('books', [])
  
  // const [books, setBooks] = useState([])

  useEffect(() => {
  if (data && data.length === 0) {
    setBooks(data) //  set if only no local storage data exists
  }
}, [data])
>>>>>>> b9a8c42399d2a3a81dc0915fcf2260ee57a53bcb

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

  return (
      <BookContext.Provider value={{books, setBooks, removeBook, handleToggle}}>
        {children}
      </BookContext.Provider>
  )
}
