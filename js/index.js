//Load Dom first
document.addEventListener("DOMContentLoaded", ()=>{
    getFilms()
})

//Global variables
const allFilms = "http://localhost:3000/films";
const movielist = document.getElementById("movie-list")
const moviePoster =document.getElementById("img")
const h3 = document.querySelector(".card-title")
const p = document.querySelector(".card-text")
const l1 = document.getElementById("l1")
const l2 = document.getElementById("l2")
const l3 = document.getElementById("l3")
const btn = document.getElementById("btn")
const div1 = document.getElementById("div1")

//General Styling
div1.style = "height: 20rem;"
img.style="height: 65rem;"

//Get Movies
function getFilms() {
    fetch(allFilms).then(res=>res.json())
    .then(films=>{
        films.forEach(films => {
            
            //Display Movie Menu
            let listItem1 = document.createElement('a')
            listItem1.classList="list-group-item list-group-item-action list-group-item-danger fs-2 fw-bold"
            listItem1.innerHTML = `${films.title}`
            movielist.appendChild(listItem1)

            //Display first movie on the menu when page loads
            fetch(allFilms)
            .then(res=>res.json())
            .then(films=>{
                moviePoster.src = films[0].poster
                h3.innerHTML = films[0].title
                p.innerHTML = films[0].description
                l1.innerHTML = "Runtime: " + films[0].runtime
                l2.innerHTML = "Showtime: " + films[0].showtime

                let availableTickets = films[0].capacity - films[0].tickets_sold
                l3.innerHTML = "Available Tickets: " + availableTickets

                btn.addEventListener("click", (e)=>{
                    if(availableTickets > 0) {
                        --availableTickets
                        l3.innerHTML = "Available Tickets: " + availableTickets
                    }
                    else{
                        l3.innerHTML = "Available Tickets: " + "Sold Out"
                    }
                    
                })

            })

            //display movie details when a movie is selected from the menu
            listItem1.addEventListener("click", (e)=>{
                moviePoster.src = films.poster
                h3.innerHTML = films.title
                p.innerHTML = films.description
                l1.innerHTML = "Runtime: " + films.runtime
                l2.innerHTML = "Showtime: " + films.showtime

                let availableTickets = films.capacity - films.tickets_sold
                l3.innerHTML = "Available Tickets: " + availableTickets

                btn.addEventListener("click", (e)=>{
                    if(availableTickets > 0) {
                        --availableTickets
                        l3.innerHTML = "Available Tickets: " + availableTickets
                    }
                    else{
                        l3.innerHTML = "Available Tickets: " + "Sold Out"
                    }
                    
                })


            })

        });
    })
}
