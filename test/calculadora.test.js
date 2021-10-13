const { toBeDeepCloseTo } = require('jest-matcher-deep-close-to');
expect.extend({ toBeDeepCloseTo });

const Calculadora = require('../lib/calculadora');
const calculadora = new Calculadora();

describe('Desenvolvedor', () => {
    test('salario maior ou igual 3000', () => {
        const props = calculadora.montarPropostas({
            nome: 'Joao da Silva',
            email: 'joaosilva@gmail.com',
            salario: 3050.00,
            cargo: 'dev',
            
        });
        expect(props.length).toBe(1);
        expect(props[0]).toBeDeepCloseTo({
            descontoVal:305,
            total: 2745
            
        }, 2);        
        

    
    });
    test('salario menor 3000', () => {
        const props = calculadora.montarPropostas({
            nome: 'Joao da Silva',
            email: 'joaosilva@gmail.com',
            salario: 2000.00,
            cargo: 'dev',
            
        });
        expect(props.length).toBe(1);
        expect(props[0]).toBeDeepCloseTo({
            descontoVal:200,
            total: 1800
            
        }, 2);        
        

    
    });
/*  
    test('cliente com salario > 1000 e < 5000', () => {
        const props = calculadora.montarPropostas({
            nome: 'Maria Oliveira',
            idade: 26,
            salario: 2000.00,
            valorFinanciado: 10000.00
        });
        expect(props.length).toBe(3);
        expect(props[0]).toBeDeepCloseTo({
            total: 13000.00,
            numeroParcelas: 2,
            valorDaParcela: 6500.00
        }, 2);
        expect(props[1]).toBeDeepCloseTo({
            total: 15000.00,
            numeroParcelas: 4,
            valorDaParcela: 3750.00
        }, 2);
        expect(props[2]).toBeDeepCloseTo({
            total: 15000.00,
            numeroParcelas: 10,
            valorDaParcela: 1500.00
        }, 2);                
    });

    test('cliente com salario > 5000', () => {
        const props = calculadora.montarPropostas({
            nome: 'Antonio Maria Oliveira',
            idade: 26,
            salario: 10000.00,
            valorFinanciado: 10000.00
        });
        expect(props.length).toBe(4);
        expect(props[0]).toBeDeepCloseTo({
            total: 11000.00,
            numeroParcelas: 2,
            valorDaParcela: 5500.00
        }, 2);
        expect(props[1]).toBeDeepCloseTo({
            total: 13000.00,
            numeroParcelas: 4,
            valorDaParcela: 3250.00
        }, 2);
        expect(props[2]).toBeDeepCloseTo({
            total: 13000.00,
            numeroParcelas: 10,
            valorDaParcela: 1300.00
        }, 2);                
        expect(props[3]).toBeDeepCloseTo({
            total: 14000.00,
            numeroParcelas: 20,
            valorDaParcela: 700.00
        }, 2);                
    });    

    test('cliente sem nome lanca excecao', () => {
        expect(() => calculadora.montarPropostas({
            idade: 26,
            salario: 10000.00,
            valorFinanciado: 10000.00
        }))
            .toThrow('nome invalido');
    });

    test('cliente com salario negativo lanca excecao', () => {
        expect(() => calculadora.montarPropostas({
            nome: 'Antonio Maria Oliveira',
            idade: 26,
            salario: -10000.00,
            valorFinanciado: 10000.00
        }))
            .toThrow('salario invalido');
    });

    test('cliente com idade invalida lanca excecao', () => {
        expect(() => calculadora.montarPropostas({
            nome: 'Antonio Maria Oliveira',
            idade: 77,
            salario: 10000.00,
            valorFinanciado: 10000.00
        }))
            .toThrow('idade invalida');
    });

    test('cliente com valor financiado invalido lanca excecao', () => {
        expect(() => calculadora.montarPropostas({
            nome: 'Antonio Maria Oliveira',
            idade: 66,
            salario: 10000.00,
            valorFinanciado: 100000.10
        }))
            .toThrow('valor financiado invalido');
    });

    */
});

describe('DBA', () => {
    test('salario maior ou igual 2000', () => {
        const props = calculadora.montarPropostas({
            nome: 'Fernando souza',
            email: 'fernandosouza@gmail.com',
            salario: 3000.00,
            cargo: 'dba',
            
        });
        expect(props.length).toBe(1);
        expect(props[0]).toBeDeepCloseTo({
            descontoVal:750,
            total: 2250
            
        }, 2);        
        

    
    });
    test('salario menor 2000', () => {
        const props = calculadora.montarPropostas({
            nome: 'Fernando souza',
            email: 'fernandosouza@gmail.com',
            salario: 1000.00,
            cargo: 'dba',
            
        });
        expect(props.length).toBe(1);
        expect(props[0]).toBeDeepCloseTo({
            descontoVal:150,
            total: 850
            
        }, 2);        
        

    
    });

});