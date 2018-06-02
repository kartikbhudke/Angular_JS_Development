angular.module('GoodMorningApp',[]).controller('GoodMorningCtrl',function () {
    this.username = "";
    this.times = "";
    this.timesArray = [];
    this.getTimes = function () {
        if(this.times ===null){
            this.timesArray = [];
        }
        else{
            this.timesArray = [];
            for(var i=0; i<= this.times; i++) {
                this.timesArray[i] = i;
            }
        }
    }
});