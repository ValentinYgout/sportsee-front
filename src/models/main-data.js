export default class MainData {
    constructor(id,userInfos,score,KeyData){
        this.id= id;
        this.userInfos=userInfos
        
        this.score=[
            { name: 'Progress', score: score*100 }
          ]
        this.keyData=KeyData
    }

}