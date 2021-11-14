'use strict'

// USE THIS JSON FOR TESTING THE BONUS
const stationsjson = require('./bonus-stations.json');

// USE THIS JSON FOR TESTING THE BASE PRACTICE
// const stationsjson = require('./stations.json');

const stations = {};
for (const station of stationsjson) {
  stations[station['name']] = station;
}

const stopsBetweenStations = function (startLine, startStation, endLine, endStation) {

  console.log(`Finding route from ${startStation} to ${endStation}...`);

  const path = [startStation]
  const bestPath = findRoute(startStation, endStation, path)
  
  printResults(bestPath);

  return bestPath.length - 1;
}

const findRoute = function(currentStation, destination, path) {
  
  if (currentStation === destination) {
    return path
  }

  let connections = stations[currentStation]['connections'];
  const possibleSteps = [];
  for (const station of connections) {
    if (!path.includes(station)) {
      possibleSteps.push(station)
    }
  }

  if (possibleSteps.length == 0) {
    console.log(`Hit end of path @ ${currentStation.toUpperCase()}`);
    return false
  }

  const validPaths = [];
  for (const next of possibleSteps) {
    let newPath = [...path];
    newPath.push(next);
    const route = findRoute(next, destination, newPath)
    if (route) {
      validPaths.push(route)
    }
  }

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

if (process.argv.length != 4) {
  console.log(`improper usage; should be 'mbta.js <START STATION> <END STATION>'`);
  process.exit();
}

stopsBetweenStations('NA', process.argv[2], 'NA', process.argv[3]);

function printResults(bestPath) {
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
}

module.exports = {
  stopsBetweenStations: stopsBetweenStations,
  stretch: false
}