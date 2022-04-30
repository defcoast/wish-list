import React, {
  ChangeEvent, FC, FormEvent, useState,
} from 'react';
import './MainPage.scss';
import Container from '../../components/common/Container/Container';
import AddWishForm from '../../components/AddWishForm/AddWishForm';
import WishList from '../../components/WishList/WishList';
import { IWishList } from '../../components/WishList/interfaces/IWishList';

const MainPage: FC = () => {
  const [value, setValue] = useState<string>('');
  const [wishList, setWishList] = useState<IWishList[] | []>([]);

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();

    setValue('');
    setWishList([{ id: wishList.length, value }, ...wishList]);
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
        />
      </Container>
    </main>
  );
};

export default MainPage;
