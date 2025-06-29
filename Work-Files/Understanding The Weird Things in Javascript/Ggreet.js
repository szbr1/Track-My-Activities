(function(global, $){
   
    const Greeter = function(firstName,lastName,language){
        return new Greeter.init(firstName,lastName, language )

    }

    Greeter.prototype = {}

    Greeter.init = function(firstName,lastName,language){
       this.firstName = firstName || ""
       this.lastName = lastName || ""
       this.language = language || "en"
    };
  
     Greeter.prototype.init = Greeter.prototype;

     const Cover = (color,paint)=>{
       return new Cover.pic(color,paint)
     };

     Cover.pic = function(color , paint){
         this.color = color || ""
         this.paint = paint || ""
     };

     Greeter.Cover = Cover

    global.Greeter = global.G$ = Greeter

})(window, jQuery) ,{

}