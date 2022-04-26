import React, {
  ChangeEvent, FC, FormEvent, useState,
} from 'react';
import './MainPage.scss';
import Container from '../../components/common/Container/Container';

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
        { wishList }

        <form
          action="#"
          className="main-page__form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            value={value}
            onChange={handleChangeValue}
          />
        </form>
      </Container>
    </main>
  );
};

export default MainPage;
