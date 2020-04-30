import { open } from 'sqlite';
import sqlite3 from 'sqlite3';
import fs from 'fs';

let database: sqlite3.Database;

function deleteDbFile() {
  const filePath = `./${process.env.SQLITE_DB_SOURCE_FILE}`;
  try {
    fs.unlinkSync(filePath);
    // tslint:disable-next-line: no-console
    console.info('Database file deleted successfully.');
  } catch (err) {
    if (err && err.code === 'ENOENT') {
      // tslint:disable-next-line: no-console
      console.info("Database file doesn't exist.");
    } else {
      throw err;
    }
  }
}

async function createDb() {
  let dbSourceFile: string;
  if (process.env.SQLITE_DB_SOURCE_FILE) {
    dbSourceFile = process.env.SQLITE_DB_SOURCE_FILE;
  } else {
    throw new Error('sqlite db source file environment variable is undefined');
  }
  deleteDbFile();
  open<sqlite3.Database, sqlite3.Statement>({
    filename: dbSourceFile,
    driver: sqlite3.Database,
  }).then(async (db: any) => {
    await createTables(db);
  });
}

async function createTables(db: any) {
  await db.exec(`CREATE TABLE companies (id INTEGER PRIMARY KEY, name TEXT NOT NULL);`);
  await db.exec(
    `CREATE TABLE employees (id INTEGER PRIMARY KEY, name TEXT NOT NULL, company_id INTEGER NOT NULL, email TEXT NOT NULL, FOREIGN KEY (company_id) REFERENCES companies (id));`
  );
  await insertRows(db);
}

async function insertRows(db: any) {
  const insert2 = 'INSERT INTO companies (id, name) VALUES (?,?)';
  await db.run(insert2, [5678, 'Slalom']);
  const insert = 'INSERT INTO employees (id, name, company_id, email) VALUES (?,?,?,?)';
  await db.run(insert, [1234, 'Kyle Banner', 5678, 'kyle.banner@slalom.com']);
  database = db;
  // tslint:disable-next-line: no-console
  console.info('Database seeded successfully.');
}

export { createDb, database };
