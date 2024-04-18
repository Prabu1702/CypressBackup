const Kfc=require('./classa')
class SujithHome extends Kfc{
    // menuone(){
    //     return 'fries'
    // }
}
var sujith=new SujithHome();
console.log(sujith.menuone())
var kfcsnacks=new Kfc();
console.log(kfcsnacks.menuone())
console.log(kfcsnacks.menutwo())