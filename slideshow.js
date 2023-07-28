let pics=["car1.jpg","car2.jpg","car3.jpg","car4.jpg","car5.jpg"];
let c=0;
function Prev() {
    c=c+1;
    if(c>=pics.length-1) {
        c=0;
    }
    else {
        document.getElementById("p1").src = pics[c];
    }
}
function Next() {
    c=c+1;
    if(c>=pics.length-1) {
        c=0;
    }
    else {
        document.getElementById("p1").src = pics[c];
    }
}