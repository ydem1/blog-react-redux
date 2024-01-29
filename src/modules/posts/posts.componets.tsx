import React from 'react';
import { Container }
  from '../../common/components/container/container.component';
import { PostList } from './components/post-list/post-list.compoment';

export const Posts: React.FC = () => {
  return (
    <Container>
      <section className="section">
        <div className="columns is-variable is-8-widescreen ">
          <div className="column">
            <PostList />
          </div>

          <div className="column is-one-quarter">
            <div className="box">
              Popular tags
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};
