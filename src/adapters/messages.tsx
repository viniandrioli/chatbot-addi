import axios from 'axios';

export const sendMessage = (message: any) => {
  //call the post endpoint
  // axios.post('http://url', message);

  //mock
  const response = 'ok';
  return response;
};

export const getMessage = () => {
  // axios.get('http://url');

  const response = 'This is the stores that i found for you.';
  return response;
};
