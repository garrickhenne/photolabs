import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import topics from 'mocks/topics';
import FavBadge from './FavBadge';

const TopNavigation = () => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList data={ topics }/>
      <FavBadge selected={ true }/>
    </div>
  )
}

export default TopNavigation;