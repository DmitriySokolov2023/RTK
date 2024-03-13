import {useDispatch, useSelector} from "react-redux";
import {toggleFavorites} from "../store/favorites/favorites.slice.js";
import styles from './RecipeItem.module.css'
import {useAction} from "../hooks/useActions.js";


const RecipeItem = ({recipe}) => {
    const {favorites} = useSelector(state => state)
    const dispatch = useAction()
    const isExist = favorites.some(f => f.id === recipe.id)

    return (
        <div className={styles.recipe}>
            <h2>{recipe.name}</h2>
            <button onClick={()=> dispatch(toggleFavorites(recipe))}>{isExist ? 'Del to favorites' : 'Add to favorites'}</button>
        </div>
    );
};

export default RecipeItem;