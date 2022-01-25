import { HTTP } from '@/app.config.js'

export default {
  name: 'dataService',
  getEntityById (entityName, id) {
    var req = {}
    req.entityName = entityName
    req.id = id
    return this._postdata('getEntityByIdRequest', req)
  },

  addUpdateEntityById (entityName, id, mode, data) {
    var req = {}
    req.entityName = entityName
    req.id = id
    req.mode = mode
    req.data = JSON.stringify(data)
    return this._postdata('updateEntityByIdRequest', req)
  },

  getCodeByName (req) {
    return this._postdata('getCodeByNameRequest', req)
  },

  searchPolicy (req) {
    return this._postdata('searchPolicyRequest', req)
  },

  searchActivity (req) {
    return this._postdata('searchActivityRequest', req)
  },

  searchReceipt (req) {
    return this._postdata('searchReceiptRequest', req)
  },

  searchClaim (req) {
    return this._postdata('searchClaimRequest', req)
  },

  searchLetter (req) {
    return this._postdata('searchLetterRequest', req)
  },

  _postdata (action, req) {
    const request = {}
    request.method = 'POST'
    request.requestType = action
    request.data = req
    return HTTP.post('postdata', request)
  }
}
