/*
With the given array of username, build an input field that takes on a username and a button that fires off a search functionality filtering through the usernames in the username array. If the username exists, display it to the DOM in a p tag (You may build the p tag in your html file). 
Goals: build an input field and button that fire off a search functionality. The search functionality will filter through each username. If that username exists display it on the screen. 
Bonus: Have the search functionality NOT case sensitive.

*/

let username = ["technoKid997", "heyGurl94", "taebae55", "witchita"];
let input = document.getElementById('input')
let searchForm = document.getElementById('search')
searchForm.addEventListener('click', displayUser)
let section = document.getElementById('sec')


function displayUser(e){
    for(i = 0; i > username.length; i++){
        if(input = username[i]){
            let output = document.createElement('p')
            output.innerText = username[i]
            section.appendChild(output)
            console.log('sucess')
        } else{
            let output = document.createElement('p')
            output.innerText = "no user found"
            section.appendChild(output)
            console.log('falure')
        }
    }
}
