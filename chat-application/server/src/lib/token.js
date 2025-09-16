import jwt from 'jsonwebtoken';

const jsonGenerate = (id, res) => {
    try {
        const token = jwt.sign(
            { userId: id },
            process.env.TOKEN,
            { expiresIn: "7d" }
        );

        res.cookie('token', token, {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: true,
    sameSite: "none",
    domain: ".onrender.com",
    path: "/"
});

    } catch (error) {
        return res.status(500).json('Entry fail');
    }
};

export default jsonGenerate;
