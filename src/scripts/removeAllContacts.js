import path from 'path';
import fs from 'fs/promises';

// Складаємо шлях до файлу з контактами за допомогою методу join
const PATH_DB = path.join(__dirname, '../constants/contacts.js');

export const removeAllContacts = async () => {
  try {
    // Записуємо порожній масив у файл
    await fs.writeFile(PATH_DB, JSON.stringify([], null, 2));

    console.log('Successfully removed all contacts.');
  } catch (error) {
    console.error('Error', error);
  }
};

await removeAllContacts();
