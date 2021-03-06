

import React, { Component } from 'react'

export class Greet extends Component {
         constructor(props)
          { super(props)

            this.state = {
                   count :0,
                   id:0,

                 
                   
            };
           
            
    
            
    }
    increment(){
            this.setState({
                    count:this.state.count+1
                 
            });
           
    }
    decrement(){
            this.setState({
                    count:this.state.count -1
            });
            console.log(this.state.count)
    }
    


                   eventHandler=()=>{
                            this.setState({

                                value :this.state.count    
                            
                            
                            });   

        
    }
    tabledata=()=>{
            this.setState({
                    
                  id :this.state.id+1,
                  no:this.state.value
            }
            )

    }

  
  
    
    render() {
            
            return (
                    <div><div>
                              count-({this.state.count})
                             
                              </div>
                          
                            <button onClick={()=>{this.increment()}}>increment</button>
                    
                           <span>
                            <button onClick={()=>{this.decrement()}}>decrement</button>
                            </span>
                            <div><div>
                              
                              </div>
                              <div>
                              <input type ="text" value={this.state.value} ></input>  
                            </div>  
                            <div>
                            <button onClick={()=>{this.eventHandler()}} >click</button>
                            </div>
                    </div>
                    <button onClick={()=>{this.tabledata()}}>submit</button>
                   <div>
       <center><table border="2">
               <thead>
               <tr>
                <td>S.No</td>
               <td>value</td>  
               </tr>     
               </thead>
               <tbody><td>{this.state.id}</td>
               <td>{this.state.no}</td>
              
                      
               </tbody>

       </table>
       </center>





                    </div>
                           
                    </div>



                
            )
    }

}

export default Greet
