import {
  AdminApi,
  AuthApi,
  BucketApi,
  CollectionApi,
  Configuration,
  DatabaseApi,
  DocumentApi,
  FileApi,
  IndexApi,
  InformationApi,
} from '../api'

import { useMongocampUrl } from './mongocampUrl'
import { useMongocampToken } from './mongocampToken'

export const useMongocampApi = () => {
  const url = useMongocampUrl()
  const token = useMongocampToken()

  const configuration = new Configuration({ basePath: url, accessToken: token.value })

  const adminApi = new AdminApi(configuration)
  const authApi = new AuthApi(configuration)
  const bucketApi = new BucketApi(configuration)
  const collectionApi = new CollectionApi(configuration)
  const databaseApi = new DatabaseApi(configuration)
  const documentApi = new DocumentApi(configuration)
  const fileApi = new FileApi(configuration)
  const indexApi = new IndexApi(configuration)
  const informationApi = new InformationApi(configuration)

  return {
    adminApi,
    authApi,
    bucketApi,
    collectionApi,
    databaseApi,
    documentApi,
    fileApi,
    indexApi,
    informationApi,
  }
}
