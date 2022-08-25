const api= 'https://rickandmortyapi.com/api/character'
const form= document.getElementById('form')

form.addEventListener('submit', async (event)=> {
event.preventDefault()
const input= document.getElementById('search').value.toLowerCase()
const ul = document.createElement('ul')
let data = []


    if (input){
        let response= await fetch(api)
        let users= await response.json()
        data = users.results
        console.log(data)
    }

    

const newA = data.flatMap(item => ({name : item.name.toLowerCase() , image :item.image}))
const ArrayFilter= newA.filter(item => item.name === input)

ArrayFilter && ArrayFilter.map(item =>{
        
    const li = document.createElement('ul')
    const img = document.createElement('img')
    const span = document.createElement('span')
    img.src = item.image
    span.appendChild(document.createTextNode(item.name))
    li.appendChild(img)
    li.appendChild(span)
    ul.appendChild(li)
    character.appendChild(ul)



})






})
/*

window.addEventListener('load', () => {
    const character=document.getElementById('character')
    const ul = document.createElement('ul')
  


    const getData = () => {
        const loader = document.getElementById('loader')
        loader.style.display= 'flex'
        setTimeout(() =>{
            loader.style.display= 'none'
        },20);
        
        fetch(api)
        .then(response => response.json())
        .then (characters=> localStorage.setItem('character', JSON.stringify(characters.results.flatMap(item => ({name:item.name, image:item.image})))))
    }



    getData()

    const data= JSON.parse(localStorage.getItem('character'))

    
if (data ){
    data.map(item =>{
        
        const li = document.createElement('ul')
        const img = document.createElement('img')
        const span = document.createElement('span')
        img.src = item.image
        span.appendChild(document.createTextNode(item.name))
        li.appendChild(img)
        li.appendChild(span)
        ul.appendChild(li)
        character.appendChild(ul)



    })
    
}




    
})

*/