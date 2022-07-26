const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.fieldname === 'images') {
            cb(null, './images');
        } else if (file.fieldname === 'video') {
            cb(null, './videos')
        }
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})
module.exports = { storage }