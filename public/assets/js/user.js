window.onload = function(){

    var btn_users = document.querySelector("#btn-users");
    var div_users = document.querySelector("#div-users");
    var xhttp = new this.XMLHttpRequest();

    btn_users.onclick = function(){

        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){

                var users = JSON.parse(this.responseText);

                var table = `<table class='table table-striped'>`;
                table += `<thead><tr><td>ID</td><td>Nome</td><td>Email</td></tr></thead>`;
                table += `<tbody>`;

                users.forEach(function(user){
                    table += `<tr>`;
                    table += `<td>${user.id}</td>`;
                    table += `<td>${user.name}</td>`;
                    table += `<td>${user.email}</td>`;
                    table += `</tr>`;
                });

                table += `</tbody>`;

                div_users.innerHTML = table;
                
            }
        }


        xhttp.open('GET', 'public/ajax/user.php', true);
        xhttp.send();    
    }

}