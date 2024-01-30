/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  // GoogleAuthProvider,
} from 'firebase/auth';

import { Container }
  from '../../common/components/container/container.component';
import { SingUpForm } from './components/sing-up-form';
import { setUser } from '../../store/slices/user.slice';
import { provider } from '../../firebase';

export const SingUp: React.FC = () => {
  const dispach = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (email: string, password: string) => {
    createUserWithEmailAndPassword(getAuth(), email, password)
      .then(({ user }) => {
        dispach(setUser({
          email: user.email,
          token: user.refreshToken,
          id: user.uid,
        }));

        navigate('/');
      })
      // eslint-disable-next-line no-console
      .catch(console.error);
  };

  const handleRegisterWithGoogle = () => {
    signInWithPopup(getAuth(), provider)
      .then(({ user }) => {
        dispach(setUser({
          email: user.email,
          token: user.refreshToken,
          id: user.uid,
        }));

        navigate('/');
      })
      // eslint-disable-next-line no-console
      .catch(console.error);
  };

  return (
    <Container>
      <section className="section columns is-centered">
        <div className="column is-half box">
          <h1 className="has-text-primary has-text-centered title is-3 m-4">
            Sign up
          </h1>

          <div className="columns is-centered is-vcentered">
            <div className="column is-half">
              <button
                type="button"
                className="button is-primary is-fullwidth"
                onClick={handleRegisterWithGoogle}
              >
                Login with Google
              </button>
            </div>
          </div>

          <p className="has-text-primary has-text-centered title is-4">
            or
          </p>

          <SingUpForm handleSubmit={handleRegister} />
        </div>
      </section>
    </Container>
  );
};
