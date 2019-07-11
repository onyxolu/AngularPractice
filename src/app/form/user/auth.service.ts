import { Injectable } from "@angular/core";
import { Iuser } from './user';
import { EnumServiceItem } from './test';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    currentUser: Iuser;
    userObj: EnumServiceItem[];
    users: Iuser[] = [
        {
            id: 1,
            firstName: "Olumide",
            lastName: "Ogundare",
            userName: "onyx",
            password: "-1362954923"
        },
        {
            id: 2,
            firstName: "Adewale",
            lastName: "Adeyemi",
            userName: "ade",
            password: "-1146623643"
        },
        {
            id: 3,
            firstName: "Seyike",
            lastName: "Anjorin",
            userName: "seyi",
            password: "-905630276"
        },
        {
            id: 4,
            firstName: "Ayoola",
            lastName: "Ayoade",
            userName: "akc",
            password: "1976057773"
        }
    ]

    LoginDetailsCheck(details): boolean {
        console.log(typeof(this.users));
        this.users.map((item) => {
            if((details.username == item.userName) && (details.password == item.password)){
                this.currentUser = item;
            }
        }) 
        if(this.currentUser){
            return true;
        } else{
            return false;
        }
    }

    // loginUser( userName: string, password: string){
    //     this.currentUser = {
    //         id: 2,
    //         firstName: "John",
    //         lastName: "papa",
    //         userName: userName,
    //         password: password,

    //     }
    // }


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