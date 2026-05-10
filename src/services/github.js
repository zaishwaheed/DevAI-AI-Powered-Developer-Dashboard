import axios from 'axios';

const BASE_URL = 'https://api.github.com';
const headers = {
  Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
};

export async function fetchUser (username) {


  const { data } = await axios.get(`${BASE_URL}/users/${username}`, { headers })
  return data;
}

export async function fetchRepos (username) {

  const {data} = await axios.get(`${BASE_URL}/users/${username}/repos`, { headers })

    return data;

}

export async function fetchFollowers (username) {

  const {data} = await axios.get(`${BASE_URL}/users/${username}/followers`, { headers })

    return data;

}

export async function fetchStarred (username) {

  const {data} = await axios.get(`${BASE_URL}/users/${username}/starred`, { headers })

    return data;

}
export async function fetchEvents (username) {

  const {data} = await axios.get(`${BASE_URL}/users/${username}/events`, { headers })

    return data;

}


