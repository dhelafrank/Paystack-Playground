export class modalClass {
  open(heading, contents, callback) {
    if (document.querySelector(".modal-container")) {
      return
    }

    let modal = `<div class="modal-container">
        <div class="modal-window">
          <div class="modal-heading-container">
            <h3 class="modal-heading">${heading|| "Modal Heading"}</h3>
          </div>    
          ${contents || ""}
        </div>
      </div>`

    document.body.insertAdjacentHTML("beforebegin", modal)

    //Modal Opening Animation
    let modalContainer = document.querySelector(".modal-container")

    setTimeout(() => {
      modalContainer.style.opacity = "1"
    }, 100)

    modalContainer.addEventListener("click", (e) => {
      if ((e.target).classList.contains("modal-container")) {
        this.close()
      }
    })
    callback()
  }


  close() {
    let modal = document.querySelector(".modal-container")
    modal.style.opacity = "0"
    
    setTimeout(() => {
      modal.remove()
    }, 305)

  }
}