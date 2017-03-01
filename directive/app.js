/**
 * Created by wxl19 on 2017/1/4.
 */
var app = angular.module('myCards',[])
.directive('myCard',[function () {
    return {
        scope:{
            title:'=myTitle',
            pic:'=myPic',
            content:'@myContent'
        },
        templateUrl:'myCard'
    };
}])