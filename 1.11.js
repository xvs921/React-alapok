// Write your code here.
function writeDate(date){
    return date;
  }
   
  const date= new Date().toLocaleDateString();
  
  const element=<p>{writeDate(date)}</p>;
                 
  ReactDOM.render(element, document.getElementById('root'));