const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Note extends Model {}

Note.init(
    {
        title: {
            type: DataTypes.STRING,
        },
        text: {
            type: DataTypes.STRING,
        }
    },
    {
        sequelize,
        modelName: 'note',
    }
)

module.exports = Note;