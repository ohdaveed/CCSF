     function process() {
            event.preventDefault();
            let num1, num2, num3, n1, n2, n3, sum, ave, product, smallest, largest, result
            num1 = document.getElementById("formGroupInput").value;
            num2 = document.getElementById("formGroupInput2").value;
            num3 = document.getElementById("formGroupInput3").value;


            n1 = parseInt(num1);
            n2 = parseInt(num2);
            n3 = parseInt(num3);

            sum = n1 + n2 + n3;

            ave = sum / 3;

            product = n1 * n2 * n3;

            smallest = Math.min(n1, n2, n3);
            largest = Math.max(n1, n2, n3);

           document.getElementById("FormControlTextarea1").style.display = "none";

            document.getElementById(
                "FormControlTextarea1"
            ).value = `Sum: ${sum}, Average: ${ave}, Product: ${product}, The smallest integers is: ${smallest}, The largest integer is: ${largest}`

            $("#FormControlTextarea1").fadeIn(3000);
        }