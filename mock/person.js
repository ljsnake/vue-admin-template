import Mock from 'mockjs'
import { param2Obj } from '@/utils'

const List = []
let count = 5

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    name: '@first',
    age: '@integer(1, 99)'
  }))
}

export default {
  list: (config) => {
    const { name, page = 1, limit = 20 } = param2Obj(config.url)

    const mockList = List.filter(item => {
      if (name && item.name.indexOf(name) < 0) return false
      return true
    })

    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

    return {
      total: mockList.length,
      'list': pageList
    }
  },
  add: (req) => {
    const item = JSON.parse(req.body)
    console.log(item)
    item.id = count + 1
    count = count + 1
    List.push(item)

    return {
      data: 'success'
    }
  },
  update: (req) => {
    const update_item = JSON.parse(req.body)
    for (const item of List) {
      if (item.id === update_item.id) {
        Object.assign(item, update_item)
        break
      }
    }

    return {
      data: 'success'
    }
  }
}
