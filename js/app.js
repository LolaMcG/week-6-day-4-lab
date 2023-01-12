document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector("#new-item-form")

  form.addEventListener("submit", (event) => {
    event.preventDefault()
    const newBook = document.createElement("li")
    newBook.textContent = `
    ${event.target.title.value}
    ${event.target.author.value}
    ${event.target.category.value}
    `

    const readingList = document.querySelector("ul")
    readingList.appendChild(newBook)

    form.reset()
    });

    const deleteAll = document.querySelector("#delete")

    deleteAll.addEventListener("submit", () => {
      document.getElementById("#reading-list").innerHTML = ""


      // let element = document.getElementById("#reading-list")
      // while (element.firstChild){
      //   element.removeChild(element.firstChild)
      // }
    })

  })
