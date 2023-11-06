import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={ () => window.location.reload() }>PhotoLabs</span>
      <TopicList data={ props.topics } handleTopicClick={ props.handleTopicClick }/>
      <FavBadge selected={ true } isFavPhotoExist={ props.likes.length }/>
    </div>
  )
}

export default TopNavigation;