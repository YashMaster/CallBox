/**
 *  Built using Twilio Functions
 *  https://www.twilio.com/docs/api/twiml/gather
 */
exports.handler = function(context, event, callback) {
    let twiml = new Twilio.twiml.VoiceResponse()
    let mobileNumber    = '+18188229057'
    let PIN             = '6924'
    console.log("Here's a log")
    console.log(context)
    console.log(event)
    console.log(callback)
    switch (event.Digits) {
      case PIN:
          twiml.play({
              //loop: '10',
              digits: '999w999'
          });
          
          break
      default:
          twiml.gather({
              numDigits: 4, 
              input: "dtmf",
              timeout: "2"
          })
          .say('Contacting Yashar Bahman in Unit 32...')
          twiml.dial(mobileNumber)
    
    }
    callback(null, twiml)
  }
  