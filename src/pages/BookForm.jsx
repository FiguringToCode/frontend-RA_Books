import {useState} from 'react'

export const AddBookForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    status: false
  })

  const handleChange = (event) => {
    const {name, value, type} = event.target
    const newValue = type === "radio" ? (value === "true") : value

    setFormData((prevState) => ({
      ...prevState,
      [name]: newValue
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    
    try {
        const response = await fetch("https://backend-ra-books.vercel.app/books", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        })

        console.log("Status: ", response.status)
        if(!response.ok){
            throw new Error("Failed to add book details")
        }

        const data = await response.json()
        console.log("Added Book: ", data)
        {window.location.reload()}

    } catch (error) {
        console.error("Error:", error)
        console.log("Failed to make a POST call.")
    }
  }

  return (
    <>
        <div className="container my-4">
            <h2>Book Form</h2>
            <form onSubmit={handleSubmit}>
                <label>Book Title: </label><br />
                <input className='w-25 border border-2 ' type='text' name='title' value={formData.title} onChange={handleChange} /><br /><br />

                <label>Book Author: </label><br />
                <input className='w-25 border border-2 ' type='text' name='author' value={formData.author} onChange={handleChange} /><br /><br />

                <label>Book Status: </label><br/ >
                <input type="radio" value="true" name='status' onChange={handleChange} /> Read
                <input type="radio" className='ms-2' value="false" name='status' onChange={handleChange} /> Unread<br /><br />

                <button className='btn btn-success' type='submit'>Submit</button>
            </form>

        </div>
    </>
  )
}