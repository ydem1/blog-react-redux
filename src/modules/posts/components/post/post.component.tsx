import React from 'react';
import { NavLink } from 'react-router-dom';
import { TagList } from '../tag-list/tag-list.componet';

export const Post: React.FC = () => {
  return (
    <article>
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img
                  src="https://api.realworld.io/images/demo-avatar.png"
                  alt="Placeholder"
                />
              </figure>
            </div>
            <NavLink to="/@johnsmith" className="media-content">
              <p className="title is-4"> John Smith</p>
              <p className="subtitle is-6">@johnsmith</p>
            </NavLink>

            <button type="button" className="button is-white">
              <span className="icon is-small">
                <i className="fa-regular fa-heart" />
                {/* solid */}
              </span>
            </button>
          </div>

          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris.
          </div>

          <div className="cart-footer">
            <p className="has-text-weight-bold">11:09 PM - 1 Jan 2016</p>
            <TagList />
          </div>
        </div>
      </div>
    </article>
  );
};
