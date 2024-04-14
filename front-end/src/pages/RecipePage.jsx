import React from 'react';
import Recipe from '../components/Recipe';
import Progressbar from '../components/Progressbar';
import useFetch from '../hooks/useFetch';
import { useSelector } from 'react-redux';

const RecipePage = () => {
    const { recipes, status, error } = useFetch();
    const wishlistData = useSelector((state) => state.wishlists.wishlistItem);


    if (status === 'loading') {
        return (
            <div className="text-center h-screen grid items-center justify-center m-auto">
                <Progressbar />
            </div>
        );
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <Recipe wishlistData={wishlistData} recipes={recipes} status={status} error={error} />
        </>
    );
}

export default RecipePage;
