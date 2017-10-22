<?php
$log=$_GET["ids"];

if(strlen($log)==0){
echo "NO CIRCLES CLICKED, ERROR, try again later";
die();
}
$ip=$_SERVER['REMOTE_ADDR'];
$ids=file_put_contents("log.txt",$ip.":".$log."\n",FILE_APPEND);
echo "So what was this about anyway? Basically this was bit of history bruteforcing\n , specifically tied to reddit in this case. You see, site can make already visited links look differently than nonvisited links but browsers disabled ability for site to query link color as privacy protection so this tried to circumvent it with little bit of social engineering.\n No worries only sfw subreddit links were included in demo :)";
?>
