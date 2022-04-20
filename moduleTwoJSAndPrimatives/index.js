

// baseData 
const baseData = [
  {
    id: 1,
    value: "Value for ID 1"
  },
  {
    id: 2,
    value: "Value for ID 2"
  },
  {
    id: 3,
    value: "Value for ID 3"
  },
  {
    id: 4,
    value: "Value for ID 4"
  },
  {
    id: 5,
    value: "Value for ID 5"
  },
  {
    id: 6,
    value: "Value for ID 6"
  },
]

// Add on Data

const addOnData = {
  id: 20,
  value: "I am addon data"
}

console.log('JS Loaded and ready to log!')
console.log({baseData, addOnData})


/**
 * Your Event listeners and Loggers should be added below
 */

document.querySelector('#base-data-button').addEventListener('click', () => {
  console.log(baseData)
})

const reversedData = baseData.slice().reverse()
document.querySelector('#data-reverse-button').addEventListener('click', () => {
  console.log(reversedData)
})

const baseDataCopy = baseData.slice()
const removeFirstItemOfData = baseDataCopy.shift()
document.querySelector('#remove-first-item-button').addEventListener('click', () => {
  console.log(baseDataCopy)
})

document.querySelector('#individual-entries-button').addEventListener('click', () => {
  const baseDataCopy = baseData.slice()
  baseDataCopy.forEach((item) => {
    console.log(item)
  })
})

const addOnDataArray = [addOnData]
const addDataToFrontOfBaseData = addOnDataArray.concat(baseData)
document.querySelector('#add-on-data-to-base-data-button').addEventListener('click', () => {
  console.log(addDataToFrontOfBaseData)
})

const updatedData = baseDataCopy.splice(2, 1, addOnData)
document.querySelector('#replace-object-button').addEventListener('click', () => {
  console.log(baseDataCopy)
})