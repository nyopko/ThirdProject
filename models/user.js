module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { isEmail: true },
            unique: true
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8]
            }
        }

    });

    User.associate = function(models) {
        User.hasMany(models.Favorites, {
            onDelete: "cascade"
        });
    }

    return User;
}