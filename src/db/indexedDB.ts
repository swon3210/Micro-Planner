import { openDB } from 'idb';
import config from '../constants/config.js';
import { Plan } from '../apis/plan';

const offlineDB = {
  planStore: openDB(config.DATABASE, 1, {
    upgrade(db) {
      db.createObjectStore(config.PLAN_STORE, {
        keyPath: 'id',
      });
    },
  }),
};

export const addPlan = async (plan: Plan) => {
  try {
    (await offlineDB.planStore).add(config.PLAN_STORE, plan);
  } catch (error) {
    alert('계획을 작성하는데 실패했습니다!');
  }
};

export const getAllPlans = async () => {
  let allPlans: any;
  try {
    allPlans = (await offlineDB.planStore).getAll(config.PLAN_STORE);
  } catch (error) {
    alert('계획들을 가져오는데 실패했습니다!');
  }

  return allPlans;
};

export default {
  addPlan,
  getAllPlans,
};
