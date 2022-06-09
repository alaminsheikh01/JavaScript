const router = require("express").Router();
const Ucontroller = require("../controller/userController");

router.get("/:userId", Ucontroller.getUserById);

router.put("/:userId", Ucontroller.putUserById);

router.patch("/:userId", Ucontroller.patchUserById);

router.delete("/:userId", Ucontroller.deleteUserById);

router.get("/", Ucontroller.getUsers);

// create a new user

router.post("/", Ucontroller.postUser);

/**
 * Get user by id or email
 */

module.exports = router;
