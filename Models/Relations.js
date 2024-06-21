import User from "./User.js";
import Artist from "./Artist.js";
import Song from "./Song.js";

Artist.hasMany(Song,{
  foreignKey:"artistId",
});

Song.belongsTo(Artist,{
  foreignKey:"artistId",
});

export { User, Song, Artist};