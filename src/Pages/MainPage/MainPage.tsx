import React, {
  ChangeEvent, FC, FormEvent, useState,
} from 'react';
import './MainPage.scss';
import Container from '../../components/common/Container/Container';
import AddWishForm from '../../components/AddWishForm/AddWishForm';
import WishList from '../../components/WishList/WishList';

const MainPage: FC = () => {
  const [value, setValue] = useState<string>('');
  const [wishList, setWishList] = useState<string[] | []>([]);

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();

    setValue('');
    setWishList([...wishList, ' ', value]);
  };

  return (
    <main className="main-page">
      <Container>

        <WishList
          wishList={wishList}
        />

        <AddWishForm
          value={value}
          onSubmitWish={handleSubmit}
          onChangeValue={handleChangeValue}
        />
      </Container>
    </main>
  );
};

export default MainPage;
