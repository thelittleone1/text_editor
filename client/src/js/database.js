import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (id, value) => {
  console.error('putDb not implemented');
  // Connect to the DB
  const jateDb = await openDB("jate", 1);
  // Creating a new transaction
  const tx = jateDb.transaction("jate", "readwrite");
  // Open object Store
  const objStore = tx.objectStore("jate");
  // Pass in the correct data
  const request = objStore.put({ id: id, value: value });
  // Get confirmation of the request.
  const result = await request;
  console.log('🚀 - data saved to the database', result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async (value) => {
  console.error('getDb not implemented');
  // Connect to the DB
  const jateDb = await openDB("jate", 1);
  // Createing a new transaction
  const tx = jateDb.transaction("jate", "readwrite");
  // Open Object Store
  const objStore = tx.objectStore("jate");
  // Pass in the correct data
  const request = objStore.getAll();
  // Get confirmation of the request
  const result = await request;
  console.log('🚀 - data saved to the database', result);
};

initdb();
