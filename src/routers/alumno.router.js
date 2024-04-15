const {Router} = require("express");
const router = Router();
const alumnoCtrl = require("../controller/alumno.controller")


router.get("/alumnos", alumnoCtrl.getAlumno);
router.post("/alumnos", alumnoCtrl.postAlumno);
router.put("/alumnos", alumnoCtrl.putAlumno);
router.delete("/alumnos", alumnoCtrl.deleteAlumno)


module.exports = router;