# restaurant #
Gestion de restaurant with ionic

## Architecture du projet ##

![Test Image 8]()


### Description : ###
Mini Application permettant la gestion d'un restaurant et de ses plats .


### Creation du projet ###

##### ionic start restaurant tabs ####
Ensuite il faut choisir un projet angular

### Creation des services ###

Nous allons créer plusieurs services en utilisant la commande line interface de ionic.
Nous allons commencer par génerer nos services dans le dossier service

##### ionic g service services/plat #####
##### ionic g service services/restaurant #####
##### ionic g service services/auth (Permet de gerer la connexion et l'inscription) #####
##### ionic g service services/utils (Permet d'afficher un toast) #####

### Creation des modéles ###

##### ionic g class models/user (permet de persister les utilisateurs) #####
##### ionic g class models/plat (permet de persister les plats dans strapi) #####
##### ionic g class models/restaurant (permet de persister les restaurants) ##### 

### integration de L'API strapi ###
Pour installer strapi  nous allons utiliser la commande <b>npx create-strapi-app restaurant-api --quickstart<b>

Démarrer strapi avec la commande <b>strapi start</b> dans le repertoire du projet strapi precedemment crée.
Consulter la documentation officielle <a href="https://strapi.io/documentation/3.0.0-beta.x/getting-started/introduction.html">Cliquez ici</a>

Aprés creation des content type il faudra changer les rôles er permissions pour permettre aux applications de pouvoir faire des transactions

### Integratation capacitor et AGM (Angular google maps) ###

<ul>
<li>Pour capacitor il faut suivre les instructions ici <a href="https://capacitor.ionicframework.com/docs/getting-started/">cliquez ici</a></li>
<li>Pour AGM il faut l'installer le plugin d'abord</li>
<ul>
    <li>npm install @agm/core --save</>
    <li>Il faut creer unecle api google maps</li>
    <li>importer capacitor plugins and importer le dans le module dans la page ou veut l'utiliser dans notre cas dans la page ajouter Restaurant,   
    </li>
    <li>Importer le odule agmcore dans le fichier ajouter module de restaurant.</li>
   </ul>
</li>

</ul>
</ul>




