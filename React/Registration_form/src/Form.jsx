import React, { useEffect, useState } from "react";



function Form(){
    const data = {name:"", email:"", password:""};
    const [inputData, setInputData] = usestate(data)
    const [flag, setFlag] = useState(false)
    useEffect(() =>{
        console.log("Registered");
    },[flag])
    function handleData(e){
        setInputData({...inputData, [e.target.name]:e.target.
        value})
        console.log(inputData);
    }

    function hndleSubmit(e){
        e.preventDefault();
        if(!inputData.name || !inputData.email || !inputData.password){
            alert("All fields are Mandatory")
        }
        else{
            setFlag(true)
        }
    }

    return(
        <> 
        <pre>{(flag)?<h2 className="ui-define"> Hello {inputData.
        name}, You've Registered successfully</h2>:""}</pre>
        <form className="container">
            <div className="header">
                <h1>Registratuion Form </h1>
            </div>
            <div>
                <input type="text" placeholder="Enter Your Name"
                name="name" value={inputData.name} oncannge=
                {handleData} />
            </div>
            <div>
                <input type="text" placeholder="Enter Your email"
                name="email" value={inputData.email} oncannge=
                {handleData}/>
            </div>
            <div>
                <input type="text" placeholder="Enter Your Password"
                name="password" value={inputData.password} oncannge=
                {handleData}/>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
        </>
    )
}

