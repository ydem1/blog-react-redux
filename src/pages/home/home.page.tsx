import React from 'react';
import { Navigate } from 'react-router-dom';

import { Banner } from '../../common/components/banner/banner.component';
import { Posts } from '../../modules/posts/posts.componets';

export const Home: React.FC = () => {
  return (
    <div className="Home">
      <Navigate to="/login" />
      <Banner />
      <Posts />
    </div>
  );
};
