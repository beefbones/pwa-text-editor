import { openDB } from 'idb';

const dbName = 'jate';
const dbVersion = 1;

const jateDbPromise = openDB(dbName, dbVersion, (upgradeDB) => {
  const jateStore = upgradeDB.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
});

export const getDb = async () => {
  const jateDb = await jateDbPromise;
  const jateStore = jateDb.transaction('jate', 'readonly').objectStore('jate');
  const data = await jateStore.getAll();
  return data;
};

export const putDb = async (value) => {
  const jateDb = await jateDbPromise;
  const jateStore = jateDb.transaction('jate', 'readwrite').objectStore('jate');
  const id = await jateStore.put(value);
  return id;
};
