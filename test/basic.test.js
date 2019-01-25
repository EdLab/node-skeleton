/* eslint-env node, mocha */

import request from 'supertest'
import chai from 'chai'
import app from '../server/app'

const expect = chai.expect
chai.should()

describe('Default Route Config', function() {
  it('Should response application version ', function(done) {
    request(app)
      .get('/version')
      .expect(200)
      .end(function(err, res) {
        expect(res.body).to.be.a('object')
        res.body.should.has.property('version')
        done()
      })
  })
})