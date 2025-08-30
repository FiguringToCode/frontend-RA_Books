import { useLocalStorage } from '../useLocalStorage'

export const AddBookForm = () => {
  const [formData, setFormData] = useLocalStorage('bookForm', {
    id: "",
    title: "",
    author: "",
    status: false
  })

  const handleChange = (event) => {
    const { name, value, type } = event.target
    const newValue = type === "radio" ? (value === "true") : value

    setFormData((prevState) => ({
      ...prevState,
      [name]: newValue
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    console.log("Form data saved in localStorage:", formData);

    setFormData({
      title: "",
      author: "",
      status: false
    })
  }

  return (
    <>
      <div className="container my-4">
        <h2>Book Form</h2>
        <form onSubmit={handleSubmit}>
          <label>Book Title: </label><br />
          <input className='w-25 border border-2' type='text' name='title' value={formData.title} onChange={handleChange} /><br /><br />

          <label>Book Author: </label><br />
          <input className='w-25 border border-2' type='text' name='author' value={formData.author} onChange={handleChange} /><br /><br />

          <label>Book Status: </label><br />
          <input type="radio" value="true" name='status' onChange={handleChange} checked={formData.status === true} /> Read
          <input type="radio" className='ms-2' value="false" name='status' onChange={handleChange} checked={formData.status === false} /> Unread<br /><br />

          <button className='btn btn-success' type='submit'>Submit</button>
        </form>
      </div>
    </>
  )
}
