
class auto {
  marks:string;
  year:number;
  color:string;
  price:number
 /***************************** */ 
  constructor(){
  
     var marki:Array<any> = ['mercedes','audi','bmw'];
     var zveta:Array<any> = ['red','white','green','black'];
     const base_price=5000;
    
      this.marks=marki[Math.round(Math.random()*(marki.length -1) )];
      this.year=2000+Math.round(Math.random()*20);
      this.color=zveta[Math.round(Math.random()*(zveta.length-1))];
      this.price=base_price;
  }
//**************************** */
  getInfoCard() {
    return `  
      <div class="card" style="width: 18rem;">
    <img src="data:image/jpeg;base64,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" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${this.marks}</h5>
      <p class="card-text">${this.year}+${this.color}</p>
      <a href="#" class="btn btn-primary">${this.getPrice()}</a>
      </div>
      </div>
  `
  //   "marka->"+ this.marks + "year->" +this.year + "colour->" +this.color + "price->" +this.price;         
          
  }
//*************************** */
  getInfoTable() {
    return `
    <thead>
          <tr>
             <td>MARKA</td>
             <td>COLOR</td>
             <td>PRICE</td>
             <td>YEAR</td> 
          </tr>
        </thead>
            
        <tr>
          <td>${this.marks}</td>
          <td>${this.color}</td>
          <td>${this.getPrice()}</td>
          <td>${this.year}</td>
        </tr>

        <p>
        </p>

       `

    

  }
//*************************** */
  getPrice():string { ///
        
        var bgpr:number;
        var geny:number;
        

         geny=2020;
         bgpr=this.price;
       
          if (this.color == 'red'){
              bgpr += 0.25*this.price;
          }
   
        if (this.marks=='bmw'){
            bgpr=+2000+this.price
        }

        if (this.color=='audi'){
            bgpr=+1000+this.price
        }

        if (this.color=='mercedes'){
            bgpr=+2500+this.price
        }
        if (this.year<2020){
         bgpr-=this.price*(2020-this.year)*0.02;
        }
           return bgpr.toString(); 
  }
 
}
 

//document.addEventListener('DOMContentLoaded',function(){

    //var cnt = document.querySelector("#cnt");
    /*+-------------------*/

    //for (var i = 0; i < 9; i++) {
      //  let v:auto = new auto();   
        //cnt.innerHTML +=v.getInfoCard(); 
     //}

    
//})

//--------------------------

//document.addEventListener('DOMContentLoaded',function(){

  //var cnc = document.querySelector("#cnc");
  /*+-------------------*/

  //for (var i = 0; i < 9; i++) {
     //let v:auto = new auto();   
    //cnc.innerHTML +=v.getInfoTable(); 
   //}

  
//})

 
let t1=document.querySelector('#alerttable');
  t1.addEventListener('click',function(){
    var cnc = document.querySelector("#cnc");
    /*+-------------------*/
  
    for (var i = 0; i < 9; i++) {
       let v:auto = new auto();   
      cnc.innerHTML +=v.getInfoTable(); 
     }
  })


  let t2=document.querySelector('#alertcard');
  t2.addEventListener('click',function(){
    var cnt = document.querySelector("#cnt");
  /*+-------------------*/

  for (var i = 0; i < 9; i++) {
     let v:auto = new auto();   
    cnt.innerHTML +=v.getInfoCard(); 
   }
  })
