const AddToCart=require('../schemas/addtocartSchema');
let UPLOAD_PATH = 'public/AddtocartImages';

exports.uploadProduct = (req, res) => {
    const {body:{name,cid,scid,image,price,quntity,detail,email}} = req;
    debugger
    console.log("----enter----"+(cid))
    if(res) {
        let product= {
            name,
            cid,
            scid,
            image: req.file && (UPLOAD_PATH+'/'+req.file.filename),
            price,
            quntity,
            detail,
            email
        };

        AddToCart.create(product)
            .then((res) => res.send({res}))
            .catch((error) => {
                console.log(error)
                return res.status(500).send(error)
            });
    }
};


exports.addUser = (req, res) => {
    AddToCart.create(req.body)
        .then((data) =>{
            res.status(200).send({data});
        }).catch((err)=>{
        res.status(404).send(err);
    })
};

exports.getUser = (req,res) => {
    //   debugger;
    AddToCart.findAll({where:{isChecked:false}})
        .then((data) => {
            res.status(200).send({data});
        }).catch((err) => {
        res.status(404).send(err);
    })
}

exports.getUserByEmail = (req,res) => {
    //debugger;
    AddToCart.findAll({where:{email: req.params.productsId,isChecked:false}})
        .then((data) => {
            res.status(200).send({data});
        }).catch((err) => {
        res.status(404).send(err);
    }).catch((err)=>{
        res.status(404).send(err);
    })
}


// exports.getUserById = (req,res) => {
//     //debugger;
//     Products.findOne({where:{id: req.params.productsId}})
//         .then((data) =>{
//             if(data.isChecked == false){
//                 res.status(200).send({data});
//             }
//             else{
//                 res.status(404).send("data not found");
//             }
//         }).catch((err) => {
//         res.status(404).send(err);
//     }).catch((err)=>{
//         res.status(404).send(err);
//     })
// }
exports.getUserBySCId = (req,res) => {
    //debugger;
    AddToCart.findAll({where:{scid: req.params.productsId,isChecked:false}})
        .then((data) => {
            res.status(200).send({data});
        }).catch((err) => {
        res.status(404).send(err);
    }).catch((err)=>{
        res.status(404).send(err);
    })
}
exports.userUpdateById=(req,res)=>{
    AddToCart.findById(req.params.productsId)
        .then((data) => {
            if(data.isChecked == false){
                AddToCart.update(req.body,{where:{id:req.params.usersId}})
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
exports.deleteUser=(req,res)=> {
    debugger
     AddToCart.destroy({where: {id: req.params.productsId}})
         .then((data) => {
             if (data) {
                 res.send("data deleted")
             } else {
                 res.send(err)
             }
         }).catch((err) => {
         res.send(err)
     });
 }
// exports.deleteUser=(req,res)=>{
//     AddToCart.findOne({where:{id: req.params.productsId}})
//         .then((data) => {
//             if(!data) {
//                 res.status(404).send({message: ' Data not Exist'});
//             }
//             else
//             {
//                 if(data.isChecked === true)
//                 {
//                     res.status(404).send("data not found = " + {data});
//                 }
//                 else
//                 {
//                     data.update({isChecked: true}, {where: {id: req.params.productsId}}
//                     ).then(() => {
//                         res.status(200).send("deleted successfully = " + data);
//                     });
//                 }
//             }
//         }).catch((err)=>{
//         res.status(404).send(err);
//     })
// };
