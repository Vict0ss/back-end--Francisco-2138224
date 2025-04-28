const{ DataTypes, Sequelize} = require('sequelize');

(async () => {
    await Sequelize.afterSync({ force: true});

    const user = await UserActivation.create({
        first_name: "Pedro",
        last_name: "100",
        emai
    })
})
