var dbPromised = idb.open("football", 1, function (upgradeDb) {
  var articlesObjectStore = upgradeDb.createObjectStore("articles", {
    keyPath: "id",
  });
  articlesObjectStore.createIndex("name", "name", {
    unique: false,
  });
});

function saveForLater(article) {
  dbPromised
    .then((db) => {
      var tx = db.transaction("articles", "readwrite");
      var store = tx.objectStore("articles");
      store.add(article);
      return tx.complete;
    })
    .then(() => {
      console.log("Artikel berhasil di simpan.");
    });
}

function getAll() {
  return new Promise(function (resolve, reject) {
    dbPromised
      .then((db) => {
        var tx = db.transaction("articles", "readonly");
        var store = tx.objectStore("articles");
        return store.getAll();
      })
      .then((articles) => {
        resolve(articles);
      });
  });
}

function getSavedArticles() {
  getAll().then((articles) => {
    console.log(articles);
    // Menyusun komponen card artikel secara dinamis
    var articlesHTML = "";
    articles.forEach((team) => {
      articlesHTML += `
      <div class="card">
      <div class="card-image">
        <img src="${team.crestUrl}">
        <span class="card-title black-text">${team.name}</span>
        
      </div>
      <div class="card-content teal lighten-5">
        <p>address : <b>${team.address}</p></b>
        <p>phone : <b>${team.phone}</p></b>
        <p>website : <b>${team.website}</p></b>
        <p>email : <b>${team.email}</p></b>
        <p>clubColors : <b>${team.clubColors}</p></b>
        <p>venue : <b>${team.venue}</p></b>
        <p class"right">Last Update : ${team.lastUpdated}</p>
      </div>
    </div>
                `;
    });
    // Sisipkan komponen card ke dalam elemen dengan id #body-content
    document.getElementById("body-content").innerHTML = articlesHTML;
  });
}
