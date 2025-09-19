const API_URL = "http://localhost:3000/";


export const api = async (uri, options = {}, base = null) => {
  return new Promise((resolve, reject) => {

    const httpHeaders = {
      method: options.method || "GET",
      headers: {
        ...options.headers,
        "Content-Type": "application/json",
      },
    };

    if (!base) {
      base = API_URL;
    }
    fetch(base + uri, options.tokenRequired && httpHeaders)
      .then((response) => {
        if (!response.ok) {
          let error = {
            name: ERRORTYPES.NETWORK,
            message: "Network API Failed",
            status: response.status,
          }

          if (response.status === 401) {
            error.name = ERRORTYPES.UNAUTHORIZED
            error.message = "Unauthorized user"
          }
          throw error
        }
        return response.json();
      })
      .then((response) => {
        resolve(response);
        // if (response.status) {
        //   resolve(response.data);
        // } else {
        //   reject(response);
        // }
      })
      .catch((error) => {
        console.error(error)
        reject(error);
      });
  });
};
