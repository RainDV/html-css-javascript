let moon = document.getElementById('moon');
let cloud_back = document.getElementById('cloud_back');
let cloud_middle = document.getElementById('cloud_middle');
let cloud_front = document.getElementById('cloud_front');
let whale_head = document.getElementById('whale_head');
let whale_tail = document.getElementById('whale_tail');


window.addEventListener('scroll', function(){
    var value = window.scrollY;
    var maxheight = window.innerHeight;

    console.log("max height = " + maxheight);

    moon.style.left = value * 0.5 + 'px';
    cloud_back.style.right = value * 2 + 'px';
    cloud_middle.style.right = value * 1.2 + 'px';
    cloud_front.style.left = value * 0.85 + 'px';
    whale_head.style.transform = "rotate(" + window.pageYOffset/32 + "deg)"
    whale_tail.style.transform = "rotate(" + window.pageYOffset/30 + "deg)"

    console.log(this.window.pageYOffset);
});

