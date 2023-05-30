const { Sequelize, DataTypes, Model } = require('sequelize');


const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'sqlite',
  storage: 'C:/Users/Ravi/Desktop/ace/backend/database.sqlite',
});


class Form extends Model {}
Form.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  siape: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  unit: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isComplete: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  }
}

, {
  sequelize,
  modelName: 'forms',
});


async function salvar(fullName,email,siape,unit,phone,description) {
    await sequelize.sync();
    Form.create({
        fullName,
        email,
        siape,
        unit,
        phone,
        description,
        isComplete: false,
    })
  };
  
async function listar() {
  await sequelize.sync();

  const allForms = await Form.findAll();

  return allForms
}

async function deletar(id) {
  try {
    const form = await Form.findOne({
      where: {
        id: id
      }
    });

    if (form) {
      await Form.destroy({
        where: {
          id: id
        }
      });
      return('Formulário deletado com sucesso!');
    } else {
      return('O formulário com o ID fornecido não existe.');
    }
  } catch (error) {
    return('Erro ao deletar formulário:');
  }
}


module.exports = {
    salvar,
    listar,
    deletar
  };
  