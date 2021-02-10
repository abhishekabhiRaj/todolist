import React from 'react';
import './Box.css';

    var li = document.getElementsByTagName('LI');
    var i;
    for (i = 0; i < li.length; i++) {
        var span = document.createElement("span");
        var txt = document.createTextNode("\u00D7");
        span.appendChild(txt);
        li[i].appendChild(span);
    }
    // ====================================================

    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// ================================================




function add() {
    var list = document.getElementById('box__add--input').value ;
    var li = document.createElement("li");
    var txt = document.createTextNode(list);
    li.appendChild(txt);
       
    if (list == '') {
        alert("Please write something ....");
    }
    else{
        document.getElementById('box__inject').appendChild(li);
    }
    document.getElementById("box__add--input").value = "";


//   ============================

 var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
    

     
    
}   






function Box () {
    return (
        <div className="box">
             <div className="box__add">
                   <input type="text" placeholder="  Add your list here..." id="box__add--input" />
                   <button id="box__add--button" onClick={add} >ADD</button>
             </div>
             <ul id="box__inject">
                  
             </ul>
                      
              
        </div>
    );
}

export default Box;