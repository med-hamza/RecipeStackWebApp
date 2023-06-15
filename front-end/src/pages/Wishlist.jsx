import React from 'react';
import { useSelector} from 'react-redux';
import Wishcard from '../components/Wishcard';

const WishlistPage = () => {
    const wishlistData = useSelector((state) => state.wishlists.wishlistItem);

    return (
      <div className='w-[90%] max-w-7xl mx-auto'>
            <h2 className='text-3xl font-bold mb-10 mt-10'>All Your list</h2>
         
            {wishlistData.length === 0 ? (
        <h3 className='text-center text-xl mt-10 mb-10'>Your Recipe list is empty.</h3>
      ) : (
        <div className='flex-wrap flex sm:justify-start justify-center gap-2'>
          {wishlistData.map((item) => (
            <div key={item._id}>
              <Wishcard item={item} />
            </div>
          ))}
       </div>
      )}
      </div>
    
    );
};

export default WishlistPage;
