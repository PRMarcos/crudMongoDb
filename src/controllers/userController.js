const User = require('../models/User');

module.exports = {
  
    async index(req, res) {

        const users = await User.find();

        res.status(200).json({ users: users }); 
  },

  async store(req, res) {

    const {name,email} = req.body;

    const user = await User.findOne({email:email})

    if(user){
        res.status(400).json({ error:"user already exists", email: user.email });
    }else{  
        const createduser = await User.create({name,email})
        res.status(200).json({ createduser });
    }

  },

  async find(req, res) {
    res.status(500).json({ error: 'not implemented' });
  },

};