/**
 * Ler o array e converter para um novo array, com as informações concatenadas para exportação em CSV
 * "Gustavo Rocha";"(11) 9999.8888";"Kegsoftware";"Ativo"
 * 
 * - Campos string devem estar entre "" 
 * - Campos numericos não devem estar entre ""
 * - Campos separados por ;
 * - Campo de status deve ser apresentado como texto. 1 deve ser Ativo, 0 deve ser Inativo
 */

const contatos = [
    { 
        nome: 'Gustavo Rocha',
        telefone: '(11) 99999.8888',
        empresa: 'Kegsoftware',
        ativo: 1
    },
    { 
        nome: 'João',
        telefone: '(11) 2222.2222',
        empresa: 'Feira do Tio Zé',
        ativo: 1
    },
    { 
        nome: 'Maria',
        telefone: '(49) 3333.3333',
        empresa: 'kegsoftware',
        ativo: 0
    },
    { 
        nome: 'Júlia',
        telefone: '(11) 4444.4444',
        empresa: 'Clinica MediFetal',
        ativo: 0
    },
    
]
