const validar = require('./clientevalidador');

class Calculadora {
    montarPropostas(cliente) {
        validar(cliente);

        if (cliente.cargo === 'dev') {
            if (cliente.slario >= 3000.00){
                return [
                    criarProposta(0.2, cliente.salario),
                    
                ];

            }
            return [
                criarProposta(0.1, cliente.salario),
                
            ];
            
        }

        if (cliente.cargo === 'dba') {
            if (cliente.salario >= 2000.00){
                return [
                    criarProposta(0.25, cliente.salario)
                    
                ];

            }
            return [
                criarProposta(0.15, cliente.salario)
                
            ];
        }

        if (cliente.cargo === 'test') {
            if (cliente.salario >= 2000.00){
                return [
                    criarProposta(0.2, cliente.salario)
                    
                ];

            }
            return [
                criarProposta(0.1, cliente.salario)
                
            ];
        }

        

        if (cliente.cargo === 'gerente') {
            if (cliente.salario >= 5000.00){
                return [
                    criarProposta(0.2, cliente.salario)
                ];

            }
            return [
                criarProposta(0.1, cliente.salario)
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