import {client} from '../config/redis';
import sequelize, { DataTypes } from "../config/database";
const note = require('../models/note')(sequelize, DataTypes);



//create new user
export const addNotes = async (body) => {
 const data = await note.create(body);
 if (data) {
  await client.del('getAllData');
  return data;
}

};

//get all users
export const getAllNotes = async () => {
  const data = await note.findAll();
  if (data) {
    await client.set('getAllData', JSON.stringify(data));
    return data;

  }
};

//update single users

export const updateNote = async (id, body) => {
  await note.update(body, {
    where: { id: id }
  });
  return body;
};

//get single notes
export const getNotes = async (id) => {
  const data = await note.findByPk(id);
  return data;
};

//delete Notes
export const deleteNote = async (id) => {
  await note.destroy({ where: { id: id } });
  return '';
};

//trash notes

export const trashNote = async (id) => {
  const result = await note.update({isTrash:true}, {
    where: { id: id }
  });
  return result;
};

//archive note

export const archiveNote = async (id) => {
  const result = await note.update({isArchive:true}, {
    where: { id: id }
  });
  return result;
};