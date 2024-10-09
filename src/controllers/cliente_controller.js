import Cliente from "../models/cliente_model.js"

const store = async (req, res) => {
    try{
    await Cliente.create(req.body)
     res.json()
    } catch (error) {
        
        res.status(400).send(error.message)
    }
}
import Cliente from "../models/cliente_model.js"

const store = async (req, res) => {
    try{
    await Cliente.create(req.body)
     res.json()
    } catch (error) {
        
        res.status(400).send(error.message)
    }
}