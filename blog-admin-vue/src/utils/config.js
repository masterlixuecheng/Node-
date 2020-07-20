let dicMap = window.sessionStorage;
let obj = {};

function dictionaries(key) {

}

function diction(key, resolve, reject) {
  if (key == "nd") {
    let date = new Date();
    let year = date.getFullYear();
    let ndArr = [];
    let dicMap = window.sessionStorage;
    for (let i = 0; i < 5; i++) {
      ndArr.push({
        label: year - i,
        value: year - i
      });
    }
    dicMap.setItem("nd", JSON.stringify(ndArr));
    resolve(ndArr);
  } else if (key == "syqlx") {
    let arr = [{
        label: "村集体",
        value: "1"
      },
      {
        label: "国有",
        value: "2"
      },
      {
        label: "集体",
        value: "3"
      },
      {
        label: "合作社",
        value: "4"
      },
      {
        label: "自然人",
        value: "5"
      }
    ];
    dicMap.setItem("syqlx", JSON.stringify(arr));
    resolve(arr);
  } else if (key == "dw") {
    let arr = [{
        label: "平方米",
        value: "1"
      },
      {
        label: "亩",
        value: "2"
      },
      {
        label: "米",
        value: "3"
      },
      {
        label: "个",
        value: "4"
      },
      {
        label: "股",
        value: "5"
      },
      {
        label: "只",
        value: "6"
      },
      {
        label: "棵",
        value: "7"
      },
      {
        label: "株",
        value: "8"
      },
      {
        label: "辆",
        value: "9"
      },
      {
        label: "暂无",
        value: "10"
      }
    ];
    dicMap.setItem("dw", JSON.stringify(arr));
    resolve(arr);
  } else {
    dictionaries(key).then(res => {
      let data = res.data;
      if (data.success) {
        data.data.map(i => {
          i.label = i.dictname;
          i.value = i.dictcode;
          return i
        });
        dicMap.setItem(key, JSON.stringify(data.data));
        resolve(data.data);
      }
    }).catch(res => {
      console.log("失败'")
    })
  }
}

export function doCreate(key) {
  return new Promise((resolve, reject) => {
    if (dicMap.getItem(key)) {
      resolve(JSON.parse(dicMap.getItem(key)));
    } else {
      diction(key, resolve, reject);
    }
  });
}

export function getDicTab(key, val) {
  let res;
  if (val === null || val === undefined) return "";
  if (dicMap.getItem(key)) {
    res = JSON.parse(dicMap.getItem(key)).filter(i => {
      return i.value == val
    });
    if (res.length) {
      res = res[0].label
    } else {
      res = val
    }
    return res;
  } else {
    diction(key).then(() => {
      getDicTab(key, val);
    })
  }
}

export function handleEmpty(data) {
  data.map(i => {
    if (i.children.length) {
      handleEmpty(i.children)
    } else {
      delete i.children;
    }
  })
  return data;
}
export function handleNextCode(code, myCode, data) {
  if (code.length == 12) {
    return;
  }
  let data2 = [];
  if (code == myCode.substring(0, 2) && code.length < myCode.length) { //省级
    data.map(d => {
      if (d.code == myCode.substring(0, 4)) {
        data2.push(d);
        console.log(data2)
        return data2;
      }
    });
  } else if (code == myCode.substring(0, 4) && code.length < myCode.length) { //市级
    data.map(d => {
      if (d.code == myCode.substring(0, 6)) {
        data2.push(d);
        return data2;
      }
    });
  } else if (code == myCode.substring(0, 6) && code.length < myCode.length) { //县级
    data.map(d => {
      if (d.code == myCode.substring(0, 9)) {
        data2.push(d);
        return data2;
      }
    });
  } else if (code == myCode.substring(0, 9) && code.length < myCode.length) { //镇级
    data.map(d => {
      if (d.code == myCode.substring(0, 12)) {
        data2.push(d);
        return data2;
      }
    });
  } //点击区划小于等于登录人区划，直接赋值
  else {
    data2 = data;
  }
  return data2;
}
export function moreMenu(val, data, childrenData) {
  if (data.length == 0) {
    return childrenData;
  } else {
    let len = data.filter(x => {
      return x.code == val;
    }).length;
    if (len) {
      data.map(c => {
        if (c.code == val) {
          c.children = childrenData;
          return c;
        }
      });
    } else {
      data.map(c => {
        if (c.children && c.children.length) {
          c.children = moreMenu(val, c.children, childrenData);
        }
        return c;
      });
    }
    return data;
  }
}

export function formatterXzqh() {
  //获取行政区划
  let a;
  let xzqh = document
    .getElementsByClassName("el-cascader__label")[0]
    .innerText.replace(">", "")
    .replace(/\s+/g, "");
  length = xzqh.split("/").length;
  if (length >= 3) {
    a =
      xzqh.split("/")[length - 3] +
      xzqh.split("/")[length - 2] +
      xzqh.split("/")[length - 1];
    return a;
  } else if (length == 2) {
    a = xzqh.split("/")[length - 2] + xzqh.split("/")[length - 1];
    return a;
  } else if (length == 1) {
    a = xzqh.split("/")[length - 1];
    return a;
  } else {
    return;
  }
}

export function gpjgdwMap(val) {
  if (val) {
    return {
      "1": "元(总价)",
      "2": "元/年",
      "3": "元/亩/年",
      "4": "元/亩",
      "5": "元/平方米/年",
      "6": "元/平方米/天",
      "7": "元/米/年",
      "8": "元/吨",
      "9": "%",
      "10": "元/亩/季",
      "11": "元/亩/月",
      "12": "元/棵",
    } [val];
  }
  return "";
}
export function handleXzqh(val) {
  let arr = val.split(",");
  if (arr[0].length == 4) {
    arr.unshift(arr[0].substring(0, 2));
  } else if (arr[0].length == 6) {
    arr.unshift(arr[0].substring(0, 4));
    arr.unshift(arr[0].substring(0, 2));
  } else if (arr[0].length == 9) {
    arr.unshift(arr[0].substring(0, 6));
    arr.unshift(arr[0].substring(0, 4));
    arr.unshift(arr[0].substring(0, 2));
  } else if (arr[0].length == 12) {
    arr.unshift(arr[0].substring(0, 9));
    arr.unshift(arr[0].substring(0, 6));
    arr.unshift(arr[0].substring(0, 4));
    arr.unshift(arr[0].substring(0, 2));
  }
  console.log('return arr.join(",")===' + arr.join(","))
  return arr.join(",");
}

export function handleMjDw(dw, type, bdlb) { //单位，供应类型，标的类别 
  if (type == '1' || type == '2' || type == '9') {
    return {
      "1": "亩",
      "2": "平方米",
      "3": "公顷",
    } [dw];
  } else if (type == '4') {
    return '棵'
  } else if (type == '3') {
    switch (bdlb) {
      case "C001":
        return '平方米';
      case "C002":
        return '平方米';
      case "C003":
        return '棵';
      case "C004":
        return '股';
      case "C005":
        return '只';
      case "C006":
        return '辆';
      case "C007":
        return '平方米';
      case "C008":
        return mjDwMap(dw);
      case "C009":
        return '平方米';
      default:
        return "123";
    }
  } else if (type == '5'||type == '6')  {
    if (dw) {
      return {
        "1": "辆",
        "2": "米",
        "3": "个",
        "4": "平方米",
        "5": "眼",
        "6": "亩",
        "7": "口",
        "8": "套",
        "9": "间",
        "10": "棵",
        "11": "盏",
        "12": "台"
      } [dw];
    }
    return "--";
  }
}

export function mjDwMap(val) {
    if (val) {
      return {
        "1": "平方米",
        "2": "棵",
        "3": "只",
        "4": "辆",
        "5": "股",
        "6": "个",
        "7": "台",
        "8": "件",
        "9": "亩",
        "10": "其他"
      } [val];
    }
    return "--";
}
