

class Storage{


    static has(key){

      return  localStorage.getItem(key) ? localStorage.getItem(key) : false;
    };

    static get(key){
        return JSON.parse(this.has(key));
    };


    static set(key , value){
        let setdata = [];

        if( this.has(key) ){

            setdata = JSON.parse(this.has(key));
            
        }
        setdata.push(value);
        localStorage.setItem(key, JSON.stringify(setdata));
        
    };


}


export default Storage;