import React, { ChangeEvent, FC, FormEvent } from 'react';

interface IAddWishFormProps {
  value: string;
  onSubmitWish: (e: FormEvent<HTMLFormElement>) => void;
  onChangeValue: (e: ChangeEvent<HTMLInputElement>) => void;
}

const AddWishForm: FC<IAddWishFormProps> = ({
  value,
  onSubmitWish,
  onChangeValue,
}) => (
  <form
    action="src/components/AddWishForm/AddWishForm#"
    className="main-page__form"
    onSubmit={(e) => onSubmitWish(e)}
  >

    <input
      type="text"
      value={value}
      onChange={(e) => onChangeValue(e)}
    />
  </form>
);

export default AddWishForm;
