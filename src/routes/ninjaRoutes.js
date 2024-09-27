const express = require('express');
const {
    getNinjas,
    getNinjaById,
    createNinja,
    updateNinja,
    deleteNinja,
} = require('../controllers/ninjaController');

const router = express.Router();

// Route pour récupérer la liste des ninjas
router.get('/ninjas', getNinjas);

// Route pour récupérer un ninja par son ID
router.get('/ninja/:id', getNinjaById);

// Route pour créer un nouveau ninja
router.post('/create-ninjas', createNinja);

// Route pour mettre à jour un ninja existant
router.put('/ninjas/update/:id', updateNinja);

// Route pour supprimer un ninja
router.delete('/ninjas/:id', deleteNinja);

module.exports = router;
