window.addEventListener('load', function () {
    var preview_img = document.querySelector('.preview_img');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    preview_img.addEventListener('mouseover', function () {
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    preview_img.addEventListener('mouseout', function () {
        mask.style.display = 'none';
        big.style.display = 'none';
    })
    preview_img.addEventListener('mousemove', function (e) {
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        // console.log(x,y);
        var maskx = x - mask.offsetWidth / 2;
        var masky = y - mask.offsetHeight / 2;
        if (maskx <= 0) {
            maskx = 0;
        } else if (maskx >= this.offsetWidth - mask.offsetWidth) {
            maskx = this.offsetWidth - mask.offsetWidth;
        }
        if (masky <= 0) {
            masky = 0;
        } else if (masky >= this.offsetHeight - mask.offsetHeight) {
            masky = this.offsetHeight - mask.offsetHeight;
        }
        mask.style.left = maskx + 'px';
        mask.style.top = masky + 'px';
        var maskMaxx = this.offsetWidth - mask.offsetWidth;
        var maskMaxy = this.offsetHeight - mask.offsetHeight;
        var bigImg = document.querySelector('.bigImg');
        var bigMaxx = bigImg.offsetWidth - big.offsetWidth;
        var bigMaxy = bigImg.offsetHeight - big.offsetHeight;
        var bigX = maskx * bigMaxx / maskMaxx;
        var bigY = masky * bigMaxy / maskMaxy;
        bigImg.style.left = -bigX + 'px';
        bigImg.style.top = -bigY + 'px';
    })
})