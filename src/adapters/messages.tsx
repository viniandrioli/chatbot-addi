import axios from 'axios';

export const sendMessage = (message: any) => {
  //call the post endpoint
  // axios.post('http://url', message);

  console.log(message);
  axios.post('http://127.0.0.1/message', {
    question: message,
  });

  const response = 'ok';
  return response;
};

export const getMessage = async () => {
  // axios.get('http://url');
  const response: any = await axios.get('http://127.0.0.1/message');

  let answer = response.data.answer;
  console.log(answer);
  return answer;
};
