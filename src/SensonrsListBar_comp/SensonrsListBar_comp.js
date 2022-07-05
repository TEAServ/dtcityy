
//------------------------------------
//-------------------------------------------------
import './SensonrsListBar_comp.css';
//import ToDoElement_comp from '../ToDoElementt_comp/ToDoElement_comp';
import ReactDOM from "react-dom";
import React from "react";


import Login_comp from '../Login_comp/Login_comp';
import Task_comp from '../Task_comp/Task_comp';

import { connect } from 'react-redux';
import { setHistoryObj, setMatchObj,setSelectedSens } from '../store/actions';
import { centerData } from '../Data';
 class SensonrsListBar_comp extends React.Component {
  state = {
    sensStatee:-1,
    content:<>
    <div className='aasafa'>
        <div className='fdffdf'>
        <img width="200px" src='https://cdn-icons-png.flaticon.com/512/3712/3712541.png'></img>
            <h3>Select Sensors Group</h3>

        </div>
    </div>
</>,
    s:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]
  };
  // constructor(props)
  // {
   
  //   super(props);
  //   this.state={
  //     complete : ""
  //   };
  // }
  componentDidMount()
  {
   // console.log(this.props.state.history);
   // console.log(this.props);
   // this.RecordHistory();

  }
  componentDidUpdate()
  {
   // this.ReturnRendered();
   if (this.state.sensStatee != this.props.state.sensState) {
    this.ReturnRendered();
    this.setState({sensStatee:this.props.state.sensState})
   }
  }

  RecordHistory()
  {
    if (!this.props.state.history) {
      
      this.props.setHistoryObj(this.props.history)
    }
    else{
      
     // console.log(this.props);
    }
    this.props.setMatchObj(this.props.match)
  }
  PickSensor(i,id)
  { 
    var ss = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
    ss[i] = "ActivatedsideListBarCard";
console.log(ss);
    this.setState({
        s:ss
      });
    console.log(this.state.s);
    this.props.setSelectedSens(id);
   // window.unityInstance.SendMessage('AppManager','MoveCameraTo',id)
    setTimeout(() => {
        this.ReturnRendered();
        
    }, 100);
  }
ReturnRendered()
{
    if (this.props.state.sensState == 1) {
        this.setState({
            content: <>
            <div class="sideListBarExternal">
 
 <div class="container-fluid"> 
     <div class="row">
 
         <div class="col-10">
             <div class="sideListBarTitle">Temperature Sensors</div>
         </div>
         
         <div class="col-2 backBtn"><div>
             {/* <i class="fas fa-arrow-left"></i> */}
         </div></div>
     </div>
 </div>
 
 <div class="sideListBarInternalCont">
     <input type="text" class="form-control SearchBox" id="dummyBox" placeholder="Search" name="searchBox" disabled="true" />
 <div class="sensorsCardCont">
     <div class={`sideListBarCard container-fluid ${this.state.s[0]}`} onClick={()=>{this.PickSensor(0,"T (1)")}}>
         <div class="row cardContentRow">
             <div class="col-8 cardLeftSide" >
                 <div><span class="SensorName"><span class="statusGreen"><i class="fas fa-circle"></i></span>Sensor T 1</span></div>
                 <div><span class="SensorID">id: 45647345378</span></div>
             </div>
             <div class="col-4 cardRightSide">
             <div>31 °C</div>
             </div>
         </div>
     </div>
 
     <div class={`sideListBarCard container-fluid ${this.state.s[1]}`} onClick={()=>{this.PickSensor(1,"T (2)")}}>
         <div class="row cardContentRow">
             <div class="col-8 cardLeftSide" >
                 <div><span class="SensorName"><span class="statusRed"><i class="fas fa-circle"></i></span>Sensor T 2</span></div>
                 <div><span class="SensorID">id: 45345383456</span></div>
             </div>
             <div class="col-4 cardRightSide">
             <div>40 °C</div>
             </div>
         </div>
     </div>
 
     <div class={`sideListBarCard container-fluid ${this.state.s[2]}`} onClick={()=>{this.PickSensor(2,"T (3)")}}>
         <div class="row cardContentRow">
             <div class="col-8 cardLeftSide" >
                 <div><span class="SensorName"><span class="statusGreen"><i class="fas fa-circle"></i></span>Sensor T 3</span></div>
                 <div><span class="SensorID">id: 4386454313</span></div>
             </div>
             <div class="col-4 cardRightSide">
             <div>28 °C</div>
             </div>
         </div>
     </div>

     <div class={`sideListBarCard container-fluid ${this.state.s[3]}`} onClick={()=>{this.PickSensor(3,"T (4)")}}>
         <div class="row cardContentRow">
             <div class="col-8 cardLeftSide" >
                 <div><span class="SensorName"><span class="statusGreen"><i class="fas fa-circle"></i></span>Sensor T 4</span></div>
                 <div><span class="SensorID">id: 785434883</span></div>
             </div>
             <div class="col-4 cardRightSide">
             <div>30 °C</div>
             </div>
         </div>
     </div>

     <div class={`sideListBarCard container-fluid ${this.state.s[4]}`} onClick={()=>{this.PickSensor(4,"T (5)")}}>
         <div class="row cardContentRow">
             <div class="col-8 cardLeftSide" >
                 <div><span class="SensorName"><span class="statusGreen"><i class="fas fa-circle"></i></span>Sensor T 5</span></div>
                 <div><span class="SensorID">id: 5464678645</span></div>
             </div>
             <div class="col-4 cardRightSide">
             <div>31 °C</div>
             </div>
         </div>
     </div>

     <div class={`sideListBarCard container-fluid ${this.state.s[5]}`} onClick={()=>{this.PickSensor(5,"T (6)")}}>
         <div class="row cardContentRow">
             <div class="col-8 cardLeftSide" >
                 <div><span class="SensorName"><span class="statusGreen"><i class="fas fa-circle"></i></span>Sensor T 6</span></div>
                 <div><span class="SensorID">id: 434567865</span></div>
             </div>
             <div class="col-4 cardRightSide">
             <div>32 °C</div>
             </div>
         </div>
     </div>

     <div class={`sideListBarCard container-fluid ${this.state.s[6]}`} onClick={()=>{this.PickSensor(6,"T (7)")}}>
         <div class="row cardContentRow">
             <div class="col-8 cardLeftSide" >
                 <div><span class="SensorName"><span class="statusGreen"><i class="fas fa-circle"></i></span>Sensor T 7</span></div>
                 <div><span class="SensorID">id: 43864537813</span></div>
             </div>
             <div class="col-4 cardRightSide">
             <div>31 °C</div>
             </div>
         </div>
     </div>
 
 
 
 </div>
 </div>
 
 </div>
            </>
        });
        
    }else if (this.props.state.sensState ==0) {
        this.setState({content:<>
            <div class="sideListBarExternal">
 
 <div class="container-fluid"> 
     <div class="row">
 
         <div class="col-10">
             <div class="sideListBarTitle">Humidity Sensors</div>
         </div>
         
         <div class="col-2 backBtn"><div>
             {/* <i class="fas fa-arrow-left"></i> */}
         </div></div>
     </div>
 </div>
 
 <div class="sideListBarInternalCont">
     <input type="text" class="form-control SearchBox" id="dummyBox" placeholder="Search" name="searchBox" disabled="true" />
 <div class="sensorsCardCont">
 <div class={`sideListBarCard container-fluid ${this.state.s[7]}`} onClick={()=>{this.PickSensor(7,"H (1)")}}>
         <div class="row cardContentRow">
             <div class="col-8 cardLeftSide" >
                 <div><span class="SensorName"><span class="statusGreen"><i class="fas fa-circle"></i></span>Sensor H 1</span></div>
                 <div><span class="SensorID">id: 45647345378</span></div>
             </div>
             <div class="col-4 cardRightSide">
             <div>55%</div>
             </div>
         </div>
     </div>
 
     <div class={`sideListBarCard container-fluid ${this.state.s[8]}`} onClick={()=>{this.PickSensor(8,"H (2)")}}>
         <div class="row cardContentRow">
             <div class="col-8 cardLeftSide" >
                 <div><span class="SensorName"><span class="statusGreen"><i class="fas fa-circle"></i></span>Sensor H 2</span></div>
                 <div><span class="SensorID">id: 45345383456</span></div>
             </div>
             <div class="col-4 cardRightSide">
             <div>52%</div>
             </div>
         </div>
     </div>
 
     <div class={`sideListBarCard container-fluid ${this.state.s[9]}`} onClick={()=>{this.PickSensor(9,"H (3)")}}>
         <div class="row cardContentRow">
             <div class="col-8 cardLeftSide" >
                 <div><span class="SensorName"><span class="statusGreen"><i class="fas fa-circle"></i></span>Sensor H 3</span></div>
                 <div><span class="SensorID">id: 4386454313</span></div>
             </div>
             <div class="col-4 cardRightSide">
             <div>50%</div>
             </div>
         </div>
     </div>

     <div class={`sideListBarCard container-fluid ${this.state.s[10]}`} onClick={()=>{this.PickSensor(10,"H (4)")}}>
         <div class="row cardContentRow">
             <div class="col-8 cardLeftSide" >
                 <div><span class="SensorName"><span class="statusGreen"><i class="fas fa-circle"></i></span>Sensor H 4</span></div>
                 <div><span class="SensorID">id: 785434883</span></div>
             </div>
             <div class="col-4 cardRightSide">
             <div>49%</div>
             </div>
         </div>
     </div>

     <div class={`sideListBarCard container-fluid ${this.state.s[11]}`} onClick={()=>{this.PickSensor(11,"H (5)")}}>
         <div class="row cardContentRow">
             <div class="col-8 cardLeftSide" >
                 <div><span class="SensorName"><span class="statusGreen"><i class="fas fa-circle"></i></span>Sensor H 5</span></div>
                 <div><span class="SensorID">id: 5464678645</span></div>
             </div>
             <div class="col-4 cardRightSide">
             <div>51%</div>
             </div>
         </div>
     </div>

     <div class={`sideListBarCard container-fluid ${this.state.s[12]}`} onClick={()=>{this.PickSensor(12,"H (6)")}}>
         <div class="row cardContentRow">
             <div class="col-8 cardLeftSide" >
                 <div><span class="SensorName"><span class="statusGreen"><i class="fas fa-circle"></i></span>Sensor H 6</span></div>
                 <div><span class="SensorID">id: 434567865</span></div>
             </div>
             <div class="col-4 cardRightSide">
             <div>54%</div>
             </div>
         </div>
     </div>

     <div class={`sideListBarCard container-fluid ${this.state.s[13]}`} onClick={()=>{this.PickSensor(13,"H (7)")}}>
         <div class="row cardContentRow">
             <div class="col-8 cardLeftSide" >
                 <div><span class="SensorName"><span class="statusGreen"><i class="fas fa-circle"></i></span>Sensor H 7</span></div>
                 <div><span class="SensorID">id: 434567173</span></div>
             </div>
             <div class="col-4 cardRightSide">
             <div>50%</div>
             </div>
         </div>
     </div>


 
 
 
 </div>
 </div>
 
 </div>
            </>})

    }
    else if (this.props.state.sensState ==2) {
        this.setState({content:<>
            <div class="sideListBarExternal">
 
 <div class="container-fluid"> 
     <div class="row">
 
         <div class="col-10">
             <div class="sideListBarTitle">CCTV Cameras</div>
         </div>
         
         <div class="col-2 backBtn"><div>
             {/* <i class="fas fa-arrow-left"></i> */}
         </div></div>
     </div>
 </div>
 
 <div class="sideListBarInternalCont">
     <input type="text" class="form-control SearchBox" id="dummyBox" placeholder="Search" name="searchBox" disabled="true" />
 <div class="sensorsCardCont">
 <div class={`sideListBarCard container-fluid ${this.state.s[14]}`} onClick={()=>{this.PickSensor(14,"CCTV1")}}>
         <div class="row cardContentRow">
             <div class="col-8 cardLeftSide" >
                 <div><span class="SensorName"><span class="statusGreen"><i class="fas fa-circle"></i></span>Camera 1</span></div>
                 <div><span class="SensorID">id: 45647345378</span></div>
             </div>
             <div class="col-4 cardRightSide">
             <div>LIVE</div>
             </div>
         </div>
     </div>
 
     <div class={`sideListBarCard container-fluid ${this.state.s[15]}`} onClick={()=>{this.PickSensor(15,"CCTV2")}}>
         <div class="row cardContentRow">
             <div class="col-8 cardLeftSide" >
                 <div><span class="SensorName"><span class="statusGreen"><i class="fas fa-circle"></i></span>Camera 2</span></div>
                 <div><span class="SensorID">id: 45345383456</span></div>
             </div>
             <div class="col-4 cardRightSide">
             <div>LIVE</div>
             </div>
         </div>
     </div>
 
     <div class={`sideListBarCard container-fluid ${this.state.s[16]}`} onClick={()=>{this.PickSensor(16,"CCTV3")}}>
         <div class="row cardContentRow">
             <div class="col-8 cardLeftSide" >
                 <div><span class="SensorName"><span class="statusGreen"><i class="fas fa-circle"></i></span>Camera 3</span></div>
                 <div><span class="SensorID">id: 4386454313</span></div>
             </div>
             <div class="col-4 cardRightSide">
             <div>LIVE</div>
             </div>
         </div>
     </div>

     <div class={`sideListBarCard container-fluid ${this.state.s[17]}`} onClick={()=>{this.PickSensor(17,"CCTV4")}}>
         <div class="row cardContentRow">
             <div class="col-8 cardLeftSide" >
                 <div><span class="SensorName"><span class="statusGreen"><i class="fas fa-circle"></i></span>Camera 4</span></div>
                 <div><span class="SensorID">id: 785434883</span></div>
             </div>
             <div class="col-4 cardRightSide">
             <div>LIVE</div>
             </div>
         </div>
     </div>

     <div class={`sideListBarCard container-fluid ${this.state.s[18]}`} onClick={()=>{this.PickSensor(18,"CCTV5")}}>
         <div class="row cardContentRow">
             <div class="col-8 cardLeftSide" >
                 <div><span class="SensorName"><span class="statusGreen"><i class="fas fa-circle"></i></span>Camera 5</span></div>
                 <div><span class="SensorID">id: 5464678645</span></div>
             </div>
             <div class="col-4 cardRightSide">
             <div>LIVE</div>
             </div>
         </div>
     </div>

     <div class={`sideListBarCard container-fluid ${this.state.s[19]}`} onClick={()=>{this.PickSensor(19,"CCTV6")}}>
         <div class="row cardContentRow">
             <div class="col-8 cardLeftSide" >
                 <div><span class="SensorName"><span class="statusGreen"><i class="fas fa-circle"></i></span>Camera 6</span></div>
                 <div><span class="SensorID">id: 434567865</span></div>
             </div>
             <div class="col-4 cardRightSide">
             <div>LIVE</div>
             </div>
         </div>
     </div>

     <div class={`sideListBarCard container-fluid ${this.state.s[20]}`} onClick={()=>{this.PickSensor(20,"CCTV7")}}>
         <div class="row cardContentRow">
             <div class="col-8 cardLeftSide" >
                 <div><span class="SensorName"><span class="statusGreen"><i class="fas fa-circle"></i></span>Camera 7</span></div>
                 <div><span class="SensorID">id: 434566495</span></div>
             </div>
             <div class="col-4 cardRightSide">
             <div>LIVE</div>
             </div>
         </div>
     </div>


 
 
 
 </div>
 </div>
 
 </div>
            </>})
    }
    else if (this.props.state.sensState ==3) {
        this.setState({content:<>
            <div class="sideListBarExternal">
 
 <div class="container-fluid"> 
     <div class="row">
 
         <div class="col-10">
             <div class="sideListBarTitle">Pressure Sensors</div>
         </div>
         
         <div class="col-2 backBtn"><div>
             {/* <i class="fas fa-arrow-left"></i> */}
         </div></div>
     </div>
 </div>
 
 <div class="sideListBarInternalCont">
     <input type="text" class="form-control SearchBox" id="dummyBox" placeholder="Search" name="searchBox" disabled="true" />
 <div class="sensorsCardCont">
 <div class={`sideListBarCard container-fluid ${this.state.s[21]}`} onClick={()=>{this.PickSensor(21,"P (1)")}}>
         <div class="row cardContentRow">
             <div class="col-8 cardLeftSide" >
                 <div><span class="SensorName"><span class="statusGreen"><i class="fas fa-circle"></i></span>Sensor P 1</span></div>
                 <div><span class="SensorID">id: 45647345378</span></div>
             </div>
             <div class="col-4 cardRightSide">
             <div>30 bar</div>
             </div>
         </div>
     </div>
 
     <div class={`sideListBarCard container-fluid ${this.state.s[22]}`} onClick={()=>{this.PickSensor(22,"P (2)")}}>
         <div class="row cardContentRow">
             <div class="col-8 cardLeftSide" >
                 <div><span class="SensorName"><span class="statusGreen"><i class="fas fa-circle"></i></span>Sensor P 2</span></div>
                 <div><span class="SensorID">id: 45345383456</span></div>
             </div>
             <div class="col-4 cardRightSide">
             <div>29 bar</div>
             </div>
         </div>
     </div>
 
     <div class={`sideListBarCard container-fluid ${this.state.s[23]}`} onClick={()=>{this.PickSensor(23,"P (3)")}}>
         <div class="row cardContentRow">
             <div class="col-8 cardLeftSide" >
                 <div><span class="SensorName"><span class="statusGreen"><i class="fas fa-circle"></i></span>Sensor P 3</span></div>
                 <div><span class="SensorID">id: 4386454313</span></div>
             </div>
             <div class="col-4 cardRightSide">
             <div>27 bar</div>
             </div>
         </div>
     </div>

     <div class={`sideListBarCard container-fluid ${this.state.s[24]}`} onClick={()=>{this.PickSensor(24,"P (4)")}}>
         <div class="row cardContentRow">
             <div class="col-8 cardLeftSide" >
                 <div><span class="SensorName"><span class="statusGreen"><i class="fas fa-circle"></i></span>Sensor P 4</span></div>
                 <div><span class="SensorID">id: 785434883</span></div>
             </div>
             <div class="col-4 cardRightSide">
             <div>26 bar</div>
             </div>
         </div>
     </div>

     <div class={`sideListBarCard container-fluid ${this.state.s[25]}`} onClick={()=>{this.PickSensor(25,"P (5)")}}>
         <div class="row cardContentRow">
             <div class="col-8 cardLeftSide" >
                 <div><span class="SensorName"><span class="statusGreen"><i class="fas fa-circle"></i></span>Sensor P 5</span></div>
                 <div><span class="SensorID">id: 5464678645</span></div>
             </div>
             <div class="col-4 cardRightSide">
             <div>27 bar</div>
             </div>
         </div>
     </div>

     <div class={`sideListBarCard container-fluid ${this.state.s[26]}`} onClick={()=>{this.PickSensor(26,"P (6)")}}>
         <div class="row cardContentRow">
             <div class="col-8 cardLeftSide" >
                 <div><span class="SensorName"><span class="statusGreen"><i class="fas fa-circle"></i></span>Sensor P 6</span></div>
                 <div><span class="SensorID">id: 434567865</span></div>
             </div>
             <div class="col-4 cardRightSide">
             <div>26 bar</div>
             </div>
         </div>
     </div>

     <div class={`sideListBarCard container-fluid ${this.state.s[27]}`} onClick={()=>{this.PickSensor(27,"P (7)")}}>
         <div class="row cardContentRow">
             <div class="col-8 cardLeftSide" >
                 <div><span class="SensorName"><span class="statusGreen"><i class="fas fa-circle"></i></span>Sensor P 7</span></div>
                 <div><span class="SensorID">id: 434567173</span></div>
             </div>
             <div class="col-4 cardRightSide">
             <div>25 bar</div>
             </div>
         </div>
     </div>


 
 
 
 </div>
 </div>
 
 </div>
            </>})
    }
    else if (this.props.state.sensState ==4) {
        this.setState({content:<>
            <div className='aasafa'>
                <div className='fdffdf'>
                <img width="200px" src='https://www.morafoods.com/wp-content/uploads/2017/09/electricity-icon-png-4545.png'></img>
                    <h3>No Power Sensor Found</h3>
        
                </div>
            </div>
        </>})
    }
    else if (this.props.state.sensState ==5) {
        this.setState({content:<>
            <div className='aasafa'>
                <div className='fdffdf'>
                <img width="200px" src='https://cdn-icons-png.flaticon.com/512/95/95950.png'></img>
                    <h3>No CO2 Sensor Found</h3>
        
                </div>
            </div>
        </>})
    }
    else if (this.props.state.sensState ==6) {
        this.setState({content:<>
            <div className='aasafa'>
                <div className='fdffdf'>
                <img width="200px" src='http://cdn.onlinewebfonts.com/svg/img_149065.png'></img>
                    <h3>No Occupancy Sensor Found</h3>
        
                </div>
            </div>
        </>})
    }
    else if (this.props.state.sensState ==7) {
        this.setState({content:<>
            <div class="sideListBarExternal">
 
 <div class="container-fluid"> 
     <div class="row">
 
         <div class="col-10">
             <div class="sideListBarTitle">Pressure Sensors</div>
         </div>
         
         <div class="col-2 backBtn"><div>
             {/* <i class="fas fa-arrow-left"></i> */}
         </div></div>
     </div>
 </div>
 
 <div class="sideListBarInternalCont">
     <input type="text" class="form-control SearchBox" id="dummyBox" placeholder="Search" name="searchBox" disabled="true" />
 <div class="sensorsCardCont">
 <div class={`sideListBarCard container-fluid ${this.state.s[28]}`} onClick={()=>{this.PickSensor(28,"B (1)")}}>
         <div class="row cardContentRow">
             <div class="col-8 cardLeftSide" >
                 <div><span class="SensorName"><span class="statusGreen"><i class="fas fa-circle"></i></span>Bus Station 1</span></div>
                 <div><span class="SensorID">id: 45647345378</span></div>
             </div>
             <div class="col-4 cardRightSide">
             <div>available</div>
             </div>
         </div>
     </div>
 
     <div class={`sideListBarCard container-fluid ${this.state.s[29]}`} onClick={()=>{this.PickSensor(29,"B (2)")}}>
         <div class="row cardContentRow">
             <div class="col-8 cardLeftSide" >
                 <div><span class="SensorName"><span class="statusGreen"><i class="fas fa-circle"></i></span>Bus Station 2</span></div>
                 <div><span class="SensorID">id: 45345383456</span></div>
             </div>
             <div class="col-4 cardRightSide">
             <div>available</div>
             </div>
         </div>
     </div>
 
     <div class={`sideListBarCard container-fluid ${this.state.s[30]}`} onClick={()=>{this.PickSensor(30,"B (3)")}}>
         <div class="row cardContentRow">
             <div class="col-8 cardLeftSide" >
                 <div><span class="SensorName"><span class="statusGreen"><i class="fas fa-circle"></i></span>Bus Station 3</span></div>
                 <div><span class="SensorID">id: 4386454313</span></div>
             </div>
             <div class="col-4 cardRightSide">
             <div>available</div>
             </div>
         </div>
     </div>

     <div class={`sideListBarCard container-fluid ${this.state.s[31]}`} onClick={()=>{this.PickSensor(31,"B (4)")}}>
         <div class="row cardContentRow">
             <div class="col-8 cardLeftSide" >
                 <div><span class="SensorName"><span class="statusGreen"><i class="fas fa-circle"></i></span>Bus Station 4</span></div>
                 <div><span class="SensorID">id: 785434883</span></div>
             </div>
             <div class="col-4 cardRightSide">
             <div>available</div>
             </div>
         </div>
     </div>

     <div class={`sideListBarCard container-fluid ${this.state.s[32]}`} onClick={()=>{this.PickSensor(32,"B (5)")}}>
         <div class="row cardContentRow">
             <div class="col-8 cardLeftSide" >
                 <div><span class="SensorName"><span class="statusGreen"><i class="fas fa-circle"></i></span>Bus Station 5</span></div>
                 <div><span class="SensorID">id: 5464678645</span></div>
             </div>
             <div class="col-4 cardRightSide">
             <div>available</div>
             </div>
         </div>
     </div>

     <div class={`sideListBarCard container-fluid ${this.state.s[33]}`} onClick={()=>{this.PickSensor(33,"B (6)")}}>
         <div class="row cardContentRow">
             <div class="col-8 cardLeftSide" >
                 <div><span class="SensorName"><span class="statusGreen"><i class="fas fa-circle"></i></span>Bus Station 6</span></div>
                 <div><span class="SensorID">id: 434567865</span></div>
             </div>
             <div class="col-4 cardRightSide">
             <div>available</div>
             </div>
         </div>
     </div>

     <div class={`sideListBarCard container-fluid ${this.state.s[34]}`} onClick={()=>{this.PickSensor(34,"B (7)")}}>
         <div class="row cardContentRow">
             <div class="col-8 cardLeftSide" >
                 <div><span class="SensorName"><span class="statusGreen"><i class="fas fa-circle"></i></span>Bus Station 7</span></div>
                 <div><span class="SensorID">id: 434567173</span></div>
             </div>
             <div class="col-4 cardRightSide">
             <div>available</div>
             </div>
         </div>
     </div>


 
 
 
 </div>
 </div>
 
 </div>
            </>})
    }
    else if (this.props.state.sensState ==8) {
        this.setState({content:<>
            <div className='aasafa'>
                <div className='fdffdf'>
                <img width="200px" src='https://cdn-icons-png.flaticon.com/512/3712/3712541.png'></img>
                    <h3>Showing All Installed Sensors</h3>
        
                </div>
            </div>
        </>})
    }
    else {
        this.setState({content:<>
            <div className='aasafa'>
                <div className='fdffdf'>
                <img width="200px" src='https://cdn-icons-png.flaticon.com/512/3712/3712541.png'></img>
                    <h3>Select Sensors Group</h3>
        
                </div>
            </div>
        </>})
    }
}

  render() {
    return (
      <>

{this.state.content} 

     
      </>
    );
  }

  
}
const mapStateToProps = (state) => ({state})

export default connect(mapStateToProps , {setHistoryObj, setMatchObj,setSelectedSens})(SensonrsListBar_comp);





// //------------------------------------
// //-------------------------------------------------
// import './Header_comp.css';
// //import ToDoElement_comp from '../ToDoElementt_comp/ToDoElement_comp';
// import ReactDOM from "react-dom";
// import React from "react";

// export default class Header_comp extends React.Component {
//   state = {

//   };
//   // constructor(props)
//   // {
   
//   //   super(props);
//   //   this.state={
//   //     complete : ""
//   //   };
//   // }


//   render() {
//     return (
//       <>

//       </>
//     );
//   }

  
// }