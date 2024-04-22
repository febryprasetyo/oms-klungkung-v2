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
  const [dataMonitoring2, setDataMonitoring2] = useState(initSpeedometer);
  const [dataMonitoring3, setDataMonitoring3] = useState(initSpeedometer);
  const [dataIsLoad, setDataIsLoad] = useState(false);

  const id1 = '240305005225028';
  const id2 = '240305005225029';
  const id3 = '240305005225030';
  const topic = 'mqtt_ccb3aad79fe5';
  useEffect(() => {
    const client = mqtt.connect('ws://103.84.206.53:9001');
    client.subscribe(topic);
    client.on('message', (_topic, message) => {
      const jsonString = JSON.parse(message.toString());
      const uuidx = jsonString['uuid'];
      if (uuidx === id1) {
        setDataMonitoring(jsonString.data[jsonString.data.length - 1]);
        setDataIsLoad(true);
      }
      if (uuidx === id2) {
        setDataMonitoring2(jsonString.data[jsonString.data.length - 1]);
        setDataIsLoad(true);
      }
      if (uuidx === id3) {
        setDataMonitoring3(jsonString.data[jsonString.data.length - 1]);
        setDataIsLoad(true);
      }
    });
    return () => {
      client.end(); // Close the MQTT connection
      setDataIsLoad(false);
    };
  }, [id1, id2, id3]);

  if (!dataIsLoad) {
    return (
      <p className='text-center text-lg font-bold mt-4'>Waiting Resources...</p>
    );
  }
  return (
    <main className={`px-5  transition-all sm:px-10 `}>
      <section>
        <div className='grid grid-cols-1 gap-4 py-7 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5 3xl:grid-cols-5'>
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
            value={+dataMonitoring3.TUR.toFixed(2)}
            unit='NTU'
            time={dataMonitoring.time}
          />
          <MonitoringCard
            title='TDS'
            value={+dataMonitoring3.CT.toFixed(2)}
            unit='ppm'
            time={dataMonitoring.time}
          />
          <MonitoringCard
            title='pH'
            value={+dataMonitoring3.PH.toFixed(2)}
            unit='pH'
            time={dataMonitoring.time}
          />
          <MonitoringCard
            title='ORP'
            value={+dataMonitoring3.ORP.toFixed(2)}
            unit='Mv'
            time={dataMonitoring.time}
          />
          <MonitoringCardBod
            title='BOD'
            value={+(dataMonitoring.BOD - 20).toFixed(2)}
            valuecod={+dataMonitoring.COD.toFixed(2)}
            unit='mg/L'
            time={dataMonitoring.time}
          />
          <MonitoringCard
            title='COD'
            value={+(dataMonitoring.COD - 40).toFixed(2)}
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
            value={+dataMonitoring3.N.toFixed(2)}
            unit='mg/L'
            time={dataMonitoring.time}
          />
          <MonitoringCard
            title='Nitrat'
            value={+dataMonitoring3['NO3-3'].toFixed(2)}
            unit='mg/L'
            time={dataMonitoring.time}
          />

          <MonitoringCard
            title='Nitrit'
            value={+dataMonitoring3.NO2.toFixed(2)}
            unit='mg/L'
            time={dataMonitoring.time}
          />
          <MonitoringCard
            title='Kedalaman'
            value={+dataMonitoring2.DEPTH.toFixed(2)}
            unit='M'
            time={dataMonitoring.time}
          />
        </div>
      </section>
    </main>
  );
}

export default Monitoring;
