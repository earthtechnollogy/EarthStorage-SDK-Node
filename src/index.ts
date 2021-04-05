import Dir from './Models/Dir/Dir'
import File from './Models/File/File'
import Environment from './Core/Environment'
import FilesRequest from './Request/FilesRequest'

export default class EarthStorage {
  public files = new FilesRequest()

  public setApiKey (apiKey: string) {
    Environment.setApiKey(apiKey)
  }
}

export { File, Dir }
