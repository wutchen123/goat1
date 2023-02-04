const multer = require('multer')

const fileFilter = (req, file, cb) => {
    file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf8');
    const allowedTypes = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ];
    if (!allowedTypes.includes(file.mimetype)) {
        req.fileValidationError = 'INCORRECT_FILETYPE';
        return cb(null, false, new Error("Incorrect file"));
    }
    cb(null, true);
};



const upload = multer({
    storage: multer.memoryStorage(),
    fileFilter,
    limits: { fileSize: 15000000 },
});

const uploadDocuments = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 15000000 },
});

module.exports = { upload, uploadDocuments }