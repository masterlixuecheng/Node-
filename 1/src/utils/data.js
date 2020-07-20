/** 数字金额大写转换(可以处理整数,小数,负数) */
export function smalltoBig(n) {
  var fraction = ['角', '分'];
  var digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
  var unit = [
    ['元', '万', '亿'],
    ['', '拾', '佰', '仟']
  ];
  var head = n < 0 ? '欠' : '';
  n = Math.abs(n);
  var s = '';
  for (var i = 0; i < fraction.length; i++) {
    s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
  }
  s = s || '整';
  n = Math.floor(n);
  for (var i = 0; i < unit[0].length && n > 0; i++) {
    var p = '';
    for (var j = 0; j < unit[1].length && n > 0; j++) {
      p = digit[n % 10] + unit[1][j] + p;
      n = Math.floor(n / 10);
    }
    s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
  }
  return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');
}


export function formatDate(date, fmt) {
  if (date === null || date === undefined) return '';
  date = new Date(date);
  fmt = fmt || "yyyy-MM-dd";
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};

function padLeftZero(str) {
  return ('00' + str).substr(str.length);
};

export function timeToDay(endtime) {
  var dd, hh, mm, ss = null;
  var time = parseInt(endtime) - new Date().getTime();
  if (time <= 0) {
    return '结束'
  } else {
    dd = Math.floor(time / 1000 / 60 / 60 / 24);
    hh = Math.floor((time / 1000 / 60 / 60) % 24);
    mm = Math.floor((time / 1000 / 60) % 60);
    ss = Math.floor(time / 1000 % 60);
    var str = dd + "天" + hh + "小时" + mm + "分" + ss + "秒";
    return str;

  }
}
export function timeToDay2(endtime) {
  var dd, hh, mm, ss = null;
  var time = endtime;
  if (time <= 0) {
    return '结束'
  } else {
    dd = Math.floor(time / 1000 / 60 / 60 / 24);
    hh = Math.floor((time / 1000 / 60 / 60) % 24);
    mm = Math.floor((time / 1000 / 60) % 60);
    ss = Math.floor(time / 1000 % 60);
    var str = dd + "天" + hh + "小时" + mm + "分" + ss + "秒";
    return str;

  }
}
export function timeToDay3(row) {
  var dd, hh, mm, ss = null;
  var time = row.sysj;
  if( row.sfzt == '1' ){
    return '已暂停'
  }else{
    if (time <= 0) {
      return '结束'
    } else {
      dd = Math.floor(time / 1000 / 60 / 60 / 24);
      hh = Math.floor((time / 1000 / 60 / 60) % 24);
      mm = Math.floor((time / 1000 / 60) % 60);
      ss = Math.floor(time / 1000 % 60);
      var str = dd + "天" + hh + "小时" + mm + "分" + ss + "秒";
      return str;
  
    }
  }
}
