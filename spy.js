var clicks = 0;
var clicked= [];
for (var id = 1; id < subreddits.length; id++) {
  var link = document.createElement('a');
  var callback = (function (link) {
    return function (e) {
      clicked.push(link.id);
      link.innerHTML = '';
      console.log('clearing id: ' + link.id);
    }
  })(link);
  link.addEventListener('click', callback);
  link.href = 'https://reddit.com' + subreddits[id];
  link.innerHTML = 'o';
  document.body.appendChild(link);
  if (id%100==0){
    document.write("<br>")
  }
}
var anchors = document.getElementsByTagName('a');
var p=document.getElementsByTagName('p')[0]
for (var i=0, var len = anchors.length; i < len; i++) {
  anchors[i].addEventListener('click', function(e) {
    e.preventDefault();
    clicks++;
    p.innerHTML="Clicks:"+clicks;
  });
}
