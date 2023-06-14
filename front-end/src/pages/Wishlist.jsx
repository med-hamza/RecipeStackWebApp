import React from 'react';
import { useSelector} from 'react-redux';
import Wishcard from '../components/Wishcard';

const WishlistPage = () => {
    const wishlistData = useSelector((state) => state.wishlists.wishlistItem);

    return (
        <div>
            <h2 className='text-xl font-bold text-center'>Wishlist</h2>
            {wishlistData.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ul>
          {wishlistData.map((item) => (
            <li key={item._id}>
              <Wishcard item={item} />
            </li>
          ))}
        </ul>
      )}
        </div>
    );
};

export default WishlistPage;
