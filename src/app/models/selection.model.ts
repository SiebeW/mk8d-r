import { Base } from "../models/base.model.js";

interface Kart {
    type: string;
    body: string;
    bodyURL: string;
    tires: string;
    tiresURL: string;
    glider: string;
    gliderURL: string;
}

export class Selection {
    public character: Base = { name: '', imageURL: '' };
    public kart: Kart = {
        type: '',
        body: '',
        bodyURL: '',
        tires: '',
        tiresURL: '',
        glider: '',
        gliderURL: ''
    }

    constructor(character: Base[], kart: Kart) {
        Object.assign(this, character, kart);
    }
}