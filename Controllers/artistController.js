import Artist from "../Models/Artist.js";

class ArtistController {
    createArtist = async (req, res) => {
      try {
        const { name } = req.body;
        const data = await Artist.create({ name });
        res.status(201).send({
          success: true,
          message: `Artista ${data.name} creado exitosamente`,
        });
      } catch (error) {
        res.status(400).send({ succces: false, message: error.message });
      }
    };
  
    readAllArtists = async (req, res) => {
      try {
        const data = await Artist.findAll({
          attributes: ["name"],
        });
        res.status(201).send({
          success: true,
          message: data,
        });
      } catch (error) {
        res.status(400).send({ succces: false, message: error.message });
      }
    };
  
    readArtistById = async (req, res) => {
      try {
        const { id } = req.params;
        const data = await Artist.findOne({
          attributes: ["name"],
          where: { id },
        });
        res.status(201).send({
          success: true,
          message: data,
        });
      } catch (error) {
        res.status(400).send({ succces: false, message: error.message });
      }
    };
    deleteArtist = async (req, res) => {
      try {
        const { id } = req.params;
        const data = await Artist.destroy({
          where: { id },
        });
        res.status(201).send({
          success: true,
          message: data,
        });
      } catch (error) {
        res.status(400).send({ succces: false, message: error.message });
      }
    };
    updateArtist = async (req, res) => {
      try {
        const { id } = req.params;
        const { name} = req.body;
        const data = await Artist.update(
          { name},
          { where: { id } }
        );
        res.status(201).send({
          success: true,
          message: data,
        });
      } catch (error) {
        res.status(400).send({ succces: false, message: error.message });
      }
    };
  }
    export default ArtistController;