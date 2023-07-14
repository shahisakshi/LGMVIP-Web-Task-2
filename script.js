$(document).ready(function () {
    $("#btn").click(function (event) {

        var nav= document.querySelector(".nav");
        nav.classList.add("hide");

        var container= document.querySelector(".container");
        container.classList.remove("hide");

        $.getJSON('https://reqres.in/api/users?page=1', function (api) {
            // alert(api.data[0].id)
            // var api=api
            var image = Array.from(document.getElementsByClassName("image"))
            var name = Array.from(document.getElementsByClassName("name"))
            var email = Array.from(document.getElementsByClassName("email"))

            image.map((e,i) => {
                // console.log(api.data[0].avatar)
                e.setAttribute('src', api.data[i].avatar)
            })
            $(".name").map((e,i) => {
                i.setAttribute('value', `${api.data[e].first_name} ${api.data[e].last_name}`)
            })

            $(".email").map((e,i) => {
                i.setAttribute('value', api.data[e].email)
            })
        });
    });
});

