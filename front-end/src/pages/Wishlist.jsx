import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Wishcard from '../components/Wishcard';
import { removeWishlist } from '../reducers/wishReducer';
const WishlistPage = () => {
  const dispatch = useDispatch();
  const wishlistData = useSelector((state) => state.wishlists.wishlistItem);

  const onRemove = (item) => {
    dispatch(removeWishlist(item))
  }
  return (
    <div>
      <div className='bg-cover bg-center bg-no-repeat h-[400px] mt-0 md:mt-20 lg:mt-20' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/banner_wishlist.png)` }}>
        <div className='flex items-center justify-center h-full'>
          <div>
            <div className='text-center'>
              <h1 className=' text-4xl md:text-7xl lg:text-7xl font-semibold mb-4'>
                Your Favorite
              </h1>
              <h2 className='text-[#AD343E] text-3xl md:text-5xl lg:text-5xl  font-semibold'>Feel the authentic & <br /> original taste from us</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[90%] max-w-7xl mx-auto mt-6 '>

        <h2 className='text-3xl font-bold mb-10 mt-10'>All Your list</h2>

        {wishlistData.length === 0 ? (
          <h3 className='text-center text-xl mt-10 mb-10'>Your Recipe list is empty.</h3>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
            {wishlistData.map((item) => (
              <div key={item._id}>
                <Wishcard item={item} onRemove={() => onRemove(item)} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>

  );
};

export default WishlistPage;
