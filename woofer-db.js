/* global firebase */

var woofer = woofer || {}

woofer.db = (function () {
  // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyC5wJiDYv-stmfG3l5LDqUHX7_zAYc6ZAc',
    authDomain: 'js-firebase-intro.firebaseapp.com',
    databaseURL: 'https://js-firebase-intro.firebaseio.com',
    projectId: 'js-firebase-intro',
    storageBucket: 'js-firebase-intro.appspot.com',
    messagingSenderId: '572883060629'
  }
  firebase.initializeApp(config)

  // Sign into the database anonymously
  firebase.auth().signInAnonymously()

  // Create and export wooferdb
  // CREATE a new woof in Firebase
  function createWoofInDatabase(woof) {
    firebase.database().ref('woofs').push(woof)
  }

  // UPDATE the woof in Firebase
  function updateWoofInDatabase(woofKey, woofText) {
    firebase.database().ref('woofs').child(woofKey).child('text').set(woofText)
  }

  // DELETE the woof from Firebase
  function deleteWoofFromDatabase(woofKey) {
    firebase.database().ref('woofs').child(woofKey).remove()
  }

  // READ from Firebase when woofs are added, changed, or removed
  // Call addWoofRow, updateWoofRow, and deleteWoofRow to update the page
  function readWoofsInDatabase () {
    firebase.database().ref('woofs').on('child_added', function (woofSnapshot) {
      woofer.ui.addWoofRow(woofSnapshot.key, woofSnapshot.val())
    })
    firebase.database().ref('woofs').on('child_changed', function (woofSnapshot) {
      woofer.ui.updateWoofRow(woofSnapshot.key, woofSnapshot.val())
    })
    firebase.database().ref('woofs').on('child_removed', function (woofSnapshot) {
      woofer.ui.deleteWoofRow(woofSnapshot.key)
    })
  }

  // Load all of the data
  readWoofsInDatabase()

  // Exports
  return {
    createWoofInDatabase,
    updateWoofInDatabase,
    deleteWoofFromDatabase
  }
})()
