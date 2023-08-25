import React from "react";
import {Header, Content, Footer} from './func-components'
import Calendar from "./class-components";
import RefsArray from "./refs-array";
/*
import RefsClass from "./refs-class";
import RefsFunc from "./refs-func";
import MsgBox from "./class-props";
import Banner from "./banner";
import { Calculator } from "./calculator";
import { Button } from "./class-components";
import { EventData } from "./event-data";
import { Table } from "./event-data";
*/

function App() {
  return (
    <>
    <Header/>
    <p><center><Calendar/></center></p>
    <Content/>
    <RefsArray/>
    <Footer/>
    </>
  )
}

export default App;
