const express = require("express");
const contacts = require("../controllers/contact.controller");

const router = express.Router();

// Route gốc: /api/contacts
router.route("/")
    .get(contacts.findALL)        // Lấy tất cả contact
    .post(contacts.create)        // Tạo contact mới
    .delete(contacts.deleteALL);  // Xóa tất cả contact

// Route: /api/contacts/favorite
router.route("/favorite")
    .get(contacts.findALLFavorite);

// Route: /api/contacts/:id
router.route("/:id")
    .get(contacts.findOne)        // Lấy contact theo id
    .put(contacts.update)         // Cập nhật contact
    .delete(contacts.delete);     // Xóa contact theo id

module.exports = router;
