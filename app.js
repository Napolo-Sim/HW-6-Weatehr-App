$(document).ready(function () {
    var apiKey = "44dcd9557c70cf145a53f5245ad9a8da";

    $("#searchBtn").on("click", function (event) {
        event.preventDefault();
        userInput = $("#userSearch").val();
        console.log(userInput);
        $("#userSearch").val("");
        $("#weatherInfo").html("");

        $.ajax({
            type: "GET",
            //Don't forget to add https:// to all of your API URL's
            url: `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${apiKey}`,
            dataType: "json",
        }).then(function (response) {
            console.log(response);

            var cityName = response.name;
            console.log(cityName);

            $("#citySearches").prepend(
                `<li class="list-group-item">${cityName}</li>`
            )


            // var weatherData = response.main.temp;
            // console.log(weatherData);

            // var tempFahrenheit = (weatherData - 273.15) * 9 / 5 + 32;
            // console.log(tempFahrenheit);

            // var tempFWhole = Math.round(tempFahrenheit);
            // console.log(tempFWhole + " Degrees Fahrenheit");

            // $("#weatherInfo").append(
            //     `<h1>${tempFWhole} Degrees Fahrenheit</h1>`
            // )

            //Laptop added?
        })
    })
})

