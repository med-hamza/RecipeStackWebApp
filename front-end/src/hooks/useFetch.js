import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipeById, fetchRecipedata } from "../reducers/recipeReducer";


function useFetch(id) {
    const dispatch = useDispatch();
    const { recipes } = useSelector(state => state.recipe.recipes);
    const { status, error } = useSelector(state => state.recipe);
    const recipedetails = useSelector(state => state.recipe.recipes);



    useEffect(() => {
        const fetchData = async () => {
            try {
                if (id) {
                    await dispatch(fetchRecipeById(id));
                } else {
                    await dispatch(fetchRecipedata());
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();

        return () => { };
    }, [dispatch, id]);

    return { recipes, status, error, recipedetails };
}

export default useFetch;
