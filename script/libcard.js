var sums=0;
var type3=0,type4=0,type5=0,type6=0;
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
    this.cardPoolMaxSize=(configure)?configure.maxSize:5000;
    this.cardData = [];
    this.cardPool = [];
    this.setCardData = function(data){
        this.cardData = data;
    }
    this.GenerateCards = function(){
        for(var i in this.cardData)
        {
            for(var j=0;j<this.cardData[i].probability*this.cardPoolMaxSize;j++)this.cardPool.push(this.cardData[i]);
        }
        this.cardPool.sort(function(a,b){
            return Math.floor(Math.random()+0.5);
        })
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
            cardList.push(this.cardPool.shift());
        }
        cardList.sort(function(){return Math.floor(Math.random()+0.5)});
        for(var i in cardList)
        {
            this.cardPool.push(cardList[i]);
        }
        return cardList;
    }
    this.getNewRandomCardBeta = function (count){
        var cardList=[];
        for(var i=0;i<count;i++)
        {
            cardList.push(this.cardPool.shift());
        }
        for(var i in cardList)
        {
            //console.log(cardList[i].level)
            if(cardList[i].level==6)this.cardPool.push(this.cardData[0]);
        }
        this.cardPool.sort(function(){return Math.floor(Math.random()+0.5)});
        
        for(let i of cardList)
        {
            if(i.level==3)type3++;
            else if(i.level==4)type4++;
            else if(i.level==5)type5++;
            else if(i.level==6)type6++;
        }
        sums++;
        document.getElementById("data").innerHTML="<span>共"+sums+"抽，"+sums*10+"张，3星"+type3+"张，4星"+type4+"张，5星"+type5+"张，6星"+type6+"张</span><br>";
        //console.log(sums,"th 3:",type3/this.cardPool.length,"4:",type4/this.cardPool.length,"5:",type5/this.cardPool.length,"6:",type6/this.cardPool.length,"sum",this.cardPool.length);
        return cardList;
    }
    return this;
}