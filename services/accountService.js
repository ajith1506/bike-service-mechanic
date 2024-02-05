const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/check-auth");
const AccountController = require("../controller/accountController");

router.patch(
  "/update/:mechId",
  [checkAuth.verifyToken],
  AccountController.updateProfile
);

router.delete(
  "/delete/:mechId",
  [checkAuth.verifyToken],
  AccountController.deleteProfile
);

module.exports = router;
