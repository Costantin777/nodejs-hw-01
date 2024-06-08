import path from 'path';
import fs from 'fs/promises';

// Складаємо шлях до файлу з контактами за допомогою методу join
const PATH_DB = path.join(__dirname, '../constants/contacts.js');

import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    // Читаємо існуючі контакти з файлу
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);

    // Генеруємо нові контакти
    const newContacts = Array.from({ length: number }, createFakeContact);

    // Додаємо нові контакти до існуючого масиву
    const updatedContacts = [...contacts, ...newContacts];

    // Записуємо оновлений масив назад у файл
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));

    console.log(`Successfully added ${number} new contacts.`);
  } catch (error) {
    console.error('Error', error);
  }
};

await generateContacts(5);
