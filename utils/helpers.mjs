import bcrypt from "bcrypt";

const saltRounds = 10;

export const hashedPassword = async (password) => {
  const salt = await bcrypt.genSalt(saltRounds);  
  const hashed = await bcrypt.hash(password, salt);
  return hashed;
};
