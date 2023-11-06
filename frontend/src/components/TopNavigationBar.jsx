import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      {/* Reload page to reset any topic filters when clicking logo. */}
      <span className="top-nav-bar__logo" onClick={ () => window.location.reload() }>PhotoLabs</span>
      <TopicList data={ props.topics } handleTopicClick={ props.handleTopicClick }/>
      {/* Likes is an array of photo ids. */}
      <FavBadge selected={ true } isFavPhotoExist={ props.likes.length }/>
    </div>
  )
}

export default TopNavigation;