import express from 'express';
const router = express.Router();
import userRoute from '../routes/user.route';
import noteRoute from '../routes/noteRoute';
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  router.use('/users', userRoute);
  router.use('/notes', noteRoute);

  return router;
};

export default routes;
