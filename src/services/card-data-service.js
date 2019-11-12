import { UserCard } from "../classes/user-card.js"


class CardDataService {
    constructor(){

    }
    
    loadData(usersObj){
        for(let data of usersObj){
         console.log('hi' + data)
        }
    }
}
