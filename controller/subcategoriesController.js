const Subcategories=require('../schemas/subCategoriesSchema');
let UPLOAD_PATH = 'public/subcategoryImages';

exports.uploadProduct = (req, res) => {
    const {body:{cid,name,image}} = req;
    if(res) {
        let subcategory= {
            name,
            image: req.file && (UPLOAD_PATH+'/'+req.file.filename),
            cid
        };

        Subcategories.create(subcategory)
            .then((res) => res.send({res}))
            .catch((error) => {
                console.log(error)
                return res.status(500).send(error)
            });
    }
};

exports.addUser = (req, res) => {
    Subcategories.create(req.body)
        .then((data) =>{
            res.status(200).send({data});
        }).catch((err)=>{
        res.status(404).send(err);
    })
};

exports.getUser = (req,res) => {
    Subcategories.findAll({where:{isChecked:false}})
        .then((data) => {
            res.status(200).send({data});
        }).catch((err) => {
        res.status(404).send(err);
    })
}


// exports.getUserById = (req,res) => {
//     //debugger;
//     Subcategories.findOne({where:{id: req.params.usersId}})
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
exports.getUserByCId = (req,res) => {
    //debugger;
    Subcategories.findAll({where:{cid: req.params.usersId,isChecked:false}})
        .then((data) => {
            res.status(200).send({data});
        }).catch((err) => {
        res.status(404).send(err);
    }).catch((err)=>{
        res.status(404).send(err);
    })
}
exports.userUpdateById=(req,res)=>{
    Subcategories.findById(req.params.usersId)
        .then((data) => {
            if(data.isChecked == false){
                Subcategories.update(req.body,{where:{id:req.params.usersId}})
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
    Subcategories.findOne({where:{id: req.params.usersId}})
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



