import axios from 'axios';
import Activity from '../models/activity';
import Performance from '../models/performance';
import MainData from '../models/main-data';
import AverageSessions from '../models/average-sessions';



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
  else {
    return new MainData(
      response.data.data.id,
      response.data.data.userInfos,
      response.data.data.todayScore
        ? response.data.data.todayScore
        : response.data.data.score
      ,
      response.data.data.keyData)
  }

}

