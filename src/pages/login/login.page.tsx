/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useDispatch } from 'react-redux';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import { Container }
  from '../../common/components/container/container.component';
import { LoginFrom } from './components/login-form';
import { setUser } from '../../store/slices/user.slice';

export const Login: React.FC = () => {
  const dispach = useDispatch();
  const navigate = useNavigate();

  const handlelogin = (email: string, password: string) => {
    signInWithEmailAndPassword(getAuth(), email, password)
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
            Log in
          </h1>
          <LoginFrom handleSubmit={handlelogin} />
        </div>
      </section>
    </Container>
  );
};
