class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }
  //   then->then -> Promise return 해준다..

  mostPopular() {
    return (
      fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
        this.GetRequestOptions
      )
        //text -> json fetch 필수 작업
        .then((response) => response.json())
        // .then((result) => console.log(result))
        .then((response) => response.items)
    );
  }

  search(query) {
    return (
      fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
        this.getRequestOptions
      )
        .then((response) => response.json())
        // 기존 정보 유지하면서 id값만 바꾸준다
        .then((result) =>
          result.items.map((item) => ({ ...item, id: item.id.videoId }))
        )
    );
  }
}

export default Youtube;
