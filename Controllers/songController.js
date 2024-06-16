import Song from "../Models/Song.js";

class SongController {
  createSong = async (req, res) => {
    try {
      const { name, lengthSeconds,  artistName } = req.body;
      const data = await Song.create({ name, lengthSeconds, artistName});
      res.status(201).send({
        success: true,
        message: `Canción ${data.name} creada exitosamente`,
      });
    } catch (error) {
      res.status(400).send({ succces: false, message: error.message });
    }
  };

  readAllSongs = async (req, res) => {
    try {
      const data = await Song.findAll({
        attributes: ["name", "lengthSeconds", "artistName", "isActive"],
      });
      res.status(201).send({
        success: true,
        message: data,
      });
    } catch (error) {
      res.status(400).send({ succces: false, message: error.message });
    }
  };

  readSongById = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await Song.findOne({
        attributes: ["name", "lengthSeconds", "artistName", "isActive"],
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
  deleteSong = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await Song.destroy({
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
  updateSong = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, lengthSeconds, artistName, isActive } = req.body;
      const data = await Song.update(
        { name, lengthSeconds, artistName, isActive },
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
  export default SongController;