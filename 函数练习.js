//判断质数
function isPrime(n) {
  for (let i = 2; i * i <= n; i++){
    if (n % i == 0) {
      return false
    }
  }
    return true
}

//与7有关的数
function qiao7(n) {
  let dig
  if (n % 7 == 0)
    return true
  while (n > 0) {
    dig = n % 10
    n = (n - dig) / 10
    if (dig == 7)
      return true
  }
  return false
}

// 斐波那契数列
function fibb(n) {
  let a = 0
  let b = 1
  for (; n > 0; n--){
    b = a + b
    a = b - a
  }
  return a
}

//计算数字位宽
function digitWidth(n) {
  let w = 0
  do {
    w++
    let dig = n % 10
    n = (n - dig) / 10
  } while (n > 0)
  return w
}

//平方根2分法
function sqrt(n) {
  let left = 0
  let right = n
  let mid

  do {
     mid = (left + right) / 2

    if (mid * mid < n) {
      left = mid
    } else if (mid * mid > n) {
      right = mid
    } else {
      return mid
    }
  } while (Math.abs(mid * mid - n) > 0.0001)

  return mid
}

//平方根牛顿法  (平方根倒数速算法之前的神)
function sqrt(n) {
  let x = n
  while (Math.abs(x * x - n) > 0.00001) {
    x = x / 2 + n / 2 / x
  }
  return x
}

//计算某年某月星期几
function weekday(year, month) {
  let day = 0

  for (let y = 1; y < year; y++) {
    if (isLeapYear(n)) {
      day += 366
    } else {
      day += 365
    }
  }
  for (let m = 1; m < month; m++){
    day += getMonthDay(year, m)
  }

  return day + 1 % 7
}

//计算月份天数
function md (y, m) {
  switch (m) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31
      break
    case 2:
      if (isLeapYear(year))
        return 29
      else
        return 28
      break
    default:
      return 30
  }
}

//263丑数
if (n < 1)
  return false
while (n % 2 == 0) {
  n = n / 2
}
while (n % 3 == 0) {
  n = n / 3
}
while (n % 5 == 0) {
  n = n / 5
}
return n == 1

//submissions
function factorial(x) {
  if (x == 0)
    return 1
  else
    return factorial(x - 1) * x
}

//斐波那契数列递归
function fibb(n) {
  if (n < 3)
    return 1
  else
    return fibb(n - 1) + fibb(n - 2)
}

//指数递归
function power(a, n) {
  if (n == 0) {
    return 1
  } else {
    return a * power(a, n - 1)
  }
}

//输入N个数并反向输出递归
function inputAndReverse(n) {
  if (n == 0)
    return
  let x = Number(prompt("x"))
  inputAndReverse(n - 1)
  console.log(x)
}

//add digit
function addDigits(num) {
  let sum = 0
  while (num > 0) {
    let digit = num % 10
    sum += digit
    num = (num - digit) / 10
  }
  if (sum < 10) {
    return sum
  }
  else {
    add
    return srm
  }
}

// 例题 1 * 3 + 5找到并返回第一个可能
function findSolution(target) {

  // var target = 151

  function find(start, history) {
      if (start == target) {
          return history
      }
      if (start > target) {
          return null
      }
      return find(start * 3, '(' + history + ') * 3')
          || find(start + 5, history + ' + 5')
  }

  return find(1, '1')
}

// 例题 1 * 3 + 5找到并返回（放在数组里）所有的可能
function findSolution(target) {

  // var target = 151
  var array = []

  function find(start, history) {
      if (start == target) {
          array.push(history)
          return
      }
      if (start > target) {
          return
      }
      find(start * 3, '(' + history + ') * 3')
      find(start + 5, history + ' + 5')
  }

  find(1, '1')
  return array
}

//三角形最大路径和
function findSolution(numbers) {
  var max = 0
  var maxHistory = null

  function find(x, y, sum, history) {
    if (x == numbers.length - 1) { // 已经走到最后一行了
      if (sum + numbers[x][y] > max) {
        max = sum + numbers[x][y]
        maxHistory = history
      }
      return
    }
    find(x + 1, y,     sum + numbers[x][y], history + '左')
    find(x + 1, y + 1, sum + numbers[x][y], history + '右')
  }

  find(0, 0, 0, '')

  return [max, maxHistory]
}

//三角形最大路径和
var numbers = [
            [2],
          [3, 1],
        [9, 8, 4],
      [7, 1, 5, 6],
    [3, 0, 4, 9 ,8],
  [10, 0, 0, 0, 0, 0],
[10, 0, 0, 0, 0, 0, 200],
]


function maxSum(x, y) {
  if (x == numbers.length - 1) {
    return numbers[x][y]
  }
  return numbers[x][y] + Math.max(maxSum(x + 1, y), maxSum(x + 1, y + 1))
}

//棋盘格
function find(start, history) {
  if (start[0] == target[0] && start[1] == target[1])
    console.log(history)
  if (start[0] > target[0] || start[1] > target[1])
    return
  find(start[0] + 1, history + '>')
  find(start[1] + 1, history + '^')
}
find([0, 0], '')
let target = Number(prompt("n"))

//powx-n 递归
var myPow = function(x, n) {
  if (n < 0) {
      return 1 / myPow(x, -n)
  }

  if (n == 0) {
      return 1
  }

  // if (n % 2 == 0) {
  //     var t = myPow(x, n / 2)
  //     return t * t
  // } else {
  //     var t = myPow(x, Math.floor(n / 2))
  //     return t * t * x
  // }

  if (n % 2 == 0) {
      return myPow(x * x, n / 2)
  } else {
      return myPow(x * x , Math.floor((n - 1) / 2)) * x
  }
};

//powx-n 递归
var myPow = function(x, n) {
  if (n < 0) {
      return 1 / myPow(x, -n)
  }
  var stillNeed = n // 距离结果还差x的多少次方
  var result = 1

  while (stillNeed != 0) {
      var start = x // 表示x的若干次方
      var exp = 1 // 表示此时start是x的几次方

      while (exp * 2 <= stillNeed) {
          start = start * start
          exp = exp * 2
      }

      result *= start
      stillNeed = stillNeed - exp
  }
  return result
};

//四章习题深度比较a、b。面试题！！！
function deepEqual(a, b) {
  if (a === b) {
    return true
  }
  if (a !== a && b !== b) {
    return true
  }
  // 两个都是数组
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      return false
    } else {
      for (var i = 0; i < a.length; i++) {
        if (!deepEqual(a[i], b[i])) {
          return false
        }
      }
      return true
    }
  }
  // 两个都是对象
  if (!Array.isArray(a) && !Array.isArray(b) && typeof a === 'object' && typeof b === 'object') {
    for (var key in a) {
      // a的每个属性都要在b里
      // 一旦不在，就返回false
      if (!(key in b)) {
        return false
      }
    }
    for (var key in b) {
      // b的每个属性都要在a里
      // 一旦不在，就返回false
      if (!(key in a)) {
        return false
      }
    }

    for (var key in a) {
      if (!deepEqual(a[key], b[key])) {
        return false
      }
    }
    return true
  }
  return false
}

//链表
function arrayToList1(array) {
  if (array.length == 0) {
    return null
  }

  let nodes = []
  for (let i = 0; i < array.length; i++) {
    let node = {
      val: array[i],
      next: null
    }
    nodes.push(node)
  }
  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1]
  }

  return nodes[0]
}

function arrayToList3(array) {
  let dummy = {
    val: 0,
    next: null
  }
  let prev = dummy

  for (let i = 0; i < array.length; i++) {
    let node = {
      val: array[i],
      next: null
    }
    prev.next = node
    prev = node
  }

  return dummy.next
}

function arrayToList3$(array) {
  let dummy = {
    val: 0,
    next: null
  }
  let node = dummy

  for (let i = 0; i < array.length; i++) {
    node.next = {
      val: array[i],
      next: null
    }
    node = node.next
  }

  return dummy.next
}

function arrayToList4(array) {
  let prev = null
  for (let i = array.length - 1; i >= 0; i--) {
    node = {
      val: array[i],
      next: null
    }
    node.next = prev
    prev = node
  }
  return prev
}

function arrayToList4$(array) {
  let node = null
  for (let i = array.length - 1; i >= 0; i--) {
    node = {
      val: array[i],
      next: node
    }
  }
  return node
}

function arrayToListR(array) {
  if (array.length == 0)
    return null
  let node = {
    val: array[0],
    next: arrayToListR(array.slice(1))
  }
  return node
}

function arrayToListR2(array, start = 0) {
  if (start == array.length)
    return null
  let node = {
    val: array[start],
    next: arrayToListR(array, start + 1)
  }
  return node
}

//链表转数组
function listToArray(head) {
  if (head == null)
    return []

  let a = []
  while (head) {
    a.push(head.val)
    head = head.next
  }
  return a
}

function listToArrayR(head) {
  if (head == null)
    return []

  let ary = listToArrayR(head.next)
  return [head.val].concat(ary)
  // return [head.val].concat(listToArrayR(head.next))
}

//把一个值放在链表前面
function prepend(val, head) {
  return {
    val: val,
    next: head
  }
}

//把一个值放在链表末尾
function append(val, head) {
  let node = {
      val: val,
      next: null
  }

  if (head == null)
    return node

  let p = head
  while (p.next) {
    p = p.next
  }
  p.next = node
  return head
}

//提取链表第n项
function nth(list, n) {
  if (list == null || n < 0)
    return undefined

  let l = list
  let c = 0
  while (l && c < n) {
    l = l.next
    c++
  }
  if (l)
    return l.val
  else
    return undefined
}

function nthR(list, n) {
  if (list == null || n < 0)
    return undefined
  if (n == 0)
    return list.val

  return nth(list.next, n - 1)
}

//从中间增加
function insert(list, n, val) {
  let node = {
    val: val,
    next: null
  }
  if (n == 0) {
    node.next = list
    return node
  }

  let p = list
  let c = 0

  while (p && c < n - 1) {
    c++
    p = p.next
  }

  // let q = p.next
  // p.next = node
  // node.next = q
  node.next = p.next
  p.next = node

  return list
}

//排序算法
//排序算法插入排序
function insertSort$(ary) {
  let n
  for (let i = 1, j; i < ary.length; i++) {
    n = ary[i]
    for (j = i - 1; n < ary[j] && j >= 0; j--) {
      ary[j + 1] = ary[j]
    }
    ary[j + 1] = n
  }
  return ary
}

function insertSort(ary) {
  let n
  for (let i = 1, j; i < ary.length; i++) {
    n = ary[i]
    for (j = i - 1; j >= 0; j--) {
      if (ary[j] > n) {
        ary[j + 1] = ary[j]
      } else {
        break
      }
    }
    ary[j + 1] = n
  }
  return ary
}

//创建随机排序数字
function randomAry(n) {
  let ary = []
  for (let i = 0; i < n; i++) {
    ary.push(Math.random() * n | 0)
  }
  return ary
}

//判断数组是否是升序排列
function isSorted(ary) {
  for (let i = 1; i < ary.length; i++) {
    if (ary[i] < ary[i - 1]) {
      return false
    }
  }
  return true
}

//排序算法冒泡
function bubbleSort(ary) {
  for (let i = ary.length - 2; i >= 0; i--) {
    let swapped = false
    for (let j = 0; j <= i; j++) {
      if (ary[j] > ary[j + 1]) {
        let n = ary[j]
        ary[j] = ary[j + 1]
        ary[j + 1] = n
        swapped = true
      }
    }
    if (!swapped) {
      break
    }
  }
  return ary
}

//交换数组i与j项的值
function swap(ary, i, j) {
  let n = ary[i]
  ary[i] = ary[j]
  ary[j] = n
}

//选择排序
function selectSort(ary) {
  for (let i = 0; i < ary.length - 1; i++) {
    let minIdx = i
    for (j = i + 1; j < ary.length; j++) {
      // minIdx = ary[j] < minIdx ? ary[j] : minIdx
      if (ary[j] < ary[minIdx]) {
        minIdx = j
      }
    }
    swap(ary, i, minIdx)
  }
  return ary
}

//归并排序
//时间复杂度O(n * log(n)),空间复杂度(n + log(n))
function mergeSort(ary) {
  if (ary.length < 2)
    return ary

  let mid = Math.floor(arylength / 2)
  let left = ary.lice(0, mid)
  let right = ary.lice(mid)

  mergeSort(left)
  mergeSort(right)

  for (let i = 0, j = 0, k = 0; i < left.length && j < right.length;) {
    if (left[i] < right[j]) {
      ary[k++] = left[i++]
    } else {
      ary[k++] = right[j++]
    }
  }

  while (i < left.length) {
    ary[k++] = left[i++]
  }
  while (j < right.length) {
    ary[k++] = right[j++]
  }

  return ary
}

//归并排序,原数组排序
function mergeSortPlace(ary, start = 0, end = ary.length) {
  if (ary.length < 2)
    return ary

  let mid = Math.floor((start + end) / 2)

  mergeSort(ary, start, mid)
  mergeSort(ary, mid, end)

  for (let i = 0, j = 0, k = 0; i < left.length && j < right.length;) {
    if (left[i] < right[j]) {
      ary[k++] = left[i++]
    } else {
      ary[k++] = right[j++]
    }
  }

  while (i < left.length) {
    ary[k++] = left[i++]
  }
  while (j < right.length) {
    ary[k++] = right[j++]
  }

  return ary
}
