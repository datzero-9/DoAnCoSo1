
    var index = 0, index2 = 0, index3 = 0;

    changeImage = function () {
        var imgs = ["../../img/banphim.jpg", "../../img/banphim2.jpg", "../../img/banphim3.jpg", "../../img/banphim4.jpg"];
        document.getElementById('img').src = imgs[index];
        index++;
        if (index == 4) {
            index = 0;
        }
    }
    setInterval(changeImage, 2000);



    changeImage2 = function () {
        var imgs2 = ["../../img/chuot.jpg", "../../img/chuot2.jpg", "../../img/chuot3.jpg", "../../img/chuot4.jpg", "../../img/chuot5.jpg"];
        document.getElementById('img2').src = imgs2[index2];
        index2++;
        if (index2 == 5) {
            index2 = 0;
        }
    }
    setInterval(changeImage2, 2000);



    changeImage3 = function () {
        var imgs3 = ["../../img/tainghe.jpg", "../../img/tainghe2.jpg", "../../img/tainghe3.jpg", "../../img/tainghe4.jpg", "../../img/tainghe5.jpg"];
        document.getElementById('img3').src = imgs3[index3];
        index3++;
        if (index3 == 5) {
            index3 = 0;
        }
    }
    setInterval(changeImage3, 2000);


    



    
