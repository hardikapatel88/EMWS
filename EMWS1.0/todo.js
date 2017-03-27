/*
todo
-number of layers function
-read values into dynamic.js, receive results, show each graph in view structure
-copy view structure 3x on bottom row, add dispersion, fields, and transmission graphs


	  var newdiv = document.createElement('div');
      newdiv.innerHTML = "<div id='h"+counter+"'>Ambient Left " + " <br><b>Epsilon:</b> <input type='text' size='6' id='e"+ counter +"'> &nbsp;&nbsp;&nbsp; <b>Mu:</b> <input type= 'text' size='6'  id = 'm"+ counter +"'> &nbsp;&nbsp;&nbsp; <b>Length:</b> <input type = 'text' size='6' id = 'l"+counter +"'></div>";
      document.getElementById(divName).appendChild(newdiv); 
*/


function addNumLayers2(divName, numInputs) {
  numberOfLayers = parseInt(numInputs) + 2;
  var layersToAdd = numberOfLayers;
  if(counter<layersToAdd) {
    if(counter==0) {

      // document.getElementsByClassName("h"+counter).remove();
      $("#h"+counter).remove();
              
      counter++;
      addNumLayers2(divName, numInputs);
    } else if((counter+1)<layersToAdd) {
      $("#h"+counter).remove();
      // document.getElementsByClassName("h"+counter).remove();
      var newdiv = document.createElement('div');
      newdiv.innerHTML = "<div id='h"+counter+"'>Layer" + (counter) + " <br><b>Epsilon:</b> <input type='text' size='6' id='e"+counter+"' class='e"+ counter +"'> &nbsp;&nbsp;&nbsp; <b>Mu:</b> <input type= 'text' size='6'  id = 'm"+ counter +"'> &nbsp;&nbsp;&nbsp; <b>Length:</b> <input type = 'text' size='6' id = 'l"+counter +"'> </div>";
      document.getElementById(divName).appendChild(newdiv);
      counter++;
      addNumLayers2(divName, numInputs);
    } else if((counter+1)==layersToAdd) {
      // document.getElementsByClassName("h"+counter).remove();
      $("#h"+counter).remove();
      var newdiv = document.createElement('div');
      newdiv.innerHTML = "<div id='h"+counter+"'>Ambient Right" + " <br><b>Epsilon:</b> <input type='text' size='6' id='e"+counter+"' class='e"+ counter +"'> &nbsp;&nbsp;&nbsp; <b>Mu:</b> <input type= 'text' size='6'  id = 'm"+ counter +"'> &nbsp;&nbsp;&nbsp; <b>Length:</b> <input type = 'text' size='6' id = 'l"+counter +"'> </div>";
      document.getElementById(divName).appendChild(newdiv);
      counter = 0;
    }
  }
}