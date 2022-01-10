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

  difference: function (array, values) {
    let a = []
    array.forEach(element => {
      if (!values.includes(element))
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










}
