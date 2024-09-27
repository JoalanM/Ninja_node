require('dotenv').config();
const mongoose = require('mongoose'); // Importe Mongoose
const JutsuScroll = require('../models/jutsuScrolls'); // Importe le modèle JutsuScroll depuis le dossier models
const Ninja = require('../models/ninjas');

// const db_name = process.env.DB_NAME;
// const db_url = process.env.DB_URL;
// const url = `${db_url}${db_name}`; // URL de connexion avec le nom de la base de données

const url = "mongodb://localhost:27017/ninja_library"; // URL de connexion avec le nom de la base de données


async function connectToMongo() {
  try {
    // Connexion à MongoDB
    await mongoose.connect(url);

    console.log("Connecté à MongoDB avec Mongoose");

    const jutsus = [
      {
        nom: "Rasengan",
        créateur: "Minato Namikaze",
        rang: 5,
        quantité: 10,
        description: "Une technique puissante qui concentre le chakra en une boule rotative.",
        catégorie: "Ninjutsu",
        techniquesAssociées: "Rasen Shuriken"
      },
      {
        nom: "Chidori",
        créateur: "Kakashi Hatake",
        rang: 4,
        quantité: 8,
        description: "Une technique de lightning rapide qui concentre le chakra.",
        catégorie: "Ninjutsu",
        techniquesAssociées: "Kirin"
      },
      {
        nom: "Shuriken Shadow Clone Technique",
        créateur: "Naruto Uzumaki",
        rang: 3,
        quantité: 15,
        description: "Crée plusieurs shurikens en utilisant un clone.",
        catégorie: "Ninjutsu",
        techniquesAssociées: "Shuriken"
      },
      {
        nom: "Summoning Technique",
        créateur: "Jiraiya",
        rang: 6,
        quantité: 5,
        description: "Invoque une créature puissante.",
        catégorie: "Ninjutsu",
        techniquesAssociées: "Gamabunta"
      },
      {
        nom: "Fire Style: Fireball Jutsu",
        créateur: "Itachi Uchiha",
        rang: 4,
        quantité: 20,
        description: "Lance une boule de feu massive sur l'ennemi.",
        catégorie: "Ninjutsu",
        techniquesAssociées: "Fire Style"
      }
    ];

    for (const jutsu of jutsus) {
      const newJutsuScroll = new JutsuScroll(jutsu);
      await newJutsuScroll.save();
      console.log(`Nouveau jutsu ajouté : ${jutsu.nom}`);
    }

    console.log("Nouveau jutsu ajouté à la collection!");

    const ninjas = [
      {
        nom: "Naruto Uzumaki",
        rang: "Hokage",
        jutsus_maîtrisés: "Rasengan, Shadow Clone Technique",
        clan: "Uzumaki",
        spécialité: "Ninjutsu",
        historique_emprunts: "Formation chez Jiraiya"
      },
      {
        nom: "Sasuke Uchiha",
        rang: "Jonin",
        jutsus_maîtrisés: "Chidori, Fire Style",
        clan: "Uchiha",
        spécialité: "Ninjutsu",
        historique_emprunts: "Formation chez Kakashi Hatake"
      },
      {
        nom: "Sakura Haruno",
        rang: "Jonin",
        jutsus_maîtrisés: "Medical Ninjutsu, Super Strength",
        clan: "Haruno",
        spécialité: "Ninjutsu, Taijutsu",
        historique_emprunts: "Formation chez Tsunade"
      },
      {
        nom: "Kakashi Hatake",
        rang: "Jonin",
        jutsus_maîtrisés: "Sharingan, Lightning Blade",
        clan: "Hatake",
        spécialité: "Ninjutsu",
        historique_emprunts: "Ancien élève de Minato"
      },
      {
        nom: "Itachi Uchiha",
        rang: "Anbu",
        jutsus_maîtrisés: "Amaterasu, Tsukuyomi",
        clan: "Uchiha",
        spécialité: "Ninjutsu",
        historique_emprunts: "Ancien membre de l'Akatsuki"
      }
    ];

    for (const ninja of ninjas) {
      const newNinja = new Ninja(ninja);
      await newNinja.save();
      console.log(`Nouveau ninja ajouté : ${ninja.nom}`);
    }

    console.log("Nouveau ninja ajouté à la collection!");


  } catch (err) {
    console.error("Erreur lors de la connexion à MongoDB avec Mongoose :", err);
  } finally {
    mongoose.connection.close();
    console.log("Connexion fermée");
  }
}

connectToMongo();
