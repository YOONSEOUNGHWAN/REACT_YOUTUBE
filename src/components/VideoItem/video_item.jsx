import React from "react";
import styles from './video_item.module.css'
// deconstructing : props 안에 있는video 꺼내오기
// 이름변경 : {video : newname}
export default function VideoItem({video:{snippet}}) {
  return (
    <div className={styles.container}>
      <li className={styles.video}>
        <img className={styles.thumbnail}
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
}
