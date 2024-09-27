const mongoose = require('mongoose');

const jutsuScrollsSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    créateur: { type: String, required: true },	
    rang: { type: Number, required: true }, 
    quantité: { type: Number, required: true }, 
    description: { type: String },
    catégorie: { type: String, required: true }, 
    techniquesAssociées: { type: String }
});


const JutsuScroll = mongoose.model('JutsuScroll', jutsuScrollsSchema);

module.exports = JutsuScroll;
