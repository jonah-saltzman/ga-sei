'use strict'

const stopsBetweenStations = function (startLine, startStation, endLine, endStation) {
  const map = {
    'Red': {
      'South Station': -1,
      'Park Street': 0,
      'Kendall': 1,
      'Central': 2,
      'Harvard': 3,
      'Porter': 4,
      'Davis': 5,
      'Alewife': 6
    },
    'Green': {
      'Government Center': -1,
      'Park Street': 0,
      'Boylston': 1,
      'Arlington': 2,
      'Copley': 3,
      'Hynes': 4,
      'Kenmore': 5
    },
    'Orange': {
      'North Station': -2,
      'Haymarket': -1,
      'Park Street': 0,
      'State': 1,
      'Downtown Crossing': 2,
      'Chinatown': 3,
      'Back Bay': 4,
      'Forest Hills': 5
    }
  };
  // console.log(map['Red']['South Station']);
  let distance = 0;
  if (startLine == endLine) {
    return Math.abs(map[startLine][startStation] - map[endLine][endStation])
  }
  return Math.abs(map[startLine][startStation]) + Math.abs(map[endLine][endStation]);
}

console.log(stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station'))

module.exports = {
  stopsBetweenStations: stopsBetweenStations,
  stretch: false
}
