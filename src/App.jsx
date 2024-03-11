import {useDispatch, useSelector} from "react-redux";
import {incrementInitialState} from "./store/favorites/favorites.slice.js";


function App() {
    const count = useSelector(state => state.favorites.value)
    const dispatch = useDispatch()
  return (
    <>
        <button onClick={()=> dispatch(incrementInitialState())}>+</button>
        <p>{count}</p>
    </>
  )
}

export default App
