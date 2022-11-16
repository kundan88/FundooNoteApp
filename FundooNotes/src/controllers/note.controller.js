import HttpStatus from 'http-status-codes';
import * as UserService from '../services/note.services';



export const getAllNotes = async (req, res, next) => {
  try {
    const data = await UserService.getAllNotes();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All users fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

export const addNotes = async (req, res, next) => {
  try {
    const data = await UserService.addNotes(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'User has been created successfully'
    });
  } catch (error) {
    next(error);
  }
}
//update

export const updateNote = async (req, res, next) => {
  try {
    const data = await UserService.updateNote(req.params.noteid, req.body);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'User updated successfully'
    });
  } catch (error) {
    next(error);
  }
};

// get Notes
export const getNotes = async (req, res, next) => {
  try {
    const data = await UserService.getNotes(req.params.noteid);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'User fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

//delete notes

export const deleteNote = async (req, res, next) => {
  try {
    await UserService.deleteNote(req.params.noteid);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: [],
      message: 'User deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};

//Trash notes

export const trashNote = async (req, res, next) => {
  try {
    const data = await UserService.trashNote(req.params.noteid);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'Trash successfully'
    });
  } catch (error) {
    next(error);
  }
};

//Archive note

export const archiveNote = async (req, res, next) => {
  try {
    const data = await UserService.archiveNote(req.params.noteid, req.body);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'Archive successfully'
    });
  } catch (error) {
    next(error);
  }
};
