import classNames from 'classnames';
import React from 'react';

type Props = {
  label: string,
  value: string,
  type: string,
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void,
};

export const FiledInput: React.FC<Props> = ({
  label,
  value,
  type,
  handleInput,
}) => {
  return (
    <div className="field">
      <label
        className="label"
        htmlFor={label}
      >
        {label}
      </label>
      <div className="control has-icons-left has-icons-right">
        <input
          // is-success
          id={label}
          className="input is-success"
          type={type}
          placeholder={label}
          value={value}
          onChange={event => handleInput(event)}
          autoComplete={type === 'password' ? 'current-password' : 'off'}
        />
        <span className="icon is-small is-left">
          <i className={classNames('fas', {
            'fa-user': type === 'email' || type === 'text',
            'fa-lock': type === 'password',
          })}
          />
        </span>
        <span className="icon is-small is-right">
          <i className="fas fa-check" />
        </span>
      </div>
      {/* <p className="help is-success">This username is available</p> */}
    </div>
  );
};
