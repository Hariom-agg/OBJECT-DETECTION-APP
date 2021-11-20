img = "";
Status = "";
object = [];


function preload()
{
    img = loadImage('e.jpg');
}

function setup ()
{
   canvas = createCanvas(500,300);
   canvas.center();
   objectDetector = ml5.objectDetector("cocossd" , modelLoaded);
   document.getElementById("status").innerHTML = "Status : Detecting Objects";

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
    object = results;
   }

   
}


function draw()
{
    image(img , 0, 0, 500 , 300);

    if(Status != "")
    {
        
        for(i = 0; i<object.length; i++)
        {
            document.getElementById("status").innerHTML = "Status : Object Detected";
            document.getElementById("objects-detect-live").innerHTML =  "There are 2 big objects in this image from which " + object.length + " objects are detected";
            fill("#FF0000");
            percent = floor(object[i].confidence * 100)+"%";
            console.log(percent);
            console.log(object[i].label);
            textSize(20);
            text(object[i].label ,object[i].x + 15 , object[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(object[i].x , object[i].y , object[i].width , object[i].height);
        }
    }
}


function back ()
{
    window.location = "index.html";
}