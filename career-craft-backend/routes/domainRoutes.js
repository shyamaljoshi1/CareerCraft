const express = require('express');
const router = express.Router();
const domainController = require('../controllers/domainController');

// Public routes - Get domains
router.get('/', domainController.getAllDomains);

// Get domain by id (e.g., /api/domains/machinelearning)
router.get('/:id', domainController.getDomainById);

// Admin routes - Create, Update, Delete domains
router.post('/', domainController.createDomain);
router.put('/:id', domainController.updateDomain);
router.delete('/:id', domainController.deleteDomain);

// Topic routes
router.post('/:id/topics', domainController.addTopic);
router.put('/:id/topics/:topicId', domainController.updateTopic);
router.delete('/:id/topics/:topicId', domainController.deleteTopic);

module.exports = router;
