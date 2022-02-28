document.querySelector("#button1").addEventListener("click",getTextFile);
document.querySelector("#button2").addEventListener("click",getJSON);
document.querySelector("#button3").addEventListener("click",getApi);

function getTextFile(){
    fetch("textfile.txt").then(function(response){
        //console.log(response.text());
        return response.text();
    }).then(function(data){
        //console.log(data);
        document.getElementById("output").innerHTML += data;

    })/*.catch(function(err){
        console.log(err);
    })*/ ; 
}

function getJSON(){
    fetch("article.json").then(function(response){
        //console.log(response.text());
        return response.json();
    }).then(function(articles){
        //console.log(articles);
        //document.getElementById("output").innerHTML += data;
        let output = "<ul>";
        articles.forEach(function(article) {
            output += `<li>Baslik ${article.title} - Icerik ${article.body}</li>`
        }) 

        output += "</ul>";
        document.getElementById("output").innerHTML += output;
    });/*.catch(function(err){
        console.log(err);
    });*/  
}

function getApi(){
    fetch("https://api.github.com/users").then(function(response){
        //console.log(response.text());
        return response.json();
    }).then(function(users){
        //console.log(articles);
        //document.getElementById("output").innerHTML += data;
        let output = "<ul>";
        users.forEach(function(user) {
            output += `<li>Kullanici Adi: ${user.login}</li>`
        }) 

        output += "</ul>";
        document.getElementById("output").innerHTML += output;
    });/*.catch(function(err){
        console.log(err);
    });*/  
}