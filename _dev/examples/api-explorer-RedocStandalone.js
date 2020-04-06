import React from 'react';
import Layout from '@theme/Layout';
import { RedocStandalone } from 'redoc';
import Navbar from '@theme/Navbar';

function Hello() {

  return (
    <>
    
    
    <Layout title="Hello">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          
          fontSize: '20px',
        }}>
        <RedocStandalone specUrl="openapi-delivery-api.yaml"/>
        
      </div>
    </Layout>
    </>
  );
}

export default Hello;