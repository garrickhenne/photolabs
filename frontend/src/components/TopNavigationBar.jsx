import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import topics from 'mocks/topics';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList data={ topics }/>
      <FavBadge selected={ true } isFavPhotoExist={ props.likes.length }/>
    </div>
  )
}

export default TopNavigation;