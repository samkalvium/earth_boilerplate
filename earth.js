const climate = document.getElementById("climate")
const consumption = document.getElementById("consumption")
const resources = document.getElementById("resources")
const people = document.getElementById("people")



/* CLIMATE PART*/

climate.onclick = () => {
    document.body.style.background = "url (' https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/climate-change-bg%5B1%5D.png')"
    document.getElementById("save").innerText = "Do your bit! Save trees, use renewable energy soureces and prefer to travel green";
    document.getElementById("frame").scr = "https://www.theworldcounts.com/embed/challenges/23?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22";
    climate.style.backgroundColor = "#27ae60";
    consumption.style.background = "transparent";
    resources.style.background = "transparent";
    people.style.background = "transparent";

}


/* CONSUMPTION PART*/

consumption.onclick = () => {
    document.body.style.background = "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/food-wastage-bg%5B1%5D.png')"
    document.getElementById("save").innerText = "Do you bit! shop only what you need, eat only what you need and always save the left overs.";
    document.getElementById("frame").src = "https://www.theworldcounts.com/embed/challenges/107?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20";
    consumption.style.backgroundColor = "#27ae60";
    climate.style.background = "transparent";
    resources.style.background = "transparent";
    people.style.background = "transparent";
}

/*RESOURCES PART*/

resources.onclick = () => {
    document.body.style.background = "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/natural-resources-bg%5B1%5D.png')";
    document.getElementById("save").innerText = "Do your bit! Avoid all things plastic. Believe in Reduce, Reuse and Recycle";
    document.getElementById("frame").src = "https://www.theworldcounts.com/embed/challenges/5?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20";
    resources.style.backgroundColor = "#27ae60";
    climate.style.background = "transparent";
    consumption.style.background = "transparent";
    people.style.background = "transparent";

}




/*PEOPLE PART*/

people.onclick = () => {
    document.body.style.background = "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/poverty-bg%5B1%5D.png ' )";
    document.getElementById("save").innerText = "Do your bit! Never waste food.Rather offer it to people or animals who are in need.";
    document.getElementById("frame").src = "https://www.theworldcounts.com/embed/challenges/2?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Aria";
    people.style.backgroundColor = "#27ae60";
    climate.style.background = "transparent";
    consumption.style.background = "transparent";
    resources.style.background = "transparent";


}