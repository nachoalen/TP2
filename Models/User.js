import { DataTypes, Model } from "sequelize";
import connectionDb from "../connection/connectionDb.js";
import bcrypt from "bcrypt";

class User extends Model {
  validatePassword = async (password) => {
    const validate = bcrypt.compare(password, this.password);
    return validate;
  };
}

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
    email: {
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

User.beforeCreate(async (user, options) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(user.password, salt);
  user.password = hashedPassword;
});

export default User;
