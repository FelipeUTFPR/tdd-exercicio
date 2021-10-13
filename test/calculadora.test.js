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

    test('cliente sem nome lanca excecao', () => {
        expect(() => calculadora.montarPropostas({
            
            email: 'joaosilva@gmail.com',
            idade: 26,
            salario: 2000.00,
            cargo: 'dev',
        }))
            .toThrow('nome invalido');
    });

    test('cliente com salario negativo lanca excecao', () => {
        expect(() => calculadora.montarPropostas({
            nome: 'Joao da Silva',
            email: 'joaosilva@gmail.com',
            salario: -2000.00,
            cargo: 'dev',
        }))
            .toThrow('salario invalido');
    });

    test('cliente com cargo inválido lanca excecao', () => {
        expect(() => calculadora.montarPropostas({
            nome: 'Joao da Silva',
            email: 'joaosilva@gmail.com',
            salario: 2000.00,
            cargo: 'de',
        }))
            .toThrow('cargo invalido');
    });

    


    

/*  
       

    

    

    

    

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

describe('Test', () => {
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

describe('Gerente', () => {
    test('salario maior ou igual 5000', () => {
        const props = calculadora.montarPropostas({
            nome: 'Fernando souza',
            email: 'fernandosouza@gmail.com',
            salario: 6000.00,
            cargo: 'dba',
            
        });
        expect(props.length).toBe(1);
        expect(props[0]).toBeDeepCloseTo({
            descontoVal:1500,
            total: 4500
            
        }, 2);        
        

    
    });
    test('salario menor 5000', () => {
        const props = calculadora.montarPropostas({
            nome: 'Fernando souza',
            email: 'fernandosouza@gmail.com',
            salario: 4000.00,
            cargo: 'dba',
            
        });
        expect(props.length).toBe(1);
        expect(props[0]).toBeDeepCloseTo({
            descontoVal:1000,
            total: 3000
            
        }, 2);        
        

    
    });

});