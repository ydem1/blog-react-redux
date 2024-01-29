/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Container }
  from '../../common/components/container/container.component';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <Container>
      <section className="section columns is-centered">
        <div className="column is-half">
          <form className="form box">
            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input is-success"
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(event) => handleEmailInput(event)}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-user" />
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-check" />
                </span>
              </div>
              {/* <p className="help is-success">This username is available</p> */}
            </div>

            <div className="field">
              <label className="label">Password</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="email"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => handlePasswordInput(event)}
                />
                <span className="icon is-small is-left">
                  <i className="fa-solid fa-lock" />
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-exclamation-triangle" />
                </span>
              </div>
              {/* <p className="help is-danger">This email is invalid</p> */}
            </div>

            <div className="field block">
              <button className="button is-primary is-fullwidth">Submit</button>
            </div>

            <div className="field">
              <NavLink to="/singup" className="help is-success">
                Or Sing up
              </NavLink>
            </div>
          </form>
        </div>
      </section>
    </Container>
  );
};
