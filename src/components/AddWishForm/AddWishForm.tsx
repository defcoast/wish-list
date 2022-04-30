import React, { ChangeEvent, FC, FormEvent } from 'react';
import './AddWishForm.scss';

interface IAddWishFormProps {
  value: string;
  onSubmitWish: (e: FormEvent<HTMLFormElement>) => void;
  onChangeValue: (e: ChangeEvent<HTMLInputElement>) => void;
  className: string;
}

const AddWishForm: FC<IAddWishFormProps> = ({
  value,
  onSubmitWish,
  onChangeValue,
  className,
}) => (
  <form
    action="/"
    className={`${className} wish-form`}
    onSubmit={(e) => onSubmitWish(e)}
  >
    <input
      className="wish-form__input"
      type="text"
      value={value}
      placeholder="Добавить желание..."
      onChange={(e) => onChangeValue(e)}
    />
  </form>
);

export default AddWishForm;
