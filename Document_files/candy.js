function humanReadableTimer(seconds) {
//   let hr = Math.floor(seconds / 3600)
//   let min = Math.floor((seconds - hr * 3600) / 60)
//   let sec = Math.floor(seconds % 60)


//     function timetype(time) {
//       if (time < 10 ){
//         return time = "0" + time
//       }
//      return time
//     }

// return `${timetype(hr)}:${timetype(min)}:${timetype(sec)}`
// }


console.log(humanReadableTimer(0))      // 印出 00:00:00
console.log(humanReadableTimer(59))     // 印出 00:00:59

console.log(humanReadableTimer(60))     // 印出 00:01:00
console.log(humanReadableTimer(90))     // 印出 00:01:30
console.log(humanReadableTimer(3599))   // 印出 00:59:59 

console.log(humanReadableTimer(3600))   // 印出 01:00:00 
console.log(humanReadableTimer(45296))  // 印出 12:34:56
console.log(humanReadableTimer(86399))  // 印出 23:59:59
console.log(humanReadableTimer(86400))  // 印出 24:00:00
console.log(humanReadableTimer(359999)) // 印出 99:59:59






  // if (seconds < 60) {
    

  // }else if (seconds >= 60 && seconds < 3600){
  //   min = Math.floor(seconds / 60)
  //   sec = seconds % 60
  //   // return `00:${minutes}:${seconds}`

  // }else  (seconds >= 3600)
  // hr = Math.floor(seconds / 3600)
  // min = Math.floor((seconds-(hr * 3600)) / 60)
  // sec = seconds % 60
  // // return `${hours}:${minutes}:${seconds}`

  // function timetype(times){
  //   if (times < 10 ){
  //     return times = "0"+times
  //   }else
  //   return times = times 
  // }
  // return `${timetype(hr)}:${timetype(min)}:${timetype(sec)}`








  const hr = Math.floor(seconds / 3600)
  //先除以3600，取整數 得到 => 小時數
  const min = Math.floor((seconds - (hr * 3600)) / 60)
  // 再來先減去小時數，除以 60 得到 => 分鐘數 
  const sec = seconds % 60
  // 最後取 60 的餘數得到 => 秒數 

  hr = String(hr).padStart(2, "0")
  min = String(min).padStart(2, "0")
  sec = String(sec).padStart(2, "0")
  // 用 String.prototype.padStart()
  // 先將 hr, min, sec 轉換成字串，使用.padStart在左側賦予"0"


  return `${hr}:${min}:${sec}`
}