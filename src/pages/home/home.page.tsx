import React from 'react';

import { Banner } from '../../common/components/banner/banner.component';
import { Posts } from '../../modules/posts/posts.componets';

export const Home: React.FC = () => {
  return (
    <div className="Home">
      <Banner />
      <Posts />
    </div>
  );
};
