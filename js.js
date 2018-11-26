
window.onload=function(){
	var form = document.getElementById("form1"); 
	var formx = document.getElementById("form2"); 
	var titles=document.getElementById("p-2");
	var divs=document.getElementById("p-3");
	titles.onclick=function(){
	
	     	 divs.style.borderBottom="2px solid #C20C0C";
	     	  divs.style.borderLeft="2px solid #C20C0C";
	     	  titles.style.borderRight="none";
            titles.style.borderBottom="none";

            formx.style.display='none';
	    	form.style.display='block';	
	    	formx.style.zIndex='2';
			form.style.zIndex='1';
	     }
	divs.onclick=function(){
	     
		   titles.style.borderBottom="2px solid #C20C0C";
		   divs.style.borderLeft="none";
		   titles.style.borderRight="2px solid #C20C0C";
            divs.style.borderBottom="none";
			form.style.display='none';
			formx.style.display='block';
			form.style.zIndex='1';
			formx.style.zIndex='2';
	     }

	};
		
		
	
	
