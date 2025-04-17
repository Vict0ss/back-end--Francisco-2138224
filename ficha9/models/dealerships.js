(async () => {
    await sequelize.sync();
    const car = await Car.create({
      brand: 'bmw',
      model: '240',
      licensePlate: '23-43-ZZ',
      color: 'red',
      year: 2025,
      power: 300,
      displacement: 3000
    });
    console.log(car.toJSON());
  })();
  