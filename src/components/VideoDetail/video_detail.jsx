import React from "react";
import styles from "./video_detail.module.css";

export default function VideoDetail({ video }) {
  return (
    <>
      <section className={styles.detail}>
        <iframe
          title="youtube player"
          className={styles.video}
          type="text/html"
          width="100%"
          height="500"
          src={`https://www.youtube.com/embed/${video.id}`}
          frameBorder="0"
          allowFullScreen
        />
        <h2>{video.snippet.title}</h2>
        <h3>{video.snippet.channelTitle}</h3>
        <pre className={styles.description}>{video.snippet.description}</pre>
      </section>
    </>
  );
}
