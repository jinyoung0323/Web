// 내장 객체 생성
var tv = new Object();
tv.color = "white";
tv.price = 30000;
tv.info = function() {
    document.write("tv color : " + this.color, "<br>");
    document.write("tv price : " + this.price, "<br>");
}
var car = {
    color: "black",
    price: 50000,
    info: function() {
        document.write("tv color : " + this.color, "<br>");
        document.write("tv price : " + this.price, "<br>");
    }
};
document.write("<h3>tv object call method</h3>");
tv.info();
document.write("<hr>");
document.write("<h3>car object call method</h3>");
car.info();
document.write("<hr>");
