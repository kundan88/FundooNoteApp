import HttpStatus from 'http-status-codes';
import jwt from 'jsonwebtoken';

/**
 * Middleware to authenticate if user has a valid Authorization token
 * Authorization: Bearer <token>
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export const userAuth = async (req, res, next) => {
  try {
    let bearerToken = req.header('Authorization');
    if (!bearerToken)
      throw {
        code: HttpStatus.BAD_REQUEST,
        message: 'Authorization token is required'
      };
    bearerToken = bearerToken.split(' ')[1];

    const { user } = await jwt.verify(bearerToken,process.env.SECRET_KEY);
    next();
  } catch (error) {
    next(error);
  }
};
/*
export const userAuthReset = async (req, res, next) => {
  try {
    let bearerToken = req.params.token;
    if (!bearerToken)
      throw {
        code: HttpStatus.BAD_REQUEST,
        message: 'Authorization token is required'
      };
    //bearerToken = bearerToken.split(' ')[1];

    const { user } = await jwt.verify(bearerToken,process.env.SECRET_KEY_1);
    req.body.email=user.email;
    next();
  } catch (error) {
    next(error);
  }
};
*/

//reset

export const userAuthReset = async (req, res, next) => {
  try {
    let bearerToken = req.params.token;
    console.log("bearer token====> ", bearerToken)
    if (!bearerToken)
      throw {
        code: HttpStatus.BAD_REQUEST,
        message: 'Authorization token is required'
      };
     await jwt.verify(bearerToken, process.env.SECRET_KEY_1,function(err,data) {
      if (err) {

          res.status(HttpStatus.UNAUTHORIZED).json({
            code: HttpStatus.UNAUTHORIZED,
            message: 'Authorization token is Incorrect'
          
        });
      }else {
        req.body.email = data.email
        console.log("request body======>", req.body)
        next();
      }
    });
    //res.locals.user = user;
    //res.locals.token = bearerToken;
    
  } catch (error) {
    next(error);
  }
};

