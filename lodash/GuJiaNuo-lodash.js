var GuJiaNuo = {
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
  }
}
