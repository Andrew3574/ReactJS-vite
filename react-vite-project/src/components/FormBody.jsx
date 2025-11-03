import { useState, useRef,useEffect } from "react";
import { createPortal } from "react-dom";
import { Button } from "./Button/Button";

export function FormBody(){
    let [form,setForm] = useState({
        text:'',
        reason:1,
        hasError:true
    })
    
    let [show,setShow]=useState(true)

    const dialog = useRef()

    function textChanged(event){
        setForm(prev=>({
            ...prev,
            text:event.target.value,
            hasError:event.target.value.trim().length == 0 ? true : false
        }))
    }

    function reasonChanged(eventValue){
        // setReason(eventValue )
    }

    function handleclick(){
        if(show){
            setShow(false)
        }
        else{
            setShow(true)
        }
    }
    useEffect(()=> {
        if(show){
            dialog.current.open=true
        }
        else{
            dialog.current.open=false
        }

    },[show])

    const [value,setValue] = useState('')

    useEffect(async ()=>{
        const response = await fetch('http://acme.com/api/platform')
        const data = response.json()
        setValue(data)
    },[])

    return(
        <>
            <form style={{padding:'10px'}}>

                <label htmlFor="text">текст обращения</label>
                <input type="text" id="name" value={form.text} onChange={(event)=>textChanged(event)}></input>
                <br></br>

                <label htmlFor="reason">причина обращения</label>
                <select id="reaon" value={form.reason} onChange={(event)=>reasonChanged(event.target.value)}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
                <br></br>

                <Button disabled={form.hasError}>Отправить</Button>

            </form>

            <pre>
                
                {JSON.stringify(form,null,2)}
            </pre>


            <Button onClick={()=>handleclick()}>modal</Button>
            <dialog ref={dialog} >SOME DIALOG</dialog>
            
            <h1>{value}</h1>
        </>

    );
}