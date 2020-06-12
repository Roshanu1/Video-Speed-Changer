$(document).on("change", ".file_multi_video", function(evt) {
  var $source = $('#video_here');

  $source[0].src = URL.createObjectURL(this.files[0]);
 
  $source.parent()[0].load();

});


function showvid() {
  console.log("This is clicked");
  document.getElementById('showvideoplayer').style.display = "block";
  document.getElementById('inputbar').style.display = 'none';
  document.getElementById('speedChanger').style.display = "block";
}

var raw_video = document.getElementById('showvideoplayer');
function change_speed() { 
  var x = document.getElementById("select_speed").value;
  console.log(x);
  if (x == 'slow') {
    raw_video.playbackRate = 0.5;
    // document.getElementsByClassName("showvideoplayer")[0].src = "video.mp4";
   
  }
  else if (x == 'two') {
    raw_video.playbackRate = 2.0;
  }
  else if(x == 'four'){
    raw_video.playbackRate = 4.0;
  }
  else if(x == 'eight'){
    raw_video.playbackRate = 8.0;
  }
  else if(x == 'sixteen'){
    raw_video.playbackRate = 16.0;
  }
} 


function downloader() {
  alert("The download feature will be available soon. For now just enjoy changing your video's speed.")
  
}
