import React, { useState } from 'react';
import DataService from './DataService';



const App = () =>{
  
  const[status,setStatus]=useState('');
  const[linkurl,setLinkurl]=useState('');
  const[count_str,setCount_str]=useState('');
  const[count_realnum,setCount_realnum]=useState('');
  const[count_int,setCount_int]=useState('');
  const[count_alfanum,setCount_alfanum]=useState('');
  const[show_report,setShow_report]=useState(false);

  const getFile = () =>{
    setStatus('loading');
    DataService.getData()
    .then((data)=>{
      if(data.results){
        setLinkurl(data.results.file_location);
        setCount_str(data.results.count_string);
        setCount_realnum(data.results.count_realnumber);
        setCount_int(data.results.count_integer);
        setCount_alfanum(data.results.count_alfanum)
        setStatus('loaded');
      }
      else{
        setStatus('failed');
      }


    })
  }
  return(
    <div className='container-fluid' >
      <div className='card'>
        <div className="card-header">
          <h5>Random text file generator</h5>
        </div>
        <div className='card-body'>
          <div className='row'>
            <div className='col'>
              {status==='loading'?(<button className="btn btn-primary" type="button" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
              </button>
              ):(
              <button className='btn btn-primary'
              onClick={getFile}
              >Generate</button>)}
            </div>
          </div>
          <br/><br/>
          {status==='failed'&&(<div class="alert alert-danger" role="alert">
            Ooops something went wrong, please try again after several minutes
            </div>)}
          {status==='loaded'&&(<div className='row'>
            <div className='col'>
              <label>Link :</label> &ensp;
              <a href={linkurl} download={"generated_file.txt"}>click this link to download file</a>
            </div>
          </div>)}
          
        </div>

      </div>
      {status==='loaded'&&(<div className='card'>
        <div className='card-body'>
          <div className='row'>
            <div className='col'>
              {show_report?(<button className='btn btn-secondary'
              onClick={()=>setShow_report(false)}
              >Hide Report</button>):(
              <button className='btn btn-secondary'
              onClick={()=>setShow_report(true)}
              >Show Report</button>)}
            </div>
          </div>
        </div>
        {show_report&&(<div className='card-body'>
          <div className='row'>
            <div className='col-md-4'>
              <label>Alphabetical Strings :</label>
            </div>
            <div className='col-md-8'>
              <label>{count_str}</label>
            </div>
          </div>
          <br/>
          <div className='row'>
            <div className='col-md-4'>
              <label>Real Numbers :</label>
            </div>
            <div className='col-md-8'>
              <label>{count_realnum}</label>
            </div>
          </div>
          <br/>
          <div className='row'>
            <div className='col-md-4'>
              <label>Integers:</label>
            </div>
            <div className='col-md-8'>
              <label>{count_int}</label>
            </div>
          </div>
          <br/>
          <div className='row'>
            <div className='col-md-4'>
              <label>Alphanumerics :</label>
            </div>
            <div className='col-md-8'>
              <label>{count_alfanum}</label>
            </div>
          </div>
        </div>)}

      </div>)}
    </div>
  )
}

export default App;
