import Api from '../Core/Api'
import Dir from '../Models/Dir/Dir'

const api = new Api()

interface AddFile {
  name: string,
  type: string,
  folder?: string,
  dataUrl: string
}

export default class FilesRequest {
  static async list (folder?: string): Promise<Dir[]> {
    if (!folder) folder = ''
    return api.get<Dir[], any>('files/list', null, { query: { folder } })
  }

  static async listFull (folder?: string): Promise<Dir[]> {
    if (!folder) folder = ''
    return api.get<Dir[], any>('files/list-full', null, { query: { folder } })
  }

  static async add (file: AddFile): Promise<string> {
    const data = await api.get<any, AddFile>('files/upload', file)
    return data.message
  }
}

