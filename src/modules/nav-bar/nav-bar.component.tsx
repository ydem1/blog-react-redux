import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container }
  from '../../common/components/container/container.component';

export const NavBar: React.FC = () => {
  return (
    <div className="tabs">
      <Container>
        <ul>
          <li className="">
            <NavLink to="/">
              All post
            </NavLink>
          </li>

          {/* <li className="">
            <NavLink to="/newPost">
              New post
            </NavLink>
          </li> */}
        </ul>
      </Container>
    </div>
  );
};
