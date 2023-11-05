import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const signin = () => {
  const [formData, setFormData] = useState({})
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  // Function to watch changes and updating the formData
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  // Function to submit the data into the database
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
      const data = await res.json()
      console.log(data)

      // Checking if there is an error
      if(data.success === false) {
        setLoading(false)
        setError(data.message)
        return
      }

      // Setting loading and error to false and null if everything is okay
      setLoading(false)
      setError(null)
      navigate("/")

    } catch (error) {
      setLoading(false)
      setError(error.message)
    }
  }

  // console.log(formData)

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-center text-3xl font-semibold my-7'>Sign In</h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <input type="email" placeholder='email' className='border p-3 rounded-lg' id='email' onChange={handleChange}/>
        <input type="password" placeholder='password' className='border p-3 rounded-lg' id='password' onChange={handleChange}/>
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          {loading ? "Loading..." : "Sign In"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Do not have an account?</p>
        <Link to="/sign-up" className="text-blue-700">Sign Up</Link>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  )
}

export default signin