const { db } = require('../admin/admin')

exports.getData = async (req, res) => {
    const collection = req.params.collection;
    try {
        const fetch = db.collection(collection);
        fetch.get().then((snapShot) => {
            const data = snapShot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            return res.status(200).json(data);
            // if (req.user['token'] == 12345) {
            //     return res.status(200).json(data);
            // } else {
            //     return res.status(500).json({ message: "not auth" });
            // }

        });

    } catch (error) {
        return res.status(500).json({ message: "something went wrong" });
    }
}