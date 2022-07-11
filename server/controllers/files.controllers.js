const schema = require("../models/File.model");
const bcrypt = require("bcrypt");

const uploadFile = async (req, res) => {
  try {
    const fileData = {
      path: req.file.path,
      originalName: req.file.originalname,
    };

    fileData.link = `${req.headers.origin}/api/file/`;

    if (req.body.password !== null && req.body.password !== "") {
      fileData.password = await bcrypt.hash(req.body.password, 10);
    }

    const file = await schema.create(fileData);

    res.send({ Filelink: `${req.headers.origin}/api/file/${file.id}` });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const downloadFile = async (req, res) => {
  try {
    const file = await schema.findById(req.params.id);

    if (file.password !== null && file.password !== "") {
      if (req.body.password == null || req.body.password == "") {
        res.send("Enter Password");
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
