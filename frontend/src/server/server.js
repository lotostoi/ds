export default function getData(url, type = "GET") {
    return fetch(url, {
      method: type,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((data) => data.json());
  }