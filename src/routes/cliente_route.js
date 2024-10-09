import { Router } from "express"
import { 
    store,
    index,
    show,
    update,
    destroy 
} from "../controllers/cliente_controller.js"
const router = Router()

router.post("/", /*implementar a criacao do cliente*/)
router.get("/",)
router.get("/:id",)
router.put("/:id",)
router.delete("/:id",)

export default router;