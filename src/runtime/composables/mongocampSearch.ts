import type {FindRequest} from '../api'

import {MongoFindRequest} from "../api";
import {useRuntimeConfig} from "#app";

export const useMongocampSearch = () => {
  const config = useRuntimeConfig()

  const createFindRequest = (collection: string, searchParameter: MongoFindRequest = createSearchParameter(), rows:number = config.mongocamp?.paginationSize, actualPage:number = 1) => {
    const result = <FindRequest>{ collectionName: collection, mongoFindRequest: searchParameter, rowsPerPage: rows, page: actualPage } as FindRequest
    return result
  }

  const createSearchParameter = (filter: object = {}, sort: object = {}, projection: object = {}) => {
    return <MongoFindRequest>{ filter: filter, sort: sort, projection:projection}
  }

  return {createFindRequest, createSearchParameter  }
}
