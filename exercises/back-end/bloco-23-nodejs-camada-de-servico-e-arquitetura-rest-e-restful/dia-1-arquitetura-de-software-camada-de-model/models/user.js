const connection = require('./connection');

const insertUser = async(firstName, lastName, email, password) => {
  const query = 'INSERT INTO users.user (first_name,last_name,email,password) VALUES (?,?,?,?)';
  const [user] = await connection.execute(query,[firstName,lastName,email,password]);
  return user.insertId;
};

module.exports = {
  insertUser,
};
