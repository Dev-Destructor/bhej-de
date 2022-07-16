const schema = require("../models/File.model");
const bcrypt = require("bcrypt");
const { transporter } = require("../config/nodemailer.js");

require("dotenv").config({ path: "../env/secrets.env" });
const { AUTH_EMAIL } = process.env;

const uploadFile = async (req, res) => {
  try {
    let { email } = req.body;
    email = email.trim().toLowerCase();

    const fileData = {
      path: req.file.path,
      originalName: req.file.originalname,
      email,
    };

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
      fileData.password = await bcrypt.hash(req.body.password, 10);
    }

    const file = await schema.create(fileData);
    const mailOptions = {
      from: AUTH_EMAIL,
      to: email,
      subject: "File Uploaded",
      html: `
      <h1>Your file has been uploaded successfully</h1>
      <p>You can download the file from <a href="${req.headers.origin}/api/file/${file.id}">here</a></p>
      `,
    };

    await transporter.sendMail(mailOptions, (err) => {
      if (err) {
        res.status(500).json({ message: err.message });
      }
      res
        .status(200)
        .json({
          message: "File uploaded successfully, please check your email",
        });
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const downloadFile = async (req, res) => {
  try {
    const file = await schema.findById(req.params.id);

    if (file.password !== null && file.password !== "") {
      if (req.body.password == null || req.body.password == "") {
        res.setHeader("Content-Type", "text/html");
        fs.readFile(htmlPath, "utf8", (err, data) => {
          if (err) {
            res.status(500).send({ message: err.message });
          } else {
            res.send(data);
          }
        });
        return;
      }

      if (!bcrypt.compareSync(req.body.password, file.password)) {
        res.render("password", { error: true });
      }

      file.downloadCount++;
      await file.save();

      res.download(
        `/home/destructor/Desktop/Dev/bhej-de/server/${file.path}`,
        file.originalName
      );
    }

    file.downloadCount++;
    await file.save();

    res.download(
      `/home/destructor/Desktop/Dev/bhej-de/server/${file.path}`,
      file.originalName
    );
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

module.exports = { uploadFile, downloadFile };
