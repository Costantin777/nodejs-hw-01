import path from 'path';
import fs from 'fs/promises';

// Складаємо шлях до файлу з контактами за допомогою методу join
const PATH_DB = path.join(__dirname, '../constants/contacts.js');

export const getAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    console.error('Error', error);
    return [];
  }
};

console.log(await getAllContacts());
