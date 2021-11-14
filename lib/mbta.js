'use strict'

// USE THIS JSON FOR TESTING THE BONUS
// const stations = require('./bonus-stations.json');

// USE THIS JSON FOR TESTING THE BASE PRACTICE
const stations = require('./stations.json');

const stopsBetweenStations = function (startLine, startStation, endLine, endStation) {
  console.log(`Finding route from ${startStation} to ${endStation}...`);
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
    let lineName = "";
    for (let element of stations) {
      if (element['name'] == stationName) {
        lineName = element['line'];
      }
    }
    console.log(" ".repeat(spaces) + `--> ${stationName}` + " ".repeat(30 - stationName.length - spaces) + `(${lineName})`);
    spaces += 1;
  }
  console.log('')
  return bestPath.length - 1;
}

const findRoute = function(currentStation, destination, path) {
  
  if (currentStation === destination) {
    return path
  }

  let connections = [];
  for (const station of stations) {
    if (station['name'] == currentStation) {
      connections = station['connections']
    }
  }

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
  // DEBUGGING
  /*
  console.log(`all valid paths: `)
  for (const validarray of validPaths) {
    console.log(validarray.join(" --> ") + `...length: ${validarray.length}`);
  }
  */

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
