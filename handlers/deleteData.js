const { db } = require('../admin/admin')

exports.deleteData = async (req, res) => {
    try {
        const id = req.params.id;
        // const reqData = req.body;
        const deleteRes = await db.collection('users').doc(id).delete();

        return res.status(200).send(deleteRes);

    } catch (error) {
        return res.status(500).json('Something wrong');
    }
}