module.exports = function(sequelize, Model, DataTypes){
    
        class car extends Model{}
        car.init(
            {
                brand: DataTypes.STRING,
                model: DataTypes.STRING,
                licensePlate: DataTypes.STRING,
                color: DataTypes.STRING,
                year: DataTypes.INTEGER,
                power: DataTypes.INTEGER,
                displacement: DataTypes.INTEGER
            },
            {sequelize, modelName: 'car'},
        );
        return car;
};