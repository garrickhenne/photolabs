import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const formattedTopics = props.data.map(topic => {
    return <TopicListItem key={ topic.id } data={ topic } handleClick={ props.handleTopicClick }/>
  });

  return (
    <div className="top-nav-bar__topic-list">
      { formattedTopics }
    </div>
  );
};

export default TopicList;
