define(["angular"],function(e){"use strict";e.module("ng-boilerplate.name-service",[]).factory("NameService",function(){return{formatName:function(n){return n=n.split(" "),e.forEach(n,function(e,r){n[r]=e.charAt(0).toUpperCase()+e.substring(1).toLowerCase()}),n.join(" ")}}})});