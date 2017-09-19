import { mongoose } from 'mongoose';
import { Zone }     from './zone';

export class Area{
    gameName: string;
    referenceName: string;
    descriptionText: string;
    descriptionImage: string;
    listedZones: Zone[];

    private areaSchema;
    private areaModel;

    constructor(){
        this.areaSchema = new mongoose.Schema({
            gameName: String,
            referenceName: String,
            descriptionText: String,
            descriptionImage: String
        });

        this.areaModel = mongoose.model('Area', this.areaSchema);
    }
}