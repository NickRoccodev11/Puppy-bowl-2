import ListItem from "./ListItem"

const List = ({ puppyList, handleSinglePuppy }) => {
  return (
    <div className="list">
      {
        puppyList.length ?
          puppyList.map(puppy => {
            return (
             <ListItem 
             key={puppy.id}
             puppy={puppy}
             handleSinglePuppy={handleSinglePuppy}
             />
            )
          })
          :
          <p> fetching puppies...</p>
      }

    </div>
  )
}

export default List