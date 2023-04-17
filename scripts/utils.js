var api = new API();

class Utils{

    static allOptMsg = "todas (*)";

    static makeHTML(){

        
        let dogapibody = document.getElementById("dogapi");

        //Title
        let title = document.createElement("h2");
        title.innerHTML = "JavaScript Dog API";
        dogapibody.appendChild(title);
        title.classList.add("title");

        //Picture
        dogapibody.appendChild(api.dogPicture);

        //Select
        let select = document.createElement('select');

        let allOpt = document.createElement('option');
        allOpt.value = Utils.allOptMsg;
        allOpt.text = Utils.allOptMsg;

        select.classList.add("select");
        select.id = "select";
        select.add(allOpt);

        dogapibody.appendChild(select);

        //Random button
        let randomButton = document.createElement("button");
        randomButton.innerHTML = "Generar";
        randomButton.classList.add("apiButton");
        randomButton.addEventListener("click", function(){
            api.updateDogPicture();
        });
        dogapibody.appendChild(randomButton);
    }
}