import {Schema, model } from "mongoose"

const lavagemSchema = new Schema({
    horario: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        enum: ["FUNCIONARIO", "MAQUINA"],
        required: true
    },
    status: {
        type: String,
        required: true
    },
    funcionario: {
        type: String,
        required: true
    },
    veiculo: {
        type: String,
        required: true
    }
})

const Lavagem = model("lavagem", lavagemSchema);

export default Lavagem;