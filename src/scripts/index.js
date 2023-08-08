// Criando Posts via DOM
function henderPost() {
    //modal 1
    const dialogPost1 = document.querySelector("#first__modal")
    const articlePost1 = document.createElement("article")
    const divPerfilPost1 = document.createElement("div")
    const imgDialogPost1 = document.createElement("img")
    const divProficaoPost1 = document.createElement("div")
    const h2post1 = document.createElement("h2")
    const ProficicaoPost1 = document.createElement("p")
    const h2AssuntoPost1 = document.createElement("h2")
    const paragrafoPost1 = document.createElement("p")
    const buttonPost1 = document.createElement("button");

    //adicinando classes

    articlePost1.classList.add("article__post")
    divPerfilPost1.classList.add("perfil__post")
    imgDialogPost1.classList.add("perfil__img")
    h2post1.classList.add("secondary__title")
    ProficicaoPost1.classList.add("secondary__text")
    h2AssuntoPost1.classList.add("principal__title")
    paragrafoPost1.classList.add("text__modal")
    buttonPost1.classList.add("close__post1")

    //adicionando o conteudo
    imgDialogPost1.src = "./src/assets/img/user5.svg"
    imgDialogPost1.alt = "Iris Silva"
    h2post1.innerText = "Iris Silva"
    ProficicaoPost1.innerText = "Front end Engineer"
    h2AssuntoPost1.innerText = "Empresa de Tecnologia da Informação abre vagas para programa de estágio"
    paragrafoPost1.innerText = "A Framework Digital, empresa mineira especializada em Tecnologia da Informação, irá iniciar o seu sexto programa de estágio, com o prazode inscrições entre os dias 08 e 28 de agosto. O programa é conhecido como Framework Padawans, com inspiração nos filmes Star Wars. Nas histórias, os iniciantes fazem treinamentos para se tornar cavaleiros Jedi, que compõem o lado bom da força."
    buttonPost1.innerText = "X"

    //adicinando via dom

    divPerfilPost1.append(imgDialogPost1, divProficaoPost1)
    divProficaoPost1.append(h2post1, ProficicaoPost1)
    dialogPost1.append(articlePost1)
    articlePost1.append(divPerfilPost1, h2AssuntoPost1, paragrafoPost1, buttonPost1)

    //modal 2

    const dialogPost2 = document.querySelector(".second__modal")
    const articlePost2 = document.createElement("article")
    const divPerfilPost2 = document.createElement("div")
    const imgDialogPost2 = document.createElement("img")
    const divProficaoPost2 = document.createElement("div")
    const h2post2 = document.createElement("h2")
    const ProficicaoPost2 = document.createElement("p")
    const h2AssuntoPost2 = document.createElement("h2")
    const paragrafoPost2 = document.createElement("p")
    const buttonPost2 = document.createElement("button");

    //adicinando classes

    articlePost2.classList.add("article__post")
    divPerfilPost2.classList.add("perfil__post")
    imgDialogPost2.classList.add("perfil__img")
    h2post2.classList.add("secondary__title")
    ProficicaoPost2.classList.add("secondary__text")
    h2AssuntoPost2.classList.add("principal__title")
    paragrafoPost2.classList.add("text__modal")
    buttonPost2.classList.add("close__post2")

    //adicionando o conteudo
    imgDialogPost2.src = "./src/assets/img/user6.svg"
    imgDialogPost2.alt = "Carla Maria"
    h2post2.innerText = "Carla Maria"
    ProficicaoPost2.innerText = "Back end Engineer"
    h2AssuntoPost2.innerText = "Programa de estágio abre vagas em Segurança da Informação com regime remoto"
    paragrafoPost2.innerText = "Em Segurança da Informação, as vagas são destinadas às áreas de Security Operations Center (SOC), Administração de Dispositivos de Segurança (ADS), Resposta a Incidentes (RI), Segurança e Privacidade e Consultoria Técnica. O candidato interessado deverá estar matriculado em um curso superior em Ciência da Computação, Segurança da Informação, Tecnologia da Informação e afins, com previsão de conclusão do curso de fevereiro de 2023 a fevereiro de 2025."
    buttonPost2.innerText = "X"

    //adicinando via dom

    divPerfilPost2.append(imgDialogPost2, divProficaoPost2)
    divProficaoPost2.append(h2post2, ProficicaoPost2)
    dialogPost2.append(articlePost2)
    articlePost2.append(divPerfilPost2, h2AssuntoPost2, paragrafoPost2, buttonPost2)

    //modal 3

    const dialogPost3 = document.querySelector(".third__modal")
    const articlePost3 = document.createElement("article")
    const divPerfilPost3 = document.createElement("div")
    const imgDialogPost3 = document.createElement("img")
    const divProficaoPost3 = document.createElement("div")
    const h2post3 = document.createElement("h2")
    const ProficicaoPost3 = document.createElement("p")
    const h2AssuntoPost3 = document.createElement("h2")
    const paragrafoPost3 = document.createElement("p")
    const buttonPost3 = document.createElement("button");

    //adicinando classes

    articlePost3.classList.add("article__post")
    divPerfilPost3.classList.add("perfil__post")
    imgDialogPost3.classList.add("perfil__img")
    h2post3.classList.add("secondary__title")
    ProficicaoPost3.classList.add("secondary__text")
    h2AssuntoPost3.classList.add("principal__title")
    paragrafoPost3.classList.add("text__modal")
    buttonPost3.classList.add("close__post3")

    //adicionando o conteudo
    imgDialogPost3.src = "./src/assets/img/user7.svg"
    imgDialogPost3.alt = "João Carvalho"
    h2post3.innerText = "João Carvalho"
    ProficicaoPost3.innerText = "Devop's"
    h2AssuntoPost3.innerText = "O que é programação orientada a objetos e programação funcional"
    paragrafoPost3.innerText = "A Programação Funcional é uma orientação focada na programação declarativa.Conhecendo mais a programação funcional a partir de códigos podemos nos deparar de primeira com o conceito mais centralda programação funcional, que é o conceito de funções puras, isso significa que o retorno de uma função deve depender apenas dos seus parâmetros de entrada.Com classes podemos editar os valores das propriedades dos objetos criados ou ainda criar métodos para essas propriedades, ainda por cima podemos definir se vão ser públicos (vão para o objeto) ou estáticos(não são instanciados, ou seja, não vão para o objeto), e isso tem seu lado bom e ruim."
    buttonPost3.innerText = "X"

    //adicinando via dom

    divPerfilPost3.append(imgDialogPost3, divProficaoPost3)
    divProficaoPost3.append(h2post3, ProficicaoPost3)
    dialogPost3.append(articlePost3)
    articlePost3.append(divPerfilPost3, h2AssuntoPost3, paragrafoPost3, buttonPost3)


}
henderPost()



function handleModal() {
    const button1 = document.querySelector(".button1")
    const modalContainer = document.querySelector("#first__modal")

    button1.addEventListener("click", () => {
        modalContainer.showModal()

        closeModal()
    })

    const button2 = document.querySelector(".button2")
    const modalContainer2 = document.querySelector(".second__modal")

    button2.addEventListener("click", () => {
        modalContainer2.showModal()

        closeModal()
    })

    const button3 = document.querySelector(".button3")
    const modalContainer3 = document.querySelector(".third__modal")

    button3.addEventListener("click", () => {
        modalContainer3.showModal()

        closeModal()
    })
}

handleModal()

function closeModal() {
    const button1 = document.querySelector(".close__post1")
    const modalContainer = document.querySelector("#first__modal")

    button1.addEventListener("click", () => {
        modalContainer.close()
    })

    const button2 = document.querySelector(".close__post2")
    const modalContainer2 = document.querySelector(".second__modal")

    button2.addEventListener("click", () => {
        modalContainer2.close()
    })

    const button3 = document.querySelector(".close__post3")
    const modalContainer3 = document.querySelector(".third__modal")

    button3.addEventListener("click", () => {
        modalContainer3.close()
    })

}
closeModal()

//botão de seguir:
function follow() {
    const buttonFollow = document.querySelectorAll(".follow__button");
    for (let i = 0; i < buttonFollow.length; i++) {
        buttonFollow[i].addEventListener("click", () => {
            if (buttonFollow[i].innerHTML === "Seguir") {
                buttonFollow[i].innerHTML = "Seguindo";
                buttonFollow[i].style.background = "var(--brand-1)";
                buttonFollow[i].style.color = "var(    --white-fixed)";
                buttonFollow[i].style.border = "none";
            }
            else if (buttonFollow[i].innerHTML === "Seguindo") {
                buttonFollow[i].innerHTML = "Seguir";
                buttonFollow[i].style.background = "var(    --white-fixed)";
                buttonFollow[i].style.color = "var(--gray1)";
                buttonFollow[i].style.border = "1px solid var(--gray1)";
            }
        });
        buttonFollow[i].classList.add("follow__button")
    }
}
follow();
