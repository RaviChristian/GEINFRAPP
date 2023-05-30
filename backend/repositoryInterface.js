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

class Relatorio extends Model {}
Relatorio.init({
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
  modelName: 'relatorios',
});


async function salvarFormulario(fullName,email,siape,unit,phone,description) {
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

async function salvarRelatorio(fullName,email,siape,unit,phone,description){
  await sequelize.sync();
  Relatorio.create({
    fullName,
    email,
    siape,
    unit,
    phone,
    description,
    isComplete: true,
})
}

async function listar() {
  await sequelize.sync();

  const allForms = await Form.findAll();

  return allForms
}

async function listarRelatorios() {
  await sequelize.sync();

  const allRelatorios = await Relatorio.findAll();

  return allRelatorios
}

async function acharPorId(id){
  try {
    const form = await Form.findOne({
      where: {
        id: id
      }
    });

    return form
  }
  catch(error) {
    console.log(error)
    return("error no achar por id")
  }
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
    salvarFormulario,
    salvarRelatorio,
    listarRelatorios,
    listar,
    deletar,
    acharPorId
  };
  