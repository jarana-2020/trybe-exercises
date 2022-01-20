const connection = require('./connection');

const serialize = (user) => ({
  id: user.id,
  firstName: user.first_name,
  lastName: user.last_name,
  email: user.email,
  password: user.password,
})

const insertUser = async(firstName, lastName, email, password) => {
  const query = 'INSERT INTO users.user (first_name,last_name,email,password) VALUES (?,?,?,?)';
  const [user] = await connection.execute(query,[firstName,lastName,email,password]);
  return user.insertId;
};

const getUsers = async() => {
  const query = 'SELECT * FROM users.user';
  const [users] = await connection.execute(query);
  return users.map(serialize);
}

const getUserById = async(id) => {
  const query = 'SELECT * FROM users.user WHERE id = ? ';
  const [user] = await connection.execute(query,[id]);
  const userIsEmpty = !user.length ;
  if(userIsEmpty) return null;
  return user;
}

const updateUser = async(id,firstName,lastName,email,password) => {
  const query = `UPDATE users.user SET first_name = ?,last_name = ?, email = ?, password = ? WHERE id = ? `;
  const [user] = await connection.execute(query,[firstName,lastName,email,password,id]);
  const userNotExists = !user.changedRows
  if(userNotExists) return null;
  return user;
}



module.exports = {
  insertUser,
  getUsers,
  getUserById,
  updateUser,
};
