const atividade = {
    nome: "Almoço",
    data: new Date("2024-07-08 10:00"),
    finalizada: true
}

const atividades = [
    atividade,
    {
        nome: "Academia em grupo",
        data: new Date("2024-07-09 09:00"),
        finalizada: false
    },

    {
        name: "Gamming session",
        data: new Date("2024-07-09 16:00"),
        finalizada: true
    }
]

const criarItemDeAtividade = (atividade) => {
    let input = '<input type="checkbox"'
    if (atividade.finalizada){
        input += 'checked'
    }

    input += '>'

    return `
    <div>
    ${input}
    <span>${atividade.nome}</span>
    <time>${atividade.data}</time>
  </div>  
    `
    
}

const section = document.querySelector('section')
for(let atividade of atividades){
    section.innerHTML += criarItemDeAtividade(atividade)
}