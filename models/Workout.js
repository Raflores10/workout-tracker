const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Workout extends Model {};

Workout.init({
    bench_max: {
        type: DataTypes.DOUBLE
    },
    deadlift_max: {
        type: DataTypes.DOUBLE
    },
    squat_max: {
        type: DataTypes.DOUBLE
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    sequelize
});

module.exports = Workout;