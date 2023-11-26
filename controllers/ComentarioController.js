const ComentarioModel = require("../models/ComentarioModel");

const addComentario = async (req, res) => {
    try {
        const { bookId } = req.params;
        const comment = await ComentarioModel.create(req.body);
        res.redirect(`/livro${bookId}`);
    } catch (error) {
        res.send(error.message);
    }
};