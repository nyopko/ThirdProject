module.exports = function(sequelize, DataTypes) {
    var Favorites = sequelize.define("Favorites", {
        url: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        media_type: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Favorites.associate = function(models) {
        Favorites.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        })
    };

    return Favorites;
}