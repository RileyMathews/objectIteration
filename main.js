//exercise to iterate through an object and print out the name if the gender is F

// create reference to the ul element in the html document
let listElement = document.querySelector("#student-list")


const students = [
    {
      name: "Cashew",
      gender: "F"
    },
    {
      name: "Rachael",
      gender: "F"
    },
    {
      name: "Joshua",
      gender: "M"
    },
    {
      name: "Daniel",
      gender: "M"
    },
    {
      name: "Jacob",
      gender: "M"
    },
    {
      name: "Paul",
      gender: "M"
    },
    {
      name: "Meghan",
      gender: "F"
    },
    {
      name: "Hayley",
      gender: "F"
    },
    {
      name: "Deanna",
      gender: "F"
    },
    {
      name: "Kyle",
      gender: "M"
    }
  ]

for (let i = 0; i < students.length; i++) {
    if (students[i].gender === "F") {
        let liElement = document.createElement("li")
        let textNode = document.createTextNode(students[i].name)
        liElement.appendChild(textNode)
        listElement.appendChild(liElement)
    }
}
