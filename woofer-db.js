// TODO Sign into the database anonymously

var wooferdb = { // eslint-disable-line no-unused-vars
  // CREATE a new woof in Firebase
  createWoofInDatabase: function (woof) {
    // TODO create a new record in Firebase
  },

  // READ from Firebase when woofs are added, changed, or removed
  // Call addWoofRow, updateWoofRow, and deleteWoofRow to update the page
  readWoofsInDatabase: function () {
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

// Load all of the data
wooferdb.readWoofsInDatabase()
