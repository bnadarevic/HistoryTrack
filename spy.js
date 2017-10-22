var clicks=0;
var clicked=[]
for(id=1;id<subreddits.length;id++){
  document.write("<a id="+"\""+id+"\""+" "+" onclick=clicked.push(this.id);document.getElementById(this.id).innerHTML=''"+" href=https://reddit.com"+subreddits[id]+">"+"o"+"</a>")
  if (id%100==0){
    document.write("<br>")
  }
}
var anchors = document.getElementsByTagName('a');
var p=document.getElementsByTagName('p')[0]
 for(i=0, len=anchors.length; i<len; i++){
     anchors[i].addEventListener('click', function(e){e.preventDefault();clicks++;p.innerHTML="Clicks:"+clicks;});
 }
