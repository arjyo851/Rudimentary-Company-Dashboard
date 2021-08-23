var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        }

        var eButton = document.querySelectorAll("button");
        var isPink = false;//using white and pink in this example

        eButton.addEventListener("click", function () {
            if (isPink) {
                document.body.style.background = "white";
            }
            else {
                document.body.style.background = "pink";
            }
            isPink = !isPink; //switches between true and false
        });

        