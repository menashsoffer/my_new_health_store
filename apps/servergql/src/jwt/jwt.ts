import jwt from 'jsonwebtoken';

const testJwt = () => {
  const token = jwt.sign(
    { email: 'menashe@gmail.com', password: 1234 },
    'secretKey038dsjhc@!$#',
  );
  console.log(token);
  const decodeToken = jwt.decode(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1lbmFzaGVzb2ZmZXI4OTE2QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzNCIsImlzYWRtaW4iOmZhbHNlLCJpYXQiOjE3MDUzOTk0NDYsImV4cCI6MTcwNTQ4NTg0NiwiYXVkIjoicG9zdGdyYXBoaWxlIiwiaXNzIjoicG9zdGdyYXBoaWxlIn0.PbMtlpih48aGGYcHdhBetYKbiwM-AwOOlAtQlFqMOkY',
  );
  console.log(decodeToken);
  const verify = jwt.verify(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1lbmFzaGVAZ21haWwuY29tIiwicGFzc3dvcmQiOjEyMzQsImlhdCI6MTcwNTMyNzcyM30.nQIFkGFRNL5cfF3PPIa-_kxzDu-32jFJCC-lfOOyjhI',
    'secretKey038dsjhc@!$#',
  );
  console.log(verify);
};
export default testJwt;
