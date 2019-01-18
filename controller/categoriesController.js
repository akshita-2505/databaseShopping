const Categories=require('../schemas/categoriesSchema');

exports.addUser = (req, res) => {
    Categories.create(req.body)
        .then((data) =>{
            res.status(200).send({data});
        }).catch((err)=>{
        res.status(404).send(err);
    })
};

exports.getUser = (req,res) => {
    //   debugger;
    Categories.findAll({where:{isChecked:false}})
        .then((data) => {
            res.status(200).send({data});
        }).catch((err) => {
        res.status(404).send(err);
    })
}


exports.getUserById = (req,res) => {
    //debugger;
    Categories.findOne({where:{id: req.params.categoriesId}})
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
    Categories.findById(req.params.categoriesId)
        .then((data) => {
            if(data.isChecked == false){
                Categories.update(req.body,{where:{id:req.params.categoriesId}})
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
    Categories.findOne({where:{id: req.params.categoriesId}})
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
                    data.update({isChecked: true}, {where: {id: req.params.categoriesId}}
                    ).then(() => {
                        res.status(200).send("deleted successfully = " + data);
                    });
                }
            }
        }).catch((err)=>{
        res.status(404).send(err);
    })
};
