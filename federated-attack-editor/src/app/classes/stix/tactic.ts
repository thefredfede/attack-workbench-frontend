import {StixObject} from "./stix-object";

export class Tactic extends StixObject {
    public name: string;
    public description: string;

    constructor(sdo: any) {
        super(sdo);
        this.name = sdo.name;
        this.description = sdo.description;
    }
}
