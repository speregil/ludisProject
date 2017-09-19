import { mongoose }         from 'mongoose';
import { Injectable }       from '@angular/core';
import { Headers, Http }    from '@angular/http';

@Injectable()
export class MapService {

    constructor(){ 
        mongoose.connect('mongodb://localhost/myDB');
    }
}