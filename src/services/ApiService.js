import axios from 'axios';
import Activity from '../models/activity';
import Performance from '../models/performance';
import MainData from '../models/main-data';
import AverageSessions from '../models/average-sessions';


// fetch data  from API or ApiMock with URL as a parameter
export const fetchData = async (url) => {
  try {

    const response = await axios.get(`${url}`)
    const result = convertData(response, url)

    return result
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// converts data from API to match the format required by components to be rendered
function convertData(response, url) {
  if (url.includes("activity")) {
    return new Activity(
      response.data.data.userId,
      response.data.data.sessions)
  }
  else if (url.includes("performance")) {
    return new Performance(
      response.data.data.userId,
      response.data.data.kind,
      response.data.data.data)
  }
  else if (url.includes("average-sessions")) {
    return new AverageSessions(
      response.data.data.userId,
      response.data.data.sessions)
  }
  else if (url.startsWith("http://localhost:3000/user/")) {
    return new MainData(
      response.data.data.id,
      response.data.data.userInfos,
      response.data.data.todayScore
        ? response.data.data.todayScore
        : response.data.data.score
      ,
      response.data.data.keyData)
  }
  else {
    // if neither cases are covered, send error message to console
    console.log("Error: Invalid URL format");
    return null;
  }
}