const router = require("express").Router();
const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");
const authentic = require("../middleware/authenticate");
const adminAttendanceRoute = require("./admin-attendance-route");
const studentAttendanceRoutes = require("./student-attendance-route");

router.use("/api/v1/auth", authRoutes);
router.use("/api/v1/users", authentic, userRoutes);
router.use("/api/v1/admin/attendance", authentic, adminAttendanceRoute);
router.use("/api/v1/student/attendance", authentic, studentAttendanceRoutes);

module.exports = router;
