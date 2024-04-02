const BASE_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-FT'

const SingleView = ({ singlePuppy, setSinglePuppy, fetchPuppies }) => {

  const handleDelete = async (puppyId) => {
    try {
      const res = await fetch(`${BASE_URL}/players/${puppyId}`, {
        method: 'DELETE',
      });
    } catch (err) {
      console.err(err.message)
    }
    setSinglePuppy({});
    fetchPuppies();

  }

  return (
    <div id="single-view">
      <h2>{singlePuppy.name || "Generic Puppy"}</h2>
      <img
        src={singlePuppy.imageUrl}
        alt={`a picture of ${singlePuppy.name}`}
      />
      <div className="details">
        <p> Breed:  <span> {singlePuppy.breed ? singlePuppy.breed : "N/A"}</span></p>
        <p> Status:  <span>{singlePuppy.status ? (singlePuppy.status === "field" ? "On the field" : "Benched") : "N/A"}</span> </p>
      </div>
      <button
        className="button-style"
        onClick={() => {
          setSinglePuppy({})
        }}
      >back to Puppy List</button>
      <button
        className="delete-button"
        onClick={() => {
          handleDelete(singlePuppy.id)
        }}
      >
        Delete puppy  </button>
    </div>
  )
}

export default SingleView