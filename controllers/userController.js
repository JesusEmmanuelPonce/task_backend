const User = require("../models/user");
const bcryptjs  = require("bcryptjs");

exports.userCreate = async (req, res) => {

    const { email, password } = req.body;

    try {
        const user = new User(req.body);
        
        const isUser = await User.findOne({ email });

        if(!isUser) {

            const salt = await bcryptjs.genSalt(10);
            user.password = await bcryptjs.hash(password, salt);

            await user.save();
    
            res.status(200).json({
                success: true,
                msg: `${user.name} se ha agregado correctamente`,
            });

        } else {
            res.status(400).json({
                success: false,
                msg: `${isUser.name} ya se encuentra registrado`,
            });
        }
        


    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            msg: "Error en el servidor",
        })
    }
}