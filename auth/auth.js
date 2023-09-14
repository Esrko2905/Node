function authentication(req, res, next) {
    const authHeader = req.header('Authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).send("Not Authorized");
    }

    const token = authHeader.split(' ')[1]; //1234567
    try {
        req.user = { token }; //{"token" : 1234567}
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
}

module.exports = { authentication };