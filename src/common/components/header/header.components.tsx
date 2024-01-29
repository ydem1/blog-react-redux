/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';
import { Container } from '../container/container.component';

export const Header: React.FC = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const navLinkActive = (
    isActive: boolean,
    classDefault: string,
    classActive = '',
  ) => (
    classnames(classDefault, {
      [classActive]: isActive,
    }));

  return (
    <header className="header box">
      <Container>
        <nav className="navbar">
          <div className="navbar-brand">
            <NavLink
              to="/"
              className="navbar-item has-text-primary has-text-weight-bold"
            >
              conduit
            </NavLink>

            <button
              type="button"
              className={classnames('navbar-burger', {
                'is-active': isMenuActive,
              })}
              onClick={() => setIsMenuActive(!isMenuActive)}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </div>

          <div
            className={classnames('navbar-menu', {
              'is-active': isMenuActive,
            })}
          >
            <div className="navbar-end">
              <NavLink
                to="/"
                className={({ isActive }) => (
                  navLinkActive(isActive, 'navbar-item', 'has-text-weight-bold')
                )}
              >
                Home
              </NavLink>

              <div className="buttons navbar-item">
                <NavLink
                  to="/signup"
                  className={({ isActive }) => (
                    navLinkActive(isActive, 'button is-primary', 'is-light')
                  )}
                >
                  <strong>Sign up</strong>
                </NavLink>

                <NavLink
                  to="/login"
                  className={({ isActive }) => (
                    navLinkActive(isActive, 'button is-light')
                  )}
                >
                  Log in
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};
