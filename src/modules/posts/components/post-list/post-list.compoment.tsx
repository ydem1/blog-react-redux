import React from 'react';
import { Post } from '../post/post.component';

export const PostList: React.FC = () => {
  return (
    <ul className="columns is-full is-multiline">
      <li className="column is-full">
        <Post />
      </li>
      <li className="column is-full">
        <Post />
      </li>
      <li className="column is-full">
        <Post />
      </li>
      <li className="column is-full">
        <Post />
      </li>
      <li className="column is-full">
        <Post />
      </li>
    </ul>
  );
};
