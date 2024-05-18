

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({},{password:0});
        if (!users || users ===0) {
            res.status(404).json({ message: "No Users Found" });
        }
        else {
            res.status(200).json(users);
        }
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

