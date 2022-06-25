const bcrypt = require("bcryptjs");

const hashPassword = (password,strength=5) => {
  const salt = bcrypt.genSaltSync(strength);
  const hashedPassword = bcrypt.hashSync(password, salt);
  return hashedPassword;
};

const verifyPassword = (password,user)=>{
   return bcrypt.compareSync(password, user.password);
}

module.exports = {
    hashPassword,
    verifyPassword
}