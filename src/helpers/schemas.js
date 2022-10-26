const Joi = require('joi');

const incidentSchema = Joi.object({
    id: Joi.number().min(0).required(),
    name: Joi.string().required(),
    discovered: Joi.string().required(),
    description: Joi.string().required(),
    department: Joi.string().valid(...['HR', 'Finance', 'Legal']).required()
})

module.exports = {
    incidentSchema
}
