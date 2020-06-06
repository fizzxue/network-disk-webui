// 使用 Mock

const Mock = require('mockjs')
const data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|20': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'fileId|+1': 1,
        'fileName': '@sentence(1, 1)',
        'fileSize': '@integer(1)',
        'extName': 'dir',
        'updateTime': '@datetime'
    }]
})
Mock.mock('/netWorkDisk/list', data)
