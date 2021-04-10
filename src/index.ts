import Dir from './Models/Dir/Dir'
import File from './Models/File/File'
import Environment from './Core/Environment'
import DirRequest from './Request/DirRequest'
import FilesRequest from './Request/FilesRequest'

export default class EarthStorage {
  public dir = DirRequest
  public files = FilesRequest

  public setApiKey (apiKey: string) {
    Environment.setApiKey(apiKey)
  }
}

export { File, Dir }
