import React, {
  ChangeEvent, FC, FormEvent, useState,
} from 'react';
import './MainPage.scss';
import Container from '../../components/common/Container/Container';
import AddWishForm from '../../components/AddWishForm/AddWishForm';
import WishList from '../../components/WishList/WishList';
import { IWish } from '../../components/WishList/interfaces/IWish';

const MainPage: FC = () => {
  const [value, setValue] = useState<string>('');
  const [wishList, setWishList] = useState<IWish[] | []>([]);

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();

    setValue('');

    const wishData = {
      id: Number(new Date()),
      value,
      completed: false,
    };

    if (wishData.value === '') {
      return;
    }

    setWishList((prev: IWish[] | []) => [wishData, ...prev]);
  };

  const toggleHandler = (id: number): void => {
    setWishList(wishList.map((wish: IWish) => {
      if (wish.id === id) {
        wish.completed = !wish.completed;
      }

      return wish;
    }));
  };

  const removeHandler = (id: number): void => {
    setWishList(wishList.filter((wish:IWish) => wish.id !== id));
  };

  return (
    <main className="main-page">
      <Container>

        <AddWishForm
          value={value}
          onSubmitWish={handleSubmit}
          onChangeValue={handleChangeValue}
          className="main-page__form"
        />

        <WishList
          wishList={wishList}
          onToggle={toggleHandler}
          onRemove={removeHandler}
        />
      </Container>
    </main>
  );
};

export default MainPage;
