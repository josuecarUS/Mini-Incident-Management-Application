module.exports.validatePayload = (schema) => {
    return (req, res, next) => {
        try {
            const payload = req.body;
            const validation = schema.validate(payload);

            if (validation.error) {
                res.status(400).send({ msg: validation.error})
            };
            next();
        } catch (error) {
            console.log(error)
        }
    } 
};
