import Axios, { AxiosInstance, AxiosResponse, CancelToken } from 'axios';

const baseURL = 'http://localhost:5000/react-redux-slack/us-central1/v1';

const instance: AxiosInstance = Axios.create({
  baseURL,
  timeout: 1000,
});

export interface User {
  id?: string;
  name?: string;
  avatar?: string;
}

export interface Message {
  id?: string;
  body?: string;
  user?: User;
  date?: string;
}

export const fetchMessages = (
  channelName: string,
  params = {},
  cancelToken: CancelToken = null,
): Promise<AxiosResponse<{messages: Message[]}>> => (
  instance.get(`/channels/${channelName}/messages`, { params, cancelToken })
);
