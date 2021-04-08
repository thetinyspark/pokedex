# Créer un validator pour le nom du pokemon  

- Créer un validator asynchrone, qui permet de vérifier si le nom du pokemon 
dans le champ, est déjà pris ou non. 

- Créer une méthode sur le catalog service getPokemonByName 

ATTENTION: Les validators ne peuvent pas se faire injecter des service par le biais 
de leur constructeur, en tout cas, Angular ne s'en occupera pas automatiquement. 
Vous devrez donc passer l'instance de catalogservice à votre validator. 

