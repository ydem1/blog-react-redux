/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import { Container }
  from '../../common/components/container/container.component';
import { SingUpForm } from './components/sing-up-form';
import { setUser } from '../../store/slices/user.slice';

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

  return (
    <Container>
      <section className="section columns is-centered">
        <div className="column is-half">
          <SingUpForm handleSubmit={handleRegister} />
        </div>
      </section>
    </Container>
  );
};
