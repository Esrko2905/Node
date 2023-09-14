const { db } = require('../admin/admin')

exports.postData = async (req, res) => {
    try {
        const { id, name, email } = req.body;
        const resData = { name: name, email: email };

        const postDb = await db.collection('users').doc(id).set(resData);
        const length = Object.keys(req.body).length;

        if (length <= 3) {
            return res.status(200).send(postDb);
        } else {
            return res.status(400).json('length high');
        }

    } catch (error) {

        return res.status(500).json('Parameters are missing');

    }

}