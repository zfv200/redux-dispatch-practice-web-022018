export let state;


export function managePets(state={pets: []}, action){
  switch (action.type) {
    case 'ADD_PET':
      return {pets: state.pets.push("new pet")}
    case 'REMOVE_PET':
      return {pets: state.pets.slice(-1)}
  }
}

export function dispatch(){
  state = managePets(state, action)
  render()
}

export function render(){
  let container = document.getElementById("container")
  let ul = document.createElement("ul")
  container.appendChild(ul)
  state.pets.map(pet=>{
    let li = document.createElement("li")
    li.innerHTML = pet
    ul.appendChild(li)
  })
}
