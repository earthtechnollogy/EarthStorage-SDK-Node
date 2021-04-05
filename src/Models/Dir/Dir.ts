export default class Dir {
  constructor (
    public name: string,
    public type: string,
    public size: number,
    public folder: string,
    public href: string,
    public dir: Dir[]
  ) {}
}

