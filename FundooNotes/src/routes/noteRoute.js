import express from 'express';
import * as noteController from '../controllers/note.controller';
import { newNoteValidator } from '../validators/note.validator';
import { userAuth } from '../middlewares/auth.middleware';
import {redisCheck} from '../middlewares/redis.middleware';



const router = express.Router();
//route to create a new user

router.get('', userAuth,redisCheck, noteController.getAllNotes);
router.post('/addNote', newNoteValidator,userAuth, noteController.addNotes);
router.get('/:noteid', userAuth, noteController.getNotes);
router.put('/:noteid', userAuth, noteController.updateNote);
router.delete('/:noteid', userAuth, noteController.deleteNote);
router.put('/:noteid/archive', userAuth, noteController.archiveNote);
router.put('/:noteid/trash', userAuth, noteController.trashNote);



export default router;
