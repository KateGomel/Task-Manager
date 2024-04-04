const { default: axios } = require("axios");

class ApiService {
  constructor() {
    this.apiInstance = axios.create({
      baseURL:
        "https://task-manager-7c59c-default-rtdb.europe-west1.firebasedatabase.app",
    });
  }

  post(url, data = {}, header = {}) {
    return this.apiInstance.post(url.concat("json"), data, header);
  }

  get(url, header) {
    return this.apiInstance.get(url.concat("json"), header);
  }

  put(url, data, header) {
    return this.apiInstance.put(url.concat("json"), data, header);
  }

  delete(url, header = {}) {
    return this.apiInstance.delete(url.concat("json"), header);
  }
}

export const apiService = new ApiService();
