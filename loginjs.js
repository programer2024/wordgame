document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("container");

    // بررسی وجود اطلاعات کاربر در localStorage
    if (localStorage.getItem("username")) {
        container.classList.add("sign-in-mode");
    }

    // سوئیچ بین فرم ورود و ثبت‌نام
    window.toggle = function () {
        container.classList.toggle("sign-in-mode");
    };

    // عملکرد ثبت‌نام
    const signUpButton = document.querySelector(".sign-up button");
    signUpButton.addEventListener("click", function () {
        const username = document.querySelector(".sign-up input[type='text']").value;
        const email = document.querySelector(".sign-up input[type='email']").value;
        const password = document.querySelector(".sign-up input[type='password']").value;

        // بررسی مقادیر ثبت‌نام برای تکراری بودن
        const storedUsername = localStorage.getItem("username");
        const storedEmail = localStorage.getItem("email");

        if (username === storedUsername) {
            alert("این نام کاربری قبلاً ثبت شده است!");
        } else if (email === storedEmail) {
            alert("این ایمیل قبلاً ثبت شده است!");
        } else if (username && email && password) {
            // ذخیره اطلاعات جدید در localStorage
            localStorage.setItem("username", username);
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);
            alert("ثبت‌نام با موفقیت انجام شد! حالا می‌توانید وارد شوید.");
            container.classList.add("sign-in-mode");
        } else {
            alert("لطفاً تمام فیلدها را پر کنید!");
        }
    });

    // عملکرد ورود
    const signInButton = document.querySelector(".sign-in button");
    signInButton.addEventListener("click", function () {
        const username = document.querySelector(".sign-in input[type='text']").value;
        const password = document.querySelector(".sign-in input[type='password']").value;

        const storedUsername = localStorage.getItem("username");
        const storedPassword = localStorage.getItem("password");

        if (username === storedUsername && password === storedPassword) {
            alert("ورود با موفقیت انجام شد!");
        } else {
            alert("نام کاربری یا رمز عبور اشتباه است!");
        }
    });
});
