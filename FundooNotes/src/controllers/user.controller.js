import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';



export const userRegistration = async (req, res, next) => {
  try {
    const data = await UserService.userRegistration(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'User has been created successfully'
    });
  } catch (error) {
    next(error);
  }

 
};

export const userLogin = async (req, res, next) => {
  try {
    const data = await UserService.userLogin(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'User has been login successfully'
    });
  } catch (error) {
    next(error);
  }
}

//forgot password

export const forgotPassword = async (req, res, next) => {
  try {
    const data = await UserService.forgotPassword(req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      message: 'Reset password link has been sent successfully'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
  }
};


export const resetPassword = async (req, res, next) => {
  try {
    console.log("req. body======>",req.body)
    const data = await UserService.resetPassword(req.body);
      res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      message: 'Password Reset Successfully!'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
  }
};