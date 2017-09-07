'use strict'

const chai = require('chai')
const expect = chai.expect

const mbta = require('../lib/mbta.js')

describe('mbta', () => {
  describe('Red Line', () => {
    it('goes from "Alewife" to "South Station"', () => {
      expect(mbta.stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station')).to.equal(7)
    })

    it('goes from "South Station" to "Alewife"', () => {
      expect(mbta.stopsBetweenStations('Red', 'South Station', 'Red', 'Alewife')).to.equal(7)
    })
  })

  describe('Green Line', () => {
    it('goes from "Haymarket" to "Copley"', () => {
      expect(mbta.stopsBetweenStations('Green', 'Government Center',
        'Green', 'Kenmore')).to.equal(6)
    })

    it('goes from "Copley" to "Haymarket"', () => {
      expect(mbta.stopsBetweenStations('Green', 'Kenmore',
        'Green', 'Government Center')).to.equal(6)
    })
  })

  describe('Orange Line', () => {
    it('goes from "North Station" to "Forest Hills"', () => {
      expect(mbta.stopsBetweenStations('Orange', 'North Station', 'Orange',
                                       'Forest Hills')).to.equal(7)
    })

    it('goes from "Forest Hills" to "North Station"', () => {
      expect(mbta.stopsBetweenStations('Orange', 'Forest Hills', 'Orange',
                                       'North Station')).to.equal(7)
    })
  })

  describe('Red and Green Lines', () => {
    it('goes from "South Station" to "Kenmore"', () => {
      expect(mbta.stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore')).to.equal(6)
    })

    it('goes from "Government Center" to "Alewife"', () => {
      expect(mbta.stopsBetweenStations('Green', 'Government Center', 'Red', 'Alewife')).to.equal(7)
    })
  })

  describe('Red and Orange Lines', () => {
    it('goes from "South Station" to "Forest Hills"', () => {
      expect(mbta.stopsBetweenStations('Red', 'South Station',
        'Orange', 'Forest Hills')).to.equal(6)
    })

    it('goes from "North Station" to "Alewife"', () => {
      expect(mbta.stopsBetweenStations('Orange', 'North Station', 'Red', 'Alewife')).to.equal(8)
    })
  })

  describe('Green and Orange Lines', () => {
    it('goes from "Government Center" to "Forest Hills"', () => {
      expect(mbta.stopsBetweenStations('Green', 'Government Center', 'Orange',
                                       'Forest Hills')).to.equal(6)
    })

    it('goes from "North Station" to "Kenmore"', () => {
      expect(mbta.stopsBetweenStations('Orange', 'North Station', 'Green', 'Kenmore')).to.equal(7)
    })
  })

  if (mbta.stretch) {
    describe('Green and Orange Lines', () => {

    })
  }
})
