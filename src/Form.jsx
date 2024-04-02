import { useState } from "react";
const BASE_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-FT'

const Form = ({ setAddingPuppy, fetchPuppies }) => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [breed, setBreed] = useState("");
  const [status, setStatus] = useState("");

  const handleAddPuppy = async (e) => {
    try {
      e.preventDefault();
      const res = await fetch(`${BASE_URL}/players`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          imageUrl,
          breed,
          status
        })
      })
      const postResult = await res.json();
    } catch (err) {
      console.error(err.message)
    }
    setName("")
    setBreed("")
    setStatus("")
    setAddingPuppy(false)
    fetchPuppies()
  }

  return (
    <div id="form-container">
      <h2>Add a Puppy</h2>
      <form
        onSubmit={(e) => handleAddPuppy(e)}
      >
        <label > name:</label><br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br />
        <label >Image URL:</label><br />
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        /><br />
        <label >breed</label><br />
        <input
          type="text"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        /><br />
        <label >status</label><br />
        <input
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        /><br />
        <button 
        type="submit"
        className="button-style"
        >Submit Puppy</button><br/>
        
      </form>
      <button 
        className="button-style"
        type="button"
        onClick={()=>{
          setAddingPuppy(false)
          fetchPuppies()
        }}
        >go back</button>
    </div>
  )
}

export default Form