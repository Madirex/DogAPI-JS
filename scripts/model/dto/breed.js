class Breed{
    constructor(name,subbreeds){
        this._name = name;
        this._subbreeds = subbreeds;
    }

    get name(){
        return this._name;
    }

    get subbreeds(){
        return this._subbreeds;
    }
}