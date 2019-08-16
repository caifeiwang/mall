import {request} from './request'

export function getHomeData() {
  return request({
    url: '/example/home'
  })
}

export function getHomeGoods(type,page) {
  return request({
    url: '/example/home/data',
    params: {
      type,
      page
    }
  })
}