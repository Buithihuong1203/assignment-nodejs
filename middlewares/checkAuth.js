import expressJWT from 'express-jwt';

export const checkAuth = (req, res, next) => {
    const status = true;
    if (status) {
        next();
    } else {
        console.log("bạn không có quyền truy cập");
    }
}

export const requireSignin = expressJWT({
    //thuật toán
    algorithms: ["HS256"],
    //mã bảo mật
    secret: "123456",
    //lưu thông tin vừa mã hóa
    requestProperty: "auth"
});
export const isAuth = (req, res, next) => {
    //console.log(req.profile);
    //console.log(req.auth)
    const status = req.profile._id == req.auth._id;
    if (!status) {
        res.status(400).json({
            message: "bạn không có tuyền truy cập đâu nhé"
        })
    }
    next();
}

export const isAdmin = (req, res, next) => {
    if (req.profile.role === 0) {
        res.status(401).json({
            message: "bạn không phải là admin"
        })
    }
    next();
}