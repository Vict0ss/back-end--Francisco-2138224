const swaggerAutogen = require ('swagger-autogen')()

const outFile = './swagger_output.json'
const endpointFiles = ['/app.js']

swaggerAutogen(outputFile, endpointFiles)