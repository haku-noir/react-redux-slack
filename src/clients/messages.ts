import Axios, { AxiosInstance, AxiosResponse, CancelToken } from 'axios';

const baseURL = 'https://us-central1-react-redux-slack.cloudfunctions.net/v1';

const instance: AxiosInstance = Axios.create({
  baseURL,
  timeout: 1000,
});

export interface User {
  id: string;
  name: string;
  avatar: string;
}

export interface Message {
  id: string;
  body: string;
  user: User;
  date: string;
}

export const fetchMessages = (
  channelName: string,
  params = {},
  cancelToken: CancelToken = null,
): Promise<AxiosResponse<{messages: Message[]}>> => (
  instance.get(`/channels/${channelName}/messages`, { params, cancelToken })
);


export const fetchChannels = (
  params = {},
  cancelToken: CancelToken = null,
): Promise<AxiosResponse<{channels: string[]}>> => (
  instance.get('/channels', { params, cancelToken })
);
