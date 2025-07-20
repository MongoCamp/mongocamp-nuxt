import { AdminApi } from '../api/apis/AdminApi'
import { ApplicationApi } from '../api/apis/ApplicationApi'
import { AuthApi } from '../api/apis/AuthApi'
import { BucketApi } from '../api/apis/BucketApi'
import { CollectionApi } from '../api/apis/CollectionApi'
import { DatabaseApi } from '../api/apis/DatabaseApi'
import { DocumentApi } from '../api/apis/DocumentApi'
import { FileApi } from '../api/apis/FileApi'
import { IndexApi } from '../api/apis/IndexApi'
import { InformationApi } from '../api/apis/InformationApi'
import { JobsApi } from '../api/apis/JobsApi'

import { Configuration } from '../api'

import { useMongocampUrl } from './mongocampUrl'
import { useMongocampStorage } from './mongocampStorage'

export function useMongocampApi() {
  const url = useMongocampUrl()
  const token = useMongocampStorage()

  const configuration = new Configuration({ basePath: url, accessToken: token.value.token })

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
