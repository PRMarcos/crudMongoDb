const User = require('../models/User');
const Link = require('../models/Link');

module.exports = {
  
    async index(req, res) {

    const {userID} = req.params;

    const user = await User.findById(userID)

    if(!user){
        res.status(400).json({ error: 'user not found' });
    }else{

        const allLInks = await Link.find({
            user:userID
        })
        res.status(200).json({ links:allLInks, ownwer: user });
    }

    
  },

  async store(req, res) {


    const {userID} = req.params;
    const {name,url,iconUrl} =  req.body;

    const user = await User.findById(userID)

    if(!user){
        res.status(400).json({ error: 'user not found' });
    }else{

        const newLink = await Link.create({
            name:name,
            url:url,
            iconUrl:iconUrl,
            user:userID,
        });


        res.status(200).json({ linkcreated:newLink});
    }


    
  },

  async find(req, res) {
    res.status(500).json({ error: 'not implemented' });
  },

  async delete(req, res) {
    res.status(500).json({ error: 'not implemented' });
  },

  async update(req, res) {
    res.status(500).json({ error: 'not implemented' });
  },
};