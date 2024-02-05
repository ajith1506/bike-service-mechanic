const MemberModel = require("../model/memberModel");

exports.updateProfile = (req, res) => {
  const id = req.params.mechId;
  MemberModel.updatemany({ _id: id }, { $set: req.body })
    .exec()
    .then((response) => {
      console.log("profile Updated Successfully" + response);
      res.status(200).json({
        message: "profile Updated Successfully",
        response,
      });
    })
    .catch((err) => {
      console.log("profile update error" + err);
      res.status(500).json({ "Profile Update error": err });
    });
};

exports.deleteProfile = (req, res) => {
  const id = req.params.mechId;
  MemberModel.deleteOne({ _id: id })
    .exec()
    .then((response) => {
      res.status(200).json({
        message: "Account Deleted",
      });
    })
    .catch((err) => {
      console.log("profile delete error" + err);
      res.status(500).json({ "Profile delete error": err });
    });
};
