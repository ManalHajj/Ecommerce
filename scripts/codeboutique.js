/*Hajjami Manal & Hamza Argane 2 AP G1 MAARIF*/
var monPanier = new Array();

function chargerArticles() {
  var articles = document.getElementById("content");
  for (var i = 0; i < 20; i++) {
    var article = document.createElement("div");
    article.classList.add("article-wrapper");
    article.className = "article";
    article.id = i + "-article";
    var articleNom = document.createElement("h2");
    articleNom.className = "nom_art";
    articleNom.innerText = catalogue[i].nom;
    article.appendChild(articleNom);

    var articleImg = document.createElement("img");

    articleImg.className = "img_art";
    articleImg.setAttribute("src", catalogue[i].image);
    article.appendChild(articleImg);

    var articleDesc = document.createElement("div");
    articleDesc.className = "desc_art";
    articleDesc.innerText = catalogue[i].desc;
    article.appendChild(articleDesc);

    var articlePrix = document.createElement("div");
    articlePrix.className = "prix_art";
    articlePrix.innerText = catalogue[i].prix + "Dhs";
    article.appendChild(articlePrix);

    var zoneCmd = document.createElement("div");
    zoneCmd.className = "cmd_art";

    var inputCmd = document.createElement("input");
    inputCmd.className = "input_art";

    inputCmd.id = i + "-qte";
    inputCmd.type = "number";
    inputCmd.value = 0;
    inputCmd.min = 0;
    inputCmd.max = 5;
    zoneCmd.appendChild(inputCmd);
    var bouton = document.createElement("div");
    bouton.className = "btn_art";
    bouton.onclick = function() {
      var item = this.getAttribute("id");
      var pos = item.substring(0, 1);
      ajouterAuPanier(pos);
    };
    bouton.id = i + "-cmd";
    zoneCmd.appendChild(bouton);
    article.appendChild(zoneCmd);
    articles.appendChild(article);
  }
}

function searchDansPanier(nom) {
  for (var i = 0; i < monPanier.length; i++) {
    if (monPanier[i].nom == nom) return true;
    else false;
  }
}
function ajouterAuPanier(pos) {
 
  if (searchDansPanier(catalogue[pos].nom))
    alert("Cet article existe d??j?? dans votre panier");
  else {
    var ident=pos+"-qte";
    var qte = document.getElementById(ident).value;
    if (qte <= 0) {
      alert("choisissez une quantit?? > 0");
    } else {
      var articleCmd = {
        nom: "",
        prix: 0,
        qte: 0,
        prixHt: 0
      };
      articleCmd.nom = catalogue[pos].nom;
      articleCmd.prix = catalogue[pos].prix;
      articleCmd.qte = qte;
      articleCmd.prixHt = articleCmd.prix * articleCmd.qte;
      monPanier.push(articleCmd);
      alert(
        "Nom : " +
          articleCmd.nom +
          "Prix : " +
          articleCmd.prix +
          "Quantite : " +
          articleCmd.qte +
          "Prix HT : " +
          articleCmd.prixHt +
          "Dh"
      );
    }
  }
}

function stockerPanier(data) {
  var panierJSON = {};
  panierJSON.monpanier = data;
  localStorage.setItem("panierLocalStorage", JSON.stringify(panierJSON));
}
