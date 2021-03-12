// An empty array.
let apiLegos = [];

// An exported function that returns the 
export const useLegos = () => {
  return [...apiLegos]
}


export const loadLegos = () => {
  return fetch("../data/lego-colors.json")
    .then(response => response.json())
    .then((legoArray) => {
      apiLegos = legoArray.LegoColorss;
      return legoArray.LegoColorss;
    })
};