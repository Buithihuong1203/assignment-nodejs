import Post from "../models/post";

export const create = async (req, res) => {
    try {
        const post = await new Post(req.body).save();
        res.json(post)
    } catch (error) {
        res.status(400).json({
            message: "Lỗi  không tìm thấy bài viết"

        })
    }
}
export const list = async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts)
    } catch (error) {
        res.status(400).json({
            message: "Lỗi  không tìm thấy bài viết"

        })
    }
}

export const read = async (req, res) => {
    const filter = { _id: req.params.id }
    try {
        const post = await Post.findOne(filter);
        res.json(post)
    } catch (error) {
        res.status(400).json({
            message: "Lỗi  không tìm thấy bài viết"

        })
    }
}
export const remove = async (req, res) => {
    const condition = { _id: req.params.id }
    try {
        const post = await Post.findOneAndDelete(condition);
        res.json(
            {
                message: " Đã xóa thành công",
                data: post

            }
        )
    } catch (error) {
        res.status(400).json({
            message: "Lỗi  không tìm thấy bài viết"

        })
    }
}

export const update = async (req, res) => {
    const condition = { _id: req.params.id };
    const doc = req.body;
    const option = { new: true };

    try {
        const post = await Post.findByIdAndUpdate(condition, doc, option);
        res.json(post);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi  không tìm thấy bài viêt"

        })
    }
}

