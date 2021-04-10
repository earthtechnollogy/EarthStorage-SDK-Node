import Api from '../Core/Api'
import Dir from '../Models/Dir/Dir'

const api = new Api()

interface AddFile {
  name: string,
  type: string,
  folder?: string,
  dataUrl: string
}

interface UpdateDir {
  name: string,
  type: string,
  folder?: string
}

export default class DirRequest {
  static async list (folder?: string): Promise<Dir[]> {
    if (!folder) folder = ''
    return api.get<Dir[], null>('dir', null, { query: { folder } })
  }

  static async listFull (folder?: string): Promise<Dir[]> {
    if (!folder) folder = ''
    return api.get<Dir[], null>('dir/full', null, { query: { folder } })
  }

  static async add (dir: AddFile | UpdateDir): Promise<string> {
    const data = await api.post<any, AddFile | UpdateDir>('dir', dir)
    return data.message
  }

  static async delete (dir: UpdateDir): Promise<string> {
    const data = await api.delete<any, UpdateDir>('dir', dir)
    return data.message
  }
}

