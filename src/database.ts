// @ts-nocheck
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

const fs = require('fs');

async function createDb() {
  const filePath = `./${process.env.SQLITE_DB_SOURCE_FILE}`;
  fs.unlink(filePath, (err) => {
    if (err && err.code == 'ENOENT') {
      console.info("File doesn't exist.");
    } else if (err) {
      console.error('Error occurred while trying to remove file.');
    } else {
      console.info('Removed file.');
    }
  });
  open({
    filename: process.env.SQLITE_DB_SOURCE_FILE,
    driver: sqlite3.Database,
  }).then(async (db) => {
    await createTable(db);
  });
}

async function createTable(db) {
  console.log('createTable companies');
  await db.exec(`CREATE TABLE companies (id INTEGER PRIMARY KEY, name TEXT NOT NULL);`);
  await db.exec(
    `CREATE TABLE employees (id INTEGER PRIMARY KEY, name TEXT NOT NULL, company_id INTEGER NOT NULL, email TEXT NOT NULL, FOREIGN KEY (company_id) REFERENCES companies (id));`
  );
  await insertRows(db);
}

async function insertRows(db) {
  const insert2 = 'INSERT INTO companies (id, name) VALUES (?,?)';
  await db.run(insert2, [5678, 'Slalom']);
  const insert = 'INSERT INTO employees (id, name, company_id, email) VALUES (?,?,?,?)';
  await db.run(insert, [1234, 'Kyle Banner', 5678, 'kyle.banner@slalom.com']);
  await readAllRows(db);
}

async function readAllRows(db) {
  console.log('readAllRows lorem');
  const allRows = await db.all('SELECT id, name FROM employees');
  console.log(allRows);
}

module.exports = {
  createDb,
};
