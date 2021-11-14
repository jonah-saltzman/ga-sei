'use strict'

// USE THIS JSON FOR TESTING THE BONUS
// const stationsjson = require('./bonus-stations.json');

// USE THIS JSON FOR TESTING THE BASE PRACTICE
const stationsjson = require('./stations.json');

// Create 'stations' object where each key is a station
// name, and each value is the corresponding station object
const stations = {};
for (const station of stationsjson) {
  stations[station['name']] = station;
}

// Main function that calls the recursive function
// and prints results.
const stopsBetweenStations = function (startLine, startStation, endLine, endStation) {

  console.log(`Finding route from ${startStation} to ${endStation}...`);

  // 'path' array will contain each of the stops
  // on the path between startStation & endStation.
  // Before calling recursive function, add 
  // startStation to 'path'
  const path = [startStation]
  const bestPath = findRoute(startStation, endStation, path)
  console.log('');
  console.log(`--------------------------------`);
  console.log(`----------- Results ------------`);
  console.log(`--------------------------------`);
  console.log('');
  console.log(`fastest route is ${bestPath.length - 1} stops; path:`);
  console.log('')
  let spaces = 0;
  for (let stationName of bestPath) {
    let lineName = stations[stationName]['line'];
    console.log(" ".repeat(spaces) + `--> ${stationName}` + " ".repeat(30 - stationName.length - spaces) + `(${lineName})`);
    spaces += 1;
  }
  console.log('')

  // The number of stops required for a trip is one less than 
  // the total number of stations on the trip.
  return bestPath.length - 1;
}

// Recursive function to check all possible paths to the
// destination, and pick the shortest route.
const findRoute = function(currentStation, destination, path) {
  
  // If we have reached the destination, return the path
  // we took to get here (done).
  if (currentStation === destination) {
    return path
  }

  // Get all the stations connected to the current station, 
  // and add ONLY STATIONS NOT YET VISITED to 'possibleSteps'
  let connections = stations[currentStation]['connections'];
  const possibleSteps = [];
  for (const station of connections) {
    if (!path.includes(station)) {
      possibleSteps.push(station)
    }
  }

  // If all connections to the current station have already
  // been visited, then we have reached a dead end (path 
  // doesn't lead to destination)
  if (possibleSteps.length == 0) {
    console.log(`Hit end of path @ ${currentStation.toUpperCase()}`);
    return false
  }

  // 'validPaths' will contain all paths that lead to the destination.
  const validPaths = [];

  // Push each possible next station in 'possibleSteps' to a new copy of
  // the 'path' array, and call 'findRoute()' on that next station with
  // the copied path array.

  for (const next of possibleSteps) {
    let newPath = [...path];
    newPath.push(next);
    const route = findRoute(next, destination, newPath)
    if (route) {
      validPaths.push(route)
    }
  }
  // DEBUGGING code
  /*
  console.log(`all valid paths: `)
  for (const validarray of validPaths) {
    console.log(validarray.join(" --> ") + `...length: ${validarray.length}`);
  }
  */

  // Find the valid path with the least number
  // of stations, and return that path array.
  let shortest = false
  let result = false
  for (const array of validPaths) {
    if (!shortest || array.length < shortest) {
      shortest = array.length;
      result = array;
    }
  }
  return result;
}

// CODE FOR MANUAL TESTING (CAUSES GRUNT TESTS TO FAIL)
/*
if (process.argv.length != 4) {
  console.log(`improper usage; should be 'mbta.js <START STATION> <END STATION>'`);
  process.exit();
}

stopsBetweenStations('NA', process.argv[2], 'NA', process.argv[3]);
*/

module.exports = {
  stopsBetweenStations: stopsBetweenStations,
  stretch: false
}
