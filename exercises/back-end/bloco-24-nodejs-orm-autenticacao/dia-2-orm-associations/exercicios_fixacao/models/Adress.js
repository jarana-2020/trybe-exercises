
module.exports = (sequelize , DataTypes) => {
  const Adress = sequelize.define('Adress', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    city: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
    employeeId: { type: DataTypes.INTEGER, foreignKey: true },
  },
  {
    timestamps: false,
    tableName: 'Adresses',
    underscored: true,
  });
  Adress.associate = (models) => {
    Adress.belongsTo(models.Employee,
      { foreignKey: 'employee_id', as: 'employees' });
  };
  return Adress;
}