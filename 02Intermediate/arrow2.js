let camera={
    name:"DSLR",
    price:56000,
    mp:12,
    myDes:function(){
        return `The name of Camera is =${this.name} and Price is ${this.price}`
    }
}
console.log(camera.myDes())