import sequelize, { DataTypes } from '../config/database';
const User = require('../models/user')(sequelize, DataTypes);
import * as utilService from '../utils/user.util';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {sender} from '../utils/rabbitmq';


//create new user
export const userRegistration = async (body) => {
  const saltRound = 10;
  const hash = bcrypt.hashSync(body.password, saltRound);
  body.password = hash;
  console.log("user Service",data);
  const data = await User.create(body);
  sender(data);
    console.log("rabbitmq==> ", data)
 
  return data;
  
};

export const userLogin = async (body) => {
  const data = await User.findOne({ where: { email: body.email } });
  if (data!=null) {
    const userLogged = await bcrypt.compare(body.password, data.password);
    if (userLogged) {
      const token = jwt.sign({ email: body.email, id: data._id }, process.env.SECRET_KEY);
      return token;
    }
    else {
      throw new Error("invalid password");
    }
  }

}

//forgot password

export const forgotPassword = async (body) => {
  const data = await User.findOne({ where: { email: body.email } });
  //console.log("data===", data.dataValues);
  //console.log("data2===",deep_value(data, "user.dataValues"));
  if (data != null) {
    let token = jwt.sign({ email: body.email, id: data._id }, process.env.SECRET_KEY_1);

    let details = await utilService.sendMail(body.email, token);
    return details;

  } else {
    throw new Error("invalid EmailId")
  }
};

// Reset Pasword 
export const resetPassword = async (body) => {
  const saltRound = 10;
  const hpwd = await bcrypt.hash(body.Password, saltRound);
  const data = await User.update({password: hpwd}, 
    { where: {email: body.email }
  });
  
 console.log("data==== ", data)
  return data;
};

