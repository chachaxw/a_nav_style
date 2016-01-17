  window.onload=function()
  {
	  var oDiv=document.getElementById('div1');
	  var oNavbox=oDiv.children[0];
	  var oUl=oDiv.children[1];
	  var aLi=oUl.children;

	  var opened=false;

	  for(var i=0;i<aLi.length;i++)
	  {
		  if(i%2==1)
		  {
			  aLi[i].style.left=-aLi[i].offsetWidth+'px';
		  }
		  else
		  {
			  aLi[i].style.left=aLi[i].offsetWidth+'px';  
		  }
	  }
	  oNavbox.onclick=function()
	  {
		  if(opened)
		  {
		      var i=aLi.length-1;
			  var timer=setInterval(function()
			  {
			      var left=i%2?-aLi[i].offsetWidth:aLi[i].offsetWidth;
				  startMove(aLi[i],{left: left,opacity: 0});
				  i--;
				  if(i==-1)
				  {
				      clearInterval(timer);
				  }
			  },100);//选项收起来
		  }
		  else
		  {
		      var i=0;
		      var timer=setInterval(function()
		      {
			      startMove(aLi[i],{left: 0,opacity: 100}); 
			      i++;
			      if(i==aLi.length)
			      {
				     clearInterval(timer);  
			      }
		      },100); //选项展开来
		  }
		  if(opened)
		     opened=false;
		  else
		     opened=true;
	 };
	  for(var i=0;i<aLi.length;i++)
	  {
		  aLi[i].onclick=function()
		  {
			  var oSpan=oNavbox.children[0];
			  
			  opened=false;
			  oSpan.innerHTML=this.children[0].innerHTML;
              var i=aLi.length-1;
			  var timer=setInterval(function()
			  {
			      var left=i%2?-aLi[i].offsetWidth:aLi[i].offsetWidth;
				  startMove(aLi[i],{left: left,opacity: 0});
				  i--;
				  if(i==-1)
				  {
				      clearInterval(timer);
				  }
			  },100);
		  }
		  
	  }
  }