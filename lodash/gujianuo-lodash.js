var gujianuo = {
  chunk: function (array, size = 1) {
    let a = Array(Math.trunc(array.length / size))
    for (let i = 0, j = 0, k = 0; i < array.length; i++) {
      a[j] ? a[j] : a[j] = []
      a[j][k++] = array[i]
      if (k == size) {
        k = 0
        j++
      }
    }
    return a
  },

  compact: function (array) {
    let a = []
    for (let i = 0; i < array.length; i++) {
      if (array[i])
        a.push(array[i])
    }
    return a
  },

  concat: function (array) {
    let a = array
    for (let i = 1; i < arguments.length; i++) {
      if (Array.isArray(arguments[i]))
        arguments[i].forEach(element => a.push(element));
      else
        a.push(arguments[i])
    }
    return a
  },

  difference: function (array, ...values) {
    let a = []
    let b = []
    for (let i = 0; i < values.length; i++) {
      b.push(...values[i])
    }
    array.forEach(element => {
      if (!b.includes(element))
        a.push(element)
    })
    return a
  },

  drop: function (array, n = 1) {
    let a = []
    for (let i = n; i < array.length; i++) {
      a.push(array[i])
    }
    return a
  },

  dropRight: function (array, n = 1) {
    let a = []
    for (let i = 0; i < array.length - n; i++) {
      a.push(array[i])
    }
    return a
  },

  fill: function (array, value, start = 0, end = array.length) {
    for (let i = start; i < end; i++) {
      array[i] = value
    }
    return array
  },

  flatten: function (array) {
    let a = []
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i]))
        array[i].forEach(element => a.push(element));
      else
        a.push(array[i])
    }
    return a
  },

  flattenDeep: function flattenDeep(array) {
    let a = []
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i]))
        flattenDeep(array[i]).forEach(element => a.push(element))
      else
        a.push(array[i])
    }
    return a
  },

  flattenDepth: function flattenDepth(array, depth = 1) {
    let a = []
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i]) && depth > 0)
        flattenDepth(array[i], depth - 1).forEach(element => a.push(element))
      else
        a.push(array[i])
    }
    return a
  },

  fromPairs: function (pairs) {
    let p = {}
    pairs.forEach(element => {
      p[element[0]] = element[1]
    });
    return p
  },

  head: function (array) {
    return array[0]
  },

  indexOf: function (array, value, fromIndex = 0) {
    if (fromIndex >= 0) {
      for (let i = fromIndex; i < array.length; i++) {
        if (array[i] === value)
          return i
      }
    } else {
      for (let i = array.length + fromIndex; i >= 0; i--) {
        if (array[i] === value)
          return i
      }
    }
    return -1
  },

  initial: function (array) {
    let a = array
    if (a.length)
      a.length = a.length - 1
    return a
  },

  intersection: function (...array) {
    let s = new Set(array[0])
    for (let i = 1; i < array.length; i++) {
      s.forEach(element => {
        if (!array[i].includes(element))
          s.delete(element)
      });
    }
    return [...s]
  },

  // intersectionBy: function (array) {
  //   let arglen = arguments.length - 1
  //   let f = arguments[arglen]
  //   let s = new Set(array)
  //   for (let i = 1; i < arglen; i++) {
  //     s.forEach(element => {
  //       if (!f(arguments[i]).includes(f(element)))
  //         s.delete(element)
  //     });
  //   }
  //   return [...s]
  // },

  join: function (array, separator = ',') {
    let s = String(array[0])
    for (let i = 1; i < array.length; i++) {
      s += separator + String(array[i])
    }
    return s
  },

  last: function (array) {
    return array[array.length - 1]
  },

  lastIndexOf: function (array, value, fromIndex = array.length - 1) {
    for (let i = fromIndex; i >= 0; i--) {
      if (value === array[i])
        return i
    }
    return -1
  },

  nth: function (array, n = 0) {
    if (n < 0)
      return array[array.length + n]
    else
      return array[n]
  },

  pull: function (array, ...values) {
    let len = array.length
    for (let i = 0, k = 0; i < array.length; i++) {
      for (let j = 0; j < values.length; j++) {
        if (values[j] === array[i]) {
          array[i] = 0
          len--
          break
        }
      }
      if (array[i]) {
        array[k++] = array[i]
      }
    }
    array.length = len
    return array
  },

  pullAll: function (array, values) {
    let len = array.length
    for (let i = 0, k = 0; i < array.length; i++) {
      for (let j = 0; j < values.length; j++) {
        if (values[j] === array[i]) {
          array[i] = 0
          len--
          break
        }
      }
      if (array[i]) {
        array[k++] = array[i]
      }
    }
    array.length = len
    return array
  },

  reverse: function (array) {
    for (let i = 0, j = array.length - 1; i < j; i++, j--) {
      [array[i], array[j]] = [array[j], array[i]]
    }
    return array
  },

  sortedIndex: function (array, value) {
    let i = 0
    for (; i < array.length && array[i] < value; i++) {}
    return i
  },













}
