import { DataTypes, Model } from "sequelize";
import connectionDb from "../connection/connectionDb.js";

class Song extends Model {}

Song.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true,
    },
    lengthSeconds: {
      type: DataTypes.INTEGER,
      min: 1,
    },
    artistName: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    sequelize: connectionDb,
    modelName: "Song",
  }
);

export default Song;
