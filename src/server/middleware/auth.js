const jwt = require('jsonwebtoken');

const jwtSecretKey = 'recipediariesabcd12345';


const auth = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).send({ message: 'Access denied. No token provided.' });

    try {
        const decoded = jwt.verify(token, jwtSecretKey || 'your_default_secret');
        req.user = decoded;
        next();
    } catch (ex) {
        res.status(400).send({ message: 'Invalid token.' });
    }
};
