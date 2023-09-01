const { log } = require('console');
const user = require('../models/userModel');
const path = require('path');


const login = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const userdata = await user.findOne({ email: email, password: password });
    

    if (userdata) {
      res.send('Logged In');
      res.end();
    } else {
      res.status(401).send('Invalid');
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Internal Server Error');
  }
}

module.exports = {
get:async  (req, res) => {
try{
   
 
    // const data = {name:"sugesh",age:26,place:'Kannur'}
    // res.status(200).json(data)
}catch(error){
console.log(error.message);
}
},
// post: async (req, res) => {
  
    
//     const name = req.body.name;
//     const password = req.body.password;
  
//     await user.findOne({ name: name }, (error, user) => {
//       if (error) {
//         console.log(error);
//         return res.status(500).send();
//       }
//       if (!user) {
//         return res.status(404).send();
//       }
//       if (user.password !== password) {
//         return res.status(401).send();
//       }
//       res.end('Logged In');
//     });
//   },


login 

}



