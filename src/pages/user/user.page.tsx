import React from 'react';
import { useAuth } from '../../hooks/useAuth';

export const UserPage: React.FC = () => {
  const { email, token } = useAuth();

  return (
    <div className="section">
      <h1>
        {`Page of user ${email}`}
      </h1>

      <h1>
        {`Token ${token}`}
      </h1>
    </div>
  );
};
