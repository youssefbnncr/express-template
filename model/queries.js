const pool = require('./pool');

const getUsers = async() => {
    const rows = await pool.query('SELECT * FROM users')
    return rows;
}

const insertUser = async(username) => {
    await pool.query('INSERT INTO users (username) VALUES ($1)', [username])
}

module.exports = {
    getUsers,
    insertUser
}