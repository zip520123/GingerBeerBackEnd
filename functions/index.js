const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

exports.checkVersion = functions.https.onRequest(async (req, res) => {
  const reviewingVersion = "1.0.6"
  const version = req.query.version
  const isReviewingVersion = version === reviewingVersion
  
  res.json({isReviewingVersion: isReviewingVersion})
})
