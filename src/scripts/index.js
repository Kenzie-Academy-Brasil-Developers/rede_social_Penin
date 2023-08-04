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