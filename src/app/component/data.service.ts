import {Injectable} from '@angular/core';
import {dataStore} from './dataStore';


@Injectable()
export class DataService extends dataStore{

    constructor(){
        super();
        this.data();
       
    }
    getData(){
         let files=JSON.parse(localStorage.getItem('files'));
       console.log("data length" + files.top[0] );
        return files;
    }

 
  }