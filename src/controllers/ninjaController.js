const Ninja = require('../models/ninjas'); 

// Récupérer la liste des ninjas
const getNinjas = async (req, res) => {
    try {
        const ninjas = await Ninja.find();
        res.json(ninjas);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Récupérer un ninja par son ID
const getNinjaById = async (req, res) => {
    try {
        const ninja = await Ninja.findById(req.params.id);
        if (!ninja) {
            return res.status(404).json({ msg: 'Ninja not found' });
        }
        res.json(ninja);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Créer un nouveau ninja
const createNinja = async (req, res) => {
    try {
        console.log(req.body);
        const newNinja = new Ninja({
            nom: req.body.nom,
            rang: req.body.rang,
            jutsus_maîtrisés: req.body.jutsus,
            clan: req.body.clan,
            spécialité: req.body.specialite,
            historique_emprunts: req.body.emprunts,
        });

        const ninja = await newNinja.save();
        res.json(ninja);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Mettre à jour un ninja
const updateNinja = async (req, res) => {
    try {
        const ninja = await Ninja.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!ninja) {
            return res.status(404).json({ msg: 'Ninja not found' });
        }
        res.json(ninja);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Supprimer un ninja
const deleteNinja = async (req, res) => {
    try {
        const ninja = await Ninja.findByIdAndDelete(req.params.id);
        if (!ninja) {
            return res.status(404).json({ msg: 'Ninja not found' });
        }
        res.json({ msg: 'Ninja deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

module.exports = {
    getNinjas,
    getNinjaById,
    createNinja,
    updateNinja,
    deleteNinja,
};
