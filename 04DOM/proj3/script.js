const courses = [
    {
        name: "React course",
        price: 2.3
    },
    {
        name: "Angular course",
        price: 2.4
    },
    {
        name: "Nodejs course",
        price: 2.9
    },
    {
        name: "mongoDB course",
        price: 2.2
    },
    {
        name: "Javascipt course",
        price: 2.0
    }
]

function generateList() {
    const ul = document.querySelector(".list-group");
    ul.innerHTML="";
    courses.forEach((course) => {

        const li = document.createElement("li");  //create <li></li>
        li.classList.add("list-group-item");     //<li class ="list-group-item"> </li>

        const name = document.createTextNode(course.name)//course name added 
        li.appendChild(name);  //<li class="list-group-item">"React course"</li>

        const span = document.createElement("span");
        span.classList.add("float-right");

        const price = document.createTextNode("$" + course.price);
        span.appendChild(price);

        li.appendChild(span);
        ul.appendChild(li);


    })
};

// generateList();
window.addEventListener("load", generateList);

const sortButton1 = document.querySelector(".sort-btn1");
const sortButton2 = document.querySelector(".sort-btn2");

sortButton1.addEventListener("click", () => {
    courses.sort((a, b) => a.price - b.price);
    generateList();

});
sortButton2.addEventListener("click", () => {
    courses.sort((a, b) => b.price - a.price);
    generateList();

});