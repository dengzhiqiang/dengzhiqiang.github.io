// 网络地址
var netAddress = '';

// 本机测试地址
var localAddress = './img/'

// 当前使用地址  
var currAddress = netAddress.length == '' ? localAddress : netAddress;
// 图片的总数量
var imgTotal =17;


// 全局定时器
var timeOut = null;

//  随机点名函数
function randomName(studentName){
    $('#random-name .click-name .inner').click(function (params) {
        // 定时器 
        
        clearInterval(timeOut);
        // 循环次数 
        var num = 0;

        // 学生的数量
        var len = studentName.length;

        timeOut = setInterval(function (params) {
            num ++;
            // 随机名字
            var randIndex = Math.floor(Math.random() * len);

            // 随机图片头像
            var imgIndex = Math.floor(Math.random() * imgTotal);
            $('#random-name .head-img img').attr({
                src : currAddress + imgIndex + '.jpg'
            });
            
            var currName = studentName[randIndex];
            console.log(randIndex, len, currName);
            $('.student-name .inner').html(currName);
            if (num >= 20) {
                clearInterval(timeOut);
                num = 0;
                $('.history-name').append("<span class='inner'>" + currName + "</span>");
            }
        }, 80);
    });


}
