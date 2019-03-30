module.exports = function(sequelize, DataTypes) {
    var Favorites = sequelize.define("Favorites", {
        videoUrl: {
            type: DataTypes.STRING,
            allowNull: true
        },
        imageUrl: {
            type: DataTypes.STRING,
            allowNull: true
        },
        audioUrl: {
            type: DataTypes.STRING,
            allowNull: true
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