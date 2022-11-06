// Title: Assignment 3.2 Passing Data to routes, Part 1
// Author: Prof Krasso
// Date: Nov 6 2022
// Modified: Detres
// Description: Assignment 3.2 Passing Data to routes, Part 1
//Week-3 exercises/videos
//https://www.npmjs.com/package/bootstrap-icons
//https://angular.io/api/router/RouterLink
//https://angular.io/tutorial/toh-pt5
//https://stackoverflow.com/questions/
//41370760difference-between-routerlink-and-routerlink
//https://stackoverflow.com/questions/56271351/how-to-get-id-from-the-url-using-snapshot-or-activatedroute-subscriber-in-angula
//https://www.tabnine.com/code/javascript/functions/%40angular%2Frouter/ParamMap/get

// importing of IComposer Interface
import { IComposer } from './composer.interface';

// create and export Composer class
export class Composer {
  composers: Array<IComposer>;

  constructor() {
    this.composers = [
      {
        composerId: 1001,
        fullName: 'Robi Draco',
        genre: 'Grunge',
      },
      {
        composerId: 1002,
        fullName: 'Aaron Copland',
        genre: 'Folk',
      },
      {
        composerId: 1003,
        fullName: 'Anton Bruckner',
        genre: 'Classical',
      },
      {
        composerId: 1004,
        fullName: 'Hans Zimmer',
        genre: 'New Age',
      },
      {
        composerId: 1005,
        fullName: 'John Rutter',
        genre: 'Classical',
      },
    ];
  }

  getComposers() {
    return this.composers;
  }

  getComposer(composerId: number): IComposer {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
    return {} as IComposer;
  }
}
