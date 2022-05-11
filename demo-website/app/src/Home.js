import React from 'react';
import web from '../src/images/2.jpg';
import Common from './Common';
export default function Home() {
  return (
    <>
     <Common name="welcome to Home page" imgsrc={web} visit='/servicess' btname="Started Now"/>
    </>
  );
}
