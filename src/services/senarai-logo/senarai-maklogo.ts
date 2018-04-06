import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { Klogo } from './../../models/kemaskinilogo';

@Injectable()
export class SenaraiLogoService {

    private senaraiLogoRef = this.db.list<Klogo>('senarai-maklogo');

    constructor (private db: AngularFireDatabase) {}

    getSenaraiLogo(){
        return this.senaraiLogoRef;
    }

    addItem(klogo: Klogo){
        return this.senaraiLogoRef.push(klogo);
    }

    editItem(klogo: Klogo){
        return this.senaraiLogoRef.update(klogo.key, klogo);
    }

    removeItem(klogo: Klogo){
        return this.senaraiLogoRef.remove(klogo.key);
        }
}