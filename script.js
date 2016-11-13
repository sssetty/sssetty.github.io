 //Adding items to list without storage.
 //localStorage.clear();
 window.onload=function(){
		 if(typeof(Storage)!== undefined){
		 content=localStorage.getItem("Localdata");	
		 content2=localStorage.getItem("Localdata2");
	     console.log(content);
		 a=document.getElementById('flist');
		 a.innerHTML=content;
		 b=document.getElementById('slist');
		 b.innerHTML=content2;
		 }
		 var x=document.getElementsByClassName('don');
		 for(var i=0;i<x.length;i++){
		x[i].onclick=function(){
        this.parentElement.style.textDecoration="line-through";
		console.log("done");
		localStorage.clear();
		store=flist.innerHTML;
		localStorage.setItem('Localdata',store);
		store2=slist.innerHTML;
		localStorage.setItem('Localdata2',store2);
		};
		}
	
      var y=document.getElementsByClassName('dele');
	  for(var j=0;j<y.length;j++){
	  y[j].onclick=function(){
        this.parentElement.remove();
		console.log("del");
		localStorage.clear();
		store=flist.innerHTML;
        localStorage.setItem('Localdata',store);
        store2=slist.innerHTML;
		localStorage.setItem('Localdata2',store2);
		};  
	  }
	  
	  
 };
 function add(){
	 
   text=document.getElementById('chore').value;
   if(text===""){
	   alert("Please enter a task");
   }
   else if(text.length>=15){
	   alert("Only upto 11 characters accepted.");
   }
   else{
  //console.log(text);
  div=document.createElement('div');
  div.id="todo";
  div.innerHTML=text+"&nbsp;&nbsp;&nbsp;";
  //console.log(div.innerHTML);
  //checking if first list full
  var x=document.getElementsByClassName('don');
  if(x.length<15){
	  k='flist';
  }
  else if(x.length>=15 && x.length<29) {
	  k='slist';
  }
  //checking if 1st list still empty
  if(x.length>29){
	  alert("Too many things to be done.Finish and come back!");  
  }
  else{
	  var l1=document.getElementById('flist').getElementsByClassName('don');
	  var l2=document.getElementById('slist').getElementsByClassName('don');
	  if(l1.length<15 || l2.length===15){
		  k='flist';
	  }
	  else if(l1.length===15 || l2.length<15){
		  k='slist';
	  }
  document.getElementById(k).appendChild(div);
  don=document.createElement('span');
  don.innerHTML=("&#9745;"+"&nbsp;");
  don.id="y"+text;
  don.className="don";
  don.onclick=function(){
			
        this.parentElement.style.textDecoration="line-through";
		console.log("done");
		localStorage.clear();
		store=flist.innerHTML;
		localStorage.setItem('Localdata',store);
		store2=slist.innerHTML;
		localStorage.setItem('Localdata2',store2);

		};
  
  del=document.createElement('span');
  del.innerHTML=("&#9746;");
  del.id="n"+text;
  del.className="dele";
  del.onclick=function(){
        this.parentElement.remove();
		console.log("delete");
		localStorage.clear();
		store=flist.innerHTML;
        localStorage.setItem('Localdata',store);
		store2=slist.innerHTML;
		localStorage.setItem('Localdata2',store2);
        
		};
  div.appendChild(del);
  div.appendChild(don);
  //Adding items to storage
   store=flist.innerHTML;
   console.log(store);
   localStorage.setItem('Localdata',store);
   store2=slist.innerHTML;
   localStorage.setItem('Localdata2',store2);
  }
   }
 };

 
		
