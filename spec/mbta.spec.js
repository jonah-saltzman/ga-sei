'use strict'

const chai = require('chai')
const expect = chai.expect

const mbta = require('../lib/mbta.js')

describe('mbta', () => {
  describe('Red Line', () => {
    it('trip from "Red" line "Alewife" station to "Red" line "South Station"', () => {
      expect(mbta.stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station')).to.equal(7)
    })

    it('trip from "Red" line "South Station" to "Red" line "Alewife" station', () => {
      expect(mbta.stopsBetweenStations('Red', 'South Station', 'Red', 'Alewife')).to.equal(7)
    })

    it('trip from "Red" line "Alewife" to "Red" line "Davis" station', () => {
      expect(mbta.stopsBetweenStations('Red', 'Alewife', 'Red', 'Davis')).to.equal(1)
    })
  })

  describe('Green Line', () => {
    it('trip from "Green" line "Haymarket" station to "Green" line "Copley" station', () => {
      expect(mbta.stopsBetweenStations('Green', 'Government Center',
        'Green', 'Kenmore')).to.equal(6)
    })

    it('trip from from "Green" line "Copley" station to "Green" line "Haymarket" station', () => {
      expect(mbta.stopsBetweenStations('Green', 'Kenmore',
        'Green', 'Government Center')).to.equal(6)
    })
  })

  describe('Orange Line', () => {
    it('trip from "Orange" line "North Station" to "Orange" line "Forest Hills" station', () => {
      expect(mbta.stopsBetweenStations('Orange', 'North Station', 'Orange',
        'Forest Hills')).to.equal(7)
    })

    it('trip from "Orange" line "Forest Hills" station to "Orange" line "North Station"', () => {
      expect(mbta.stopsBetweenStations('Orange', 'Forest Hills', 'Orange',
        'North Station')).to.equal(7)
    })
  })

  describe('Red and Green Lines', () => {
    it('trip from "Red" line "South Station" to "Green" line "Kenmore" station', () => {
      expect(mbta.stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore')).to.equal(6)
    })

    it('trip from "Green" line "Government Center" station to "Red" line "Alewife" station', () => {
      expect(mbta.stopsBetweenStations('Green', 'Government Center', 'Red', 'Alewife')).to.equal(7)
    })
  })

  describe('Red and Orange Lines', () => {
    it('trip from "Red" line "South Station" to "Orange" line "Forest Hills" station', () => {
      expect(mbta.stopsBetweenStations('Red', 'South Station',
        'Orange', 'Forest Hills')).to.equal(6)
    })

    it('trip from "Orange" line "North Station" to "Red" line "Alewife" station', () => {
      expect(mbta.stopsBetweenStations('Orange', 'North Station', 'Red', 'Alewife')).to.equal(8)
    })
  })

  describe('Green and Orange Lines', () => {
    it('trip from "Green" line "Government Center" station to "Orange" line "Forest Hills" station', () => {
      expect(mbta.stopsBetweenStations('Green', 'Government Center', 'Orange',
        'Forest Hills')).to.equal(6)
    })

    it('trip from "Orange" line "North Station" to "Green" line "Kenmore" station', () => {
      expect(mbta.stopsBetweenStations('Orange', 'North Station', 'Green', 'Kenmore')).to.equal(7)
    })
  })

  if (mbta.stretch) {
    describe('Green and Orange Lines', () => {

    })
  }
})
