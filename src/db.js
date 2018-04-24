import Dexie from "dexie";

const db = new Dexie("myDb");
db.version(1).stores({
  _states: `gameName`
});

export default db;
