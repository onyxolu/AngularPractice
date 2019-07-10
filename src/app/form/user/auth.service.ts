import { Injectable } from "@angular/core";
import { Iuser } from './user';
import { EnumServiceItem } from './test';

@Injectable()

export class AuthService {
    currentUser: Iuser;
    userObj: EnumServiceItem[];

    loginUser( userName: string, password: string){
        this.currentUser = {
            id: 2,
            firstName: "John",
            lastName: "papa",
            userName: userName

        }
    }


    fxn(obj: EnumServiceItem[]){
        this.userObj = [
            { id: 0, label: 'CId', key: 'contentId' },
            { id: 1, label: 'Modified By', key: 'modifiedBy' },
            { id: 2, label: 'Modified Date', key: 'modified' },
            { id: 3, label: 'Status', key: 'contentStatusId' },
            { id: 4, label: 'Status > Type', key: ['contentStatusId', 'contentTypeId'] },
            { id: 5, label: 'Title', key: 'title' },
            { id: 6, label: 'Type', key: 'contentTypeId' },
            { id: 7, label: 'Type > Status', key: ['contentTypeId', 'contentStatusId'] }
        ];
    }
}