const fetch = require("node-fetch");

const BASE_URL = "https://apis.data.go.kr/B551011/GoCamping/";

const API_KEY =
  "jLc6WUPu4%2FUfB6qk2uZSC2HzMF8WKzB7SqFCxxg0UgzZt6xgJiCfUddlWVXOJzjSGbJoQiqJxXuXzu%2BEEyELJg%3D%3D";

const options = "numOfRows=30&MobileOS=WIN&MobileApp=campping&_type=json";

const url = (urlName) => {
  return BASE_URL + `${urlName}?serviceKey=${API_KEY}&${options}`;
};

export const fetchBaseList = () => {
  return fetch(url("basedList")).then((res) => res.json());
};

export const scrollList = (pageNum) => {
  const scrollUrl = url("basedList") + `&pageNo=${pageNum}`;
  return fetch(scrollUrl).then((res) => res.json());
};

export const detaillList = () => {
  const detailUrl =
    BASE_URL +
    `basedList?serviceKey=${API_KEY}&numOfRows=999&pageNo=1&&MobileOS=WIN&MobileApp=campping&_type=json&_type=json`;
  return fetch(detailUrl).then((res) => res.json());
};

export const searchList = (keyword, pageNum) => {
  const searchUrl =
    BASE_URL +
    `searchList?serviceKey=${API_KEY}&numOfRows=999&pageNo=${pageNum}&&MobileOS=WIN&MobileApp=campping&_type=json&_type=json&keyword=${keyword}`;
  return fetch(searchUrl).then((res) => res.json());
};
