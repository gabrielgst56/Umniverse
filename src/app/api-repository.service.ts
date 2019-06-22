import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Station } from './models/station';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class APIRepository {

  constructor(private db: AngularFireDatabase) { }

  public Station: Station;

  listStations() {
    return this.db.list('Station')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        })
      );
  }

  addStation(station: Station): boolean {
    this.db.list('Station').push(station)
      .then((result: any) => {
        return true;
      }).catch((error: any) => {
        return false;
      });

    return true;
  }

  deleteStation(station: Station) {
    this.db.object(`Station/${station.key}`).remove();
  }

  editStation(station: Station) {
    debugger;
    this.db.object(`Station/${station.key}`).update(station)
      .then((result: any) => {
        return true;
      }).catch((error: any) => {
        return false;
      });

    return true;
  }

}
