import { DataTypes } from 'Sequelize'
import db from '../config/db.js'

const Property = db.define('properties',{

    id: {
        type: DataTypes.UUID
        defaultValue: DataTypes.UUIDV4
        allowNull: false,
        primarykey: true
    },
    title: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,

    }
})
