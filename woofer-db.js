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
      firebase.database().ref('woofs').push(woof)
    },

    // UPDATE the woof in Firebase
    updateWoofInDatabase: function (woofKey, woofText) {
      var woof = firebase.database().ref('woofs').child(woofkey)
      if (!woof) {
        window.alert('woof ' + woof + ' not found Dx!!!')
      } else {
        woof.child('text').set(woofText)
      }
    },

    // DELETE the woof from Firebase
    deleteWoofFromDatabase: function (woofKey) {
      // TODO delete the record from Firebase
    }
  }

  window.wooferdb = wooferdb

  // READ from Firebase when woofs are added, changed, or removed
  // Call addWoofRow, updateWoofRow, and deleteWoofRow to update the page
  readWoofsInDatabase: function () {
    // TODO read new, changed, and deleted Firebase records
  }

  // Load all of the data
  readWoofsInDatabase()

})()
