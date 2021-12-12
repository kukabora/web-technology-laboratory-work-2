// var deleteBtns = document.querySelectorAll(".custom-btn-red");
// deleteBtns.forEach(element => element.onclick = (e) => {
//     let parentBlock = e.target.parentNode;
//     let underline = parentBlock.nextElementSibling;
//     parentBlock.remove();
//     underline.remove();
// });

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

var userDeletingBtns = document.querySelectorAll(".user-deleting-btn")
userDeletingBtns.forEach(btn => {
    btn.onclick = (e) => {
        let token = getCookie("csrftoken")
        var myHeaders = new Headers();
        myHeaders.append("Cookie", "csrftoken=" + token);

        var formdata = new FormData();
        formdata.append("csrfmiddlewaretoken", token);
        formdata.append("user_id", e.target.parentNode("user_id"));

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };


        fetch("http://127.0.0.1:8000/api/deleteUser", requestOptions)
            .then(response => response.json())
            .then(result => M.toast({ html: '<h5>' + result.msg + '<h5>' }))
            .catch(error => console.log('error', error));
    }
})

var updateAllowingBtn = document.querySelector(".update-allowing-btn")
updateAllowingBtn.onclick = e => {
    var modal = document.querySelector("#user-details")
    modal.querySelectorAll(".user-info-field").forEach(field => {
        field.disabled = false
    })
}


var userUpdateBtns = document.querySelectorAll(".user-update-btn")
userUpdateBtns.forEach(btn => {
    btn.onclick = e => {
        var modal = document.querySelector("#user-details")
        modal.querySelectorAll(".user-info-field").forEach(field => {
            field.disabled = false
        })
        let token = getCookie("csrftoken")
        var myHeaders = new Headers();
        myHeaders.append("Cookie", "csrftoken=" + token);

        var formdata = new FormData();
        formdata.append("csrfmiddlewaretoken", token);
        formdata.append("user_id", e.target.parentNode.getAttribute("user_id"));

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };


        fetch("http://127.0.0.1:8000/api/getUserById", requestOptions)
            .then(response => response.json())
            .then(result => {
                result = JSON.parse(result)
                Object.keys(result[0]['fields']).forEach(key => {
                    try {
                        modal.querySelector("." + key).value = result[0]['fields'][key]
                    } catch (error) {

                    }
                });
                Object.keys(result[1]['fields']).forEach(key => {
                    try {
                        modal.querySelector("." + key).value = result[1]['fields'][key]
                    } catch (error) {}
                });
            })
            .catch(error => console.log('error', error));
    }
})

var userDetailsBtn = document.querySelectorAll(".user-details-btn")
userDetailsBtn.forEach(btn => {
    btn.onclick = (e) => {
        var modal = document.querySelector("#user-details")
        modal.querySelectorAll(".user-info-field").forEach(field => {
            field.disabled = true
        })
        let token = getCookie("csrftoken")
        var myHeaders = new Headers();
        myHeaders.append("Cookie", "csrftoken=" + token);

        var formdata = new FormData();
        formdata.append("csrfmiddlewaretoken", token);
        formdata.append("user_id", e.target.parentNode.getAttribute("user_id"));

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };


        fetch("http://127.0.0.1:8000/api/getUserById", requestOptions)
            .then(response => response.json())
            .then(result => {
                result = JSON.parse(result)
                Object.keys(result[0]['fields']).forEach(key => {
                    try {
                        modal.querySelector("." + key).value = result[0]['fields'][key]
                    } catch (error) {}
                });
                Object.keys(result[1]['fields']).forEach(key => {
                    try {
                        modal.querySelector("." + key).value = result[1]['fields'][key]
                    } catch (error) {}
                });
            })
            .catch(error => console.log('error', error));
    }
})