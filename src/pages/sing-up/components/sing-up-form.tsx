/* eslint-disable react/button-has-type */
import React from 'react';
import { FiledInput } from '../../../modules/field-input/field-input';
import { useInput } from '../../../hooks/useInput';

type Props = {
  handleSubmit: (email: string, password: string) => void,
};

export const SingUpForm: React.FC<Props> = ({ handleSubmit }) => {
  const [
    firstName,
    setFirstName,
    // firstNameError,
    // setFirstNameError,
  ] = useInput();

  const handleFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  const [
    lastName,
    setLastName,
    // lastNameError,
    // setLastNameError,
  ] = useInput();

  const handleLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const [
    email,
    setEmail,
    // emailError,
    // setEmailError,
  ] = useInput();

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const [
    password,
    setPassword,
    // passError,
    // setPassError,
  ] = useInput();

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const [
    passwordConform,
    setPasswordConform,
    // passErrorConform,
    // setPassErrorConform,
  ] = useInput();

  const handlePasswordConform
    = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPasswordConform(event.target.value);
    };

  const handleClickSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit(email, password);
  };

  return (
    <form
      className="form m-6"
      onSubmit={(event) => handleClickSubmit(event)}
    >
      <FiledInput
        label="First name"
        value={firstName}
        type="text"
        handleInput={handleFirstName}
      />

      <FiledInput
        label="Last name"
        value={lastName}
        type="text"
        handleInput={handleLastName}
      />

      <FiledInput
        label="Email"
        value={email}
        type="email"
        handleInput={handleEmail}
      />

      <FiledInput
        label="Password"
        value={password}
        type="password"
        handleInput={handlePassword}
      />

      <FiledInput
        label="Repeat password"
        value={passwordConform}
        type="password"
        handleInput={handlePasswordConform}
      />

      <div className="field mt-6">
        <button
          className="button is-primary is-fullwidth"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
