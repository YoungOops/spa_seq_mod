import express from 'express';
import { SERVER_PORT } from './constants/app.constant';

const app = express(); //기본값으로 3000번 포트를 이용하도록 되어 있어서 포트 번호 없이도 localhost:3000이 되는 것 같다.
// const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(SERVER_PORT, () => {
  console.log(`Example app listening on port ${SERVER_PORT}`);
});
