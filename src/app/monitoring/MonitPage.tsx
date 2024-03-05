// 'use client';

// import type { NextApiRequest, NextApiResponse } from 'next';
// import React, { useEffect, useState } from 'react';
// import { onSnapshot, collection, getDoc } from 'firebase/firestore';
// import db from '@/firebase/config';
// import MonitoringCard from '@/component/MonitoringCard';
// import MonitoringCardBod from '@/component/MonitoringCardBod';
// import prisma from '@/lib/prisma';

// const initSpeedometer = {
//   bod: 0,
//   cod: 0,
//   ct: 0,
//   depeth: 0,
//   do_: 0,
//   id: '',
//   n: 0,
//   no2: 0,
//   no3_3: 0,
//   orp: 0,
//   ph: 0,
//   temperature: 0,
//   time: '',
//   tss: 0,
//   tur: 0,
//   uuid: '',
// };

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const users = await prisma.mqtt_datas.findMany();
//   res.status(200).json({ users: users });
//   console.log(users);
// }
// // eslint-disable-next-line @next/next/no-async-client-component
// export const MonitPage = () => {
//   const id = '240305005225029';
//   const [dataMonitoring, setDataMonitoring] = useState(initSpeedometer);
//   const stationCollectionRef = collection(db, `watermonitoring`);

//   useEffect(() => {
//     const unsub = onSnapshot(stationCollectionRef, (snapshot) => {
//       const data: any[] = [];
//       snapshot.docs.forEach((doc) => {
//         data.push({ ...doc.data(), id: doc.id });
//       });
//       const filterById = data.filter((val) => val.uuid == id);
//       if (filterById.length > 0) {
//         setDataMonitoring(filterById[0]);
//       }
//     });
//     return () => unsub();
//   }, [id, stationCollectionRef]);

//   return (
//     <main className={`px-5  transition-all sm:px-10 `}>
//       <section>
//         <div className='grid grid-cols-1 gap-4 py-7 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-6'>
//           <MonitoringCard
//             title='Temperature'
//             value={+dataMonitoring.temperature.toFixed(2)}
//             unit={`\u00B0C`}
//             time={dataMonitoring.time}
//           />
//           <MonitoringCard
//             title='DO'
//             value={+dataMonitoring.do_.toFixed(2)}
//             unit='mg/L'
//             time={dataMonitoring.time}
//           />
//           <MonitoringCard
//             title='Turbidity'
//             value={+dataMonitoring.tur.toFixed(2)}
//             unit='NTU'
//             time={dataMonitoring.time}
//           />
//           <MonitoringCard
//             title='TDS'
//             value={+dataMonitoring.ct.toFixed(2)}
//             unit='ppm'
//             time={dataMonitoring.time}
//           />
//           <MonitoringCard
//             title='pH'
//             value={+dataMonitoring.ph.toFixed(2)}
//             unit='pH'
//             time={dataMonitoring.time}
//           />
//           <MonitoringCard
//             title='ORP'
//             value={+dataMonitoring.orp.toFixed(2)}
//             unit='Mv'
//             time={dataMonitoring.time}
//           />
//           <MonitoringCardBod
//             title='BOD'
//             value={+dataMonitoring.bod.toFixed(2)}
//             valuecod={+dataMonitoring.cod.toFixed(2)}
//             unit='mg/L'
//             time={dataMonitoring.time}
//           />
//           <MonitoringCard
//             title='COD'
//             value={+dataMonitoring.cod.toFixed(2)}
//             unit='mg/L'
//             time={dataMonitoring.time}
//           />
//           <MonitoringCard
//             title='TSS'
//             value={+dataMonitoring.tss.toFixed(2)}
//             unit='mg/L'
//             time={dataMonitoring.time}
//           />
//           <MonitoringCard
//             title='Amonia'
//             value={+dataMonitoring.n.toFixed(2)}
//             unit='mg/L'
//             time={dataMonitoring.time}
//           />
//           <MonitoringCard
//             title='Nitrat'
//             value={+dataMonitoring.no3_3.toFixed(2)}
//             unit='mg/L'
//             time={dataMonitoring.time}
//           />

//           <MonitoringCard
//             title='Nitrit'
//             value={+dataMonitoring.no2.toFixed(2)}
//             unit='mg/L'
//             time={dataMonitoring.time}
//           />
//           <MonitoringCard
//             title='Kedalaman'
//             value={+dataMonitoring.depeth.toFixed(2)}
//             unit='M'
//             time={dataMonitoring.time}
//           />
//         </div>
//       </section>
//     </main>
//   );
// };
