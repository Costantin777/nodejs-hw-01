import fs from 'fs/promises';
import path from 'path';
import { PATH_DB } from '../constants/contacts.js';

export const thanos = async () => {
  try {
    // Складаємо шлях до файлу з контактами
    const filePath = path.resolve(PATH_DB);

    // Читаємо існуючі контакти з файлу
    const data = await fs.readFile(filePath, 'utf-8');
    let contacts = JSON.parse(data);

    // Проходимо по кожному контакту та з імовірністю 50% видаляємо його
    contacts = contacts.filter(() => Math.random() > 0.5);

    // Записуємо оновлений масив назад у файл
    await fs.writeFile(filePath, JSON.stringify(contacts, null, 2));

    console.log('Success');
  } catch (error) {
    console.error('Error', error);
  }
};

await thanos();
