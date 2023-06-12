const activityModel = require("../models/activityModel")

module.exports.getactivitie = async (req, res) => {

const activ = await activityModel.find()
res.send(activ)

};


module.exports.saveactivitie = (req, res) => {

    const { name, duration ,calories } = req.body;
  activityModel.create({name , duration ,calories })
  .then((data)=> {
    console.log("saved successfuly...");
    res.status(201).send(data)
  }).catch((err) => {
       console.log(err);
       res.send({error: err, msg:"something went wrong"});
  })
    
};



module.exports.updateactivitie = (req, res) => {
      const {id} = req.params
    const  {activite} = req.body
    
    activityModel.findByIdAndUpdate(id, {activite})
    .then(()=> res.send('update successfuly...'))
    .catch((err) => {
         console.log(err);
         res.send({error: err, msg:"something went wrong"});
    })
      
  };
  
  module.exports.deleteactivitie = (req, res) => {
    const {id} = req.params
  activityModel.findOneAndDelete(id)
  .then(()=> res.send('delete successfuly...'))
  .catch((err) => {
       console.log(err);
       res.send({error: err, msg:"something went wrong"});
  })
    
};