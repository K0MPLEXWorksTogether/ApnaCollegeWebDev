const pool = require('../utils/db')
const generateRandomData = require('../utils/faker')

async function getUserCount() {
  try {
    const [result] = await pool.query('SELECT COUNT(*) AS userCount FROM user')
    return result[0].userCount
  } catch (err) {
    console.log('Error While Querying For User Count:', err.stack)
  }
}

async function getUsers() {
  try {
    const [result] = await pool.query('SELECT * FROM user')
    return result
  } catch (err) {
    console.log('Error While Querying User Table:', err.stack)
  }
}

async function updateUser(id, newUsername) {
  try {
    const result = await pool.query(
      'UPDATE user SET username = ? WHERE userId = ?',
      [newUsername, id],
    )
    return result[0].affectedRows
  } catch (err) {
    console.log('Error While Updating User Table:', err.stack)
  }
}

async function insertUser(id, name, pass, email) {
  try {
    const result = await pool.query(
      'INSERT INTO user (userId, username, email, password) VALUES (?, ?, ?, ?)',
      [id, name, email, pass],
    )
    return result[0].affectedRows
  } catch (err) {
    console.log('Error While Inserting A User:', err.stack)
  }
}

async function deleteUser(id) {
  try {
    const result = await pool.query('DELETE FROM user WHERE userId = ?', [id])
    return result[0].affectedRows
  } catch (err) {
    console.log('Error While Deleting A User:', err.stack)
  }
}

module.exports = {
  deleteUser,
  insertUser,
  updateUser,
  getUserCount,
  getUsers,
}
