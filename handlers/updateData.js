const { db } = require('../admin/admin')

exports.updateData = async (req, res) => {
    try {
        const id = req.params.id;
        const reqData = req.body;
        const updateRes = await db.collection('users').doc(id).update(reqData);

        return res.status(200).send(updateRes);

    } catch (error) {
        return res.status(500).json('Something wrong');
    }
}