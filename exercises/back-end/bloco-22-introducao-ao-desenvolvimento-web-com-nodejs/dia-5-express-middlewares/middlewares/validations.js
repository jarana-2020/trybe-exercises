

const validateName = (req,res,next) => {
  const { username } = req.body;

  if(username.length <= 3)  {
    return res.status(400).json({message: "invalid data" });
  }
  next();
};

const validateEmail = (req,res,next) => {
  const { email } = req.body;
  const emailRegEx = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
  const result = emailRegEx.test(email);

  if(!result) return res.status(400).json({message: "invalid data" });

  next();
}

const validatePassword = (req,res,next) => {
  const { password } = req.body;
  if (password.length < 4 || password.length > 8) {

    return res.status(400).json({message: "invalid data" });
  }
  next();
}

module.exports = {
  validateEmail,
  validateName,
  validatePassword, 
}


