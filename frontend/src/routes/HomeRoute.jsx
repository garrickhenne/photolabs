import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const photoListProps = {
    handleLikeId: props.handleLikeId,
    toggleShowDetailsModal: props.toggleShowDetailsModal,
    state: props.state
  };

  return (
    <div className="home-route">
      <TopNavigation likes={ props.likes } topics={ props.state.topics } handleTopicClick={ props.handleTopicClick }/>
      <PhotoList { ...photoListProps } />
    </div>
  );
};

export default HomeRoute;
