// Here is the information you have been given:
// The area in which the plants are contained is circular, with a radius of 5 meters.
// The formula for calculating the area of a circle is PI multiplied by the radius, squared:

// Each plant requires a minimum space of 0.8 square meters.
// The area is starting with 20 plants.
// The plants double in number every week.

// Using this information, your objectives are to:
// Predict the plant growth after a specific number of weeks.
// Implement control flow to make decisions on whether the plants should be:

// Pruned, to stop them from exceeding the capacity of the garden.
// This condition should be met if the plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden

// Monitored, if they are growing at an acceptable rate.
// This condition should be met if the plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.

// Planted, if there is room to plant more plants.
// This condition should be met if the plant count after the given number of weeks is less than 50% of the maximum capacity of the garden.

// Within your submission, include the results for 1, 2, and 3 weeks of growth as inputs.


const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;

console.log(area);
// about 78.5 square meters available 

let numberOfWeeks = 1;
let numberOfPlants = 20 * (2 * numberOfWeeks);

console.log(numberOfPlants)

let areaPerPlant = 0.8;

if ((areaPerPlant * numberOfPlants) > (area * .8)){
    console.log('PRUNED')
}else if ((areaPerPlant * numberOfPlants) > (area * .5)){
    console.log('MONITORED')
}else{
    console.log('PLANTED')
}

// After Week One there are 40 Plants -- PLANTED
// After Week Two there are 80 Plants -- PRUNED
// After Week Three there are 120 Plants -- PRUNED