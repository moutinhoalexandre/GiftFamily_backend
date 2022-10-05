import jwt from 'jsonwebtoken';

const authorization = (req, res, next) => {
  const token = req.cookies.hello_token;
  if (!token) {
    return res.sendStatus(403);
  }
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
TODO//req.userId = data.id;
TODO//req.userRole = data.role;
    return next();
  } catch {
    return res.sendStatus(403);
  }
};

export default authorization;
