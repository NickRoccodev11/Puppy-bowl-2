

const ListItem = ({ handleSinglePuppy, puppy }) => {
  return (
    <div
      className="list-item"
      key={puppy.id}
    >
      <h2>{puppy.name}</h2>
      <img
        src={puppy.imageUrl}
        alt={`a picture of ${puppy.name}`}
      /><br />
      <button
        className="button-style"
        onClick={() => {
          handleSinglePuppy(puppy.id)
        }}
      > show details</button>
    </div>
  )
}

export default ListItem