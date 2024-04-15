const {Router} = require("express");
const router = Router();
const notasoCtrl = require("../controller/notas.controller")


router.get("/media", notasoCtrl.getMedia);
router.get("/apuntadas", notasoCtrl.getApuntadas);
router.get("/impartidas", notasoCtrl.getImpartidas);



module.exports = router;