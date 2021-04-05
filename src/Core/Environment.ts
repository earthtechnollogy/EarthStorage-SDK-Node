let _apiKey: string
const _endpoint = 'https://storage.earthapis.com'

export default class Environment {
  static setApiKey (apiKey: string) {
    _apiKey = apiKey
  }

  static getApiKey (): string {
    return _apiKey
  }

  static getEndPoint (): string {
    return _endpoint
  }
}
