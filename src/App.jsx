import {useDispatch, useSelector} from "react-redux";
import {toggleFavorites} from "./store/favorites/favorites.slice.js";
import RecipeItem from "./recipe-item/RecipeItem.jsx";


const recipes = [
    {id:1, name:'Recipe1'},
    {id:2, name:'Recipe2'},
]

function App() {

  return (
    <>
        {recipes.map(recipe =>
            <RecipeItem recipe={recipe} key={recipe.id}/>
        )}
    </>
  )
}

export default App
