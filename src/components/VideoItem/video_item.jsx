import React from "react";

import styles from "./video_item.module.css";
// deconstructing : props 안에 있는video 꺼내오기
// 이름변경 : {video : newname}

export default React.memo(function VideoItem({
  video,
  video: { snippet },
  onVideoClick,
  display,
}) {
  const displayType = display === "list" ? styles.list : styles.grid;
  return (
    <div className={`${styles.container} ${displayType}`}>
      <li className={styles.video} onClick={() => onVideoClick(video)}>
        <img
          className={styles.thumbnail}
          src={snippet.thumbnails.medium.url}
          alt="thumbnail"
        />
        <div className={styles.metadata}>
          <p className={styles.title}>{snippet.title}</p>
          <p className={styles.channel}>{snippet.channelTitle}</p>
        </div>
      </li>
    </div>
  );
});
