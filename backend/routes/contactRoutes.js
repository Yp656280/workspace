const express = require("express");
const router = express.Router();
const validateToken = require("../middleware/validateTokenHandler");
const {
  getContacts,
  getContact,
  putContacts,
  postContacts,
  deleteContacts,
} = require("../controller/contactController");
router.use(validateToken);
router.route("/").get(getContacts).post(postContacts);
router.route("/:id").get(getContact).put(putContacts).delete(deleteContacts);

module.exports = router;