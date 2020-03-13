/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    Tutoriel par MrPikou / Abonnez-Vous !
*/

/* Chemin d'accès à votre logo
NE PAS CHANGER */
//var l_serverImage = "images/f.png";

/* Nom de Votre serveur
Changez le nom de votre serveur en dessous :*/
var l_serverName = "KuskuRP";

/* Utiliser une vidéo en fond
NE PAS CHANGER */
var l_bgVideo = false;

/* Images de Fond
Placez 5 Images ! */
var l_bgImages = src="https://i.imgur.com/sSz7cmz.gif"

/* Images dans le Désordre ? ( "True" pour Oui / "False" pour Non )*/
var l_bgImagesRandom = false;

/* Delai ( millisecondes ) entre les images
NE PAS CHANGER */
var l_bgImageDuration = 3000;

/* Durée ( millisecondes ) de la transition entre les images*/
var l_bgImageFadeVelocity = 2000;

/* Mettre des images de fond ? ( "True" pour Oui / "False" pour Non )*/
var l_bgOverlay = true;

/* Pourcentage de "points noirs" sur les images de fond :*/
var l_bgDarkening = 50;

/* Musique
Activer la musique en fond ? ( "True" pour Oui / "False" pour Non )*/
var l_music = true;

/*Montrer le nom de la musique ? ( "True" pour Oui / "False" pour Non )*/
var l_musicDisplay = true;

/*Playlist musicale
Placez les musiques que vous souhaitez après "ogg:" et leur nom après "name:"*/
var l_musicPlaylist = [
	{ogg: "songs/Que Les Issou - Risitas feat Jesus.ogg", name: "Que Les Issou - Risitas feat Jesus"},
	{ogg: "songs/Cheb Rayan - Dana dana.ogg", name: "Cheb Rayan - Dana dana"}
];

/*Musiques dans le désordre ? ( "True" pour Oui / "False" pour Non )*/
var l_musicRandom = true;

/*Volume de la musiqe
Mettez un nombre entre 0 et 100*/
var l_musicVolume = 100;

/*Activer les messages personnalisés ? ( "True" pour Oui / "False" pour Non )*/
var l_messagesEnabled = true;

/*Mettez vos messages pérsonnalisés en dessous
Remplacez le "Message #..." par votre message*/
var l_messages = [
"Bienvienue Sur KuskuRP",
"Discord : https://discord.gg/re5z8zr"
];

/*Messages en désordre ? ( "True" pour Oui / "False" pour Non )*/
var l_messagesRandom = false;

/*Delai entre les changements de message ( millisecondes)
Il est conseillé de mettre la même valeur qu'à "Delai ( millisecondes ) entre les images"*/
var l_messagesDelay = 3000;

/*Durée de l'animation de changement d'image ( millisecondes ) */
var l_messagesFade = 1000;