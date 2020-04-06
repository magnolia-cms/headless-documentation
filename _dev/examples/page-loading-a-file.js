import { useState, useEffect } from 'react';
import React from 'react';
import Layout from '@theme/Layout';
import axios from 'axios';

function Hello() {

    const [data, setData] = useState('');

    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            '/redoc-static.html',
          );
          setData(result.data);
        };
        fetchData();
      }, []);

      

  return (
    <Layout title="Hello">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>

        <div id='content' dangerouslySetInnerHTML={{__html:data}} ></div>
      </div>
    </Layout>
  );
}

export default Hello;