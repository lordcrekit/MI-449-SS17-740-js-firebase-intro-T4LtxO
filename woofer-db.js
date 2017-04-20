/* global firebase */

(function () {
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
  var wooferdb = {
    // CREATE a new woof in Firebase
    createWoofInDatabase: function (woof) {
      window.alert(JSON.stringify(woof))
      firebase.ref('woofs').push(woof)
    },

    // If we are already reading from the database.
    _reading: false,

    // READ from Firebase when woofs are added, changed, or removed
    // Call addWoofRow, updateWoofRow, and deleteWoofRow to update the page
    readWoofsInDatabase: function () {
      if (wooferdb._reading) {
      }
      // TODO read new, changed, and deleted Firebase records
    },

    // UPDATE the woof in Firebase
    updateWoofInDatabase: function (woofKey, woofText) {
      // TODO update the record in Firebase
    },

    // DELETE the woof from Firebase
    deleteWoofFromDatabase: function (woofKey) {
      // TODO delete the record from Firebase
    }
  }

  window.wooferdb = wooferdb

  // Load all of the data
  wooferdb.readWoofsInDatabase()
})()
