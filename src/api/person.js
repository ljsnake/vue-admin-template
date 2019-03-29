import request from '@/utils/request'

export function queryPage(query) {
  return request({
    url: '/person/list',
    method: 'get',
    params: query
  })
}

export function add(data) {
  return request({
    url: '/person/add',
    method: 'post',
    data
    // ,
    // contentType: 'application/json',
    // dataType: 'json'
  })
}

export function update(data) {
  return request({
    url: '/person/update',
    method: 'post',
    data
  })
}
