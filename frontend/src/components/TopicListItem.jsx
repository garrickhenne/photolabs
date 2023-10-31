import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { title } = props.data;
  return (
    <div className="topic-list__item">
      <span className="topic-list__item">{ title }</span>
    </div>
  );
};

export default TopicListItem;
