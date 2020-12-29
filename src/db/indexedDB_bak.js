export const initiatePlanStore = () => {
  const request = window.indexedDB.open('planDatabase', 1);
  request.onupgradeneeded = function (event) {
    const db = request.result;
    const createdStore = db.createObjectStore('planStore', {
      autoIncrement: true,
    });
    createdStore.createIndex('finalGoal', 'finalGoal', { unique: false });
    createdStore.createIndex('timestamp', 'timestamp', { unique: true });
    db.onerror = function (error) {
      console.log('에러 : ', error.target.error);
    };
  };
  request.onsuccess = function (event) {
    console.log('스토어 접근 성공', event);
  };
  request.onerror = function (error) {
    console.log('에러 발생 : ', error.target.error);
  };
};

export const createPlanObject = (obj) => {
  const request = window.indexedDB.open('planDatabase', 1);
  let db;
  request.onsuccess = function (event) {
    db = request.result;
    console.log('스토어 접근 성공', event);
    const transaction = db.transaction('planStore', 'readwrite');
    const store = transaction.objectStore('planStore');
    const createRequest = store.add(obj);
    createRequest.onerror = (error) => {
      console.log('error : ', error.target.error);
    };
    createRequest.onsuccess = (event) => {};
  };
  request.onerror = function (error) {
    console.log('에러 발생 : ', error.target.error);
  };
};

export const findPlanObject = (id) => {
  const request = window.indexedDB.open('planDatabase', 1);
  let db;
  request.onsuccess = function (event) {
    db = request.result;
    console.log('스토어 접근 성공', event);
    const transaction = db.transaction('planStore', 'readwrite');
    const store = transaction.objectStore('planStore');
    const index = store.index('finalGoal');
    const data = index.get('테스트입니다');
    data.onerror = function (error) {
      console.log(error.target.error);
    };
    data.onsuccess = function (event) {
      console.log('이벤트', event.target.result);
    };
  };
  request.onerror = function (error) {
    console.log('에러 발생 : ', error.target.error);
  };
};

export const readAllPlanObjects = (allPlan) => {
  const request = window.indexedDB.open('planDatabase', 1);
  let db;
  request.onsuccess = function (event) {
    db = request.result;
    console.log('스토어 접근 성공', event);
    const transaction = db.transaction('planStore', 'readwrite');
    const store = transaction.objectStore('planStore');
    const readAllRequest = store.getAll();
    readAllRequest.onerror = function (error) {
      console.log('error : ', error.target.error);
    };
    readAllRequest.onsuccess = function (event) {
      const result = event.target.result;
      console.log('result : ', result);
    };
  };
  request.onerror = function (error) {
    console.log('에러 발생 : ', error.target.error);
  };
};

export const updatePlanObject = (obj, id) => {
  const request = window.indexedDB.open('planDatabase', 1);
  let db;
  request.onsuccess = function (event) {
    db = request.result;
    console.log('스토어 접근 성공', event);
    const transaction = db.transaction('planStore', 'readwrite');
    const store = transaction.objectStore('planStore');
    const updateRequest = store.put(obj, id);
    updateRequest.onerror = function (error) {
      console.log('error : ', error.target.error);
    };
    updateRequest.onsuccess = function (event) {
      console.log('result : ', event.target.result);
    };
  };
  request.onerror = function (error) {
    console.log('에러 발생 : ', error.target.error);
  };
};

export const deletePlanObject = (id) => {
  const request = window.indexedDB.open('planDatabase', 1);
  let db;
  request.onsuccess = function (event) {
    db = request.result;
    console.log('스토어 접근 성공', event);
    const transaction = db.transaction('planStore', 'readwrite');
    const store = transaction.objectStore('planStore');
    const deleteRequest = store.delete(id);
    deleteRequest.onerror = function (error) {
      console.log('error : ', error.target.error);
    };
    deleteRequest.onsuccess = function (event) {
      console.log('result : ', event);
    };
  };
  request.onerror = function (error) {
    console.log('에러 발생 : ', error.target.error);
  };
};
