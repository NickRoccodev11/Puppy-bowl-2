
const AddButton = ({setAddingPuppy}) => {
  return (
    <div id="add-container">
    <button
      className='button-style add'
      onClick={() => setAddingPuppy(true)}
    >
      Add a Puppy! <span id="click-here">(click here)</span></button>

  </div>
  )
}

export default AddButton