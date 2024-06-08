import path from 'path';
import fs from 'fs/promises';

// Складаємо шлях до файлу з контактами за допомогою методу join
const PATH_DB = path.join(__dirname, '../constants/contacts.js');

export const countContacts = async () => {
  try {
    // Читаємо існуючі контакти з файлу
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);

    // Повертаємо кількість контактів
    return contacts.length;
  } catch (error) {
    console.error('Error', error);
    return 0;
  }
};

console.log(await countContacts());
