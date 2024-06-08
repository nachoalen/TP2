import { DataTypes, Model } from "sequelize";
import connectionDb from "../connection/connectionDb";

class User extends Model {}

User.init(
  {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        max: 120,
        min: 15,
    },
    mail: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true,
        len: [6, 12],
      },
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    sequelize: connectionDb,
    modelName: "User",
  }
);

export default User;
