'use client';

import { useEffect, useState } from 'react';
import Parameter from '../../component/Parameter';
import MonitoringCard from '@/component/MonitoringCard';
import MonitoringCardBod from '@/component/MonitoringCardBod';
import mqtt from 'mqtt';

const initSpeedometer = {
  BOD: 0,
  COD: 0,
  CT: 0,
  DEPTH: 0,
  DO: 0,
  id: '',
  N: 0,
  NO2: 0,
  'NO3-3': 0,
  ORP: 0,
  PH: 0,
  Temperature: 0,
  time: '',
  TSS: 0,
  TUR: 0,
  uuid: '',
};

function Monitoring() {
  const [dataMonitoring, setDataMonitoring] = useState(initSpeedometer);
  const [dataIsLoad, setDataIsLoad] = useState(false);

  const id = '240305005225029';
  const topic = 'mqtt_ccb3aad79fe5';
  useEffect(() => {
    // Connect to the MQTT broker
    const client = mqtt.connect('ws://103.84.206.53:9001');

    // Subscribe to the MQTT topic
    client.subscribe(topic);

    // Handle incoming messages
    client.on('message', (_topic, message) => {
      // Handle the incoming message
      const jsonString = JSON.parse(message.toString());
      const uuidx = jsonString['uuid'];
      if (uuidx === id) {
        //   setUuid(id);
        setDataMonitoring(jsonString.data[jsonString.data.length - 1]);
        setDataIsLoad(true);
      }
    });

    // Cleanup on component unmount
    // return () => {
    //   client.end(); // Close the MQTT connection
    //   setDataIsLoad(false);
    // };
  }, [id]);

  // if (!dataIsLoad) {
  //   return (
  //     <p className='text-center text-lg font-bold mt-4'>Waiting Resources...</p>
  //   );
  // }
  return (
    <main className={`px-5  transition-all sm:px-10 `}>
      <section>
        <div className='grid grid-cols-1 gap-4 py-7 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-6'>
          <MonitoringCard
            title='Temperature'
            value={+dataMonitoring.Temperature.toFixed(2)}
            unit={`\u00B0C`}
            time={dataMonitoring.time}
          />
          <MonitoringCard
            title='DO'
            value={+dataMonitoring.DO.toFixed(2)}
            unit='mg/L'
            time={dataMonitoring.time}
          />
          <MonitoringCard
            title='Turbidity'
            value={+dataMonitoring.TUR.toFixed(2)}
            unit='NTU'
            time={dataMonitoring.time}
          />
          <MonitoringCard
            title='TDS'
            value={+dataMonitoring.CT.toFixed(2)}
            unit='ppm'
            time={dataMonitoring.time}
          />
          <MonitoringCard
            title='pH'
            value={+dataMonitoring.PH.toFixed(2)}
            unit='pH'
            time={dataMonitoring.time}
          />
          <MonitoringCard
            title='ORP'
            value={+dataMonitoring.ORP.toFixed(2)}
            unit='Mv'
            time={dataMonitoring.time}
          />
          <MonitoringCardBod
            title='BOD'
            value={+dataMonitoring.BOD.toFixed(2)}
            valuecod={+dataMonitoring.COD.toFixed(2)}
            unit='mg/L'
            time={dataMonitoring.time}
          />
          <MonitoringCard
            title='COD'
            value={+dataMonitoring.COD.toFixed(2)}
            unit='mg/L'
            time={dataMonitoring.time}
          />
          <MonitoringCard
            title='TSS'
            value={+dataMonitoring.TSS.toFixed(2)}
            unit='mg/L'
            time={dataMonitoring.time}
          />
          <MonitoringCard
            title='Amonia'
            value={+dataMonitoring.N.toFixed(2)}
            unit='mg/L'
            time={dataMonitoring.time}
          />
          <MonitoringCard
            title='Nitrat'
            value={+dataMonitoring['NO3-3'].toFixed(2)}
            unit='mg/L'
            time={dataMonitoring.time}
          />

          <MonitoringCard
            title='Nitrit'
            value={+dataMonitoring.NO2.toFixed(2)}
            unit='mg/L'
            time={dataMonitoring.time}
          />
          <MonitoringCard
            title='Kedalaman'
            value={+dataMonitoring.DEPTH.toFixed(2)}
            unit='M'
            time={dataMonitoring.time}
          />
        </div>
      </section>
    </main>
  );
}

export default Monitoring;
