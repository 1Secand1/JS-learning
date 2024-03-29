class IndexedDBManager {
  version = 1;

  constructor(nameBd) {
    this.nameBd = nameBd;
    this.connectDB(this.nameBd);
  }

  deleteBase() { }

  connectDB(name, successful = undefined, failed = undefined) {
    const request = indexedDB.open(name, 1);

    request.onsuccess = function (event) {
      const db = event.target.result;
      successful?.(db, openRequest);
    };

    request.onerror = (event) => {
      if (failed) {
        failed(event);
      } else {
        throw new Error("Ошибка при открытии базы данных");
      }
    };
  }

  getObjectStore(db, fun) {
    const transaction = db.transaction([storeName], "readonly");
    const objectStore = transaction.objectStore(storeName);
    fun(objectStore);
  }

  indexDbOperation(fun) { }

  createStore() {
    
  }
  deleteStore() { }
}

let myDb = new IndexedDBManager("myDb");

myDb.createStore("testStore");