import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { Produk } from './../../models/produk.model';

@Injectable()
export class SenaraiProdukService {

    private SenaraiProdukRef = this.db.list<Produk> ('senarai-produk');

    constructor(private db: AngularFireDatabase){

    }

    getSenaraiProduk(){
        return this.SenaraiProdukRef;
    }

    addItem(produk: Produk){
        return this.SenaraiProdukRef.push(produk);
    }
}