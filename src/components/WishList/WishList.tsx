import React, { FC, KeyboardEvent } from 'react';
import './WishList.scss';
import { IWish } from './interfaces/IWish';

interface IWishListProps {
  wishList: IWish[] | [];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

const WishList: FC<IWishListProps> = ({ wishList, onToggle, onRemove }) => {
  const keyUpHandler = (
    e: KeyboardEvent<HTMLSpanElement>,
    id: number,
  ): void => {
    if (e.key === 'Enter') {
      onRemove(id);
    }
  };

  return (
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
                    <div className="wishlist__left-wrapper">
                      <input
                        className="wishlist__checkbox"
                        type="checkbox"
                        checked={wish.completed}
                        onChange={onToggle.bind(null, wish.id)}
                      />

                      <span className="wishlist__title">
                        { wish.value }
                      </span>
                    </div>

                    <span
                      className="wishlist__button wishlist__button_type_remove"
                      role="button"
                      aria-label="Удалить"
                      tabIndex={0}
                      onClick={() => onRemove(wish.id)}
                      onKeyUp={(e) => keyUpHandler(e, wish.id)}
                    />

                  </li>
                );
              })}
            </ul>
          </div>
        )}
    </div>
  );
};

export default WishList;
