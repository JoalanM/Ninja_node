const mongoose = require('mongoose');

const ninjasSchema = new mongoose.Schema({
    nom: { type: String, required: true }, 
    rang: { type: String, required: true },	
    jutsus_maîtrisés: { type: String, required: true }, 
    clan: { type: String, required: true }, 
    spécialité: { type: String, required: true }, 
    historique_emprunts: { type: String, required: true }
});


const Ninjas = mongoose.model('Ninjas', ninjasSchema);

module.exports = Ninjas;
