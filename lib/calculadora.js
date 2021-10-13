const validar = require('./clientevalidador');

class Calculadora {
    montarPropostas(cliente) {
        validar(cliente);

        if (cliente.cargo === 'dev') {
            return [
                criarProposta(2, 2, cliente.valorFinanciado),
                criarProposta(2, 3, cliente.valorFinanciado)
            ];
        }

        if (cliente.cargo === 'dba') {
            return [
                criarProposta(1.3, 2, cliente.valorFinanciado),
                criarProposta(1.5, 4, cliente.valorFinanciado),
                criarProposta(1.5, 10, cliente.valorFinanciado)
            ];
        }

        if (cliente.cargo === 'test') {
            return [
                criarProposta(1.3, 2, cliente.valorFinanciado),
                criarProposta(1.5, 4, cliente.valorFinanciado),
                criarProposta(1.5, 10, cliente.valorFinanciado)
            ];
        }

        if (cliente.cargo === 'dba') {
            return [
                criarProposta(1.3, 2, cliente.valorFinanciado),
                criarProposta(1.5, 4, cliente.valorFinanciado),
                criarProposta(1.5, 10, cliente.valorFinanciado)
            ];
        }

        if (cliente.cargo === 'gerente') {
            return [
                criarProposta(1.3, 2, cliente.valorFinanciado),
                criarProposta(1.5, 4, cliente.valorFinanciado),
                criarProposta(1.5, 10, cliente.valorFinanciado)
            ];
        }

        
    }
}

function criarProposta(desconto, salario) {
    return {
        descontoVal: desconto * salario,
        total: salario - (desconto *salario)
    };
}

module.exports = Calculadora;