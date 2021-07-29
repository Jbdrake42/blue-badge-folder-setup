//email store string null = fasle
//password store string null = false

module.exports = function (sequelize, DataTypes){
    const user = sequelize.define('user',{

        email:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    })
    return user
}