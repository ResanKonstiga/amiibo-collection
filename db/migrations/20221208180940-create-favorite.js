/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Favorites', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      amiiboSeries: {
        type: Sequelize.STRING,
      },
      character: {
        type: Sequelize.STRING,
      },
      gameSeries: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.STRING,
      },
      img: {
        type: Sequelize.STRING,
      },
      releaseAu: {
        type: Sequelize.STRING,
      },
      releaseEu: {
        type: Sequelize.STRING,
      },
      releaseJp: {
        type: Sequelize.STRING,
      },
      releaseNa: {
        type: Sequelize.STRING,
      },
      tail: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Favorites');
  },
};
