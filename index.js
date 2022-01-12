// Your code here
const mapToNegativize = (arr) => {
  return arr.map(x => x * -1)
}

const mapToNoChange = (arr) => {
  return arr.map(x => x )
} 

const mapToDouble = (arr) => {
  return arr.map(x => x * 2 )
} 

const mapToSquare = (arr) => {
  return arr.map(x => x * x )
} 

function reduceToTotal(num, start = 0) {
  return num.reduce((prev, curr) => prev + curr, start)
}

const reduceToAllTrue = obj => Boolean(
  Object.values(obj)
    .reduce((a, b) => a && b)
);

function reduceToAnyTrue(array){
  const reducer = function(prev, currnum){  
      if(prev == true){
          return true
      } else {
          return !!currnum
      } 
  }
  return array.reduce(reducer, false)
} 
