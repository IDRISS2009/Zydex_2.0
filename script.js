let lastScrollTop = 0;
        const navbar = document.getElementById("navbar");
        const burgerMenu = document.getElementById("burger-menu");
        const mobileMenu = document.getElementById("mobile-menu");

        window.addEventListener("scroll", () => {
            let scrollTop = window.scrollY;
            if (scrollTop > lastScrollTop) {
                navbar.style.top = "-100px";
            } else {
                navbar.style.top = "20px";
            }
            lastScrollTop = scrollTop;
        });

        burgerMenu.addEventListener("click", () => {
            if (mobileMenu.style.height === "0px" || mobileMenu.style.height === "") {
                mobileMenu.style.height = "200px";
            } else {
                mobileMenu.style.height = "0px";
            }
        });





        document.addEventListener("DOMContentLoaded", () => {
            const burgerMenu = document.querySelector(".burger-menu");
            const mobileMenu = document.querySelector(".mobile-menu");
        
            burgerMenu.addEventListener("click", () => {
                mobileMenu.classList.toggle("show");
            });
        });




    
