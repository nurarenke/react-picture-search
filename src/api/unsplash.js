import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID e38168e5651996ad8ae9d5ad54714ca4a1dfb6ddbb06682d71c2392aa038d4d4"
  }
});
