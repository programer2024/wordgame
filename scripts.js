 window.alert("سلام به سایت programmers(برنامه نویس ها) خوش امدید");


function myFunction() {
  let person = prompt("لطفا اسمتون رو وارد کنید", "");
  if (person != null) {
    document.getElementById("demo").innerHTML =
    "" + person + "عزیز سلام شما ثبت نام شدید.";
  }
}
	
	
	
var a=prompt("سنتان را وارد کنید");
var year=1402-a;
alert("شما متولد میباشید "+year);
	
	
	
 function MyMessage2(){
 Swal.fire('با سلام ما در این سایت به سرگرمی شما میپردازیم ما  در این سایت یک بازی کلمات که مشابه بازی امیرزا هست قرار دادیم که قطعا شما ان را بازی کردیم یکی دیگر از قابلیت های سایت ما ماشین حساب سایت است که شما میتوانید در ان تمام محاسبات خود را انجام دهید در ضمن شما در سایت ما میتوانید با استفاده از فروشگاه سایت از خرید لوازم خانگی و لوازم گیمینگ با قیمت مناسب و شرایط اقساطی لذت ببرید شما در این سایت هم میتوانید از تمام خبر های علمی و ورزشی و مذهبی مطلع شوید باتشکر از شما ');
}
	
	setTimeout(function(){alert("لطفا از سایت ما حمایت کنید "); },8000);
	
	
	function MyMessage(){
 Swal.fire({
  title: 'ایا از سایت ما راضی هستید؟',
  showDenyButton: true,
  confirmButtonText: 'آره خب',
  denyButtonText: 'نه اصلا',
 }).then((result) => {
  if (result.isConfirmed) {
    document.getElementById("Result").innerHTML = "ممنون بابت انرژی مثبت شما";
  } else if (result.isDenied) {
   document.getElementById("Result").innerHTML = "سعی میکنیم سایت رو بهتر کنیم شماهم خوشتون بیاد";
  }
 });
}
