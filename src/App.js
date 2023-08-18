import React from "react";
import {Header, Content, Footer} from './func-components'
import Calendar from "./class-components";
import MsgBox from "./class-props";
import Banner from "./banner";
import { Calculator } from "./calculator";
import { Button } from "./class-components";
import { EventData } from "./event-data";
import { Table } from "./event-data";

function App() {
  return (
    <>
    <Banner/>
    <Header/>
    <p><center><Calendar/></center></p>
    <Content/>
    <Button/>
    <Calculator/>
    <EventData/>
    <Table/>
    <Footer/>
    <MsgBox
      text = "React & React Native"
      color = "blue"
      bgColor = "#ccc"
      fontSize = "18pt"
      border = "solid 1px black"
    />
    </>

  )
}

export default App;
