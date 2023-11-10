import React, { useEffect } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  // useEffect(() => {
  //   console.log('you should refresh...');
  //   console.log('favs:', props.likes);
  // }, [props.showDetailsModal]);

  const photoListProps = {
    handleLikeId: props.handleLikeId,
    toggleShowDetailsModal: props.toggleShowDetailsModal,
    photos: props.photos,
    likes: props.likes,
    showDetailsModal: props.showDetailsModal,
    isFavorited: props.isFavorited
  };

  const topNavigationProps = {
    likes: props.likes,
    topics: props.topics,
    handleTopicClick: props.handleTopicClick
  };

  return (
    <div className="home-route">
      <TopNavigation { ...topNavigationProps } />
      <PhotoList { ...photoListProps } />
    </div>
  );
};

export default HomeRoute;
