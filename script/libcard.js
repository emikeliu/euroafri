function Card(name,face,level,probability)
{
    this.name=name;
    this.face=face;
    this.level=level;
    this.probability=probability;
    return Card;
}
function CardFactory(configure)
{
    this.__isUndefined=function(obj){
        return typeof(obj)==="undefined";
    }
    const cardPoolMaxSize=(configure)?configure.maxSize:10000;
    this.cardData = [];
    this.cardPool = [];
    this.setCardData = function(data){
        this.cardData = data;
    }
    this.GenerateCards = function(){
        for(var i in this.cardData)
        {
            for(var j=0;j<this.cardData[i].probability*cardPoolMaxSize;j++)this.cardPool.push(this.cardData[i]);
        }
        /*this.cardPool.sort(function(a,b){
            return Math.floor(Math.random()+0.5);
        })*/
        var size=this.cardPool.length;
        for(var i in this.cardPool)
        {
            var index=Math.round(Math.random()*(size-1));
            var temp=this.cardPool[index];
            this.cardPool[index]=this.cardPool[i];
            this.cardPool[i]=temp;
        }
        return this.cardPool;
    }
    this.getNewRandomCard = function (count){
        var cardList=[];
        for(var i=0;i<count;i++)
        {
            cardList.push(this.cardPool.pop());
        }
        cardList.sort(function(){return Math.floor(Math.random()+0.5)});
        for(var i in cardList)
        {
            this.cardPool.push(cardList[i]);
        }
        return cardList;
    }
    return this;
}