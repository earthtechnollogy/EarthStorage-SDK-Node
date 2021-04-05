export default class File {
  constructor (
    public id: string,
    public idProject: string,
    public name: string,
    public type: string,
    public size: number,
    public folder: string,
    public token: string,
    public href: string,
    public dateCreated: string
  ) {}
}
