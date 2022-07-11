const express = require("express");
const multer = require('multer');
const { uploadFile, downloadFile } = require("../controllers/files.controllers");

const router = express.Router();
const upload = multer({ dest: 'uploads' });

router.post("/upload", upload.single("file"), uploadFile);
router.get("/file/:id", downloadFile);

module.exports = router;