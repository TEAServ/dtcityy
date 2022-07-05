
//------------------------------------
//-------------------------------------------------
import './SensonrsDetailsBar_comp.css';
//import ToDoElement_comp from '../ToDoElementt_comp/ToDoElement_comp';
import ReactDOM from "react-dom";
import React from "react";


import Login_comp from '../Login_comp/Login_comp';
import Task_comp from '../Task_comp/Task_comp';
import {Helmet} from "react-helmet";
import { connect } from 'react-redux';
import { setHistoryObj, setMatchObj } from '../store/actions';
import { centerData } from '../Data';
import GaugeChart from 'react-gauge-chart'
 class SensonrsDetailsBar_comp extends React.Component {
  state = {
    content:<>
    <div className='aasafa'>
        <div className='fdffdf'>
        <img width="200px" src='https://cdn-icons-png.flaticon.com/512/3712/3712541.png'></img>
            <h3>Select Sensors Group</h3>

        </div>
    </div>
</>,
sensStatee:"",
hdClass:["hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd"],

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
  //  console.log(this.props);
   // this.RecordHistory();

  }
  componentDidUpdate()
  {
   // this.ReturnRendered();
   if (this.state.sensStatee != this.props.state.selSens) {
    this.ReturnRendered();
    this.setState({sensStatee:this.props.state.selSens})
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
GoTo3D()
{
  //console.log("-------------------------");
  //console.log(window.unityInstance);
  //console.log(this.props.state.selSen);
  window.unityInstance.SendMessage('AppManager','MoveCameraTo',this.props.state.selSens)

}
  ReturnRendered()
  {
      if (this.props.state.selSens == "T (1)") {
        var ss = ["hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd"]
          ss[0] = "";
        this.setState({
              hdClass:ss
          });
          
      }else if (this.props.state.selSens == "T (2)") {
        var ss = ["hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd"]
          ss[1] = "";
        this.setState({
              hdClass:ss
          });
          
      }
      else if (this.props.state.selSens == "T (3)") {
        var ss = ["hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd"]
          ss[2] = "";
        this.setState({
              hdClass:ss
          });
          
      }
      else if (this.props.state.selSens == "T (4)") {
        var ss = ["hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd"]
          ss[3] = "";
        this.setState({
              hdClass:ss
          });
          
      }
      else if (this.props.state.selSens == "T (5)") {
        var ss = ["hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd"]
          ss[4] = "";
        this.setState({
              hdClass:ss
          });
          
      }
      else if (this.props.state.selSens == "T (6)") {
        var ss = ["hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd"]
          ss[5] = "";
        this.setState({
              hdClass:ss
          });
          
      }
      else if (this.props.state.selSens == "T (7)") {
        var ss = ["hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd"]
          ss[6] = "";
        this.setState({
              hdClass:ss
          });
          
      }
      else if (this.props.state.selSens == "H (1)") {
        var ss = ["hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd"]
          ss[7] = "";
        this.setState({
              hdClass:ss
          });
          
      }
      else if (this.props.state.selSens == "H (2)") {
        var ss = ["hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd"]
          ss[8] = "";
        this.setState({
              hdClass:ss
          });
          
      }
      else if (this.props.state.selSens == "H (3)") {
        var ss = ["hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd"]
          ss[9] = "";
        this.setState({
              hdClass:ss
          });
          
      }
      else if (this.props.state.selSens == "H (4)") {
        var ss = ["hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd"]
          ss[10] = "";
        this.setState({
              hdClass:ss
          });
          
      }
      else if (this.props.state.selSens == "H (5)") {
        var ss = ["hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd"]
          ss[11] = "";
        this.setState({
              hdClass:ss
          });
          
      }
      else if (this.props.state.selSens == "H (6)") {
        var ss = ["hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd"]
          ss[12] = "";
        this.setState({
              hdClass:ss
          });
          
      }
      else if (this.props.state.selSens == "H (7)") {
        var ss = ["hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd"]
          ss[13] = "";
        this.setState({
              hdClass:ss
          });
          
      }
      else if (this.props.state.selSens == "P (1)") {
        var ss = ["hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd"]
          ss[14] = "";
        this.setState({
              hdClass:ss
          });
          
      }
      else if (this.props.state.selSens == "P (2)") {
        var ss = ["hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd"]
          ss[15] = "";
        this.setState({
              hdClass:ss
          });
          
      }
      else if (this.props.state.selSens == "P (3)") {
        var ss = ["hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd"]
          ss[16] = "";
        this.setState({
              hdClass:ss
          });
          
      }
      else if (this.props.state.selSens == "P (4)") {
        var ss = ["hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd"]
          ss[17] = "";
        this.setState({
              hdClass:ss
          });
          
      }
      else if (this.props.state.selSens == "P (5)") {
        var ss = ["hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd"]
          ss[18] = "";
        this.setState({
              hdClass:ss
          });
          
      }
      else if (this.props.state.selSens == "P (6)") {
        var ss = ["hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd"]
          ss[19] = "";
        this.setState({
              hdClass:ss
          });
          
      }
      else if (this.props.state.selSens == "P (7)") {
        var ss = ["hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd"]
          ss[20] = "";
        this.setState({
              hdClass:ss
          });
          
      }
      else if (this.props.state.selSens == "CCTV1") {
        var ss = ["hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd"]
          ss[21] = "";
        this.setState({
              hdClass:ss
          });
          
      }
      else if (this.props.state.selSens == "CCTV2") {
        var ss = ["hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd"]
          ss[22] = "";
        this.setState({
              hdClass:ss
          });
          
      }
      else if (this.props.state.selSens == "CCTV3") {
        var ss = ["hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd"]
          ss[23] = "";
        this.setState({
              hdClass:ss
          });
          
      }
      else if (this.props.state.selSens == "CCTV4") {
        var ss = ["hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd"]
          ss[24] = "";
        this.setState({
              hdClass:ss
          });
          
      }
      else if (this.props.state.selSens == "CCTV5") {
        var ss = ["hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd"]
          ss[25] = "";
        this.setState({
              hdClass:ss
          });
          
      }
      else if (this.props.state.selSens == "CCTV6") {
        var ss = ["hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd"]
          ss[26] = "";
        this.setState({
              hdClass:ss
          });
          
      }
      else if (this.props.state.selSens == "CCTV7") {
        var ss = ["hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd"]
          ss[27] = "";
        this.setState({
              hdClass:ss
          });
          
      }
      else if (this.props.state.selSens == "B (1)") {
        var ss = ["hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd"]
          ss[28] = "";
        this.setState({
              hdClass:ss
          });
          
      }
      else if (this.props.state.selSens == "B (2)") {
        var ss = ["hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd"]
          ss[29] = "";
        this.setState({
              hdClass:ss
          });
          
      }
      else if (this.props.state.selSens == "B (3)") {
        var ss = ["hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd"]
          ss[30] = "";
        this.setState({
              hdClass:ss
          });
          
      }
      else if (this.props.state.selSens == "B (4)") {
        var ss = ["hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd"]
          ss[31] = "";
        this.setState({
              hdClass:ss
          });
          
      }
      else if (this.props.state.selSens == "B (5)") {
        var ss = ["hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd"]
          ss[32] = "";
        this.setState({
              hdClass:ss
          });
          
      }
      else if (this.props.state.selSens == "B (6)") {
        var ss = ["hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd"]
          ss[33] = "";
        this.setState({
              hdClass:ss
          });
          
      }
      else if (this.props.state.selSens == "B (7)") {
        var ss = ["hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd"]
          ss[34] = "";
        this.setState({
              hdClass:ss
          });
          
      }
      else {
        var ss = ["hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd"]
      this.setState({
            hdClass:ss
        });
      }

  }
  closeList()
  {
    var ss = ["hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd","hd"]
    this.setState({
          hdClass:ss
      });
  }
  render() {
    return (<>



<div className={`${this.state.hdClass[0]}`}>
    <div class="container-fluid">
                     <div class="row">
                         <div class="col-10"><div> <span class="statusGreen"><i class="fas fa-circle"></i></span><span class="rightSideSensorName">Sensor T 1</span><span onClick={()=>{this.GoTo3D()}}><i class="fas fa-eye goto3d" ></i></span> </div> <div class="idTag">id: 46546546</div></div>
                         <div class="col-2 closeRightCont"><span onClick={()=>{this.closeList()}}><i class="fa-solid fa-circle-xmark closeRight"></i></span></div>
                     </div>
                 </div>
                 <div class="LeftBarCont">
             
                     
                     {/* <canvas id="foo"></canvas> */}
                     <GaugeChart id="gauge-chart3" nrOfLevels={3} colors={["#00FF00", "#FFC371","#FF5F6D"]} arcWidth={0.2} arcPadding={0.03} percent={0.31} textColor={"#000000"} formatTextValue={v=>v + "°C"}/>
                     <div>Average Temperature</div>
                     <div class="seperatorHorizontal"></div>
                     <div>Temperature [°C]</div>
                     <div id="chartContainer0"></div>
                     <div class="seperatorHorizontal"></div>
                     <div>Asset Management Data</div>
                     
                     <table class="table table-hover table-bordered">
                         <thead class="thead-dark">
                           <tr>
                             <th>Name</th>
                             <th>Department</th>
                             <th>Contact Mail</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr>
                             <td>John</td>
                             <td>Maintainance</td>
                             <td>john@e.com</td>
                           </tr>
                           <tr>
                             <td>Mary</td>
                             <td>Contractor</td>
                             <td>mary@e.com</td>
                           </tr>
             
                         </tbody>
                     </table>
                 </div>
             
</div>
<div className={`${this.state.hdClass[1]}`}>
    <div class="container-fluid">
                     <div class="row">
                         <div class="col-10"><div> <span class="statusRed"><i class="fas fa-circle"></i></span><span class="rightSideSensorName">Sensor T 2</span><span onClick={()=>{this.GoTo3D()}}><i class="fas fa-eye goto3d" ></i></span> </div> <div class="idTag">id: 46546546</div></div>
                         <div class="col-2 closeRightCont"><span onClick={()=>{this.closeList()}}><i class="fa-solid fa-circle-xmark closeRight"></i></span></div>
                     </div>
                 </div>
                 <div class="LeftBarCont">
             
                     
                     {/* <canvas id="foo"></canvas> */}
                     <GaugeChart id="gauge-chart3" nrOfLevels={3} colors={["#00FF00", "#FFC371","#FF5F6D"]} arcWidth={0.2} arcPadding={0.03} percent={0.4} textColor={"#000000"} formatTextValue={v=>v + "°C"}/>
                     <div>Average Temperature</div>
                     <div class="seperatorHorizontal"></div>
                     <div>Temperature [°C]</div>
                     <div id="chartContainer1"></div>
                     <div class="seperatorHorizontal"></div>
                     <div>Asset Management Data</div>
                     
                     <table class="table table-hover table-bordered">
                         <thead class="thead-dark">
                           <tr>
                             <th>Name</th>
                             <th>Department</th>
                             <th>Contact Mail</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr>
                             <td>John</td>
                             <td>Maintainance</td>
                             <td>john@e.com</td>
                           </tr>
                           <tr>
                             <td>Mary</td>
                             <td>Contractor</td>
                             <td>mary@e.com</td>
                           </tr>
             
                         </tbody>
                     </table>
                 </div>
             
</div>
<div className={`${this.state.hdClass[2]}`}>
    <div class="container-fluid">
                     <div class="row">
                         <div class="col-10"><div> <span class="statusGreen"><i class="fas fa-circle"></i></span><span class="rightSideSensorName">Sensor T 3</span><span onClick={()=>{this.GoTo3D()}}><i class="fas fa-eye goto3d" ></i></span> </div> <div class="idTag">id: 46546546</div></div>
                         <div class="col-2 closeRightCont"><span onClick={()=>{this.closeList()}}><i class="fa-solid fa-circle-xmark closeRight"></i></span></div>
                     </div>
                 </div>
                 <div class="LeftBarCont">
             
                     
                     {/* <canvas id="foo"></canvas> */}
                     <GaugeChart id="gauge-chart3" nrOfLevels={3} colors={["#00FF00", "#FFC371","#FF5F6D"]} arcWidth={0.2} arcPadding={0.03} percent={0.28} textColor={"#000000"} formatTextValue={v=>v + "°C"}/>
                     <div>Average Temperature</div>
                     <div class="seperatorHorizontal"></div>
                     <div>Temperature [°C]</div>
                     <div id="chartContainer2"></div>
                     <div class="seperatorHorizontal"></div>
                     <div>Asset Management Data</div>
                     
                     <table class="table table-hover table-bordered">
                         <thead class="thead-dark">
                           <tr>
                             <th>Name</th>
                             <th>Department</th>
                             <th>Contact Mail</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr>
                             <td>John</td>
                             <td>Maintainance</td>
                             <td>john@e.com</td>
                           </tr>
                           <tr>
                             <td>Mary</td>
                             <td>Contractor</td>
                             <td>mary@e.com</td>
                           </tr>
             
                         </tbody>
                     </table>
                 </div>
             
</div>
<div className={`${this.state.hdClass[3]}`}>
    <div class="container-fluid">
                     <div class="row">
                         <div class="col-10"><div> <span class="statusGreen"><i class="fas fa-circle"></i></span><span class="rightSideSensorName">Sensor T 4</span><span onClick={()=>{this.GoTo3D()}}><i class="fas fa-eye goto3d" ></i></span> </div> <div class="idTag">id: 46546546</div></div>
                         <div class="col-2 closeRightCont"><span onClick={()=>{this.closeList()}}><i class="fa-solid fa-circle-xmark closeRight"></i></span></div>
                     </div>
                 </div>
                 <div class="LeftBarCont">
             
                     
                     {/* <canvas id="foo"></canvas> */}
                     <GaugeChart id="gauge-chart3" nrOfLevels={3} colors={["#00FF00", "#FFC371","#FF5F6D"]} arcWidth={0.2} arcPadding={0.03} percent={0.3} textColor={"#000000"} formatTextValue={v=>v + "°C"}/>
                     <div>Average Temperature</div>
                     <div class="seperatorHorizontal"></div>
                     <div>Temperature [°C]</div>
                     <div id="chartContainer3"></div>
                     <div class="seperatorHorizontal"></div>
                     <div>Asset Management Data</div>
                     
                     <table class="table table-hover table-bordered">
                         <thead class="thead-dark">
                           <tr>
                             <th>Name</th>
                             <th>Department</th>
                             <th>Contact Mail</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr>
                             <td>John</td>
                             <td>Maintainance</td>
                             <td>john@e.com</td>
                           </tr>
                           <tr>
                             <td>Mary</td>
                             <td>Contractor</td>
                             <td>mary@e.com</td>
                           </tr>
             
                         </tbody>
                     </table>
                 </div>
             
</div>
<div className={`${this.state.hdClass[4]}`}>
    <div class="container-fluid">
                     <div class="row">
                         <div class="col-10"><div> <span class="statusGreen"><i class="fas fa-circle"></i></span><span class="rightSideSensorName">Sensor T 5</span><span onClick={()=>{this.GoTo3D()}}><i class="fas fa-eye goto3d" ></i></span> </div> <div class="idTag">id: 46546546</div></div>
                         <div class="col-2 closeRightCont"><span onClick={()=>{this.closeList()}}><i class="fa-solid fa-circle-xmark closeRight"></i></span></div>
                     </div>
                 </div>
                 <div class="LeftBarCont">
             
                     
                     {/* <canvas id="foo"></canvas> */}
                     <GaugeChart id="gauge-chart3" nrOfLevels={3} colors={["#00FF00", "#FFC371","#FF5F6D"]} arcWidth={0.2} arcPadding={0.03} percent={0.31} textColor={"#000000"} formatTextValue={v=>v + "°C"}/>
                     <div>Average Temperature</div>
                     <div class="seperatorHorizontal"></div>
                     <div>Temperature [°C]</div>
                     <div id="chartContainer4"></div>
                     <div class="seperatorHorizontal"></div>
                     <div>Asset Management Data</div>
                     
                     <table class="table table-hover table-bordered">
                         <thead class="thead-dark">
                           <tr>
                             <th>Name</th>
                             <th>Department</th>
                             <th>Contact Mail</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr>
                             <td>John</td>
                             <td>Maintainance</td>
                             <td>john@e.com</td>
                           </tr>
                           <tr>
                             <td>Mary</td>
                             <td>Contractor</td>
                             <td>mary@e.com</td>
                           </tr>
             
                         </tbody>
                     </table>
                 </div>
             
</div>
<div className={`${this.state.hdClass[5]}`}>
    <div class="container-fluid">
                     <div class="row">
                         <div class="col-10"><div> <span class="statusGreen"><i class="fas fa-circle"></i></span><span class="rightSideSensorName">Sensor T 6</span><span onClick={()=>{this.GoTo3D()}}><i class="fas fa-eye goto3d" ></i></span> </div> <div class="idTag">id: 46546546</div></div>
                         <div class="col-2 closeRightCont"><span onClick={()=>{this.closeList()}}><i class="fa-solid fa-circle-xmark closeRight"></i></span></div>
                     </div>
                 </div>
                 <div class="LeftBarCont">
             
                     
                     {/* <canvas id="foo"></canvas> */}
                     <GaugeChart id="gauge-chart3" nrOfLevels={3} colors={["#00FF00", "#FFC371","#FF5F6D"]} arcWidth={0.2} arcPadding={0.03} percent={0.32} textColor={"#000000"} formatTextValue={v=>v + "°C"}/>
                     <div>Average Temperature</div>
                     <div class="seperatorHorizontal"></div>
                     <div>Temperature [°C]</div>
                     <div id="chartContainer5"></div>
                     <div class="seperatorHorizontal"></div>
                     <div>Asset Management Data</div>
                     
                     <table class="table table-hover table-bordered">
                         <thead class="thead-dark">
                           <tr>
                             <th>Name</th>
                             <th>Department</th>
                             <th>Contact Mail</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr>
                             <td>John</td>
                             <td>Maintainance</td>
                             <td>john@e.com</td>
                           </tr>
                           <tr>
                             <td>Mary</td>
                             <td>Contractor</td>
                             <td>mary@e.com</td>
                           </tr>
             
                         </tbody>
                     </table>
                 </div>
             
</div>
<div className={`${this.state.hdClass[6]}`}>
    <div class="container-fluid">
                     <div class="row">
                         <div class="col-10"><div> <span class="statusGreen"><i class="fas fa-circle"></i></span><span class="rightSideSensorName">Sensor T 7</span><span onClick={()=>{this.GoTo3D()}}><i class="fas fa-eye goto3d" ></i></span> </div> <div class="idTag">id: 46546546</div></div>
                         <div class="col-2 closeRightCont"><span onClick={()=>{this.closeList()}}><i class="fa-solid fa-circle-xmark closeRight"></i></span></div>
                     </div>
                 </div>
                 <div class="LeftBarCont">
             
                     
                     {/* <canvas id="foo"></canvas> */}
                     <GaugeChart id="gauge-chart3" nrOfLevels={3} colors={["#00FF00", "#FFC371","#FF5F6D"]} arcWidth={0.2} arcPadding={0.03} percent={0.31} textColor={"#000000"} formatTextValue={v=>v + "°C"}/>
                     <div>Average Temperature</div>
                     <div class="seperatorHorizontal"></div>
                     <div>Temperature [°C]</div>
                     <div id="chartContainer6"></div>
                     <div class="seperatorHorizontal"></div>
                     <div>Asset Management Data</div>
                     
                     <table class="table table-hover table-bordered">
                         <thead class="thead-dark">
                           <tr>
                             <th>Name</th>
                             <th>Department</th>
                             <th>Contact Mail</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr>
                             <td>John</td>
                             <td>Maintainance</td>
                             <td>john@e.com</td>
                           </tr>
                           <tr>
                             <td>Mary</td>
                             <td>Contractor</td>
                             <td>mary@e.com</td>
                           </tr>
             
                         </tbody>
                     </table>
                 </div>
             
</div>




<div className={`${this.state.hdClass[7]}`}>
    <div class="container-fluid">
                     <div class="row">
                         <div class="col-10"><div> <span class="statusGreen"><i class="fas fa-circle"></i></span><span class="rightSideSensorName">Sensor H 1</span><span onClick={()=>{this.GoTo3D()}}><i class="fas fa-eye goto3d" ></i></span> </div> <div class="idTag">id: 46546546</div></div>
                         <div class="col-2 closeRightCont"><span onClick={()=>{this.closeList()}}><i class="fa-solid fa-circle-xmark closeRight"></i></span></div>
                     </div>
                 </div>
                 <div class="LeftBarCont">
             
                     
                     {/* <canvas id="foo"></canvas> */}
                     <GaugeChart id="gauge-chart3" nrOfLevels={3} colors={["#00FF00", "#FFC371","#FF5F6D"]} arcWidth={0.2} arcPadding={0.03} percent={0.55} textColor={"#000000"} formatTextValue={v=>v + "%"}/>
                     <div>Average Humidity Ration</div>
                     <div class="seperatorHorizontal"></div>
                     <div>Humidity Ration [%]</div>
                     <div id="chartContainer7"></div>
                     <div class="seperatorHorizontal"></div>
                     <div>Asset Management Data</div>
                     
                     <table class="table table-hover table-bordered">
                         <thead class="thead-dark">
                           <tr>
                             <th>Name</th>
                             <th>Department</th>
                             <th>Contact Mail</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr>
                             <td>John</td>
                             <td>Maintainance</td>
                             <td>john@e.com</td>
                           </tr>
                           <tr>
                             <td>Mary</td>
                             <td>Contractor</td>
                             <td>mary@e.com</td>
                           </tr>
             
                         </tbody>
                     </table>
                 </div>
             
</div>
<div className={`${this.state.hdClass[8]}`}>
    <div class="container-fluid">
                     <div class="row">
                         <div class="col-10"><div> <span class="statusGreen"><i class="fas fa-circle"></i></span><span class="rightSideSensorName">Sensor H 2</span><span onClick={()=>{this.GoTo3D()}}><i class="fas fa-eye goto3d" ></i></span> </div> <div class="idTag">id: 46546546</div></div>
                         <div class="col-2 closeRightCont"><span onClick={()=>{this.closeList()}}><i class="fa-solid fa-circle-xmark closeRight"></i></span></div>
                     </div>
                 </div>
                 <div class="LeftBarCont">
             
                     
                     {/* <canvas id="foo"></canvas> */}
                     <GaugeChart id="gauge-chart3" nrOfLevels={3} colors={["#00FF00", "#FFC371","#FF5F6D"]} arcWidth={0.2} arcPadding={0.03} percent={0.52} textColor={"#000000"} formatTextValue={v=>v + "%"}/>
                     <div>Average Humidity Ration</div>
                     <div class="seperatorHorizontal"></div>
                     <div>Humidity Ration [%]</div>
                     <div id="chartContainer8"></div>
                     <div class="seperatorHorizontal"></div>
                     <div>Asset Management Data</div>
                     
                     <table class="table table-hover table-bordered">
                         <thead class="thead-dark">
                           <tr>
                             <th>Name</th>
                             <th>Department</th>
                             <th>Contact Mail</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr>
                             <td>John</td>
                             <td>Maintainance</td>
                             <td>john@e.com</td>
                           </tr>
                           <tr>
                             <td>Mary</td>
                             <td>Contractor</td>
                             <td>mary@e.com</td>
                           </tr>
             
                         </tbody>
                     </table>
                 </div>
             
</div>
<div className={`${this.state.hdClass[9]}`}>
    <div class="container-fluid">
                     <div class="row">
                         <div class="col-10"><div> <span class="statusGreen"><i class="fas fa-circle"></i></span><span class="rightSideSensorName">Sensor H 3</span><span onClick={()=>{this.GoTo3D()}}><i class="fas fa-eye goto3d" ></i></span> </div> <div class="idTag">id: 46546546</div></div>
                         <div class="col-2 closeRightCont"><span onClick={()=>{this.closeList()}}><i class="fa-solid fa-circle-xmark closeRight"></i></span></div>
                     </div>
                 </div>
                 <div class="LeftBarCont">
             
                     
                     {/* <canvas id="foo"></canvas> */}
                     <GaugeChart id="gauge-chart3" nrOfLevels={3} colors={["#00FF00", "#FFC371","#FF5F6D"]} arcWidth={0.2} arcPadding={0.03} percent={0.5} textColor={"#000000"} formatTextValue={v=>v + "%"}/>
                     <div>Average Humidity Ration</div>
                     <div class="seperatorHorizontal"></div>
                     <div>Humidity Ration [%]</div>
                     <div id="chartContainer9"></div>
                     <div class="seperatorHorizontal"></div>
                     <div>Asset Management Data</div>
                     
                     <table class="table table-hover table-bordered">
                         <thead class="thead-dark">
                           <tr>
                             <th>Name</th>
                             <th>Department</th>
                             <th>Contact Mail</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr>
                             <td>John</td>
                             <td>Maintainance</td>
                             <td>john@e.com</td>
                           </tr>
                           <tr>
                             <td>Mary</td>
                             <td>Contractor</td>
                             <td>mary@e.com</td>
                           </tr>
             
                         </tbody>
                     </table>
                 </div>
             
</div>
<div className={`${this.state.hdClass[10]}`}>
    <div class="container-fluid">
                     <div class="row">
                         <div class="col-10"><div> <span class="statusGreen"><i class="fas fa-circle"></i></span><span class="rightSideSensorName">Sensor H 4</span><span onClick={()=>{this.GoTo3D()}}><i class="fas fa-eye goto3d" ></i></span> </div> <div class="idTag">id: 46546546</div></div>
                         <div class="col-2 closeRightCont"><span onClick={()=>{this.closeList()}}><i class="fa-solid fa-circle-xmark closeRight"></i></span></div>
                     </div>
                 </div>
                 <div class="LeftBarCont">
             
                     
                     {/* <canvas id="foo"></canvas> */}
                     <GaugeChart id="gauge-chart3" nrOfLevels={3} colors={["#00FF00", "#FFC371","#FF5F6D"]} arcWidth={0.2} arcPadding={0.03} percent={0.49} textColor={"#000000"} formatTextValue={v=>v + "%"}/>
                     <div>Average Humidity Ration</div>
                     <div class="seperatorHorizontal"></div>
                     <div>Humidity Ration [%]</div>
                     <div id="chartContainer10"></div>
                     <div class="seperatorHorizontal"></div>
                     <div>Asset Management Data</div>
                     
                     <table class="table table-hover table-bordered">
                         <thead class="thead-dark">
                           <tr>
                             <th>Name</th>
                             <th>Department</th>
                             <th>Contact Mail</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr>
                             <td>John</td>
                             <td>Maintainance</td>
                             <td>john@e.com</td>
                           </tr>
                           <tr>
                             <td>Mary</td>
                             <td>Contractor</td>
                             <td>mary@e.com</td>
                           </tr>
             
                         </tbody>
                     </table>
                 </div>
             
</div>
<div className={`${this.state.hdClass[11]}`}>
    <div class="container-fluid">
                     <div class="row">
                         <div class="col-10"><div> <span class="statusGreen"><i class="fas fa-circle"></i></span><span class="rightSideSensorName">Sensor H 5</span><span onClick={()=>{this.GoTo3D()}}><i class="fas fa-eye goto3d" ></i></span> </div> <div class="idTag">id: 46546546</div></div>
                         <div class="col-2 closeRightCont"><span onClick={()=>{this.closeList()}}><i class="fa-solid fa-circle-xmark closeRight"></i></span></div>
                     </div>
                 </div>
                 <div class="LeftBarCont">
             
                     
                     {/* <canvas id="foo"></canvas> */}
                     <GaugeChart id="gauge-chart3" nrOfLevels={3} colors={["#00FF00", "#FFC371","#FF5F6D"]} arcWidth={0.2} arcPadding={0.03} percent={0.51} textColor={"#000000"} formatTextValue={v=>v + "%"}/>
                     <div>Average Humidity Ration</div>
                     <div class="seperatorHorizontal"></div>
                     <div>Humidity Ration [%]</div>
                     <div id="chartContainer11"></div>
                     <div class="seperatorHorizontal"></div>
                     <div>Asset Management Data</div>
                     
                     <table class="table table-hover table-bordered">
                         <thead class="thead-dark">
                           <tr>
                             <th>Name</th>
                             <th>Department</th>
                             <th>Contact Mail</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr>
                             <td>John</td>
                             <td>Maintainance</td>
                             <td>john@e.com</td>
                           </tr>
                           <tr>
                             <td>Mary</td>
                             <td>Contractor</td>
                             <td>mary@e.com</td>
                           </tr>
             
                         </tbody>
                     </table>
                 </div>
             
</div>
<div className={`${this.state.hdClass[12]}`}>
    <div class="container-fluid">
                     <div class="row">
                         <div class="col-10"><div> <span class="statusGreen"><i class="fas fa-circle"></i></span><span class="rightSideSensorName">Sensor H 6</span><span onClick={()=>{this.GoTo3D()}}><i class="fas fa-eye goto3d" ></i></span> </div> <div class="idTag">id: 46546546</div></div>
                         <div class="col-2 closeRightCont"><span onClick={()=>{this.closeList()}}><i class="fa-solid fa-circle-xmark closeRight"></i></span></div>
                     </div>
                 </div>
                 <div class="LeftBarCont">
             
                     
                     {/* <canvas id="foo"></canvas> */}
                     <GaugeChart id="gauge-chart3" nrOfLevels={3} colors={["#00FF00", "#FFC371","#FF5F6D"]} arcWidth={0.2} arcPadding={0.03} percent={0.54} textColor={"#000000"} formatTextValue={v=>v + "%"}/>
                     <div>Average Humidity Ration</div>
                     <div class="seperatorHorizontal"></div>
                     <div>Humidity Ration [%]</div>
                     <div id="chartContainer12"></div>
                     <div class="seperatorHorizontal"></div>
                     <div>Asset Management Data</div>
                     
                     <table class="table table-hover table-bordered">
                         <thead class="thead-dark">
                           <tr>
                             <th>Name</th>
                             <th>Department</th>
                             <th>Contact Mail</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr>
                             <td>John</td>
                             <td>Maintainance</td>
                             <td>john@e.com</td>
                           </tr>
                           <tr>
                             <td>Mary</td>
                             <td>Contractor</td>
                             <td>mary@e.com</td>
                           </tr>
             
                         </tbody>
                     </table>
                 </div>
             
</div>
<div className={`${this.state.hdClass[13]}`}>
    <div class="container-fluid">
                     <div class="row">
                         <div class="col-10"><div> <span class="statusGreen"><i class="fas fa-circle"></i></span><span class="rightSideSensorName">Sensor H 7</span><span onClick={()=>{this.GoTo3D()}}><i class="fas fa-eye goto3d" ></i></span> </div> <div class="idTag">id: 46546546</div></div>
                         <div class="col-2 closeRightCont"><span onClick={()=>{this.closeList()}}><i class="fa-solid fa-circle-xmark closeRight"></i></span></div>
                     </div>
                 </div>
                 <div class="LeftBarCont">
             
                     
                     {/* <canvas id="foo"></canvas> */}
                     <GaugeChart id="gauge-chart3" nrOfLevels={3} colors={["#00FF00", "#FFC371","#FF5F6D"]} arcWidth={0.2} arcPadding={0.03} percent={0.5} textColor={"#000000"} formatTextValue={v=>v + "%"}/>
                     <div>Average Humidity Ration</div>
                     <div class="seperatorHorizontal"></div>
                     <div>Humidity Ration [%]</div>
                     <div id="chartContainer13"></div>
                     <div class="seperatorHorizontal"></div>
                     <div>Asset Management Data</div>
                     
                     <table class="table table-hover table-bordered">
                         <thead class="thead-dark">
                           <tr>
                             <th>Name</th>
                             <th>Department</th>
                             <th>Contact Mail</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr>
                             <td>John</td>
                             <td>Maintainance</td>
                             <td>john@e.com</td>
                           </tr>
                           <tr>
                             <td>Mary</td>
                             <td>Contractor</td>
                             <td>mary@e.com</td>
                           </tr>
             
                         </tbody>
                     </table>
                 </div>
             
</div>




<div className={`${this.state.hdClass[14]}`}>
    <div class="container-fluid">
                     <div class="row">
                         <div class="col-10"><div> <span class="statusGreen"><i class="fas fa-circle"></i></span><span class="rightSideSensorName">Sensor P 1</span><span onClick={()=>{this.GoTo3D()}}><i class="fas fa-eye goto3d" ></i></span> </div> <div class="idTag">id: 46546546</div></div>
                         <div class="col-2 closeRightCont"><span onClick={()=>{this.closeList()}}><i class="fa-solid fa-circle-xmark closeRight"></i></span></div>
                     </div>
                 </div>
                 <div class="LeftBarCont">
             
                     
                     {/* <canvas id="foo"></canvas> */}
                     <GaugeChart id="gauge-chart3" nrOfLevels={3} colors={["#00FF00", "#FFC371","#FF5F6D"]} arcWidth={0.2} arcPadding={0.03} percent={0.30} textColor={"#000000"} formatTextValue={v=>v + "bar"}/>
                     <div>Average Water Pressure</div>
                     <div class="seperatorHorizontal"></div>
                     <div>Water Pressure [bar]</div>
                     <div id="chartContainer14"></div>
                     <div class="seperatorHorizontal"></div>
                     <div>Asset Management Data</div>
                     
                     <table class="table table-hover table-bordered">
                         <thead class="thead-dark">
                           <tr>
                             <th>Name</th>
                             <th>Department</th>
                             <th>Contact Mail</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr>
                             <td>John</td>
                             <td>Maintainance</td>
                             <td>john@e.com</td>
                           </tr>
                           <tr>
                             <td>Mary</td>
                             <td>Contractor</td>
                             <td>mary@e.com</td>
                           </tr>
             
                         </tbody>
                     </table>
                 </div>
             
</div>
<div className={`${this.state.hdClass[15]}`}>
    <div class="container-fluid">
                     <div class="row">
                         <div class="col-10"><div> <span class="statusGreen"><i class="fas fa-circle"></i></span><span class="rightSideSensorName">Sensor P 2</span><span onClick={()=>{this.GoTo3D()}}><i class="fas fa-eye goto3d" ></i></span> </div> <div class="idTag">id: 46546546</div></div>
                         <div class="col-2 closeRightCont"><span onClick={()=>{this.closeList()}}><i class="fa-solid fa-circle-xmark closeRight"></i></span></div>
                     </div>
                 </div>
                 <div class="LeftBarCont">
             
                     
                     {/* <canvas id="foo"></canvas> */}
                     <GaugeChart id="gauge-chart3" nrOfLevels={3} colors={["#00FF00", "#FFC371","#FF5F6D"]} arcWidth={0.2} arcPadding={0.03} percent={0.29} textColor={"#000000"} formatTextValue={v=>v + "bar"}/>
                     <div>Average Water Pressure</div>
                     <div class="seperatorHorizontal"></div>
                     <div>Water Pressure [bar]</div>
                     <div id="chartContainer15"></div>
                     <div class="seperatorHorizontal"></div>
                     <div>Asset Management Data</div>
                     
                     <table class="table table-hover table-bordered">
                         <thead class="thead-dark">
                           <tr>
                             <th>Name</th>
                             <th>Department</th>
                             <th>Contact Mail</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr>
                             <td>John</td>
                             <td>Maintainance</td>
                             <td>john@e.com</td>
                           </tr>
                           <tr>
                             <td>Mary</td>
                             <td>Contractor</td>
                             <td>mary@e.com</td>
                           </tr>
             
                         </tbody>
                     </table>
                 </div>
             
</div>
<div className={`${this.state.hdClass[16]}`}>
    <div class="container-fluid">
                     <div class="row">
                         <div class="col-10"><div> <span class="statusGreen"><i class="fas fa-circle"></i></span><span class="rightSideSensorName">Sensor P 3</span><span onClick={()=>{this.GoTo3D()}}><i class="fas fa-eye goto3d" ></i></span> </div> <div class="idTag">id: 46546546</div></div>
                         <div class="col-2 closeRightCont"><span onClick={()=>{this.closeList()}}><i class="fa-solid fa-circle-xmark closeRight"></i></span></div>
                     </div>
                 </div>
                 <div class="LeftBarCont">
             
                     
                     {/* <canvas id="foo"></canvas> */}
                     <GaugeChart id="gauge-chart3" nrOfLevels={3} colors={["#00FF00", "#FFC371","#FF5F6D"]} arcWidth={0.2} arcPadding={0.03} percent={0.27} textColor={"#000000"} formatTextValue={v=>v + "bar"}/>
                     <div>Average Water Pressure</div>
                     <div class="seperatorHorizontal"></div>
                     <div>Water Pressure [bar]</div>
                     <div id="chartContainer16"></div>
                     <div class="seperatorHorizontal"></div>
                     <div>Asset Management Data</div>
                     
                     <table class="table table-hover table-bordered">
                         <thead class="thead-dark">
                           <tr>
                             <th>Name</th>
                             <th>Department</th>
                             <th>Contact Mail</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr>
                             <td>John</td>
                             <td>Maintainance</td>
                             <td>john@e.com</td>
                           </tr>
                           <tr>
                             <td>Mary</td>
                             <td>Contractor</td>
                             <td>mary@e.com</td>
                           </tr>
             
                         </tbody>
                     </table>
                 </div>
             
</div>
<div className={`${this.state.hdClass[17]}`}>
    <div class="container-fluid">
                     <div class="row">
                         <div class="col-10"><div> <span class="statusGreen"><i class="fas fa-circle"></i></span><span class="rightSideSensorName">Sensor P 4</span><span onClick={()=>{this.GoTo3D()}}><i class="fas fa-eye goto3d" ></i></span> </div> <div class="idTag">id: 46546546</div></div>
                         <div class="col-2 closeRightCont"><span onClick={()=>{this.closeList()}}><i class="fa-solid fa-circle-xmark closeRight"></i></span></div>
                     </div>
                 </div>
                 <div class="LeftBarCont">
             
                     
                     {/* <canvas id="foo"></canvas> */}
                     <GaugeChart id="gauge-chart3" nrOfLevels={3} colors={["#00FF00", "#FFC371","#FF5F6D"]} arcWidth={0.2} arcPadding={0.03} percent={0.26} textColor={"#000000"} formatTextValue={v=>v + "bar"}/>
                     <div>Average Water Pressure</div>
                     <div class="seperatorHorizontal"></div>
                     <div>Water Pressure [bar]</div>
                     <div id="chartContainer17"></div>
                     <div class="seperatorHorizontal"></div>
                     <div>Asset Management Data</div>
                     
                     <table class="table table-hover table-bordered">
                         <thead class="thead-dark">
                           <tr>
                             <th>Name</th>
                             <th>Department</th>
                             <th>Contact Mail</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr>
                             <td>John</td>
                             <td>Maintainance</td>
                             <td>john@e.com</td>
                           </tr>
                           <tr>
                             <td>Mary</td>
                             <td>Contractor</td>
                             <td>mary@e.com</td>
                           </tr>
             
                         </tbody>
                     </table>
                 </div>
             
</div>
<div className={`${this.state.hdClass[18]}`}>
    <div class="container-fluid">
                     <div class="row">
                         <div class="col-10"><div> <span class="statusGreen"><i class="fas fa-circle"></i></span><span class="rightSideSensorName">Sensor P 5</span><span onClick={()=>{this.GoTo3D()}}><i class="fas fa-eye goto3d" ></i></span> </div> <div class="idTag">id: 46546546</div></div>
                         <div class="col-2 closeRightCont"><span onClick={()=>{this.closeList()}}><i class="fa-solid fa-circle-xmark closeRight"></i></span></div>
                     </div>
                 </div>
                 <div class="LeftBarCont">
             
                     
                     {/* <canvas id="foo"></canvas> */}
                     <GaugeChart id="gauge-chart3" nrOfLevels={3} colors={["#00FF00", "#FFC371","#FF5F6D"]} arcWidth={0.2} arcPadding={0.03} percent={0.27} textColor={"#000000"} formatTextValue={v=>v + "bar"}/>
                     <div>Average Water Pressure</div>
                     <div class="seperatorHorizontal"></div>
                     <div>Water Pressure [bar]</div>
                     <div id="chartContainer18"></div>
                     <div class="seperatorHorizontal"></div>
                     <div>Asset Management Data</div>
                     
                     <table class="table table-hover table-bordered">
                         <thead class="thead-dark">
                           <tr>
                             <th>Name</th>
                             <th>Department</th>
                             <th>Contact Mail</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr>
                             <td>John</td>
                             <td>Maintainance</td>
                             <td>john@e.com</td>
                           </tr>
                           <tr>
                             <td>Mary</td>
                             <td>Contractor</td>
                             <td>mary@e.com</td>
                           </tr>
             
                         </tbody>
                     </table>
                 </div>
             
</div>
<div className={`${this.state.hdClass[19]}`}>
    <div class="container-fluid">
                     <div class="row">
                         <div class="col-10"><div> <span class="statusGreen"><i class="fas fa-circle"></i></span><span class="rightSideSensorName">Sensor P 6</span><span onClick={()=>{this.GoTo3D()}}><i class="fas fa-eye goto3d" ></i></span> </div> <div class="idTag">id: 46546546</div></div>
                         <div class="col-2 closeRightCont"><span onClick={()=>{this.closeList()}}><i class="fa-solid fa-circle-xmark closeRight"></i></span></div>
                     </div>
                 </div>
                 <div class="LeftBarCont">
             
                     
                     {/* <canvas id="foo"></canvas> */}
                     <GaugeChart id="gauge-chart3" nrOfLevels={3} colors={["#00FF00", "#FFC371","#FF5F6D"]} arcWidth={0.2} arcPadding={0.03} percent={0.26} textColor={"#000000"} formatTextValue={v=>v + "bar"}/>
                     <div>Average Water Pressure</div>
                     <div class="seperatorHorizontal"></div>
                     <div>Water Pressure [bar]</div>
                     <div id="chartContainer19"></div>
                     <div class="seperatorHorizontal"></div>
                     <div>Asset Management Data</div>
                     
                     <table class="table table-hover table-bordered">
                         <thead class="thead-dark">
                           <tr>
                             <th>Name</th>
                             <th>Department</th>
                             <th>Contact Mail</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr>
                             <td>John</td>
                             <td>Maintainance</td>
                             <td>john@e.com</td>
                           </tr>
                           <tr>
                             <td>Mary</td>
                             <td>Contractor</td>
                             <td>mary@e.com</td>
                           </tr>
             
                         </tbody>
                     </table>
                 </div>
             
</div>
<div className={`${this.state.hdClass[20]}`}>
    <div class="container-fluid">
                     <div class="row">
                         <div class="col-10"><div> <span class="statusGreen"><i class="fas fa-circle"></i></span><span class="rightSideSensorName">Sensor P 7</span><span onClick={()=>{this.GoTo3D()}}><i class="fas fa-eye goto3d" ></i></span> </div> <div class="idTag">id: 46546546</div></div>
                         <div class="col-2 closeRightCont"><span onClick={()=>{this.closeList()}}><i class="fa-solid fa-circle-xmark closeRight"></i></span></div>
                     </div>
                 </div>
                 <div class="LeftBarCont">
             
                     
                     {/* <canvas id="foo"></canvas> */}
                     <GaugeChart id="gauge-chart3" nrOfLevels={3} colors={["#00FF00", "#FFC371","#FF5F6D"]} arcWidth={0.2} arcPadding={0.03} percent={0.25} textColor={"#000000"} formatTextValue={v=>v + "bar"}/>
                     <div>Average Water Pressure</div>
                     <div class="seperatorHorizontal"></div>
                     <div>Water Pressure [bar]</div>
                     <div id="chartContainer20"></div>
                     <div class="seperatorHorizontal"></div>
                     <div>Asset Management Data</div>
                     
                     <table class="table table-hover table-bordered">
                         <thead class="thead-dark">
                           <tr>
                             <th>Name</th>
                             <th>Department</th>
                             <th>Contact Mail</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr>
                             <td>John</td>
                             <td>Maintainance</td>
                             <td>john@e.com</td>
                           </tr>
                           <tr>
                             <td>Mary</td>
                             <td>Contractor</td>
                             <td>mary@e.com</td>
                           </tr>
             
                         </tbody>
                     </table>
                 </div>
             
</div>



<div className={`${this.state.hdClass[21]}`}>
    <div class="container-fluid">
                     <div class="row">
                         <div class="col-10"><div> <span class="statusGreen"><i class="fas fa-circle"></i></span><span class="rightSideSensorName">Camera 1</span><span onClick={()=>{this.GoTo3D()}}><i class="fas fa-eye goto3d" ></i></span> </div> <div class="idTag">id: 46546546</div></div>
                         <div class="col-2 closeRightCont"><span onClick={()=>{this.closeList()}}><i class="fa-solid fa-circle-xmark closeRight"></i></span></div>
                     </div>
                 </div>
                 <div class="LeftBarCont">
             
                 <div class="seperatorHorizontal"></div>
                 <h3 className='sssssss'>Live</h3>
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <h3 className='sssssss'>History</h3>
                      <div className='rowwww'>
                      <iframe width="162" height="89" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <iframe width="162" height="89" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <iframe width="162" height="89" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <iframe width="162" height="89" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <iframe width="162" height="89" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <iframe width="162" height="89" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <iframe width="162" height="89" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <iframe width="162" height="89" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      </div>
                     <div class="seperatorHorizontal"></div>
                     <div>Asset Management Data</div>
                     
                     <table class="table table-hover table-bordered">
                         <thead class="thead-dark">
                           <tr>
                             <th>Name</th>
                             <th>Department</th>
                             <th>Contact Mail</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr>
                             <td>John</td>
                             <td>Maintainance</td>
                             <td>john@e.com</td>
                           </tr>
                           <tr>
                             <td>Mary</td>
                             <td>Contractor</td>
                             <td>mary@e.com</td>
                           </tr>
                           <tr>
                             <td>Jerry</td>
                             <td>Vendor</td>
                             <td>Jerry@e.com</td>
                           </tr>
                           <tr>
                             <td>Alfrid</td>
                             <td>IT</td>
                             <td>Alfrid@e.com</td>
                           </tr>
             
                         </tbody>
                     </table>
                 </div>
             
</div>
<div className={`${this.state.hdClass[22]}`}>
    <div class="container-fluid">
                     <div class="row">
                         <div class="col-10"><div> <span class="statusGreen"><i class="fas fa-circle"></i></span><span class="rightSideSensorName">Camera 2</span><span onClick={()=>{this.GoTo3D()}}><i class="fas fa-eye goto3d" ></i></span> </div> <div class="idTag">id: 46546546</div></div>
                         <div class="col-2 closeRightCont"><span onClick={()=>{this.closeList()}}><i class="fa-solid fa-circle-xmark closeRight"></i></span></div>
                     </div>
                 </div>
                 <div class="LeftBarCont">
             
                 <div class="seperatorHorizontal"></div>
                 <h3 className='sssssss'>Live</h3>
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <h3 className='sssssss'>History</h3>
                      <div className='rowwww'>
                      <iframe width="112" height="62" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <iframe width="112" height="62" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <iframe width="112" height="62" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <iframe width="112" height="62" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <iframe width="112" height="62" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <iframe width="112" height="62" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <iframe width="112" height="62" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <iframe width="112" height="62" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      </div>
                     <div class="seperatorHorizontal"></div>
                     <div>Asset Management Data</div>
                     
                     <table class="table table-hover table-bordered">
                         <thead class="thead-dark">
                           <tr>
                             <th>Name</th>
                             <th>Department</th>
                             <th>Contact Mail</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr>
                             <td>John</td>
                             <td>Maintainance</td>
                             <td>john@e.com</td>
                           </tr>
                           <tr>
                             <td>Mary</td>
                             <td>Contractor</td>
                             <td>mary@e.com</td>
                           </tr>
                           <tr>
                             <td>Jerry</td>
                             <td>Vendor</td>
                             <td>Jerry@e.com</td>
                           </tr>
                           <tr>
                             <td>Alfrid</td>
                             <td>IT</td>
                             <td>Alfrid@e.com</td>
                           </tr>
             
                         </tbody>
                     </table>
                 </div>
             
</div>
<div className={`${this.state.hdClass[23]}`}>
    <div class="container-fluid">
                     <div class="row">
                         <div class="col-10"><div> <span class="statusGreen"><i class="fas fa-circle"></i></span><span class="rightSideSensorName">Camera 3</span><span onClick={()=>{this.GoTo3D()}}><i class="fas fa-eye goto3d" ></i></span> </div> <div class="idTag">id: 46546546</div></div>
                         <div class="col-2 closeRightCont"><span onClick={()=>{this.closeList()}}><i class="fa-solid fa-circle-xmark closeRight"></i></span></div>
                     </div>
                 </div>
                 <div class="LeftBarCont">
             
                 <div class="seperatorHorizontal"></div>
                 <h3 className='sssssss'>Live</h3>
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <h3 className='sssssss'>History</h3>
                      <div className='rowwww'>
                      <iframe width="112" height="62" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <iframe width="112" height="62" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <iframe width="112" height="62" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <iframe width="112" height="62" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <iframe width="112" height="62" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <iframe width="112" height="62" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <iframe width="112" height="62" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <iframe width="112" height="62" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      </div>
                     <div class="seperatorHorizontal"></div>
                     <div>Asset Management Data</div>
                     
                     <table class="table table-hover table-bordered">
                         <thead class="thead-dark">
                           <tr>
                             <th>Name</th>
                             <th>Department</th>
                             <th>Contact Mail</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr>
                             <td>John</td>
                             <td>Maintainance</td>
                             <td>john@e.com</td>
                           </tr>
                           <tr>
                             <td>Mary</td>
                             <td>Contractor</td>
                             <td>mary@e.com</td>
                           </tr>
                           <tr>
                             <td>Jerry</td>
                             <td>Vendor</td>
                             <td>Jerry@e.com</td>
                           </tr>
                           <tr>
                             <td>Alfrid</td>
                             <td>IT</td>
                             <td>Alfrid@e.com</td>
                           </tr>
             
                         </tbody>
                     </table>
                 </div>
             
</div>
<div className={`${this.state.hdClass[24]}`}>
    <div class="container-fluid">
                     <div class="row">
                         <div class="col-10"><div> <span class="statusGreen"><i class="fas fa-circle"></i></span><span class="rightSideSensorName">Camera 4</span><span onClick={()=>{this.GoTo3D()}}><i class="fas fa-eye goto3d" ></i></span> </div> <div class="idTag">id: 46546546</div></div>
                         <div class="col-2 closeRightCont"><span onClick={()=>{this.closeList()}}><i class="fa-solid fa-circle-xmark closeRight"></i></span></div>
                     </div>
                 </div>
                 <div class="LeftBarCont">
             
                 <div class="seperatorHorizontal"></div>
                 <h3 className='sssssss'>Live</h3>
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <h3 className='sssssss'>History</h3>
                      <div className='rowwww'>
                      <iframe width="112" height="62" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <iframe width="112" height="62" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <iframe width="112" height="62" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <iframe width="112" height="62" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <iframe width="112" height="62" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <iframe width="112" height="62" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <iframe width="112" height="62" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <iframe width="112" height="62" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      </div>
                     <div class="seperatorHorizontal"></div>
                     <div>Asset Management Data</div>
                     
                     <table class="table table-hover table-bordered">
                         <thead class="thead-dark">
                           <tr>
                             <th>Name</th>
                             <th>Department</th>
                             <th>Contact Mail</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr>
                             <td>John</td>
                             <td>Maintainance</td>
                             <td>john@e.com</td>
                           </tr>
                           <tr>
                             <td>Mary</td>
                             <td>Contractor</td>
                             <td>mary@e.com</td>
                           </tr>
                           <tr>
                             <td>Jerry</td>
                             <td>Vendor</td>
                             <td>Jerry@e.com</td>
                           </tr>
                           <tr>
                             <td>Alfrid</td>
                             <td>IT</td>
                             <td>Alfrid@e.com</td>
                           </tr>
             
                         </tbody>
                     </table>
                 </div>
             
</div>
<div className={`${this.state.hdClass[25]}`}>
    <div class="container-fluid">
                     <div class="row">
                         <div class="col-10"><div> <span class="statusGreen"><i class="fas fa-circle"></i></span><span class="rightSideSensorName">Camera 5</span><span onClick={()=>{this.GoTo3D()}}><i class="fas fa-eye goto3d" ></i></span> </div> <div class="idTag">id: 46546546</div></div>
                         <div class="col-2 closeRightCont"><span onClick={()=>{this.closeList()}}><i class="fa-solid fa-circle-xmark closeRight"></i></span></div>
                     </div>
                 </div>
                 <div class="LeftBarCont">
             
                 <div class="seperatorHorizontal"></div>
                 <h3 className='sssssss'>Live</h3>
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <h3 className='sssssss'>History</h3>
                      <div className='rowwww'>
                      <iframe width="112" height="62" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <iframe width="112" height="62" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <iframe width="112" height="62" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <iframe width="112" height="62" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <iframe width="112" height="62" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <iframe width="112" height="62" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <iframe width="112" height="62" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <iframe width="112" height="62" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      </div>
                     <div class="seperatorHorizontal"></div>
                     <div>Asset Management Data</div>
                     
                     <table class="table table-hover table-bordered">
                         <thead class="thead-dark">
                           <tr>
                             <th>Name</th>
                             <th>Department</th>
                             <th>Contact Mail</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr>
                             <td>John</td>
                             <td>Maintainance</td>
                             <td>john@e.com</td>
                           </tr>
                           <tr>
                             <td>Mary</td>
                             <td>Contractor</td>
                             <td>mary@e.com</td>
                           </tr>
                           <tr>
                             <td>Jerry</td>
                             <td>Vendor</td>
                             <td>Jerry@e.com</td>
                           </tr>
                           <tr>
                             <td>Alfrid</td>
                             <td>IT</td>
                             <td>Alfrid@e.com</td>
                           </tr>
             
                         </tbody>
                     </table>
                 </div>
             
</div>
<div className={`${this.state.hdClass[26]}`}>
    <div class="container-fluid">
                     <div class="row">
                         <div class="col-10"><div> <span class="statusGreen"><i class="fas fa-circle"></i></span><span class="rightSideSensorName">Camera 6</span><span onClick={()=>{this.GoTo3D()}}><i class="fas fa-eye goto3d" ></i></span> </div> <div class="idTag">id: 46546546</div></div>
                         <div class="col-2 closeRightCont"><span onClick={()=>{this.closeList()}}><i class="fa-solid fa-circle-xmark closeRight"></i></span></div>
                     </div>
                 </div>
                 <div class="LeftBarCont">
             
                 <div class="seperatorHorizontal"></div>
                 <h3 className='sssssss'>Live</h3>
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <h3 className='sssssss'>History</h3>
                      <div className='rowwww'>
                      <iframe width="112" height="62" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <iframe width="112" height="62" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <iframe width="112" height="62" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <iframe width="112" height="62" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <iframe width="112" height="62" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <iframe width="112" height="62" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <iframe width="112" height="62" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <iframe width="112" height="62" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      </div>
                     <div class="seperatorHorizontal"></div>
                     <div>Asset Management Data</div>
                     
                     <table class="table table-hover table-bordered">
                         <thead class="thead-dark">
                           <tr>
                             <th>Name</th>
                             <th>Department</th>
                             <th>Contact Mail</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr>
                             <td>John</td>
                             <td>Maintainance</td>
                             <td>john@e.com</td>
                           </tr>
                           <tr>
                             <td>Mary</td>
                             <td>Contractor</td>
                             <td>mary@e.com</td>
                           </tr>
                           <tr>
                             <td>Jerry</td>
                             <td>Vendor</td>
                             <td>Jerry@e.com</td>
                           </tr>
                           <tr>
                             <td>Alfrid</td>
                             <td>IT</td>
                             <td>Alfrid@e.com</td>
                           </tr>
             
                         </tbody>
                     </table>
                 </div>
             
</div>
<div className={`${this.state.hdClass[27]}`}>
    <div class="container-fluid">
                     <div class="row">
                         <div class="col-10"><div> <span class="statusGreen"><i class="fas fa-circle"></i></span><span class="rightSideSensorName">Camera 7</span><span onClick={()=>{this.GoTo3D()}}><i class="fas fa-eye goto3d" ></i></span> </div> <div class="idTag">id: 46546546</div></div>
                         <div class="col-2 closeRightCont"><span onClick={()=>{this.closeList()}}><i class="fa-solid fa-circle-xmark closeRight"></i></span></div>
                     </div>
                 </div>
                 <div class="LeftBarCont">
             
                 <div class="seperatorHorizontal"></div>
                 <h3 className='sssssss'>Live</h3>
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <h3 className='sssssss'>History</h3>
                      <div className='rowwww'>
                      <iframe width="112" height="62" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <iframe width="112" height="62" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <iframe width="112" height="62" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <iframe width="112" height="62" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <iframe width="112" height="62" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <iframe width="112" height="62" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <iframe width="112" height="62" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <iframe width="112" height="62" src="https://www.youtube.com/embed/r_oI-OVyIs4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      </div>
                     <div class="seperatorHorizontal"></div>
                     <div>Asset Management Data</div>
                     
                     <table class="table table-hover table-bordered">
                         <thead class="thead-dark">
                           <tr>
                             <th>Name</th>
                             <th>Department</th>
                             <th>Contact Mail</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr>
                             <td>John</td>
                             <td>Maintainance</td>
                             <td>john@e.com</td>
                           </tr>
                           <tr>
                             <td>Mary</td>
                             <td>Contractor</td>
                             <td>mary@e.com</td>
                           </tr>
                           <tr>
                             <td>Jerry</td>
                             <td>Vendor</td>
                             <td>Jerry@e.com</td>
                           </tr>
                           <tr>
                             <td>Alfrid</td>
                             <td>IT</td>
                             <td>Alfrid@e.com</td>
                           </tr>
             
                         </tbody>
                     </table>
                 </div>
             
</div>




<div className={`${this.state.hdClass[28]}`}>
    <div class="container-fluid">
                     <div class="row">
                         <div class="col-10"><div> <span class="statusGreen"><i class="fas fa-circle"></i></span><span class="rightSideSensorName">Bus Station 1</span><span onClick={()=>{this.GoTo3D()}}><i class="fas fa-eye goto3d" ></i></span> </div> <div class="idTag">id: 46546546</div></div>
                         <div class="col-2 closeRightCont"><span onClick={()=>{this.closeList()}}><i class="fa-solid fa-circle-xmark closeRight"></i></span></div>
                     </div>
                 </div>
                 <div class="LeftBarCont">
             
                 <div class="seperatorHorizontal asdff"></div>

                  <div className='sdfsfsa'>
                    <h3>

                 Occupancy: <span className='sdfagag'>10</span> 
                    </h3>

                  </div>


                 <div class="seperatorHorizontal"></div>
                <iframe className='qwqwq' src='https://mwasalatmisr.com/ar/maps/'></iframe>
                     <div class="seperatorHorizontal"></div>
                     <div>Asset Management Data</div>
                     
                     <table class="table table-hover table-bordered">
                         <thead class="thead-dark">
                           <tr>
                             <th>Name</th>
                             <th>Department</th>
                             <th>Contact Mail</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr>
                             <td>John</td>
                             <td>Operation</td>
                             <td>john@e.com</td>
                           </tr>

             
                         </tbody>
                     </table>
                 </div>
             
</div>
<div className={`${this.state.hdClass[29]}`}>
    <div class="container-fluid">
                     <div class="row">
                         <div class="col-10"><div> <span class="statusGreen"><i class="fas fa-circle"></i></span><span class="rightSideSensorName">Bus Station 2</span><span onClick={()=>{this.GoTo3D()}}><i class="fas fa-eye goto3d" ></i></span> </div> <div class="idTag">id: 46546546</div></div>
                         <div class="col-2 closeRightCont"><span onClick={()=>{this.closeList()}}><i class="fa-solid fa-circle-xmark closeRight"></i></span></div>
                     </div>
                 </div>
                 <div class="LeftBarCont">
             
                 <div class="seperatorHorizontal asdff"></div>
                 <div className='sdfsfsa'>
                    <h3>

                 Occupancy: <span className='sdfagag'>1</span> 
                    </h3>

                  </div>


                 <div class="seperatorHorizontal"></div>

                <iframe className='qwqwq' src='https://mwasalatmisr.com/ar/maps/'></iframe>
                     <div class="seperatorHorizontal"></div>
                     <div>Asset Management Data</div>
                     
                     <table class="table table-hover table-bordered">
                         <thead class="thead-dark">
                           <tr>
                             <th>Name</th>
                             <th>Department</th>
                             <th>Contact Mail</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr>
                             <td>John</td>
                             <td>Operation</td>
                             <td>john@e.com</td>
                           </tr>

             
                         </tbody>
                     </table>
                 </div>
             
</div>
<div className={`${this.state.hdClass[30]}`}>
    <div class="container-fluid">
                     <div class="row">
                         <div class="col-10"><div> <span class="statusGreen"><i class="fas fa-circle"></i></span><span class="rightSideSensorName">Bus Station 3</span><span onClick={()=>{this.GoTo3D()}}><i class="fas fa-eye goto3d" ></i></span> </div> <div class="idTag">id: 46546546</div></div>
                         <div class="col-2 closeRightCont"><span onClick={()=>{this.closeList()}}><i class="fa-solid fa-circle-xmark closeRight"></i></span></div>
                     </div>
                 </div>
                 <div class="LeftBarCont">
             
                 <div class="seperatorHorizontal asdff"></div>
                 <div className='sdfsfsa'>
                    <h3>

                 Occupancy: <span className='sdfagag'>8</span> 
                    </h3>

                  </div>


                 <div class="seperatorHorizontal"></div>

                <iframe className='qwqwq' src='https://mwasalatmisr.com/ar/maps/'></iframe>
                     <div class="seperatorHorizontal"></div>
                     <div>Asset Management Data</div>
                     
                     <table class="table table-hover table-bordered">
                         <thead class="thead-dark">
                           <tr>
                             <th>Name</th>
                             <th>Department</th>
                             <th>Contact Mail</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr>
                             <td>John</td>
                             <td>Operation</td>
                             <td>john@e.com</td>
                           </tr>

             
                         </tbody>
                     </table>
                 </div>
             
</div>
<div className={`${this.state.hdClass[31]}`}>
    <div class="container-fluid">
                     <div class="row">
                         <div class="col-10"><div> <span class="statusGreen"><i class="fas fa-circle"></i></span><span class="rightSideSensorName">Bus Station 4</span><span onClick={()=>{this.GoTo3D()}}><i class="fas fa-eye goto3d" ></i></span> </div> <div class="idTag">id: 46546546</div></div>
                         <div class="col-2 closeRightCont"><span onClick={()=>{this.closeList()}}><i class="fa-solid fa-circle-xmark closeRight"></i></span></div>
                     </div>
                 </div>
                 <div class="LeftBarCont">
             
                 <div class="seperatorHorizontal asdff"></div>
                 <div className='sdfsfsa'>
                    <h3>

                 Occupancy: <span className='sdfagag'>9</span> 
                    </h3>

                  </div>


                 <div class="seperatorHorizontal"></div>

                <iframe className='qwqwq' src='https://mwasalatmisr.com/ar/maps/'></iframe>
                     <div class="seperatorHorizontal"></div>
                     <div>Asset Management Data</div>
                     
                     <table class="table table-hover table-bordered">
                         <thead class="thead-dark">
                           <tr>
                             <th>Name</th>
                             <th>Department</th>
                             <th>Contact Mail</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr>
                             <td>John</td>
                             <td>Operation</td>
                             <td>john@e.com</td>
                           </tr>

             
                         </tbody>
                     </table>
                 </div>
             
</div>
<div className={`${this.state.hdClass[32]}`}>
    <div class="container-fluid">
                     <div class="row">
                         <div class="col-10"><div> <span class="statusGreen"><i class="fas fa-circle"></i></span><span class="rightSideSensorName">Bus Station 5</span><span onClick={()=>{this.GoTo3D()}}><i class="fas fa-eye goto3d" ></i></span> </div> <div class="idTag">id: 46546546</div></div>
                         <div class="col-2 closeRightCont"><span onClick={()=>{this.closeList()}}><i class="fa-solid fa-circle-xmark closeRight"></i></span></div>
                     </div>
                 </div>
                 <div class="LeftBarCont">
             
                 <div class="seperatorHorizontal asdff"></div>

                 <div className='sdfsfsa'>
                    <h3>

                 Occupancy: <span className='sdfagag'>2</span> 
                    </h3>

                  </div>


                 <div class="seperatorHorizontal"></div>

                <iframe className='qwqwq' src='https://mwasalatmisr.com/ar/maps/'></iframe>
                     <div class="seperatorHorizontal"></div>
                     <div>Asset Management Data</div>
                     
                     <table class="table table-hover table-bordered">
                         <thead class="thead-dark">
                           <tr>
                             <th>Name</th>
                             <th>Department</th>
                             <th>Contact Mail</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr>
                             <td>John</td>
                             <td>Operation</td>
                             <td>john@e.com</td>
                           </tr>

             
                         </tbody>
                     </table>
                 </div>
             
</div>
<div className={`${this.state.hdClass[33]}`}>
    <div class="container-fluid">
                     <div class="row">
                         <div class="col-10"><div> <span class="statusGreen"><i class="fas fa-circle"></i></span><span class="rightSideSensorName">Bus Station 6</span><span onClick={()=>{this.GoTo3D()}}><i class="fas fa-eye goto3d" ></i></span> </div> <div class="idTag">id: 46546546</div></div>
                         <div class="col-2 closeRightCont"><span onClick={()=>{this.closeList()}}><i class="fa-solid fa-circle-xmark closeRight"></i></span></div>
                     </div>
                 </div>
                 <div class="LeftBarCont">
             
                 <div class="seperatorHorizontal asdff"></div>


                 <div className='sdfsfsa'>
                    <h3>

                 Occupancy: <span className='sdfagag'>7</span> 
                    </h3>

                  </div>


                 <div class="seperatorHorizontal"></div>

                <iframe className='qwqwq' src='https://mwasalatmisr.com/ar/maps/'></iframe>
                     <div class="seperatorHorizontal"></div>
                     <div>Asset Management Data</div>
                     
                     <table class="table table-hover table-bordered">
                         <thead class="thead-dark">
                           <tr>
                             <th>Name</th>
                             <th>Department</th>
                             <th>Contact Mail</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr>
                             <td>John</td>
                             <td>Operation</td>
                             <td>john@e.com</td>
                           </tr>

             
                         </tbody>
                     </table>
                 </div>
             
</div>
<div className={`${this.state.hdClass[34]}`}>
    <div class="container-fluid">
                     <div class="row">
                         <div class="col-10"><div> <span class="statusGreen"><i class="fas fa-circle"></i></span><span class="rightSideSensorName">Bus Station 7</span><span onClick={()=>{this.GoTo3D()}}><i class="fas fa-eye goto3d" ></i></span> </div> <div class="idTag">id: 46546546</div></div>
                         <div class="col-2 closeRightCont"><span onClick={()=>{this.closeList()}}><i class="fa-solid fa-circle-xmark closeRight"></i></span></div>
                     </div>
                 </div>
                 <div class="LeftBarCont">
             
                 <div class="seperatorHorizontal asdff"></div>


                 <div className='sdfsfsa'>
                    <h3>

                 Occupancy: <span className='sdfagag'>0</span> 
                    </h3>

                  </div>


                 <div class="seperatorHorizontal"></div>

                <iframe className='qwqwq' src='https://mwasalatmisr.com/ar/maps/'></iframe>
                     <div class="seperatorHorizontal"></div>
                     <div>Asset Management Data</div>
                     
                     <table class="table table-hover table-bordered">
                         <thead class="thead-dark">
                           <tr>
                             <th>Name</th>
                             <th>Department</th>
                             <th>Contact Mail</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr>
                             <td>John</td>
                             <td>Operation</td>
                             <td>john@e.com</td>
                           </tr>

             
                         </tbody>
                     </table>
                 </div>
             
</div>


              
             
                 <Helmet>
                  
                  
                  <script>{`
                     window.onload = function () {

                       var ddps = []
                       var dps = []; // dataPoints
                       var charts = [];
                       for (let i = 0; i < 21; i++) {
                        ddps[i] = [];
                         var chart = new CanvasJS.Chart("chartContainer"+i, {
                             title :{
                                 text: ""
                             },
                             data: [{
                                 type: "line",
                                 dataPoints: ddps[i]
                             }]
                         });
 
                         charts.push(chart);
                      }

                       var xVal = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                       var yVal = [31,50,31,31,31,31,31,55,55,55,55,55,55,55,35,35,35,35,35,35,35]; 
                       var updateInterval = 1000;
                       var dataLength = 20; // number of dataPoints visible at any point
                       
                       
                       var updateChart = function (count) {
                        for (let i = 0; i < 21; i++) {
                          count = count || 1;
                      
                          for (var j = 0; j < count; j++) {
                              yVal[i] = yVal[i] +  Math.round(0.75+ Math.random() *(-1.5));
                              ddps[i].push({
                                  x: xVal[i],
                                  y: yVal[i]
                              });
                              xVal[i]++;
                          }
                      
                          if (ddps[i].length > dataLength) {
                              ddps[i].shift();
                          }
                          charts[i].render();

                        }
                           //for (let i = 0; i < 21; i++) 
                           //{
                           //}
                       };
                       
                       updateChart(dataLength);
                       setInterval(function(){updateChart()}, updateInterval);
                       
                       }
                       //setTimeout(name, 1000);
                       function name() {
                           var ss = document.getElementsByClassName("canvasjs-chart-credit");
                           console.log(ss);
                           for (let i = 0; i < ss.length; i++) {
                             ss[i].style.display = "none";
                             
                           }
                           
                       }
             
             
             
                 `}</script>

                 
                 </Helmet>

    </>
    );
  }

  
}
const mapStateToProps = (state) => ({state})

export default connect(mapStateToProps , {setHistoryObj, setMatchObj})(SensonrsDetailsBar_comp);





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