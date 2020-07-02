'use strict'

exports.handler = function(event, context, callback) {
  const statusCode = event.path.split("/")[1]
  if (isNaN(statusCode)) {
    return callback(400, {
      statusCode: 400,
      body: 'Status code must be an integer'
    })
  }

  const payload = event.body;
  const body = {}
  if (payload) {
    body.payload = JSON.parse(payload)
  }

  var response = {
    statusCode: statusCode,
    body: JSON.stringify(body)
  }
  callback(null, response)
}