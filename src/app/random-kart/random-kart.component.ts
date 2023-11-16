import { Component, Input, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { OptionsService } from '../services/options.service';
import MarioKartJson from '../../assets/MarioKartIconsAndData.json';
import { MarioKartData, VehiclePart } from '../models/marioKartData.model';
import { Options } from '../models/options.model';
import { Selection } from '../models/selection.model'
import { Base } from '../models/base.model';

@Component({
    selector: 'app-random-kart',
    templateUrl: './random-kart.component.html',
    styleUrls: ['./random-kart.component.scss']
})
export class RandomKartComponent implements OnInit {
    private unsubscribeSubject: Subject<boolean> = new Subject<boolean>;
    private playerImgs = {
        p1: 'https://i.imgur.com/lyIvwVJ.png',
        p2: 'https://i.imgur.com/xztxn4W.png',
        p3: 'https://i.imgur.com/2r0rKF3.png',
        p4: 'https://i.imgur.com/aaSTw5Q.png'
    }
    private options: Options = {
        allowMii: false,
        allowBikes: true,
        allowKarts: true,
        allowQuads: true,
        allowGolds: true,
        allowDupes: false,
        localiseNames: true
    };
    public randomKart: Selection = {
        character: {
            name: "",
            imageURL: ""
        },
        kart: {
            type: "",
            body: "",
            bodyURL: "",
            tires: "",
            tiresURL: "",
            glider: "",
            gliderURL: ""
        }
    };
    private data: MarioKartData = MarioKartJson;
    public playerNumberImg = '';

    // player number character name
    private selections: Selection[] = [];

    @Input() playerNumber: number = 0;

    constructor(private optionsService: OptionsService) { }

    ngOnInit(): void {
        this.optionsService.options.pipe(takeUntil(this.unsubscribeSubject)).subscribe(o => {
            this.options = o;
        });
        this.optionsService.selectionsArray.pipe(takeUntil(this.unsubscribeSubject)).subscribe((sel: Selection[]) => {
            this.selections = sel;
            this.generateSelection();
        });
        this.playerNumberImg = eval('this.playerImgs.p' + this.playerNumber);
        this.generateSelection();
    };
    ngOnDestroy() {
        this.unsubscribeSubject.next(true);
        this.unsubscribeSubject.unsubscribe;
    };

    private generateSelection() {
        if (this.selections.length == this.playerNumber - 1) {
            let selection = this.randomKart;
            this.randomKart.kart = this.randomizeKart();
            this.randomKart.character = this.randomizeCharacter();
            selection = this.randomKart;
            this.optionsService.selectionMade(this.playerNumber,selection);
        }
    }

    private randomizeKart() {

        let body = this.getKartComponent('body','bodies');
        let tire = this.getKartComponent('tires','tires');
        let glider = this.getKartComponent('glider','gliders');

        if (this.options.localiseNames) {
            switch (tire.name) {
                case 'Standard':
                    tire.name = 'Normal'
                    break;
                case 'Wood':
                    tire.name = 'Wooden'
                    break;
                case 'Blue Standard':
                    tire.name = 'Normal Blue'
                    break;
                case 'Hot Monster':
                    tire.name = 'Funky Monster'
                    break;
                case 'Gold Standard':
                    tire.name = 'Gold'
                    break;
            }
            if (body.type === 'ATV') {
                body.type = 'Quad';
            }
        }

        const kart = {
            type: body.type,
            body: body.name,
            bodyURL: body.imageURL,
            tires: tire.name,
            tiresURL: tire.imageURL,
            glider: glider.name,
            gliderURL: glider.imageURL
        };
        return kart;
    }

    private getKartComponent(part:string, plural:string){
        let component:(VehiclePart);
        component = eval('this.data.vehicles.' + plural + '[Math.floor(Math.random() * this.data.vehicles.' + plural + '.length)]');
        let invalid = this.checkComponentValidity(component, part);
        // let valid = this.selections.find(o => (eval('o.kart.' + part) == component.name)) != undefined ? false : true;
        while (invalid) {
            component = eval('this.data.vehicles.' + plural + '[Math.floor(Math.random() * this.data.vehicles.' + plural + '.length)]');
            invalid = this.checkComponentValidity(component, part);
        }
        return component;
    }

    private checkComponentValidity(component: Base, part: string): boolean {
        let invalid = false;
        if (part === 'body') {
            if (!this.options.allowBikes) {
                invalid = component.type === 'Bike' ? true : false;
                if (invalid) {return true}
            }
            if (!this.options.allowKarts) {
                invalid = component.type === 'Kart' ? true : false;
                if (invalid) {return true}
            }
            if (!this.options.allowQuads) {
                invalid = component.type === 'Quad' ? true : false;
                if (invalid) {return true}
            }
        }
        if (!this.options.allowGolds) {
            invalid = component.name.includes("Gold") ? true : false;
            if (invalid) {return true}
        }
        if (!this.options.allowDupes) {
            invalid = this.selections.find(o => (eval('o.kart.' + part) == component.name)) != undefined ? true : false;
            if (invalid) {return true}
        }
        return invalid;
    }

    private randomizeCharacter() {
        let characterInvalid = true;

        let character = {
            name: '',
            imageURL: ''
        };

        while (characterInvalid) {
            const randomNumber = Math.floor(Math.random() * this.data.characters.length)
            const randomCharacterObject = this.data.characters[randomNumber]
            if (randomCharacterObject.altColors?.length != 0 && randomCharacterObject.altColors != null) {
                const i = Math.floor(Math.random() * randomCharacterObject.altColors.length)
                character = {
                    name: randomCharacterObject.altColors[i].name + ' ' + randomCharacterObject.name,
                    imageURL: randomCharacterObject.altColors[i].imageURL
                };
            } else {
                character = {
                    name: randomCharacterObject.name,
                    imageURL: randomCharacterObject.imageURL
                }
            }
            characterInvalid = this.checkCharacterValidity(character);
        
        }
        return character;
    }

    private checkCharacterValidity(character: Base): boolean {
        let invalid = false;
        if (!this.options.allowMii) {
            if (character.name == "Mii") {
                return true;
            }
        }
        if (!this.options.allowGolds && character.name === "Gold Mario") {
            return true;
        }
        if (!this.options.allowDupes) {
            invalid = this.selections.find(o => o.character.name === character.name) != undefined ? true : false;
        }
        return invalid;
    }
}
