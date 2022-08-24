require("dotenv").config({ path: "../env/secrets.env" });
const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");
const schema = require("../models/File.model");
const { transporter } = require("../config/nodemailer.js");
const { AUTH_EMAIL } = process.env;
const router = express.Router();

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
      cb(null, file.originalname)
  }
});

var upload = multer({ storage: storage });

router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    let { email } = req.body;
    email = email.trim().toLowerCase();

    if (
      email === "" ||
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    ) {
      res.status(400).json({
        status: "error",
        message: "Please enter a valid email",
      });
    }
    if (req.body.password !== null && req.body.password !== "") {
      password = await bcrypt.hash(req.body.password, 10);
    }
    const originalName = req.file.originalname;
    const data = {
      email,
      password,
      originalName,
      image: {
        data: fs.readFileSync(path.join(__dirname + '/../uploads/' + req.file.filename)),
        contentType: 'image/png'
    }
    };
    await schema.create(data);
    const mailOptions = {
      from: AUTH_EMAIL,
      to: email,
      subject: "File Uploaded",
      html: `
        <h1>Your file has been uploaded successfully</h1>
        <p>You can download it using name ${originalName} </p>
        `,
    };

    await transporter.sendMail(mailOptions, (err) => {
      if (err) {
        res.status(500).json({ message: err.message });
      }
      res.status(200).json({
        message: "File uploaded successfully, please check your email",
      });
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// const handleDownload = async (req, res) => {
//   try {
//     const originalName = req.body.file;
//     const pass = req.body.password;

//     const file = await schema.findOne({ originalName: `${originalName}` });

//     if (file.password != null) {
//       const isMatch = await bcrypt.compare(pass, file.password);
//       if (!isMatch) {
//         res.status(400).json({
//           status: "error",
//           message: "Password is incorrect",
//         });
//         return
//       }
//     }

//     downloadCount = file.downloadCount++;
//     await file.save();
//     res.download(`${file.filePath}`, file.originalName);

//   } catch (err) {
//     res.status(500).send({ message: err.message });
//   }
// };

// router.route("/download").get(handleDownload).post(handleDownload);

module.exports = router;
