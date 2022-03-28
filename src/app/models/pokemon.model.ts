export class Pokemon {
    constructor(
        public id:number,
        public name: string,
        public image:string,	
        public attack:string,	
        public defense:string,	
        public idAuthor: number,
        public type?:string,
        public hp?:string,
    ){}
}