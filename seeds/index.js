const sequelize = require('../config/connection');
const {User, Workout} = require("../models");

const userData = [
    {
        email: 'person@gmail.com',
        username: 'person',
        password: 'personpassword'
    },
    {
        email: 'user@gmail.com',
        username: 'user',
        password: 'userpassword'
    },
    {
        email: 'random@gmail.com',
        username: 'random',
        password: 'randompassword'
    },
    {
        email: 'dude@gmail.com',
        username: 'dude',
        password: 'dudepassword'
    }
];

const workoutData = [
    {
        bench_max: 135,
        deadlift_max: 195,
        squat_max: 185,
        user_id: 1
    },
    {
        bench_max: 185,
        deadlift_max: 255,
        squat_max: 225,
        user_id: 2
    },
    {
        bench_max: 225,
        deadlift_max: 295,
        squat_max: 275,
        user_id: 3
    },
    {
        bench_max: 315,
        deadlift_max: 405,
        squat_max: 365,
        user_id: 4
    }

];

const seedUserData = () => User.bulkCreate(userData);
const seedWorkoutData = () => Workout.bulkCreate(workoutData);

const seedAll = async () => {
    await sequelize.sync({ force: true});
    await seedUserData();
    await seedWorkoutData();
    process.exit(1);
}; 

seedAll();