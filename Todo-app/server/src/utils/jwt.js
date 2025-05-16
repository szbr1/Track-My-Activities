import jwt from 'jsonwebtoken';

const jsonToken = (id) => {
  const token = jwt.sign({ userId: id }, process.env.TOKEN, { expiresIn: '7d' });
  return token;
};

export default jsonToken;

