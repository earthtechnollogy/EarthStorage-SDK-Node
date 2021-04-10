import Api from '../Core/Api'

const api = new Api()

export default class FilesRequest {
  static async get (href: string): Promise<Blob> {
    return api.get<Blob, null>(href, null, { responseType: 'blob' })
  }
}
