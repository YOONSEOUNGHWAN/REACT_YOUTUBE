import axios from "axios";

class Client {
  constructor(httpClient) {
    this.client = httpClient;
    // this.key = key;
    // this.client = axios.create({
    //   baseURL: "https://youtube.googleapis.com/youtube/v3",
    //   params: { key: key },
    // });
  }

  async mostPopular() {
    const response = await this.client.get("videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 25,
      },
    });
    return response.data.items;
  }

  async search(query) {
    const response = await this.client.get("videos", {
      params: {
        part: "snippet",
        type: "video",
        maxResults: 25,
        q: query,
      },
    });
    return response.data.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));
  }
}

export default Client;
