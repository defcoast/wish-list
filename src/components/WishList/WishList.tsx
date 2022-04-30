import React, { FC } from 'react';
import './WishList.scss';
import { IWishList } from './interfaces/IWishList';

interface IWishListProps {
  wishList: IWishList[] | [];
}

const WishList: FC<IWishListProps> = ({ wishList }) => (
  <div>
    {wishList.length !== 0
      && (
      <div className="wishlist">
        <ul className="wishlist__list">
          {wishList.map((wish) => (

            <li key={wish.id} className="wishlist__item">
              { wish.value }
            </li>

          ))}
        </ul>
      </div>
      )}
  </div>
);

export default WishList;
