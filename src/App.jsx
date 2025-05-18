import { createContext, useState } from "react";
// import './App.css'
import Hello,{ H, H1 } from "./Class1/Hello";
import Intro from "./Class1/Intro";
import New from "./Class2/New";
import { FaRegHeart } from "react-icons/fa";
import Form from "./Class3/Form";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Class3/Routers/Home";
import Course from "./Class3/Routers/Course";
import Support from "./Class3/Routers/Support";
import NotFound from "./Class3/Routers/NotFound";
import Java from "./Class3/Routers/Java";
import Python from "./Class3/Routers/Python";
import Mern from "./Class3/Routers/Mern";
import UIUX from "./Class3/Routers/UIUX";
import Student from "./Class3/Routers/Student";
import Navbar from "./Class4/Navbar";
import UseEffect from "./Class4/UseEffect";
import Dashboard from "./Class4/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainComponent from "./Class5/MainComponent";
import UseRef from "./Class5/UseRef";
import Framer from "./Class5/Framer";

const router=createBrowserRouter([
  {
    path:"/",
    element:<>
    <Navbar/>
    <Home/>
    </>
  },
  {
    path:"/courses",
    element:<>
    <Navbar/>
    <Course/>
    </>,
    children:[
      {
        path:"javafs",
        element:<Java/>
      },
      {
        path:"pythonfs",
        element:<Python/>
      },
      {
        path:"mern",
        element:<Mern/>
      },
      {
        path:"uiux",
        element:<UIUX/>
      }
    ]
  },
  {
    path:"/support",
    element:<>
    <Navbar/>
    <Support/>
    </>
  },
  {
    path:"/student/:id",
    element:<Student/>
  },
  {
    path:"*",
    element:<NotFound/>
  }
])

export const DataContext=createContext();

function App(){
  // let age=22;
  // let name="Aayush";

  // let name1="Sarvesh";
  // let name2="Aayush";
  // let name3="Nishant";

  // let st1={
  //   name:"Neeru",
  //   course:"MERN"
  // }

  // let st2={
  //   name:"Shivang",
  //   course:"Manual Testing"
  // }

  // let st3={
  //   name:"Mohit",
  //   course:"DA"
  // }

  // let st4={
  //   name:"Akash",
  //   course:"UI/UX"
  // }

  // let specs=["Hard-working","Punctual","Innocent","Honest"]

  // let [data,setData]=useState(0)

  // function incCount(){
  //   setData(data+1);
  // }

  // function decCount(){
  //   setData(data-1)
  // }

  // function resetCount(){
  //   setData(0);
  // }


  // let [status,setStatus]=useState(false);
  // function changeStatus(){
  //   setStatus(!status);
  // }

  // let [theme,setTheme]=useState(false);

  let info={
    name:"Nishant",
    city:"Gur",
    age:22,
    course:"MERN"
  }

  return(
    <>
    {/* <h1>Hello Everyone</h1>
    <Intro/>
    <H/>
    <H1/>
    <Hello/> */}
    {/* to use js varaible in return we apply them in {} */}
    {/* <h1>My name is {name} and by age is {age}</h1> */}


    {/* <New data={name1} course="JFS"/> 
    <New data={name2} course="JFS"/>
    <New data={name3} course="Mern"/> */}


    {/* <New name={st1.name} course={st1.course} info={specs[0]}/>
    <New name={st2.name} course={st2.course} info={specs[1]}/>
    <New name={st3.name} course={st3.course} info={specs[2]}/>
    <New name={st4.name} course={st4.course} info={specs[3]}/> */}

    {/* <h1>What is States & Conditional Rendering?</h1>

    <button onClick={incCount}>+</button>
        {data}
    <button onClick={decCount}
        disabled={data<1}
    >
      -
    </button>
      <br />
    <br />

    <button onClick={resetCount}>Reset</button> */}

    
{/* <FaRegHeart onClick={changeStatus} style={{fontSize:"3rem"}} className={(status)?"change":""} />
    <h1>{(status?"Liked Image":"")}</h1>



    <div className={(theme)?"dark":"light"}>
      <h1>Hello Theme</h1>
    </div>
    <button style={(theme)?{backgroundColor:'White',color:'black'}:{backgroundColor:'black',color:'white'}} onClick={()=>{setTheme(!theme)}}>{(theme)?"Dark":"Light"}</button>
 */}

    {/* form handling , routers */}

    {/* <Form/> */}

    {/* <h1>React Routers</h1> */}


    {/* <RouterProvider router={router}></RouterProvider> */}

    {/* <h1>useEffect Hook</h1>
    <UseEffect/> */}
    {/* <Dashboard/> */}
      
      {/* <DataContext.Provider value={info}>
        <MainComponent/>
      </DataContext.Provider> */}

      {/* <UseRef/> */}
        
      {/* <Framer/> */}

    </>

  )
}

export default App;