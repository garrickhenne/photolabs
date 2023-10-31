import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const formattedTopics = props.data.map(topic => {
    return <li key={ topic.id }><TopicListItem data={ topic }/></li>
  })

  return (
    <div className="top-nav-bar__topic-list">
      { formattedTopics }
    </div>
  );
};

export default TopicList;
