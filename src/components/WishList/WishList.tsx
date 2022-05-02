import React, { FC } from 'react';
import './WishList.scss';
import { IWish } from './interfaces/IWish';

interface IWishListProps {
  wishList: IWish[] | [];
  onToggle: (id: number) => void;
}

const WishList: FC<IWishListProps> = ({ wishList, onToggle }) => (
  <div>
    {wishList.length !== 0
      && (
      <div className="wishlist">
        <ul className="wishlist__list">
          {wishList.map((wish: IWish) => {
            const classes = ['wishlist__item'];

            if (wish.completed) {
              classes.push('wishlist__item_completed');
            }

            return (
              <li key={wish.id} className={classes.join(' ')}>
                <input
                  className="wishlist__checkbox"
                  type="checkbox"
                  checked={wish.completed}
                  onChange={onToggle.bind(null, wish.id)}
                />

                <span className="wishlist__title">
                  { wish.value }
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      )}
  </div>
);

export default WishList;
