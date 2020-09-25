import path from 'path'
import { RelativeUrlResolver } from '../src/utils/url'

export const RELATIVE_URL_RESOLVER: RelativeUrlResolver = (url) => {
  return path.resolve(__dirname, '../assets', url)
}
