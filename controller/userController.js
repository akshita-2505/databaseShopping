const User=require('../schemas/userSchema');

exports.addUser = (req, res) => {
    User.create(req.body)
        .then((data) =>{
            res.status(200).send({data});
        }).catch((err)=>{
        res.status(404).send(err);
        })
};

exports.getUser = (req,res) => {
    //   debugger;
    User.findAll({where:{isChecked:false}})
        .then((data) => {
            res.status(200).send({data});
        }).catch((err) => {
        res.status(404).send(err);
     })
}


exports.getUserById = (req,res) => {
    //debugger;
    User.findOne({where:{id: req.params.usersId}})
        .then((data) =>{
            if(data.isChecked == false){
                res.status(200).send({data});
            }
            else{
                res.status(404).send("data not found");
            }
        }).catch((err) => {
        res.status(404).send(err);
    }).catch((err)=>{
        res.status(404).send(err);
    })
}

exports.userUpdateById=(req,res)=>{
    User.findById(req.params.usersId)
        .then((data) => {
            if(data.isChecked == false){
                User.update(req.body,{where:{id:req.params.usersId}})
                    .then((data) =>{
                        res.status(200).send({data});
                     }).catch((err)=>{
                    res.status(404).send({message: ' Data not Exist'});
                });
            }
            else{
                res.status(404).send("data not found");
            }
        }).catch((err) => {
        res.status(404).send(err);
    }).catch((err)=>{
        res.status(404).send(err);
    })

};


exports.deleteUser=(req,res)=>{
    User.findOne({where:{id: req.params.usersId}})
        .then((data) => {
        if(!data) {
            res.status(404).send({message: ' Data not Exist'});
        }
        else
        {
            if(data.isChecked === true)
            {
                res.status(404).send("data not found = " + {data});
            }
            else
            {
                data.update({isChecked: true}, {where: {id: req.params.usersId}}
                ).then(() => {
                    res.status(200).send("deleted successfully = " + data);
                });
            }
        }
    }).catch((err)=>{
        res.status(404).send(err);
    })
};

exports.signIn = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({where:{email: email,password:password}}).then((result) => {
        if(result) {
            res.status(200).send(result);
        } else {
            res.send("data not exits");
        }
    }).catch((err)=>{
        res.status(404).send(err);
    })
};
// User.destroy({where:{id:req.params.usersId}})
//     .then((data) =>{
//         if(data){
//             res.send("data deleted")
//         }else{
//             res.send(err)
//         }
//     }).catch((err)=>{
//     res.send(err)
// });


