
Status = "";


function preload()
{
    img = loadImage('IMG20211026163308.jpg');
}

function setup ()
{
   canvas = createCanvas(400,300);
   canvas.center();
   objectDetector = ml5.objectDetector("cocossd" , modelLoaded);
   document.getElementById("status").innerHTML = "Status = Detecting Objects";

}

function modelLoaded()
{
    console.log("MODELLOADED!")
   Status = "true";
   objectDetector.detect(img , gotResults);
}

function gotResults(error , results)
{
   if(error){
       console.log(error);
   }
   else{
    console.log(results);
   }

   
}


function draw()
{

}























function back_ac ()
{
    window.location = "index.html";
}

