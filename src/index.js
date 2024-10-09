/*
 Inicializa o servidor
 Carrega os serviços
*/
import e from "express" 
import cliente_router from "./routes/cliente_route.js"

const app = e()

app.use(e.json())

app.use("/cliente", cliente_router)

app.listen(process.env.API_PORT,() => console.log("servidor rodando"))