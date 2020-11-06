/**
 * FrontEnd
 * 0) fundo colorido (css) ok 
 * 1) container englobando toda aplicacao (div + CSS) ok 
 * 1.1) titulo (h2) ok 
 * 1.2) input + botao (a + conteudo) (adicionar na lista) ok 
 * 1.3) lista de itens (ul/ol + li) adicionados (se não tiver item, mostra mensagem padrão) ok 
 * 
 * Logica (backend)
 * Se clicar no botao novo: ok
 *  - pegar o conteudo do input - ok
 *  - apagar o conteudo do input - ok
 *  - adicionar a lista (popular lista) - ok
 *    - Limpar a lista - ok
 *    - Se a lista estiver vazia - ok
 *      - Colocar um item na lista dizendo: Sem tarefas a fazer - ok
 *    - Senão - ok
 *      - Criar um item com a tarefa - ok
 *      - checkbox a esquerda - ok
*          - Se estiver marcado, riscar o texto (ok) e retirar o x da tela (ok)
 *         - Se não estiver marcado, deixar padrão (ok)
 *    - X a direita - ok 
 *      - Se clicar no X, excluir da minha lista - ok
 *
*/

// Array para guardar as tarefas criadas
const taskListData = []

//-- Função que atualiza a lista de tarefas
loadTaskList()

//-- Função que cria uma nova tarefa no array 
function newTask(){
    //-- referencio o input
    const taskInput = document.querySelector('#taskInput')

    //-- Só adiciona se o input tiver algum valor (foi preenchido.)
    if(taskInput.value !== ''){ 

        //-- Insiro no array
        taskListData.push(taskInput.value)

        //-- limpa o input depois de pegar o valor
        taskInput.value = ''

        //-- Atualiza a lista
        loadTaskList()
    }
}

//-- Função que atualiza a lista na tela
function loadTaskList(){
    //-- Referencio a lista
    const taskList = document.querySelector('.taskList')

    //-- Limpo toda lista antes de mais nada
    taskList.innerHTML = ''

    //-- Se a lista não tem dados
    if(taskListData.length == 0){
        //-- Insiro na lista um li padrao (manualmente)
        taskList.innerHTML = '<li>Sem tarefas a fazer</li>'
    } else { 

        //-- Se existem dados na lista, verifico linha a linha
        taskListData.forEach((task,index) => { 
            //-- Crio um novo LI
            const newLi = document.createElement('li')
            //-- Adiciono a ID de forma dinamica
            newLi.id = `task_${index}`

            //-- Crio um input
            const newCheck = document.createElement('input')
            //-- altero para o tipo checkbox
            newCheck.type = 'checkbox'
            
            /**
             * Crio um evento para o onclick;
             * - Se colocar selectedItem() com parenteses ele já vai executar
             * - Se colocar selectedItem() DENTRO de uma arrowfunction, só
             * vai executar quando realmente clicar no elemento
             */
            newCheck.onclick = () => { selectedItem( newLi.id ) }
            //-- insiro o elemento CheckBox dentro do LI
            newLi.appendChild(newCheck)

            //-- Crio um texto dentro do LI, é possível fazer das duas formas abaixo
            //newLi.innerText = task
            newLi.appendChild(document.createTextNode(task))

            //-- Crio um novo elemento A (link)
            const newA = document.createElement('a')
            //-- # server para não mudar de pagina, o link fica "morto"
            newA.href = "#"
            //-- Adicionei um texto dentro do A
            newA.innerText = 'x'
            //-- Adicionei um tooltip
            newA.title = 'Excluir tarefa'
            /**
             * Crio um evento para o onclick;
             * - Se colocar selectedItem() com parenteses ele já vai executar
             * - Se colocar selectedItem() DENTRO de uma arrowfunction, só
             * vai executar quando realmente clicar no elemento
             */
            newA.onclick = () => { removeItem(index) }

            //-- insiro o elemento A dentro do LI
            newLi.appendChild(newA)

            //-- insiro o elemento LI pronto dentro da Lista
            taskList.appendChild(newLi)

        })
    }
}

//-- Função para remover o item do array
function removeItem(index){
    /**
     * Slice é uma função para arrays que remove um item. 
     * Parametros:
     *  1) onde vai comecar a remover
     *  2) quantidade de elementos que vai remover
     */
    taskListData.splice(index, 1)

    //-- Atualiza a lista   
    loadTaskList()
}

//-- Função que muda o estilo dos elementos, caso o checkbox esteja marcado
function selectedItem(id) {
    //-- Referencio o item da lista 
    const elem = document.querySelector(`#${id}`)
    //-- Alterno a classe. Se existe, ele tira, senão ele coloca a classe
    elem.classList.toggle('selected')
}