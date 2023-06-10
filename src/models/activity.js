export default class Activity {
    constructor(userid,sessions){
        this.userid= userid;
        this.sessions=  sessions.map((entry, index) => ({ ...entry, day: index + 1 }));
    }

}