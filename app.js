const axios = require("axios")

let RAND = Math.floor(Math.random() * 100) + 1

const pretty = (object, id) => {
    console.log(`Айді даннї людини: ${id}`)
    console.log(`Культура данної любдини: ${object.culture}`)
    console.log(`Ім'я данної любдини: ${object.name}`)
    console.log(`Стать данної любдини: ${object.gender}`)
}

axios.get(`https://anapioficeandfire.com/api/characters/${RAND}`)
    .then(res => {pretty(res.data, RAND)})
    .catch(err => {console.error(err)})

