import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('postgres://setner:M4NbcMZH9MmvXrCs4x8tB97rJttDnReW@dpg-cf33hpmn6mpkr6fr67mg-a/clubhouse_9din');
let message = 'not work';

try {
  await sequelize.authenticate()
  message = 'it is ok';
} catch (e) {
    console.log(e);
}

export { message }
