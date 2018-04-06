import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { Kproduk } from './../../models/kemaskiniproduk';

@Injectable()
export class SenaraiMakProService {

    private SenaraiMakProRef = this.db.list<Kproduk>('senarai-makpro');

    constructor(private db: AngularFireDatabase){

    }

    getSenaraiMakProList(){
        return this.SenaraiMakProRef;
    }

    addItem(kproduk: Kproduk){
        return this.SenaraiMakProRef.push(kproduk);
    }

    editItem(kproduk: Kproduk){
        return this.SenaraiMakProRef.update(kproduk.key, kproduk);
    }

    removeItem(kproduk: Kproduk){
        return this.SenaraiMakProRef.remove(kproduk.key);
        }
}
