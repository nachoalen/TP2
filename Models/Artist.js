import { DataTypes, Model } from "sequelize";
import connectionDb from "../connection/connectionDb.js";

class Artist extends Model {}

Artist.init(
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:true
        },
        name: {
            type: DataTypes.STRING,
            notEmpty: true,
            allowNull:true
        },
    }, 
    {
    sequelize: connectionDb,
    modelName: "Artist",
    timestamps: false
    }

);
export default Artist;