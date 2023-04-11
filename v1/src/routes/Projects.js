const express = require('express');
const router = express.Router();
const {index, create} = require('../controllers/project');
const validate = require('../middlewares/validate');
const schemas = require('../validations/Projects');

router.get('/', index);
router.post('/', validate(schemas.createValidation), create);

module.exports = router;