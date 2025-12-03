// PART TWO
// The conservation area in which the garden is located has multiple other gardens. 
// Using the logic you have already created, determine:
// The amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.
// If the space remained circular, what would be the radius of this expanded garden?

let numberOfWeeks = 10;
let numberOfPlants = 100 * (2 * numberOfWeeks);
let areaPerPlant = 0.8;
const PI = 3.1415;

let areaNeeded = (numberOfPlants * areaPerPlant);
console.log(areaNeeded);

// 1600 square meters is needed 

let radiussquared = (areaNeeded / PI);
console.log(Math.sqrt(radiussquared));

// LEARNED THAT (Math.sqrt(x)) is SQUARE ROOT
// Radius would = 22.5