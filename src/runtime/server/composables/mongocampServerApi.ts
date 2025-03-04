import {
  AdminApi,
  ApplicationApi,
  AuthApi,
  BucketApi,
  CollectionApi,
  Configuration,
  DatabaseApi,
  DocumentApi,
  FileApi,
  IndexApi,
  InformationApi,
  JobsApi,
} from '../../api'

export function useMongocampServerApi(url: string, key?: string, token?: string) {
  let configuration = new Configuration()

  if (key && key.length > 0)
    configuration = new Configuration({ basePath: url, apiKey: key })
  else if (token && token.length > 0)
    configuration = new Configuration({ basePath: url, accessToken: token })

  console.log(configuration)

  const adminApi = new AdminApi(configuration)
  const applicationApi = new ApplicationApi(configuration)
  const authApi = new AuthApi(configuration)
  const bucketApi = new BucketApi(configuration)
  const collectionApi = new CollectionApi(configuration)
  const databaseApi = new DatabaseApi(configuration)
  const documentApi = new DocumentApi(configuration)
  const fileApi = new FileApi(configuration)
  const indexApi = new IndexApi(configuration)
  const informationApi = new InformationApi(configuration)
  const jobApi = new JobsApi(configuration)

  return {
    adminApi,
    applicationApi,
    authApi,
    bucketApi,
    collectionApi,
    databaseApi,
    documentApi,
    fileApi,
    indexApi,
    informationApi,
    jobApi,
  }
}
