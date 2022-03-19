export class School {
    public name: string;
    public diplome: string;
    public date_arrival: number;
    public date_departure: number;
    public description: string;
    public logo: string;

    constructor (name: string, diplome:string, date_arrival: number, date_departure: number, description: string, logo: string) {
        this.name = name;
        this.diplome = diplome;
        this.date_arrival = date_arrival;
        this.date_departure = date_departure;
        this.description = description;
        this.logo = logo;
    }
}