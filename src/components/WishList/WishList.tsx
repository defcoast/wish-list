import React, { FC } from 'react';
import './WishList.scss';

interface IWishListProps {
  wishList: string[] | [];
}

const WishList: FC<IWishListProps> = ({ wishList }) => (
  <div className="wishlist">
    {wishList
    && wishList.map((wish) => (
      <ul className="wishlist__list">
        <li className="wishlist__item">
          { wish }
        </li>
      </ul>
    ))}
  </div>
);

export default WishList;
