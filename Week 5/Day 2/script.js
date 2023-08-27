
// const cantainer = document.getElementById("conainer")
//     console.log('container:', container)

//     ducument.querySelector(".list").children[1].textcontent = "Richard"

//     const list = document.querySelectorAll(".list")
//     list.forEach(list => list.firstElementChild.textContent = "David")

//     list[1].children[1].remove()

//     list.forEach(list => list.classList.add("student_list"))
//     console.log(list)

//     const firstUl = document.querySelector('ul.List.student_list')
//     firstUl.ClassList.add("university", "attendance")
//     console.log(firstUl)

//     <script>
//   const container = document.getElementById("container")
//   console.log('container:', container)
//   document.querySelector(".list").children[1].textContent = "Richard"
//   const lists = document.querySelectorAll(".list")
//   lists.forEach(list => list.firstElementChild.textContent = "David")
//   lists[1].children[1].remove()
//   lists.forEach(list => list.classList.add("student_list"))
//   console.log(lists)
//   const firstUl = document.querySelector('ul.list.student_list')
//   firstUl.classList.add("university", "attendance")
//   console.log(firstUl)
// </script>




<script>
  const allBooks = []

  const book1 = {
    title: "Harry Potter",
    author: "J.K. Rowling",
    image: "https://picsum.photos/200",
    alreadyRead : false
  }

  const book2 = {
    title: "Lord of the Rings",
    author: "Tolkien",
    image: "https://picsum.photos/200",
    alreadyRead : true
  }

  allBooks.push(book1, book2)

  console.log("allbooks: ", allBooks)

  const table = document.createElement("table")
  table.innerHTML = `
  <thead>
      <tr>
        <th colspan="1">My book list</th>
      </tr>
    </thead>
    <tbody>
      <tr class="${book1.alreadyRead ? "is-read" : ""}">
        <td>${book1.title} written by ${book1.author}</td>
        <td><img src="${book1.image}"/></td>
        <td>Already read: ${book1.alreadyRead}</td>
      </tr>
      <tr class="${book2.alreadyRead ? "is-read" : ""}">
        <td>${book2.title} written by ${book2.author}</td>
        <td><img src="${book2.image}"/></td>
        <td>Already read: ${book2.alreadyRead}</td>
      </tr>
    </tbody> 
  `

  const bookListDiv = document.querySelector(".list-books")
  console.log("bookListDiv:", bookListDiv)
  bookListDiv?.appendChild(table)

  console.log(table)
</script>


