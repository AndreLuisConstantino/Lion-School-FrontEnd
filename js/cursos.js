'use strict'

import { getCursos } from "./API/cursosAPI.JS"

const cursos = await getCursos()

const listaCursos = cursos.curso

const criarCardsCurso = (curso) => {
    const linkCard = document.createElement('a')
    linkCard.classList.add('link__card')
    linkCard.href = 'pages/alunos.html'

    localStorage.setItem('curso', curso.sigla)
    // const teste = localStorage.getItem('curso')
    // console.log(teste);
    
    const containerCard = document.createElement('div')
    containerCard.classList.add('card__container')

    const imageCard = document.createElement('img')
    imageCard.src = curso.icone
    imageCard.alt = `Icone do Curso: ${curso.nome}`

    const siglaCard = document.createElement('span')
    siglaCard.textContent = curso.sigla

    containerCard.append(imageCard, siglaCard)
    linkCard.append(containerCard)

    return linkCard
}

const carregarCursos = () => {
    const containerCardsCurso = document.getElementById('cursos-container')
    const cardsCursos = listaCursos.map(criarCardsCurso)

    containerCardsCurso.replaceChildren(...cardsCursos)
}

carregarCursos()