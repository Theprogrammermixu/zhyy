/**
 * Created by jf on 2016/4/3.
 */
window.onload = function () {
    var wrap = document.getElementById("wrap");
    var slide = document.getElementById("slide");
    var ul = slide.children[0];
    var lis = ul.children;
    var arrow = document.getElementById("arrow");
    var arrRight = document.getElementById("arrRight");
    var arrLeft = document.getElementById("arrLeft");
    var config = [
        {
            width: 400,
            top: 50,
            left: 50,
            opacity: 0.2,
            zIndex: 2
        },//0
        {
            width: 600,
            top: 30,
            left: 0,
            opacity: 0.8,
            zIndex: 3
        },//1
        {
            width: 615,
            top: 10,
            left: 254,
            opacity: 1,
            zIndex: 4
        },//2
        {
            width: 600,
            top: 30,
            left: 520,
            opacity: 0.8,
            zIndex: 3
        }
        
    ];
    wrap.onmouseover = function () {
        animate(arrow, {"opacity": 1});
    }
    wrap.onmouseout = function () {
        animate(arrow, {"opacity": 0});
    }
    function assign() {
        for (var i = 0; i < lis.length; i++) {
            animate(lis[i], config[i], function () {
                flag = true;
            });
        }
    }

    var flag = true;

    assign();
    arrRight.onclick = function () {
        //if (flag) {
            flag = false;
            config.push(config.shift());
            assign();
        //}
    }
    arrLeft.onclick = function () {
        //if (flag) {
            flag = false;
            config.unshift(config.pop());
            assign();
        //}
    }
}