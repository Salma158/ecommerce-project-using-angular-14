export class product{
  id : number;
  name : string;
  price : number;
  url : string;
  description :string;
  item: any;

constructor(id:number, name:string, price:number, url:string, description:string ){
  this.id=id;
  this.name = name;
  this.price=price;
  this.url=url;
  this.description=description;
}

}
