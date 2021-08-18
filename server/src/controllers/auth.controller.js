import User from "../models/User";
import jwt from 'jsonwebtoken';
export const signup = async (req,res)=>{
    try{
    const {username,email,password} = req.body;
    const existUser = await User.findOne({email});
    if(existUser)
        return res.status(500).json({message:"email alrady exists"} );
    const newUser = new User({
        username,
        email,
        password: await User.encryptPassword(password)
    });
    const saveUser = await newUser.save();

    const token = jwt.sign({id:saveUser._id},'secret',{expiresIn:600});

    return res.status(200).json({token,username:saveUser.username,image:saveUser.image});
    }
    catch(error){
        console.log(error);
    }
}

export const signin = async (req,res)=>{
    try{
        const {email,password} = req.body;
        const existUser = await User.findOne({email});
        if(!existUser)
            return res.status(500).json({message:"user dosen't exist"});
        else{
            const matchPassword = await User.comparePassword(password,existUser.password);
            if(!matchPassword)
                return res.status(500).json({message:"Passwords don't match"});
            else{
                const token = jwt.sign({id:existUser._id},'secret',{expiresIn:60*60});
                return res.status(200).json({token,username:existUser.username,image:existUser.image});
            }
        }
    }
    catch(error){
        return res.status(500).json(error);
    }
}

export const getusers = async (req,res)=>{
    try{
        const users = await User.find({});
        return res.status(500).json(users);
    }
    catch(error){
        res.status(500).json(error);
    }
}


export const deleteuser = async (req,res) => {
    try {
        const {email} = req.body;
        const userdeleted =await User.deleteMany({username:"ruben"});
        return res.status(500).json(userdeleted);
    } catch (error) {
        return res.status(500).json(error);
    }
}