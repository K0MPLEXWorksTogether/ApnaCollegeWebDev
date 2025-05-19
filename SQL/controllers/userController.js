const {
  deleteUser,
  insertUser,
  updateUser,
  getUserCount,
  getUsers,
} = require('../services/userServices')

async function getCount(req, res) {
  try {
    const count = await getUserCount()
    return res.status(200).json(count)
  } catch (err) {
    console.log('Error In Controller While Getting User Count:', err.stack)
    return res.status(500).json({ message: err.message })
  }
}

async function getUsersData(req, res) {
  try {
    const result = await getUsers();
    return res.status(200).json(result)
  } catch (err) {
    console.log('Error In Controller While Getting Users: ', err.stack)
    return res.status(500).json({ message: err.message })
  }
}


async function updateUserData(req, res) {
  const { id } = req.params
  const { newUsername } = req.body
  try {
    const affectedRows = await updateUser(id, newUsername)
    if (affectedRows === 0) {
      return res.status(404).json({ message: 'User not found' })
    }
    return res.status(200).json({ message: 'User updated successfully' })
  } catch (err) {
    console.log('Error In Controller While Updating User:', err.stack)
    return res.status(500).json({ message: err.message })
  }
}

async function insertUserData(req, res) {
  const { id, name, pass, email } = req.body
  try {
    const affectedRows = await insertUser(id, name, pass, email)
    return res
      .status(201)
      .json({ message: 'User inserted successfully', affectedRows })
  } catch (err) {
    console.log('Error In Controller While Inserting User:', err.stack)
    return res.status(500).json({ message: err.message })
  }
}

async function deleteUserData(req, res) {
  const { id } = req.params
  try {
    const affectedRows = await deleteUser(id)
    if (affectedRows === 0) {
      return res.status(404).json({ message: 'User not found' })
    }
    return res.status(200).json({ message: 'User deleted successfully' })
  } catch (err) {
    console.log('Error In Controller While Deleting User:', err.stack)
    return res.status(500).json({ message: err.message })
  }
}

module.exports = {
  getCount,
  getUsersData,
  updateUserData,
  insertUserData,
  deleteUserData,
}