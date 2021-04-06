# Créer une route pour voir le détail d'un pokemon

- Faire en sorte que nos pokemons soient visibles en mode "preview" dans notre catalogue, 
çàd que seules leurs images + noms apparaissent à l'écran. 

- Ajouter un lien sur les pokémons permettant d'être redirigé vers une route du type: "/pokemon/:id". 
- Créer un composant "PokemonDetailComponent" qui récupère l'id de la route et qui grâce à cet id 
affiche toutes les données du pokemon en question (celui dont l'id correspond à celui envoyé en paramètre). 

- Coder une méthode getById sur le CatalogService 

## BONUS

- Faire en sorte que le chargement des données du pokemon ciblé soit déporté sur un resolver (PokemonDetailResolver). 

