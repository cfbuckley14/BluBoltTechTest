

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

const reversedData = baseData.slice().reverse()
const removeFirstItemOfData = baseData.slice()
const firstItemOfData = removeFirstItemOfData.shift()
const addOnDataArray = [addOnData]
const addDataToFrontOfBaseData = addOnDataArray.concat(baseData)
const baseDataCopy = baseData.slice()
const removedItemOfData = baseDataCopy.splice(2, 1, addOnData)

function consoleLogOnButtonClick(button, data) {
  document.querySelector(button).addEventListener('click', () => {
    console.log(data)
  })
}

function consoleLogIndividualItemsOnButtonClick(button) {
  document.querySelector(button).addEventListener('click', () => {
    const baseDataCopy = baseData.slice()
    baseDataCopy.forEach((item) => {
      console.log(item)
    })
  })
}

function consoleLogWordCount(button) {
  const paragraph = document.querySelector('#stringText')
  const newArray = paragraph.innerHTML.toString().split(" ")
  let foxOccurrenceCount = newArray.filter((word) => {
    return word === 'fox';
  })
  document.querySelector(button).addEventListener('click', () => {
    console.log(foxOccurrenceCount.length)
  })
}

function consoleLogReverseWordsInParagraph(button) {
  const paragraph = document.querySelector('#stringText')
  const newArray = paragraph.innerHTML.toString().split("")
  const reversedWords = newArray.reverse().join("")
  document.querySelector(button).addEventListener('click', () => {
    console.log(reversedWords)
  })
}

function replaceWords(button) {
  const paragraph = document.querySelector('#stringText').innerHTML.toString()
  const newParagraph = paragraph.replace('brown', 'sandy')
  document.querySelector(button).addEventListener('click', () => {
    console.log(newParagraph)
  })
}

consoleLogOnButtonClick('#base-data-button', baseData)
consoleLogOnButtonClick('#data-reverse-button', reversedData)
consoleLogOnButtonClick('#remove-first-item-button', removeFirstItemOfData)
consoleLogIndividualItemsOnButtonClick('#individual-entries-button')
consoleLogOnButtonClick('#add-on-data-to-base-data-button', addDataToFrontOfBaseData)
consoleLogOnButtonClick('#replace-object-button', baseDataCopy)

consoleLogWordCount("#log-fox-occurrence-button")
consoleLogReverseWordsInParagraph('#reverse-words-button')
replaceWords('#replace-words-button')

