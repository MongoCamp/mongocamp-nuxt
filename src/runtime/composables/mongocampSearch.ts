import { useRuntimeConfig } from '#app'
import type { FindRequest, MongoFindRequest } from '../api'

import { useMongocampApi } from './mongocampApi'

export function useMongocampSearch () {
  const { documentApi } = useMongocampApi()

  const config = useRuntimeConfig()

  const mongoFindRequest = (filter: object = {}, sort: object = {}, projection: object = {}) => {
    return <MongoFindRequest>{ filter, sort, projection }
  }

  const findRequest = (collection: string, searchParameter: MongoFindRequest = mongoFindRequest(), rows: number = config.public.mongocamp?.paginationSize, actualPage = 1) => {
    return <FindRequest>{ collectionName: collection, mongoFindRequest: searchParameter, rowsPerPage: rows, page: actualPage } as FindRequest
  }

  function findAll (collectionName: string, page = 1, sort: string[] | undefined = undefined, projection: string[] | undefined = undefined, rowsPerPage: number = config.public.mongocamp?.paginationSize) {
    return documentApi.listDocuments({ collectionName, sort, projection, page, rowsPerPage })
  }

  function findByField (collectionName: string, field: string, value: string, page = 1, sort: string[] | undefined = undefined, projection: string[] | undefined = undefined, rowsPerPage: number = config.public.mongocamp?.paginationSize) {
    const expression = `${field}: ${value}`
    return documentApi.listDocuments({ collectionName, filter: expression, sort, projection, page, rowsPerPage })
  }

  return { mongoFindRequest, findRequest, findAll, findByField }
}
