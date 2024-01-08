const path = require('path');
const expect = require("chai").expect;
let csvToJson = require('convert-csv-to-json');
const csvtojsonV2 = require("csvtojson")
let csvFilePath = path.resolve('Tests', 'test.csv')

describe('csv', function () {

    it.skip('should be csv to json', function () {
        let json = csvToJson.formatValueByType().getJsonFromCsv(csvFilePath);
        console.log(json)
    });

    it('should be csv to json using [csvToJson]', function (done) {
        const csvFileData = __dirname + "/test.csv"
        csvtojsonV2()
            .fromFile(csvFileData)
            .then(function (res) {
                // TODO: play with JSON response
                console.log(res)
                console.log('Number of objects:', res.length)
                done();
            }, function (err) {
                expect(err).to.be.undefined;
                done();
            })

    });
})
