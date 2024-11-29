const fetch = require("node-fetch");

const BASE_URL = "http://apis.data.go.kr/B551011/GoCamping/";

const API_KEY =
  "jLc6WUPu4%2FUfB6qk2uZSC2HzMF8WKzB7SqFCxxg0UgzZt6xgJiCfUddlWVXOJzjSGbJoQiqJxXuXzu%2BEEyELJg%3D%3D";

const options =
  "basedList?numOfRows=999&MobileOS=win&MobileApp=campping&_type=json";

const url = (urlName) => {
  return BASE_URL + `${urlName}?serviceKey=${API_KEY}&${options}`;
};

export const baseList = () => {
  fetch();
};
