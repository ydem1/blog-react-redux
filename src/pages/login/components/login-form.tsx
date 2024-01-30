/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiledInput } from '../../../modules/field-input/field-input';

type Props = {
  handleSubmit: (email: string, password: string) => void,
};

export const LoginFrom: React.FC<Props> = ({ handleSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleInputPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleClickSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit(email, password);
  };

  return (
    <form
      className="form box"
      onSubmit={(event) => handleClickSubmit(event)}
    >
      <FiledInput
        label="Email"
        value={email}
        type="email"
        handleInput={handleInputEmail}
      />

      <FiledInput
        label="Password"
        value={password}
        type="password"
        handleInput={handleInputPassword}
      />
      <div className="field mt-5">
        <button
          className="button is-primary is-fullwidth"
        >
          Submit
        </button>
      </div>

      <div className="field">
        <NavLink to="/signup" className="help is-success">
          Or Sing up
        </NavLink>
      </div>
    </form>
  );
};
