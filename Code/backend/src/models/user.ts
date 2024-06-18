import { Model, DataTypes, Sequelize } from 'sequelize';

interface UserAttributes {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

class User extends Model<UserAttributes> implements UserAttributes {
  public id!: number; 
  public firstName!: string;
  public lastName!: string;
  public email!: string;

  // Metoda statyczna do inicjalizacji modelu
  public static initialize(sequelize: Sequelize): void {
    User.init({
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      firstName: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      lastName: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      email: {
        type: new DataTypes.STRING(128),
        allowNull: false,
        unique: true,
      },
    }, {
      tableName: 'users',
      sequelize: sequelize, // Przekazanie instancji Sequelize
    });
  }

  // Metoda do definiowania asocjacji (opcjonalnie)
  public static associate(models: any): void {
    // Definicje asocjacji, np. User.hasMany(models.Post);
  }
}

export default User;