document.getElementById("calculator1").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)+parseInt(num2);
    document.getElementById("result1").innerHTML ="SUM :"+sum;
})
document.getElementById("calculator2").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)-parseInt(num2);
    document.getElementById("result2").innerHTML ="SUM :"+sum;
})
document.getElementById("calculator3").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)*parseInt(num2);
    document.getElementById("result3").innerHTML ="SUM :"+sum;
})
document.getElementById("calculator4").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)/parseInt(num2);
    document.getElementById("result4").innerHTML ="SUM :"+sum;
})
function myalert(){
    alert("Hello Prayut")
}
function na(){
    var num1 =  document.getElementById("num1").value;
    var num2 =  document.getElementById("num2").value;
    var sum1 =  parseInt(num1)+parseInt(num2);
    alert("sum : "+sum1)
}
function ma(){
    var num1 =  document.getElementById("num1").value;
    var num2 =  document.getElementById("num2").value;
    var sum2 =  parseInt(num1)-parseInt(num2);
    alert("sum : "+sum2)
}
function my(){
    var num1 =  document.getElementById("num1").value;
    var num2 =  document.getElementById("num2").value;
    var sum3 =  parseInt(num1)*parseInt(num2);
    alert("sum : "+sum3)
}
function mt(){
    var num1 =  document.getElementById("num1").value;
    var num2 =  document.getElementById("num2").value;
    var sum4 =  parseInt(num1)/parseInt(num2);
    alert("sum : "+sum4)
}

const img = document.createElement("img")
img.src ="img/pic.jpg"

document.getElementById("myDiv").appendChild(img);