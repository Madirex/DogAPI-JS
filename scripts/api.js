class API{
    static URL = "https://dog.ceo/api/breeds/image/random";
    static URL_BREEDS = "https://dog.ceo/api/breeds/list/all";
    static URL_BREED1 = "https://dog.ceo/api/breed/";
    static URL_BREED2 = "/images/random";

    constructor(){
        this._dogPicture = document.createElement("img");
        this.breeds = [];
        this.initDogPicture();
        this.setAllbreeds();
    }

    get dogPicture(){
        return this._dogPicture;
    }

    async setAllbreeds(){
        let res = await fetch(API.URL_BREEDS);
        let data = await res.json();
        let breeds = [];
        Object.entries(data.message).forEach(function(e){
            breeds.push(new Breed(e[0],e[1]));

            let opt = document.createElement('option');
            opt.value = e[0];
            opt.text = e[0];
            document.getElementById("select").add(opt); //add to select
        });
        this.breeds = breeds;
        console.log(this.breeds);
    }

    initDogPicture(){
        this.updateDogPicture();
        this.dogPicture.classList.add("dogImg");
    }

    updateDogPicture(){
        let select = document.getElementById("select");
        let index = 0;

        if (select != null){
            index = select.selectedIndex;
        }

        if (index == 0){
            this.updateDogPicAll();
        }else{
            this.updateDogPicBreed(select.options[index].value);
        }
    }

    async updateDogPicAll(){
        let res = await fetch(API.URL);
        if (res.ok){
            let data = await res.json();
            this.dogPicture.src = data.message;
        }
    }

    async updateDogPicBreed(breed){
        let res = await fetch(API.URL_BREED1 + breed + API.URL_BREED2);
        if (res.ok){
            let data = await res.json();
            this.dogPicture.src = data.message;
        }
    }
}