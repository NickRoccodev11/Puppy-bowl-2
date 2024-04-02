//APIURL
const BASE_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-FT'
//Font
import './assets/Boecklins Universe.ttf'
//hooks
import { useState, useEffect } from 'react'
//components
import List from './List';
import SingleView from './SingleView';
import Form from './Form';
import AddButton from './AddButton';

function App() {
  const [puppyList, setPuppyList] = useState([]);
  const [singlePuppy, setSinglePuppy] = useState({})
  const [addingPuppy, setAddingPuppy] = useState(false)

  useEffect(() => {
    fetchPuppies();
  }, [])

  const fetchPuppies = async () => {
    const res = await fetch(`${BASE_URL}/players`);
    const puppiesData = await res.json();
    setPuppyList(puppiesData.data.players);
  }

  const handleSinglePuppy = async (puppyId) => {
    const res = await fetch(`${BASE_URL}/players/${puppyId}`);
    const puppyData = await res.json();
    setSinglePuppy(puppyData.data.player);
  }

  return (
    <>
<h1 id="app-heading">The Puppy Bowl</h1>
      {
        addingPuppy ?
          <Form
            setAddingPuppy={setAddingPuppy}
            fetchPuppies={fetchPuppies}
          /> :
          singlePuppy.name ?
            <SingleView
              singlePuppy={singlePuppy}
              setSinglePuppy={setSinglePuppy}
              fetchPuppies={fetchPuppies}
            /> :
            <>
              <AddButton setAddingPuppy={setAddingPuppy} />
              <List
                puppyList={puppyList}
                handleSinglePuppy={handleSinglePuppy}
              />
            </>

      }
    </>
  )
}

export default App
