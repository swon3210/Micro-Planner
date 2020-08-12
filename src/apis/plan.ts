import { db } from '../db/firestore';

export type Day = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';

export interface Plan {
  id: string;
  userId: string | null | undefined;
  finalGoal: string;
  semiGoal: string;
  assignedTime: number;
  assignedPlace: string;
  assignedDays: Day[];
  progress: number;
  period: number;
  timestamp: number;
}

export const getPlans = async (uid: string) => {
  const plans: Plan[] = [];

  await db.collection('plans').doc(uid).get();

  return plans;
};

export const uploadPlans = async (uid: string) => {
  const plans: Plan[] = [];

  await db.collection('plans').doc(uid).get();

  return plans;
};

// 리얼타임

// await db.collection("plans").onSnapshot(snapshot => {
//   const changes = snapshot.docChanges();
//   changes.forEach(change => {
//     if (change.type === 'added') {
//       const newPlan = (change.doc.data()) as Plan;
//       plans.push(newPlan);
//     } else if (change.type === 'removed') {
//       const targetIndex = plans.findIndex(x => x.id === change.doc.id);
//       plans.splice(targetIndex, 1);
//     } else if (change.type === 'modified') {
//       const updatedPlan = (change.doc.data()) as Plan
//       const targetIndex = plans.findIndex(x => x.id === change.doc.id);
//       plans.splice(targetIndex, 1, updatedPlan);
//     }
//   })
// });
