var multer = require('multer');
let UPLOAD_PATH = 'public';


const storage = storageDest =>multer.diskStorage({
    destination: function (req, file, cb) {

        cb(null, storageDest)
    },
    filename: function (req, file, cb) {
        let extArray = file.originalname.split(".");
        let extension = extArray[extArray.length - 1];
        //console.log(file);
        cb(null, Date.now()+ '.' +extension)
    }
});

const upload = storageDest=>multer({ storage: storage(storageDest) });
console.log(upload)
module.exports = upload
