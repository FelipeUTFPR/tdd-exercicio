const Schema = require('validate');

const clienteSchema = new Schema({
    nome: {
        type: String,
        required: true,
        length: { min: 3, max: 200 },
        message: 'nome invalido'
    },
    email: {
        type: String,
        required: true,
        length: { min: 3, max: 200 },
        message: 'email invalido'
    },
    
    salario: {
        type: Number,
        required: true,
        use: { nonNegative: val => val > 0 },
        message: 'salario invalido'
    },
    cargo: {
        type: String,
        required: true,
        length: { min: 3, max: 200 },
        message: 'cargo invalido'
    }
});

function validar(cliente) {
    const errors = clienteSchema.validate(cliente);
    if (errors.length > 0)
        throw errors;
}

module.exports = validar;