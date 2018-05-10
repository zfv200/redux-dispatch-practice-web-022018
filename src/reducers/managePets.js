export let state;


export function managePets(state={pets: []}, action){
  switch (action.type) {
    case 'ADD_PET':
      return {pets:
        [...state.pets, action.pet]
      }
    case 'REMOVE_PET':
        let pet = state.pets.find(pet=>pet.id===action.id)
        let index = state.pets.indexOf(pet)
        return {pets:
          [...state.pets.slice(0, index), ...state.pets.slice(index+1)]
        }
    default:
      return state;
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  const container = document.getElementById("container")
  const ul = document.createElement("ul")
  let lis = state.pets.map(pet=>{
    return `<li>${pet.name}</li>`
  }).join('')
  container.innerHTML = `<ul>${lis}</ul>`
}
