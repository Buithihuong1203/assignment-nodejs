import User from '../models/user';
export const userById = async (req, res, next, id) => {
    try {
        const user = await User.findById(id).exec();
        if (!user) {
            res.status(400).json({
                message: "Khhoong tìm thấy user"
            })
        }
        req.profile = user;
        next();
    } catch (error) {

    }
}
export const getAllUser = async (req, res) => {
    try {
        const user = await User.find().exec();
        res.json({
            user
        })
    } catch (error) {
        res.status(400).json({
            message: "Khong có user"
        })

    }
}
export const getUsser = async (req, res) => {
    const condition = { _id: req.params.id }
    try {
        const user = await User.findOne(condition).exec();
        res.json({
            user
        })
    } catch (error) {
        res.status(400).json({
            message: "Khong có user"

        })
    }
}