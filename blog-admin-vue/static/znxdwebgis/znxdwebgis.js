/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return PJD_3PARAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return PJD_7PARAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return PJD_WGS84; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return PJD_NODATUM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return SEC_TO_RAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return HALF_PI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return SIXTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return RA4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return RA6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EPSLN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D2R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return R2D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FORTPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return TWO_PI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return SPI; });
var PJD_3PARAM = 1;
var PJD_7PARAM = 2;
var PJD_WGS84 = 4; // WGS84 or equivalent
var PJD_NODATUM = 5; // WGS84 or equivalent
var SEC_TO_RAD = 4.84813681109535993589914102357e-6;
var HALF_PI = Math.PI/2;
// ellipoid pj_set_ell.c
var SIXTH = 0.1666666666666666667;
/* 1/6 */
var RA4 = 0.04722222222222222222;
/* 17/360 */
var RA6 = 0.02215608465608465608;
var EPSLN = 1.0e-10;
// you'd think you could use Number.EPSILON above but that makes
// Mollweide get into an infinate loop.

var D2R = 0.01745329251994329577;
var R2D = 57.29577951308232088;
var FORTPI = Math.PI/4;
var TWO_PI = Math.PI * 2;
// SPI is slightly greater than Math.PI, so values that exceed the -180..180
// degree range by a tiny amount don't get wrapped. This prevents points that
// have drifted from their original location along the 180th meridian (due to
// floating point error) from changing their sign.
var SPI = 3.14159265359;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_values__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sign__ = __webpack_require__(4);




/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return (Math.abs(x) <= __WEBPACK_IMPORTED_MODULE_0__constants_values__["n" /* SPI */]) ? x : (x - (Object(__WEBPACK_IMPORTED_MODULE_1__sign__["a" /* default */])(x) * __WEBPACK_IMPORTED_MODULE_0__constants_values__["o" /* TWO_PI */]));
});


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(eccent, sinphi, cosphi) {
  var con = eccent * sinphi;
  return cosphi / (Math.sqrt(1 - con * con));
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  if (Math.abs(x) > 1) {
    x = (x > 1) ? 1 : -1;
  }
  return Math.asin(x);
});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x<0 ? -1 : 1;
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_values__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sign__ = __webpack_require__(4);



/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return (Math.abs(x) < __WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */]) ? x : (x - (Object(__WEBPACK_IMPORTED_MODULE_1__sign__["a" /* default */])(x) * Math.PI));
});


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_values__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (function(eccent, phi, sinphi) {
  var con = eccent * sinphi;
  var com = 0.5 * eccent;
  con = Math.pow(((1 - con) / (1 + con)), com);
  return (Math.tan(0.5 * (__WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */] - phi)) / con);
});


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_values__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (function(eccent, ts) {
  var eccnth = 0.5 * eccent;
  var con, dphi;
  var phi = __WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */] - 2 * Math.atan(ts);
  for (var i = 0; i <= 15; i++) {
    con = eccent * Math.sin(phi);
    dphi = __WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */] - 2 * Math.atan(ts * (Math.pow(((1 - con) / (1 + con)), eccnth))) - phi;
    phi += dphi;
    if (Math.abs(dphi) <= 0.0000000001) {
      return phi;
    }
  }
  //console.log("phi2z has NoConvergence");
  return -9999;
});


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(e0, e1, e2, e3, phi) {
  return (e0 * phi - e1 * Math.sin(2 * phi) + e2 * Math.sin(4 * phi) - e3 * Math.sin(6 * phi));
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return (1 - 0.25 * x * (1 + x / 16 * (3 + 1.25 * x)));
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return (0.375 * x * (1 + 0.25 * x * (1 + 0.46875 * x)));
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return (0.05859375 * x * x * (1 + 0.75 * x));
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return (x * x * x * (35 / 3072));
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/*var Namespace = new Object();
Namespace.register = function (path) {
    var arr = path.split(".");
    var ns = "";
    for (var i = 0; i < arr.length; i++) {
        if (i > 0) ns += ".";
        ns += arr[i];
        eval("if(typeof(" + ns + ") == 'undefined') " + ns + " = new Object();");
    }
};*/

/** @api {OPTIONS} ZNXDConfig config-参数
    @apiVersion 0.1.0
    @apiGroup 初始默认参数

    @apiDescription 此对象为默认地图初始化参数.

    @apiExample 使用方法:
    ZNXDWEBGIS.ZNXDConfig

    @apiParam {Number} zoom="5" 地图初始缩放级别.
    @apiParam {Array} center="[105.943681,34.102974]" 地图初始中心点坐标.
    @apiParam {String} srcProjection="'EPSG:4326'" 初始地图源坐标系（不同坐标系图层需注入相关坐标系.详见ZNXDUtil）.
    @apiParam {Number} minZoom="3" 最小缩放范围.
    @apiParam {Number} maxZoom="18" 最大缩放范围.
    @apiParam {String} toProjection="'EPSG:4326'" 初始地图目标坐标系.
    @apiParam {Array} bounds="[-180.0, -90.0, 180.0, 90.0]" 地图范围.
*/
var ZNXDConfig = {
  zoom: 5,
  center: [105.943681, 34.102974],
  //地图中心点
  srcProjection: "EPSG:4326",
  //源坐标系
  minZoom: 3,
  maxZoom: 18,
  toProjection: "EPSG:4326",
  //目标坐标系
  bounds: [-180.0, -90.0, 180.0, 90.0] //地图范围

};
exports.default = ZNXDConfig;

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parseCode__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__extend__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__projections__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__deriveConstants__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_Datum__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__datum__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__match__ = __webpack_require__(15);








function Projection(srsCode,callback) {
  if (!(this instanceof Projection)) {
    return new Projection(srsCode);
  }
  callback = callback || function(error){
    if(error){
      throw error;
    }
  };
  var json = Object(__WEBPACK_IMPORTED_MODULE_0__parseCode__["a" /* default */])(srsCode);
  if(typeof json !== 'object'){
    callback(srsCode);
    return;
  }
  var ourProj = Projection.projections.get(json.projName);
  if(!ourProj){
    callback(srsCode);
    return;
  }
  if (json.datumCode && json.datumCode !== 'none') {
    var datumDef = Object(__WEBPACK_IMPORTED_MODULE_6__match__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_4__constants_Datum__["a" /* default */], json.datumCode);
    if (datumDef) {
      json.datum_params = datumDef.towgs84 ? datumDef.towgs84.split(',') : null;
      json.ellps = datumDef.ellipse;
      json.datumName = datumDef.datumName ? datumDef.datumName : json.datumCode;
    }
  }
  json.k0 = json.k0 || 1.0;
  json.axis = json.axis || 'enu';
  json.ellps = json.ellps || 'wgs84';
  var sphere_ = Object(__WEBPACK_IMPORTED_MODULE_3__deriveConstants__["b" /* sphere */])(json.a, json.b, json.rf, json.ellps, json.sphere);
  var ecc = Object(__WEBPACK_IMPORTED_MODULE_3__deriveConstants__["a" /* eccentricity */])(sphere_.a, sphere_.b, sphere_.rf, json.R_A);
  var datumObj = json.datum || Object(__WEBPACK_IMPORTED_MODULE_5__datum__["a" /* default */])(json.datumCode, json.datum_params, sphere_.a, sphere_.b, ecc.es, ecc.ep2);

  Object(__WEBPACK_IMPORTED_MODULE_1__extend__["a" /* default */])(this, json); // transfer everything over from the projection because we don't know what we'll need
  Object(__WEBPACK_IMPORTED_MODULE_1__extend__["a" /* default */])(this, ourProj); // transfer all the methods from the projection

  // copy the 4 things over we calulated in deriveConstants.sphere
  this.a = sphere_.a;
  this.b = sphere_.b;
  this.rf = sphere_.rf;
  this.sphere = sphere_.sphere;

  // copy the 3 things we calculated in deriveConstants.eccentricity
  this.es = ecc.es;
  this.e = ecc.e;
  this.ep2 = ecc.ep2;

  // add in the datum object
  this.datum = datumObj;

  // init the projection
  this.init();

  // legecy callback from back in the day when it went to spatialreference.org
  callback(null, this);

}
Projection.projections = __WEBPACK_IMPORTED_MODULE_2__projections__["a" /* default */];
Projection.projections.start();
/* harmony default export */ __webpack_exports__["a"] = (Projection);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = match;
var ignoredChar = /[\s_\-\/\(\)]/g;
function match(obj, key) {
  if (obj[key]) {
    return obj[key];
  }
  var keys = Object.keys(obj);
  var lkey = key.toLowerCase().replace(ignoredChar, '');
  var i = -1;
  var testkey, processedKey;
  while (++i < keys.length) {
    testkey = keys[i];
    processedKey = testkey.toLowerCase().replace(ignoredChar, '');
    if (processedKey === lkey) {
      return obj[testkey];
    }
  }
}


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(phi, sphi, cphi, en) {
  cphi *= sphi;
  sphi *= sphi;
  return (en[0] * phi - cphi * (en[1] + sphi * (en[2] + sphi * (en[3] + sphi * en[4]))));
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, e, sinphi) {
  var temp = e * sinphi;
  return a / Math.sqrt(1 - temp * temp);
});

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(ml, e0, e1, e2, e3) {
  var phi;
  var dphi;

  phi = ml / e0;
  for (var i = 0; i < 15; i++) {
    dphi = (ml - (e0 * phi - e1 * Math.sin(2 * phi) + e2 * Math.sin(4 * phi) - e3 * Math.sin(6 * phi))) / (e0 - 2 * e1 * Math.cos(2 * phi) + 4 * e2 * Math.cos(4 * phi) - 6 * e3 * Math.cos(6 * phi));
    phi += dphi;
    if (Math.abs(dphi) <= 0.0000000001) {
      return phi;
    }
  }

  //..reportError("IMLFN-CONV:Latitude failed to converge after 15 iterations");
  return NaN;
});

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(eccent, sinphi) {
  var con;
  if (eccent > 1.0e-7) {
    con = eccent * sinphi;
    return ((1 - eccent * eccent) * (sinphi / (1 - con * con) - (0.5 / eccent) * Math.log((1 - con) / (1 + con))));
  }
  else {
    return (2 * sinphi);
  }
});

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Created by Administrator on 2018-07-23.
 */

/** @api {OPTIONS} ZNXDControl control-地图工具
    @apiVersion 0.1.0
    @apiGroup 地图工具类

    @apiDescription 本类用于添加地图比例尺，全屏等相关工具控制.

    @apiExample 使用方法:
    control = new ZNXDWEBGIS.Control({
		collapsible: true,
		collapsed: true,
		controlArr: [
			new znxdmap.control.ScaleLine("metric"),
			new znxdmap.control.FullScreen(),
			new znxdmap.control.ZoomToExtent({}),
			new znxdmap.control.MousePosition({
				coordinateFormat: znxdmap.coordinate.createStringXY(4),
				projection: "EPSG:4326",
				className: "custom-mouse-position",
				target: document.getElementById("mouse-position"),
				undefinedHTML: "&nbsp;"
			}),
			new znxdmap.control.OverviewMap({}),
			new customControl() //继承ol.css样式的自定义控件
		]
	});

    @apiParam {String} className="'ol-attribution'" element类名称用于前端获取渲染样式.
    @apiParam {String} target="''" /如果希望在地图的视口之外渲染控件，请指定目标.
    @apiParam {Boolean} collapsible="false" 指定是否可以折叠属性.如果未指定，源将使用其attributionsCollapsible设置控制此行为.
    @apiParam {Boolean} collapsed="false" 指定是否应在启动时折叠属性.
    @apiParam {String} tipLabel="'Attributions'" 用于按钮提示的文本标签.
    @apiParam {String} label="'i'" 用于折叠属性按钮的文本标签.也可以使用元素（例如span元素）代替文本.
    @apiParam {String} collapseLabel="'»'" 用于扩展属性按钮的文本标签.也可以使用元素（例如span元素）代替文本.
	@apiParam {Array} controlArr="[]" 加载需要的工具.
	

	@apiParam {function} getCollapsed 如果窗口小部件已折叠，则为True.
	@apiParam {function} getCollapsible 如果窗口小部件是可折叠的，则为True.
	@apiParam {function} setCollapsed 根据传递的参数折叠或展开.如果目标不可折叠或当前折叠状态已经是请求的状态，则不会执行任何操作.
	@apiParam {function} setCollapsible 设置目标是否应该是可折叠的.
*/

/** @api {get} getCollapsed getCollapsed-获取折叠状态
    @apiVersion 0.1.0
    @apiGroup 工具类
    @apiDescription 当属性当前折叠时返回true，否则返回false.
    @apiExample 使用方法:
    control.getCollapsed()
*/

/** @api {get} getCollapsible getCollapsible-获取折叠选项
    @apiVersion 0.1.0
    @apiGroup 工具类
    @apiDescription 如果属性可折叠，返回true，否则返回false.
    @apiExample 使用方法:
    control.getCollapsible()
*/

/** @api {set} setCollapsed setCollapsed-设置折叠状态
    @apiVersion 0.1.0
    @apiGroup 工具类
    @apiDescription 根据传递的参数折叠或展开.如果目标不可折叠或当前折叠状态已经是请求的状态，则不会执行任何操作.
    @apiExample 使用方法:
    control.setCollapsed(Boolean)
*/

/** @api {set} setCollapsible setCollapsible-设置折叠选项
    @apiVersion 0.1.0
    @apiGroup 工具类
    @apiDescription 设置目标是否应该是可折叠的.
    @apiExample 使用方法:
    control.setCollapsible(Boolean)
*/
var ZNXDControl = function ZNXDControl(opt_option) {
  if (!opt_option) return;
  this.className = opt_option.className ? opt_option.className : 'ol-attribution';
  this.target = opt_option.target ? opt_option.target : '';
  this.collapsible = opt_option.collapsible ? opt_option.collapsible : false;
  this.collapsed = opt_option.collapsed ? opt_option.collapsed : false;
  this.tipLabel = opt_option.tipLabel ? opt_option.tipLabel : 'Attributions';
  this.label = opt_option.label ? opt_option.label : 'i';
  this.collapseLabel = opt_option.collapseLabel ? opt_option.collapseLabel : '»';
  this.controlArr = opt_option.controlArr ? opt_option.controlArr : [];
  var collapsible = this.collapsible,
      collapsed = this.collapsed;
  this.attribution = new znxdmap.control.Attribution({
    className: 'ol-attribution',
    target: '',
    //如果希望在地图的视口之外渲染控件，请指定目标。
    collapsible: collapsible,
    collapsed: collapsed,
    tipLabel: 'Attributions',
    //按钮提示的文本标签
    label: 'i',
    //用于折叠属性按钮的文本标签
    collapseLabel: '»' //用于扩展属性按钮的文本标签

  });
  var controlArr = this.controlArr,
      attribution = this.attribution;
  this.control = new znxdmap.control.defaults({
    attributionOptions: attribution
  }).extend(controlArr);
  return this;
};
/**
 * 当前控件折叠状态
 * @return boolean
 */


ZNXDControl.prototype.getCollapsed = function () {
  return this.attribution.getCollapsed();
};
/**
 * 当前控件是否可折叠
 * @return boolean
 */


ZNXDControl.prototype.getCollapsible = function () {
  return this.attribution.getCollapsible();
};
/**
 * 设置控件是否展开
 * @param boolean _collapsible
 */


ZNXDControl.prototype.setCollapsed = function (boolean) {
  this.attribution.setCollapsed(boolean);
  this.control.setProperties({
    'attributionOptions': this.attribution
  });
};
/**
 * 设置控件是否展开
 * @param boolean _collapsible
 */


ZNXDControl.prototype.setCollapsible = function (boolean) {
  this.attribution.setCollapsible(boolean);
  this.control.setProperties({
    'attributionOptions': this.attribution
  });
};

exports.default = ZNXDControl;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ZNXD = __webpack_require__(22);

var _ZNXD2 = _interopRequireDefault(_ZNXD);

var _ZNXD3 = __webpack_require__(13);

var _ZNXD4 = _interopRequireDefault(_ZNXD3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Administrator on 2018-05-24.
 */
var ZNXDLayer = function ZNXDLayer(_name, opt_option) {
  //属性
  this.name = _name;
  this.visible = true;
  this.isBaseLayer = false;
  this.source = null;
  this.layer = null;
  this.zIndex = 0;
  return this;
};
/** @api {Object} DataLayer DataLayer-数据图层
    @apiVersion 0.1.0
    @apiGroup DataLayer
    @apiDescription 本类用于构造DataLayer.
    @apiParam {json} opt_option 图层参数.

    @apiParam {Boolean} isTiled 是否平铺.
    @apiParam {String} layerName 图层名称.
    @apiParam {String} titleName 图层标题.

    @apiParam {String} tileUrl 图层wms服务的url.
    @apiParam {String} vectorUrl 图层wfs服务的url.
    @apiParam {String} vectorLayerName 图层wfs服务的图层名称.

    @apiParam {String} geoField 图层的geometry（用于点选等）.
    @apiParam {Number} zIndex 图层层级.
    @apiParam {function} PopUpFun 图层点选响应回调函数.

    @apiParam {function} multipleFun 图层多选响应回调函数.
    @apiParam {String} clickType 点击图层的类型("polygon","point","line").
    @apiParam {String} layerSRS="'EPSG:4326'" 图层坐标系（若不是默认坐标系则需注入坐标系）.

    @apiParam {Number} opacity=1 图层透明度.
    @apiParam {String} layers 图层wfs layers（例如"tjys:cbjyqDK"）.
    @apiParam {String} ogcType "geo"或"arc".geoserver或arcserver发布的图层服务

    @apiParam {String} format="'image/png8'" 图层参数（默认）.
*/


ZNXDLayer.DataLayer = function (opt_option) {
  //opt_option与this的 同名属性直接对应
  this.isTiled = opt_option.isTiled;
  this.layerName = opt_option.layerName;
  this.titleName = opt_option.titleName;
  this.tileUrl = opt_option.tileUrl;
  this.vectorUrl = opt_option.vectorUrl;
  this.vectorLayerName = opt_option.vectorLayerName;
  this.geoField = opt_option.geoField;
  this.zIndex = opt_option.zIndex;
  this.PopUpFun = opt_option.PopUpFun;
  this.multipleFun = opt_option.multipleFun;
  this.bufferParameter = 20;
  this.clickType = opt_option.clickType;
  this.layerSRS = opt_option.layerSRS ? opt_option.layerSRS : "EPSG:4326";
  this.opacity = opt_option.opacity ? opt_option.opacity : 1;
  this.layers = opt_option.layers;
  this.ogcType = opt_option.ogcType;
  this.format = opt_option.format ? opt_option.format : "image/png8";
  this.dataTileLayer = new znxdmap.layer.Tile({
    visible: true,
    zIndex: this.zIndex,
    name: this.layerName,
    title: this.titleName,
    opacity: this.opacity,
    extent: _ZNXD4.default.bounds,
    source: new znxdmap.source.TileWMS({
      url: this.tileUrl,
      params: {
        LAYERS: this.layers,
        FORMAT: this.format,
        VERSION: "1.1.0",
        tiled: this.isTiled,
        STYLES: ""
      }
    })
  });
  this.dataSource = new znxdmap.source.Vector({
    projection: _ZNXD4.default.toProjection
  });
  this.dataVectoreLayer = new znxdmap.layer.Vector({
    title: "专题图层",
    source: this.dataSource,
    style: new znxdmap.style.Style({
      fill: new znxdmap.style.Fill({
        //矢量图层填充颜色，以及透明度
        color: "rgba(0,0,255,0.8)"
      }),
      stroke: new znxdmap.style.Stroke({
        //边界样式
        color: "rgba(255,0,0,1)",
        width: 1
      }),
      text: new znxdmap.style.Text({
        //文本样式
        font: "12px Calibri,sans-serif",
        fill: new znxdmap.style.Fill({
          color: "#000"
        }),
        stroke: new znxdmap.style.Stroke({
          color: "#fff",
          width: 3
        })
      }),
      image: new znxdmap.style.Circle({
        radius: 7,
        stroke: new znxdmap.style.Stroke({
          color: "#fff"
        }),
        fill: new znxdmap.style.Fill({
          color: "#FF7F50"
        })
      })
    })
  });
};
/** @api {set} setVisible setVisible-设置显隐
    @apiVersion 0.1.0
    @apiGroup DataLayer
    @apiDescription 用于DataLayer设置是否可选.
    @apiParam {Boolean} isVisible 设置true/false
*/


ZNXDLayer.DataLayer.prototype.setVisible = function (isVisible) {
  this.dataTileLayer.setVisible(isVisible);
  this.dataVectoreLayer.setVisible(isVisible);
};
/** @api {set} GetVectorUrl GetVectorUrl
    @apiVersion 0.1.0
    @apiGroup DataLayer
    @apiDescription 用于DataLayer获取VectorUrl.
*/


ZNXDLayer.DataLayer.prototype.GetVectorUrl = function (e) {
  return this.vectorUrl;
};
/** @api {set} ClickFun ClickFun-单选
    @apiVersion 0.1.0
    @apiGroup DataLayer
    @apiDescription 用于DataLayer图层单选.
*/


ZNXDLayer.DataLayer.prototype.ClickFun = function (e) {
  var _this = this;

  var callBackFun = function callBackFun(fs) {
    if (_this.isSelectEveryClear) {
      _this.dataSource.clear();
    }

    if (fs.length == 0) {
      return console.log("No feature found.");
    }

    _this.dataSource.addFeatures(fs[0]);

    if (_this.isPopUp) {
      if (_this.PopUpFun) _this.PopUpFun(fs[0]);
    }
  };

  var geo = new znxdmap.geom.Point([e.coordinate[0], e.coordinate[1]]);
  geo.transform(znxdmap.proj.get("EPSG:4326"), znxdmap.proj.get(_this.layerSRS));
  var buffer = e.map.getView().getResolution() * 5;
  var extent = [e.coordinate[0] - buffer, e.coordinate[1] - buffer, e.coordinate[0] + buffer, e.coordinate[1] + buffer];
  var geo_data = {
    service: "WFS",
    version: "1.0.0",
    request: "GetFeature",
    srsName: _ZNXD4.default.toProjection,
    typename: _this.vectorLayerName,
    outputFormat: "application/json"
  },
      arc_data = {
    srsName: _ZNXD4.default.toProjection,
    featureNS: _this.workspace,
    featurePrefix: _this.workspace,
    featureTypes: _this.vectorLayerName,
    outputFormat: "gml3"
  };

  if (this.clickType == "point" || this.clickType == "line") {
    geo_data.bbox = extent.join(",") + ",EPSG:4326";
    arc_data.filter = znxdmap.format.filter.bbox(_this.geoField, extent, _ZNXD4.default.toProjection);
  } else if (this.clickType == "polygon") {
    geo_data.CQL_FILTER = "INTERSECTS (" + _this.geoField + ", POINT(" + geo.getCoordinates()[0] + " " + geo.getCoordinates()[1] + "))";
    geo = new znxdmap.geom.Point([geo.getCoordinates()[1], geo.getCoordinates()[0]]); //arcgis 1.1.0相反

    arc_data.filter = znxdmap.format.filter.intersects(_this.geoField, geo, _ZNXD4.default.toProjection);
  } else {
    return console.log("Unknow clickType:" + this.clickType);
  }

  if (_this.ogcType == "geo") {
    _ZNXD2.default.POST(_this.vectorUrl, {
      type: _this.ogcType,
      obj: geo_data
    }, function (resjson) {
      var fs = new znxdmap.format.GeoJSON().readFeatures(resjson);
      callBackFun(fs);
    });
  } else if (_this.ogcType == "arc") {
    var featureRequest = new znxdmap.format.WFS().writeGetFeature(arc_data);

    _ZNXD2.default.POST(_this.vectorUrl, {
      type: _this.ogcType,
      obj: featureRequest
    }, function (resjson) {
      var gml = new znxdmap.format.GML();
      var fs = gml.readFeatures(resjson);
      callBackFun(fs);
    });
  } else {
    return console.log("Unknow ogc type:" + _this.ogcType);
  }
};
/** @api {set} BufferClickFun BufferClickFun-缓冲点选
    @apiVersion 0.1.0
    @apiGroup DataLayer
    @apiDescription 用于DataLayer图层缓冲点选.
*/


ZNXDLayer.DataLayer.prototype.BufferClickFun = function (e) {
  var _this = this;

  var buffer = e.map.getView().getResolution() * this.bufferParameter;
  var extent = [e.coordinate[0] - buffer, e.coordinate[1] - buffer, e.coordinate[0] + buffer, e.coordinate[1] + buffer];
  var geo_data = {
    service: "WFS",
    version: "1.0.0",
    request: "GetFeature",
    typename: _this.vectorLayerName,
    srsName: _ZNXD4.default.toProjection,
    outputFormat: "application/json",
    bbox: extent.join(",") + ",EPSG:4326"
  },
      arc_data = {
    srsName: _ZNXD4.default.toProjection,
    featureNS: _this.workspace,
    featurePrefix: _this.workspace,
    featureTypes: _this.vectorLayerName,
    outputFormat: "gml3",
    filter: znxdmap.format.filter.bbox(_this.geoField, extent, _ZNXD4.default.toProjection)
  };

  var callBackFun = function callBackFun(fs) {
    if (_this.isSelectEveryClear) {
      _this.dataSource.clear();
    }

    if (fs.length == 0) {
      return;
    }

    _this.dataSource.addFeatures(fs);

    if (_this.isMultipletrigger) {
      if (_this.multipleFun) _this.multipleFun(fs);
    }
  };

  if (_this.ogcType == "geo") {
    _ZNXD2.default.POST(_this.vectorUrl, {
      type: _this.ogcType,
      obj: geo_data
    }, function (resjson) {
      var fs = new znxdmap.format.GeoJSON().readFeatures(resjson);
      callBackFun(fs);
    });
  } else if (_this.ogcType == "arc") {
    var featureRequest = new znxdmap.format.WFS().writeGetFeature(arc_data);

    _ZNXD2.default.POST(_this.vectorUrl, {
      type: _this.ogcType,
      obj: featureRequest
    }, function (resjson) {
      var gml = new znxdmap.format.GML(),
          fs = [];
      var document = new DOMParser().parseFromString(resjson, "application/xml");
      var arrfeaturedoc = document.getElementsByTagName("gml:featureMember");

      for (var i = 0, len = arrfeaturedoc.length; i < len; i++) {
        //这个readFeatures继承自XMLFeature的readFeaturesFromDocument，当结果为gml循环时nextSibling为null,所以只读了第一个feature
        _ZNXD2.default.extend(fs, gml.readFeatures(arrfeaturedoc[i]));
      }

      callBackFun(fs);
    });
  } else {
    return console.log("Unknow ogc type:" + _this.ogcType);
  }
}; //是否触发多选响应


ZNXDLayer.DataLayer.prototype.isMultipletrigger = false; //是否出发单选响应

ZNXDLayer.DataLayer.prototype.isPopUp = false; //是否出发单选响应

ZNXDLayer.DataLayer.prototype.isSelectEveryClear = true; //单选响应方法

ZNXDLayer.DataLayer.prototype.PopUpFun = function (e) {}; //多选相应方法


ZNXDLayer.DataLayer.prototype.multipleFun = function (e) {};
/** @api {set} extentFun extentFun-框选
    @apiVersion 0.1.0
    @apiGroup DataLayer
    @apiDescription 用于DataLayer图层框选.
    @apiParam {extent} extent 框选参数
*/


ZNXDLayer.DataLayer.prototype.extentFun = function (extent) {
  var _this = this;

  var geo_data = {
    service: "WFS",
    version: "1.0.0",
    request: "GetFeature",
    typename: _this.vectorLayerName,
    srsName: _ZNXD4.default.toProjection,
    outputFormat: "application/json",
    bbox: extent.join(",") + ",EPSG:4326"
  },
      arc_data = {
    srsName: _ZNXD4.default.toProjection,
    featureNS: _this.workspace,
    featurePrefix: _this.workspace,
    featureTypes: _this.vectorLayerName,
    outputFormat: "gml3",
    filter: znxdmap.format.filter.bbox(_this.geoField, extent, _ZNXD4.default.toProjection)
  };

  var callBackFun = function callBackFun(fs) {
    if (_this.isSelectEveryClear) {
      _this.dataSource.clear();
    }

    if (fs.length == 0) {
      return;
    }

    _this.dataSource.addFeatures(fs);

    if (_this.isMultipletrigger) {
      if (_this.multipleFun) _this.multipleFun(fs);
    }
  };

  if (_this.ogcType == "geo") {
    _ZNXD2.default.POST(_this.vectorUrl, {
      type: _this.ogcType,
      obj: geo_data
    }, function (resjson) {
      var fs = new znxdmap.format.GeoJSON().readFeatures(resjson);
      callBackFun(fs);
    });
  } else if (_this.ogcType == "arc") {
    var featureRequest = new znxdmap.format.WFS().writeGetFeature(arc_data);

    _ZNXD2.default.POST(_this.vectorUrl, {
      type: _this.ogcType,
      obj: featureRequest
    }, function (resjson) {
      var gml = new znxdmap.format.GML(),
          fs = [];
      var document = new DOMParser().parseFromString(resjson, "application/xml");
      var arrfeaturedoc = document.getElementsByTagName("gml:featureMember");

      for (var i = 0, len = arrfeaturedoc.length; i < len; i++) {
        //这个readFeatures继承自XMLFeature的readFeaturesFromDocument，当结果为gml循环时nextSibling为null,所以只读了第一个feature
        _ZNXD2.default.extend(fs, gml.readFeatures(arrfeaturedoc[i]));
      }

      callBackFun(fs);
    });
  } else {
    return console.log("Unknow ogc type:" + _this.ogcType);
  }
};
/** @api {set} PolygonFun PolygonFun-多边形选择
    @apiVersion 0.1.0
    @apiGroup DataLayer
    @apiDescription 用于DataLayer数据图层多边形选择.
    @apiParam {_geometry} _geometry 多边形参数
*/


ZNXDLayer.DataLayer.prototype.PolygonFun = function (_geometry) {
  var _this = this;

  _geometry.transform(znxdmap.proj.get("EPSG:4326"), znxdmap.proj.get(this.layerSRS));

  var geo_data = {
    service: "WFS",
    version: "1.0.0",
    request: "GetFeature",
    typename: _this.vectorLayerName,
    srsName: _ZNXD4.default.toProjection,
    outputFormat: "application/json"
  },
      arc_data = {
    srsName: _ZNXD4.default.toProjection,
    featureNS: _this.workspace,
    featurePrefix: _this.workspace,
    featureTypes: _this.vectorLayerName,
    outputFormat: "gml3"
  };
  geo_data.CQL_FILTER = "INTERSECTS (" + _this.geoField + ", " + new znxdmap.format.WKT().writeGeometry(_geometry) + ")";
  var arr = [];

  for (var i = 0, len = _geometry.getCoordinates()[0].length; i < len; i++) {
    arr.push([_geometry.getCoordinates()[0][i][1], _geometry.getCoordinates()[0][i][0]]);
  }

  _geometry.setCoordinates([[arr]]); //arcgis 1.1.0相反


  arc_data.filter = znxdmap.format.filter.intersects(_this.geoField, _geometry, _ZNXD4.default.toProjection);

  var callBackFun = function callBackFun(fs) {
    if (_this.isSelectEveryClear) {
      _this.dataSource.clear();
    }

    if (fs.length == 0) {
      return;
    }

    _this.dataSource.addFeatures(fs);

    if (_this.isMultipletrigger) {
      if (_this.multipleFun) _this.multipleFun(fs);
    }
  };

  if (_this.ogcType == "geo") {
    _ZNXD2.default.POST(_this.vectorUrl, {
      type: _this.ogcType,
      obj: geo_data
    }, function (resjson) {
      var fs = new znxdmap.format.GeoJSON().readFeatures(resjson);
      callBackFun(fs);
    });
  } else if (_this.ogcType == "arc") {
    var featureRequest = new znxdmap.format.WFS().writeGetFeature(arc_data);

    _ZNXD2.default.POST(_this.vectorUrl, {
      type: _this.ogcType,
      obj: featureRequest
    }, function (resjson) {
      var gml = new znxdmap.format.GML(),
          fs = [];
      var document = new DOMParser().parseFromString(resjson, "application/xml");
      var arrfeaturedoc = document.getElementsByTagName("gml:featureMember");

      for (var i = 0, len = arrfeaturedoc.length; i < len; i++) {
        //这个readFeatures继承自XMLFeature的readFeaturesFromDocument，当结果为gml循环时nextSibling为null,所以只读了第一个feature
        _ZNXD2.default.extend(fs, gml.readFeatures(arrfeaturedoc[i]));
      }

      callBackFun(fs);
    });
  } else {
    return console.log("Unknow ogc type:" + _this.ogcType);
  }
};

ZNXDLayer.DataLayer.prototype.znxdmap;

ZNXDLayer.DataLayer.prototype.HookLayer = function (_map, _canselect) {
  this.znxdmap = _map;

  _map.addDataLayer(this);

  if (_canselect) {
    _map.canselectLayer = this;
  }
};
/** @api {set} ZoomToFilter ZoomToFilter-定位
    @apiVersion 0.1.0
    @apiGroup DataLayer
    @apiDescription 根据cql进行图层定位.
    @apiParam {CQL_FILTER} _filter CQL_FILTER
*/


ZNXDLayer.DataLayer.prototype.ZoomToFilter = function (_filter) {
  var _this = this;

  var geo_data = {
    service: "WFS",
    version: "1.0.0",
    request: "GetFeature",
    typename: _this.vectorLayerName,
    srsName: _ZNXD4.default.toProjection,
    outputFormat: "application/json",
    CQL_FILTER: _filter
  },
      arc_data = {
    srsName: _ZNXD4.default.toProjection,
    featureNS: _this.workspace,
    featurePrefix: _this.workspace,
    featureTypes: _this.vectorLayerName,
    outputFormat: "gml3",
    filter: _filter
  };

  var callBackFun = function callBackFun(fs) {
    var tempsource = new znxdmap.source.Vector({});
    tempsource.addFeatures(fs);

    _this.znxdmap.map.getView().fit(tempsource.getExtent());
  };

  if (_this.ogcType == "geo") {
    _ZNXD2.default.POST(_this.vectorUrl, {
      type: _this.ogcType,
      obj: geo_data
    }, function (resjson) {
      var fs = new znxdmap.format.GeoJSON().readFeatures(resjson);
      callBackFun(fs);
    });
  } else if (_this.ogcType == "arc") {
    var featureRequest = new znxdmap.format.WFS().writeGetFeature(arc_data);

    _ZNXD2.default.POST(_this.vectorUrl, {
      type: _this.ogcType,
      obj: featureRequest
    }, function (resjson) {
      var gml = new znxdmap.format.GML(),
          fs = [];
      var document = new DOMParser().parseFromString(resjson, "application/xml");
      var arrfeaturedoc = document.getElementsByTagName("gml:featureMember");

      for (var i = 0, len = arrfeaturedoc.length; i < len; i++) {
        //这个readFeatures继承自XMLFeature的readFeaturesFromDocument，当结果为gml循环时nextSibling为null,所以只读了第一个feature
        _ZNXD2.default.extend(fs, gml.readFeatures(arrfeaturedoc[i]));
      }

      callBackFun(fs);
    });
  } else {
    return console.log("Unknow ogc type:" + _this.ogcType);
  }
};
/** @api {set} SelectFilter SelectFilter-选取
    @apiVersion 0.1.0
    @apiGroup DataLayer
    @apiDescription 根据cql进行图层选取.
    @apiParam {CQL_FILTER} _filter CQL_FILTER
*/


ZNXDLayer.DataLayer.prototype.SelectFilter = function (_filter) {
  var _this = this;

  var geo_data = {
    service: "WFS",
    version: "1.0.0",
    request: "GetFeature",
    typename: _this.vectorLayerName,
    srsName: _ZNXD4.default.toProjection,
    outputFormat: "application/json",
    CQL_FILTER: _filter
  },
      arc_data = {
    srsName: _ZNXD4.default.toProjection,
    featureNS: _this.workspace,
    featurePrefix: _this.workspace,
    featureTypes: _this.vectorLayerName,
    outputFormat: "gml3",
    filter: _filter
  };

  var callBackFun = function callBackFun(fs) {
    _this.dataSource.clear();

    _this.dataSource.addFeatures(fs);
  };

  if (_this.ogcType == "geo") {
    _ZNXD2.default.POST(_this.vectorUrl, {
      type: _this.ogcType,
      obj: geo_data
    }, function (resjson) {
      var fs = new znxdmap.format.GeoJSON().readFeatures(resjson);
      callBackFun(fs);
    });
  } else if (_this.ogcType == "arc") {
    var featureRequest = new znxdmap.format.WFS().writeGetFeature(arc_data);

    _ZNXD2.default.POST(_this.vectorUrl, {
      type: _this.ogcType,
      obj: featureRequest
    }, function (resjson) {
      var gml = new znxdmap.format.GML(),
          fs = [];
      var document = new DOMParser().parseFromString(resjson, "application/xml");
      var arrfeaturedoc = document.getElementsByTagName("gml:featureMember");

      for (var i = 0, len = arrfeaturedoc.length; i < len; i++) {
        //这个readFeatures继承自XMLFeature的readFeaturesFromDocument，当结果为gml循环时nextSibling为null,所以只读了第一个feature
        _ZNXD2.default.extend(fs, gml.readFeatures(arrfeaturedoc[i]));
      }

      callBackFun(fs);
    });
  } else {
    return console.log("Unknow ogc type:" + _this.ogcType);
  }
};
/** @api {set} ZoomToSelectFilter ZoomToSelectFilter-定位与选取
    @apiVersion 0.1.0
    @apiGroup DataLayer
    @apiDescription 根据cql进行图层定位与选取.
    @apiParam {CQL_FILTER} _filter CQL_FILTER
    @apiParam {function} callback 回调函数
*/


ZNXDLayer.DataLayer.prototype.ZoomToSelectFilter = function (_filter, callback) {
  var duration = 2000;

  var _this = this;

  var geo_data = {
    service: "WFS",
    version: "1.0.0",
    request: "GetFeature",
    typename: _this.vectorLayerName,
    srsName: _ZNXD4.default.toProjection,
    outputFormat: "application/json",
    CQL_FILTER: _filter
  },
      arc_data = {
    srsName: _ZNXD4.default.toProjection,
    featureNS: _this.workspace,
    featurePrefix: _this.workspace,
    featureTypes: _this.vectorLayerName,
    outputFormat: "gml3",
    filter: _filter
  };

  var callBackFun = function callBackFun(fs) {
    if (_this.isSelectEveryClear) {
      _this.dataSource.clear();
    }

    _this.dataSource.addFeatures(fs);

    _this.znxdmap.map.getView().fit(_this.dataSource.getExtent(), {
      duration: duration
    });

    if (callback) {
      if (typeof callback == "function") callback(fs);
    }
  };

  if (_this.ogcType == "geo") {
    _ZNXD2.default.POST(_this.vectorUrl, {
      type: _this.ogcType,
      obj: geo_data
    }, function (resjson) {
      var fs = new znxdmap.format.GeoJSON().readFeatures(resjson);
      callBackFun(fs);
    });
  } else if (_this.ogcType == "arc") {
    var featureRequest = new znxdmap.format.WFS().writeGetFeature(arc_data);

    _ZNXD2.default.POST(_this.vectorUrl, {
      type: _this.ogcType,
      obj: featureRequest
    }, function (resjson) {
      var gml = new znxdmap.format.GML(),
          fs = [];
      var document = new DOMParser().parseFromString(resjson, "application/xml");
      var arrfeaturedoc = document.getElementsByTagName("gml:featureMember");

      for (var i = 0, len = arrfeaturedoc.length; i < len; i++) {
        //这个readFeatures继承自XMLFeature的readFeaturesFromDocument，当结果为gml循环时nextSibling为null,所以只读了第一个feature
        _ZNXD2.default.extend(fs, gml.readFeatures(arrfeaturedoc[i]));
      }

      callBackFun(fs);
    });
  } else {
    return console.log("Unknow ogc type:" + _this.ogcType);
  }
};
/** @api {Object} TileLayer TileLayer-wms
    @apiVersion 0.1.0
    @apiGroup TileLayer
    @apiDescription TileLayer属于展示图层，可以依据cql进行筛选并展示.
    @apiParam {json} opt_option 图层参数.

    @apiParam {Boolean} visible 是否显示.
    @apiParam {Boolean} isTiled 是否平铺.
    @apiParam {String} layerName 图层名称.
    @apiParam {String} titleName 图层标题.

    @apiParam {String} tileUrl 图层wms服务的url.
    @apiParam {Number} zIndex 图层层级.
    @apiParam {Number} opacity=1 图层透明度.
    @apiParam {String} layers 图层wms layers（例如"tjys:cbjyqDK"）.
    @apiParam {String} cqlFilter="'1=1'" 依据cql进行图层的筛选显隐.
    @apiParam {String} format="'image/png'" 图层参数（默认）.
*/


ZNXDLayer.TileLayer = function (opt_option) {
  this.visible = opt_option.visible;
  this.isTiled = opt_option.isTiled;
  this.layerName = opt_option.layerName;
  this.titleName = opt_option.titleName;
  this.tileUrl = opt_option.tileUrl;
  this.layers = opt_option.layers;
  this.zIndex = opt_option.zIndex;
  this.opacity = opt_option.opacity ? opt_option.opacity : 1;
  this.style = opt_option.style ? opt_option.style : "";
  this.format = opt_option.format ? opt_option.format : "image/png";
  this.cqlFilter = opt_option.cqlFilter ? opt_option.cqlFilter : "1=1";

  if (this.tileUrl != null) {
    this.tileLayer = new znxdmap.layer.Tile({
      visible: this.visible,
      zIndex: this.zIndex,
      name: this.layerName,
      title: this.titleName,
      opacity: this.opacity,
      extent: _ZNXD4.default.bounds,
      source: new znxdmap.source.TileWMS({
        url: this.tileUrl,
        params: {
          LAYERS: this.layers,
          FORMAT: this.format,
          VERSION: "1.1.0",
          tiled: this.isTiled,
          STYLES: this.style,
          CQL_FILTER: this.cqlFilter
        }
      })
    });
  }
};

ZNXDLayer.TileLayer.prototype.HookLayer = function (_map) {
  _map.addTileLayer(this);
};
/** @api {set} setVisible setVisible-设置显隐
    @apiVersion 0.1.0
    @apiGroup TileLayer
    @apiDescription 用于TileLayer设置显隐.
    @apiParam {Boolean} isVisible 设置true/false
*/


ZNXDLayer.TileLayer.prototype.setVisible = function (isVisible) {
  this.tileLayer.setVisible(isVisible);
};
/** @api {set} BingTileLayer bing-必应地图
    @apiVersion 0.1.0
    @apiGroup TileLayer
    @apiDescription 加载必应地图.
    @apiExample 使用方法:
      {
        LayerName: "BingTileLayer",
        LayerType: "BingTileLayer",
        LayerJson: {
          visible: true,
          opacity: 1,
          layerName: "BingTileLayer",
          titleName: "影像底图",
          zIndex: -2
        }
      }
    @apiParam {ALl} all 继承自TileLayer
*/


ZNXDLayer.BingTileLayer = function (opt_option) {
  var baseOptions = Object.assign({}, opt_option);
  delete baseOptions.tileUrl;
  ZNXDLayer.TileLayer.call(this, baseOptions);
  var maxZoom = baseOptions.maxZoom ? baseOptions.maxZoom : 16;
  var BingLayerimg = new znxdmap.layer.Tile({
    name: this.layerName,
    title: this.titleName,
    visible: this.visible,
    preload: Infinity,
    zIndex: this.zIndex,
    opacity: this.opacity,
    extent: _ZNXD4.default.bounds,
    source: new znxdmap.source.BingMaps({
      key: "ApOW9LMkerqWIVSnFauilSeaZyp8df66byy1USCTjgTdMvhb4y1iAhEsUHQfCgzq",
      imagerySet: "Aerial",
      maxZoom: maxZoom
    })
  });
  this.tileLayer = BingLayerimg;
};
/** @api {set} TiandituTileLayer tianditu-天地图
    @apiVersion 0.1.0
    @apiGroup TileLayer
    @apiDescription 
      1.'vec_c' 全球矢量地图服务
      2.'img_w' 全球影像地图服务
      3.'cva_c' 全球矢量中文注记服务
      4.'img_c' 全球影像底图服务
      5.'cia_c' 全球影像中文注记服务
      6.更多服务可查询http://www.tianditu.com/service/query.html#

    @apiExample 使用方法:
      {
        LayerName: "天地图",
        LayerType: "TianTileLayer",
        LayerJson: {
          visible: true,
          opacity: 1,
          layerName: "天地图",
          titleName: "影像底图",
          zIndex: -2,
          tk: "ba066f36b55f4810fd8a7f0c225d09ea",
          type: "img_c"
        }
      }

    @apiParam {ALl} all 继承自TileLayer
    @apiParam {Number} maxZoom=16 最大缩放层级
    @apiParam {String} tk 天地图密匙
    @apiParam {String} type 地图类型
*/


ZNXDLayer.TianTileLayer = function (opt_option) {
  var baseOptions = Object.assign({}, opt_option);
  delete baseOptions.tileUrl;
  ZNXDLayer.TileLayer.call(this, baseOptions);
  var maxZoom = baseOptions.maxZoom ? baseOptions.maxZoom : 16;
  var tk = baseOptions.tk ? baseOptions.tk : "ba066f36b55f4810fd8a7f0c225d09ea";
  var T = baseOptions.type ? baseOptions.type : "img_c";
  var TianLayer = new znxdmap.layer.Tile({
    name: this.layerName,
    title: this.titleName,
    visible: this.visible,
    zIndex: this.zIndex,
    opacity: this.opacity,
    extent: _ZNXD4.default.bounds,
    source: new znxdmap.source.XYZ({
      url: "http://t" + Math.round(Math.random() * 7) + ".tianditu.com/DataServer?T=" + T + "&x={x}&y={y}&l={z}&tk=" + tk,
      projection: "EPSG:4326",
      maxZoom: maxZoom
    })
  });
  this.tileLayer = TianLayer;
};

znxdmap.inherits(ZNXDLayer.BingTileLayer, ZNXDLayer.TileLayer);
znxdmap.inherits(ZNXDLayer.TianTileLayer, ZNXDLayer.TileLayer);
/** @api {Object} GraphicLayer GraphicLayer-渲染
    @apiVersion 0.1.0
    @apiGroup GraphicLayer
    @apiDescription 对发布的图层服务尽情自定义渲染.
    @apiParam {json} opt_option 图层参数.

    @apiParam {Boolean} visible 是否显示.
    @apiParam {String} layerName 图层名称.
    @apiParam {String} titleName 图层标题.

    @apiParam {String} vectorUrl 图层wfs服务的url.
    @apiParam {String} vectorLayerName 图层wfs服务的图层名称.
    @apiParam {Number} zIndex 图层层级.

    @apiParam {function} callBackFun 加载完成后回调函数.
    @apiParam {json} colorFilter 颜色筛选（根据某一字段的不同值区间进行颜色划分）.
    
    @apiParam {String} srsName 图层坐标系.
    @apiParam {String} ogcType "geo"或"arc".geoserver或arcserver发布的图层服务
    @apiParam {String} workspace 图层工作空间.
    @apiParam {String} opacity 图层透明度.
    @apiParam {znxdmap.style} graphicStyle 渲染样式.
*/

ZNXDLayer.GraphicLayer = function (opt_option) {
  this.layerName = opt_option.layerName;
  this.titleName = opt_option.titleName;
  this.visible = opt_option.visible ? opt_option.visible : true;
  this.vectorUrl = opt_option.vectorUrl;
  this.vectorLayerName = opt_option.vectorLayerName;
  this.zIndex = opt_option.zIndex ? opt_option.zIndex : 0;
  this.callBackFun = opt_option.callBackFun;
  this.colorFilter = opt_option.colorFilter ? opt_option.colorFilter : {};
  this.srsName = opt_option.srsName ? opt_option.srsName : _ZNXD4.default.srcProjection;
  this.ogcType = opt_option.ogcType;
  this.workspace = opt_option.workspace;
  this.opacity = opt_option.opacity;
  this.graphicStyle = opt_option.graphicStyle ? opt_option.graphicStyle : this.style;
  this.graphicSource = new znxdmap.source.Vector({
    projection: _ZNXD4.default.toProjection
  });
  this.graphicVectoreLayer = new znxdmap.layer.Vector({
    name: this.layerName,
    title: this.titleName,
    source: this.graphicSource,
    opacity: this.opacity,
    style: this.graphicStyle
  });
  this.highlightSource = new znxdmap.source.Vector({
    projection: _ZNXD4.default.toProjection
  });
  this.highlightOverlay = new znxdmap.layer.Vector({
    source: this.highlightSource,
    style: this.highlightStyle
  });
  this.highlight = null;

  if (this.vectorUrl != null) {
    var _this = this;

    var handleFunc = function handleFunc(fs) {
      if (fs.length == 0) {
        return;
      }

      var cFilter = _this.colorFilter;

      if (function () {
        for (var key in cFilter) {
          return false;
        }

        return true;
      }()) {
        console.log("颜色过滤为空，使用默认颜色");

        for (var j = 0, jlen = fs.length; j < jlen; j++) {
          fs[j].layerType = "graphic";
        }
      } else {
        if (!fs[0].getProperties()[cFilter.name]) console.log("color : name出错");
        var farr = cFilter.filter;

        for (var j = 0, jlen = fs.length; j < jlen; j++) {
          fs[j].layerType = "graphic";

          for (var i = 0, len = farr.length; i < len; i++) {
            if (fs[j].getProperties()[cFilter.name] >= farr[i].min && fs[j].getProperties()[cFilter.name] <= farr[i].max) {
              var color = znxdmap.color.asArray(farr[i].color);
              color = color.slice();
              color[3] = farr[i].colorOpacity;
              var stroke = znxdmap.color.asArray(farr[i].stroke);
              stroke = stroke.slice();
              stroke[3] = farr[i].strokeOpacity;
              fs[j].setStyle(new znxdmap.style.Style({
                fill: new znxdmap.style.Fill({
                  //矢量图层填充颜色，以及透明度
                  color: color
                }),
                stroke: new znxdmap.style.Stroke({
                  //边界样式
                  color: stroke,
                  width: 1
                }),
                text: new znxdmap.style.Text({
                  //文本样式
                  font: "12px Calibri,sans-serif",
                  fill: new znxdmap.style.Fill({
                    color: "#000"
                  }),
                  stroke: new znxdmap.style.Stroke({
                    color: "#fff",
                    width: 3
                  })
                })
              }));
            }
          }
        }
      }

      _this.graphicSource.addFeatures(fs);

      _this.znxdmap.addLayer(_this.highlightOverlay);

      _this.highlightOverlay.setZIndex(0);

      _this.znxdmap.on("singleclick", function (evt) {
        _this.displayFeatureInfo(evt.pixel, evt.coordinate);
      });

      _this.callBackFun(fs);
    };

    var geo_data = {
      service: "WFS",
      version: "1.0.0",
      request: "GetFeature",
      typename: _this.vectorLayerName,
      srsName: _ZNXD4.default.toProjection,
      outputFormat: "application/json"
    },
        arc_data = {
      srsName: _ZNXD4.default.toProjection,
      featureNS: _this.workspace,
      featurePrefix: _this.workspace,
      featureTypes: _this.vectorLayerName,
      outputFormat: "gml3"
    };

    if (_this.ogcType == "geo") {
      _ZNXD2.default.POST(_this.vectorUrl, {
        type: _this.ogcType,
        obj: geo_data
      }, function (resjson) {
        var fs = new znxdmap.format.GeoJSON().readFeatures(resjson);
        handleFunc(fs);
      });
    } else if (_this.ogcType == "arc") {
      var featureRequest = new znxdmap.format.WFS().writeGetFeature(arc_data);

      _ZNXD2.default.POST(_this.vectorUrl, {
        type: _this.ogcType,
        obj: featureRequest
      }, function (resjson) {
        var gml = new znxdmap.format.GML(),
            fs = [];
        var document = new DOMParser().parseFromString(resjson, "application/xml");
        var arrfeaturedoc = document.getElementsByTagName("gml:featureMember");

        for (var i = 0, len = arrfeaturedoc.length; i < len; i++) {
          //这个readFeatures继承自XMLFeature的readFeaturesFromDocument，当结果为gml循环时nextSibling为null,所以只读了第一个feature
          _ZNXD2.default.extend(fs, gml.readFeatures(arrfeaturedoc[i]));
        }

        handleFunc(fs);
      });
    } else {
      return console.log("Unknow ogc type:" + _this.ogcType);
    }
  }
};
/** @api {set} setVisible setVisible-设置显隐
    @apiVersion 0.1.0
    @apiGroup GraphicLayer
    @apiDescription 用于GraphicLayer设置显隐.
    @apiParam {Boolean} isVisible 设置true/false
*/


ZNXDLayer.GraphicLayer.prototype.setVisible = function (isVisible) {
  this.graphicVectoreLayer.setVisible(isVisible);
  this.highlightOverlay.setVisible(isVisible);
};

ZNXDLayer.GraphicLayer.prototype.znxdmap;

ZNXDLayer.GraphicLayer.prototype.HookLayer = function (_map, _canselect) {
  this.znxdmap = _map;

  _map.addGraphicLayer(this);

  if (_canselect) {
    _map.canselectLayer = this;
  }
};

ZNXDLayer.GraphicLayer.prototype.style = new znxdmap.style.Style({
  image: new znxdmap.style.Style({
    image: new znxdmap.style.Circle({
      radius: 5,
      fill: new znxdmap.style.Fill({
        color: "orange"
      })
    })
  })
});

ZNXDLayer.GraphicLayer.prototype.highlightStyle = function () {
  var style = new znxdmap.style.Style({
    fill: new znxdmap.style.Fill({
      //矢量图层填充颜色，以及透明度
      color: "rgba(0,255,0,0.8)"
    }),
    stroke: new znxdmap.style.Stroke({
      //边界样式
      color: "rgba(255,0,0,0.8)",
      width: 1
    }),
    text: new znxdmap.style.Text({
      //文本样式
      font: "12px Calibri,sans-serif",
      fill: new znxdmap.style.Fill({
        color: "#000"
      }),
      stroke: new znxdmap.style.Stroke({
        color: "#fff",
        width: 3
      })
    })
  });
  return style;
};

ZNXDLayer.GraphicLayer.prototype.displayFeatureInfo = function (pixel, coordinate) {
  var feature = this.znxdmap.map.forEachFeatureAtPixel(pixel, function (feature) {
    return feature;
  });

  if (!feature || feature.layerType !== "graphic") {
    return;
  } else {
    if (this.highlight !== feature) {
      this.highlightOverlay.getSource().addFeature(feature);

      if (this.highlight) {
        this.highlightOverlay.getSource().removeFeature(this.highlight);
      }

      this.highlight = feature;
    }
  }
};
/** @api {Object} ThemeLayer ThemeLayer-专题
    @apiVersion 0.1.0
    @apiGroup ThemeLayer
    @apiDescription 依据数据与已知的图层服务进行比较，按照比较结果进行专题渲染.
    @apiParam {json} opt_option 图层参数.
    @apiParam {Boolean} visible 是否显示.
    @apiParam {String} layerName 图层名称.
    @apiParam {String} titleName 图层标题.
    @apiParam {String} vectorUrl 图层wfs服务的url.
    @apiParam {String} vectorLayerName 图层wfs服务的图层名称.
    @apiParam {Number} zIndex 图层层级.
    @apiParam {String} srsName 图层坐标系.
    @apiParam {Number} opacity 透明度.
    @apiParam {String} ogcType "geo"或"arc".geoserver或arcserver发布的图层服务
    @apiParam {String} workspace 图层工作空间.

    @apiParam {json} jsonObj 依据图层某一字段值进行自定义样式渲染.
*/


ZNXDLayer.ThemeLayer = function (opt_option) {
  this.layerName = opt_option.layerName;
  this.titleName = opt_option.titleName;
  this.visible = opt_option.visible ? opt_option.visible : true;
  this.vectorUrl = opt_option.vectorUrl;
  this.vectorLayerName = opt_option.vectorLayerName;
  this.zIndex = opt_option.zIndex ? opt_option.zIndex : 0;
  this.srsName = opt_option.srsName ? opt_option.srsName : _ZNXD4.default.srcProjection;
  this.ogcType = opt_option.ogcType;
  this.workspace = opt_option.workspace;
  this.opacity = opt_option.opacity;
  this.jsonObj = opt_option.jsonObj;
  this.themeSource = new znxdmap.source.Vector({
    projection: _ZNXD4.default.toProjection
  });
  this.themeVectoreLayer = new znxdmap.layer.Vector({
    name: this.layerName,
    title: this.titleName,
    source: this.themeSource,
    opacity: this.opacity
  });

  var _this = this;

  if (this.vectorUrl != null) {
    var geo_data = {
      service: "WFS",
      version: "1.0.0",
      request: "GetFeature",
      srsName: _ZNXD4.default.toProjection,
      typename: _this.vectorLayerName,
      outputFormat: "application/json"
    },
        arc_data = {
      srsName: _ZNXD4.default.toProjection,
      featureNS: _this.workspace,
      featurePrefix: _this.workspace,
      featureTypes: _this.vectorLayerName,
      outputFormat: "gml3"
    };

    var callBackFun = function callBackFun(fs) {
      for (var i = 0; i < fs.length; i++) {
        var filtername = _this.jsonObj.filtername;
        var arr = _this.jsonObj.dataArr;

        for (var j = 0; j < arr.length; j++) {
          if (arr[j].filtername == fs[i].getProperties()[filtername]) {
            var color = znxdmap.color.asArray(arr[j].color);
            color = color.slice();
            color[3] = 1;
            var stroke = znxdmap.color.asArray(arr[j].stroke);
            stroke = stroke.slice();
            stroke[3] = 1;
            var themeStyle = new znxdmap.style.Style({
              fill: new znxdmap.style.Fill({
                color: color
              }),
              stroke: new znxdmap.style.Stroke({
                color: stroke,
                width: 1
              }),
              text: new znxdmap.style.Text({
                font: "12px Calibri,sans-serif",
                fill: new znxdmap.style.Fill({
                  color: "#000"
                }),
                stroke: new znxdmap.style.Stroke({
                  color: "#fff",
                  width: 3
                })
              })
            });
            themeStyle.getText().setText(arr[j].filtername + "\n" + arr[j].str);
            fs[i].setStyle(themeStyle);
          }
        }
      }

      _this.themeSource.addFeatures(fs);
    };

    if (_this.ogcType == "geo") {
      _ZNXD2.default.POST(_this.vectorUrl, {
        type: _this.ogcType,
        obj: geo_data
      }, function (resjson) {
        var fs = new znxdmap.format.GeoJSON().readFeatures(resjson);
        callBackFun(fs);
      });
    } else if (_this.ogcType == "arc") {
      var featureRequest = new znxdmap.format.WFS().writeGetFeature(arc_data);

      _ZNXD2.default.POST(_this.vectorUrl, {
        type: _this.ogcType,
        obj: featureRequest
      }, function (resjson) {
        var gml = new znxdmap.format.GML(),
            fs = [];
        var document = new DOMParser().parseFromString(resjson, "application/xml");
        var arrfeaturedoc = document.getElementsByTagName("gml:featureMember");

        for (var i = 0, len = arrfeaturedoc.length; i < len; i++) {
          //这个readFeatures继承自XMLFeature的readFeaturesFromDocument，当结果为gml循环时nextSibling为null,所以只读了第一个feature
          _ZNXD2.default.extend(fs, gml.readFeatures(arrfeaturedoc[i]));
        }

        callBackFun(fs);
      });
    } else {
      return console.log("Unknow ogc type:" + _this.ogcType);
    }
  }
};

ZNXDLayer.ThemeLayer.prototype.HookLayer = function (_map) {
  this.znxdmap = _map;

  _map.addThemeLayer(this);
};
/** @api {set} setVisible setVisible-设置显隐
    @apiVersion 0.1.0
    @apiGroup ThemeLayer
    @apiDescription 用于ThemeLayer设置显隐.
    @apiParam {Boolean} isVisible 设置true/false
*/


ZNXDLayer.ThemeLayer.prototype.setVisible = function (isVisible) {
  this.themeVectoreLayer.setVisible(isVisible);
};
/** @api {Object} PopupLayer PopupLayer图层
    @apiVersion 0.1.0
    @apiGroup PopupLayer
    @apiDescription 对与服务请求回来的数据添加pop容器，可以在其中编写HTML.
    @apiParam {json} opt_option 图层参数.
    @apiParam {Boolean} visible 是否显示.
    @apiParam {String} layerName 图层名称.
    @apiParam {String} titleName 图层标题.

    @apiParam {String} vectorUrl 图层wfs服务的url.
    @apiParam {String} vectorLayerName 图层wfs服务的图层名称.
    @apiParam {Number} zIndex 图层层级.
    @apiParam {String} srsName 图层坐标系.
    @apiParam {Number} opacity 透明度.
    @apiParam {String} ogcType "geo"或"arc".geoserver或arcserver发布的图层服务
    @apiParam {String} workspace 图层工作空间.

    @apiParam {json} jsonObj 依据图层某一字段值进行过滤.
    @apiParam {function} setElementInfo 回调函数（参数为popup->element, data）对于覆盖图层设置弹出效果，可以编写任意html代码（示例中使用的是echarts）.
*/


ZNXDLayer.PopupLayer = function (opt_option) {
  this.layerName = opt_option.layerName;
  this.titleName = opt_option.titleName;
  this.visible = opt_option.visible ? opt_option.visible : true;
  this.vectorUrl = opt_option.vectorUrl;
  this.vectorLayerName = opt_option.vectorLayerName;
  this.zIndex = opt_option.zIndex ? opt_option.zIndex : 0;
  this.srsName = opt_option.srsName ? opt_option.srsName : _ZNXD4.default.srcProjection;
  this.ogcType = opt_option.ogcType;
  this.workspace = opt_option.workspace;
  this.opacity = opt_option.opacity;
  this.jsonObj = opt_option.jsonObj;
  this.popupSource = new znxdmap.source.Vector({
    projection: _ZNXD4.default.toProjection
  });
  this.popupVectoreLayer = new znxdmap.layer.Vector({
    name: this.layerName,
    title: this.titleName,
    source: this.popupSource,
    opacity: this.opacity,
    style: new znxdmap.style.Style({
      fill: new znxdmap.style.Fill({
        //矢量图层填充颜色，以及透明度
        color: "rgba(0,0,255,0)"
      }),
      stroke: new znxdmap.style.Stroke({
        //边界样式
        color: "rgba(255,0,0,0)",
        width: 1
      }),
      text: new znxdmap.style.Text({
        //文本样式
        font: "12px Calibri,sans-serif",
        fill: new znxdmap.style.Fill({
          color: "#000"
        }),
        stroke: new znxdmap.style.Stroke({
          color: "#fff",
          width: 3
        })
      })
    })
  });
  this.setElementInfo = opt_option.setElementInfo;

  var _this = this;

  if (this.vectorUrl != null) {
    var geo_data = {
      service: "WFS",
      version: "1.0.0",
      request: "GetFeature",
      typename: _this.vectorLayerName,
      srsName: _ZNXD4.default.toProjection,
      outputFormat: "application/json"
    },
        arc_data = {
      srsName: _ZNXD4.default.toProjection,
      featureNS: _this.workspace,
      featurePrefix: _this.workspace,
      featureTypes: _this.vectorLayerName,
      outputFormat: "gml3"
    };

    var callBackFun = function callBackFun(fs) {
      for (var i = 0; i < fs.length; i++) {
        var filtername = _this.jsonObj.filtername;
        var arr = _this.jsonObj.dataArr;

        for (var j = 0; j < arr.length; j++) {
          if (arr[j].filtername == fs[i].getProperties()[filtername]) {
            var div = document.createElement("div");
            var str = '<div style="width:50px;height:50px;"></div>';
            div.innerHTML = str;
            var infoLabel = new znxdmap.Overlay({
              element: div,
              autoPan: true,
              autoPanAnimation: {
                duration: 250
              }
            });

            _this.znxdmap.map.addOverlay(infoLabel);

            var xyarr = fs[i].getGeometry().getExtent();
            var coord = [(xyarr[0] + xyarr[2]) / 2, (xyarr[1] + xyarr[3]) / 2];
            infoLabel.setPosition(coord);

            _this.setElementInfo(infoLabel, arr[j].data);

            break;
          }
        }
      }

      _this.popupSource.addFeatures(fs);
    };

    if (_this.ogcType == "geo") {
      _ZNXD2.default.POST(_this.vectorUrl, {
        type: _this.ogcType,
        obj: geo_data
      }, function (resjson) {
        var fs = new znxdmap.format.GeoJSON().readFeatures(resjson);
        callBackFun(fs);
      });
    } else if (_this.ogcType == "arc") {
      var featureRequest = new znxdmap.format.WFS().writeGetFeature(arc_data);

      _ZNXD2.default.POST(_this.vectorUrl, {
        type: _this.ogcType,
        obj: featureRequest
      }, function (resjson) {
        var gml = new znxdmap.format.GML(),
            fs = [];
        var document = new DOMParser().parseFromString(resjson, "application/xml");
        var arrfeaturedoc = document.getElementsByTagName("gml:featureMember");

        for (var i = 0, len = arrfeaturedoc.length; i < len; i++) {
          //这个readFeatures继承自XMLFeature的readFeaturesFromDocument，当结果为gml循环时nextSibling为null,所以只读了第一个feature
          _ZNXD2.default.extend(fs, gml.readFeatures(arrfeaturedoc[i]));
        }

        callBackFun(fs);
      });
    } else {
      return console.log("Unknow ogc type:" + _this.ogcType);
    }
  }
};

ZNXDLayer.PopupLayer.prototype.HookLayer = function (_map) {
  this.znxdmap = _map;

  _map.addPopupLayer(this);
};
/** @api {set} setVisible setVisible-设置显隐
    @apiVersion 0.1.0
    @apiGroup PopupLayer
    @apiDescription 用于PopupLayer设置显隐.
    @apiParam {Boolean} isVisible 设置true/false
*/


ZNXDLayer.PopupLayer.prototype.setVisible = function (isVisible) {
  this.popupVectoreLayer.setVisible(isVisible);
};
/** @api {Object} Trackback Trackback-轨迹
    @apiVersion 0.1.0
    @apiGroup Trackback
    @apiDescription 轨迹跟踪.
    @apiParam {json} opt_option 图层参数.
    @apiParam {Array} routeCoords 轨迹点数组.
    @apiParam {Number} speed 移动速度.
    @apiParam {route} width 轨迹宽度.
    @apiParam {route} color="[rgba]" 轨迹颜色.

    @apiParam {icon} anchor="[0.5, 0.5]" 轨迹点数组.
    @apiParam {icon} scale="1" 轨迹点数组.
    @apiParam {icon} size 大小以像素为单位.
    @apiParam {icon} offset="[0, 0]" 偏移.
    @apiParam {icon} opacity="1" 图标的不透明度.
    @apiParam {icon} rotation="0" 角度.
    @apiParam {icon} src 移动点图文件.
    @apiExample 使用方法:
    var object = {
      routeCoords: this.getCoords(),
      speed: 500,
      route: {
        width: 6,
        color: [237,212,0,0.8]
      },
      icon: {
        anchor: [0.5, 0.5],
        scale: 0.8,
        size: [25, 25],
        offset: [0, 0],
        opacity: 1,
        rotation: 0,
        src: require('../../static/marker.png')
      }
    }
    this.track = new ZNXDWEBGIS.Layer.Trackback(this.map, object);
    this.track.startAnimation();
    this.track.stopAnimation();

    @apiParam {function} startAnimation 开始动画.
    @apiParam {function} stopAnimation 停止动画.
    @apiParam {function} setSpeed 设置速度.
*/


ZNXDLayer.Trackback = function (map, opt_option) {
  this.znxdmap = map;
  this.routeCoords = opt_option.routeCoords;
  this.speed = opt_option.speed; //时间间隔，例如1秒走完tempIndex.max点

  var _this = this;

  this.styles = {
    route: new znxdmap.style.Style({
      stroke: new znxdmap.style.Stroke({
        width: opt_option.route.width,
        color: opt_option.route.color
      })
    }),
    geoMarker: new znxdmap.style.Style({
      image: new znxdmap.style.Icon({
        anchor: opt_option.icon.anchor ? opt_option.icon.anchor : [0.5, 0.5],
        scale: opt_option.icon.scale ? opt_option.icon.scale : 1,
        size: opt_option.icon.size,
        offset: opt_option.icon.offset ? opt_option.icon.offset : [0, 0],
        opacity: opt_option.icon.opacity ? opt_option.icon.opacity : 1,
        rotation: opt_option.icon.rotation ? opt_option.icon.rotation : 0,
        src: opt_option.icon.src,
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels'
      })
    })
  };
  this.index = 0; //暂定将两点拆分成20个点，用来平滑显示

  this.tempIndex = {
    max: 20,
    temp: 0
  };
  this.routeFeature = new znxdmap.Feature({
    type: "route",
    geometry: new znxdmap.geom.LineString(_this.routeCoords)
  });
  this.geoMarker = new znxdmap.Feature({
    type: "geoMarker",
    geometry: new znxdmap.geom.Point(_this.routeCoords[0])
  });
  this.vectorLayer = new znxdmap.layer.Vector({
    source: new znxdmap.source.Vector({
      features: [_this.routeFeature, _this.geoMarker]
    }),
    style: function style(feature) {
      return _this.styles[feature.get("type")];
    }
  });
  this.znxdmap.addLayer(this.vectorLayer);

  this.moveFeature = function (event) {
    var vectorContent = event.vectorContext; // 开始渲染时间 frameState.time(毫秒)
    // var elapsedTime = frameState.time - _this.now; //运行时间

    if (_this.routeCoords[_this.index - 1]) {
      var frameState = event.frameState; //如果runder的渲染时间比平均中间点移动花费时间大就继续，使用pTime作为数组下标条件  //((_this.speed) / (_this.tempIndex.max))每个点花费时间

      if (frameState.time - _this.now >= _this.speed / _this.tempIndex.max) {
        _this.now = frameState.time;

        var rotate = _ZNXD2.default.getRotate(_this.routeCoords[_this.index - 1], _this.routeCoords[_this.index]);

        _this.styles.geoMarker.getImage().setRotation(rotate);

        var tempInit = [_this.routeCoords[_this.index - 1], _this.routeCoords[_this.index]];

        var tempCoords = _ZNXD2.default.getMiddleCoords(tempInit, _this.tempIndex.max);

        if (_this.tempIndex.temp >= tempCoords.length) {
          console.log("waitting newPoint");

          _this.znxdmap.map.render();

          return;
        }

        _this.geoMarker.getGeometry().setCoordinates(tempCoords[_this.tempIndex.temp]);

        vectorContent.drawFeature(_this.geoMarker, _this.styles.geoMarker);
        _this.tempIndex.temp++;
      }
    } else {
      if (_this.index >= _this.routeCoords.length) {
        console.log("error");

        _this.znxdmap.map.render();

        return;
      }

      _this.geoMarker.getGeometry().setCoordinates(_this.routeCoords[_this.index]);

      vectorContent.drawFeature(_this.geoMarker, _this.styles.geoMarker);
    } //此处待扩展


    _this.znxdmap.map.render();
  }; //初始添加渲染事件


  this.geoMarker.setStyle(null);
  this.znxdmap.on("postcompose", this.moveFeature); //地图渲染事件

  this.znxdmap.render();
  this.now = new Date().getTime(); //从 1970/01/01 至今已过去的时间(毫秒)

  return this;
}; // ZNXDLayer.Trackback.prototype.startAnimation = function () {
//   if (this.animating) {
//     this.stopAnimation(false);
//   } else {
//     this.animating = true;
//     this.geoMarker.setStyle(null);
//   }
// }
// ZNXDLayer.Trackback.prototype.stopAnimation = function (ended) {
//   this.animating = false;
//   this.index = 0;
//   var coord = ended ? this.routeCoords[this.routeCoords.length - 1] : this.routeCoords[0];
//   (this.geoMarker.getGeometry()).setCoordinates(coord);
//   this.znxdmap.map.un("postcompose", this.moveFeature);
// }


ZNXDLayer.Trackback.prototype.update = function () {
  this.index++;
  this.tempIndex.temp = 0;
};

ZNXDLayer.Trackback.prototype.setSpeed = function (_speed) {
  this.speed = _speed;
};
/** @api {Object} CanvasLayer CanvasLayer
    @apiVersion 0.1.0
    @apiGroup CanvasLayer
    @apiDescription 基于canvas的拓展图层，flashmarker,flashline依赖于它.
    @apiParam {znxdmap} znxdmap 初始化地图.
    @apiParam {function} render 渲染函数.
    @apiExample 使用方法:
    animationLayer = new ZNXDLayer.FlashMarker.CanvasLayer({
        map: map,
        update: function
    });
*/


ZNXDLayer.CanvasLayer = function (options) {
  this.options = options || {};
  this.paneName = this.options.paneName || 'labelPane';
  this.zIndex = this.options.zIndex || 0;
  this._map = options.map;
  this._lastDrawTime = null;
  this.show();
};

ZNXDLayer.CanvasLayer.prototype.initialize = function () {
  var map = this._map;
  var canvas = this.canvas = document.createElement('canvas');
  var ctx = this.ctx = this.canvas.getContext('2d');
  canvas.style.cssText = 'position:absolute;' + 'left:0;' + 'top:0;' + 'z-index:' + this.zIndex + ';' + 'pointer-events: none;';
  this.adjustSize();
  this.adjustRatio(ctx);
  map.getViewport().appendChild(canvas);
  var that = this;
  map.getView().on('propertychange', function () {
    $(canvas).hide();
  });
  map.on("moveend", function () {
    $(canvas).show();
    that.adjustSize();

    that._draw();
  });
};

ZNXDLayer.CanvasLayer.prototype.adjustSize = function () {
  var size = this._map.getSize();

  var canvas = this.canvas;
  canvas.width = size[0];
  canvas.height = size[1];
  canvas.style.width = canvas.width + 'px';
  canvas.style.height = canvas.height + 'px';
};

ZNXDLayer.CanvasLayer.prototype.adjustRatio = function (ctx) {
  var backingStore = ctx.backingStorePixelRatio || ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;
  var pixelRatio = (window.devicePixelRatio || 1) / backingStore;
  var canvasWidth = ctx.canvas.width;
  var canvasHeight = ctx.canvas.height;
  ctx.canvas.width = canvasWidth * pixelRatio;
  ctx.canvas.height = canvasHeight * pixelRatio;
  ctx.canvas.style.width = canvasWidth + 'px';
  ctx.canvas.style.height = canvasHeight + 'px';
  ctx.scale(pixelRatio, pixelRatio);
};

ZNXDLayer.CanvasLayer.prototype.draw = function () {
  var self = this;
  var args = arguments;
  clearTimeout(self.timeoutID);
  self.timeoutID = setTimeout(function () {
    self._draw();
  }, 15);
};

ZNXDLayer.CanvasLayer.prototype._draw = function () {
  var map = this._map;
  var size = map.getSize();
  var center = map.getView().getCenter();

  if (center) {
    var pixel = map.getPixelFromCoordinate(center);
    this.canvas.style.left = pixel[0] - size[0] / 2 + 'px';
    this.canvas.style.top = pixel[1] - size[1] / 2 + 'px';
    this.options.update && this.options.update.call(this);
  }
};

ZNXDLayer.CanvasLayer.prototype.getContainer = function () {
  return this.canvas;
};

ZNXDLayer.CanvasLayer.prototype.show = function () {
  this.initialize();
  this.canvas.style.display = 'block';
};

ZNXDLayer.CanvasLayer.prototype.hide = function () {
  this.canvas.style.display = 'none';
};

ZNXDLayer.CanvasLayer.prototype.setZIndex = function (zIndex) {
  this.canvas.style.zIndex = zIndex;
};

ZNXDLayer.CanvasLayer.prototype.getZIndex = function () {
  return this.zIndex;
};
/** @api {Object} FlashMarker FlashMarker-动态点
    @apiVersion 0.1.0
    @apiGroup CanvasLayer
    @apiDescription 动态点.
    @apiParam {znxdmap} znxdmap 初始化地图.
    @apiParam {Object} dataSet 参数.

    name: '北京',
	lnglat: ['116.3', '39.9'],
	color: '#1070FF',
	type: 'circle',
	speed: 0.2,
    @apiParam {string} name 点的描述.
    @apiParam {Array} lnglat 点的位置.
    @apiParam {string} color 颜色.
    @apiParam {string} type 点扩散类型（暂时只有圆形和椭圆）.
    @apiParam {number} speed 动画速度.
    @apiExample 使用方法:
    new ZNXDWEBGIS.Layer.FlashMarker(this.map, this.markers);
*/


ZNXDLayer.FlashMarker = function (znxdmap, dataSet) {
  var _this = this;

  this.map = znxdmap.map;
  this.animationLayer = null;
  this.markers = [];

  var width = _this.map.getSize()[0],
      height = _this.map.getSize()[1],
      animationFlag = true;

  this.addMarker = function addMarker(dataSet) {
    if (_this.markers.length > 0) return;
    _this.markers = [];

    for (var i = 0; i < dataSet.length; i++) {
      _this.markers.push(new ZNXDLayer.FlashMarker.Marker(znxdmap, dataSet[i]));
    }
  }; //上层canvas渲染，动画效果


  var render = function render() {
    var animationCtx = _this.animationLayer.canvas.getContext('2d');

    if (!animationCtx) {
      return;
    }

    if (!animationFlag) {
      animationCtx.clearRect(0, 0, width, height);
      return;
    }

    _this.addMarker(dataSet);

    animationCtx.fillStyle = 'rgba(0,0,0,.95)';
    var prev = animationCtx.globalCompositeOperation;
    animationCtx.globalCompositeOperation = 'destination-in';
    animationCtx.fillRect(0, 0, width, height);
    animationCtx.globalCompositeOperation = prev;

    for (var i = 0; i < _this.markers.length; i++) {
      var marker = _this.markers[i];
      marker.draw(animationCtx);
    }
  };

  var global = typeof window === 'undefined' ? {} : window;

  var requestAnimationFrame = global.requestAnimationFrame || global.mozRequestAnimationFrame || global.webkitRequestAnimationFrame || global.msRequestAnimationFrame || function (callback) {
    return global.setTimeout(callback, 1000 / 60);
  }; //初始化


  var init = function init() {
    _this.animationLayer = new ZNXDLayer.CanvasLayer({
      map: _this.map,
      update: render
    });
    _this.animationLayer.markers = _this.markers;

    (function drawFrame() {
      requestAnimationFrame(drawFrame);
      render();
    })();
  };

  init();
  return this;
};

ZNXDLayer.FlashMarker.Marker = function (map, opts) {
  this.map = map.map;
  this.city = opts.name;
  this.location = opts.lnglat;
  this.color = opts.color;
  this.type = opts.type || 'circle';
  this.speed = opts.speed || 0.15;
  this.size = 0;
  this.max = opts.max || 20;
};

ZNXDLayer.FlashMarker.Marker.prototype.draw = function (context) {
  context.save();
  context.beginPath();

  switch (this.type) {
    case 'circle':
      this._drawCircle(context);

      break;

    case 'ellipse':
      this._drawEllipse(context);

      break;

    case 'star':
      this._drawStar(context);

      break;

    default:
      break;
  }

  context.closePath();
  context.restore();
  this.size += this.speed;

  if (this.size > this.max) {
    this.size = 0;
  }
};

ZNXDLayer.FlashMarker.Marker.prototype._drawCircle = function (context) {
  var pixel = this.pixel || this.map.getPixelFromCoordinate(this.location);
  context.strokeStyle = this.color; // context.moveTo(pixel[0], pixel[1]);

  if (pixel) {
    context.arc(pixel[0], pixel[1], this.size, 0, Math.PI * 2);
    context.stroke();
  }
};

ZNXDLayer.FlashMarker.Marker.prototype._drawEllipse = function (context) {
  var pixel = this.pixel || this.map.getPixelFromCoordinate(this.location);

  if (pixel) {
    var x = pixel[0],
        y = pixel[1],
        w = this.size,
        h = this.size / 2,
        kappa = 0.5522848,
        // control point offset horizontal
    ox = w / 2 * kappa,
        // control point offset vertical
    oy = h / 2 * kappa,
        // x-start
    xs = x - w / 2,
        // y-start
    ys = y - h / 2,
        // x-end
    xe = x + w / 2,
        // y-end
    ye = y + h / 2;
    context.strokeStyle = this.color;
    context.moveTo(xs, y);
    context.bezierCurveTo(xs, y - oy, x - ox, ys, x, ys);
    context.bezierCurveTo(x + ox, ys, xe, y - oy, xe, y);
    context.bezierCurveTo(xe, y + oy, x + ox, ye, x, ye);
    context.bezierCurveTo(x - ox, ye, xs, y + oy, xs, y);
    context.stroke();
  }
};

ZNXDLayer.FlashMarker.Marker.prototype._drawStar = function (context) {
  var pixel = this.pixel || this.map.getPixelFromCoordinate(this.location);
  context.strokeStyle = this.color; // context.moveTo(pixel[0], pixel[1]);

  if (pixel) {
    context.beginPath(); //设置是个顶点的坐标，根据顶点制定路径   

    for (var i = 0; i < 5; i++) {
      context.lineTo(Math.cos((18 + i * 72) / 180 * Math.PI) * this.size + pixel[0], -Math.sin((18 + i * 72) / 180 * Math.PI) * this.size + pixel[1]);
      context.lineTo(Math.cos((54 + i * 72) / 180 * Math.PI) * this.size * 0.5 + pixel[0], -Math.sin((54 + i * 72) / 180 * Math.PI) * this.size * 0.5 + pixel[1]);
    }

    context.closePath(); //设置边框样式以及填充颜色   

    context.lineWidth = "3";
    context.fillStyle = "rgba(225,225,225,0)";
    context.strokeStyle = this.color;
    context.fill();
    context.stroke();
  }
};
/** @api {Object} FlashLine FlashLine-动态线
    @apiVersion 0.1.0
    @apiGroup CanvasLayer
    @apiDescription 动态线.
    @apiParam {znxdmap} znxdmap 初始化地图.
    @apiParam {Number} markerRadius 点半径.
    @apiParam {String} markerColor=取线条颜色 点颜色.
    @apiParam {String} lineType 线条类型 solid、dashed、dotted.
    @apiParam {Number} lineWidth 线条宽度.
    @apiParam {Array} colors 线条颜色.
    @apiParam {Number} moveRadius 移动点半径.
    @apiParam {String} fillColor 移动点颜色.
    @apiParam {String} shadowColor 移动点阴影颜色.
    @apiParam {Number} shadowBlur 移动点阴影大小.
    @apiParam {Array} data 数据.
    @apiExample 使用方法:
    ZNXDWEBGIS.Layer.FlashLine(this.map, {
        markerRadius: 2,
        markerColor: null,
        lineType: "solid",
        lineWidth: 2,
        colors: ["#F9815C"],
        moveRadius: 3,
        fillColor: "#fff",
        shadowColor: "#fff",
        shadowBlur: 6,
        data: [
          {
            from: {
              city: "广州",
              lnglat: [113.270793, 23.135308]
            },
            to: {
              city: "衡山",
              lnglat: [112.612787, 27.317599]
          }
        }]
      });
*/


ZNXDLayer.FlashLine = function (znxdmap, userOptions) {
  var map = znxdmap.map;
  var self = this; //默认参数

  var options = {
    //marker点半径
    markerRadius: 3,
    //marker点颜色,为空或null则默认取线条颜色
    markerColor: '#fff',
    //线条类型 solid、dashed、dotted
    lineType: 'solid',
    //线条宽度
    lineWidth: 1,
    //线条颜色
    colors: ['#F9815C', '#F8AB60', '#EDCC72', '#E2F194', '#94E08A', '#4ECDA5'],
    //移动点半径
    moveRadius: 2,
    //移动点颜色
    fillColor: '#fff',
    //移动点阴影颜色
    shadowColor: '#fff',
    //移动点阴影大小
    shadowBlur: 5
  }; //全局变量

  var baseLayer = null,
      animationLayer = null,
      width = map.getSize()[0],
      height = map.getSize()[1],
      animationFlag = true,
      markLines = []; //参数合并

  var merge = function merge(userOptions, options) {
    Object.keys(userOptions).forEach(function (key) {
      options[key] = userOptions[key];
    });
  };

  function Marker(opts) {
    this.city = opts.city;
    this.location = opts.location;
    this.color = opts.color;
  }

  Marker.prototype.draw = function (context) {
    var pixel = this.pixel = map.getPixelFromCoordinate(this.location);
    context.save();
    context.beginPath();
    context.fillStyle = options.markerColor || this.color;
    context.arc(pixel[0], pixel[1], options.markerRadius, 0, Math.PI * 2, true);
    context.closePath();
    context.fill();
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.font = '12px Microsoft YaHei';
    context.fillStyle = this.color;
    context.fillText(this.city, pixel[0], pixel[1] - 10);
    context.restore();
  };

  function MarkLine(opts) {
    this.from = opts.from;
    this.to = opts.to;
    this.id = opts.id;
    this.step = 0;
  }

  MarkLine.prototype.getPointList = function (from, to) {
    var points = [[from[0], from[1]], [to[0], to[1]]];
    var ex = points[1][0];
    var ey = points[1][1];
    points[3] = [ex, ey];
    points[1] = this.getOffsetPoint(points[0], points[3]);
    points[2] = this.getOffsetPoint(points[3], points[0]);
    points = this.smoothSpline(points, false); //修正最后一点在插值产生的偏移

    points[points.length - 1] = [ex, ey];
    return points;
  };

  MarkLine.prototype.getOffsetPoint = function (start, end) {
    var distance = this.getDistance(start, end) / 3; //除以3？

    var angle, dX, dY;
    var mp = [start[0], start[1]];
    var deltaAngle = -0.2; //偏移0.2弧度

    if (start[0] != end[0] && start[1] != end[1]) {
      //斜率存在
      var k = (end[1] - start[1]) / (end[0] - start[0]);
      angle = Math.atan(k);
    } else if (start[0] == end[0]) {
      //垂直线
      angle = (start[1] <= end[1] ? 1 : -1) * Math.PI / 2;
    } else {
      //水平线
      angle = 0;
    }

    if (start[0] <= end[0]) {
      angle -= deltaAngle;
      dX = Math.round(Math.cos(angle) * distance);
      dY = Math.round(Math.sin(angle) * distance);
      mp[0] += dX;
      mp[1] += dY;
    } else {
      angle += deltaAngle;
      dX = Math.round(Math.cos(angle) * distance);
      dY = Math.round(Math.sin(angle) * distance);
      mp[0] -= dX;
      mp[1] -= dY;
    }

    return mp;
  };

  MarkLine.prototype.smoothSpline = function (points, isLoop) {
    var len = points.length;
    var ret = [];
    var distance = 0;

    for (var i = 1; i < len; i++) {
      distance += this.getDistance(points[i - 1], points[i]);
    }

    var segs = distance / 2;
    segs = segs < len ? len : segs;

    for (var i = 0; i < segs; i++) {
      var pos = i / (segs - 1) * (isLoop ? len : len - 1);
      var idx = Math.floor(pos);
      var w = pos - idx;
      var p0;
      var p1 = points[idx % len];
      var p2;
      var p3;

      if (!isLoop) {
        p0 = points[idx === 0 ? idx : idx - 1];
        p2 = points[idx > len - 2 ? len - 1 : idx + 1];
        p3 = points[idx > len - 3 ? len - 1 : idx + 2];
      } else {
        p0 = points[(idx - 1 + len) % len];
        p2 = points[(idx + 1) % len];
        p3 = points[(idx + 2) % len];
      }

      var w2 = w * w;
      var w3 = w * w2;
      ret.push([this.interpolate(p0[0], p1[0], p2[0], p3[0], w, w2, w3), this.interpolate(p0[1], p1[1], p2[1], p3[1], w, w2, w3)]);
    }

    return ret;
  };

  MarkLine.prototype.interpolate = function (p0, p1, p2, p3, t, t2, t3) {
    var v0 = (p2 - p0) * 0.5;
    var v1 = (p3 - p1) * 0.5;
    return (2 * (p1 - p2) + v0 + v1) * t3 + (-3 * (p1 - p2) - 2 * v0 - v1) * t2 + v0 * t + p1;
  };

  MarkLine.prototype.getDistance = function (p1, p2) {
    return Math.sqrt((p1[0] - p2[0]) * (p1[0] - p2[0]) + (p1[1] - p2[1]) * (p1[1] - p2[1]));
  };

  MarkLine.prototype.drawMarker = function (context) {
    this.from.draw(context);
    this.to.draw(context);
  };

  MarkLine.prototype.drawLinePath = function (context) {
    var pointList = this.path = this.getPointList(map.getPixelFromCoordinate(this.from.location), map.getPixelFromCoordinate(this.to.location));
    var len = pointList.length;
    context.save();
    context.beginPath();
    context.lineWidth = options.lineWidth;
    context.strokeStyle = options.colors[this.id];

    if (!options.lineType || options.lineType == 'solid') {
      context.moveTo(pointList[0][0], pointList[0][1]);

      for (var i = 0; i < len; i++) {
        context.lineTo(pointList[i][0], pointList[i][1]);
      }
    } else if (options.lineType == 'dashed' || options.lineType == 'dotted') {
      for (var i = 1; i < len; i += 2) {
        context.moveTo(pointList[i - 1][0], pointList[i - 1][1]);
        context.lineTo(pointList[i][0], pointList[i][1]);
      }
    }

    context.stroke();
    context.restore();
    this.step = 0; //缩放地图时重新绘制动画
  };

  MarkLine.prototype.drawMoveCircle = function (context) {
    var pointList = this.path || this.getPointList(map.getPixelFromCoordinate(this.from.location), map.getPixelFromCoordinate(this.to.location));
    context.save();
    context.fillStyle = options.fillColor;
    context.shadowColor = options.shadowColor;
    context.shadowBlur = options.shadowBlur;
    context.beginPath();
    context.arc(pointList[this.step][0], pointList[this.step][1], options.moveRadius, 0, Math.PI * 2, true);
    context.fill();
    context.closePath();
    context.restore();
    this.step += 1;

    if (this.step >= pointList.length) {
      this.step = 0;
    }
  }; //底层canvas渲染，标注，线条


  var brush = function brush() {
    var baseCtx = baseLayer.canvas.getContext('2d');

    if (!baseCtx) {
      return;
    }

    addMarkLine();
    baseCtx.clearRect(0, 0, width, height);
    markLines.forEach(function (line) {
      line.drawMarker(baseCtx);
      line.drawLinePath(baseCtx);
    });
  }; //上层canvas渲染，动画效果


  var render = function render() {
    var animationCtx = animationLayer.canvas.getContext('2d');

    if (!animationCtx) {
      return;
    }

    if (!animationFlag) {
      animationCtx.clearRect(0, 0, width, height);
      return;
    }

    animationCtx.fillStyle = 'rgba(0,0,0,.93)';
    var prev = animationCtx.globalCompositeOperation;
    animationCtx.globalCompositeOperation = 'destination-in';
    animationCtx.fillRect(0, 0, width, height);
    animationCtx.globalCompositeOperation = prev;

    for (var i = 0; i < markLines.length; i++) {
      var markLine = markLines[i];
      markLine.drawMoveCircle(animationCtx); //移动圆点
    }
  };

  var addMarkLine = function addMarkLine() {
    markLines = [];
    var dataset = options.data;
    dataset.forEach(function (line, i) {
      markLines.push(new MarkLine({
        id: i,
        from: new Marker({
          city: line.from.city,
          location: [line.from.lnglat[0], line.from.lnglat[1]],
          color: options.colors[i]
        }),
        to: new Marker({
          city: line.to.city,
          location: [line.to.lnglat[0], line.to.lnglat[1]],
          color: options.colors[i]
        })
      }));
    });
  }; //初始化


  var init = function init(map, options) {
    merge(userOptions, options);
    baseLayer = new ZNXDLayer.CanvasLayer({
      map: map,
      update: brush
    });
    animationLayer = new ZNXDLayer.CanvasLayer({
      map: map,
      update: render
    });

    (function drawFrame() {
      requestAnimationFrame(drawFrame);
      render();
    })();
  };

  init(map, options);
  self.options = options;
};
/*
 * ClusterLayer
 */

/** @api {Object} ClusterLayer ClusterLayer-聚合点
    @apiVersion 0.1.0
    @apiGroup ClusterLayer
    @apiDescription 聚合点.
    @apiParam {json} options 图层参数.

    @apiParam {znxdmap} map 地图实例.
    @apiParam {String} clusterField 若不为""则聚合所有点.
    @apiParam {Array} zooms='[2, 4, 8, 12]' 如果超过最大的缩放级别，数据全部展示.
    @apiParam {Number} distance='256' 依据距离进行聚合（单位像素）.

    @apiParam {Array} data 聚合数据.
    @apiParam {function} style 样式回调，参数为arr生成的feature。设置聚合样式和单点样式（一般情況只需ofeatStyle即可）.
    @apiParam {function} ofeatStyle 样式回调，参数name为arr的数据。style为null使用默认聚合样式和ofeatStyle的单点样式，若不为空，ofeatStyle失效.
*/


ZNXDLayer.ClusterLayer = function (options) {
  var self = this;

  self.styleFunc = function (feat) {
    var attribute = feat.get("attribute");
    var count = attribute.cluster.length;

    if (count < 1) {
      var name = attribute.data.name;
      return options.ofeatStyle(name);
    } else {
      var _smallCorlor;

      var _bigCorlor;

      if (count < 100) {
        if (count > 50) {
          _smallCorlor = "#f0cd41";
          _bigCorlor = "#f5de8b";
        } else {
          _smallCorlor = "#94d769";
          _bigCorlor = "#cde7b1";
        }
      } else {
        _smallCorlor = '#f1964d';
        _bigCorlor = "#f9bda2";
      }

      count++;
      count = count.toString();
      var smallRadius = count.length * 10;
      smallRadius = smallRadius < 10 ? 12 : smallRadius;
      var bigRadius = smallRadius + 5;
      return [new znxdmap.style.Style({
        image: new znxdmap.style.Circle({
          radius: bigRadius,
          fill: new znxdmap.style.Fill({
            color: _bigCorlor
          })
        })
      }), new znxdmap.style.Style({
        image: new znxdmap.style.Circle({
          radius: smallRadius,
          fill: new znxdmap.style.Fill({
            color: _smallCorlor
          })
        }),
        text: new znxdmap.style.Text({
          text: count,
          fill: new znxdmap.style.Fill({
            color: '#620022'
          }),
          textAlign: "center",
          textBaseline: "middle"
        })
      })];
    }
  };

  var defaults = {
    map: null,
    clusterField: "",
    zooms: [2, 4, 8, 12],
    distance: 256,
    data: [],
    style: self.styleFunc
  }; //将default和options合并

  self.options = {
    map: options.map.map,
    clusterField: options.clusterField,
    zooms: options.zooms.length > 0 ? options.zooms : defaults.zooms,
    distance: options.distance > 0 ? options.distance : defaults.distance,
    data: options.data,
    style: options.style != null ? options.style : defaults.style,
    ofeatStyle: options.ofeatStyle
  };
  self.proj = self.options.map.getView().getProjection();
  self.vectorSource = new znxdmap.source.Vector({
    features: []
  });
  self.vectorLayer = new znxdmap.layer.Vector({
    source: self.vectorSource,
    style: self.options.style
  });
  self.clusterData = []; //判断该点是否聚合

  self._clusterTest = function (data, dataCluster) {
    var _flag = false;
    var _cField = self.options.clusterField;

    if (_cField != "") {
      _flag = data[_cField] === dataCluster[_cField];
    } else {
      //将地理坐标转换成屏幕坐标，进行距离判断
      var _dataCoord = self._getCoordinate(data.lon, data.lat),
          _cdataCoord = self._getCoordinate(dataCluster.lon, dataCluster.lat);

      var _dataScrCoord = self.options.map.getPixelFromCoordinate(_dataCoord),
          _cdataScrCoord = self.options.map.getPixelFromCoordinate(_cdataCoord);

      var _distance = Math.sqrt(Math.pow(_dataScrCoord[0] - _cdataScrCoord[0], 2) + Math.pow(_dataScrCoord[1] - _cdataScrCoord[1], 2));

      _flag = _distance <= self.options.distance;
    } //如果超过最大的缩放级别，数据全部展示


    var _zoom = self.options.map.getView().getZoom(),
        _maxZoom = self.options.zooms[self.options.zooms.length - 1];

    if (_zoom > _maxZoom) _flag = false;
    return _flag;
  }; //坐标转换


  self._getCoordinate = function (lon, lat) {
    return znxdmap.proj.transform([parseFloat(lon), parseFloat(lat)], "EPSG:4326", self.proj);
  }; //添加数据到聚合图


  self._add2CluserData = function (index, data) {
    self.clusterData[index].cluster.push(data);
  };

  self._clusterCreate = function (data) {
    self.clusterData.push({
      data: data,
      cluster: []
    });
  }; //展示数据


  self._showCluster = function () {
    self.vectorSource.clear();
    var _features = [];

    for (var i = 0, len = self.clusterData.length; i < len; i++) {
      var _cdata = self.clusterData[i];

      var _coord = self._getCoordinate(_cdata.data.lon, _cdata.data.lat);

      var _feature = new znxdmap.Feature({
        geometry: new znxdmap.geom.Point(_coord),
        attribute: _cdata
      }); //如果聚合点里面没有数据就显示该点数据


      if (_cdata.cluster.length === 0) _feature.attr = _feature.data;

      _features.push(_feature);
    }

    self.vectorSource.addFeatures(_features);
  };

  self._clusterFeatures = function () {
    self.clusterData = []; //可视域处理

    var _viewExtent = self.options.map.getView().calculateExtent(); //声明一个矩形，范围就是屏幕


    var _viewGeom = new znxdmap.geom.Polygon.fromExtent(_viewExtent);

    for (var i = 0, ilen = self.options.data.length; i < ilen; i++) {
      var _data = self.options.data[i];

      var _coord = self._getCoordinate(_data.lon, _data.lat);

      if (_viewGeom.intersectsCoordinate(_coord)) {
        //当前点是否聚合，默认是false
        var _clustered = false;

        for (var j = 0, jlen = self.clusterData.length; j < jlen; j++) {
          var _cdata = self.clusterData[j];

          if (self._clusterTest(_data, _cdata.data)) {
            self._add2CluserData(j, _data);

            _clustered = true;
            break;
          }
        }

        if (!_clustered) {
          self._clusterCreate(_data);
        }
      }
    }

    self.vectorSource.clear();

    self._showCluster();
  };

  self.init = function () {
    self._clusterFeatures();

    self.options.map.on("moveend", function () {
      self._clusterFeatures();
    });
  };

  self.init();
  return self.vectorLayer;
};

exports.default = ZNXDLayer;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _proj = __webpack_require__(35);

var _proj2 = _interopRequireDefault(_proj);

var _util = __webpack_require__(93);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Administrator on 2018-07-30.
 */

/** @api {OPTIONS} ZNXDUtil Util-工具
    @apiVersion 0.1.0
    @apiGroup util工具

    @apiDescription 本类有框架中常用的工具方法.
    @apiExample 使用方法:
	ZNXDWEBGIS.Util.registerSRS("EPSG:4548", [345754.3, 2501017.13, 607809.0, 5528578.96], [115.5, 22.6, 118.5, 49.88], "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs");
	
	@apiParam {function} extend 合并数组对象.
	@apiParam {function} registerSRS 注入坐标系.
	@apiParam {function} POST Http Post.
	@apiParam {function} GET Http Get.
*/

/** @api {set} extend extend-合并数组
    @apiVersion 0.1.0
    @apiGroup util工具
    @apiDescription 合并数组.
    @apiParam {Array} arr 追加到数组
    @apiParam {Array} data 对象或数组
*/

/** @api {set} registerSRS registerSRS-注入坐标系
    @apiVersion 0.1.0
    @apiGroup util工具
    @apiDescription 注入坐标系.（详见http://epsg.io/）
    @apiParam {String} code code
    @apiParam {Array} extent extent
    @apiParam {Array} worldExtent worldExtent
    @apiParam {String} defs defs
*/

/** @api {post} POST Http-Post
    @apiVersion 0.1.0
    @apiGroup util工具
    @apiDescription Http Post.
    @apiParam {String} url 请求地址
    @apiParam {object} options="{ type: 'geo', obj: geo_data }" post到geoserver或arcserver
    @apiParam {function} callback 回调函数
*/

/** @api {get} GET Http-Get
    @apiVersion 0.1.0
    @apiGroup util工具
    @apiDescription Http Get.
    @apiParam {String} url 请求地址
    @apiParam {object} options="{ type: 'geo', obj: geo_data }" get到geoserver或arcserver
    @apiParam {function} callback 回调函数
*/

/** @api {set} getMiddleCoords getMiddleCoords-中间点坐标
    @apiVersion 0.1.0
    @apiGroup util工具
    @apiDescription 获取两点间的平均点位坐标
    @apiParam {Array} routeCoords0 两点坐标
    @apiParam {Number} count 平均点数量
*/

/** @api {set} getRotate getRotate-方位角
    @apiVersion 0.1.0
    @apiGroup util工具
    @apiDescription 返回B相对与A的方位角（弧度）
    @apiParam {Array} lonlat_A A点经纬度
    @apiParam {Array} lonlat_B B点经纬度
*/
var ZNXDUtil = function ZNXDUtil(opt_option) {
  if (!opt_option) return;
  return this;
};
/**
 * 将对象转成 a=1&b=2的形式
 * @param obj 对象
 */


function obj2String(type, obj) {
  var arr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var idx = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

  if (type == 'arc') {
    return new XMLSerializer().serializeToString(obj);
  } else if (type == 'geo') {
    for (var item in obj) {
      arr[idx++] = [item, obj[item]];
    }

    return new URLSearchParams(arr).toString();
  } else {
    return console.log('Unknow ogc type:' + type);
  }
}
/**
 * 真正的请求
 * @param url 请求地址
 * @param options 请求参数
 * @param method 请求方式
 */


function commonFetcdh(url, options) {
  var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
  var callback = arguments[3];
  var searchStr = obj2String(options.type, options.obj);
  var initObj = {};

  if (method === 'GET') {
    // 如果是GET请求，拼接url
    url += '?' + searchStr;
    initObj = {
      method: method,
      credentials: 'include'
    };
  } else {
    initObj = {
      method: method,
      credentials: 'include',
      mode: "cors",
      body: searchStr
    };

    if (options.type == 'geo') {
      initObj.headers = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      });
    } else if (options.type == 'arc') {} else {
      return console.log('Unknow ogc type:' + options.type);
    }
  }

  fetch(url, initObj).then(function (res) {
    if (options.type == 'arc') {
      return res.text();
    } else if (options.type == 'geo') {
      return res.json();
    } else {
      return console.log('Unknow ogc type:' + options.type);
    }
  }).then(function (resjson) {
    callback(resjson);
  }).catch(function (error) {
    console.log("error = " + error);
  });
}
/**
 * GET请求
 * @param url 请求地址
 * @param options 请求参数
 */


ZNXDUtil.GET = function (url, options, callback) {
  return commonFetcdh(url, options, 'GET', callback);
};
/**
 * POST请求
 * @param url 请求地址
 * @param options 请求参数
 */


ZNXDUtil.POST = function (url, options, callback) {
  return commonFetcdh(url, options, 'POST', callback);
};

ZNXDUtil.registerSRS = function (code, extent, worldExtent, defs) {
  var _projection = new znxdmap.proj.Projection({
    code: code,
    extent: extent,
    units: 'metrem',
    axisOrientation: 'neu',
    worldExtent: worldExtent
  });

  _proj2.default.defs(code, defs);

  znxdmap.proj.proj4.register(_proj2.default);
  znxdmap.proj.addProjection(_projection);
  znxdmap.proj.addCoordinateTransforms("EPSG:4326", code, function (coordinate) {
    return (0, _proj2.default)("EPSG:4326", code, coordinate);
  }, function (coordinate) {
    return (0, _proj2.default)(code, "EPSG:4326", coordinate);
    ;
  });
};
/**
 * @param {*} arr 追加到数组
 * @param {*} data 对象或数组
 */


ZNXDUtil.extend = function (arr, data) {
  var extension = Array.isArray(data) ? data : [data];
  var length = extension.length;

  for (var i = 0; i < length; i++) {
    arr[arr.length] = extension[i];
  }
};

ZNXDUtil.getMiddleCoords = function (routeCoords0, count) {
  var routeCoords = [];
  var startx = "";
  var starty = "";
  var endx = "";
  var endy = "";
  var avg_x = "";
  var avg_y = "";
  var val_x = "";
  var val_y = "";
  var da = "";

  for (var j = 0; j < routeCoords0.length - 1; j++) {
    startx = routeCoords0[j][0];
    starty = routeCoords0[j][1];
    endx = routeCoords0[j + 1][0];
    endy = routeCoords0[j + 1][1];
    avg_x = (endx - startx) / count;
    avg_y = (endy - starty) / count;
    val_x = startx;
    val_y = starty;
    routeCoords.push(routeCoords0[j]);

    for (var i = 0; i < count; i++) {
      val_x += avg_x;
      val_y += avg_y;
      var val = [parseFloat(val_x.toFixed(6)), parseFloat(val_y.toFixed(6))];
      routeCoords.push(val);
    }

    routeCoords.push(routeCoords0[j + 1]);
  }

  return routeCoords;
};

ZNXDUtil.getRotate = function (lonlat_A, lonlat_B) {
  var jd = 0;

  if (!lonlat_A || !lonlat_B) {
    return jd;
  }

  var x = lonlat_B[0] - lonlat_A[0];
  var y = lonlat_B[1] - lonlat_A[1];

  if (x == 0 && y == 0) {
    jd = 0;
  } else if (x == 0 && y > 0) {
    jd = 0;
  } else if (x == 0 && y < 0) {
    jd = 180;
  } else if (x > 0 && y == 0) {
    jd = 90;
  } else if (x < 0 && y == 0) {
    jd = 270;
  } else if (x > 0 && y > 0) {
    //第一象限
    jd = Math.atan(y / x) * 180 / Math.PI;
    jd = 90 - jd;
  } else if (x > 0 && y < 0) {
    //第二象限
    jd = Math.atan(-y / x) * 180 / Math.PI;
    jd = 90 + jd;
  } else if (x < 0 && y < 0) {
    //第三象限
    jd = Math.atan(-y / -x) * 180 / Math.PI;
    jd = 270 - jd;
  } else {
    //第四象限
    jd = Math.atan(y / -x) * 180 / Math.PI;
    jd = 270 + jd;
  }

  return Math.PI / 180 * jd;
}; //定义一些常量


var PI = 3.1415926535897932384626;
var a = 6378245.0;
var ee = 0.00669342162296594323;
/**
 * WGS84转GCj02
 * @param lng
 * @param lat
 * @returns {*[]}
 */

var wgs84togcj02 = function wgs84togcj02(lng, lat) {
  var lat = +lat;
  var lng = +lng;

  if (out_of_china(lng, lat)) {
    return [lng, lat];
  } else {
    var dlat = transformlat(lng - 105.0, lat - 35.0);
    var dlng = transformlng(lng - 105.0, lat - 35.0);
    var radlat = lat / 180.0 * PI;
    var magic = Math.sin(radlat);
    magic = 1 - ee * magic * magic;
    var sqrtmagic = Math.sqrt(magic);
    dlat = dlat * 180.0 / (a * (1 - ee) / (magic * sqrtmagic) * PI);
    dlng = dlng * 180.0 / (a / sqrtmagic * Math.cos(radlat) * PI);
    var mglat = lat + dlat;
    var mglng = lng + dlng;
    return [mglng, mglat];
  }
};
/**
 * GCJ02 转换为 WGS84
 * @param lng
 * @param lat
 * @returns {*[]}
 */


var gcj02towgs84 = function gcj02towgs84(lng, lat) {
  var lat = +lat;
  var lng = +lng;

  if (out_of_china(lng, lat)) {
    return [lng, lat];
  } else {
    var dlat = transformlat(lng - 105.0, lat - 35.0);
    var dlng = transformlng(lng - 105.0, lat - 35.0);
    var radlat = lat / 180.0 * PI;
    var magic = Math.sin(radlat);
    magic = 1 - ee * magic * magic;
    var sqrtmagic = Math.sqrt(magic);
    dlat = dlat * 180.0 / (a * (1 - ee) / (magic * sqrtmagic) * PI);
    dlng = dlng * 180.0 / (a / sqrtmagic * Math.cos(radlat) * PI);
    var mglat = lat + dlat;
    var mglng = lng + dlng;
    return [lng * 2 - mglng, lat * 2 - mglat];
  }
};

var transformlat = function transformlat(lng, lat) {
  var lat = +lat;
  var lng = +lng;
  var ret = -100.0 + 2.0 * lng + 3.0 * lat + 0.2 * lat * lat + 0.1 * lng * lat + 0.2 * Math.sqrt(Math.abs(lng));
  ret += (20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0 / 3.0;
  ret += (20.0 * Math.sin(lat * PI) + 40.0 * Math.sin(lat / 3.0 * PI)) * 2.0 / 3.0;
  ret += (160.0 * Math.sin(lat / 12.0 * PI) + 320 * Math.sin(lat * PI / 30.0)) * 2.0 / 3.0;
  return ret;
};

var transformlng = function transformlng(lng, lat) {
  var lat = +lat;
  var lng = +lng;
  var ret = 300.0 + lng + 2.0 * lat + 0.1 * lng * lng + 0.1 * lng * lat + 0.1 * Math.sqrt(Math.abs(lng));
  ret += (20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0 / 3.0;
  ret += (20.0 * Math.sin(lng * PI) + 40.0 * Math.sin(lng / 3.0 * PI)) * 2.0 / 3.0;
  ret += (150.0 * Math.sin(lng / 12.0 * PI) + 300.0 * Math.sin(lng / 30.0 * PI)) * 2.0 / 3.0;
  return ret;
};
/**
 * 判断是否在国内，不在国内则不做偏移
 * @param lng
 * @param lat
 * @returns {boolean}
 */


var out_of_china = function out_of_china(lng, lat) {
  var lat = +lat;
  var lng = +lng; // 纬度3.86~53.55,经度73.66~135.05 

  return !(lng > 73.66 && lng < 135.05 && lat > 3.86 && lat < 53.55);
};

ZNXDUtil.wgs84togcj02 = wgs84togcj02;
ZNXDUtil.gcj02towgs84 = gcj02towgs84;
exports.default = ZNXDUtil;

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__projString__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_wkt_parser__ = __webpack_require__(25);




function defs(name) {
  /*global console*/
  var that = this;
  if (arguments.length === 2) {
    var def = arguments[1];
    if (typeof def === 'string') {
      if (def.charAt(0) === '+') {
        defs[name] = Object(__WEBPACK_IMPORTED_MODULE_1__projString__["a" /* default */])(arguments[1]);
      }
      else {
        defs[name] = Object(__WEBPACK_IMPORTED_MODULE_2_wkt_parser__["a" /* default */])(arguments[1]);
      }
    } else {
      defs[name] = def;
    }
  }
  else if (arguments.length === 1) {
    if (Array.isArray(name)) {
      return name.map(function(v) {
        if (Array.isArray(v)) {
          defs.apply(that, v);
        }
        else {
          defs(v);
        }
      });
    }
    else if (typeof name === 'string') {
      if (name in defs) {
        return defs[name];
      }
    }
    else if ('EPSG' in name) {
      defs['EPSG:' + name.EPSG] = name;
    }
    else if ('ESRI' in name) {
      defs['ESRI:' + name.ESRI] = name;
    }
    else if ('IAU2000' in name) {
      defs['IAU2000:' + name.IAU2000] = name;
    }
    else {
      console.log(name);
    }
    return;
  }


}
Object(__WEBPACK_IMPORTED_MODULE_0__global__["a" /* default */])(defs);
/* harmony default export */ __webpack_exports__["a"] = (defs);


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_values__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_PrimeMeridian__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_units__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__match__ = __webpack_require__(15);





/* harmony default export */ __webpack_exports__["a"] = (function(defData) {
  var self = {};
  var paramObj = defData.split('+').map(function(v) {
    return v.trim();
  }).filter(function(a) {
    return a;
  }).reduce(function(p, a) {
    var split = a.split('=');
    split.push(true);
    p[split[0].toLowerCase()] = split[1];
    return p;
  }, {});
  var paramName, paramVal, paramOutname;
  var params = {
    proj: 'projName',
    datum: 'datumCode',
    rf: function(v) {
      self.rf = parseFloat(v);
    },
    lat_0: function(v) {
      self.lat0 = v * __WEBPACK_IMPORTED_MODULE_0__constants_values__["a" /* D2R */];
    },
    lat_1: function(v) {
      self.lat1 = v * __WEBPACK_IMPORTED_MODULE_0__constants_values__["a" /* D2R */];
    },
    lat_2: function(v) {
      self.lat2 = v * __WEBPACK_IMPORTED_MODULE_0__constants_values__["a" /* D2R */];
    },
    lat_ts: function(v) {
      self.lat_ts = v * __WEBPACK_IMPORTED_MODULE_0__constants_values__["a" /* D2R */];
    },
    lon_0: function(v) {
      self.long0 = v * __WEBPACK_IMPORTED_MODULE_0__constants_values__["a" /* D2R */];
    },
    lon_1: function(v) {
      self.long1 = v * __WEBPACK_IMPORTED_MODULE_0__constants_values__["a" /* D2R */];
    },
    lon_2: function(v) {
      self.long2 = v * __WEBPACK_IMPORTED_MODULE_0__constants_values__["a" /* D2R */];
    },
    alpha: function(v) {
      self.alpha = parseFloat(v) * __WEBPACK_IMPORTED_MODULE_0__constants_values__["a" /* D2R */];
    },
    lonc: function(v) {
      self.longc = v * __WEBPACK_IMPORTED_MODULE_0__constants_values__["a" /* D2R */];
    },
    x_0: function(v) {
      self.x0 = parseFloat(v);
    },
    y_0: function(v) {
      self.y0 = parseFloat(v);
    },
    k_0: function(v) {
      self.k0 = parseFloat(v);
    },
    k: function(v) {
      self.k0 = parseFloat(v);
    },
    a: function(v) {
      self.a = parseFloat(v);
    },
    b: function(v) {
      self.b = parseFloat(v);
    },
    r_a: function() {
      self.R_A = true;
    },
    zone: function(v) {
      self.zone = parseInt(v, 10);
    },
    south: function() {
      self.utmSouth = true;
    },
    towgs84: function(v) {
      self.datum_params = v.split(",").map(function(a) {
        return parseFloat(a);
      });
    },
    to_meter: function(v) {
      self.to_meter = parseFloat(v);
    },
    units: function(v) {
      self.units = v;
      var unit = Object(__WEBPACK_IMPORTED_MODULE_3__match__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_2__constants_units__["a" /* default */], v);
      if (unit) {
        self.to_meter = unit.to_meter;
      }
    },
    from_greenwich: function(v) {
      self.from_greenwich = v * __WEBPACK_IMPORTED_MODULE_0__constants_values__["a" /* D2R */];
    },
    pm: function(v) {
      var pm = Object(__WEBPACK_IMPORTED_MODULE_3__match__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__constants_PrimeMeridian__["a" /* default */], v);
      self.from_greenwich = (pm ? pm : parseFloat(v)) * __WEBPACK_IMPORTED_MODULE_0__constants_values__["a" /* D2R */];
    },
    nadgrids: function(v) {
      if (v === '@null') {
        self.datumCode = 'none';
      }
      else {
        self.nadgrids = v;
      }
    },
    axis: function(v) {
      var legalAxis = "ewnsud";
      if (v.length === 3 && legalAxis.indexOf(v.substr(0, 1)) !== -1 && legalAxis.indexOf(v.substr(1, 1)) !== -1 && legalAxis.indexOf(v.substr(2, 1)) !== -1) {
        self.axis = v;
      }
    }
  };
  for (paramName in paramObj) {
    paramVal = paramObj[paramName];
    if (paramName in params) {
      paramOutname = params[paramName];
      if (typeof paramOutname === 'function') {
        paramOutname(paramVal);
      }
      else {
        self[paramOutname] = paramVal;
      }
    }
    else {
      self[paramName] = paramVal;
    }
  }
  if(typeof self.datumCode === 'string' && self.datumCode !== "WGS84"){
    self.datumCode = self.datumCode.toLowerCase();
  }
  return self;
});


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__process__ = __webpack_require__(42);
var D2R = 0.01745329251994329577;





function rename(obj, params) {
  var outName = params[0];
  var inName = params[1];
  if (!(outName in obj) && (inName in obj)) {
    obj[outName] = obj[inName];
    if (params.length === 3) {
      obj[outName] = params[2](obj[outName]);
    }
  }
}

function d2r(input) {
  return input * D2R;
}

function cleanWKT(wkt) {
  if (wkt.type === 'GEOGCS') {
    wkt.projName = 'longlat';
  } else if (wkt.type === 'LOCAL_CS') {
    wkt.projName = 'identity';
    wkt.local = true;
  } else {
    if (typeof wkt.PROJECTION === 'object') {
      wkt.projName = Object.keys(wkt.PROJECTION)[0];
    } else {
      wkt.projName = wkt.PROJECTION;
    }
  }
  if (wkt.UNIT) {
    wkt.units = wkt.UNIT.name.toLowerCase();
    if (wkt.units === 'metre') {
      wkt.units = 'meter';
    }
    if (wkt.UNIT.convert) {
      if (wkt.type === 'GEOGCS') {
        if (wkt.DATUM && wkt.DATUM.SPHEROID) {
          wkt.to_meter = wkt.UNIT.convert*wkt.DATUM.SPHEROID.a;
        }
      } else {
        wkt.to_meter = wkt.UNIT.convert, 10;
      }
    }
  }
  var geogcs = wkt.GEOGCS;
  if (wkt.type === 'GEOGCS') {
    geogcs = wkt;
  }
  if (geogcs) {
    //if(wkt.GEOGCS.PRIMEM&&wkt.GEOGCS.PRIMEM.convert){
    //  wkt.from_greenwich=wkt.GEOGCS.PRIMEM.convert*D2R;
    //}
    if (geogcs.DATUM) {
      wkt.datumCode = geogcs.DATUM.name.toLowerCase();
    } else {
      wkt.datumCode = geogcs.name.toLowerCase();
    }
    if (wkt.datumCode.slice(0, 2) === 'd_') {
      wkt.datumCode = wkt.datumCode.slice(2);
    }
    if (wkt.datumCode === 'new_zealand_geodetic_datum_1949' || wkt.datumCode === 'new_zealand_1949') {
      wkt.datumCode = 'nzgd49';
    }
    if (wkt.datumCode === 'wgs_1984') {
      if (wkt.PROJECTION === 'Mercator_Auxiliary_Sphere') {
        wkt.sphere = true;
      }
      wkt.datumCode = 'wgs84';
    }
    if (wkt.datumCode.slice(-6) === '_ferro') {
      wkt.datumCode = wkt.datumCode.slice(0, - 6);
    }
    if (wkt.datumCode.slice(-8) === '_jakarta') {
      wkt.datumCode = wkt.datumCode.slice(0, - 8);
    }
    if (~wkt.datumCode.indexOf('belge')) {
      wkt.datumCode = 'rnb72';
    }
    if (geogcs.DATUM && geogcs.DATUM.SPHEROID) {
      wkt.ellps = geogcs.DATUM.SPHEROID.name.replace('_19', '').replace(/[Cc]larke\_18/, 'clrk');
      if (wkt.ellps.toLowerCase().slice(0, 13) === 'international') {
        wkt.ellps = 'intl';
      }

      wkt.a = geogcs.DATUM.SPHEROID.a;
      wkt.rf = parseFloat(geogcs.DATUM.SPHEROID.rf, 10);
    }

    if (geogcs.DATUM && geogcs.DATUM.TOWGS84) {
      wkt.datum_params = geogcs.DATUM.TOWGS84;
    }
    if (~wkt.datumCode.indexOf('osgb_1936')) {
      wkt.datumCode = 'osgb36';
    }
    if (~wkt.datumCode.indexOf('osni_1952')) {
      wkt.datumCode = 'osni52';
    }
    if (~wkt.datumCode.indexOf('tm65')
      || ~wkt.datumCode.indexOf('geodetic_datum_of_1965')) {
      wkt.datumCode = 'ire65';
    }
    if (wkt.datumCode === 'ch1903+') {
      wkt.datumCode = 'ch1903';
    }
    if (~wkt.datumCode.indexOf('israel')) {
      wkt.datumCode = 'isr93';
    }
  }
  if (wkt.b && !isFinite(wkt.b)) {
    wkt.b = wkt.a;
  }

  function toMeter(input) {
    var ratio = wkt.to_meter || 1;
    return input * ratio;
  }
  var renamer = function(a) {
    return rename(wkt, a);
  };
  var list = [
    ['standard_parallel_1', 'Standard_Parallel_1'],
    ['standard_parallel_2', 'Standard_Parallel_2'],
    ['false_easting', 'False_Easting'],
    ['false_northing', 'False_Northing'],
    ['central_meridian', 'Central_Meridian'],
    ['latitude_of_origin', 'Latitude_Of_Origin'],
    ['latitude_of_origin', 'Central_Parallel'],
    ['scale_factor', 'Scale_Factor'],
    ['k0', 'scale_factor'],
    ['latitude_of_center', 'Latitude_Of_Center'],
    ['latitude_of_center', 'Latitude_of_center'],
    ['lat0', 'latitude_of_center', d2r],
    ['longitude_of_center', 'Longitude_Of_Center'],
    ['longitude_of_center', 'Longitude_of_center'],
    ['longc', 'longitude_of_center', d2r],
    ['x0', 'false_easting', toMeter],
    ['y0', 'false_northing', toMeter],
    ['long0', 'central_meridian', d2r],
    ['lat0', 'latitude_of_origin', d2r],
    ['lat0', 'standard_parallel_1', d2r],
    ['lat1', 'standard_parallel_1', d2r],
    ['lat2', 'standard_parallel_2', d2r],
    ['azimuth', 'Azimuth'],
    ['alpha', 'azimuth', d2r],
    ['srsCode', 'name']
  ];
  list.forEach(renamer);
  if (!wkt.long0 && wkt.longc && (wkt.projName === 'Albers_Conic_Equal_Area' || wkt.projName === 'Lambert_Azimuthal_Equal_Area')) {
    wkt.long0 = wkt.longc;
  }
  if (!wkt.lat_ts && wkt.lat1 && (wkt.projName === 'Stereographic_South_Pole' || wkt.projName === 'Polar Stereographic (variant B)')) {
    wkt.lat0 = d2r(wkt.lat1 > 0 ? 90 : -90);
    wkt.lat_ts = wkt.lat1;
  }
}
/* harmony default export */ __webpack_exports__["a"] = (function(wkt) {
  var lisp = Object(__WEBPACK_IMPORTED_MODULE_0__parser__["a" /* default */])(wkt);
  var type = lisp.shift();
  var name = lisp.shift();
  lisp.unshift(['name', name]);
  lisp.unshift(['type', type]);
  var obj = {};
  Object(__WEBPACK_IMPORTED_MODULE_1__process__["a" /* sExpr */])(lisp, obj);
  cleanWKT(obj);
  return obj;
});


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = transform;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_values__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datum_transform__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adjust_axis__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Proj__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_toPoint__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__checkSanity__ = __webpack_require__(54);







function checkNotWGS(source, dest) {
  return ((source.datum.datum_type === __WEBPACK_IMPORTED_MODULE_0__constants_values__["e" /* PJD_3PARAM */] || source.datum.datum_type === __WEBPACK_IMPORTED_MODULE_0__constants_values__["f" /* PJD_7PARAM */]) && dest.datumCode !== 'WGS84') || ((dest.datum.datum_type === __WEBPACK_IMPORTED_MODULE_0__constants_values__["e" /* PJD_3PARAM */] || dest.datum.datum_type === __WEBPACK_IMPORTED_MODULE_0__constants_values__["f" /* PJD_7PARAM */]) && source.datumCode !== 'WGS84');
}

function transform(source, dest, point) {
  var wgs84;
  if (Array.isArray(point)) {
    point = Object(__WEBPACK_IMPORTED_MODULE_4__common_toPoint__["a" /* default */])(point);
  }
  Object(__WEBPACK_IMPORTED_MODULE_5__checkSanity__["a" /* default */])(point);
  // Workaround for datum shifts towgs84, if either source or destination projection is not wgs84
  if (source.datum && dest.datum && checkNotWGS(source, dest)) {
    wgs84 = new __WEBPACK_IMPORTED_MODULE_3__Proj__["a" /* default */]('WGS84');
    point = transform(source, wgs84, point);
    source = wgs84;
  }
  // DGR, 2010/11/12
  if (source.axis !== 'enu') {
    point = Object(__WEBPACK_IMPORTED_MODULE_2__adjust_axis__["a" /* default */])(source, false, point);
  }
  // Transform source points to long/lat, if they aren't already.
  if (source.projName === 'longlat') {
    point = {
      x: point.x * __WEBPACK_IMPORTED_MODULE_0__constants_values__["a" /* D2R */],
      y: point.y * __WEBPACK_IMPORTED_MODULE_0__constants_values__["a" /* D2R */]
    };
  }
  else {
    if (source.to_meter) {
      point = {
        x: point.x * source.to_meter,
        y: point.y * source.to_meter
      };
    }
    point = source.inverse(point); // Convert Cartesian to longlat
  }
  // Adjust for the prime meridian if necessary
  if (source.from_greenwich) {
    point.x += source.from_greenwich;
  }

  // Convert datums if needed, and if possible.
  point = Object(__WEBPACK_IMPORTED_MODULE_1__datum_transform__["a" /* default */])(source.datum, dest.datum, point);

  // Adjust for the prime meridian if necessary
  if (dest.from_greenwich) {
    point = {
      x: point.x - dest.from_greenwich,
      y: point.y
    };
  }

  if (dest.projName === 'longlat') {
    // convert radians to decimal degrees
    point = {
      x: point.x * __WEBPACK_IMPORTED_MODULE_0__constants_values__["i" /* R2D */],
      y: point.y * __WEBPACK_IMPORTED_MODULE_0__constants_values__["i" /* R2D */]
    };
  } else { // else project
    point = dest.forward(point);
    if (dest.to_meter) {
      point = {
        x: point.x / dest.to_meter,
        y: point.y / dest.to_meter
      };
    }
  }

  // DGR, 2010/11/12
  if (dest.axis !== 'enu') {
    return Object(__WEBPACK_IMPORTED_MODULE_2__adjust_axis__["a" /* default */])(dest, true, point);
  }

  return point;
}


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (array){
  var out = {
    x: array[0],
    y: array[1]
  };
  if (array.length>2) {
    out.z = array[2];
  }
  if (array.length>3) {
    out.m = array[3];
  }
  return out;
});

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = forward;
/* unused harmony export inverse */
/* harmony export (immutable) */ __webpack_exports__["c"] = toPoint;



/**
 * UTM zones are grouped, and assigned to one of a group of 6
 * sets.
 *
 * {int} @private
 */
var NUM_100K_SETS = 6;

/**
 * The column letters (for easting) of the lower left value, per
 * set.
 *
 * {string} @private
 */
var SET_ORIGIN_COLUMN_LETTERS = 'AJSAJS';

/**
 * The row letters (for northing) of the lower left value, per
 * set.
 *
 * {string} @private
 */
var SET_ORIGIN_ROW_LETTERS = 'AFAFAF';

var A = 65; // A
var I = 73; // I
var O = 79; // O
var V = 86; // V
var Z = 90; // Z
/* harmony default export */ __webpack_exports__["a"] = ({
  forward: forward,
  inverse: inverse,
  toPoint: toPoint
});
/**
 * Conversion of lat/lon to MGRS.
 *
 * @param {object} ll Object literal with lat and lon properties on a
 *     WGS84 ellipsoid.
 * @param {int} accuracy Accuracy in digits (5 for 1 m, 4 for 10 m, 3 for
 *      100 m, 2 for 1000 m or 1 for 10000 m). Optional, default is 5.
 * @return {string} the MGRS string for the given location and accuracy.
 */
function forward(ll, accuracy) {
  accuracy = accuracy || 5; // default accuracy 1m
  return encode(LLtoUTM({
    lat: ll[1],
    lon: ll[0]
  }), accuracy);
};

/**
 * Conversion of MGRS to lat/lon.
 *
 * @param {string} mgrs MGRS string.
 * @return {array} An array with left (longitude), bottom (latitude), right
 *     (longitude) and top (latitude) values in WGS84, representing the
 *     bounding box for the provided MGRS reference.
 */
function inverse(mgrs) {
  var bbox = UTMtoLL(decode(mgrs.toUpperCase()));
  if (bbox.lat && bbox.lon) {
    return [bbox.lon, bbox.lat, bbox.lon, bbox.lat];
  }
  return [bbox.left, bbox.bottom, bbox.right, bbox.top];
};

function toPoint(mgrs) {
  var bbox = UTMtoLL(decode(mgrs.toUpperCase()));
  if (bbox.lat && bbox.lon) {
    return [bbox.lon, bbox.lat];
  }
  return [(bbox.left + bbox.right) / 2, (bbox.top + bbox.bottom) / 2];
};
/**
 * Conversion from degrees to radians.
 *
 * @private
 * @param {number} deg the angle in degrees.
 * @return {number} the angle in radians.
 */
function degToRad(deg) {
  return (deg * (Math.PI / 180.0));
}

/**
 * Conversion from radians to degrees.
 *
 * @private
 * @param {number} rad the angle in radians.
 * @return {number} the angle in degrees.
 */
function radToDeg(rad) {
  return (180.0 * (rad / Math.PI));
}

/**
 * Converts a set of Longitude and Latitude co-ordinates to UTM
 * using the WGS84 ellipsoid.
 *
 * @private
 * @param {object} ll Object literal with lat and lon properties
 *     representing the WGS84 coordinate to be converted.
 * @return {object} Object literal containing the UTM value with easting,
 *     northing, zoneNumber and zoneLetter properties, and an optional
 *     accuracy property in digits. Returns null if the conversion failed.
 */
function LLtoUTM(ll) {
  var Lat = ll.lat;
  var Long = ll.lon;
  var a = 6378137.0; //ellip.radius;
  var eccSquared = 0.00669438; //ellip.eccsq;
  var k0 = 0.9996;
  var LongOrigin;
  var eccPrimeSquared;
  var N, T, C, A, M;
  var LatRad = degToRad(Lat);
  var LongRad = degToRad(Long);
  var LongOriginRad;
  var ZoneNumber;
  // (int)
  ZoneNumber = Math.floor((Long + 180) / 6) + 1;

  //Make sure the longitude 180.00 is in Zone 60
  if (Long === 180) {
    ZoneNumber = 60;
  }

  // Special zone for Norway
  if (Lat >= 56.0 && Lat < 64.0 && Long >= 3.0 && Long < 12.0) {
    ZoneNumber = 32;
  }

  // Special zones for Svalbard
  if (Lat >= 72.0 && Lat < 84.0) {
    if (Long >= 0.0 && Long < 9.0) {
      ZoneNumber = 31;
    }
    else if (Long >= 9.0 && Long < 21.0) {
      ZoneNumber = 33;
    }
    else if (Long >= 21.0 && Long < 33.0) {
      ZoneNumber = 35;
    }
    else if (Long >= 33.0 && Long < 42.0) {
      ZoneNumber = 37;
    }
  }

  LongOrigin = (ZoneNumber - 1) * 6 - 180 + 3; //+3 puts origin
  // in middle of
  // zone
  LongOriginRad = degToRad(LongOrigin);

  eccPrimeSquared = (eccSquared) / (1 - eccSquared);

  N = a / Math.sqrt(1 - eccSquared * Math.sin(LatRad) * Math.sin(LatRad));
  T = Math.tan(LatRad) * Math.tan(LatRad);
  C = eccPrimeSquared * Math.cos(LatRad) * Math.cos(LatRad);
  A = Math.cos(LatRad) * (LongRad - LongOriginRad);

  M = a * ((1 - eccSquared / 4 - 3 * eccSquared * eccSquared / 64 - 5 * eccSquared * eccSquared * eccSquared / 256) * LatRad - (3 * eccSquared / 8 + 3 * eccSquared * eccSquared / 32 + 45 * eccSquared * eccSquared * eccSquared / 1024) * Math.sin(2 * LatRad) + (15 * eccSquared * eccSquared / 256 + 45 * eccSquared * eccSquared * eccSquared / 1024) * Math.sin(4 * LatRad) - (35 * eccSquared * eccSquared * eccSquared / 3072) * Math.sin(6 * LatRad));

  var UTMEasting = (k0 * N * (A + (1 - T + C) * A * A * A / 6.0 + (5 - 18 * T + T * T + 72 * C - 58 * eccPrimeSquared) * A * A * A * A * A / 120.0) + 500000.0);

  var UTMNorthing = (k0 * (M + N * Math.tan(LatRad) * (A * A / 2 + (5 - T + 9 * C + 4 * C * C) * A * A * A * A / 24.0 + (61 - 58 * T + T * T + 600 * C - 330 * eccPrimeSquared) * A * A * A * A * A * A / 720.0)));
  if (Lat < 0.0) {
    UTMNorthing += 10000000.0; //10000000 meter offset for
    // southern hemisphere
  }

  return {
    northing: Math.round(UTMNorthing),
    easting: Math.round(UTMEasting),
    zoneNumber: ZoneNumber,
    zoneLetter: getLetterDesignator(Lat)
  };
}

/**
 * Converts UTM coords to lat/long, using the WGS84 ellipsoid. This is a convenience
 * class where the Zone can be specified as a single string eg."60N" which
 * is then broken down into the ZoneNumber and ZoneLetter.
 *
 * @private
 * @param {object} utm An object literal with northing, easting, zoneNumber
 *     and zoneLetter properties. If an optional accuracy property is
 *     provided (in meters), a bounding box will be returned instead of
 *     latitude and longitude.
 * @return {object} An object literal containing either lat and lon values
 *     (if no accuracy was provided), or top, right, bottom and left values
 *     for the bounding box calculated according to the provided accuracy.
 *     Returns null if the conversion failed.
 */
function UTMtoLL(utm) {

  var UTMNorthing = utm.northing;
  var UTMEasting = utm.easting;
  var zoneLetter = utm.zoneLetter;
  var zoneNumber = utm.zoneNumber;
  // check the ZoneNummber is valid
  if (zoneNumber < 0 || zoneNumber > 60) {
    return null;
  }

  var k0 = 0.9996;
  var a = 6378137.0; //ellip.radius;
  var eccSquared = 0.00669438; //ellip.eccsq;
  var eccPrimeSquared;
  var e1 = (1 - Math.sqrt(1 - eccSquared)) / (1 + Math.sqrt(1 - eccSquared));
  var N1, T1, C1, R1, D, M;
  var LongOrigin;
  var mu, phi1Rad;

  // remove 500,000 meter offset for longitude
  var x = UTMEasting - 500000.0;
  var y = UTMNorthing;

  // We must know somehow if we are in the Northern or Southern
  // hemisphere, this is the only time we use the letter So even
  // if the Zone letter isn't exactly correct it should indicate
  // the hemisphere correctly
  if (zoneLetter < 'N') {
    y -= 10000000.0; // remove 10,000,000 meter offset used
    // for southern hemisphere
  }

  // There are 60 zones with zone 1 being at West -180 to -174
  LongOrigin = (zoneNumber - 1) * 6 - 180 + 3; // +3 puts origin
  // in middle of
  // zone

  eccPrimeSquared = (eccSquared) / (1 - eccSquared);

  M = y / k0;
  mu = M / (a * (1 - eccSquared / 4 - 3 * eccSquared * eccSquared / 64 - 5 * eccSquared * eccSquared * eccSquared / 256));

  phi1Rad = mu + (3 * e1 / 2 - 27 * e1 * e1 * e1 / 32) * Math.sin(2 * mu) + (21 * e1 * e1 / 16 - 55 * e1 * e1 * e1 * e1 / 32) * Math.sin(4 * mu) + (151 * e1 * e1 * e1 / 96) * Math.sin(6 * mu);
  // double phi1 = ProjMath.radToDeg(phi1Rad);

  N1 = a / Math.sqrt(1 - eccSquared * Math.sin(phi1Rad) * Math.sin(phi1Rad));
  T1 = Math.tan(phi1Rad) * Math.tan(phi1Rad);
  C1 = eccPrimeSquared * Math.cos(phi1Rad) * Math.cos(phi1Rad);
  R1 = a * (1 - eccSquared) / Math.pow(1 - eccSquared * Math.sin(phi1Rad) * Math.sin(phi1Rad), 1.5);
  D = x / (N1 * k0);

  var lat = phi1Rad - (N1 * Math.tan(phi1Rad) / R1) * (D * D / 2 - (5 + 3 * T1 + 10 * C1 - 4 * C1 * C1 - 9 * eccPrimeSquared) * D * D * D * D / 24 + (61 + 90 * T1 + 298 * C1 + 45 * T1 * T1 - 252 * eccPrimeSquared - 3 * C1 * C1) * D * D * D * D * D * D / 720);
  lat = radToDeg(lat);

  var lon = (D - (1 + 2 * T1 + C1) * D * D * D / 6 + (5 - 2 * C1 + 28 * T1 - 3 * C1 * C1 + 8 * eccPrimeSquared + 24 * T1 * T1) * D * D * D * D * D / 120) / Math.cos(phi1Rad);
  lon = LongOrigin + radToDeg(lon);

  var result;
  if (utm.accuracy) {
    var topRight = UTMtoLL({
      northing: utm.northing + utm.accuracy,
      easting: utm.easting + utm.accuracy,
      zoneLetter: utm.zoneLetter,
      zoneNumber: utm.zoneNumber
    });
    result = {
      top: topRight.lat,
      right: topRight.lon,
      bottom: lat,
      left: lon
    };
  }
  else {
    result = {
      lat: lat,
      lon: lon
    };
  }
  return result;
}

/**
 * Calculates the MGRS letter designator for the given latitude.
 *
 * @private
 * @param {number} lat The latitude in WGS84 to get the letter designator
 *     for.
 * @return {char} The letter designator.
 */
function getLetterDesignator(lat) {
  //This is here as an error flag to show that the Latitude is
  //outside MGRS limits
  var LetterDesignator = 'Z';

  if ((84 >= lat) && (lat >= 72)) {
    LetterDesignator = 'X';
  }
  else if ((72 > lat) && (lat >= 64)) {
    LetterDesignator = 'W';
  }
  else if ((64 > lat) && (lat >= 56)) {
    LetterDesignator = 'V';
  }
  else if ((56 > lat) && (lat >= 48)) {
    LetterDesignator = 'U';
  }
  else if ((48 > lat) && (lat >= 40)) {
    LetterDesignator = 'T';
  }
  else if ((40 > lat) && (lat >= 32)) {
    LetterDesignator = 'S';
  }
  else if ((32 > lat) && (lat >= 24)) {
    LetterDesignator = 'R';
  }
  else if ((24 > lat) && (lat >= 16)) {
    LetterDesignator = 'Q';
  }
  else if ((16 > lat) && (lat >= 8)) {
    LetterDesignator = 'P';
  }
  else if ((8 > lat) && (lat >= 0)) {
    LetterDesignator = 'N';
  }
  else if ((0 > lat) && (lat >= -8)) {
    LetterDesignator = 'M';
  }
  else if ((-8 > lat) && (lat >= -16)) {
    LetterDesignator = 'L';
  }
  else if ((-16 > lat) && (lat >= -24)) {
    LetterDesignator = 'K';
  }
  else if ((-24 > lat) && (lat >= -32)) {
    LetterDesignator = 'J';
  }
  else if ((-32 > lat) && (lat >= -40)) {
    LetterDesignator = 'H';
  }
  else if ((-40 > lat) && (lat >= -48)) {
    LetterDesignator = 'G';
  }
  else if ((-48 > lat) && (lat >= -56)) {
    LetterDesignator = 'F';
  }
  else if ((-56 > lat) && (lat >= -64)) {
    LetterDesignator = 'E';
  }
  else if ((-64 > lat) && (lat >= -72)) {
    LetterDesignator = 'D';
  }
  else if ((-72 > lat) && (lat >= -80)) {
    LetterDesignator = 'C';
  }
  return LetterDesignator;
}

/**
 * Encodes a UTM location as MGRS string.
 *
 * @private
 * @param {object} utm An object literal with easting, northing,
 *     zoneLetter, zoneNumber
 * @param {number} accuracy Accuracy in digits (1-5).
 * @return {string} MGRS string for the given UTM location.
 */
function encode(utm, accuracy) {
  // prepend with leading zeroes
  var seasting = "00000" + utm.easting,
    snorthing = "00000" + utm.northing;

  return utm.zoneNumber + utm.zoneLetter + get100kID(utm.easting, utm.northing, utm.zoneNumber) + seasting.substr(seasting.length - 5, accuracy) + snorthing.substr(snorthing.length - 5, accuracy);
}

/**
 * Get the two letter 100k designator for a given UTM easting,
 * northing and zone number value.
 *
 * @private
 * @param {number} easting
 * @param {number} northing
 * @param {number} zoneNumber
 * @return the two letter 100k designator for the given UTM location.
 */
function get100kID(easting, northing, zoneNumber) {
  var setParm = get100kSetForZone(zoneNumber);
  var setColumn = Math.floor(easting / 100000);
  var setRow = Math.floor(northing / 100000) % 20;
  return getLetter100kID(setColumn, setRow, setParm);
}

/**
 * Given a UTM zone number, figure out the MGRS 100K set it is in.
 *
 * @private
 * @param {number} i An UTM zone number.
 * @return {number} the 100k set the UTM zone is in.
 */
function get100kSetForZone(i) {
  var setParm = i % NUM_100K_SETS;
  if (setParm === 0) {
    setParm = NUM_100K_SETS;
  }

  return setParm;
}

/**
 * Get the two-letter MGRS 100k designator given information
 * translated from the UTM northing, easting and zone number.
 *
 * @private
 * @param {number} column the column index as it relates to the MGRS
 *        100k set spreadsheet, created from the UTM easting.
 *        Values are 1-8.
 * @param {number} row the row index as it relates to the MGRS 100k set
 *        spreadsheet, created from the UTM northing value. Values
 *        are from 0-19.
 * @param {number} parm the set block, as it relates to the MGRS 100k set
 *        spreadsheet, created from the UTM zone. Values are from
 *        1-60.
 * @return two letter MGRS 100k code.
 */
function getLetter100kID(column, row, parm) {
  // colOrigin and rowOrigin are the letters at the origin of the set
  var index = parm - 1;
  var colOrigin = SET_ORIGIN_COLUMN_LETTERS.charCodeAt(index);
  var rowOrigin = SET_ORIGIN_ROW_LETTERS.charCodeAt(index);

  // colInt and rowInt are the letters to build to return
  var colInt = colOrigin + column - 1;
  var rowInt = rowOrigin + row;
  var rollover = false;

  if (colInt > Z) {
    colInt = colInt - Z + A - 1;
    rollover = true;
  }

  if (colInt === I || (colOrigin < I && colInt > I) || ((colInt > I || colOrigin < I) && rollover)) {
    colInt++;
  }

  if (colInt === O || (colOrigin < O && colInt > O) || ((colInt > O || colOrigin < O) && rollover)) {
    colInt++;

    if (colInt === I) {
      colInt++;
    }
  }

  if (colInt > Z) {
    colInt = colInt - Z + A - 1;
  }

  if (rowInt > V) {
    rowInt = rowInt - V + A - 1;
    rollover = true;
  }
  else {
    rollover = false;
  }

  if (((rowInt === I) || ((rowOrigin < I) && (rowInt > I))) || (((rowInt > I) || (rowOrigin < I)) && rollover)) {
    rowInt++;
  }

  if (((rowInt === O) || ((rowOrigin < O) && (rowInt > O))) || (((rowInt > O) || (rowOrigin < O)) && rollover)) {
    rowInt++;

    if (rowInt === I) {
      rowInt++;
    }
  }

  if (rowInt > V) {
    rowInt = rowInt - V + A - 1;
  }

  var twoLetter = String.fromCharCode(colInt) + String.fromCharCode(rowInt);
  return twoLetter;
}

/**
 * Decode the UTM parameters from a MGRS string.
 *
 * @private
 * @param {string} mgrsString an UPPERCASE coordinate string is expected.
 * @return {object} An object literal with easting, northing, zoneLetter,
 *     zoneNumber and accuracy (in meters) properties.
 */
function decode(mgrsString) {

  if (mgrsString && mgrsString.length === 0) {
    throw ("MGRSPoint coverting from nothing");
  }

  var length = mgrsString.length;

  var hunK = null;
  var sb = "";
  var testChar;
  var i = 0;

  // get Zone number
  while (!(/[A-Z]/).test(testChar = mgrsString.charAt(i))) {
    if (i >= 2) {
      throw ("MGRSPoint bad conversion from: " + mgrsString);
    }
    sb += testChar;
    i++;
  }

  var zoneNumber = parseInt(sb, 10);

  if (i === 0 || i + 3 > length) {
    // A good MGRS string has to be 4-5 digits long,
    // ##AAA/#AAA at least.
    throw ("MGRSPoint bad conversion from: " + mgrsString);
  }

  var zoneLetter = mgrsString.charAt(i++);

  // Should we check the zone letter here? Why not.
  if (zoneLetter <= 'A' || zoneLetter === 'B' || zoneLetter === 'Y' || zoneLetter >= 'Z' || zoneLetter === 'I' || zoneLetter === 'O') {
    throw ("MGRSPoint zone letter " + zoneLetter + " not handled: " + mgrsString);
  }

  hunK = mgrsString.substring(i, i += 2);

  var set = get100kSetForZone(zoneNumber);

  var east100k = getEastingFromChar(hunK.charAt(0), set);
  var north100k = getNorthingFromChar(hunK.charAt(1), set);

  // We have a bug where the northing may be 2000000 too low.
  // How
  // do we know when to roll over?

  while (north100k < getMinNorthing(zoneLetter)) {
    north100k += 2000000;
  }

  // calculate the char index for easting/northing separator
  var remainder = length - i;

  if (remainder % 2 !== 0) {
    throw ("MGRSPoint has to have an even number \nof digits after the zone letter and two 100km letters - front \nhalf for easting meters, second half for \nnorthing meters" + mgrsString);
  }

  var sep = remainder / 2;

  var sepEasting = 0.0;
  var sepNorthing = 0.0;
  var accuracyBonus, sepEastingString, sepNorthingString, easting, northing;
  if (sep > 0) {
    accuracyBonus = 100000.0 / Math.pow(10, sep);
    sepEastingString = mgrsString.substring(i, i + sep);
    sepEasting = parseFloat(sepEastingString) * accuracyBonus;
    sepNorthingString = mgrsString.substring(i + sep);
    sepNorthing = parseFloat(sepNorthingString) * accuracyBonus;
  }

  easting = sepEasting + east100k;
  northing = sepNorthing + north100k;

  return {
    easting: easting,
    northing: northing,
    zoneLetter: zoneLetter,
    zoneNumber: zoneNumber,
    accuracy: accuracyBonus
  };
}

/**
 * Given the first letter from a two-letter MGRS 100k zone, and given the
 * MGRS table set for the zone number, figure out the easting value that
 * should be added to the other, secondary easting value.
 *
 * @private
 * @param {char} e The first letter from a two-letter MGRS 100´k zone.
 * @param {number} set The MGRS table set for the zone number.
 * @return {number} The easting value for the given letter and set.
 */
function getEastingFromChar(e, set) {
  // colOrigin is the letter at the origin of the set for the
  // column
  var curCol = SET_ORIGIN_COLUMN_LETTERS.charCodeAt(set - 1);
  var eastingValue = 100000.0;
  var rewindMarker = false;

  while (curCol !== e.charCodeAt(0)) {
    curCol++;
    if (curCol === I) {
      curCol++;
    }
    if (curCol === O) {
      curCol++;
    }
    if (curCol > Z) {
      if (rewindMarker) {
        throw ("Bad character: " + e);
      }
      curCol = A;
      rewindMarker = true;
    }
    eastingValue += 100000.0;
  }

  return eastingValue;
}

/**
 * Given the second letter from a two-letter MGRS 100k zone, and given the
 * MGRS table set for the zone number, figure out the northing value that
 * should be added to the other, secondary northing value. You have to
 * remember that Northings are determined from the equator, and the vertical
 * cycle of letters mean a 2000000 additional northing meters. This happens
 * approx. every 18 degrees of latitude. This method does *NOT* count any
 * additional northings. You have to figure out how many 2000000 meters need
 * to be added for the zone letter of the MGRS coordinate.
 *
 * @private
 * @param {char} n Second letter of the MGRS 100k zone
 * @param {number} set The MGRS table set number, which is dependent on the
 *     UTM zone number.
 * @return {number} The northing value for the given letter and set.
 */
function getNorthingFromChar(n, set) {

  if (n > 'V') {
    throw ("MGRSPoint given invalid Northing " + n);
  }

  // rowOrigin is the letter at the origin of the set for the
  // column
  var curRow = SET_ORIGIN_ROW_LETTERS.charCodeAt(set - 1);
  var northingValue = 0.0;
  var rewindMarker = false;

  while (curRow !== n.charCodeAt(0)) {
    curRow++;
    if (curRow === I) {
      curRow++;
    }
    if (curRow === O) {
      curRow++;
    }
    // fixing a bug making whole application hang in this loop
    // when 'n' is a wrong character
    if (curRow > V) {
      if (rewindMarker) { // making sure that this loop ends
        throw ("Bad character: " + n);
      }
      curRow = A;
      rewindMarker = true;
    }
    northingValue += 100000.0;
  }

  return northingValue;
}

/**
 * The function getMinNorthing returns the minimum northing value of a MGRS
 * zone.
 *
 * Ported from Geotrans' c Lattitude_Band_Value structure table.
 *
 * @private
 * @param {char} zoneLetter The MGRS zone to get the min northing for.
 * @return {number}
 */
function getMinNorthing(zoneLetter) {
  var northing;
  switch (zoneLetter) {
  case 'C':
    northing = 1100000.0;
    break;
  case 'D':
    northing = 2000000.0;
    break;
  case 'E':
    northing = 2800000.0;
    break;
  case 'F':
    northing = 3700000.0;
    break;
  case 'G':
    northing = 4600000.0;
    break;
  case 'H':
    northing = 5500000.0;
    break;
  case 'J':
    northing = 6400000.0;
    break;
  case 'K':
    northing = 7300000.0;
    break;
  case 'L':
    northing = 8200000.0;
    break;
  case 'M':
    northing = 9100000.0;
    break;
  case 'N':
    northing = 0.0;
    break;
  case 'P':
    northing = 800000.0;
    break;
  case 'Q':
    northing = 1700000.0;
    break;
  case 'R':
    northing = 2600000.0;
    break;
  case 'S':
    northing = 3500000.0;
    break;
  case 'T':
    northing = 4400000.0;
    break;
  case 'U':
    northing = 5300000.0;
    break;
  case 'V':
    northing = 6200000.0;
    break;
  case 'W':
    northing = 7000000.0;
    break;
  case 'X':
    northing = 7900000.0;
    break;
  default:
    northing = -1.0;
  }
  if (northing >= 0.0) {
    return northing;
  }
  else {
    throw ("Invalid zone letter: " + zoneLetter);
  }

}


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var C00 = 1;
var C02 = 0.25;
var C04 = 0.046875;
var C06 = 0.01953125;
var C08 = 0.01068115234375;
var C22 = 0.75;
var C44 = 0.46875;
var C46 = 0.01302083333333333333;
var C48 = 0.00712076822916666666;
var C66 = 0.36458333333333333333;
var C68 = 0.00569661458333333333;
var C88 = 0.3076171875;

/* harmony default export */ __webpack_exports__["a"] = (function(es) {
  var en = [];
  en[0] = C00 - es * (C02 + es * (C04 + es * (C06 + es * C08)));
  en[1] = es * (C22 - es * (C04 + es * (C06 + es * C08)));
  var t = es * es;
  en[2] = t * (C44 - es * (C46 + es * C48));
  t *= es;
  en[3] = t * (C66 - es * C68);
  en[4] = t * es * C88;
  return en;
});

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pj_mlfn__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_values__ = __webpack_require__(0);



var MAX_ITER = 20;

/* harmony default export */ __webpack_exports__["a"] = (function(arg, es, en) {
  var k = 1 / (1 - es);
  var phi = arg;
  for (var i = MAX_ITER; i; --i) { /* rarely goes over 2 iterations */
    var s = Math.sin(phi);
    var t = 1 - es * s * s;
    //t = this.pj_mlfn(phi, s, Math.cos(phi), en) - arg;
    //phi -= t * (t * Math.sqrt(t)) * k;
    t = (Object(__WEBPACK_IMPORTED_MODULE_0__pj_mlfn__["a" /* default */])(phi, s, Math.cos(phi), en) - arg) * (t * Math.sqrt(t)) * k;
    phi -= t;
    if (Math.abs(t) < __WEBPACK_IMPORTED_MODULE_1__constants_values__["b" /* EPSLN */]) {
      return phi;
    }
  }
  //..reportError("cass:pj_inv_mlfn: Convergence error");
  return phi;
});


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export init */
/* unused harmony export forward */
/* unused harmony export inverse */
/* unused harmony export names */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_sinh__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_hypot__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_asinhy__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_gatg__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_clens__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_clens_cmplx__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_adjust_lon__ = __webpack_require__(1);
// Heavily based on this etmerc projection implementation
// https://github.com/mbloch/mapshaper-proj/blob/master/src/projections/etmerc.js









function init() {
  if (this.es === undefined || this.es <= 0) {
    throw new Error('incorrect elliptical usage');
  }

  this.x0 = this.x0 !== undefined ? this.x0 : 0;
  this.y0 = this.y0 !== undefined ? this.y0 : 0;
  this.long0 = this.long0 !== undefined ? this.long0 : 0;
  this.lat0 = this.lat0 !== undefined ? this.lat0 : 0;

  this.cgb = [];
  this.cbg = [];
  this.utg = [];
  this.gtu = [];

  var f = this.es / (1 + Math.sqrt(1 - this.es));
  var n = f / (2 - f);
  var np = n;

  this.cgb[0] = n * (2 + n * (-2 / 3 + n * (-2 + n * (116 / 45 + n * (26 / 45 + n * (-2854 / 675 ))))));
  this.cbg[0] = n * (-2 + n * ( 2 / 3 + n * ( 4 / 3 + n * (-82 / 45 + n * (32 / 45 + n * (4642 / 4725))))));

  np = np * n;
  this.cgb[1] = np * (7 / 3 + n * (-8 / 5 + n * (-227 / 45 + n * (2704 / 315 + n * (2323 / 945)))));
  this.cbg[1] = np * (5 / 3 + n * (-16 / 15 + n * ( -13 / 9 + n * (904 / 315 + n * (-1522 / 945)))));

  np = np * n;
  this.cgb[2] = np * (56 / 15 + n * (-136 / 35 + n * (-1262 / 105 + n * (73814 / 2835))));
  this.cbg[2] = np * (-26 / 15 + n * (34 / 21 + n * (8 / 5 + n * (-12686 / 2835))));

  np = np * n;
  this.cgb[3] = np * (4279 / 630 + n * (-332 / 35 + n * (-399572 / 14175)));
  this.cbg[3] = np * (1237 / 630 + n * (-12 / 5 + n * ( -24832 / 14175)));

  np = np * n;
  this.cgb[4] = np * (4174 / 315 + n * (-144838 / 6237));
  this.cbg[4] = np * (-734 / 315 + n * (109598 / 31185));

  np = np * n;
  this.cgb[5] = np * (601676 / 22275);
  this.cbg[5] = np * (444337 / 155925);

  np = Math.pow(n, 2);
  this.Qn = this.k0 / (1 + n) * (1 + np * (1 / 4 + np * (1 / 64 + np / 256)));

  this.utg[0] = n * (-0.5 + n * ( 2 / 3 + n * (-37 / 96 + n * ( 1 / 360 + n * (81 / 512 + n * (-96199 / 604800))))));
  this.gtu[0] = n * (0.5 + n * (-2 / 3 + n * (5 / 16 + n * (41 / 180 + n * (-127 / 288 + n * (7891 / 37800))))));

  this.utg[1] = np * (-1 / 48 + n * (-1 / 15 + n * (437 / 1440 + n * (-46 / 105 + n * (1118711 / 3870720)))));
  this.gtu[1] = np * (13 / 48 + n * (-3 / 5 + n * (557 / 1440 + n * (281 / 630 + n * (-1983433 / 1935360)))));

  np = np * n;
  this.utg[2] = np * (-17 / 480 + n * (37 / 840 + n * (209 / 4480 + n * (-5569 / 90720 ))));
  this.gtu[2] = np * (61 / 240 + n * (-103 / 140 + n * (15061 / 26880 + n * (167603 / 181440))));

  np = np * n;
  this.utg[3] = np * (-4397 / 161280 + n * (11 / 504 + n * (830251 / 7257600)));
  this.gtu[3] = np * (49561 / 161280 + n * (-179 / 168 + n * (6601661 / 7257600)));

  np = np * n;
  this.utg[4] = np * (-4583 / 161280 + n * (108847 / 3991680));
  this.gtu[4] = np * (34729 / 80640 + n * (-3418889 / 1995840));

  np = np * n;
  this.utg[5] = np * (-20648693 / 638668800);
  this.gtu[5] = np * (212378941 / 319334400);

  var Z = Object(__WEBPACK_IMPORTED_MODULE_3__common_gatg__["a" /* default */])(this.cbg, this.lat0);
  this.Zb = -this.Qn * (Z + Object(__WEBPACK_IMPORTED_MODULE_4__common_clens__["a" /* default */])(this.gtu, 2 * Z));
}

function forward(p) {
  var Ce = Object(__WEBPACK_IMPORTED_MODULE_6__common_adjust_lon__["a" /* default */])(p.x - this.long0);
  var Cn = p.y;

  Cn = Object(__WEBPACK_IMPORTED_MODULE_3__common_gatg__["a" /* default */])(this.cbg, Cn);
  var sin_Cn = Math.sin(Cn);
  var cos_Cn = Math.cos(Cn);
  var sin_Ce = Math.sin(Ce);
  var cos_Ce = Math.cos(Ce);

  Cn = Math.atan2(sin_Cn, cos_Ce * cos_Cn);
  Ce = Math.atan2(sin_Ce * cos_Cn, Object(__WEBPACK_IMPORTED_MODULE_1__common_hypot__["a" /* default */])(sin_Cn, cos_Cn * cos_Ce));
  Ce = Object(__WEBPACK_IMPORTED_MODULE_2__common_asinhy__["a" /* default */])(Math.tan(Ce));

  var tmp = Object(__WEBPACK_IMPORTED_MODULE_5__common_clens_cmplx__["a" /* default */])(this.gtu, 2 * Cn, 2 * Ce);

  Cn = Cn + tmp[0];
  Ce = Ce + tmp[1];

  var x;
  var y;

  if (Math.abs(Ce) <= 2.623395162778) {
    x = this.a * (this.Qn * Ce) + this.x0;
    y = this.a * (this.Qn * Cn + this.Zb) + this.y0;
  }
  else {
    x = Infinity;
    y = Infinity;
  }

  p.x = x;
  p.y = y;

  return p;
}

function inverse(p) {
  var Ce = (p.x - this.x0) * (1 / this.a);
  var Cn = (p.y - this.y0) * (1 / this.a);

  Cn = (Cn - this.Zb) / this.Qn;
  Ce = Ce / this.Qn;

  var lon;
  var lat;

  if (Math.abs(Ce) <= 2.623395162778) {
    var tmp = Object(__WEBPACK_IMPORTED_MODULE_5__common_clens_cmplx__["a" /* default */])(this.utg, 2 * Cn, 2 * Ce);

    Cn = Cn + tmp[0];
    Ce = Ce + tmp[1];
    Ce = Math.atan(Object(__WEBPACK_IMPORTED_MODULE_0__common_sinh__["a" /* default */])(Ce));

    var sin_Cn = Math.sin(Cn);
    var cos_Cn = Math.cos(Cn);
    var sin_Ce = Math.sin(Ce);
    var cos_Ce = Math.cos(Ce);

    Cn = Math.atan2(sin_Cn * cos_Ce, Object(__WEBPACK_IMPORTED_MODULE_1__common_hypot__["a" /* default */])(sin_Ce, cos_Ce * cos_Cn));
    Ce = Math.atan2(sin_Ce, cos_Ce * cos_Cn);

    lon = Object(__WEBPACK_IMPORTED_MODULE_6__common_adjust_lon__["a" /* default */])(Ce + this.long0);
    lat = Object(__WEBPACK_IMPORTED_MODULE_3__common_gatg__["a" /* default */])(this.cgb, Cn);
  }
  else {
    lon = Infinity;
    lat = Infinity;
  }

  p.x = lon;
  p.y = lat;

  return p;
}

var names = ["Extended_Transverse_Mercator", "Extended Transverse Mercator", "etmerc"];
/* harmony default export */ __webpack_exports__["a"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  var r = Math.exp(x);
  r = (r - 1 / r) / 2;
  return r;
});

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x, y) {
  x = Math.abs(x);
  y = Math.abs(y);
  var a = Math.max(x, y);
  var b = Math.min(x, y) / (a ? a : 1);

  return a * Math.sqrt(1 + Math.pow(b, 2));
});


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ZNXDConfig = __webpack_require__(13);

var _ZNXDConfig2 = _interopRequireDefault(_ZNXDConfig);

var _ZNXD = __webpack_require__(20);

var _ZNXD2 = _interopRequireDefault(_ZNXD);

var _ZNXD3 = __webpack_require__(21);

var _ZNXD4 = _interopRequireDefault(_ZNXD3);

var _ZNXD5 = __webpack_require__(97);

var _ZNXD6 = _interopRequireDefault(_ZNXD5);

var _ZNXD7 = __webpack_require__(98);

var _ZNXD8 = _interopRequireDefault(_ZNXD7);

var _ZNXD9 = __webpack_require__(22);

var _ZNXD10 = _interopRequireDefault(_ZNXD9);

var _ZNXD11 = __webpack_require__(99);

var _ZNXD12 = _interopRequireDefault(_ZNXD11);

var _ZNXD13 = __webpack_require__(100);

var _ZNXD14 = _interopRequireDefault(_ZNXD13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZNXDWEBGIS = {
  Config: _ZNXDConfig2.default,
  Control: _ZNXD2.default,
  Layer: _ZNXD4.default,
  Map: _ZNXD6.default,
  Tool: _ZNXD8.default,
  Util: _ZNXD10.default,
  JSTS: _ZNXD12.default,
  WPS: _ZNXD14.default
};
exports.default = ZNXDWEBGIS;
window.ZNXDWEBGIS = ZNXDWEBGIS;

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Proj__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Point__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_toPoint__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__defs__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__transform__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mgrs__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__version__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__projs__ = __webpack_require__(58);










__WEBPACK_IMPORTED_MODULE_0__core__["a" /* default */].defaultDatum = 'WGS84'; //default datum
__WEBPACK_IMPORTED_MODULE_0__core__["a" /* default */].Proj = __WEBPACK_IMPORTED_MODULE_1__Proj__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0__core__["a" /* default */].WGS84 = new __WEBPACK_IMPORTED_MODULE_0__core__["a" /* default */].Proj('WGS84');
__WEBPACK_IMPORTED_MODULE_0__core__["a" /* default */].Point = __WEBPACK_IMPORTED_MODULE_2__Point__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0__core__["a" /* default */].toPoint = __WEBPACK_IMPORTED_MODULE_3__common_toPoint__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0__core__["a" /* default */].defs = __WEBPACK_IMPORTED_MODULE_4__defs__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0__core__["a" /* default */].transform = __WEBPACK_IMPORTED_MODULE_5__transform__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0__core__["a" /* default */].mgrs = __WEBPACK_IMPORTED_MODULE_6_mgrs__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0__core__["a" /* default */].version = __WEBPACK_IMPORTED_MODULE_7__version__["a" /* default */];
Object(__WEBPACK_IMPORTED_MODULE_8__projs__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__core__["a" /* default */]);
/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__core__["a" /* default */]);


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Proj__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transform__ = __webpack_require__(26);


var wgs84 = Object(__WEBPACK_IMPORTED_MODULE_0__Proj__["a" /* default */])('WGS84');

function transformer(from, to, coords) {
  var transformedArray, out, keys;
  if (Array.isArray(coords)) {
    transformedArray = Object(__WEBPACK_IMPORTED_MODULE_1__transform__["a" /* default */])(from, to, coords);
    if (coords.length === 3) {
      return [transformedArray.x, transformedArray.y, transformedArray.z];
    }
    else {
      return [transformedArray.x, transformedArray.y];
    }
  }
  else {
    out = Object(__WEBPACK_IMPORTED_MODULE_1__transform__["a" /* default */])(from, to, coords);
    keys = Object.keys(coords);
    if (keys.length === 2) {
      return out;
    }
    keys.forEach(function (key) {
      if (key === 'x' || key === 'y') {
        return;
      }
      out[key] = coords[key];
    });
    return out;
  }
}

function checkProj(item) {
  if (item instanceof __WEBPACK_IMPORTED_MODULE_0__Proj__["a" /* default */]) {
    return item;
  }
  if (item.oProj) {
    return item.oProj;
  }
  return Object(__WEBPACK_IMPORTED_MODULE_0__Proj__["a" /* default */])(item);
}
function proj4(fromProj, toProj, coord) {
  fromProj = checkProj(fromProj);
  var single = false;
  var obj;
  if (typeof toProj === 'undefined') {
    toProj = fromProj;
    fromProj = wgs84;
    single = true;
  }
  else if (typeof toProj.x !== 'undefined' || Array.isArray(toProj)) {
    coord = toProj;
    toProj = fromProj;
    fromProj = wgs84;
    single = true;
  }
  toProj = checkProj(toProj);
  if (coord) {
    return transformer(fromProj, toProj, coord);
  }
  else {
    obj = {
      forward: function(coords) {
        return transformer(fromProj, toProj, coords);
      },
      inverse: function(coords) {
        return transformer(toProj, fromProj, coords);
      }
    };
    if (single) {
      obj.oProj = toProj;
    }
    return obj;
  }
}
/* harmony default export */ __webpack_exports__["a"] = (proj4);


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defs__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wkt_parser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__projString__ = __webpack_require__(24);



function testObj(code){
  return typeof code === 'string';
}
function testDef(code){
  return code in __WEBPACK_IMPORTED_MODULE_0__defs__["a" /* default */];
}
 var codeWords = ['PROJECTEDCRS', 'PROJCRS', 'GEOGCS','GEOCCS','PROJCS','LOCAL_CS', 'GEODCRS', 'GEODETICCRS', 'GEODETICDATUM', 'ENGCRS', 'ENGINEERINGCRS']; 
function testWKT(code){
  return codeWords.some(function (word) {
    return code.indexOf(word) > -1;
  });
}
function testProj(code){
  return code[0] === '+';
}
function parse(code){
  if (testObj(code)) {
    //check to see if this is a WKT string
    if (testDef(code)) {
      return __WEBPACK_IMPORTED_MODULE_0__defs__["a" /* default */][code];
    }
    if (testWKT(code)) {
      return Object(__WEBPACK_IMPORTED_MODULE_1_wkt_parser__["a" /* default */])(code);
    }
    if (testProj(code)) {
      return Object(__WEBPACK_IMPORTED_MODULE_2__projString__["a" /* default */])(code);
    }
  }else{
    return code;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (parse);


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(defs) {
  defs('EPSG:4326', "+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees");
  defs('EPSG:4269', "+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees");
  defs('EPSG:3857', "+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs");

  defs.WGS84 = defs['EPSG:4326'];
  defs['EPSG:3785'] = defs['EPSG:3857']; // maintain backward compat, official code is 3857
  defs.GOOGLE = defs['EPSG:3857'];
  defs['EPSG:900913'] = defs['EPSG:3857'];
  defs['EPSG:102113'] = defs['EPSG:3857'];
});


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return exports; });
var exports = {};


exports.greenwich = 0.0; //"0dE",
exports.lisbon = -9.131906111111; //"9d07'54.862\"W",
exports.paris = 2.337229166667; //"2d20'14.025\"E",
exports.bogota = -74.080916666667; //"74d04'51.3\"W",
exports.madrid = -3.687938888889; //"3d41'16.58\"W",
exports.rome = 12.452333333333; //"12d27'8.4\"E",
exports.bern = 7.439583333333; //"7d26'22.5\"E",
exports.jakarta = 106.807719444444; //"106d48'27.79\"E",
exports.ferro = -17.666666666667; //"17d40'W",
exports.brussels = 4.367975; //"4d22'4.71\"E",
exports.stockholm = 18.058277777778; //"18d3'29.8\"E",
exports.athens = 23.7163375; //"23d42'58.815\"E",
exports.oslo = 10.722916666667; //"10d43'22.5\"E"


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  ft: {to_meter: 0.3048},
  'us-ft': {to_meter: 1200 / 3937}
});


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (parseString);

var NEUTRAL = 1;
var KEYWORD = 2;
var NUMBER = 3;
var QUOTED = 4;
var AFTERQUOTE = 5;
var ENDED = -1;
var whitespace = /\s/;
var latin = /[A-Za-z]/;
var keyword = /[A-Za-z84]/;
var endThings = /[,\]]/;
var digets = /[\d\.E\-\+]/;
// const ignoredChar = /[\s_\-\/\(\)]/g;
function Parser(text) {
  if (typeof text !== 'string') {
    throw new Error('not a string');
  }
  this.text = text.trim();
  this.level = 0;
  this.place = 0;
  this.root = null;
  this.stack = [];
  this.currentObject = null;
  this.state = NEUTRAL;
}
Parser.prototype.readCharicter = function() {
  var char = this.text[this.place++];
  if (this.state !== QUOTED) {
    while (whitespace.test(char)) {
      if (this.place >= this.text.length) {
        return;
      }
      char = this.text[this.place++];
    }
  }
  switch (this.state) {
    case NEUTRAL:
      return this.neutral(char);
    case KEYWORD:
      return this.keyword(char)
    case QUOTED:
      return this.quoted(char);
    case AFTERQUOTE:
      return this.afterquote(char);
    case NUMBER:
      return this.number(char);
    case ENDED:
      return;
  }
};
Parser.prototype.afterquote = function(char) {
  if (char === '"') {
    this.word += '"';
    this.state = QUOTED;
    return;
  }
  if (endThings.test(char)) {
    this.word = this.word.trim();
    this.afterItem(char);
    return;
  }
  throw new Error('havn\'t handled "' +char + '" in afterquote yet, index ' + this.place);
};
Parser.prototype.afterItem = function(char) {
  if (char === ',') {
    if (this.word !== null) {
      this.currentObject.push(this.word);
    }
    this.word = null;
    this.state = NEUTRAL;
    return;
  }
  if (char === ']') {
    this.level--;
    if (this.word !== null) {
      this.currentObject.push(this.word);
      this.word = null;
    }
    this.state = NEUTRAL;
    this.currentObject = this.stack.pop();
    if (!this.currentObject) {
      this.state = ENDED;
    }

    return;
  }
};
Parser.prototype.number = function(char) {
  if (digets.test(char)) {
    this.word += char;
    return;
  }
  if (endThings.test(char)) {
    this.word = parseFloat(this.word);
    this.afterItem(char);
    return;
  }
  throw new Error('havn\'t handled "' +char + '" in number yet, index ' + this.place);
};
Parser.prototype.quoted = function(char) {
  if (char === '"') {
    this.state = AFTERQUOTE;
    return;
  }
  this.word += char;
  return;
};
Parser.prototype.keyword = function(char) {
  if (keyword.test(char)) {
    this.word += char;
    return;
  }
  if (char === '[') {
    var newObjects = [];
    newObjects.push(this.word);
    this.level++;
    if (this.root === null) {
      this.root = newObjects;
    } else {
      this.currentObject.push(newObjects);
    }
    this.stack.push(this.currentObject);
    this.currentObject = newObjects;
    this.state = NEUTRAL;
    return;
  }
  if (endThings.test(char)) {
    this.afterItem(char);
    return;
  }
  throw new Error('havn\'t handled "' +char + '" in keyword yet, index ' + this.place);
};
Parser.prototype.neutral = function(char) {
  if (latin.test(char)) {
    this.word = char;
    this.state = KEYWORD;
    return;
  }
  if (char === '"') {
    this.word = '';
    this.state = QUOTED;
    return;
  }
  if (digets.test(char)) {
    this.word = char;
    this.state = NUMBER;
    return;
  }
  if (endThings.test(char)) {
    this.afterItem(char);
    return;
  }
  throw new Error('havn\'t handled "' +char + '" in neutral yet, index ' + this.place);
};
Parser.prototype.output = function() {
  while (this.place < this.text.length) {
    this.readCharicter();
  }
  if (this.state === ENDED) {
    return this.root;
  }
  throw new Error('unable to parse string "' +this.text + '". State is ' + this.state);
};

function parseString(txt) {
  var parser = new Parser(txt);
  return parser.output();
}


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = sExpr;


function mapit(obj, key, value) {
  if (Array.isArray(key)) {
    value.unshift(key);
    key = null;
  }
  var thing = key ? {} : obj;

  var out = value.reduce(function(newObj, item) {
    sExpr(item, newObj);
    return newObj
  }, thing);
  if (key) {
    obj[key] = out;
  }
}

function sExpr(v, obj) {
  if (!Array.isArray(v)) {
    obj[v] = true;
    return;
  }
  var key = v.shift();
  if (key === 'PARAMETER') {
    key = v.shift();
  }
  if (v.length === 1) {
    if (Array.isArray(v[0])) {
      obj[key] = {};
      sExpr(v[0], obj[key]);
      return;
    }
    obj[key] = v[0];
    return;
  }
  if (!v.length) {
    obj[key] = true;
    return;
  }
  if (key === 'TOWGS84') {
    obj[key] = v;
    return;
  }
  if (!Array.isArray(key)) {
    obj[key] = {};
  }

  var i;
  switch (key) {
    case 'UNIT':
    case 'PRIMEM':
    case 'VERT_DATUM':
      obj[key] = {
        name: v[0].toLowerCase(),
        convert: v[1]
      };
      if (v.length === 3) {
        sExpr(v[2], obj[key]);
      }
      return;
    case 'SPHEROID':
    case 'ELLIPSOID':
      obj[key] = {
        name: v[0],
        a: v[1],
        rf: v[2]
      };
      if (v.length === 4) {
        sExpr(v[3], obj[key]);
      }
      return;
    case 'PROJECTEDCRS':
    case 'PROJCRS':
    case 'GEOGCS':
    case 'GEOCCS':
    case 'PROJCS':
    case 'LOCAL_CS':
    case 'GEODCRS':
    case 'GEODETICCRS':
    case 'GEODETICDATUM':
    case 'EDATUM':
    case 'ENGINEERINGDATUM':
    case 'VERT_CS':
    case 'VERTCRS':
    case 'VERTICALCRS':
    case 'COMPD_CS':
    case 'COMPOUNDCRS':
    case 'ENGINEERINGCRS':
    case 'ENGCRS':
    case 'FITTED_CS':
    case 'LOCAL_DATUM':
    case 'DATUM':
      v[0] = ['name', v[0]];
      mapit(obj, key, v);
      return;
    default:
      i = -1;
      while (++i < v.length) {
        if (!Array.isArray(v[i])) {
          return sExpr(v, obj[key]);
        }
      }
      return mapit(obj, key, v);
  }
}


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(destination, source) {
  destination = destination || {};
  var value, property;
  if (!source) {
    return destination;
  }
  for (property in source) {
    value = source[property];
    if (value !== undefined) {
      destination[property] = value;
    }
  }
  return destination;
});


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export add */
/* unused harmony export get */
/* unused harmony export start */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__projections_merc__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__projections_longlat__ = __webpack_require__(46);


var projs = [__WEBPACK_IMPORTED_MODULE_0__projections_merc__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__projections_longlat__["a" /* default */]];
var names = {};
var projStore = [];

function add(proj, i) {
  var len = projStore.length;
  if (!proj.names) {
    console.log(i);
    return true;
  }
  projStore[len] = proj;
  proj.names.forEach(function(n) {
    names[n.toLowerCase()] = len;
  });
  return this;
}



function get(name) {
  if (!name) {
    return false;
  }
  var n = name.toLowerCase();
  if (typeof names[n] !== 'undefined' && projStore[names[n]]) {
    return projStore[names[n]];
  }
}

function start() {
  projs.forEach(add);
}
/* harmony default export */ __webpack_exports__["a"] = ({
  start: start,
  add: add,
  get: get
});


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export init */
/* unused harmony export forward */
/* unused harmony export inverse */
/* unused harmony export names */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_msfnz__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_adjust_lon__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_tsfnz__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_phi2z__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_values__ = __webpack_require__(0);






function init() {
  var con = this.b / this.a;
  this.es = 1 - con * con;
  if(!('x0' in this)){
    this.x0 = 0;
  }
  if(!('y0' in this)){
    this.y0 = 0;
  }
  this.e = Math.sqrt(this.es);
  if (this.lat_ts) {
    if (this.sphere) {
      this.k0 = Math.cos(this.lat_ts);
    }
    else {
      this.k0 = Object(__WEBPACK_IMPORTED_MODULE_0__common_msfnz__["a" /* default */])(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts));
    }
  }
  else {
    if (!this.k0) {
      if (this.k) {
        this.k0 = this.k;
      }
      else {
        this.k0 = 1;
      }
    }
  }
}

/* Mercator forward equations--mapping lat,long to x,y
  --------------------------------------------------*/

function forward(p) {
  var lon = p.x;
  var lat = p.y;
  // convert to radians
  if (lat * __WEBPACK_IMPORTED_MODULE_4__constants_values__["i" /* R2D */] > 90 && lat * __WEBPACK_IMPORTED_MODULE_4__constants_values__["i" /* R2D */] < -90 && lon * __WEBPACK_IMPORTED_MODULE_4__constants_values__["i" /* R2D */] > 180 && lon * __WEBPACK_IMPORTED_MODULE_4__constants_values__["i" /* R2D */] < -180) {
    return null;
  }

  var x, y;
  if (Math.abs(Math.abs(lat) - __WEBPACK_IMPORTED_MODULE_4__constants_values__["d" /* HALF_PI */]) <= __WEBPACK_IMPORTED_MODULE_4__constants_values__["b" /* EPSLN */]) {
    return null;
  }
  else {
    if (this.sphere) {
      x = this.x0 + this.a * this.k0 * Object(__WEBPACK_IMPORTED_MODULE_1__common_adjust_lon__["a" /* default */])(lon - this.long0);
      y = this.y0 + this.a * this.k0 * Math.log(Math.tan(__WEBPACK_IMPORTED_MODULE_4__constants_values__["c" /* FORTPI */] + 0.5 * lat));
    }
    else {
      var sinphi = Math.sin(lat);
      var ts = Object(__WEBPACK_IMPORTED_MODULE_2__common_tsfnz__["a" /* default */])(this.e, lat, sinphi);
      x = this.x0 + this.a * this.k0 * Object(__WEBPACK_IMPORTED_MODULE_1__common_adjust_lon__["a" /* default */])(lon - this.long0);
      y = this.y0 - this.a * this.k0 * Math.log(ts);
    }
    p.x = x;
    p.y = y;
    return p;
  }
}

/* Mercator inverse equations--mapping x,y to lat/long
  --------------------------------------------------*/
function inverse(p) {

  var x = p.x - this.x0;
  var y = p.y - this.y0;
  var lon, lat;

  if (this.sphere) {
    lat = __WEBPACK_IMPORTED_MODULE_4__constants_values__["d" /* HALF_PI */] - 2 * Math.atan(Math.exp(-y / (this.a * this.k0)));
  }
  else {
    var ts = Math.exp(-y / (this.a * this.k0));
    lat = Object(__WEBPACK_IMPORTED_MODULE_3__common_phi2z__["a" /* default */])(this.e, ts);
    if (lat === -9999) {
      return null;
    }
  }
  lon = Object(__WEBPACK_IMPORTED_MODULE_1__common_adjust_lon__["a" /* default */])(this.long0 + x / (this.a * this.k0));

  p.x = lon;
  p.y = lat;
  return p;
}

var names = ["Mercator", "Popular Visualisation Pseudo Mercator", "Mercator_1SP", "Mercator_Auxiliary_Sphere", "merc"];
/* harmony default export */ __webpack_exports__["a"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export init */
/* unused harmony export forward */
/* unused harmony export inverse */
/* unused harmony export names */
function init() {
  //no-op for longlat
}

function identity(pt) {
  return pt;
}


var names = ["longlat", "identity"];
/* harmony default export */ __webpack_exports__["a"] = ({
  init: init,
  forward: identity,
  inverse: identity,
  names: names
});


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = eccentricity;
/* harmony export (immutable) */ __webpack_exports__["b"] = sphere;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_values__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_Ellipsoid__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__match__ = __webpack_require__(15);




function eccentricity(a, b, rf, R_A) {
  var a2 = a * a; // used in geocentric
  var b2 = b * b; // used in geocentric
  var es = (a2 - b2) / a2; // e ^ 2
  var e = 0;
  if (R_A) {
    a *= 1 - es * (__WEBPACK_IMPORTED_MODULE_0__constants_values__["m" /* SIXTH */] + es * (__WEBPACK_IMPORTED_MODULE_0__constants_values__["j" /* RA4 */] + es * __WEBPACK_IMPORTED_MODULE_0__constants_values__["k" /* RA6 */]));
    a2 = a * a;
    es = 0;
  } else {
    e = Math.sqrt(es); // eccentricity
  }
  var ep2 = (a2 - b2) / b2; // used in geocentric
  return {
    es: es,
    e: e,
    ep2: ep2
  };
}
function sphere(a, b, rf, ellps, sphere) {
  if (!a) { // do we have an ellipsoid?
    var ellipse = Object(__WEBPACK_IMPORTED_MODULE_2__match__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__constants_Ellipsoid__["b" /* default */], ellps);
    if (!ellipse) {
      ellipse = __WEBPACK_IMPORTED_MODULE_1__constants_Ellipsoid__["a" /* WGS84 */];
    }
    a = ellipse.a;
    b = ellipse.b;
    rf = ellipse.rf;
  }

  if (rf && !b) {
    b = (1.0 - 1.0 / rf) * a;
  }
  if (rf === 0 || Math.abs(a - b) < __WEBPACK_IMPORTED_MODULE_0__constants_values__["b" /* EPSLN */]) {
    sphere = true;
    b = a;
  }
  return {
    a: a,
    b: b,
    rf: rf,
    sphere: sphere
  };
}


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return exports; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WGS84; });
var exports = {};

exports.MERIT = {
  a: 6378137.0,
  rf: 298.257,
  ellipseName: "MERIT 1983"
};

exports.SGS85 = {
  a: 6378136.0,
  rf: 298.257,
  ellipseName: "Soviet Geodetic System 85"
};

exports.GRS80 = {
  a: 6378137.0,
  rf: 298.257222101,
  ellipseName: "GRS 1980(IUGG, 1980)"
};

exports.IAU76 = {
  a: 6378140.0,
  rf: 298.257,
  ellipseName: "IAU 1976"
};

exports.airy = {
  a: 6377563.396,
  b: 6356256.910,
  ellipseName: "Airy 1830"
};

exports.APL4 = {
  a: 6378137,
  rf: 298.25,
  ellipseName: "Appl. Physics. 1965"
};

exports.NWL9D = {
  a: 6378145.0,
  rf: 298.25,
  ellipseName: "Naval Weapons Lab., 1965"
};

exports.mod_airy = {
  a: 6377340.189,
  b: 6356034.446,
  ellipseName: "Modified Airy"
};

exports.andrae = {
  a: 6377104.43,
  rf: 300.0,
  ellipseName: "Andrae 1876 (Den., Iclnd.)"
};

exports.aust_SA = {
  a: 6378160.0,
  rf: 298.25,
  ellipseName: "Australian Natl & S. Amer. 1969"
};

exports.GRS67 = {
  a: 6378160.0,
  rf: 298.2471674270,
  ellipseName: "GRS 67(IUGG 1967)"
};

exports.bessel = {
  a: 6377397.155,
  rf: 299.1528128,
  ellipseName: "Bessel 1841"
};

exports.bess_nam = {
  a: 6377483.865,
  rf: 299.1528128,
  ellipseName: "Bessel 1841 (Namibia)"
};

exports.clrk66 = {
  a: 6378206.4,
  b: 6356583.8,
  ellipseName: "Clarke 1866"
};

exports.clrk80 = {
  a: 6378249.145,
  rf: 293.4663,
  ellipseName: "Clarke 1880 mod."
};

exports.clrk58 = {
  a: 6378293.645208759,
  rf: 294.2606763692654,
  ellipseName: "Clarke 1858"
};

exports.CPM = {
  a: 6375738.7,
  rf: 334.29,
  ellipseName: "Comm. des Poids et Mesures 1799"
};

exports.delmbr = {
  a: 6376428.0,
  rf: 311.5,
  ellipseName: "Delambre 1810 (Belgium)"
};

exports.engelis = {
  a: 6378136.05,
  rf: 298.2566,
  ellipseName: "Engelis 1985"
};

exports.evrst30 = {
  a: 6377276.345,
  rf: 300.8017,
  ellipseName: "Everest 1830"
};

exports.evrst48 = {
  a: 6377304.063,
  rf: 300.8017,
  ellipseName: "Everest 1948"
};

exports.evrst56 = {
  a: 6377301.243,
  rf: 300.8017,
  ellipseName: "Everest 1956"
};

exports.evrst69 = {
  a: 6377295.664,
  rf: 300.8017,
  ellipseName: "Everest 1969"
};

exports.evrstSS = {
  a: 6377298.556,
  rf: 300.8017,
  ellipseName: "Everest (Sabah & Sarawak)"
};

exports.fschr60 = {
  a: 6378166.0,
  rf: 298.3,
  ellipseName: "Fischer (Mercury Datum) 1960"
};

exports.fschr60m = {
  a: 6378155.0,
  rf: 298.3,
  ellipseName: "Fischer 1960"
};

exports.fschr68 = {
  a: 6378150.0,
  rf: 298.3,
  ellipseName: "Fischer 1968"
};

exports.helmert = {
  a: 6378200.0,
  rf: 298.3,
  ellipseName: "Helmert 1906"
};

exports.hough = {
  a: 6378270.0,
  rf: 297.0,
  ellipseName: "Hough"
};

exports.intl = {
  a: 6378388.0,
  rf: 297.0,
  ellipseName: "International 1909 (Hayford)"
};

exports.kaula = {
  a: 6378163.0,
  rf: 298.24,
  ellipseName: "Kaula 1961"
};

exports.lerch = {
  a: 6378139.0,
  rf: 298.257,
  ellipseName: "Lerch 1979"
};

exports.mprts = {
  a: 6397300.0,
  rf: 191.0,
  ellipseName: "Maupertius 1738"
};

exports.new_intl = {
  a: 6378157.5,
  b: 6356772.2,
  ellipseName: "New International 1967"
};

exports.plessis = {
  a: 6376523.0,
  rf: 6355863.0,
  ellipseName: "Plessis 1817 (France)"
};

exports.krass = {
  a: 6378245.0,
  rf: 298.3,
  ellipseName: "Krassovsky, 1942"
};

exports.SEasia = {
  a: 6378155.0,
  b: 6356773.3205,
  ellipseName: "Southeast Asia"
};

exports.walbeck = {
  a: 6376896.0,
  b: 6355834.8467,
  ellipseName: "Walbeck"
};

exports.WGS60 = {
  a: 6378165.0,
  rf: 298.3,
  ellipseName: "WGS 60"
};

exports.WGS66 = {
  a: 6378145.0,
  rf: 298.25,
  ellipseName: "WGS 66"
};

exports.WGS7 = {
  a: 6378135.0,
  rf: 298.26,
  ellipseName: "WGS 72"
};

var WGS84 = exports.WGS84 = {
  a: 6378137.0,
  rf: 298.257223563,
  ellipseName: "WGS 84"
};

exports.sphere = {
  a: 6370997.0,
  b: 6370997.0,
  ellipseName: "Normal Sphere (r=6370997)"
};


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return exports; });
var exports = {};

exports.wgs84 = {
  towgs84: "0,0,0",
  ellipse: "WGS84",
  datumName: "WGS84"
};

exports.ch1903 = {
  towgs84: "674.374,15.056,405.346",
  ellipse: "bessel",
  datumName: "swiss"
};

exports.ggrs87 = {
  towgs84: "-199.87,74.79,246.62",
  ellipse: "GRS80",
  datumName: "Greek_Geodetic_Reference_System_1987"
};

exports.nad83 = {
  towgs84: "0,0,0",
  ellipse: "GRS80",
  datumName: "North_American_Datum_1983"
};

exports.nad27 = {
  nadgrids: "@conus,@alaska,@ntv2_0.gsb,@ntv1_can.dat",
  ellipse: "clrk66",
  datumName: "North_American_Datum_1927"
};

exports.potsdam = {
  towgs84: "606.0,23.0,413.0",
  ellipse: "bessel",
  datumName: "Potsdam Rauenberg 1950 DHDN"
};

exports.carthage = {
  towgs84: "-263.0,6.0,431.0",
  ellipse: "clark80",
  datumName: "Carthage 1934 Tunisia"
};

exports.hermannskogel = {
  towgs84: "653.0,-212.0,449.0",
  ellipse: "bessel",
  datumName: "Hermannskogel"
};

exports.osni52 = {
  towgs84: "482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",
  ellipse: "airy",
  datumName: "Irish National"
};

exports.ire65 = {
  towgs84: "482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",
  ellipse: "mod_airy",
  datumName: "Ireland 1965"
};

exports.rassadiran = {
  towgs84: "-133.63,-157.5,-158.62",
  ellipse: "intl",
  datumName: "Rassadiran"
};

exports.nzgd49 = {
  towgs84: "59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993",
  ellipse: "intl",
  datumName: "New Zealand Geodetic Datum 1949"
};

exports.osgb36 = {
  towgs84: "446.448,-125.157,542.060,0.1502,0.2470,0.8421,-20.4894",
  ellipse: "airy",
  datumName: "Airy 1830"
};

exports.s_jtsk = {
  towgs84: "589,76,480",
  ellipse: 'bessel',
  datumName: 'S-JTSK (Ferro)'
};

exports.beduaram = {
  towgs84: '-106,-87,188',
  ellipse: 'clrk80',
  datumName: 'Beduaram'
};

exports.gunung_segara = {
  towgs84: '-403,684,41',
  ellipse: 'bessel',
  datumName: 'Gunung Segara Jakarta'
};

exports.rnb72 = {
  towgs84: "106.869,-52.2978,103.724,-0.33657,0.456955,-1.84218,1",
  ellipse: "intl",
  datumName: "Reseau National Belge 1972"
};


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_values__ = __webpack_require__(0);


function datum(datumCode, datum_params, a, b, es, ep2) {
  var out = {};

  if (datumCode === undefined || datumCode === 'none') {
    out.datum_type = __WEBPACK_IMPORTED_MODULE_0__constants_values__["g" /* PJD_NODATUM */];
  } else {
    out.datum_type = __WEBPACK_IMPORTED_MODULE_0__constants_values__["h" /* PJD_WGS84 */];
  }

  if (datum_params) {
    out.datum_params = datum_params.map(parseFloat);
    if (out.datum_params[0] !== 0 || out.datum_params[1] !== 0 || out.datum_params[2] !== 0) {
      out.datum_type = __WEBPACK_IMPORTED_MODULE_0__constants_values__["e" /* PJD_3PARAM */];
    }
    if (out.datum_params.length > 3) {
      if (out.datum_params[3] !== 0 || out.datum_params[4] !== 0 || out.datum_params[5] !== 0 || out.datum_params[6] !== 0) {
        out.datum_type = __WEBPACK_IMPORTED_MODULE_0__constants_values__["f" /* PJD_7PARAM */];
        out.datum_params[3] *= __WEBPACK_IMPORTED_MODULE_0__constants_values__["l" /* SEC_TO_RAD */];
        out.datum_params[4] *= __WEBPACK_IMPORTED_MODULE_0__constants_values__["l" /* SEC_TO_RAD */];
        out.datum_params[5] *= __WEBPACK_IMPORTED_MODULE_0__constants_values__["l" /* SEC_TO_RAD */];
        out.datum_params[6] = (out.datum_params[6] / 1000000.0) + 1.0;
      }
    }
  }

  out.a = a; //datum object also uses these values
  out.b = b;
  out.es = es;
  out.ep2 = ep2;
  return out;
}

/* harmony default export */ __webpack_exports__["a"] = (datum);


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_values__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datumUtils__ = __webpack_require__(52);



function checkParams(type) {
  return (type === __WEBPACK_IMPORTED_MODULE_0__constants_values__["e" /* PJD_3PARAM */] || type === __WEBPACK_IMPORTED_MODULE_0__constants_values__["f" /* PJD_7PARAM */]);
}

/* harmony default export */ __webpack_exports__["a"] = (function(source, dest, point) {
  // Short cut if the datums are identical.
  if (Object(__WEBPACK_IMPORTED_MODULE_1__datumUtils__["a" /* compareDatums */])(source, dest)) {
    return point; // in this case, zero is sucess,
    // whereas cs_compare_datums returns 1 to indicate TRUE
    // confusing, should fix this
  }

  // Explicitly skip datum transform by setting 'datum=none' as parameter for either source or dest
  if (source.datum_type === __WEBPACK_IMPORTED_MODULE_0__constants_values__["g" /* PJD_NODATUM */] || dest.datum_type === __WEBPACK_IMPORTED_MODULE_0__constants_values__["g" /* PJD_NODATUM */]) {
    return point;
  }

  // If this datum requires grid shifts, then apply it to geodetic coordinates.

  // Do we need to go through geocentric coordinates?
  if (source.es === dest.es && source.a === dest.a && !checkParams(source.datum_type) &&  !checkParams(dest.datum_type)) {
    return point;
  }

  // Convert to geocentric coordinates.
  point = Object(__WEBPACK_IMPORTED_MODULE_1__datumUtils__["e" /* geodeticToGeocentric */])(point, source.es, source.a);
  // Convert between datums
  if (checkParams(source.datum_type)) {
    point = Object(__WEBPACK_IMPORTED_MODULE_1__datumUtils__["d" /* geocentricToWgs84 */])(point, source.datum_type, source.datum_params);
  }
  if (checkParams(dest.datum_type)) {
    point = Object(__WEBPACK_IMPORTED_MODULE_1__datumUtils__["b" /* geocentricFromWgs84 */])(point, dest.datum_type, dest.datum_params);
  }
  return Object(__WEBPACK_IMPORTED_MODULE_1__datumUtils__["c" /* geocentricToGeodetic */])(point, dest.es, dest.a, dest.b);

});


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = compareDatums;
/* harmony export (immutable) */ __webpack_exports__["e"] = geodeticToGeocentric;
/* harmony export (immutable) */ __webpack_exports__["c"] = geocentricToGeodetic;
/* harmony export (immutable) */ __webpack_exports__["d"] = geocentricToWgs84;
/* harmony export (immutable) */ __webpack_exports__["b"] = geocentricFromWgs84;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_values__ = __webpack_require__(0);


function compareDatums(source, dest) {
  if (source.datum_type !== dest.datum_type) {
    return false; // false, datums are not equal
  } else if (source.a !== dest.a || Math.abs(source.es - dest.es) > 0.000000000050) {
    // the tolerance for es is to ensure that GRS80 and WGS84
    // are considered identical
    return false;
  } else if (source.datum_type === __WEBPACK_IMPORTED_MODULE_0__constants_values__["e" /* PJD_3PARAM */]) {
    return (source.datum_params[0] === dest.datum_params[0] && source.datum_params[1] === dest.datum_params[1] && source.datum_params[2] === dest.datum_params[2]);
  } else if (source.datum_type === __WEBPACK_IMPORTED_MODULE_0__constants_values__["f" /* PJD_7PARAM */]) {
    return (source.datum_params[0] === dest.datum_params[0] && source.datum_params[1] === dest.datum_params[1] && source.datum_params[2] === dest.datum_params[2] && source.datum_params[3] === dest.datum_params[3] && source.datum_params[4] === dest.datum_params[4] && source.datum_params[5] === dest.datum_params[5] && source.datum_params[6] === dest.datum_params[6]);
  } else {
    return true; // datums are equal
  }
} // cs_compare_datums()

/*
 * The function Convert_Geodetic_To_Geocentric converts geodetic coordinates
 * (latitude, longitude, and height) to geocentric coordinates (X, Y, Z),
 * according to the current ellipsoid parameters.
 *
 *    Latitude  : Geodetic latitude in radians                     (input)
 *    Longitude : Geodetic longitude in radians                    (input)
 *    Height    : Geodetic height, in meters                       (input)
 *    X         : Calculated Geocentric X coordinate, in meters    (output)
 *    Y         : Calculated Geocentric Y coordinate, in meters    (output)
 *    Z         : Calculated Geocentric Z coordinate, in meters    (output)
 *
 */
function geodeticToGeocentric(p, es, a) {
  var Longitude = p.x;
  var Latitude = p.y;
  var Height = p.z ? p.z : 0; //Z value not always supplied

  var Rn; /*  Earth radius at location  */
  var Sin_Lat; /*  Math.sin(Latitude)  */
  var Sin2_Lat; /*  Square of Math.sin(Latitude)  */
  var Cos_Lat; /*  Math.cos(Latitude)  */

  /*
   ** Don't blow up if Latitude is just a little out of the value
   ** range as it may just be a rounding issue.  Also removed longitude
   ** test, it should be wrapped by Math.cos() and Math.sin().  NFW for PROJ.4, Sep/2001.
   */
  if (Latitude < -__WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */] && Latitude > -1.001 * __WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */]) {
    Latitude = -__WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */];
  } else if (Latitude > __WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */] && Latitude < 1.001 * __WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */]) {
    Latitude = __WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */];
  } else if ((Latitude < -__WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */]) || (Latitude > __WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */])) {
    /* Latitude out of range */
    //..reportError('geocent:lat out of range:' + Latitude);
    return null;
  }

  if (Longitude > Math.PI) {
    Longitude -= (2 * Math.PI);
  }
  Sin_Lat = Math.sin(Latitude);
  Cos_Lat = Math.cos(Latitude);
  Sin2_Lat = Sin_Lat * Sin_Lat;
  Rn = a / (Math.sqrt(1.0e0 - es * Sin2_Lat));
  return {
    x: (Rn + Height) * Cos_Lat * Math.cos(Longitude),
    y: (Rn + Height) * Cos_Lat * Math.sin(Longitude),
    z: ((Rn * (1 - es)) + Height) * Sin_Lat
  };
} // cs_geodetic_to_geocentric()

function geocentricToGeodetic(p, es, a, b) {
  /* local defintions and variables */
  /* end-criterium of loop, accuracy of sin(Latitude) */
  var genau = 1e-12;
  var genau2 = (genau * genau);
  var maxiter = 30;

  var P; /* distance between semi-minor axis and location */
  var RR; /* distance between center and location */
  var CT; /* sin of geocentric latitude */
  var ST; /* cos of geocentric latitude */
  var RX;
  var RK;
  var RN; /* Earth radius at location */
  var CPHI0; /* cos of start or old geodetic latitude in iterations */
  var SPHI0; /* sin of start or old geodetic latitude in iterations */
  var CPHI; /* cos of searched geodetic latitude */
  var SPHI; /* sin of searched geodetic latitude */
  var SDPHI; /* end-criterium: addition-theorem of sin(Latitude(iter)-Latitude(iter-1)) */
  var iter; /* # of continous iteration, max. 30 is always enough (s.a.) */

  var X = p.x;
  var Y = p.y;
  var Z = p.z ? p.z : 0.0; //Z value not always supplied
  var Longitude;
  var Latitude;
  var Height;

  P = Math.sqrt(X * X + Y * Y);
  RR = Math.sqrt(X * X + Y * Y + Z * Z);

  /*      special cases for latitude and longitude */
  if (P / a < genau) {

    /*  special case, if P=0. (X=0., Y=0.) */
    Longitude = 0.0;

    /*  if (X,Y,Z)=(0.,0.,0.) then Height becomes semi-minor axis
     *  of ellipsoid (=center of mass), Latitude becomes PI/2 */
    if (RR / a < genau) {
      Latitude = __WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */];
      Height = -b;
      return {
        x: p.x,
        y: p.y,
        z: p.z
      };
    }
  } else {
    /*  ellipsoidal (geodetic) longitude
     *  interval: -PI < Longitude <= +PI */
    Longitude = Math.atan2(Y, X);
  }

  /* --------------------------------------------------------------
   * Following iterative algorithm was developped by
   * "Institut for Erdmessung", University of Hannover, July 1988.
   * Internet: www.ife.uni-hannover.de
   * Iterative computation of CPHI,SPHI and Height.
   * Iteration of CPHI and SPHI to 10**-12 radian resp.
   * 2*10**-7 arcsec.
   * --------------------------------------------------------------
   */
  CT = Z / RR;
  ST = P / RR;
  RX = 1.0 / Math.sqrt(1.0 - es * (2.0 - es) * ST * ST);
  CPHI0 = ST * (1.0 - es) * RX;
  SPHI0 = CT * RX;
  iter = 0;

  /* loop to find sin(Latitude) resp. Latitude
   * until |sin(Latitude(iter)-Latitude(iter-1))| < genau */
  do {
    iter++;
    RN = a / Math.sqrt(1.0 - es * SPHI0 * SPHI0);

    /*  ellipsoidal (geodetic) height */
    Height = P * CPHI0 + Z * SPHI0 - RN * (1.0 - es * SPHI0 * SPHI0);

    RK = es * RN / (RN + Height);
    RX = 1.0 / Math.sqrt(1.0 - RK * (2.0 - RK) * ST * ST);
    CPHI = ST * (1.0 - RK) * RX;
    SPHI = CT * RX;
    SDPHI = SPHI * CPHI0 - CPHI * SPHI0;
    CPHI0 = CPHI;
    SPHI0 = SPHI;
  }
  while (SDPHI * SDPHI > genau2 && iter < maxiter);

  /*      ellipsoidal (geodetic) latitude */
  Latitude = Math.atan(SPHI / Math.abs(CPHI));
  return {
    x: Longitude,
    y: Latitude,
    z: Height
  };
} // cs_geocentric_to_geodetic()

/****************************************************************/
// pj_geocentic_to_wgs84( p )
//  p = point to transform in geocentric coordinates (x,y,z)


/** point object, nothing fancy, just allows values to be
    passed back and forth by reference rather than by value.
    Other point classes may be used as long as they have
    x and y properties, which will get modified in the transform method.
*/
function geocentricToWgs84(p, datum_type, datum_params) {

  if (datum_type === __WEBPACK_IMPORTED_MODULE_0__constants_values__["e" /* PJD_3PARAM */]) {
    // if( x[io] === HUGE_VAL )
    //    continue;
    return {
      x: p.x + datum_params[0],
      y: p.y + datum_params[1],
      z: p.z + datum_params[2],
    };
  } else if (datum_type === __WEBPACK_IMPORTED_MODULE_0__constants_values__["f" /* PJD_7PARAM */]) {
    var Dx_BF = datum_params[0];
    var Dy_BF = datum_params[1];
    var Dz_BF = datum_params[2];
    var Rx_BF = datum_params[3];
    var Ry_BF = datum_params[4];
    var Rz_BF = datum_params[5];
    var M_BF = datum_params[6];
    // if( x[io] === HUGE_VAL )
    //    continue;
    return {
      x: M_BF * (p.x - Rz_BF * p.y + Ry_BF * p.z) + Dx_BF,
      y: M_BF * (Rz_BF * p.x + p.y - Rx_BF * p.z) + Dy_BF,
      z: M_BF * (-Ry_BF * p.x + Rx_BF * p.y + p.z) + Dz_BF
    };
  }
} // cs_geocentric_to_wgs84

/****************************************************************/
// pj_geocentic_from_wgs84()
//  coordinate system definition,
//  point to transform in geocentric coordinates (x,y,z)
function geocentricFromWgs84(p, datum_type, datum_params) {

  if (datum_type === __WEBPACK_IMPORTED_MODULE_0__constants_values__["e" /* PJD_3PARAM */]) {
    //if( x[io] === HUGE_VAL )
    //    continue;
    return {
      x: p.x - datum_params[0],
      y: p.y - datum_params[1],
      z: p.z - datum_params[2],
    };

  } else if (datum_type === __WEBPACK_IMPORTED_MODULE_0__constants_values__["f" /* PJD_7PARAM */]) {
    var Dx_BF = datum_params[0];
    var Dy_BF = datum_params[1];
    var Dz_BF = datum_params[2];
    var Rx_BF = datum_params[3];
    var Ry_BF = datum_params[4];
    var Rz_BF = datum_params[5];
    var M_BF = datum_params[6];
    var x_tmp = (p.x - Dx_BF) / M_BF;
    var y_tmp = (p.y - Dy_BF) / M_BF;
    var z_tmp = (p.z - Dz_BF) / M_BF;
    //if( x[io] === HUGE_VAL )
    //    continue;

    return {
      x: x_tmp + Rz_BF * y_tmp - Ry_BF * z_tmp,
      y: -Rz_BF * x_tmp + y_tmp + Rx_BF * z_tmp,
      z: Ry_BF * x_tmp - Rx_BF * y_tmp + z_tmp
    };
  } //cs_geocentric_from_wgs84()
}


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(crs, denorm, point) {
  var xin = point.x,
    yin = point.y,
    zin = point.z || 0.0;
  var v, t, i;
  var out = {};
  for (i = 0; i < 3; i++) {
    if (denorm && i === 2 && point.z === undefined) {
      continue;
    }
    if (i === 0) {
      v = xin;
      t = 'x';
    }
    else if (i === 1) {
      v = yin;
      t = 'y';
    }
    else {
      v = zin;
      t = 'z';
    }
    switch (crs.axis[i]) {
    case 'e':
      out[t] = v;
      break;
    case 'w':
      out[t] = -v;
      break;
    case 'n':
      out[t] = v;
      break;
    case 's':
      out[t] = -v;
      break;
    case 'u':
      if (point[t] !== undefined) {
        out.z = v;
      }
      break;
    case 'd':
      if (point[t] !== undefined) {
        out.z = -v;
      }
      break;
    default:
      //console.log("ERROR: unknow axis ("+crs.axis[i]+") - check definition of "+crs.projName);
      return null;
    }
  }
  return out;
});


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (point) {
  checkCoord(point.x);
  checkCoord(point.y);
});
function checkCoord(num) {
  if (typeof Number.isFinite === 'function') {
    if (Number.isFinite(num)) {
      return;
    }
    throw new TypeError('coordinates must be finite numbers');
  }
  if (typeof num !== 'number' || num !== num || !isFinite(num)) {
    throw new TypeError('coordinates must be finite numbers');
  }
}


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mgrs__ = __webpack_require__(28);


function Point(x, y, z) {
  if (!(this instanceof Point)) {
    return new Point(x, y, z);
  }
  if (Array.isArray(x)) {
    this.x = x[0];
    this.y = x[1];
    this.z = x[2] || 0.0;
  } else if(typeof x === 'object') {
    this.x = x.x;
    this.y = x.y;
    this.z = x.z || 0.0;
  } else if (typeof x === 'string' && typeof y === 'undefined') {
    var coords = x.split(',');
    this.x = parseFloat(coords[0], 10);
    this.y = parseFloat(coords[1], 10);
    this.z = parseFloat(coords[2], 10) || 0.0;
  } else {
    this.x = x;
    this.y = y;
    this.z = z || 0.0;
  }
  console.warn('proj4.Point will be removed in version 3, use proj4.toPoint');
}

Point.fromMGRS = function(mgrsStr) {
  return new Point(Object(__WEBPACK_IMPORTED_MODULE_0_mgrs__["c" /* toPoint */])(mgrsStr));
};
Point.prototype.toMGRS = function(accuracy) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_mgrs__["b" /* forward */])([this.x, this.y], accuracy);
};
/* harmony default export */ __webpack_exports__["a"] = (Point);


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__package_json__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__package_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__package_json__);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__package_json__, "version")) __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__package_json__["version"]; });



/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = {"_args":[["proj4@2.4.4","D:\\znxdproject\\webgisProj"]],"_from":"proj4@2.4.4","_id":"proj4@2.4.4","_inBundle":false,"_integrity":"sha1-wD2CXjgPaFCkp69dINNl9rcsQEI=","_location":"/proj4","_phantomChildren":{},"_requested":{"type":"version","registry":true,"raw":"proj4@2.4.4","name":"proj4","escapedName":"proj4","rawSpec":"2.4.4","saveSpec":null,"fetchSpec":"2.4.4"},"_requiredBy":["/"],"_resolved":"http://registry.npm.taobao.org/proj4/download/proj4-2.4.4.tgz","_spec":"2.4.4","_where":"D:\\znxdproject\\webgisProj","author":"","bugs":{"url":"https://github.com/proj4js/proj4js/issues"},"contributors":[{"name":"Mike Adair","email":"madair@dmsolutions.ca"},{"name":"Richard Greenwood","email":"rich@greenwoodmap.com"},{"name":"Calvin Metcalf","email":"calvin.metcalf@gmail.com"},{"name":"Richard Marsden","url":"http://www.winwaed.com"},{"name":"T. Mittan"},{"name":"D. Steinwand"},{"name":"S. Nelson"}],"dependencies":{"mgrs":"1.0.0","wkt-parser":"^1.2.0"},"description":"Proj4js is a JavaScript library to transform point coordinates from one coordinate system to another, including datum transformations.","devDependencies":{"chai":"~1.8.1","curl":"git://github.com/cujojs/curl.git","grunt":"^1.0.1","grunt-cli":"~0.1.13","grunt-contrib-connect":"~0.6.0","grunt-contrib-jshint":"~1.1.0","grunt-contrib-uglify":"~0.11.1","grunt-mocha-phantomjs":"~0.4.0","grunt-rollup":"^1.0.1","istanbul":"~0.2.4","mocha":"~1.17.1","rollup":"^0.41.4","rollup-plugin-json":"^2.0.1","rollup-plugin-node-resolve":"^2.0.0","tin":"~0.4.0"},"directories":{"test":"test","doc":"docs"},"homepage":"https://github.com/proj4js/proj4js#readme","license":"MIT","main":"dist/proj4-src.js","module":"lib/index.js","name":"proj4","repository":{"type":"git","url":"git://github.com/proj4js/proj4js.git"},"scripts":{"build":"grunt","build:tmerc":"grunt build:tmerc","test":"npm run build && istanbul test _mocha test/test.js"},"version":"2.4.4"}

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_projections_tmerc__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_projections_etmerc__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_projections_utm__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_projections_sterea__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_projections_stere__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_projections_somerc__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_projections_omerc__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lib_projections_lcc__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lib_projections_krovak__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lib_projections_cass__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__lib_projections_laea__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__lib_projections_aea__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__lib_projections_gnom__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__lib_projections_cea__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__lib_projections_eqc__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__lib_projections_poly__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__lib_projections_nzmg__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__lib_projections_mill__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__lib_projections_sinu__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__lib_projections_moll__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__lib_projections_eqdc__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__lib_projections_vandg__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__lib_projections_aeqd__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__lib_projections_ortho__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__lib_projections_qsc__ = __webpack_require__(92);

























/* harmony default export */ __webpack_exports__["a"] = (function(proj4){
  proj4.Proj.projections.add(__WEBPACK_IMPORTED_MODULE_0__lib_projections_tmerc__["a" /* default */]);
  proj4.Proj.projections.add(__WEBPACK_IMPORTED_MODULE_1__lib_projections_etmerc__["a" /* default */]);
  proj4.Proj.projections.add(__WEBPACK_IMPORTED_MODULE_2__lib_projections_utm__["a" /* default */]);
  proj4.Proj.projections.add(__WEBPACK_IMPORTED_MODULE_3__lib_projections_sterea__["a" /* default */]);
  proj4.Proj.projections.add(__WEBPACK_IMPORTED_MODULE_4__lib_projections_stere__["a" /* default */]);
  proj4.Proj.projections.add(__WEBPACK_IMPORTED_MODULE_5__lib_projections_somerc__["a" /* default */]);
  proj4.Proj.projections.add(__WEBPACK_IMPORTED_MODULE_6__lib_projections_omerc__["a" /* default */]);
  proj4.Proj.projections.add(__WEBPACK_IMPORTED_MODULE_7__lib_projections_lcc__["a" /* default */]);
  proj4.Proj.projections.add(__WEBPACK_IMPORTED_MODULE_8__lib_projections_krovak__["a" /* default */]);
  proj4.Proj.projections.add(__WEBPACK_IMPORTED_MODULE_9__lib_projections_cass__["a" /* default */]);
  proj4.Proj.projections.add(__WEBPACK_IMPORTED_MODULE_10__lib_projections_laea__["a" /* default */]);
  proj4.Proj.projections.add(__WEBPACK_IMPORTED_MODULE_11__lib_projections_aea__["a" /* default */]);
  proj4.Proj.projections.add(__WEBPACK_IMPORTED_MODULE_12__lib_projections_gnom__["a" /* default */]);
  proj4.Proj.projections.add(__WEBPACK_IMPORTED_MODULE_13__lib_projections_cea__["a" /* default */]);
  proj4.Proj.projections.add(__WEBPACK_IMPORTED_MODULE_14__lib_projections_eqc__["a" /* default */]);
  proj4.Proj.projections.add(__WEBPACK_IMPORTED_MODULE_15__lib_projections_poly__["a" /* default */]);
  proj4.Proj.projections.add(__WEBPACK_IMPORTED_MODULE_16__lib_projections_nzmg__["a" /* default */]);
  proj4.Proj.projections.add(__WEBPACK_IMPORTED_MODULE_17__lib_projections_mill__["a" /* default */]);
  proj4.Proj.projections.add(__WEBPACK_IMPORTED_MODULE_18__lib_projections_sinu__["a" /* default */]);
  proj4.Proj.projections.add(__WEBPACK_IMPORTED_MODULE_19__lib_projections_moll__["a" /* default */]);
  proj4.Proj.projections.add(__WEBPACK_IMPORTED_MODULE_20__lib_projections_eqdc__["a" /* default */]);
  proj4.Proj.projections.add(__WEBPACK_IMPORTED_MODULE_21__lib_projections_vandg__["a" /* default */]);
  proj4.Proj.projections.add(__WEBPACK_IMPORTED_MODULE_22__lib_projections_aeqd__["a" /* default */]);
  proj4.Proj.projections.add(__WEBPACK_IMPORTED_MODULE_23__lib_projections_ortho__["a" /* default */]);
  proj4.Proj.projections.add(__WEBPACK_IMPORTED_MODULE_24__lib_projections_qsc__["a" /* default */]);
});

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export init */
/* unused harmony export forward */
/* unused harmony export inverse */
/* unused harmony export names */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_pj_enfn__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_pj_mlfn__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_pj_inv_mlfn__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_adjust_lon__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_values__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_sign__ = __webpack_require__(4);
// Heavily based on this tmerc projection implementation
// https://github.com/mbloch/mapshaper-proj/blob/master/src/projections/tmerc.js









function init() {
  this.x0 = this.x0 !== undefined ? this.x0 : 0;
  this.y0 = this.y0 !== undefined ? this.y0 : 0;
  this.long0 = this.long0 !== undefined ? this.long0 : 0;
  this.lat0 = this.lat0 !== undefined ? this.lat0 : 0;

  if (this.es) {
    this.en = Object(__WEBPACK_IMPORTED_MODULE_0__common_pj_enfn__["a" /* default */])(this.es);
    this.ml0 = Object(__WEBPACK_IMPORTED_MODULE_1__common_pj_mlfn__["a" /* default */])(this.lat0, Math.sin(this.lat0), Math.cos(this.lat0), this.en);
  }
}

/**
    Transverse Mercator Forward  - long/lat to x/y
    long/lat in radians
  */
function forward(p) {
  var lon = p.x;
  var lat = p.y;

  var delta_lon = Object(__WEBPACK_IMPORTED_MODULE_3__common_adjust_lon__["a" /* default */])(lon - this.long0);
  var con;
  var x, y;
  var sin_phi = Math.sin(lat);
  var cos_phi = Math.cos(lat);

  if (!this.es) {
    var b = cos_phi * Math.sin(delta_lon);

    if ((Math.abs(Math.abs(b) - 1)) < __WEBPACK_IMPORTED_MODULE_4__constants_values__["b" /* EPSLN */]) {
      return (93);
    }
    else {
      x = 0.5 * this.a * this.k0 * Math.log((1 + b) / (1 - b)) + this.x0;
      y = cos_phi * Math.cos(delta_lon) / Math.sqrt(1 - Math.pow(b, 2));
      b = Math.abs(y);

      if (b >= 1) {
        if ((b - 1) > __WEBPACK_IMPORTED_MODULE_4__constants_values__["b" /* EPSLN */]) {
          return (93);
        }
        else {
          y = 0;
        }
      }
      else {
        y = Math.acos(y);
      }

      if (lat < 0) {
        y = -y;
      }

      y = this.a * this.k0 * (y - this.lat0) + this.y0;
    }
  }
  else {
    var al = cos_phi * delta_lon;
    var als = Math.pow(al, 2);
    var c = this.ep2 * Math.pow(cos_phi, 2);
    var cs = Math.pow(c, 2);
    var tq = Math.abs(cos_phi) > __WEBPACK_IMPORTED_MODULE_4__constants_values__["b" /* EPSLN */] ? Math.tan(lat) : 0;
    var t = Math.pow(tq, 2);
    var ts = Math.pow(t, 2);
    con = 1 - this.es * Math.pow(sin_phi, 2);
    al = al / Math.sqrt(con);
    var ml = Object(__WEBPACK_IMPORTED_MODULE_1__common_pj_mlfn__["a" /* default */])(lat, sin_phi, cos_phi, this.en);

    x = this.a * (this.k0 * al * (1 +
      als / 6 * (1 - t + c +
      als / 20 * (5 - 18 * t + ts + 14 * c - 58 * t * c +
      als / 42 * (61 + 179 * ts - ts * t - 479 * t))))) +
      this.x0;

    y = this.a * (this.k0 * (ml - this.ml0 +
      sin_phi * delta_lon * al / 2 * (1 +
      als / 12 * (5 - t + 9 * c + 4 * cs +
      als / 30 * (61 + ts - 58 * t + 270 * c - 330 * t * c +
      als / 56 * (1385 + 543 * ts - ts * t - 3111 * t)))))) +
      this.y0;
  }

  p.x = x;
  p.y = y;

  return p;
}

/**
    Transverse Mercator Inverse  -  x/y to long/lat
  */
function inverse(p) {
  var con, phi;
  var lat, lon;
  var x = (p.x - this.x0) * (1 / this.a);
  var y = (p.y - this.y0) * (1 / this.a);

  if (!this.es) {
    var f = Math.exp(x / this.k0);
    var g = 0.5 * (f - 1 / f);
    var temp = this.lat0 + y / this.k0;
    var h = Math.cos(temp);
    con = Math.sqrt((1 - Math.pow(h, 2)) / (1 + Math.pow(g, 2)));
    lat = Math.asin(con);

    if (y < 0) {
      lat = -lat;
    }

    if ((g === 0) && (h === 0)) {
      lon = 0;
    }
    else {
      lon = Object(__WEBPACK_IMPORTED_MODULE_3__common_adjust_lon__["a" /* default */])(Math.atan2(g, h) + this.long0);
    }
  }
  else { // ellipsoidal form
    con = this.ml0 + y / this.k0;
    phi = Object(__WEBPACK_IMPORTED_MODULE_2__common_pj_inv_mlfn__["a" /* default */])(con, this.es, this.en);

    if (Math.abs(phi) < __WEBPACK_IMPORTED_MODULE_4__constants_values__["d" /* HALF_PI */]) {
      var sin_phi = Math.sin(phi);
      var cos_phi = Math.cos(phi);
      var tan_phi = Math.abs(cos_phi) > __WEBPACK_IMPORTED_MODULE_4__constants_values__["b" /* EPSLN */] ? Math.tan(phi) : 0;
      var c = this.ep2 * Math.pow(cos_phi, 2);
      var cs = Math.pow(c, 2);
      var t = Math.pow(tan_phi, 2);
      var ts = Math.pow(t, 2);
      con = 1 - this.es * Math.pow(sin_phi, 2);
      var d = x * Math.sqrt(con) / this.k0;
      var ds = Math.pow(d, 2);
      con = con * tan_phi;

      lat = phi - (con * ds / (1 - this.es)) * 0.5 * (1 -
        ds / 12 * (5 + 3 * t - 9 * c * t + c - 4 * cs -
        ds / 30 * (61 + 90 * t - 252 * c * t + 45 * ts + 46 * c -
        ds / 56 * (1385 + 3633 * t + 4095 * ts + 1574 * ts * t))));

      lon = Object(__WEBPACK_IMPORTED_MODULE_3__common_adjust_lon__["a" /* default */])(this.long0 + (d * (1 -
        ds / 6 * (1 + 2 * t + c -
        ds / 20 * (5 + 28 * t + 24 * ts + 8 * c * t + 6 * c -
        ds / 42 * (61 + 662 * t + 1320 * ts + 720 * ts * t)))) / cos_phi));
    }
    else {
      lat = __WEBPACK_IMPORTED_MODULE_4__constants_values__["d" /* HALF_PI */] * Object(__WEBPACK_IMPORTED_MODULE_5__common_sign__["a" /* default */])(y);
      lon = 0;
    }
  }

  p.x = lon;
  p.y = lat;

  return p;
}

var names = ["Transverse_Mercator", "Transverse Mercator", "tmerc"];
/* harmony default export */ __webpack_exports__["a"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hypot__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__log1py__ = __webpack_require__(61);



/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  var y = Math.abs(x);
  y = Object(__WEBPACK_IMPORTED_MODULE_1__log1py__["a" /* default */])(y * (1 + y / (Object(__WEBPACK_IMPORTED_MODULE_0__hypot__["a" /* default */])(1, y) + 1)));

  return x < 0 ? -y : y;
});


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  var y = 1 + x;
  var z = y - 1;

  return z === 0 ? x : x * Math.log(y) / z;
});


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(pp, B) {
  var cos_2B = 2 * Math.cos(2 * B);
  var i = pp.length - 1;
  var h1 = pp[i];
  var h2 = 0;
  var h;

  while (--i >= 0) {
    h = -h2 + cos_2B * h1 + pp[i];
    h2 = h1;
    h1 = h;
  }

  return (B + h * Math.sin(2 * B));
});


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(pp, arg_r) {
  var r = 2 * Math.cos(arg_r);
  var i = pp.length - 1;
  var hr1 = pp[i];
  var hr2 = 0;
  var hr;

  while (--i >= 0) {
    hr = -hr2 + r * hr1 + pp[i];
    hr2 = hr1;
    hr1 = hr;
  }

  return Math.sin(arg_r) * hr;
});


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sinh__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cosh__ = __webpack_require__(65);



/* harmony default export */ __webpack_exports__["a"] = (function(pp, arg_r, arg_i) {
  var sin_arg_r = Math.sin(arg_r);
  var cos_arg_r = Math.cos(arg_r);
  var sinh_arg_i = Object(__WEBPACK_IMPORTED_MODULE_0__sinh__["a" /* default */])(arg_i);
  var cosh_arg_i = Object(__WEBPACK_IMPORTED_MODULE_1__cosh__["a" /* default */])(arg_i);
  var r = 2 * cos_arg_r * cosh_arg_i;
  var i = -2 * sin_arg_r * sinh_arg_i;
  var j = pp.length - 1;
  var hr = pp[j];
  var hi1 = 0;
  var hr1 = 0;
  var hi = 0;
  var hr2;
  var hi2;

  while (--j >= 0) {
    hr2 = hr1;
    hi2 = hi1;
    hr1 = hr;
    hi1 = hi;
    hr = -hr2 + r * hr1 - i * hi1 + pp[j];
    hi = -hi2 + i * hr1 + r * hi1;
  }

  r = sin_arg_r * cosh_arg_i;
  i = cos_arg_r * sinh_arg_i;

  return [r * hr - i * hi, r * hi + i * hr];
});


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  var r = Math.exp(x);
  r = (r + 1 / r) / 2;
  return r;
});

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export dependsOn */
/* unused harmony export init */
/* unused harmony export names */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_adjust_zone__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__etmerc__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_values__ = __webpack_require__(0);


var dependsOn = 'etmerc';



function init() {
  var zone = Object(__WEBPACK_IMPORTED_MODULE_0__common_adjust_zone__["a" /* default */])(this.zone, this.long0);
  if (zone === undefined) {
    throw new Error('unknown utm zone');
  }
  this.lat0 = 0;
  this.long0 =  ((6 * Math.abs(zone)) - 183) * __WEBPACK_IMPORTED_MODULE_2__constants_values__["a" /* D2R */];
  this.x0 = 500000;
  this.y0 = this.utmSouth ? 10000000 : 0;
  this.k0 = 0.9996;

  __WEBPACK_IMPORTED_MODULE_1__etmerc__["a" /* default */].init.apply(this);
  this.forward = __WEBPACK_IMPORTED_MODULE_1__etmerc__["a" /* default */].forward;
  this.inverse = __WEBPACK_IMPORTED_MODULE_1__etmerc__["a" /* default */].inverse;
}

var names = ["Universal Transverse Mercator System", "utm"];
/* harmony default export */ __webpack_exports__["a"] = ({
  init: init,
  names: names,
  dependsOn: dependsOn
});


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adjust_lon__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = (function(zone, lon) {
  if (zone === undefined) {
    zone = Math.floor((Object(__WEBPACK_IMPORTED_MODULE_0__adjust_lon__["a" /* default */])(lon) + Math.PI) * 30 / Math.PI) + 1;

    if (zone < 0) {
      return 0;
    } else if (zone > 60) {
      return 60;
    }
  }
  return zone;
});


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export init */
/* unused harmony export forward */
/* unused harmony export inverse */
/* unused harmony export names */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gauss__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_adjust_lon__ = __webpack_require__(1);



function init() {
  __WEBPACK_IMPORTED_MODULE_0__gauss__["a" /* default */].init.apply(this);
  if (!this.rc) {
    return;
  }
  this.sinc0 = Math.sin(this.phic0);
  this.cosc0 = Math.cos(this.phic0);
  this.R2 = 2 * this.rc;
  if (!this.title) {
    this.title = "Oblique Stereographic Alternative";
  }
}

function forward(p) {
  var sinc, cosc, cosl, k;
  p.x = Object(__WEBPACK_IMPORTED_MODULE_1__common_adjust_lon__["a" /* default */])(p.x - this.long0);
  __WEBPACK_IMPORTED_MODULE_0__gauss__["a" /* default */].forward.apply(this, [p]);
  sinc = Math.sin(p.y);
  cosc = Math.cos(p.y);
  cosl = Math.cos(p.x);
  k = this.k0 * this.R2 / (1 + this.sinc0 * sinc + this.cosc0 * cosc * cosl);
  p.x = k * cosc * Math.sin(p.x);
  p.y = k * (this.cosc0 * sinc - this.sinc0 * cosc * cosl);
  p.x = this.a * p.x + this.x0;
  p.y = this.a * p.y + this.y0;
  return p;
}

function inverse(p) {
  var sinc, cosc, lon, lat, rho;
  p.x = (p.x - this.x0) / this.a;
  p.y = (p.y - this.y0) / this.a;

  p.x /= this.k0;
  p.y /= this.k0;
  if ((rho = Math.sqrt(p.x * p.x + p.y * p.y))) {
    var c = 2 * Math.atan2(rho, this.R2);
    sinc = Math.sin(c);
    cosc = Math.cos(c);
    lat = Math.asin(cosc * this.sinc0 + p.y * sinc * this.cosc0 / rho);
    lon = Math.atan2(p.x * sinc, rho * this.cosc0 * cosc - p.y * this.sinc0 * sinc);
  }
  else {
    lat = this.phic0;
    lon = 0;
  }

  p.x = lon;
  p.y = lat;
  __WEBPACK_IMPORTED_MODULE_0__gauss__["a" /* default */].inverse.apply(this, [p]);
  p.x = Object(__WEBPACK_IMPORTED_MODULE_1__common_adjust_lon__["a" /* default */])(p.x + this.long0);
  return p;
}

var names = ["Stereographic_North_Pole", "Oblique_Stereographic", "Polar_Stereographic", "sterea","Oblique Stereographic Alternative"];
/* harmony default export */ __webpack_exports__["a"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export init */
/* unused harmony export forward */
/* unused harmony export inverse */
/* unused harmony export names */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_srat__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_values__ = __webpack_require__(0);

var MAX_ITER = 20;


function init() {
  var sphi = Math.sin(this.lat0);
  var cphi = Math.cos(this.lat0);
  cphi *= cphi;
  this.rc = Math.sqrt(1 - this.es) / (1 - this.es * sphi * sphi);
  this.C = Math.sqrt(1 + this.es * cphi * cphi / (1 - this.es));
  this.phic0 = Math.asin(sphi / this.C);
  this.ratexp = 0.5 * this.C * this.e;
  this.K = Math.tan(0.5 * this.phic0 + __WEBPACK_IMPORTED_MODULE_1__constants_values__["c" /* FORTPI */]) / (Math.pow(Math.tan(0.5 * this.lat0 + __WEBPACK_IMPORTED_MODULE_1__constants_values__["c" /* FORTPI */]), this.C) * Object(__WEBPACK_IMPORTED_MODULE_0__common_srat__["a" /* default */])(this.e * sphi, this.ratexp));
}

function forward(p) {
  var lon = p.x;
  var lat = p.y;

  p.y = 2 * Math.atan(this.K * Math.pow(Math.tan(0.5 * lat + __WEBPACK_IMPORTED_MODULE_1__constants_values__["c" /* FORTPI */]), this.C) * Object(__WEBPACK_IMPORTED_MODULE_0__common_srat__["a" /* default */])(this.e * Math.sin(lat), this.ratexp)) - __WEBPACK_IMPORTED_MODULE_1__constants_values__["d" /* HALF_PI */];
  p.x = this.C * lon;
  return p;
}

function inverse(p) {
  var DEL_TOL = 1e-14;
  var lon = p.x / this.C;
  var lat = p.y;
  var num = Math.pow(Math.tan(0.5 * lat + __WEBPACK_IMPORTED_MODULE_1__constants_values__["c" /* FORTPI */]) / this.K, 1 / this.C);
  for (var i = MAX_ITER; i > 0; --i) {
    lat = 2 * Math.atan(num * Object(__WEBPACK_IMPORTED_MODULE_0__common_srat__["a" /* default */])(this.e * Math.sin(p.y), - 0.5 * this.e)) - __WEBPACK_IMPORTED_MODULE_1__constants_values__["d" /* HALF_PI */];
    if (Math.abs(lat - p.y) < DEL_TOL) {
      break;
    }
    p.y = lat;
  }
  /* convergence failed */
  if (!i) {
    return null;
  }
  p.x = lon;
  p.y = lat;
  return p;
}

var names = ["gauss"];
/* harmony default export */ __webpack_exports__["a"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(esinp, exp) {
  return (Math.pow((1 - esinp) / (1 + esinp), exp));
});

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ssfn_ */
/* unused harmony export init */
/* unused harmony export forward */
/* unused harmony export inverse */
/* unused harmony export names */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_values__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_sign__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_msfnz__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_tsfnz__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_phi2z__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_adjust_lon__ = __webpack_require__(1);








function ssfn_(phit, sinphi, eccen) {
  sinphi *= eccen;
  return (Math.tan(0.5 * (__WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */] + phit)) * Math.pow((1 - sinphi) / (1 + sinphi), 0.5 * eccen));
}

function init() {
  this.coslat0 = Math.cos(this.lat0);
  this.sinlat0 = Math.sin(this.lat0);
  if (this.sphere) {
    if (this.k0 === 1 && !isNaN(this.lat_ts) && Math.abs(this.coslat0) <= __WEBPACK_IMPORTED_MODULE_0__constants_values__["b" /* EPSLN */]) {
      this.k0 = 0.5 * (1 + Object(__WEBPACK_IMPORTED_MODULE_1__common_sign__["a" /* default */])(this.lat0) * Math.sin(this.lat_ts));
    }
  }
  else {
    if (Math.abs(this.coslat0) <= __WEBPACK_IMPORTED_MODULE_0__constants_values__["b" /* EPSLN */]) {
      if (this.lat0 > 0) {
        //North pole
        //trace('stere:north pole');
        this.con = 1;
      }
      else {
        //South pole
        //trace('stere:south pole');
        this.con = -1;
      }
    }
    this.cons = Math.sqrt(Math.pow(1 + this.e, 1 + this.e) * Math.pow(1 - this.e, 1 - this.e));
    if (this.k0 === 1 && !isNaN(this.lat_ts) && Math.abs(this.coslat0) <= __WEBPACK_IMPORTED_MODULE_0__constants_values__["b" /* EPSLN */]) {
      this.k0 = 0.5 * this.cons * Object(__WEBPACK_IMPORTED_MODULE_2__common_msfnz__["a" /* default */])(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)) / Object(__WEBPACK_IMPORTED_MODULE_3__common_tsfnz__["a" /* default */])(this.e, this.con * this.lat_ts, this.con * Math.sin(this.lat_ts));
    }
    this.ms1 = Object(__WEBPACK_IMPORTED_MODULE_2__common_msfnz__["a" /* default */])(this.e, this.sinlat0, this.coslat0);
    this.X0 = 2 * Math.atan(this.ssfn_(this.lat0, this.sinlat0, this.e)) - __WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */];
    this.cosX0 = Math.cos(this.X0);
    this.sinX0 = Math.sin(this.X0);
  }
}

// Stereographic forward equations--mapping lat,long to x,y
function forward(p) {
  var lon = p.x;
  var lat = p.y;
  var sinlat = Math.sin(lat);
  var coslat = Math.cos(lat);
  var A, X, sinX, cosX, ts, rh;
  var dlon = Object(__WEBPACK_IMPORTED_MODULE_5__common_adjust_lon__["a" /* default */])(lon - this.long0);

  if (Math.abs(Math.abs(lon - this.long0) - Math.PI) <= __WEBPACK_IMPORTED_MODULE_0__constants_values__["b" /* EPSLN */] && Math.abs(lat + this.lat0) <= __WEBPACK_IMPORTED_MODULE_0__constants_values__["b" /* EPSLN */]) {
    //case of the origine point
    //trace('stere:this is the origin point');
    p.x = NaN;
    p.y = NaN;
    return p;
  }
  if (this.sphere) {
    //trace('stere:sphere case');
    A = 2 * this.k0 / (1 + this.sinlat0 * sinlat + this.coslat0 * coslat * Math.cos(dlon));
    p.x = this.a * A * coslat * Math.sin(dlon) + this.x0;
    p.y = this.a * A * (this.coslat0 * sinlat - this.sinlat0 * coslat * Math.cos(dlon)) + this.y0;
    return p;
  }
  else {
    X = 2 * Math.atan(this.ssfn_(lat, sinlat, this.e)) - __WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */];
    cosX = Math.cos(X);
    sinX = Math.sin(X);
    if (Math.abs(this.coslat0) <= __WEBPACK_IMPORTED_MODULE_0__constants_values__["b" /* EPSLN */]) {
      ts = Object(__WEBPACK_IMPORTED_MODULE_3__common_tsfnz__["a" /* default */])(this.e, lat * this.con, this.con * sinlat);
      rh = 2 * this.a * this.k0 * ts / this.cons;
      p.x = this.x0 + rh * Math.sin(lon - this.long0);
      p.y = this.y0 - this.con * rh * Math.cos(lon - this.long0);
      //trace(p.toString());
      return p;
    }
    else if (Math.abs(this.sinlat0) < __WEBPACK_IMPORTED_MODULE_0__constants_values__["b" /* EPSLN */]) {
      //Eq
      //trace('stere:equateur');
      A = 2 * this.a * this.k0 / (1 + cosX * Math.cos(dlon));
      p.y = A * sinX;
    }
    else {
      //other case
      //trace('stere:normal case');
      A = 2 * this.a * this.k0 * this.ms1 / (this.cosX0 * (1 + this.sinX0 * sinX + this.cosX0 * cosX * Math.cos(dlon)));
      p.y = A * (this.cosX0 * sinX - this.sinX0 * cosX * Math.cos(dlon)) + this.y0;
    }
    p.x = A * cosX * Math.sin(dlon) + this.x0;
  }
  //trace(p.toString());
  return p;
}

//* Stereographic inverse equations--mapping x,y to lat/long
function inverse(p) {
  p.x -= this.x0;
  p.y -= this.y0;
  var lon, lat, ts, ce, Chi;
  var rh = Math.sqrt(p.x * p.x + p.y * p.y);
  if (this.sphere) {
    var c = 2 * Math.atan(rh / (0.5 * this.a * this.k0));
    lon = this.long0;
    lat = this.lat0;
    if (rh <= __WEBPACK_IMPORTED_MODULE_0__constants_values__["b" /* EPSLN */]) {
      p.x = lon;
      p.y = lat;
      return p;
    }
    lat = Math.asin(Math.cos(c) * this.sinlat0 + p.y * Math.sin(c) * this.coslat0 / rh);
    if (Math.abs(this.coslat0) < __WEBPACK_IMPORTED_MODULE_0__constants_values__["b" /* EPSLN */]) {
      if (this.lat0 > 0) {
        lon = Object(__WEBPACK_IMPORTED_MODULE_5__common_adjust_lon__["a" /* default */])(this.long0 + Math.atan2(p.x, - 1 * p.y));
      }
      else {
        lon = Object(__WEBPACK_IMPORTED_MODULE_5__common_adjust_lon__["a" /* default */])(this.long0 + Math.atan2(p.x, p.y));
      }
    }
    else {
      lon = Object(__WEBPACK_IMPORTED_MODULE_5__common_adjust_lon__["a" /* default */])(this.long0 + Math.atan2(p.x * Math.sin(c), rh * this.coslat0 * Math.cos(c) - p.y * this.sinlat0 * Math.sin(c)));
    }
    p.x = lon;
    p.y = lat;
    return p;
  }
  else {
    if (Math.abs(this.coslat0) <= __WEBPACK_IMPORTED_MODULE_0__constants_values__["b" /* EPSLN */]) {
      if (rh <= __WEBPACK_IMPORTED_MODULE_0__constants_values__["b" /* EPSLN */]) {
        lat = this.lat0;
        lon = this.long0;
        p.x = lon;
        p.y = lat;
        //trace(p.toString());
        return p;
      }
      p.x *= this.con;
      p.y *= this.con;
      ts = rh * this.cons / (2 * this.a * this.k0);
      lat = this.con * Object(__WEBPACK_IMPORTED_MODULE_4__common_phi2z__["a" /* default */])(this.e, ts);
      lon = this.con * Object(__WEBPACK_IMPORTED_MODULE_5__common_adjust_lon__["a" /* default */])(this.con * this.long0 + Math.atan2(p.x, - 1 * p.y));
    }
    else {
      ce = 2 * Math.atan(rh * this.cosX0 / (2 * this.a * this.k0 * this.ms1));
      lon = this.long0;
      if (rh <= __WEBPACK_IMPORTED_MODULE_0__constants_values__["b" /* EPSLN */]) {
        Chi = this.X0;
      }
      else {
        Chi = Math.asin(Math.cos(ce) * this.sinX0 + p.y * Math.sin(ce) * this.cosX0 / rh);
        lon = Object(__WEBPACK_IMPORTED_MODULE_5__common_adjust_lon__["a" /* default */])(this.long0 + Math.atan2(p.x * Math.sin(ce), rh * this.cosX0 * Math.cos(ce) - p.y * this.sinX0 * Math.sin(ce)));
      }
      lat = -1 * Object(__WEBPACK_IMPORTED_MODULE_4__common_phi2z__["a" /* default */])(this.e, Math.tan(0.5 * (__WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */] + Chi)));
    }
  }
  p.x = lon;
  p.y = lat;

  //trace(p.toString());
  return p;

}

var names = ["stere", "Stereographic_South_Pole", "Polar Stereographic (variant B)"];
/* harmony default export */ __webpack_exports__["a"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names,
  ssfn_: ssfn_
});


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export init */
/* unused harmony export forward */
/* unused harmony export inverse */
/* unused harmony export names */
/*
  references:
    Formules et constantes pour le Calcul pour la
    projection cylindrique conforme à axe oblique et pour la transformation entre
    des systèmes de référence.
    http://www.swisstopo.admin.ch/internet/swisstopo/fr/home/topics/survey/sys/refsys/switzerland.parsysrelated1.31216.downloadList.77004.DownloadFile.tmp/swissprojectionfr.pdf
  */

function init() {
  var phy0 = this.lat0;
  this.lambda0 = this.long0;
  var sinPhy0 = Math.sin(phy0);
  var semiMajorAxis = this.a;
  var invF = this.rf;
  var flattening = 1 / invF;
  var e2 = 2 * flattening - Math.pow(flattening, 2);
  var e = this.e = Math.sqrt(e2);
  this.R = this.k0 * semiMajorAxis * Math.sqrt(1 - e2) / (1 - e2 * Math.pow(sinPhy0, 2));
  this.alpha = Math.sqrt(1 + e2 / (1 - e2) * Math.pow(Math.cos(phy0), 4));
  this.b0 = Math.asin(sinPhy0 / this.alpha);
  var k1 = Math.log(Math.tan(Math.PI / 4 + this.b0 / 2));
  var k2 = Math.log(Math.tan(Math.PI / 4 + phy0 / 2));
  var k3 = Math.log((1 + e * sinPhy0) / (1 - e * sinPhy0));
  this.K = k1 - this.alpha * k2 + this.alpha * e / 2 * k3;
}

function forward(p) {
  var Sa1 = Math.log(Math.tan(Math.PI / 4 - p.y / 2));
  var Sa2 = this.e / 2 * Math.log((1 + this.e * Math.sin(p.y)) / (1 - this.e * Math.sin(p.y)));
  var S = -this.alpha * (Sa1 + Sa2) + this.K;

  // spheric latitude
  var b = 2 * (Math.atan(Math.exp(S)) - Math.PI / 4);

  // spheric longitude
  var I = this.alpha * (p.x - this.lambda0);

  // psoeudo equatorial rotation
  var rotI = Math.atan(Math.sin(I) / (Math.sin(this.b0) * Math.tan(b) + Math.cos(this.b0) * Math.cos(I)));

  var rotB = Math.asin(Math.cos(this.b0) * Math.sin(b) - Math.sin(this.b0) * Math.cos(b) * Math.cos(I));

  p.y = this.R / 2 * Math.log((1 + Math.sin(rotB)) / (1 - Math.sin(rotB))) + this.y0;
  p.x = this.R * rotI + this.x0;
  return p;
}

function inverse(p) {
  var Y = p.x - this.x0;
  var X = p.y - this.y0;

  var rotI = Y / this.R;
  var rotB = 2 * (Math.atan(Math.exp(X / this.R)) - Math.PI / 4);

  var b = Math.asin(Math.cos(this.b0) * Math.sin(rotB) + Math.sin(this.b0) * Math.cos(rotB) * Math.cos(rotI));
  var I = Math.atan(Math.sin(rotI) / (Math.cos(this.b0) * Math.cos(rotI) - Math.sin(this.b0) * Math.tan(rotB)));

  var lambda = this.lambda0 + I / this.alpha;

  var S = 0;
  var phy = b;
  var prevPhy = -1000;
  var iteration = 0;
  while (Math.abs(phy - prevPhy) > 0.0000001) {
    if (++iteration > 20) {
      //...reportError("omercFwdInfinity");
      return;
    }
    //S = Math.log(Math.tan(Math.PI / 4 + phy / 2));
    S = 1 / this.alpha * (Math.log(Math.tan(Math.PI / 4 + b / 2)) - this.K) + this.e * Math.log(Math.tan(Math.PI / 4 + Math.asin(this.e * Math.sin(phy)) / 2));
    prevPhy = phy;
    phy = 2 * Math.atan(Math.exp(S)) - Math.PI / 2;
  }

  p.x = lambda;
  p.y = phy;
  return p;
}

var names = ["somerc"];
/* harmony default export */ __webpack_exports__["a"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export init */
/* unused harmony export forward */
/* unused harmony export inverse */
/* unused harmony export names */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_tsfnz__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_adjust_lon__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_phi2z__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_values__ = __webpack_require__(0);





/* Initialize the Oblique Mercator  projection
    ------------------------------------------*/
function init() {
  this.no_off = this.no_off || false;
  this.no_rot = this.no_rot || false;

  if (isNaN(this.k0)) {
    this.k0 = 1;
  }
  var sinlat = Math.sin(this.lat0);
  var coslat = Math.cos(this.lat0);
  var con = this.e * sinlat;

  this.bl = Math.sqrt(1 + this.es / (1 - this.es) * Math.pow(coslat, 4));
  this.al = this.a * this.bl * this.k0 * Math.sqrt(1 - this.es) / (1 - con * con);
  var t0 = Object(__WEBPACK_IMPORTED_MODULE_0__common_tsfnz__["a" /* default */])(this.e, this.lat0, sinlat);
  var dl = this.bl / coslat * Math.sqrt((1 - this.es) / (1 - con * con));
  if (dl * dl < 1) {
    dl = 1;
  }
  var fl;
  var gl;
  if (!isNaN(this.longc)) {
    //Central point and azimuth method

    if (this.lat0 >= 0) {
      fl = dl + Math.sqrt(dl * dl - 1);
    }
    else {
      fl = dl - Math.sqrt(dl * dl - 1);
    }
    this.el = fl * Math.pow(t0, this.bl);
    gl = 0.5 * (fl - 1 / fl);
    this.gamma0 = Math.asin(Math.sin(this.alpha) / dl);
    this.long0 = this.longc - Math.asin(gl * Math.tan(this.gamma0)) / this.bl;

  }
  else {
    //2 points method
    var t1 = Object(__WEBPACK_IMPORTED_MODULE_0__common_tsfnz__["a" /* default */])(this.e, this.lat1, Math.sin(this.lat1));
    var t2 = Object(__WEBPACK_IMPORTED_MODULE_0__common_tsfnz__["a" /* default */])(this.e, this.lat2, Math.sin(this.lat2));
    if (this.lat0 >= 0) {
      this.el = (dl + Math.sqrt(dl * dl - 1)) * Math.pow(t0, this.bl);
    }
    else {
      this.el = (dl - Math.sqrt(dl * dl - 1)) * Math.pow(t0, this.bl);
    }
    var hl = Math.pow(t1, this.bl);
    var ll = Math.pow(t2, this.bl);
    fl = this.el / hl;
    gl = 0.5 * (fl - 1 / fl);
    var jl = (this.el * this.el - ll * hl) / (this.el * this.el + ll * hl);
    var pl = (ll - hl) / (ll + hl);
    var dlon12 = Object(__WEBPACK_IMPORTED_MODULE_1__common_adjust_lon__["a" /* default */])(this.long1 - this.long2);
    this.long0 = 0.5 * (this.long1 + this.long2) - Math.atan(jl * Math.tan(0.5 * this.bl * (dlon12)) / pl) / this.bl;
    this.long0 = Object(__WEBPACK_IMPORTED_MODULE_1__common_adjust_lon__["a" /* default */])(this.long0);
    var dlon10 = Object(__WEBPACK_IMPORTED_MODULE_1__common_adjust_lon__["a" /* default */])(this.long1 - this.long0);
    this.gamma0 = Math.atan(Math.sin(this.bl * (dlon10)) / gl);
    this.alpha = Math.asin(dl * Math.sin(this.gamma0));
  }

  if (this.no_off) {
    this.uc = 0;
  }
  else {
    if (this.lat0 >= 0) {
      this.uc = this.al / this.bl * Math.atan2(Math.sqrt(dl * dl - 1), Math.cos(this.alpha));
    }
    else {
      this.uc = -1 * this.al / this.bl * Math.atan2(Math.sqrt(dl * dl - 1), Math.cos(this.alpha));
    }
  }

}

/* Oblique Mercator forward equations--mapping lat,long to x,y
    ----------------------------------------------------------*/
function forward(p) {
  var lon = p.x;
  var lat = p.y;
  var dlon = Object(__WEBPACK_IMPORTED_MODULE_1__common_adjust_lon__["a" /* default */])(lon - this.long0);
  var us, vs;
  var con;
  if (Math.abs(Math.abs(lat) - __WEBPACK_IMPORTED_MODULE_3__constants_values__["d" /* HALF_PI */]) <= __WEBPACK_IMPORTED_MODULE_3__constants_values__["b" /* EPSLN */]) {
    if (lat > 0) {
      con = -1;
    }
    else {
      con = 1;
    }
    vs = this.al / this.bl * Math.log(Math.tan(__WEBPACK_IMPORTED_MODULE_3__constants_values__["c" /* FORTPI */] + con * this.gamma0 * 0.5));
    us = -1 * con * __WEBPACK_IMPORTED_MODULE_3__constants_values__["d" /* HALF_PI */] * this.al / this.bl;
  }
  else {
    var t = Object(__WEBPACK_IMPORTED_MODULE_0__common_tsfnz__["a" /* default */])(this.e, lat, Math.sin(lat));
    var ql = this.el / Math.pow(t, this.bl);
    var sl = 0.5 * (ql - 1 / ql);
    var tl = 0.5 * (ql + 1 / ql);
    var vl = Math.sin(this.bl * (dlon));
    var ul = (sl * Math.sin(this.gamma0) - vl * Math.cos(this.gamma0)) / tl;
    if (Math.abs(Math.abs(ul) - 1) <= __WEBPACK_IMPORTED_MODULE_3__constants_values__["b" /* EPSLN */]) {
      vs = Number.POSITIVE_INFINITY;
    }
    else {
      vs = 0.5 * this.al * Math.log((1 - ul) / (1 + ul)) / this.bl;
    }
    if (Math.abs(Math.cos(this.bl * (dlon))) <= __WEBPACK_IMPORTED_MODULE_3__constants_values__["b" /* EPSLN */]) {
      us = this.al * this.bl * (dlon);
    }
    else {
      us = this.al * Math.atan2(sl * Math.cos(this.gamma0) + vl * Math.sin(this.gamma0), Math.cos(this.bl * dlon)) / this.bl;
    }
  }

  if (this.no_rot) {
    p.x = this.x0 + us;
    p.y = this.y0 + vs;
  }
  else {

    us -= this.uc;
    p.x = this.x0 + vs * Math.cos(this.alpha) + us * Math.sin(this.alpha);
    p.y = this.y0 + us * Math.cos(this.alpha) - vs * Math.sin(this.alpha);
  }
  return p;
}

function inverse(p) {
  var us, vs;
  if (this.no_rot) {
    vs = p.y - this.y0;
    us = p.x - this.x0;
  }
  else {
    vs = (p.x - this.x0) * Math.cos(this.alpha) - (p.y - this.y0) * Math.sin(this.alpha);
    us = (p.y - this.y0) * Math.cos(this.alpha) + (p.x - this.x0) * Math.sin(this.alpha);
    us += this.uc;
  }
  var qp = Math.exp(-1 * this.bl * vs / this.al);
  var sp = 0.5 * (qp - 1 / qp);
  var tp = 0.5 * (qp + 1 / qp);
  var vp = Math.sin(this.bl * us / this.al);
  var up = (vp * Math.cos(this.gamma0) + sp * Math.sin(this.gamma0)) / tp;
  var ts = Math.pow(this.el / Math.sqrt((1 + up) / (1 - up)), 1 / this.bl);
  if (Math.abs(up - 1) < __WEBPACK_IMPORTED_MODULE_3__constants_values__["b" /* EPSLN */]) {
    p.x = this.long0;
    p.y = __WEBPACK_IMPORTED_MODULE_3__constants_values__["d" /* HALF_PI */];
  }
  else if (Math.abs(up + 1) < __WEBPACK_IMPORTED_MODULE_3__constants_values__["b" /* EPSLN */]) {
    p.x = this.long0;
    p.y = -1 * __WEBPACK_IMPORTED_MODULE_3__constants_values__["d" /* HALF_PI */];
  }
  else {
    p.y = Object(__WEBPACK_IMPORTED_MODULE_2__common_phi2z__["a" /* default */])(this.e, ts);
    p.x = Object(__WEBPACK_IMPORTED_MODULE_1__common_adjust_lon__["a" /* default */])(this.long0 - Math.atan2(sp * Math.cos(this.gamma0) - vp * Math.sin(this.gamma0), Math.cos(this.bl * us / this.al)) / this.bl);
  }
  return p;
}

var names = ["Hotine_Oblique_Mercator", "Hotine Oblique Mercator", "Hotine_Oblique_Mercator_Azimuth_Natural_Origin", "Hotine_Oblique_Mercator_Azimuth_Center", "omerc"];
/* harmony default export */ __webpack_exports__["a"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export init */
/* unused harmony export forward */
/* unused harmony export inverse */
/* unused harmony export names */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_msfnz__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_tsfnz__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_sign__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_adjust_lon__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_phi2z__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_values__ = __webpack_require__(0);






function init() {

  // array of:  r_maj,r_min,lat1,lat2,c_lon,c_lat,false_east,false_north
  //double c_lat;                   /* center latitude                      */
  //double c_lon;                   /* center longitude                     */
  //double lat1;                    /* first standard parallel              */
  //double lat2;                    /* second standard parallel             */
  //double r_maj;                   /* major axis                           */
  //double r_min;                   /* minor axis                           */
  //double false_east;              /* x offset in meters                   */
  //double false_north;             /* y offset in meters                   */

  if (!this.lat2) {
    this.lat2 = this.lat1;
  } //if lat2 is not defined
  if (!this.k0) {
    this.k0 = 1;
  }
  this.x0 = this.x0 || 0;
  this.y0 = this.y0 || 0;
  // Standard Parallels cannot be equal and on opposite sides of the equator
  if (Math.abs(this.lat1 + this.lat2) < __WEBPACK_IMPORTED_MODULE_5__constants_values__["b" /* EPSLN */]) {
    return;
  }

  var temp = this.b / this.a;
  this.e = Math.sqrt(1 - temp * temp);

  var sin1 = Math.sin(this.lat1);
  var cos1 = Math.cos(this.lat1);
  var ms1 = Object(__WEBPACK_IMPORTED_MODULE_0__common_msfnz__["a" /* default */])(this.e, sin1, cos1);
  var ts1 = Object(__WEBPACK_IMPORTED_MODULE_1__common_tsfnz__["a" /* default */])(this.e, this.lat1, sin1);

  var sin2 = Math.sin(this.lat2);
  var cos2 = Math.cos(this.lat2);
  var ms2 = Object(__WEBPACK_IMPORTED_MODULE_0__common_msfnz__["a" /* default */])(this.e, sin2, cos2);
  var ts2 = Object(__WEBPACK_IMPORTED_MODULE_1__common_tsfnz__["a" /* default */])(this.e, this.lat2, sin2);

  var ts0 = Object(__WEBPACK_IMPORTED_MODULE_1__common_tsfnz__["a" /* default */])(this.e, this.lat0, Math.sin(this.lat0));

  if (Math.abs(this.lat1 - this.lat2) > __WEBPACK_IMPORTED_MODULE_5__constants_values__["b" /* EPSLN */]) {
    this.ns = Math.log(ms1 / ms2) / Math.log(ts1 / ts2);
  }
  else {
    this.ns = sin1;
  }
  if (isNaN(this.ns)) {
    this.ns = sin1;
  }
  this.f0 = ms1 / (this.ns * Math.pow(ts1, this.ns));
  this.rh = this.a * this.f0 * Math.pow(ts0, this.ns);
  if (!this.title) {
    this.title = "Lambert Conformal Conic";
  }
}

// Lambert Conformal conic forward equations--mapping lat,long to x,y
// -----------------------------------------------------------------
function forward(p) {

  var lon = p.x;
  var lat = p.y;

  // singular cases :
  if (Math.abs(2 * Math.abs(lat) - Math.PI) <= __WEBPACK_IMPORTED_MODULE_5__constants_values__["b" /* EPSLN */]) {
    lat = Object(__WEBPACK_IMPORTED_MODULE_2__common_sign__["a" /* default */])(lat) * (__WEBPACK_IMPORTED_MODULE_5__constants_values__["d" /* HALF_PI */] - 2 * __WEBPACK_IMPORTED_MODULE_5__constants_values__["b" /* EPSLN */]);
  }

  var con = Math.abs(Math.abs(lat) - __WEBPACK_IMPORTED_MODULE_5__constants_values__["d" /* HALF_PI */]);
  var ts, rh1;
  if (con > __WEBPACK_IMPORTED_MODULE_5__constants_values__["b" /* EPSLN */]) {
    ts = Object(__WEBPACK_IMPORTED_MODULE_1__common_tsfnz__["a" /* default */])(this.e, lat, Math.sin(lat));
    rh1 = this.a * this.f0 * Math.pow(ts, this.ns);
  }
  else {
    con = lat * this.ns;
    if (con <= 0) {
      return null;
    }
    rh1 = 0;
  }
  var theta = this.ns * Object(__WEBPACK_IMPORTED_MODULE_3__common_adjust_lon__["a" /* default */])(lon - this.long0);
  p.x = this.k0 * (rh1 * Math.sin(theta)) + this.x0;
  p.y = this.k0 * (this.rh - rh1 * Math.cos(theta)) + this.y0;

  return p;
}

// Lambert Conformal Conic inverse equations--mapping x,y to lat/long
// -----------------------------------------------------------------
function inverse(p) {

  var rh1, con, ts;
  var lat, lon;
  var x = (p.x - this.x0) / this.k0;
  var y = (this.rh - (p.y - this.y0) / this.k0);
  if (this.ns > 0) {
    rh1 = Math.sqrt(x * x + y * y);
    con = 1;
  }
  else {
    rh1 = -Math.sqrt(x * x + y * y);
    con = -1;
  }
  var theta = 0;
  if (rh1 !== 0) {
    theta = Math.atan2((con * x), (con * y));
  }
  if ((rh1 !== 0) || (this.ns > 0)) {
    con = 1 / this.ns;
    ts = Math.pow((rh1 / (this.a * this.f0)), con);
    lat = Object(__WEBPACK_IMPORTED_MODULE_4__common_phi2z__["a" /* default */])(this.e, ts);
    if (lat === -9999) {
      return null;
    }
  }
  else {
    lat = -__WEBPACK_IMPORTED_MODULE_5__constants_values__["d" /* HALF_PI */];
  }
  lon = Object(__WEBPACK_IMPORTED_MODULE_3__common_adjust_lon__["a" /* default */])(theta / this.ns + this.long0);

  p.x = lon;
  p.y = lat;
  return p;
}

var names = ["Lambert Tangential Conformal Conic Projection", "Lambert_Conformal_Conic", "Lambert_Conformal_Conic_2SP", "lcc"];
/* harmony default export */ __webpack_exports__["a"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export init */
/* unused harmony export forward */
/* unused harmony export inverse */
/* unused harmony export names */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_adjust_lon__ = __webpack_require__(1);


function init() {
  this.a = 6377397.155;
  this.es = 0.006674372230614;
  this.e = Math.sqrt(this.es);
  if (!this.lat0) {
    this.lat0 = 0.863937979737193;
  }
  if (!this.long0) {
    this.long0 = 0.7417649320975901 - 0.308341501185665;
  }
  /* if scale not set default to 0.9999 */
  if (!this.k0) {
    this.k0 = 0.9999;
  }
  this.s45 = 0.785398163397448; /* 45 */
  this.s90 = 2 * this.s45;
  this.fi0 = this.lat0;
  this.e2 = this.es;
  this.e = Math.sqrt(this.e2);
  this.alfa = Math.sqrt(1 + (this.e2 * Math.pow(Math.cos(this.fi0), 4)) / (1 - this.e2));
  this.uq = 1.04216856380474;
  this.u0 = Math.asin(Math.sin(this.fi0) / this.alfa);
  this.g = Math.pow((1 + this.e * Math.sin(this.fi0)) / (1 - this.e * Math.sin(this.fi0)), this.alfa * this.e / 2);
  this.k = Math.tan(this.u0 / 2 + this.s45) / Math.pow(Math.tan(this.fi0 / 2 + this.s45), this.alfa) * this.g;
  this.k1 = this.k0;
  this.n0 = this.a * Math.sqrt(1 - this.e2) / (1 - this.e2 * Math.pow(Math.sin(this.fi0), 2));
  this.s0 = 1.37008346281555;
  this.n = Math.sin(this.s0);
  this.ro0 = this.k1 * this.n0 / Math.tan(this.s0);
  this.ad = this.s90 - this.uq;
}

/* ellipsoid */
/* calculate xy from lat/lon */
/* Constants, identical to inverse transform function */
function forward(p) {
  var gfi, u, deltav, s, d, eps, ro;
  var lon = p.x;
  var lat = p.y;
  var delta_lon = Object(__WEBPACK_IMPORTED_MODULE_0__common_adjust_lon__["a" /* default */])(lon - this.long0);
  /* Transformation */
  gfi = Math.pow(((1 + this.e * Math.sin(lat)) / (1 - this.e * Math.sin(lat))), (this.alfa * this.e / 2));
  u = 2 * (Math.atan(this.k * Math.pow(Math.tan(lat / 2 + this.s45), this.alfa) / gfi) - this.s45);
  deltav = -delta_lon * this.alfa;
  s = Math.asin(Math.cos(this.ad) * Math.sin(u) + Math.sin(this.ad) * Math.cos(u) * Math.cos(deltav));
  d = Math.asin(Math.cos(u) * Math.sin(deltav) / Math.cos(s));
  eps = this.n * d;
  ro = this.ro0 * Math.pow(Math.tan(this.s0 / 2 + this.s45), this.n) / Math.pow(Math.tan(s / 2 + this.s45), this.n);
  p.y = ro * Math.cos(eps) / 1;
  p.x = ro * Math.sin(eps) / 1;

  if (!this.czech) {
    p.y *= -1;
    p.x *= -1;
  }
  return (p);
}

/* calculate lat/lon from xy */
function inverse(p) {
  var u, deltav, s, d, eps, ro, fi1;
  var ok;

  /* Transformation */
  /* revert y, x*/
  var tmp = p.x;
  p.x = p.y;
  p.y = tmp;
  if (!this.czech) {
    p.y *= -1;
    p.x *= -1;
  }
  ro = Math.sqrt(p.x * p.x + p.y * p.y);
  eps = Math.atan2(p.y, p.x);
  d = eps / Math.sin(this.s0);
  s = 2 * (Math.atan(Math.pow(this.ro0 / ro, 1 / this.n) * Math.tan(this.s0 / 2 + this.s45)) - this.s45);
  u = Math.asin(Math.cos(this.ad) * Math.sin(s) - Math.sin(this.ad) * Math.cos(s) * Math.cos(d));
  deltav = Math.asin(Math.cos(s) * Math.sin(d) / Math.cos(u));
  p.x = this.long0 - deltav / this.alfa;
  fi1 = u;
  ok = 0;
  var iter = 0;
  do {
    p.y = 2 * (Math.atan(Math.pow(this.k, - 1 / this.alfa) * Math.pow(Math.tan(u / 2 + this.s45), 1 / this.alfa) * Math.pow((1 + this.e * Math.sin(fi1)) / (1 - this.e * Math.sin(fi1)), this.e / 2)) - this.s45);
    if (Math.abs(fi1 - p.y) < 0.0000000001) {
      ok = 1;
    }
    fi1 = p.y;
    iter += 1;
  } while (ok === 0 && iter < 15);
  if (iter >= 15) {
    return null;
  }

  return (p);
}

var names = ["Krovak", "krovak"];
/* harmony default export */ __webpack_exports__["a"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export init */
/* unused harmony export forward */
/* unused harmony export inverse */
/* unused harmony export names */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_mlfn__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_e0fn__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_e1fn__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_e2fn__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_e3fn__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_gN__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_adjust_lon__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_adjust_lat__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_imlfn__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__constants_values__ = __webpack_require__(0);











function init() {
  if (!this.sphere) {
    this.e0 = Object(__WEBPACK_IMPORTED_MODULE_1__common_e0fn__["a" /* default */])(this.es);
    this.e1 = Object(__WEBPACK_IMPORTED_MODULE_2__common_e1fn__["a" /* default */])(this.es);
    this.e2 = Object(__WEBPACK_IMPORTED_MODULE_3__common_e2fn__["a" /* default */])(this.es);
    this.e3 = Object(__WEBPACK_IMPORTED_MODULE_4__common_e3fn__["a" /* default */])(this.es);
    this.ml0 = this.a * Object(__WEBPACK_IMPORTED_MODULE_0__common_mlfn__["a" /* default */])(this.e0, this.e1, this.e2, this.e3, this.lat0);
  }
}

/* Cassini forward equations--mapping lat,long to x,y
  -----------------------------------------------------------------------*/
function forward(p) {

  /* Forward equations
      -----------------*/
  var x, y;
  var lam = p.x;
  var phi = p.y;
  lam = Object(__WEBPACK_IMPORTED_MODULE_6__common_adjust_lon__["a" /* default */])(lam - this.long0);

  if (this.sphere) {
    x = this.a * Math.asin(Math.cos(phi) * Math.sin(lam));
    y = this.a * (Math.atan2(Math.tan(phi), Math.cos(lam)) - this.lat0);
  }
  else {
    //ellipsoid
    var sinphi = Math.sin(phi);
    var cosphi = Math.cos(phi);
    var nl = Object(__WEBPACK_IMPORTED_MODULE_5__common_gN__["a" /* default */])(this.a, this.e, sinphi);
    var tl = Math.tan(phi) * Math.tan(phi);
    var al = lam * Math.cos(phi);
    var asq = al * al;
    var cl = this.es * cosphi * cosphi / (1 - this.es);
    var ml = this.a * Object(__WEBPACK_IMPORTED_MODULE_0__common_mlfn__["a" /* default */])(this.e0, this.e1, this.e2, this.e3, phi);

    x = nl * al * (1 - asq * tl * (1 / 6 - (8 - tl + 8 * cl) * asq / 120));
    y = ml - this.ml0 + nl * sinphi / cosphi * asq * (0.5 + (5 - tl + 6 * cl) * asq / 24);


  }

  p.x = x + this.x0;
  p.y = y + this.y0;
  return p;
}

/* Inverse equations
  -----------------*/
function inverse(p) {
  p.x -= this.x0;
  p.y -= this.y0;
  var x = p.x / this.a;
  var y = p.y / this.a;
  var phi, lam;

  if (this.sphere) {
    var dd = y + this.lat0;
    phi = Math.asin(Math.sin(dd) * Math.cos(x));
    lam = Math.atan2(Math.tan(x), Math.cos(dd));
  }
  else {
    /* ellipsoid */
    var ml1 = this.ml0 / this.a + y;
    var phi1 = Object(__WEBPACK_IMPORTED_MODULE_8__common_imlfn__["a" /* default */])(ml1, this.e0, this.e1, this.e2, this.e3);
    if (Math.abs(Math.abs(phi1) - __WEBPACK_IMPORTED_MODULE_9__constants_values__["d" /* HALF_PI */]) <= __WEBPACK_IMPORTED_MODULE_9__constants_values__["b" /* EPSLN */]) {
      p.x = this.long0;
      p.y = __WEBPACK_IMPORTED_MODULE_9__constants_values__["d" /* HALF_PI */];
      if (y < 0) {
        p.y *= -1;
      }
      return p;
    }
    var nl1 = Object(__WEBPACK_IMPORTED_MODULE_5__common_gN__["a" /* default */])(this.a, this.e, Math.sin(phi1));

    var rl1 = nl1 * nl1 * nl1 / this.a / this.a * (1 - this.es);
    var tl1 = Math.pow(Math.tan(phi1), 2);
    var dl = x * this.a / nl1;
    var dsq = dl * dl;
    phi = phi1 - nl1 * Math.tan(phi1) / rl1 * dl * dl * (0.5 - (1 + 3 * tl1) * dl * dl / 24);
    lam = dl * (1 - dsq * (tl1 / 3 + (1 + 3 * tl1) * tl1 * dsq / 15)) / Math.cos(phi1);

  }

  p.x = Object(__WEBPACK_IMPORTED_MODULE_6__common_adjust_lon__["a" /* default */])(lam + this.long0);
  p.y = Object(__WEBPACK_IMPORTED_MODULE_7__common_adjust_lat__["a" /* default */])(phi);
  return p;

}

var names = ["Cassini", "Cassini_Soldner", "cass"];
/* harmony default export */ __webpack_exports__["a"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export S_POLE */
/* unused harmony export N_POLE */
/* unused harmony export EQUIT */
/* unused harmony export OBLIQ */
/* unused harmony export init */
/* unused harmony export forward */
/* unused harmony export inverse */
/* unused harmony export names */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_values__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_qsfnz__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_adjust_lon__ = __webpack_require__(1);






/*
  reference
    "New Equal-Area Map Projections for Noncircular Regions", John P. Snyder,
    The American Cartographer, Vol 15, No. 4, October 1988, pp. 341-355.
  */

var S_POLE = 1;

var N_POLE = 2;
var EQUIT = 3;
var OBLIQ = 4;

/* Initialize the Lambert Azimuthal Equal Area projection
  ------------------------------------------------------*/
function init() {
  var t = Math.abs(this.lat0);
  if (Math.abs(t - __WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */]) < __WEBPACK_IMPORTED_MODULE_0__constants_values__["b" /* EPSLN */]) {
    this.mode = this.lat0 < 0 ? this.S_POLE : this.N_POLE;
  }
  else if (Math.abs(t) < __WEBPACK_IMPORTED_MODULE_0__constants_values__["b" /* EPSLN */]) {
    this.mode = this.EQUIT;
  }
  else {
    this.mode = this.OBLIQ;
  }
  if (this.es > 0) {
    var sinphi;

    this.qp = Object(__WEBPACK_IMPORTED_MODULE_1__common_qsfnz__["a" /* default */])(this.e, 1);
    this.mmf = 0.5 / (1 - this.es);
    this.apa = authset(this.es);
    switch (this.mode) {
    case this.N_POLE:
      this.dd = 1;
      break;
    case this.S_POLE:
      this.dd = 1;
      break;
    case this.EQUIT:
      this.rq = Math.sqrt(0.5 * this.qp);
      this.dd = 1 / this.rq;
      this.xmf = 1;
      this.ymf = 0.5 * this.qp;
      break;
    case this.OBLIQ:
      this.rq = Math.sqrt(0.5 * this.qp);
      sinphi = Math.sin(this.lat0);
      this.sinb1 = Object(__WEBPACK_IMPORTED_MODULE_1__common_qsfnz__["a" /* default */])(this.e, sinphi) / this.qp;
      this.cosb1 = Math.sqrt(1 - this.sinb1 * this.sinb1);
      this.dd = Math.cos(this.lat0) / (Math.sqrt(1 - this.es * sinphi * sinphi) * this.rq * this.cosb1);
      this.ymf = (this.xmf = this.rq) / this.dd;
      this.xmf *= this.dd;
      break;
    }
  }
  else {
    if (this.mode === this.OBLIQ) {
      this.sinph0 = Math.sin(this.lat0);
      this.cosph0 = Math.cos(this.lat0);
    }
  }
}

/* Lambert Azimuthal Equal Area forward equations--mapping lat,long to x,y
  -----------------------------------------------------------------------*/
function forward(p) {

  /* Forward equations
      -----------------*/
  var x, y, coslam, sinlam, sinphi, q, sinb, cosb, b, cosphi;
  var lam = p.x;
  var phi = p.y;

  lam = Object(__WEBPACK_IMPORTED_MODULE_2__common_adjust_lon__["a" /* default */])(lam - this.long0);
  if (this.sphere) {
    sinphi = Math.sin(phi);
    cosphi = Math.cos(phi);
    coslam = Math.cos(lam);
    if (this.mode === this.OBLIQ || this.mode === this.EQUIT) {
      y = (this.mode === this.EQUIT) ? 1 + cosphi * coslam : 1 + this.sinph0 * sinphi + this.cosph0 * cosphi * coslam;
      if (y <= __WEBPACK_IMPORTED_MODULE_0__constants_values__["b" /* EPSLN */]) {
        return null;
      }
      y = Math.sqrt(2 / y);
      x = y * cosphi * Math.sin(lam);
      y *= (this.mode === this.EQUIT) ? sinphi : this.cosph0 * sinphi - this.sinph0 * cosphi * coslam;
    }
    else if (this.mode === this.N_POLE || this.mode === this.S_POLE) {
      if (this.mode === this.N_POLE) {
        coslam = -coslam;
      }
      if (Math.abs(phi + this.phi0) < __WEBPACK_IMPORTED_MODULE_0__constants_values__["b" /* EPSLN */]) {
        return null;
      }
      y = __WEBPACK_IMPORTED_MODULE_0__constants_values__["c" /* FORTPI */] - phi * 0.5;
      y = 2 * ((this.mode === this.S_POLE) ? Math.cos(y) : Math.sin(y));
      x = y * Math.sin(lam);
      y *= coslam;
    }
  }
  else {
    sinb = 0;
    cosb = 0;
    b = 0;
    coslam = Math.cos(lam);
    sinlam = Math.sin(lam);
    sinphi = Math.sin(phi);
    q = Object(__WEBPACK_IMPORTED_MODULE_1__common_qsfnz__["a" /* default */])(this.e, sinphi);
    if (this.mode === this.OBLIQ || this.mode === this.EQUIT) {
      sinb = q / this.qp;
      cosb = Math.sqrt(1 - sinb * sinb);
    }
    switch (this.mode) {
    case this.OBLIQ:
      b = 1 + this.sinb1 * sinb + this.cosb1 * cosb * coslam;
      break;
    case this.EQUIT:
      b = 1 + cosb * coslam;
      break;
    case this.N_POLE:
      b = __WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */] + phi;
      q = this.qp - q;
      break;
    case this.S_POLE:
      b = phi - __WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */];
      q = this.qp + q;
      break;
    }
    if (Math.abs(b) < __WEBPACK_IMPORTED_MODULE_0__constants_values__["b" /* EPSLN */]) {
      return null;
    }
    switch (this.mode) {
    case this.OBLIQ:
    case this.EQUIT:
      b = Math.sqrt(2 / b);
      if (this.mode === this.OBLIQ) {
        y = this.ymf * b * (this.cosb1 * sinb - this.sinb1 * cosb * coslam);
      }
      else {
        y = (b = Math.sqrt(2 / (1 + cosb * coslam))) * sinb * this.ymf;
      }
      x = this.xmf * b * cosb * sinlam;
      break;
    case this.N_POLE:
    case this.S_POLE:
      if (q >= 0) {
        x = (b = Math.sqrt(q)) * sinlam;
        y = coslam * ((this.mode === this.S_POLE) ? b : -b);
      }
      else {
        x = y = 0;
      }
      break;
    }
  }

  p.x = this.a * x + this.x0;
  p.y = this.a * y + this.y0;
  return p;
}

/* Inverse equations
  -----------------*/
function inverse(p) {
  p.x -= this.x0;
  p.y -= this.y0;
  var x = p.x / this.a;
  var y = p.y / this.a;
  var lam, phi, cCe, sCe, q, rho, ab;
  if (this.sphere) {
    var cosz = 0,
      rh, sinz = 0;

    rh = Math.sqrt(x * x + y * y);
    phi = rh * 0.5;
    if (phi > 1) {
      return null;
    }
    phi = 2 * Math.asin(phi);
    if (this.mode === this.OBLIQ || this.mode === this.EQUIT) {
      sinz = Math.sin(phi);
      cosz = Math.cos(phi);
    }
    switch (this.mode) {
    case this.EQUIT:
      phi = (Math.abs(rh) <= __WEBPACK_IMPORTED_MODULE_0__constants_values__["b" /* EPSLN */]) ? 0 : Math.asin(y * sinz / rh);
      x *= sinz;
      y = cosz * rh;
      break;
    case this.OBLIQ:
      phi = (Math.abs(rh) <= __WEBPACK_IMPORTED_MODULE_0__constants_values__["b" /* EPSLN */]) ? this.phi0 : Math.asin(cosz * this.sinph0 + y * sinz * this.cosph0 / rh);
      x *= sinz * this.cosph0;
      y = (cosz - Math.sin(phi) * this.sinph0) * rh;
      break;
    case this.N_POLE:
      y = -y;
      phi = __WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */] - phi;
      break;
    case this.S_POLE:
      phi -= __WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */];
      break;
    }
    lam = (y === 0 && (this.mode === this.EQUIT || this.mode === this.OBLIQ)) ? 0 : Math.atan2(x, y);
  }
  else {
    ab = 0;
    if (this.mode === this.OBLIQ || this.mode === this.EQUIT) {
      x /= this.dd;
      y *= this.dd;
      rho = Math.sqrt(x * x + y * y);
      if (rho < __WEBPACK_IMPORTED_MODULE_0__constants_values__["b" /* EPSLN */]) {
        p.x = 0;
        p.y = this.phi0;
        return p;
      }
      sCe = 2 * Math.asin(0.5 * rho / this.rq);
      cCe = Math.cos(sCe);
      x *= (sCe = Math.sin(sCe));
      if (this.mode === this.OBLIQ) {
        ab = cCe * this.sinb1 + y * sCe * this.cosb1 / rho;
        q = this.qp * ab;
        y = rho * this.cosb1 * cCe - y * this.sinb1 * sCe;
      }
      else {
        ab = y * sCe / rho;
        q = this.qp * ab;
        y = rho * cCe;
      }
    }
    else if (this.mode === this.N_POLE || this.mode === this.S_POLE) {
      if (this.mode === this.N_POLE) {
        y = -y;
      }
      q = (x * x + y * y);
      if (!q) {
        p.x = 0;
        p.y = this.phi0;
        return p;
      }
      ab = 1 - q / this.qp;
      if (this.mode === this.S_POLE) {
        ab = -ab;
      }
    }
    lam = Math.atan2(x, y);
    phi = authlat(Math.asin(ab), this.apa);
  }

  p.x = Object(__WEBPACK_IMPORTED_MODULE_2__common_adjust_lon__["a" /* default */])(this.long0 + lam);
  p.y = phi;
  return p;
}

/* determine latitude from authalic latitude */
var P00 = 0.33333333333333333333;

var P01 = 0.17222222222222222222;
var P02 = 0.10257936507936507936;
var P10 = 0.06388888888888888888;
var P11 = 0.06640211640211640211;
var P20 = 0.01641501294219154443;

function authset(es) {
  var t;
  var APA = [];
  APA[0] = es * P00;
  t = es * es;
  APA[0] += t * P01;
  APA[1] = t * P10;
  t *= es;
  APA[0] += t * P02;
  APA[1] += t * P11;
  APA[2] = t * P20;
  return APA;
}

function authlat(beta, APA) {
  var t = beta + beta;
  return (beta + APA[0] * Math.sin(t) + APA[1] * Math.sin(t + t) + APA[2] * Math.sin(t + t + t));
}

var names = ["Lambert Azimuthal Equal Area", "Lambert_Azimuthal_Equal_Area", "laea"];
/* harmony default export */ __webpack_exports__["a"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names,
  S_POLE: S_POLE,
  N_POLE: N_POLE,
  EQUIT: EQUIT,
  OBLIQ: OBLIQ
});


/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export init */
/* unused harmony export forward */
/* unused harmony export inverse */
/* unused harmony export phi1z */
/* unused harmony export names */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_msfnz__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_qsfnz__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_adjust_lon__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_asinz__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_values__ = __webpack_require__(0);






function init() {

  if (Math.abs(this.lat1 + this.lat2) < __WEBPACK_IMPORTED_MODULE_4__constants_values__["b" /* EPSLN */]) {
    return;
  }
  this.temp = this.b / this.a;
  this.es = 1 - Math.pow(this.temp, 2);
  this.e3 = Math.sqrt(this.es);

  this.sin_po = Math.sin(this.lat1);
  this.cos_po = Math.cos(this.lat1);
  this.t1 = this.sin_po;
  this.con = this.sin_po;
  this.ms1 = Object(__WEBPACK_IMPORTED_MODULE_0__common_msfnz__["a" /* default */])(this.e3, this.sin_po, this.cos_po);
  this.qs1 = Object(__WEBPACK_IMPORTED_MODULE_1__common_qsfnz__["a" /* default */])(this.e3, this.sin_po, this.cos_po);

  this.sin_po = Math.sin(this.lat2);
  this.cos_po = Math.cos(this.lat2);
  this.t2 = this.sin_po;
  this.ms2 = Object(__WEBPACK_IMPORTED_MODULE_0__common_msfnz__["a" /* default */])(this.e3, this.sin_po, this.cos_po);
  this.qs2 = Object(__WEBPACK_IMPORTED_MODULE_1__common_qsfnz__["a" /* default */])(this.e3, this.sin_po, this.cos_po);

  this.sin_po = Math.sin(this.lat0);
  this.cos_po = Math.cos(this.lat0);
  this.t3 = this.sin_po;
  this.qs0 = Object(__WEBPACK_IMPORTED_MODULE_1__common_qsfnz__["a" /* default */])(this.e3, this.sin_po, this.cos_po);

  if (Math.abs(this.lat1 - this.lat2) > __WEBPACK_IMPORTED_MODULE_4__constants_values__["b" /* EPSLN */]) {
    this.ns0 = (this.ms1 * this.ms1 - this.ms2 * this.ms2) / (this.qs2 - this.qs1);
  }
  else {
    this.ns0 = this.con;
  }
  this.c = this.ms1 * this.ms1 + this.ns0 * this.qs1;
  this.rh = this.a * Math.sqrt(this.c - this.ns0 * this.qs0) / this.ns0;
}

/* Albers Conical Equal Area forward equations--mapping lat,long to x,y
  -------------------------------------------------------------------*/
function forward(p) {

  var lon = p.x;
  var lat = p.y;

  this.sin_phi = Math.sin(lat);
  this.cos_phi = Math.cos(lat);

  var qs = Object(__WEBPACK_IMPORTED_MODULE_1__common_qsfnz__["a" /* default */])(this.e3, this.sin_phi, this.cos_phi);
  var rh1 = this.a * Math.sqrt(this.c - this.ns0 * qs) / this.ns0;
  var theta = this.ns0 * Object(__WEBPACK_IMPORTED_MODULE_2__common_adjust_lon__["a" /* default */])(lon - this.long0);
  var x = rh1 * Math.sin(theta) + this.x0;
  var y = this.rh - rh1 * Math.cos(theta) + this.y0;

  p.x = x;
  p.y = y;
  return p;
}

function inverse(p) {
  var rh1, qs, con, theta, lon, lat;

  p.x -= this.x0;
  p.y = this.rh - p.y + this.y0;
  if (this.ns0 >= 0) {
    rh1 = Math.sqrt(p.x * p.x + p.y * p.y);
    con = 1;
  }
  else {
    rh1 = -Math.sqrt(p.x * p.x + p.y * p.y);
    con = -1;
  }
  theta = 0;
  if (rh1 !== 0) {
    theta = Math.atan2(con * p.x, con * p.y);
  }
  con = rh1 * this.ns0 / this.a;
  if (this.sphere) {
    lat = Math.asin((this.c - con * con) / (2 * this.ns0));
  }
  else {
    qs = (this.c - con * con) / this.ns0;
    lat = this.phi1z(this.e3, qs);
  }

  lon = Object(__WEBPACK_IMPORTED_MODULE_2__common_adjust_lon__["a" /* default */])(theta / this.ns0 + this.long0);
  p.x = lon;
  p.y = lat;
  return p;
}

/* Function to compute phi1, the latitude for the inverse of the
   Albers Conical Equal-Area projection.
-------------------------------------------*/
function phi1z(eccent, qs) {
  var sinphi, cosphi, con, com, dphi;
  var phi = Object(__WEBPACK_IMPORTED_MODULE_3__common_asinz__["a" /* default */])(0.5 * qs);
  if (eccent < __WEBPACK_IMPORTED_MODULE_4__constants_values__["b" /* EPSLN */]) {
    return phi;
  }

  var eccnts = eccent * eccent;
  for (var i = 1; i <= 25; i++) {
    sinphi = Math.sin(phi);
    cosphi = Math.cos(phi);
    con = eccent * sinphi;
    com = 1 - con * con;
    dphi = 0.5 * com * com / cosphi * (qs / (1 - eccnts) - sinphi / com + 0.5 / eccent * Math.log((1 - con) / (1 + con)));
    phi = phi + dphi;
    if (Math.abs(dphi) <= 1e-7) {
      return phi;
    }
  }
  return null;
}

var names = ["Albers_Conic_Equal_Area", "Albers", "aea"];
/* harmony default export */ __webpack_exports__["a"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names,
  phi1z: phi1z
});


/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export init */
/* unused harmony export forward */
/* unused harmony export inverse */
/* unused harmony export names */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_adjust_lon__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_asinz__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_values__ = __webpack_require__(0);




/*
  reference:
    Wolfram Mathworld "Gnomonic Projection"
    http://mathworld.wolfram.com/GnomonicProjection.html
    Accessed: 12th November 2009
  */
function init() {

  /* Place parameters in static storage for common use
      -------------------------------------------------*/
  this.sin_p14 = Math.sin(this.lat0);
  this.cos_p14 = Math.cos(this.lat0);
  // Approximation for projecting points to the horizon (infinity)
  this.infinity_dist = 1000 * this.a;
  this.rc = 1;
}

/* Gnomonic forward equations--mapping lat,long to x,y
    ---------------------------------------------------*/
function forward(p) {
  var sinphi, cosphi; /* sin and cos value        */
  var dlon; /* delta longitude value      */
  var coslon; /* cos of longitude        */
  var ksp; /* scale factor          */
  var g;
  var x, y;
  var lon = p.x;
  var lat = p.y;
  /* Forward equations
      -----------------*/
  dlon = Object(__WEBPACK_IMPORTED_MODULE_0__common_adjust_lon__["a" /* default */])(lon - this.long0);

  sinphi = Math.sin(lat);
  cosphi = Math.cos(lat);

  coslon = Math.cos(dlon);
  g = this.sin_p14 * sinphi + this.cos_p14 * cosphi * coslon;
  ksp = 1;
  if ((g > 0) || (Math.abs(g) <= __WEBPACK_IMPORTED_MODULE_2__constants_values__["b" /* EPSLN */])) {
    x = this.x0 + this.a * ksp * cosphi * Math.sin(dlon) / g;
    y = this.y0 + this.a * ksp * (this.cos_p14 * sinphi - this.sin_p14 * cosphi * coslon) / g;
  }
  else {

    // Point is in the opposing hemisphere and is unprojectable
    // We still need to return a reasonable point, so we project
    // to infinity, on a bearing
    // equivalent to the northern hemisphere equivalent
    // This is a reasonable approximation for short shapes and lines that
    // straddle the horizon.

    x = this.x0 + this.infinity_dist * cosphi * Math.sin(dlon);
    y = this.y0 + this.infinity_dist * (this.cos_p14 * sinphi - this.sin_p14 * cosphi * coslon);

  }
  p.x = x;
  p.y = y;
  return p;
}

function inverse(p) {
  var rh; /* Rho */
  var sinc, cosc;
  var c;
  var lon, lat;

  /* Inverse equations
      -----------------*/
  p.x = (p.x - this.x0) / this.a;
  p.y = (p.y - this.y0) / this.a;

  p.x /= this.k0;
  p.y /= this.k0;

  if ((rh = Math.sqrt(p.x * p.x + p.y * p.y))) {
    c = Math.atan2(rh, this.rc);
    sinc = Math.sin(c);
    cosc = Math.cos(c);

    lat = Object(__WEBPACK_IMPORTED_MODULE_1__common_asinz__["a" /* default */])(cosc * this.sin_p14 + (p.y * sinc * this.cos_p14) / rh);
    lon = Math.atan2(p.x * sinc, rh * this.cos_p14 * cosc - p.y * this.sin_p14 * sinc);
    lon = Object(__WEBPACK_IMPORTED_MODULE_0__common_adjust_lon__["a" /* default */])(this.long0 + lon);
  }
  else {
    lat = this.phic0;
    lon = 0;
  }

  p.x = lon;
  p.y = lat;
  return p;
}

var names = ["gnom"];
/* harmony default export */ __webpack_exports__["a"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export init */
/* unused harmony export forward */
/* unused harmony export inverse */
/* unused harmony export names */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_adjust_lon__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_qsfnz__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_msfnz__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_iqsfnz__ = __webpack_require__(81);





/*
  reference:
    "Cartographic Projection Procedures for the UNIX Environment-
    A User's Manual" by Gerald I. Evenden,
    USGS Open File Report 90-284and Release 4 Interim Reports (2003)
*/
function init() {
  //no-op
  if (!this.sphere) {
    this.k0 = Object(__WEBPACK_IMPORTED_MODULE_2__common_msfnz__["a" /* default */])(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts));
  }
}

/* Cylindrical Equal Area forward equations--mapping lat,long to x,y
    ------------------------------------------------------------*/
function forward(p) {
  var lon = p.x;
  var lat = p.y;
  var x, y;
  /* Forward equations
      -----------------*/
  var dlon = Object(__WEBPACK_IMPORTED_MODULE_0__common_adjust_lon__["a" /* default */])(lon - this.long0);
  if (this.sphere) {
    x = this.x0 + this.a * dlon * Math.cos(this.lat_ts);
    y = this.y0 + this.a * Math.sin(lat) / Math.cos(this.lat_ts);
  }
  else {
    var qs = Object(__WEBPACK_IMPORTED_MODULE_1__common_qsfnz__["a" /* default */])(this.e, Math.sin(lat));
    x = this.x0 + this.a * this.k0 * dlon;
    y = this.y0 + this.a * qs * 0.5 / this.k0;
  }

  p.x = x;
  p.y = y;
  return p;
}

/* Cylindrical Equal Area inverse equations--mapping x,y to lat/long
    ------------------------------------------------------------*/
function inverse(p) {
  p.x -= this.x0;
  p.y -= this.y0;
  var lon, lat;

  if (this.sphere) {
    lon = Object(__WEBPACK_IMPORTED_MODULE_0__common_adjust_lon__["a" /* default */])(this.long0 + (p.x / this.a) / Math.cos(this.lat_ts));
    lat = Math.asin((p.y / this.a) * Math.cos(this.lat_ts));
  }
  else {
    lat = Object(__WEBPACK_IMPORTED_MODULE_3__common_iqsfnz__["a" /* default */])(this.e, 2 * p.y * this.k0 / this.a);
    lon = Object(__WEBPACK_IMPORTED_MODULE_0__common_adjust_lon__["a" /* default */])(this.long0 + p.x / (this.a * this.k0));
  }

  p.x = lon;
  p.y = lat;
  return p;
}

var names = ["cea"];
/* harmony default export */ __webpack_exports__["a"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_values__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (function(eccent, q) {
  var temp = 1 - (1 - eccent * eccent) / (2 * eccent) * Math.log((1 - eccent) / (1 + eccent));
  if (Math.abs(Math.abs(q) - temp) < 1.0E-6) {
    if (q < 0) {
      return (-1 * __WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */]);
    }
    else {
      return __WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */];
    }
  }
  //var phi = 0.5* q/(1-eccent*eccent);
  var phi = Math.asin(0.5 * q);
  var dphi;
  var sin_phi;
  var cos_phi;
  var con;
  for (var i = 0; i < 30; i++) {
    sin_phi = Math.sin(phi);
    cos_phi = Math.cos(phi);
    con = eccent * sin_phi;
    dphi = Math.pow(1 - con * con, 2) / (2 * cos_phi) * (q / (1 - eccent * eccent) - sin_phi / (1 - con * con) + 0.5 / eccent * Math.log((1 - con) / (1 + con)));
    phi += dphi;
    if (Math.abs(dphi) <= 0.0000000001) {
      return phi;
    }
  }

  //console.log("IQSFN-CONV:Latitude failed to converge after 30 iterations");
  return NaN;
});


/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export init */
/* unused harmony export forward */
/* unused harmony export inverse */
/* unused harmony export names */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_adjust_lon__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_adjust_lat__ = __webpack_require__(5);



function init() {

  this.x0 = this.x0 || 0;
  this.y0 = this.y0 || 0;
  this.lat0 = this.lat0 || 0;
  this.long0 = this.long0 || 0;
  this.lat_ts = this.lat_ts || 0;
  this.title = this.title || "Equidistant Cylindrical (Plate Carre)";

  this.rc = Math.cos(this.lat_ts);
}

// forward equations--mapping lat,long to x,y
// -----------------------------------------------------------------
function forward(p) {

  var lon = p.x;
  var lat = p.y;

  var dlon = Object(__WEBPACK_IMPORTED_MODULE_0__common_adjust_lon__["a" /* default */])(lon - this.long0);
  var dlat = Object(__WEBPACK_IMPORTED_MODULE_1__common_adjust_lat__["a" /* default */])(lat - this.lat0);
  p.x = this.x0 + (this.a * dlon * this.rc);
  p.y = this.y0 + (this.a * dlat);
  return p;
}

// inverse equations--mapping x,y to lat/long
// -----------------------------------------------------------------
function inverse(p) {

  var x = p.x;
  var y = p.y;

  p.x = Object(__WEBPACK_IMPORTED_MODULE_0__common_adjust_lon__["a" /* default */])(this.long0 + ((x - this.x0) / (this.a * this.rc)));
  p.y = Object(__WEBPACK_IMPORTED_MODULE_1__common_adjust_lat__["a" /* default */])(this.lat0 + ((y - this.y0) / (this.a)));
  return p;
}

var names = ["Equirectangular", "Equidistant_Cylindrical", "eqc"];
/* harmony default export */ __webpack_exports__["a"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export init */
/* unused harmony export forward */
/* unused harmony export inverse */
/* unused harmony export names */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_e0fn__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_e1fn__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_e2fn__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_e3fn__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_adjust_lon__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_adjust_lat__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_mlfn__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_values__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_gN__ = __webpack_require__(17);










var MAX_ITER = 20;

function init() {
  /* Place parameters in static storage for common use
      -------------------------------------------------*/
  this.temp = this.b / this.a;
  this.es = 1 - Math.pow(this.temp, 2); // devait etre dans tmerc.js mais n y est pas donc je commente sinon retour de valeurs nulles
  this.e = Math.sqrt(this.es);
  this.e0 = Object(__WEBPACK_IMPORTED_MODULE_0__common_e0fn__["a" /* default */])(this.es);
  this.e1 = Object(__WEBPACK_IMPORTED_MODULE_1__common_e1fn__["a" /* default */])(this.es);
  this.e2 = Object(__WEBPACK_IMPORTED_MODULE_2__common_e2fn__["a" /* default */])(this.es);
  this.e3 = Object(__WEBPACK_IMPORTED_MODULE_3__common_e3fn__["a" /* default */])(this.es);
  this.ml0 = this.a * Object(__WEBPACK_IMPORTED_MODULE_6__common_mlfn__["a" /* default */])(this.e0, this.e1, this.e2, this.e3, this.lat0); //si que des zeros le calcul ne se fait pas
}

/* Polyconic forward equations--mapping lat,long to x,y
    ---------------------------------------------------*/
function forward(p) {
  var lon = p.x;
  var lat = p.y;
  var x, y, el;
  var dlon = Object(__WEBPACK_IMPORTED_MODULE_4__common_adjust_lon__["a" /* default */])(lon - this.long0);
  el = dlon * Math.sin(lat);
  if (this.sphere) {
    if (Math.abs(lat) <= __WEBPACK_IMPORTED_MODULE_7__constants_values__["b" /* EPSLN */]) {
      x = this.a * dlon;
      y = -1 * this.a * this.lat0;
    }
    else {
      x = this.a * Math.sin(el) / Math.tan(lat);
      y = this.a * (Object(__WEBPACK_IMPORTED_MODULE_5__common_adjust_lat__["a" /* default */])(lat - this.lat0) + (1 - Math.cos(el)) / Math.tan(lat));
    }
  }
  else {
    if (Math.abs(lat) <= __WEBPACK_IMPORTED_MODULE_7__constants_values__["b" /* EPSLN */]) {
      x = this.a * dlon;
      y = -1 * this.ml0;
    }
    else {
      var nl = Object(__WEBPACK_IMPORTED_MODULE_8__common_gN__["a" /* default */])(this.a, this.e, Math.sin(lat)) / Math.tan(lat);
      x = nl * Math.sin(el);
      y = this.a * Object(__WEBPACK_IMPORTED_MODULE_6__common_mlfn__["a" /* default */])(this.e0, this.e1, this.e2, this.e3, lat) - this.ml0 + nl * (1 - Math.cos(el));
    }

  }
  p.x = x + this.x0;
  p.y = y + this.y0;
  return p;
}

/* Inverse equations
  -----------------*/
function inverse(p) {
  var lon, lat, x, y, i;
  var al, bl;
  var phi, dphi;
  x = p.x - this.x0;
  y = p.y - this.y0;

  if (this.sphere) {
    if (Math.abs(y + this.a * this.lat0) <= __WEBPACK_IMPORTED_MODULE_7__constants_values__["b" /* EPSLN */]) {
      lon = Object(__WEBPACK_IMPORTED_MODULE_4__common_adjust_lon__["a" /* default */])(x / this.a + this.long0);
      lat = 0;
    }
    else {
      al = this.lat0 + y / this.a;
      bl = x * x / this.a / this.a + al * al;
      phi = al;
      var tanphi;
      for (i = MAX_ITER; i; --i) {
        tanphi = Math.tan(phi);
        dphi = -1 * (al * (phi * tanphi + 1) - phi - 0.5 * (phi * phi + bl) * tanphi) / ((phi - al) / tanphi - 1);
        phi += dphi;
        if (Math.abs(dphi) <= __WEBPACK_IMPORTED_MODULE_7__constants_values__["b" /* EPSLN */]) {
          lat = phi;
          break;
        }
      }
      lon = Object(__WEBPACK_IMPORTED_MODULE_4__common_adjust_lon__["a" /* default */])(this.long0 + (Math.asin(x * Math.tan(phi) / this.a)) / Math.sin(lat));
    }
  }
  else {
    if (Math.abs(y + this.ml0) <= __WEBPACK_IMPORTED_MODULE_7__constants_values__["b" /* EPSLN */]) {
      lat = 0;
      lon = Object(__WEBPACK_IMPORTED_MODULE_4__common_adjust_lon__["a" /* default */])(this.long0 + x / this.a);
    }
    else {

      al = (this.ml0 + y) / this.a;
      bl = x * x / this.a / this.a + al * al;
      phi = al;
      var cl, mln, mlnp, ma;
      var con;
      for (i = MAX_ITER; i; --i) {
        con = this.e * Math.sin(phi);
        cl = Math.sqrt(1 - con * con) * Math.tan(phi);
        mln = this.a * Object(__WEBPACK_IMPORTED_MODULE_6__common_mlfn__["a" /* default */])(this.e0, this.e1, this.e2, this.e3, phi);
        mlnp = this.e0 - 2 * this.e1 * Math.cos(2 * phi) + 4 * this.e2 * Math.cos(4 * phi) - 6 * this.e3 * Math.cos(6 * phi);
        ma = mln / this.a;
        dphi = (al * (cl * ma + 1) - ma - 0.5 * cl * (ma * ma + bl)) / (this.es * Math.sin(2 * phi) * (ma * ma + bl - 2 * al * ma) / (4 * cl) + (al - ma) * (cl * mlnp - 2 / Math.sin(2 * phi)) - mlnp);
        phi -= dphi;
        if (Math.abs(dphi) <= __WEBPACK_IMPORTED_MODULE_7__constants_values__["b" /* EPSLN */]) {
          lat = phi;
          break;
        }
      }

      //lat=phi4z(this.e,this.e0,this.e1,this.e2,this.e3,al,bl,0,0);
      cl = Math.sqrt(1 - this.es * Math.pow(Math.sin(lat), 2)) * Math.tan(lat);
      lon = Object(__WEBPACK_IMPORTED_MODULE_4__common_adjust_lon__["a" /* default */])(this.long0 + Math.asin(x * cl / this.a) / Math.sin(lat));
    }
  }

  p.x = lon;
  p.y = lat;
  return p;
}

var names = ["Polyconic", "poly"];
/* harmony default export */ __webpack_exports__["a"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export iterations */
/* unused harmony export init */
/* unused harmony export forward */
/* unused harmony export inverse */
/* unused harmony export names */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_values__ = __webpack_require__(0);


/*
  reference
    Department of Land and Survey Technical Circular 1973/32
      http://www.linz.govt.nz/docs/miscellaneous/nz-map-definition.pdf
    OSG Technical Report 4.1
      http://www.linz.govt.nz/docs/miscellaneous/nzmg.pdf
  */

/**
 * iterations: Number of iterations to refine inverse transform.
 *     0 -> km accuracy
 *     1 -> m accuracy -- suitable for most mapping applications
 *     2 -> mm accuracy
 */
var iterations = 1;

function init() {
  this.A = [];
  this.A[1] = 0.6399175073;
  this.A[2] = -0.1358797613;
  this.A[3] = 0.063294409;
  this.A[4] = -0.02526853;
  this.A[5] = 0.0117879;
  this.A[6] = -0.0055161;
  this.A[7] = 0.0026906;
  this.A[8] = -0.001333;
  this.A[9] = 0.00067;
  this.A[10] = -0.00034;

  this.B_re = [];
  this.B_im = [];
  this.B_re[1] = 0.7557853228;
  this.B_im[1] = 0;
  this.B_re[2] = 0.249204646;
  this.B_im[2] = 0.003371507;
  this.B_re[3] = -0.001541739;
  this.B_im[3] = 0.041058560;
  this.B_re[4] = -0.10162907;
  this.B_im[4] = 0.01727609;
  this.B_re[5] = -0.26623489;
  this.B_im[5] = -0.36249218;
  this.B_re[6] = -0.6870983;
  this.B_im[6] = -1.1651967;

  this.C_re = [];
  this.C_im = [];
  this.C_re[1] = 1.3231270439;
  this.C_im[1] = 0;
  this.C_re[2] = -0.577245789;
  this.C_im[2] = -0.007809598;
  this.C_re[3] = 0.508307513;
  this.C_im[3] = -0.112208952;
  this.C_re[4] = -0.15094762;
  this.C_im[4] = 0.18200602;
  this.C_re[5] = 1.01418179;
  this.C_im[5] = 1.64497696;
  this.C_re[6] = 1.9660549;
  this.C_im[6] = 2.5127645;

  this.D = [];
  this.D[1] = 1.5627014243;
  this.D[2] = 0.5185406398;
  this.D[3] = -0.03333098;
  this.D[4] = -0.1052906;
  this.D[5] = -0.0368594;
  this.D[6] = 0.007317;
  this.D[7] = 0.01220;
  this.D[8] = 0.00394;
  this.D[9] = -0.0013;
}

/**
    New Zealand Map Grid Forward  - long/lat to x/y
    long/lat in radians
  */
function forward(p) {
  var n;
  var lon = p.x;
  var lat = p.y;

  var delta_lat = lat - this.lat0;
  var delta_lon = lon - this.long0;

  // 1. Calculate d_phi and d_psi    ...                          // and d_lambda
  // For this algorithm, delta_latitude is in seconds of arc x 10-5, so we need to scale to those units. Longitude is radians.
  var d_phi = delta_lat / __WEBPACK_IMPORTED_MODULE_0__constants_values__["l" /* SEC_TO_RAD */] * 1E-5;
  var d_lambda = delta_lon;
  var d_phi_n = 1; // d_phi^0

  var d_psi = 0;
  for (n = 1; n <= 10; n++) {
    d_phi_n = d_phi_n * d_phi;
    d_psi = d_psi + this.A[n] * d_phi_n;
  }

  // 2. Calculate theta
  var th_re = d_psi;
  var th_im = d_lambda;

  // 3. Calculate z
  var th_n_re = 1;
  var th_n_im = 0; // theta^0
  var th_n_re1;
  var th_n_im1;

  var z_re = 0;
  var z_im = 0;
  for (n = 1; n <= 6; n++) {
    th_n_re1 = th_n_re * th_re - th_n_im * th_im;
    th_n_im1 = th_n_im * th_re + th_n_re * th_im;
    th_n_re = th_n_re1;
    th_n_im = th_n_im1;
    z_re = z_re + this.B_re[n] * th_n_re - this.B_im[n] * th_n_im;
    z_im = z_im + this.B_im[n] * th_n_re + this.B_re[n] * th_n_im;
  }

  // 4. Calculate easting and northing
  p.x = (z_im * this.a) + this.x0;
  p.y = (z_re * this.a) + this.y0;

  return p;
}

/**
    New Zealand Map Grid Inverse  -  x/y to long/lat
  */
function inverse(p) {
  var n;
  var x = p.x;
  var y = p.y;

  var delta_x = x - this.x0;
  var delta_y = y - this.y0;

  // 1. Calculate z
  var z_re = delta_y / this.a;
  var z_im = delta_x / this.a;

  // 2a. Calculate theta - first approximation gives km accuracy
  var z_n_re = 1;
  var z_n_im = 0; // z^0
  var z_n_re1;
  var z_n_im1;

  var th_re = 0;
  var th_im = 0;
  for (n = 1; n <= 6; n++) {
    z_n_re1 = z_n_re * z_re - z_n_im * z_im;
    z_n_im1 = z_n_im * z_re + z_n_re * z_im;
    z_n_re = z_n_re1;
    z_n_im = z_n_im1;
    th_re = th_re + this.C_re[n] * z_n_re - this.C_im[n] * z_n_im;
    th_im = th_im + this.C_im[n] * z_n_re + this.C_re[n] * z_n_im;
  }

  // 2b. Iterate to refine the accuracy of the calculation
  //        0 iterations gives km accuracy
  //        1 iteration gives m accuracy -- good enough for most mapping applications
  //        2 iterations bives mm accuracy
  for (var i = 0; i < this.iterations; i++) {
    var th_n_re = th_re;
    var th_n_im = th_im;
    var th_n_re1;
    var th_n_im1;

    var num_re = z_re;
    var num_im = z_im;
    for (n = 2; n <= 6; n++) {
      th_n_re1 = th_n_re * th_re - th_n_im * th_im;
      th_n_im1 = th_n_im * th_re + th_n_re * th_im;
      th_n_re = th_n_re1;
      th_n_im = th_n_im1;
      num_re = num_re + (n - 1) * (this.B_re[n] * th_n_re - this.B_im[n] * th_n_im);
      num_im = num_im + (n - 1) * (this.B_im[n] * th_n_re + this.B_re[n] * th_n_im);
    }

    th_n_re = 1;
    th_n_im = 0;
    var den_re = this.B_re[1];
    var den_im = this.B_im[1];
    for (n = 2; n <= 6; n++) {
      th_n_re1 = th_n_re * th_re - th_n_im * th_im;
      th_n_im1 = th_n_im * th_re + th_n_re * th_im;
      th_n_re = th_n_re1;
      th_n_im = th_n_im1;
      den_re = den_re + n * (this.B_re[n] * th_n_re - this.B_im[n] * th_n_im);
      den_im = den_im + n * (this.B_im[n] * th_n_re + this.B_re[n] * th_n_im);
    }

    // Complex division
    var den2 = den_re * den_re + den_im * den_im;
    th_re = (num_re * den_re + num_im * den_im) / den2;
    th_im = (num_im * den_re - num_re * den_im) / den2;
  }

  // 3. Calculate d_phi              ...                                    // and d_lambda
  var d_psi = th_re;
  var d_lambda = th_im;
  var d_psi_n = 1; // d_psi^0

  var d_phi = 0;
  for (n = 1; n <= 9; n++) {
    d_psi_n = d_psi_n * d_psi;
    d_phi = d_phi + this.D[n] * d_psi_n;
  }

  // 4. Calculate latitude and longitude
  // d_phi is calcuated in second of arc * 10^-5, so we need to scale back to radians. d_lambda is in radians.
  var lat = this.lat0 + (d_phi * __WEBPACK_IMPORTED_MODULE_0__constants_values__["l" /* SEC_TO_RAD */] * 1E5);
  var lon = this.long0 + d_lambda;

  p.x = lon;
  p.y = lat;

  return p;
}

var names = ["New_Zealand_Map_Grid", "nzmg"];
/* harmony default export */ __webpack_exports__["a"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export init */
/* unused harmony export forward */
/* unused harmony export inverse */
/* unused harmony export names */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_adjust_lon__ = __webpack_require__(1);


/*
  reference
    "New Equal-Area Map Projections for Noncircular Regions", John P. Snyder,
    The American Cartographer, Vol 15, No. 4, October 1988, pp. 341-355.
  */


/* Initialize the Miller Cylindrical projection
  -------------------------------------------*/
function init() {
  //no-op
}

/* Miller Cylindrical forward equations--mapping lat,long to x,y
    ------------------------------------------------------------*/
function forward(p) {
  var lon = p.x;
  var lat = p.y;
  /* Forward equations
      -----------------*/
  var dlon = Object(__WEBPACK_IMPORTED_MODULE_0__common_adjust_lon__["a" /* default */])(lon - this.long0);
  var x = this.x0 + this.a * dlon;
  var y = this.y0 + this.a * Math.log(Math.tan((Math.PI / 4) + (lat / 2.5))) * 1.25;

  p.x = x;
  p.y = y;
  return p;
}

/* Miller Cylindrical inverse equations--mapping x,y to lat/long
    ------------------------------------------------------------*/
function inverse(p) {
  p.x -= this.x0;
  p.y -= this.y0;

  var lon = Object(__WEBPACK_IMPORTED_MODULE_0__common_adjust_lon__["a" /* default */])(this.long0 + p.x / this.a);
  var lat = 2.5 * (Math.atan(Math.exp(0.8 * p.y / this.a)) - Math.PI / 4);

  p.x = lon;
  p.y = lat;
  return p;
}

var names = ["Miller_Cylindrical", "mill"];
/* harmony default export */ __webpack_exports__["a"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export init */
/* unused harmony export forward */
/* unused harmony export inverse */
/* unused harmony export names */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_adjust_lon__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_adjust_lat__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_pj_enfn__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_pj_mlfn__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_pj_inv_mlfn__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_values__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_asinz__ = __webpack_require__(3);



var MAX_ITER = 20;







function init() {
  /* Place parameters in static storage for common use
    -------------------------------------------------*/


  if (!this.sphere) {
    this.en = Object(__WEBPACK_IMPORTED_MODULE_2__common_pj_enfn__["a" /* default */])(this.es);
  }
  else {
    this.n = 1;
    this.m = 0;
    this.es = 0;
    this.C_y = Math.sqrt((this.m + 1) / this.n);
    this.C_x = this.C_y / (this.m + 1);
  }

}

/* Sinusoidal forward equations--mapping lat,long to x,y
  -----------------------------------------------------*/
function forward(p) {
  var x, y;
  var lon = p.x;
  var lat = p.y;
  /* Forward equations
    -----------------*/
  lon = Object(__WEBPACK_IMPORTED_MODULE_0__common_adjust_lon__["a" /* default */])(lon - this.long0);

  if (this.sphere) {
    if (!this.m) {
      lat = this.n !== 1 ? Math.asin(this.n * Math.sin(lat)) : lat;
    }
    else {
      var k = this.n * Math.sin(lat);
      for (var i = MAX_ITER; i; --i) {
        var V = (this.m * lat + Math.sin(lat) - k) / (this.m + Math.cos(lat));
        lat -= V;
        if (Math.abs(V) < __WEBPACK_IMPORTED_MODULE_5__constants_values__["b" /* EPSLN */]) {
          break;
        }
      }
    }
    x = this.a * this.C_x * lon * (this.m + Math.cos(lat));
    y = this.a * this.C_y * lat;

  }
  else {

    var s = Math.sin(lat);
    var c = Math.cos(lat);
    y = this.a * Object(__WEBPACK_IMPORTED_MODULE_3__common_pj_mlfn__["a" /* default */])(lat, s, c, this.en);
    x = this.a * lon * c / Math.sqrt(1 - this.es * s * s);
  }

  p.x = x;
  p.y = y;
  return p;
}

function inverse(p) {
  var lat, temp, lon, s;

  p.x -= this.x0;
  lon = p.x / this.a;
  p.y -= this.y0;
  lat = p.y / this.a;

  if (this.sphere) {
    lat /= this.C_y;
    lon = lon / (this.C_x * (this.m + Math.cos(lat)));
    if (this.m) {
      lat = Object(__WEBPACK_IMPORTED_MODULE_6__common_asinz__["a" /* default */])((this.m * lat + Math.sin(lat)) / this.n);
    }
    else if (this.n !== 1) {
      lat = Object(__WEBPACK_IMPORTED_MODULE_6__common_asinz__["a" /* default */])(Math.sin(lat) / this.n);
    }
    lon = Object(__WEBPACK_IMPORTED_MODULE_0__common_adjust_lon__["a" /* default */])(lon + this.long0);
    lat = Object(__WEBPACK_IMPORTED_MODULE_1__common_adjust_lat__["a" /* default */])(lat);
  }
  else {
    lat = Object(__WEBPACK_IMPORTED_MODULE_4__common_pj_inv_mlfn__["a" /* default */])(p.y / this.a, this.es, this.en);
    s = Math.abs(lat);
    if (s < __WEBPACK_IMPORTED_MODULE_5__constants_values__["d" /* HALF_PI */]) {
      s = Math.sin(lat);
      temp = this.long0 + p.x * Math.sqrt(1 - this.es * s * s) / (this.a * Math.cos(lat));
      //temp = this.long0 + p.x / (this.a * Math.cos(lat));
      lon = Object(__WEBPACK_IMPORTED_MODULE_0__common_adjust_lon__["a" /* default */])(temp);
    }
    else if ((s - __WEBPACK_IMPORTED_MODULE_5__constants_values__["b" /* EPSLN */]) < __WEBPACK_IMPORTED_MODULE_5__constants_values__["d" /* HALF_PI */]) {
      lon = this.long0;
    }
  }
  p.x = lon;
  p.y = lat;
  return p;
}

var names = ["Sinusoidal", "sinu"];
/* harmony default export */ __webpack_exports__["a"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export init */
/* unused harmony export forward */
/* unused harmony export inverse */
/* unused harmony export names */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_adjust_lon__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_values__ = __webpack_require__(0);

function init() {}

/* Mollweide forward equations--mapping lat,long to x,y
    ----------------------------------------------------*/
function forward(p) {

  /* Forward equations
      -----------------*/
  var lon = p.x;
  var lat = p.y;

  var delta_lon = Object(__WEBPACK_IMPORTED_MODULE_0__common_adjust_lon__["a" /* default */])(lon - this.long0);
  var theta = lat;
  var con = Math.PI * Math.sin(lat);

  /* Iterate using the Newton-Raphson method to find theta
      -----------------------------------------------------*/
  while (true) {
    var delta_theta = -(theta + Math.sin(theta) - con) / (1 + Math.cos(theta));
    theta += delta_theta;
    if (Math.abs(delta_theta) < __WEBPACK_IMPORTED_MODULE_1__constants_values__["b" /* EPSLN */]) {
      break;
    }
  }
  theta /= 2;

  /* If the latitude is 90 deg, force the x coordinate to be "0 + false easting"
       this is done here because of precision problems with "cos(theta)"
       --------------------------------------------------------------------------*/
  if (Math.PI / 2 - Math.abs(lat) < __WEBPACK_IMPORTED_MODULE_1__constants_values__["b" /* EPSLN */]) {
    delta_lon = 0;
  }
  var x = 0.900316316158 * this.a * delta_lon * Math.cos(theta) + this.x0;
  var y = 1.4142135623731 * this.a * Math.sin(theta) + this.y0;

  p.x = x;
  p.y = y;
  return p;
}

function inverse(p) {
  var theta;
  var arg;

  /* Inverse equations
      -----------------*/
  p.x -= this.x0;
  p.y -= this.y0;
  arg = p.y / (1.4142135623731 * this.a);

  /* Because of division by zero problems, 'arg' can not be 1.  Therefore
       a number very close to one is used instead.
       -------------------------------------------------------------------*/
  if (Math.abs(arg) > 0.999999999999) {
    arg = 0.999999999999;
  }
  theta = Math.asin(arg);
  var lon = Object(__WEBPACK_IMPORTED_MODULE_0__common_adjust_lon__["a" /* default */])(this.long0 + (p.x / (0.900316316158 * this.a * Math.cos(theta))));
  if (lon < (-Math.PI)) {
    lon = -Math.PI;
  }
  if (lon > Math.PI) {
    lon = Math.PI;
  }
  arg = (2 * theta + Math.sin(2 * theta)) / Math.PI;
  if (Math.abs(arg) > 1) {
    arg = 1;
  }
  var lat = Math.asin(arg);

  p.x = lon;
  p.y = lat;
  return p;
}

var names = ["Mollweide", "moll"];
/* harmony default export */ __webpack_exports__["a"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export init */
/* unused harmony export forward */
/* unused harmony export inverse */
/* unused harmony export names */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_e0fn__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_e1fn__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_e2fn__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_e3fn__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_msfnz__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_mlfn__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_adjust_lon__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_adjust_lat__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_imlfn__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__constants_values__ = __webpack_require__(0);











function init() {

  /* Place parameters in static storage for common use
      -------------------------------------------------*/
  // Standard Parallels cannot be equal and on opposite sides of the equator
  if (Math.abs(this.lat1 + this.lat2) < __WEBPACK_IMPORTED_MODULE_9__constants_values__["b" /* EPSLN */]) {
    return;
  }
  this.lat2 = this.lat2 || this.lat1;
  this.temp = this.b / this.a;
  this.es = 1 - Math.pow(this.temp, 2);
  this.e = Math.sqrt(this.es);
  this.e0 = Object(__WEBPACK_IMPORTED_MODULE_0__common_e0fn__["a" /* default */])(this.es);
  this.e1 = Object(__WEBPACK_IMPORTED_MODULE_1__common_e1fn__["a" /* default */])(this.es);
  this.e2 = Object(__WEBPACK_IMPORTED_MODULE_2__common_e2fn__["a" /* default */])(this.es);
  this.e3 = Object(__WEBPACK_IMPORTED_MODULE_3__common_e3fn__["a" /* default */])(this.es);

  this.sinphi = Math.sin(this.lat1);
  this.cosphi = Math.cos(this.lat1);

  this.ms1 = Object(__WEBPACK_IMPORTED_MODULE_4__common_msfnz__["a" /* default */])(this.e, this.sinphi, this.cosphi);
  this.ml1 = Object(__WEBPACK_IMPORTED_MODULE_5__common_mlfn__["a" /* default */])(this.e0, this.e1, this.e2, this.e3, this.lat1);

  if (Math.abs(this.lat1 - this.lat2) < __WEBPACK_IMPORTED_MODULE_9__constants_values__["b" /* EPSLN */]) {
    this.ns = this.sinphi;
  }
  else {
    this.sinphi = Math.sin(this.lat2);
    this.cosphi = Math.cos(this.lat2);
    this.ms2 = Object(__WEBPACK_IMPORTED_MODULE_4__common_msfnz__["a" /* default */])(this.e, this.sinphi, this.cosphi);
    this.ml2 = Object(__WEBPACK_IMPORTED_MODULE_5__common_mlfn__["a" /* default */])(this.e0, this.e1, this.e2, this.e3, this.lat2);
    this.ns = (this.ms1 - this.ms2) / (this.ml2 - this.ml1);
  }
  this.g = this.ml1 + this.ms1 / this.ns;
  this.ml0 = Object(__WEBPACK_IMPORTED_MODULE_5__common_mlfn__["a" /* default */])(this.e0, this.e1, this.e2, this.e3, this.lat0);
  this.rh = this.a * (this.g - this.ml0);
}

/* Equidistant Conic forward equations--mapping lat,long to x,y
  -----------------------------------------------------------*/
function forward(p) {
  var lon = p.x;
  var lat = p.y;
  var rh1;

  /* Forward equations
      -----------------*/
  if (this.sphere) {
    rh1 = this.a * (this.g - lat);
  }
  else {
    var ml = Object(__WEBPACK_IMPORTED_MODULE_5__common_mlfn__["a" /* default */])(this.e0, this.e1, this.e2, this.e3, lat);
    rh1 = this.a * (this.g - ml);
  }
  var theta = this.ns * Object(__WEBPACK_IMPORTED_MODULE_6__common_adjust_lon__["a" /* default */])(lon - this.long0);
  var x = this.x0 + rh1 * Math.sin(theta);
  var y = this.y0 + this.rh - rh1 * Math.cos(theta);
  p.x = x;
  p.y = y;
  return p;
}

/* Inverse equations
  -----------------*/
function inverse(p) {
  p.x -= this.x0;
  p.y = this.rh - p.y + this.y0;
  var con, rh1, lat, lon;
  if (this.ns >= 0) {
    rh1 = Math.sqrt(p.x * p.x + p.y * p.y);
    con = 1;
  }
  else {
    rh1 = -Math.sqrt(p.x * p.x + p.y * p.y);
    con = -1;
  }
  var theta = 0;
  if (rh1 !== 0) {
    theta = Math.atan2(con * p.x, con * p.y);
  }

  if (this.sphere) {
    lon = Object(__WEBPACK_IMPORTED_MODULE_6__common_adjust_lon__["a" /* default */])(this.long0 + theta / this.ns);
    lat = Object(__WEBPACK_IMPORTED_MODULE_7__common_adjust_lat__["a" /* default */])(this.g - rh1 / this.a);
    p.x = lon;
    p.y = lat;
    return p;
  }
  else {
    var ml = this.g - rh1 / this.a;
    lat = Object(__WEBPACK_IMPORTED_MODULE_8__common_imlfn__["a" /* default */])(ml, this.e0, this.e1, this.e2, this.e3);
    lon = Object(__WEBPACK_IMPORTED_MODULE_6__common_adjust_lon__["a" /* default */])(this.long0 + theta / this.ns);
    p.x = lon;
    p.y = lat;
    return p;
  }

}

var names = ["Equidistant_Conic", "eqdc"];
/* harmony default export */ __webpack_exports__["a"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export init */
/* unused harmony export forward */
/* unused harmony export inverse */
/* unused harmony export names */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_adjust_lon__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_values__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_asinz__ = __webpack_require__(3);






/* Initialize the Van Der Grinten projection
  ----------------------------------------*/
function init() {
  //this.R = 6370997; //Radius of earth
  this.R = this.a;
}

function forward(p) {

  var lon = p.x;
  var lat = p.y;

  /* Forward equations
    -----------------*/
  var dlon = Object(__WEBPACK_IMPORTED_MODULE_0__common_adjust_lon__["a" /* default */])(lon - this.long0);
  var x, y;

  if (Math.abs(lat) <= __WEBPACK_IMPORTED_MODULE_1__constants_values__["b" /* EPSLN */]) {
    x = this.x0 + this.R * dlon;
    y = this.y0;
  }
  var theta = Object(__WEBPACK_IMPORTED_MODULE_2__common_asinz__["a" /* default */])(2 * Math.abs(lat / Math.PI));
  if ((Math.abs(dlon) <= __WEBPACK_IMPORTED_MODULE_1__constants_values__["b" /* EPSLN */]) || (Math.abs(Math.abs(lat) - __WEBPACK_IMPORTED_MODULE_1__constants_values__["d" /* HALF_PI */]) <= __WEBPACK_IMPORTED_MODULE_1__constants_values__["b" /* EPSLN */])) {
    x = this.x0;
    if (lat >= 0) {
      y = this.y0 + Math.PI * this.R * Math.tan(0.5 * theta);
    }
    else {
      y = this.y0 + Math.PI * this.R * -Math.tan(0.5 * theta);
    }
    //  return(OK);
  }
  var al = 0.5 * Math.abs((Math.PI / dlon) - (dlon / Math.PI));
  var asq = al * al;
  var sinth = Math.sin(theta);
  var costh = Math.cos(theta);

  var g = costh / (sinth + costh - 1);
  var gsq = g * g;
  var m = g * (2 / sinth - 1);
  var msq = m * m;
  var con = Math.PI * this.R * (al * (g - msq) + Math.sqrt(asq * (g - msq) * (g - msq) - (msq + asq) * (gsq - msq))) / (msq + asq);
  if (dlon < 0) {
    con = -con;
  }
  x = this.x0 + con;
  //con = Math.abs(con / (Math.PI * this.R));
  var q = asq + g;
  con = Math.PI * this.R * (m * q - al * Math.sqrt((msq + asq) * (asq + 1) - q * q)) / (msq + asq);
  if (lat >= 0) {
    //y = this.y0 + Math.PI * this.R * Math.sqrt(1 - con * con - 2 * al * con);
    y = this.y0 + con;
  }
  else {
    //y = this.y0 - Math.PI * this.R * Math.sqrt(1 - con * con - 2 * al * con);
    y = this.y0 - con;
  }
  p.x = x;
  p.y = y;
  return p;
}

/* Van Der Grinten inverse equations--mapping x,y to lat/long
  ---------------------------------------------------------*/
function inverse(p) {
  var lon, lat;
  var xx, yy, xys, c1, c2, c3;
  var a1;
  var m1;
  var con;
  var th1;
  var d;

  /* inverse equations
    -----------------*/
  p.x -= this.x0;
  p.y -= this.y0;
  con = Math.PI * this.R;
  xx = p.x / con;
  yy = p.y / con;
  xys = xx * xx + yy * yy;
  c1 = -Math.abs(yy) * (1 + xys);
  c2 = c1 - 2 * yy * yy + xx * xx;
  c3 = -2 * c1 + 1 + 2 * yy * yy + xys * xys;
  d = yy * yy / c3 + (2 * c2 * c2 * c2 / c3 / c3 / c3 - 9 * c1 * c2 / c3 / c3) / 27;
  a1 = (c1 - c2 * c2 / 3 / c3) / c3;
  m1 = 2 * Math.sqrt(-a1 / 3);
  con = ((3 * d) / a1) / m1;
  if (Math.abs(con) > 1) {
    if (con >= 0) {
      con = 1;
    }
    else {
      con = -1;
    }
  }
  th1 = Math.acos(con) / 3;
  if (p.y >= 0) {
    lat = (-m1 * Math.cos(th1 + Math.PI / 3) - c2 / 3 / c3) * Math.PI;
  }
  else {
    lat = -(-m1 * Math.cos(th1 + Math.PI / 3) - c2 / 3 / c3) * Math.PI;
  }

  if (Math.abs(xx) < __WEBPACK_IMPORTED_MODULE_1__constants_values__["b" /* EPSLN */]) {
    lon = this.long0;
  }
  else {
    lon = Object(__WEBPACK_IMPORTED_MODULE_0__common_adjust_lon__["a" /* default */])(this.long0 + Math.PI * (xys - 1 + Math.sqrt(1 + 2 * (xx * xx - yy * yy) + xys * xys)) / 2 / xx);
  }

  p.x = lon;
  p.y = lat;
  return p;
}

var names = ["Van_der_Grinten_I", "VanDerGrinten", "vandg"];
/* harmony default export */ __webpack_exports__["a"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export init */
/* unused harmony export forward */
/* unused harmony export inverse */
/* unused harmony export names */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_adjust_lon__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_values__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_mlfn__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_e0fn__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_e1fn__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_e2fn__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_e3fn__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_gN__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_asinz__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_imlfn__ = __webpack_require__(18);














function init() {
  this.sin_p12 = Math.sin(this.lat0);
  this.cos_p12 = Math.cos(this.lat0);
}

function forward(p) {
  var lon = p.x;
  var lat = p.y;
  var sinphi = Math.sin(p.y);
  var cosphi = Math.cos(p.y);
  var dlon = Object(__WEBPACK_IMPORTED_MODULE_0__common_adjust_lon__["a" /* default */])(lon - this.long0);
  var e0, e1, e2, e3, Mlp, Ml, tanphi, Nl1, Nl, psi, Az, G, H, GH, Hs, c, kp, cos_c, s, s2, s3, s4, s5;
  if (this.sphere) {
    if (Math.abs(this.sin_p12 - 1) <= __WEBPACK_IMPORTED_MODULE_1__constants_values__["b" /* EPSLN */]) {
      //North Pole case
      p.x = this.x0 + this.a * (__WEBPACK_IMPORTED_MODULE_1__constants_values__["d" /* HALF_PI */] - lat) * Math.sin(dlon);
      p.y = this.y0 - this.a * (__WEBPACK_IMPORTED_MODULE_1__constants_values__["d" /* HALF_PI */] - lat) * Math.cos(dlon);
      return p;
    }
    else if (Math.abs(this.sin_p12 + 1) <= __WEBPACK_IMPORTED_MODULE_1__constants_values__["b" /* EPSLN */]) {
      //South Pole case
      p.x = this.x0 + this.a * (__WEBPACK_IMPORTED_MODULE_1__constants_values__["d" /* HALF_PI */] + lat) * Math.sin(dlon);
      p.y = this.y0 + this.a * (__WEBPACK_IMPORTED_MODULE_1__constants_values__["d" /* HALF_PI */] + lat) * Math.cos(dlon);
      return p;
    }
    else {
      //default case
      cos_c = this.sin_p12 * sinphi + this.cos_p12 * cosphi * Math.cos(dlon);
      c = Math.acos(cos_c);
      kp = c / Math.sin(c);
      p.x = this.x0 + this.a * kp * cosphi * Math.sin(dlon);
      p.y = this.y0 + this.a * kp * (this.cos_p12 * sinphi - this.sin_p12 * cosphi * Math.cos(dlon));
      return p;
    }
  }
  else {
    e0 = Object(__WEBPACK_IMPORTED_MODULE_3__common_e0fn__["a" /* default */])(this.es);
    e1 = Object(__WEBPACK_IMPORTED_MODULE_4__common_e1fn__["a" /* default */])(this.es);
    e2 = Object(__WEBPACK_IMPORTED_MODULE_5__common_e2fn__["a" /* default */])(this.es);
    e3 = Object(__WEBPACK_IMPORTED_MODULE_6__common_e3fn__["a" /* default */])(this.es);
    if (Math.abs(this.sin_p12 - 1) <= __WEBPACK_IMPORTED_MODULE_1__constants_values__["b" /* EPSLN */]) {
      //North Pole case
      Mlp = this.a * Object(__WEBPACK_IMPORTED_MODULE_2__common_mlfn__["a" /* default */])(e0, e1, e2, e3, __WEBPACK_IMPORTED_MODULE_1__constants_values__["d" /* HALF_PI */]);
      Ml = this.a * Object(__WEBPACK_IMPORTED_MODULE_2__common_mlfn__["a" /* default */])(e0, e1, e2, e3, lat);
      p.x = this.x0 + (Mlp - Ml) * Math.sin(dlon);
      p.y = this.y0 - (Mlp - Ml) * Math.cos(dlon);
      return p;
    }
    else if (Math.abs(this.sin_p12 + 1) <= __WEBPACK_IMPORTED_MODULE_1__constants_values__["b" /* EPSLN */]) {
      //South Pole case
      Mlp = this.a * Object(__WEBPACK_IMPORTED_MODULE_2__common_mlfn__["a" /* default */])(e0, e1, e2, e3, __WEBPACK_IMPORTED_MODULE_1__constants_values__["d" /* HALF_PI */]);
      Ml = this.a * Object(__WEBPACK_IMPORTED_MODULE_2__common_mlfn__["a" /* default */])(e0, e1, e2, e3, lat);
      p.x = this.x0 + (Mlp + Ml) * Math.sin(dlon);
      p.y = this.y0 + (Mlp + Ml) * Math.cos(dlon);
      return p;
    }
    else {
      //Default case
      tanphi = sinphi / cosphi;
      Nl1 = Object(__WEBPACK_IMPORTED_MODULE_7__common_gN__["a" /* default */])(this.a, this.e, this.sin_p12);
      Nl = Object(__WEBPACK_IMPORTED_MODULE_7__common_gN__["a" /* default */])(this.a, this.e, sinphi);
      psi = Math.atan((1 - this.es) * tanphi + this.es * Nl1 * this.sin_p12 / (Nl * cosphi));
      Az = Math.atan2(Math.sin(dlon), this.cos_p12 * Math.tan(psi) - this.sin_p12 * Math.cos(dlon));
      if (Az === 0) {
        s = Math.asin(this.cos_p12 * Math.sin(psi) - this.sin_p12 * Math.cos(psi));
      }
      else if (Math.abs(Math.abs(Az) - Math.PI) <= __WEBPACK_IMPORTED_MODULE_1__constants_values__["b" /* EPSLN */]) {
        s = -Math.asin(this.cos_p12 * Math.sin(psi) - this.sin_p12 * Math.cos(psi));
      }
      else {
        s = Math.asin(Math.sin(dlon) * Math.cos(psi) / Math.sin(Az));
      }
      G = this.e * this.sin_p12 / Math.sqrt(1 - this.es);
      H = this.e * this.cos_p12 * Math.cos(Az) / Math.sqrt(1 - this.es);
      GH = G * H;
      Hs = H * H;
      s2 = s * s;
      s3 = s2 * s;
      s4 = s3 * s;
      s5 = s4 * s;
      c = Nl1 * s * (1 - s2 * Hs * (1 - Hs) / 6 + s3 / 8 * GH * (1 - 2 * Hs) + s4 / 120 * (Hs * (4 - 7 * Hs) - 3 * G * G * (1 - 7 * Hs)) - s5 / 48 * GH);
      p.x = this.x0 + c * Math.sin(Az);
      p.y = this.y0 + c * Math.cos(Az);
      return p;
    }
  }


}

function inverse(p) {
  p.x -= this.x0;
  p.y -= this.y0;
  var rh, z, sinz, cosz, lon, lat, con, e0, e1, e2, e3, Mlp, M, N1, psi, Az, cosAz, tmp, A, B, D, Ee, F;
  if (this.sphere) {
    rh = Math.sqrt(p.x * p.x + p.y * p.y);
    if (rh > (2 * __WEBPACK_IMPORTED_MODULE_1__constants_values__["d" /* HALF_PI */] * this.a)) {
      return;
    }
    z = rh / this.a;

    sinz = Math.sin(z);
    cosz = Math.cos(z);

    lon = this.long0;
    if (Math.abs(rh) <= __WEBPACK_IMPORTED_MODULE_1__constants_values__["b" /* EPSLN */]) {
      lat = this.lat0;
    }
    else {
      lat = Object(__WEBPACK_IMPORTED_MODULE_8__common_asinz__["a" /* default */])(cosz * this.sin_p12 + (p.y * sinz * this.cos_p12) / rh);
      con = Math.abs(this.lat0) - __WEBPACK_IMPORTED_MODULE_1__constants_values__["d" /* HALF_PI */];
      if (Math.abs(con) <= __WEBPACK_IMPORTED_MODULE_1__constants_values__["b" /* EPSLN */]) {
        if (this.lat0 >= 0) {
          lon = Object(__WEBPACK_IMPORTED_MODULE_0__common_adjust_lon__["a" /* default */])(this.long0 + Math.atan2(p.x, - p.y));
        }
        else {
          lon = Object(__WEBPACK_IMPORTED_MODULE_0__common_adjust_lon__["a" /* default */])(this.long0 - Math.atan2(-p.x, p.y));
        }
      }
      else {
        /*con = cosz - this.sin_p12 * Math.sin(lat);
        if ((Math.abs(con) < EPSLN) && (Math.abs(p.x) < EPSLN)) {
          //no-op, just keep the lon value as is
        } else {
          var temp = Math.atan2((p.x * sinz * this.cos_p12), (con * rh));
          lon = adjust_lon(this.long0 + Math.atan2((p.x * sinz * this.cos_p12), (con * rh)));
        }*/
        lon = Object(__WEBPACK_IMPORTED_MODULE_0__common_adjust_lon__["a" /* default */])(this.long0 + Math.atan2(p.x * sinz, rh * this.cos_p12 * cosz - p.y * this.sin_p12 * sinz));
      }
    }

    p.x = lon;
    p.y = lat;
    return p;
  }
  else {
    e0 = Object(__WEBPACK_IMPORTED_MODULE_3__common_e0fn__["a" /* default */])(this.es);
    e1 = Object(__WEBPACK_IMPORTED_MODULE_4__common_e1fn__["a" /* default */])(this.es);
    e2 = Object(__WEBPACK_IMPORTED_MODULE_5__common_e2fn__["a" /* default */])(this.es);
    e3 = Object(__WEBPACK_IMPORTED_MODULE_6__common_e3fn__["a" /* default */])(this.es);
    if (Math.abs(this.sin_p12 - 1) <= __WEBPACK_IMPORTED_MODULE_1__constants_values__["b" /* EPSLN */]) {
      //North pole case
      Mlp = this.a * Object(__WEBPACK_IMPORTED_MODULE_2__common_mlfn__["a" /* default */])(e0, e1, e2, e3, __WEBPACK_IMPORTED_MODULE_1__constants_values__["d" /* HALF_PI */]);
      rh = Math.sqrt(p.x * p.x + p.y * p.y);
      M = Mlp - rh;
      lat = Object(__WEBPACK_IMPORTED_MODULE_9__common_imlfn__["a" /* default */])(M / this.a, e0, e1, e2, e3);
      lon = Object(__WEBPACK_IMPORTED_MODULE_0__common_adjust_lon__["a" /* default */])(this.long0 + Math.atan2(p.x, - 1 * p.y));
      p.x = lon;
      p.y = lat;
      return p;
    }
    else if (Math.abs(this.sin_p12 + 1) <= __WEBPACK_IMPORTED_MODULE_1__constants_values__["b" /* EPSLN */]) {
      //South pole case
      Mlp = this.a * Object(__WEBPACK_IMPORTED_MODULE_2__common_mlfn__["a" /* default */])(e0, e1, e2, e3, __WEBPACK_IMPORTED_MODULE_1__constants_values__["d" /* HALF_PI */]);
      rh = Math.sqrt(p.x * p.x + p.y * p.y);
      M = rh - Mlp;

      lat = Object(__WEBPACK_IMPORTED_MODULE_9__common_imlfn__["a" /* default */])(M / this.a, e0, e1, e2, e3);
      lon = Object(__WEBPACK_IMPORTED_MODULE_0__common_adjust_lon__["a" /* default */])(this.long0 + Math.atan2(p.x, p.y));
      p.x = lon;
      p.y = lat;
      return p;
    }
    else {
      //default case
      rh = Math.sqrt(p.x * p.x + p.y * p.y);
      Az = Math.atan2(p.x, p.y);
      N1 = Object(__WEBPACK_IMPORTED_MODULE_7__common_gN__["a" /* default */])(this.a, this.e, this.sin_p12);
      cosAz = Math.cos(Az);
      tmp = this.e * this.cos_p12 * cosAz;
      A = -tmp * tmp / (1 - this.es);
      B = 3 * this.es * (1 - A) * this.sin_p12 * this.cos_p12 * cosAz / (1 - this.es);
      D = rh / N1;
      Ee = D - A * (1 + A) * Math.pow(D, 3) / 6 - B * (1 + 3 * A) * Math.pow(D, 4) / 24;
      F = 1 - A * Ee * Ee / 2 - D * Ee * Ee * Ee / 6;
      psi = Math.asin(this.sin_p12 * Math.cos(Ee) + this.cos_p12 * Math.sin(Ee) * cosAz);
      lon = Object(__WEBPACK_IMPORTED_MODULE_0__common_adjust_lon__["a" /* default */])(this.long0 + Math.asin(Math.sin(Az) * Math.sin(Ee) / Math.cos(psi)));
      lat = Math.atan((1 - this.es * F * this.sin_p12 / Math.sin(psi)) * Math.tan(psi) / (1 - this.es));
      p.x = lon;
      p.y = lat;
      return p;
    }
  }

}

var names = ["Azimuthal_Equidistant", "aeqd"];
/* harmony default export */ __webpack_exports__["a"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export init */
/* unused harmony export forward */
/* unused harmony export inverse */
/* unused harmony export names */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_adjust_lon__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_asinz__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_values__ = __webpack_require__(0);




function init() {
  //double temp;      /* temporary variable    */

  /* Place parameters in static storage for common use
      -------------------------------------------------*/
  this.sin_p14 = Math.sin(this.lat0);
  this.cos_p14 = Math.cos(this.lat0);
}

/* Orthographic forward equations--mapping lat,long to x,y
    ---------------------------------------------------*/
function forward(p) {
  var sinphi, cosphi; /* sin and cos value        */
  var dlon; /* delta longitude value      */
  var coslon; /* cos of longitude        */
  var ksp; /* scale factor          */
  var g, x, y;
  var lon = p.x;
  var lat = p.y;
  /* Forward equations
      -----------------*/
  dlon = Object(__WEBPACK_IMPORTED_MODULE_0__common_adjust_lon__["a" /* default */])(lon - this.long0);

  sinphi = Math.sin(lat);
  cosphi = Math.cos(lat);

  coslon = Math.cos(dlon);
  g = this.sin_p14 * sinphi + this.cos_p14 * cosphi * coslon;
  ksp = 1;
  if ((g > 0) || (Math.abs(g) <= __WEBPACK_IMPORTED_MODULE_2__constants_values__["b" /* EPSLN */])) {
    x = this.a * ksp * cosphi * Math.sin(dlon);
    y = this.y0 + this.a * ksp * (this.cos_p14 * sinphi - this.sin_p14 * cosphi * coslon);
  }
  p.x = x;
  p.y = y;
  return p;
}

function inverse(p) {
  var rh; /* height above ellipsoid      */
  var z; /* angle          */
  var sinz, cosz; /* sin of z and cos of z      */
  var con;
  var lon, lat;
  /* Inverse equations
      -----------------*/
  p.x -= this.x0;
  p.y -= this.y0;
  rh = Math.sqrt(p.x * p.x + p.y * p.y);
  z = Object(__WEBPACK_IMPORTED_MODULE_1__common_asinz__["a" /* default */])(rh / this.a);

  sinz = Math.sin(z);
  cosz = Math.cos(z);

  lon = this.long0;
  if (Math.abs(rh) <= __WEBPACK_IMPORTED_MODULE_2__constants_values__["b" /* EPSLN */]) {
    lat = this.lat0;
    p.x = lon;
    p.y = lat;
    return p;
  }
  lat = Object(__WEBPACK_IMPORTED_MODULE_1__common_asinz__["a" /* default */])(cosz * this.sin_p14 + (p.y * sinz * this.cos_p14) / rh);
  con = Math.abs(this.lat0) - __WEBPACK_IMPORTED_MODULE_2__constants_values__["d" /* HALF_PI */];
  if (Math.abs(con) <= __WEBPACK_IMPORTED_MODULE_2__constants_values__["b" /* EPSLN */]) {
    if (this.lat0 >= 0) {
      lon = Object(__WEBPACK_IMPORTED_MODULE_0__common_adjust_lon__["a" /* default */])(this.long0 + Math.atan2(p.x, - p.y));
    }
    else {
      lon = Object(__WEBPACK_IMPORTED_MODULE_0__common_adjust_lon__["a" /* default */])(this.long0 - Math.atan2(-p.x, p.y));
    }
    p.x = lon;
    p.y = lat;
    return p;
  }
  lon = Object(__WEBPACK_IMPORTED_MODULE_0__common_adjust_lon__["a" /* default */])(this.long0 + Math.atan2((p.x * sinz), rh * this.cos_p14 * cosz - p.y * this.sin_p14 * sinz));
  p.x = lon;
  p.y = lat;
  return p;
}

var names = ["ortho"];
/* harmony default export */ __webpack_exports__["a"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export init */
/* unused harmony export forward */
/* unused harmony export inverse */
/* unused harmony export names */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_values__ = __webpack_require__(0);
// QSC projection rewritten from the original PROJ4
// https://github.com/OSGeo/proj.4/blob/master/src/PJ_qsc.c



/* constants */
var FACE_ENUM = {
    FRONT: 1,
    RIGHT: 2,
    BACK: 3,
    LEFT: 4,
    TOP: 5,
    BOTTOM: 6
};

var AREA_ENUM = {
    AREA_0: 1,
    AREA_1: 2,
    AREA_2: 3,
    AREA_3: 4
};

function init() {

  this.x0 = this.x0 || 0;
  this.y0 = this.y0 || 0;
  this.lat0 = this.lat0 || 0;
  this.long0 = this.long0 || 0;
  this.lat_ts = this.lat_ts || 0;
  this.title = this.title || "Quadrilateralized Spherical Cube";

  /* Determine the cube face from the center of projection. */
  if (this.lat0 >= __WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */] - __WEBPACK_IMPORTED_MODULE_0__constants_values__["c" /* FORTPI */] / 2.0) {
    this.face = FACE_ENUM.TOP;
  } else if (this.lat0 <= -(__WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */] - __WEBPACK_IMPORTED_MODULE_0__constants_values__["c" /* FORTPI */] / 2.0)) {
    this.face = FACE_ENUM.BOTTOM;
  } else if (Math.abs(this.long0) <= __WEBPACK_IMPORTED_MODULE_0__constants_values__["c" /* FORTPI */]) {
    this.face = FACE_ENUM.FRONT;
  } else if (Math.abs(this.long0) <= __WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */] + __WEBPACK_IMPORTED_MODULE_0__constants_values__["c" /* FORTPI */]) {
    this.face = this.long0 > 0.0 ? FACE_ENUM.RIGHT : FACE_ENUM.LEFT;
  } else {
    this.face = FACE_ENUM.BACK;
  }

  /* Fill in useful values for the ellipsoid <-> sphere shift
   * described in [LK12]. */
  if (this.es !== 0) {
    this.one_minus_f = 1 - (this.a - this.b) / this.a;
    this.one_minus_f_squared = this.one_minus_f * this.one_minus_f;
  }
}

// QSC forward equations--mapping lat,long to x,y
// -----------------------------------------------------------------
function forward(p) {
  var xy = {x: 0, y: 0};
  var lat, lon;
  var theta, phi;
  var t, mu;
  /* nu; */
  var area = {value: 0};

  // move lon according to projection's lon
  p.x -= this.long0;

  /* Convert the geodetic latitude to a geocentric latitude.
   * This corresponds to the shift from the ellipsoid to the sphere
   * described in [LK12]. */
  if (this.es !== 0) {//if (P->es != 0) {
    lat = Math.atan(this.one_minus_f_squared * Math.tan(p.y));
  } else {
    lat = p.y;
  }

  /* Convert the input lat, lon into theta, phi as used by QSC.
   * This depends on the cube face and the area on it.
   * For the top and bottom face, we can compute theta and phi
   * directly from phi, lam. For the other faces, we must use
   * unit sphere cartesian coordinates as an intermediate step. */
  lon = p.x; //lon = lp.lam;
  if (this.face === FACE_ENUM.TOP) {
    phi = __WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */] - lat;
    if (lon >= __WEBPACK_IMPORTED_MODULE_0__constants_values__["c" /* FORTPI */] && lon <= __WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */] + __WEBPACK_IMPORTED_MODULE_0__constants_values__["c" /* FORTPI */]) {
      area.value = AREA_ENUM.AREA_0;
      theta = lon - __WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */];
    } else if (lon > __WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */] + __WEBPACK_IMPORTED_MODULE_0__constants_values__["c" /* FORTPI */] || lon <= -(__WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */] + __WEBPACK_IMPORTED_MODULE_0__constants_values__["c" /* FORTPI */])) {
      area.value = AREA_ENUM.AREA_1;
      theta = (lon > 0.0 ? lon - __WEBPACK_IMPORTED_MODULE_0__constants_values__["n" /* SPI */] : lon + __WEBPACK_IMPORTED_MODULE_0__constants_values__["n" /* SPI */]);
    } else if (lon > -(__WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */] + __WEBPACK_IMPORTED_MODULE_0__constants_values__["c" /* FORTPI */]) && lon <= -__WEBPACK_IMPORTED_MODULE_0__constants_values__["c" /* FORTPI */]) {
      area.value = AREA_ENUM.AREA_2;
      theta = lon + __WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */];
    } else {
      area.value = AREA_ENUM.AREA_3;
      theta = lon;
    }
  } else if (this.face === FACE_ENUM.BOTTOM) {
    phi = __WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */] + lat;
    if (lon >= __WEBPACK_IMPORTED_MODULE_0__constants_values__["c" /* FORTPI */] && lon <= __WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */] + __WEBPACK_IMPORTED_MODULE_0__constants_values__["c" /* FORTPI */]) {
      area.value = AREA_ENUM.AREA_0;
      theta = -lon + __WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */];
    } else if (lon < __WEBPACK_IMPORTED_MODULE_0__constants_values__["c" /* FORTPI */] && lon >= -__WEBPACK_IMPORTED_MODULE_0__constants_values__["c" /* FORTPI */]) {
      area.value = AREA_ENUM.AREA_1;
      theta = -lon;
    } else if (lon < -__WEBPACK_IMPORTED_MODULE_0__constants_values__["c" /* FORTPI */] && lon >= -(__WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */] + __WEBPACK_IMPORTED_MODULE_0__constants_values__["c" /* FORTPI */])) {
      area.value = AREA_ENUM.AREA_2;
      theta = -lon - __WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */];
    } else {
      area.value = AREA_ENUM.AREA_3;
      theta = (lon > 0.0 ? -lon + __WEBPACK_IMPORTED_MODULE_0__constants_values__["n" /* SPI */] : -lon - __WEBPACK_IMPORTED_MODULE_0__constants_values__["n" /* SPI */]);
    }
  } else {
    var q, r, s;
    var sinlat, coslat;
    var sinlon, coslon;

    if (this.face === FACE_ENUM.RIGHT) {
      lon = qsc_shift_lon_origin(lon, +__WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */]);
    } else if (this.face === FACE_ENUM.BACK) {
      lon = qsc_shift_lon_origin(lon, +__WEBPACK_IMPORTED_MODULE_0__constants_values__["n" /* SPI */]);
    } else if (this.face === FACE_ENUM.LEFT) {
      lon = qsc_shift_lon_origin(lon, -__WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */]);
    }
    sinlat = Math.sin(lat);
    coslat = Math.cos(lat);
    sinlon = Math.sin(lon);
    coslon = Math.cos(lon);
    q = coslat * coslon;
    r = coslat * sinlon;
    s = sinlat;

    if (this.face === FACE_ENUM.FRONT) {
      phi = Math.acos(q);
      theta = qsc_fwd_equat_face_theta(phi, s, r, area);
    } else if (this.face === FACE_ENUM.RIGHT) {
      phi = Math.acos(r);
      theta = qsc_fwd_equat_face_theta(phi, s, -q, area);
    } else if (this.face === FACE_ENUM.BACK) {
      phi = Math.acos(-q);
      theta = qsc_fwd_equat_face_theta(phi, s, -r, area);
    } else if (this.face === FACE_ENUM.LEFT) {
      phi = Math.acos(-r);
      theta = qsc_fwd_equat_face_theta(phi, s, q, area);
    } else {
      /* Impossible */
      phi = theta = 0;
      area.value = AREA_ENUM.AREA_0;
    }
  }

  /* Compute mu and nu for the area of definition.
   * For mu, see Eq. (3-21) in [OL76], but note the typos:
   * compare with Eq. (3-14). For nu, see Eq. (3-38). */
  mu = Math.atan((12 / __WEBPACK_IMPORTED_MODULE_0__constants_values__["n" /* SPI */]) * (theta + Math.acos(Math.sin(theta) * Math.cos(__WEBPACK_IMPORTED_MODULE_0__constants_values__["c" /* FORTPI */])) - __WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */]));
  t = Math.sqrt((1 - Math.cos(phi)) / (Math.cos(mu) * Math.cos(mu)) / (1 - Math.cos(Math.atan(1 / Math.cos(theta)))));

  /* Apply the result to the real area. */
  if (area.value === AREA_ENUM.AREA_1) {
    mu += __WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */];
  } else if (area.value === AREA_ENUM.AREA_2) {
    mu += __WEBPACK_IMPORTED_MODULE_0__constants_values__["n" /* SPI */];
  } else if (area.value === AREA_ENUM.AREA_3) {
    mu += 1.5 * __WEBPACK_IMPORTED_MODULE_0__constants_values__["n" /* SPI */];
  }

  /* Now compute x, y from mu and nu */
  xy.x = t * Math.cos(mu);
  xy.y = t * Math.sin(mu);
  xy.x = xy.x * this.a + this.x0;
  xy.y = xy.y * this.a + this.y0;

  p.x = xy.x;
  p.y = xy.y;
  return p;
}

// QSC inverse equations--mapping x,y to lat/long
// -----------------------------------------------------------------
function inverse(p) {
  var lp = {lam: 0, phi: 0};
  var mu, nu, cosmu, tannu;
  var tantheta, theta, cosphi, phi;
  var t;
  var area = {value: 0};

  /* de-offset */
  p.x = (p.x - this.x0) / this.a;
  p.y = (p.y - this.y0) / this.a;

  /* Convert the input x, y to the mu and nu angles as used by QSC.
   * This depends on the area of the cube face. */
  nu = Math.atan(Math.sqrt(p.x * p.x + p.y * p.y));
  mu = Math.atan2(p.y, p.x);
  if (p.x >= 0.0 && p.x >= Math.abs(p.y)) {
    area.value = AREA_ENUM.AREA_0;
  } else if (p.y >= 0.0 && p.y >= Math.abs(p.x)) {
    area.value = AREA_ENUM.AREA_1;
    mu -= __WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */];
  } else if (p.x < 0.0 && -p.x >= Math.abs(p.y)) {
    area.value = AREA_ENUM.AREA_2;
    mu = (mu < 0.0 ? mu + __WEBPACK_IMPORTED_MODULE_0__constants_values__["n" /* SPI */] : mu - __WEBPACK_IMPORTED_MODULE_0__constants_values__["n" /* SPI */]);
  } else {
    area.value = AREA_ENUM.AREA_3;
    mu += __WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */];
  }

  /* Compute phi and theta for the area of definition.
   * The inverse projection is not described in the original paper, but some
   * good hints can be found here (as of 2011-12-14):
   * http://fits.gsfc.nasa.gov/fitsbits/saf.93/saf.9302
   * (search for "Message-Id: <9302181759.AA25477 at fits.cv.nrao.edu>") */
  t = (__WEBPACK_IMPORTED_MODULE_0__constants_values__["n" /* SPI */] / 12) * Math.tan(mu);
  tantheta = Math.sin(t) / (Math.cos(t) - (1 / Math.sqrt(2)));
  theta = Math.atan(tantheta);
  cosmu = Math.cos(mu);
  tannu = Math.tan(nu);
  cosphi = 1 - cosmu * cosmu * tannu * tannu * (1 - Math.cos(Math.atan(1 / Math.cos(theta))));
  if (cosphi < -1) {
    cosphi = -1;
  } else if (cosphi > +1) {
    cosphi = +1;
  }

  /* Apply the result to the real area on the cube face.
   * For the top and bottom face, we can compute phi and lam directly.
   * For the other faces, we must use unit sphere cartesian coordinates
   * as an intermediate step. */
  if (this.face === FACE_ENUM.TOP) {
    phi = Math.acos(cosphi);
    lp.phi = __WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */] - phi;
    if (area.value === AREA_ENUM.AREA_0) {
      lp.lam = theta + __WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */];
    } else if (area.value === AREA_ENUM.AREA_1) {
      lp.lam = (theta < 0.0 ? theta + __WEBPACK_IMPORTED_MODULE_0__constants_values__["n" /* SPI */] : theta - __WEBPACK_IMPORTED_MODULE_0__constants_values__["n" /* SPI */]);
    } else if (area.value === AREA_ENUM.AREA_2) {
      lp.lam = theta - __WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */];
    } else /* area.value == AREA_ENUM.AREA_3 */ {
      lp.lam = theta;
    }
  } else if (this.face === FACE_ENUM.BOTTOM) {
    phi = Math.acos(cosphi);
    lp.phi = phi - __WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */];
    if (area.value === AREA_ENUM.AREA_0) {
      lp.lam = -theta + __WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */];
    } else if (area.value === AREA_ENUM.AREA_1) {
      lp.lam = -theta;
    } else if (area.value === AREA_ENUM.AREA_2) {
      lp.lam = -theta - __WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */];
    } else /* area.value == AREA_ENUM.AREA_3 */ {
      lp.lam = (theta < 0.0 ? -theta - __WEBPACK_IMPORTED_MODULE_0__constants_values__["n" /* SPI */] : -theta + __WEBPACK_IMPORTED_MODULE_0__constants_values__["n" /* SPI */]);
    }
  } else {
    /* Compute phi and lam via cartesian unit sphere coordinates. */
    var q, r, s;
    q = cosphi;
    t = q * q;
    if (t >= 1) {
      s = 0;
    } else {
      s = Math.sqrt(1 - t) * Math.sin(theta);
    }
    t += s * s;
    if (t >= 1) {
      r = 0;
    } else {
      r = Math.sqrt(1 - t);
    }
    /* Rotate q,r,s into the correct area. */
    if (area.value === AREA_ENUM.AREA_1) {
      t = r;
      r = -s;
      s = t;
    } else if (area.value === AREA_ENUM.AREA_2) {
      r = -r;
      s = -s;
    } else if (area.value === AREA_ENUM.AREA_3) {
      t = r;
      r = s;
      s = -t;
    }
    /* Rotate q,r,s into the correct cube face. */
    if (this.face === FACE_ENUM.RIGHT) {
      t = q;
      q = -r;
      r = t;
    } else if (this.face === FACE_ENUM.BACK) {
      q = -q;
      r = -r;
    } else if (this.face === FACE_ENUM.LEFT) {
      t = q;
      q = r;
      r = -t;
    }
    /* Now compute phi and lam from the unit sphere coordinates. */
    lp.phi = Math.acos(-s) - __WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */];
    lp.lam = Math.atan2(r, q);
    if (this.face === FACE_ENUM.RIGHT) {
      lp.lam = qsc_shift_lon_origin(lp.lam, -__WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */]);
    } else if (this.face === FACE_ENUM.BACK) {
      lp.lam = qsc_shift_lon_origin(lp.lam, -__WEBPACK_IMPORTED_MODULE_0__constants_values__["n" /* SPI */]);
    } else if (this.face === FACE_ENUM.LEFT) {
      lp.lam = qsc_shift_lon_origin(lp.lam, +__WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */]);
    }
  }

  /* Apply the shift from the sphere to the ellipsoid as described
   * in [LK12]. */
  if (this.es !== 0) {
    var invert_sign;
    var tanphi, xa;
    invert_sign = (lp.phi < 0 ? 1 : 0);
    tanphi = Math.tan(lp.phi);
    xa = this.b / Math.sqrt(tanphi * tanphi + this.one_minus_f_squared);
    lp.phi = Math.atan(Math.sqrt(this.a * this.a - xa * xa) / (this.one_minus_f * xa));
    if (invert_sign) {
      lp.phi = -lp.phi;
    }
  }

  lp.lam += this.long0;
  p.x = lp.lam;
  p.y = lp.phi;
  return p;
}

/* Helper function for forward projection: compute the theta angle
 * and determine the area number. */
function qsc_fwd_equat_face_theta(phi, y, x, area) {
  var theta;
  if (phi < __WEBPACK_IMPORTED_MODULE_0__constants_values__["b" /* EPSLN */]) {
    area.value = AREA_ENUM.AREA_0;
    theta = 0.0;
  } else {
    theta = Math.atan2(y, x);
    if (Math.abs(theta) <= __WEBPACK_IMPORTED_MODULE_0__constants_values__["c" /* FORTPI */]) {
      area.value = AREA_ENUM.AREA_0;
    } else if (theta > __WEBPACK_IMPORTED_MODULE_0__constants_values__["c" /* FORTPI */] && theta <= __WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */] + __WEBPACK_IMPORTED_MODULE_0__constants_values__["c" /* FORTPI */]) {
      area.value = AREA_ENUM.AREA_1;
      theta -= __WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */];
    } else if (theta > __WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */] + __WEBPACK_IMPORTED_MODULE_0__constants_values__["c" /* FORTPI */] || theta <= -(__WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */] + __WEBPACK_IMPORTED_MODULE_0__constants_values__["c" /* FORTPI */])) {
      area.value = AREA_ENUM.AREA_2;
      theta = (theta >= 0.0 ? theta - __WEBPACK_IMPORTED_MODULE_0__constants_values__["n" /* SPI */] : theta + __WEBPACK_IMPORTED_MODULE_0__constants_values__["n" /* SPI */]);
    } else {
      area.value = AREA_ENUM.AREA_3;
      theta += __WEBPACK_IMPORTED_MODULE_0__constants_values__["d" /* HALF_PI */];
    }
  }
  return theta;
}

/* Helper function: shift the longitude. */
function qsc_shift_lon_origin(lon, offset) {
  var slon = lon + offset;
  if (slon < -__WEBPACK_IMPORTED_MODULE_0__constants_values__["n" /* SPI */]) {
    slon += __WEBPACK_IMPORTED_MODULE_0__constants_values__["o" /* TWO_PI */];
  } else if (slon > +__WEBPACK_IMPORTED_MODULE_0__constants_values__["n" /* SPI */]) {
    slon -= __WEBPACK_IMPORTED_MODULE_0__constants_values__["o" /* TWO_PI */];
  }
  return slon;
}

var names = ["Quadrilateralized Spherical Cube", "Quadrilateralized_Spherical_Cube", "qsc"];
/* harmony default export */ __webpack_exports__["a"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});



/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(95);

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(96);

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(94)))

/***/ }),
/* 94 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),
/* 96 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ZNXD = __webpack_require__(13);

var _ZNXD2 = _interopRequireDefault(_ZNXD);

var _ZNXD3 = __webpack_require__(20);

var _ZNXD4 = _interopRequireDefault(_ZNXD3);

var _ZNXD5 = __webpack_require__(21);

var _ZNXD6 = _interopRequireDefault(_ZNXD5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Administrator on 2018-05-23.
 */

/**
 * 实例化Map
 * @param divId
 * @param option
 * @constructor
 */
znxdmap.Map.prototype.getZNXDMap = function () {
  return this.znxdmap;
};
/** @api {OPTIONS} ZNXDMap Map-初始化地图
    @apiVersion 0.1.0
    @apiGroup Map

    @apiDescription 本类中方法针对地图进行添加，操作.

    @apiExample 使用方法:
    new ZNXDWEBGIS.Map("map", {
      zoom: 15,
      center: [117.54388250717385, 39.630181978909214],
      projection: "EPSG:4326",
      controls: new ZNXDWEBGIS.Control
    });

	@apiParam {String} divId 地图容器（必填项）.
	@apiParam {Object} opt_option 初始化地图参数（若不指定则依据config默认值）.
	@apiParam {opt_option} zoom 缩放级别.
	@apiParam {opt_option} center 缩放级别.
	@apiParam {opt_option} projection 源坐标系.
	@apiParam {opt_option} minZoom 最小缩放级别.
	@apiParam {opt_option} maxZoom 最大缩放级别.
	@apiParam {opt_option} bounds 范围.
	@apiParam {opt_option} controls 工具集.
*/


var ZNXDMap = function ZNXDMap(divId, opt_option) {
  //全部图层
  this.layers = new Array(); //展示图层，不可操作，可叠加，位于最底层（0-1000）

  this.Tilelayers = new Array(); //数据图层，可交互操作（WFS）、可叠加、位于底图、展示图层之上（2000-3000）

  this.DataLayers = new Array(); //专题图层

  this.ThemeLayers = new Array(); //渲染图层

  this.GraphicLayers = new Array(); //饼图图层

  this.PopupLayers = new Array(); //可选择图层

  this.canSelectedLayers = new Array();
  var options = opt_option != null ? opt_option : {};
  var zoom = options.zoom ? options.zoom : _ZNXD2.default.zoom;
  var center = options.center ? options.center : _ZNXD2.default.center;
  var projection = options.projection ? options.projection : _ZNXD2.default.srcProjection;
  var minZoom = options.minZoom ? options.minZoom : _ZNXD2.default.minZoom;
  var maxZoom = options.maxZoom ? options.maxZoom : _ZNXD2.default.maxZoom;
  var bounds = options.bounds ? options.bounds : _ZNXD2.default.bounds;
  var controls = options.controls ? options.controls : new _ZNXD4.default({
    collapsible: false,
    collapsed: true,
    controlArr: [new znxdmap.control.ScaleLine("metric")]
  });
  var layers = opt_option.layers ? opt_option.layers : this.layers;
  this.controls = controls;
  this.map = new znxdmap.Map({
    target: divId,
    controls: controls,
    layers: layers,
    view: new znxdmap.View({
      projection: projection,
      center: center,
      zoom: zoom,
      minZoom: minZoom,
      maxZoom: maxZoom,
      extent: bounds
    }),
    logo: false
  });
  this.map.znxdmap = this;
  return this;
};
/** @api {set} addDataLayer addDataLayer
    @apiVersion 0.1.0
    @apiGroup Map
    @apiDescription 添加数据图层.
    @apiParam {DataLayer} DataLayer 数据图层
*/


ZNXDMap.prototype.addDataLayer = function (_layer) {
  this.layers.push(_layer);
  this.DataLayers.push(_layer);
  this.map.addLayer(_layer.dataTileLayer);

  _layer.dataVectoreLayer.setZIndex(5000);

  this.map.addLayer(_layer.dataVectoreLayer);
};
/** @api {set} addTileLayer addTileLayer
    @apiVersion 0.1.0
    @apiGroup Map
    @apiDescription 添加展示图层.
    @apiParam {TileLayer} TileLayer 底图图层
*/


ZNXDMap.prototype.addTileLayer = function (_layer) {
  this.layers.push(_layer);
  this.Tilelayers.push(_layer);
  this.map.addLayer(_layer.tileLayer);
};
/** @api {set} addThemeLayer addThemeLayer
    @apiVersion 0.1.0
    @apiGroup Map
    @apiDescription 添加专题图层.
    @apiParam {ThemeLayer} ThemeLayer 专题图层
*/


ZNXDMap.prototype.addThemeLayer = function (_layer) {
  this.layers.push(_layer);
  this.ThemeLayers.push(_layer);

  _layer.themeVectoreLayer.setZIndex(_layer.zIndex);

  this.map.addLayer(_layer.themeVectoreLayer);
};
/** @api {set} addGraphicLayer addGraphicLayer
    @apiVersion 0.1.0
    @apiGroup Map
    @apiDescription 添加渲染图层.
    @apiParam {GraphicLayer} GraphicLayer 渲染图层
*/


ZNXDMap.prototype.addGraphicLayer = function (_layer) {
  this.layers.push(_layer);
  this.GraphicLayers.push(_layer);

  _layer.graphicVectoreLayer.setZIndex(_layer.zIndex);

  this.map.addLayer(_layer.graphicVectoreLayer);
};
/** @api {set} addPopupLayer addPopupLayer
    @apiVersion 0.1.0
    @apiGroup Map
    @apiDescription 添加覆盖图层.
    @apiParam {PopupLayer} PopupLayer 覆盖图层
*/


ZNXDMap.prototype.addPopupLayer = function (_layer) {
  this.layers.push(_layer);
  this.PopupLayers.push(_layer);

  _layer.popupVectoreLayer.setZIndex(_layer.zIndex);

  this.map.addLayer(_layer.popupVectoreLayer);
};
/**
 * 基于Array数组的扩展，ZNXDMAP必须
 * @param layer
 */


Array.prototype.znxdArray_indexOf = function (val) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == val) return i;
  }

  return -1;
};
/**
 * 基于Array数组的扩展，ZNXDMAP必须
 * @param layer
 */


Array.prototype.znxdArray_remove = function (val) {
  var index = this.indexOf(val);

  if (index > -1) {
    this.splice(index, 1);
  }
};
/** @api {set} removeDataLayer removeDataLayer
    @apiVersion 0.1.0
    @apiGroup Map
    @apiDescription 移除数据图层.
    @apiParam {DataLayer} DataLayer 数据图层
*/


ZNXDMap.prototype.removeDataLayer = function (_layer) {
  if (_layer == null) {
    return;
  }

  this.layers.znxdArray_remove(_layer);
  this.DataLayers.znxdArray_remove(_layer);
  this.map.removeLayer(_layer.dataTileLayer);
  this.map.removeLayer(_layer.dataVectoreLayer);
};
/** @api {set} removeTileLayer removeTileLayer
    @apiVersion 0.1.0
    @apiGroup Map
    @apiDescription 移除底图图层.
    @apiParam {TileLayer} TileLayer 底图图层
*/


ZNXDMap.prototype.removeTileLayer = function (_layer) {
  if (_layer == null) {
    return;
  }

  this.layers.znxdArray_remove(_layer);
  this.Tilelayers.znxdArray_remove(_layer);
  this.map.removeLayer(_layer.tileLayer);
};
/** @api {set} removeThemeLayer removeThemeLayer
    @apiVersion 0.1.0
    @apiGroup Map
    @apiDescription 移除专题图层.
    @apiParam {ThemeLayer} ThemeLayer 专题图层
*/


ZNXDMap.prototype.removeThemeLayer = function (_layer) {
  if (_layer == null) {
    return;
  }

  this.layers.znxdArray_remove(_layer);
  this.ThemeLayers.znxdArray_remove(_layer);
  this.map.removeLayer(_layer.themeVectoreLayer);
};
/** @api {set} removeGraphicLayer removeGraphicLayer
    @apiVersion 0.1.0
    @apiGroup Map
    @apiDescription 移除渲染图层.
    @apiParam {GraphicLayer} GraphicLayer 渲染图层
*/


ZNXDMap.prototype.removeGraphicLayer = function (_layer) {
  if (_layer == null) {
    return;
  }

  this.layers.znxdArray_remove(_layer);
  this.GraphicLayers.znxdArray_remove(_layer);
  this.map.removeLayer(_layer.graphicVectoreLayer);
  this.map.removeLayer(_layer.highlightOverlay);

  _layer.label.setPosition(undefined);
};
/** @api {set} removePopupLayer removePopupLayer
    @apiVersion 0.1.0
    @apiGroup Map
    @apiDescription 除移覆盖图层.
    @apiParam {PopupLayer} PopupLayer 覆盖图层
*/


ZNXDMap.prototype.removePopupLayer = function (_layer) {
  if (_layer == null) {
    return;
  }

  this.layers.znxdArray_remove(_layer);
  this.PopupLayers.znxdArray_remove(_layer);
  this.map.removeLayer(_layer.popupVectoreLayer);
};
/** @api {set} visibleTileLayer visibleTileLayer
    @apiVersion 0.1.0
    @apiGroup Map
    @apiDescription 设置图层是否可见.
    @apiParam {String} layerName 图层名称
    @apiParam {Boolean} isVisible true/false
*/


ZNXDMap.prototype.visibleTileLayer = function (layerName, isVisible) {
  for (var j in this.Tilelayers) {
    if (layerName == this.Tilelayers[j].layerName) {
      this.Tilelayers[j].setVisible(isVisible);
    }
  }

  for (var j in this.DataLayers) {
    if (layerName == this.DataLayers[j].layerName) {
      this.DataLayers[j].setVisible(isVisible);
    }
  }

  for (var j in this.ThemeLayers) {
    if (layerName == this.ThemeLayers[j].layerName) {
      this.ThemeLayers[j].setVisible(isVisible);
    }
  }

  for (var j in this.GraphicLayers) {
    if (layerName == this.GraphicLayers[j].layerName) {
      this.GraphicLayers[j].setVisible(isVisible);
    }
  }

  for (var j in this.PopupLayers) {
    if (layerName == this.PopupLayers[j].layerName) {
      this.PopupLayers[j].setVisible(isVisible);
    }
  }
};
/** @api {set} on on-绑定事件
    @apiVersion 0.1.0
    @apiGroup Map
    @apiDescription 地图绑定事件.
    @apiParam {String} _type 事件类型（click等）
    @apiParam {function} _function 事件回调函数
*/


ZNXDMap.prototype.on = function (_type, _function) {
  this.map.on(_type, _function);
};
/** @api {set} un un-销毁事件
    @apiVersion 0.1.0
    @apiGroup Map
    @apiDescription 地图销毁事件.
    @apiParam {String} _type 事件类型（click等）
    @apiParam {function} _function 事件指定函数
*/


ZNXDMap.prototype.un = function (_type, _function) {
  this.map.un(_type, _function);
};
/** @api {set} upLayer upLayer-上移图层
    @apiVersion 0.1.0
    @apiGroup Map
    @apiDescription 上移图层.
    @apiParam {String} _name 指定图层名称
*/


ZNXDMap.prototype.upLayer = function (_name) {
  this.map.getLayers().forEach(function (e) {
    var j = e.getZIndex();

    if (e.get("name") == _name) {
      e.setZIndex(e.getZIndex() + 1);
    }
  });
};
/** @api {set} downLayer downLayer-下移图层
    @apiVersion 0.1.0
    @apiGroup Map
    @apiDescription 下移图层.
    @apiParam {String} _name 指定图层名称
*/


ZNXDMap.prototype.downLayer = function (_name) {
  this.map.getLayers().forEach(function (e) {
    var j = e.getZIndex();

    if (e.get("name") == _name) {
      e.setZIndex(e.getZIndex() - 1);
    }
  });
};
/** @api {get} beginExtentSelect beginExtentSelect-开启框选
    @apiVersion 0.1.0
    @apiGroup Map
    @apiDescription 开启框选(需先设置可选图层canselectLayer = layer（唯一）).
*/


ZNXDMap.prototype.beginExtentSelect = function () {
  var _this = this;

  if (!_this.canselectLayer) return console.log("please set selectLayer");
  var dragBox = new znxdmap.interaction.DragBox({
    condition: znxdmap.events.condition.platformModifierKeyOnly
  });
  dragBox.on("boxend", function () {
    var extent = dragBox.getGeometry().getExtent();

    _this.canselectLayer.extentFun(extent);
  });
  this.map.addInteraction(dragBox);
};
/** @api {set} beginPolygonSelect beginPolygonSelect-开启多边形选择
    @apiVersion 0.1.0
    @apiGroup Map
    @apiDescription 开启多边形选择(需先设置可选图层canselectLayer = layer（唯一）).
    @apiParam {Boolean} _freehand="false" false:在徒手模式下操作线条，多边形和圆形
*/


ZNXDMap.prototype.beginPolygonSelect = function (_freehand) {
  var _this = this;

  if (!_this.canselectLayer) return console.log("please set selectLayer");
  var draw = new znxdmap.interaction.Draw({
    source: _this.canselectLayer.source,
    type: "Polygon",
    freehand: _freehand
  });
  draw.on("drawend", function (evt) {
    var sketch = evt.feature;
    var geometry = sketch.getGeometry();

    _this.canselectLayer.PolygonFun(geometry);
  }, this);
  this.map.addInteraction(draw);
};
/** @api {get} getDataLayerByName getDataLayerByName
    @apiVersion 0.1.0
    @apiGroup Map
    @apiDescription 根据图层名称获取图层，返回图层实例.
    @apiParam {Sting} _name 图层名称
*/


ZNXDMap.prototype.getDataLayerByName = function (_name) {
  for (var j in this.DataLayers) {
    if (this.DataLayers[j].layerName == _name) {
      return this.DataLayers[j];
    }
  }

  return null;
};
/** @api {get} getTileLayerByName getTileLayerByName
    @apiVersion 0.1.0
    @apiGroup Map
    @apiDescription 根据图层名称获取图层，返回图层实例.
    @apiParam {Sting} _name 图层名称
*/


ZNXDMap.prototype.getTileLayerByName = function (_name) {
  for (var j in this.Tilelayers) {
    if (this.Tilelayers[j].layerName == _name) {
      return this.Tilelayers[j];
    }
  }

  return null;
};
/** @api {get} getThemeLayerByName getThemeLayerByName
    @apiVersion 0.1.0
    @apiGroup Map
    @apiDescription 根据图层名称获取图层，返回图层实例.
    @apiParam {Sting} _name 图层名称
*/


ZNXDMap.prototype.getThemeLayerByName = function (_name) {
  for (var j in this.ThemeLayers) {
    if (this.ThemeLayers[j].layerName == _name) {
      return this.ThemeLayers[j];
    }
  }

  return null;
};
/** @api {get} getGraphicLayerByName getGraphicLayerByName
    @apiVersion 0.1.0
    @apiGroup Map
    @apiDescription 根据图层名称获取图层，返回图层实例.
    @apiParam {Sting} _name 图层名称
*/


ZNXDMap.prototype.getGraphicLayerByName = function (_name) {
  for (var j in this.GraphicLayers) {
    if (this.GraphicLayers[j].layerName == _name) {
      return this.GraphicLayers[j];
    }
  }

  return null;
};
/** @api {get} getPopupLayerByName getPopupLayerByName
    @apiVersion 0.1.0
    @apiGroup Map
    @apiDescription 根据图层名称获取图层，返回图层实例.
    @apiParam {Sting} _name 图层名称
*/


ZNXDMap.prototype.getPopupLayerByName = function (_name) {
  for (var j in this.PopupLayers) {
    if (this.PopupLayers[j].layerName == _name) {
      return this.PopupLayers[j];
    }
  }

  return null;
};
/** @api {get} getCanSelectedLayers getCanSelectedLayers
    @apiVersion 0.1.0
    @apiGroup Map
    @apiDescription 获取地图中可选的图层，返回图层列表.
*/


ZNXDMap.prototype.getCanSelectedLayers = function () {
  return map.canselectLayer;
};
/** @api {get} locateToLonlat locateToLonlat-定位
    @apiVersion 0.1.0
    @apiGroup Map
    @apiDescription 地图定位到经纬度.
    @apiParam {Array} _lonlat 经纬度
    @apiParam {Number} _zoom（可选） 缩放层级
*/


ZNXDMap.prototype.locateToLonlat = function (_lonlat, _zoom) {
  this.map.getView().cancelAnimations();
  this.map.getView().setCenter(_lonlat);

  if (_zoom) {
    this.map.getView().setZoom(_zoom);
  }
};
/** @api {get} locateToExtent locateToExtent-定位
    @apiVersion 0.1.0
    @apiGroup Map
    @apiDescription 地图范围定位.
    @apiParam {Array} _extent 显示范围
*/


ZNXDMap.prototype.locateToExtent = function (_extent) {
  this.map.getView().fit(_extent, {
    duration: 2000
  });
};
/** @api {get} calculateLayerExtent calculateLayerExtent-定位
    @apiVersion 0.1.0
    @apiGroup Map
    @apiDescription 地图定位到指定图层.
    @apiParam {String} url 例如url:"http://106.3.43.154:17080/geoserver/"
    @apiParam {String} work 例如work:ncpjg,
    @apiParam {String} name 例如name:dk
*/


ZNXDMap.prototype.calculateLayerExtent = function (url, work, name) {
  var _this = this;

  var parser = new znxdmap.format.WMSCapabilities();
  fetch(url + work + "/wms?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities") //参数版本
  .then(function (response) {
    return response.text();
  }).then(function (text) {
    var result = parser.read(text);
    if (!result.Capability.Layer.Layer) return console.log("no find Layer");
    var extent = result.Capability.Layer.Layer.find(function (l) {
      return l.Name === name;
    }).EX_GeographicBoundingBox;

    _this.map.getView().fit(extent, _this.map.getSize());
  });
};
/** @api {set} initLayers initLayers-初始化图层
    @apiVersion 0.1.0
    @apiGroup Map
    @apiDescription 地图初始化图层 TileLayer，DataLayer等等.
    @apiExample 使用方法:
    let aj = [{
			LayerName: "geoserver",
			LayerType: "TileLayer",
			LayerJson: {
				visible: true,
				isTiled: true,
				zIndex: 11,
				opacity: 0.9,
				layerName: "geoserver",
				titleName: "geoserver",
				format: "image/png",
				tileUrl: "http://106.3.43.154:17080/geoserver/wms?",
				layers: "tjys:cbjyqDK",
			}
		}];
	  map.initLayers(aj);
    @apiParam {json} json 详见示例
*/


ZNXDMap.prototype.initLayers = function (json) {
  var _this = this;

  json.forEach(function (e) {
    if (e.LayerType == "DataLayer") {
      var layer = new _ZNXD6.default.DataLayer(e.LayerJson);
      layer.HookLayer(_this);
    } else if (e.LayerType == "TileLayer") {
      var layer = new _ZNXD6.default.TileLayer(e.LayerJson);
      layer.HookLayer(_this);
    } else if (e.LayerType == "BingTileLayer") {
      var layers = new _ZNXD6.default.BingTileLayer(e.LayerJson);
      layers.HookLayer(_this);
    } else if (e.LayerType == "TianTileLayer") {
      var layers = new _ZNXD6.default.TianTileLayer(e.LayerJson);
      layers.HookLayer(_this);
    } else if (e.LayerType == "ThemeLayer") {
      var layers = new _ZNXD6.default.ThemeLayer(e.LayerJson);
      layers.HookLayer(_this);
    } else if (e.LayerType == "GraphicLayer") {
      var layers = new _ZNXD6.default.GraphicLayer(e.LayerJson);
      layers.HookLayer(_this);
    } else if (e.LayerType == "PopupLayer") {
      var layers = new _ZNXD6.default.PopupLayer(e.LayerJson);
      layers.HookLayer(_this);
    }
  });
};
/**
 * 移除图层
 * @param json
 */

/** @api {set} removeLayersByName removeLayersByName
    @apiVersion 0.1.0
    @apiGroup Map
    @apiDescription 地图移除图层.
    @apiParam {String} layerName 移除图层的名称
*/


ZNXDMap.prototype.removeLayersByName = function (layerName) {
  this.removeDataLayer(this.getDataLayerByName(layerName));
  this.removeTileLayer(this.getTileLayerByName(layerName));
  this.removeGraphicLayer(this.getGraphicLayerByName(layerName));
  this.removeThemeLayer(this.getThemeLayerByName(layerName));
  this.removePopupLayer(this.getPopupLayerByName(layerName));
};
/** @api {set} baseLayerChange baseLayerChange
    @apiVersion 0.1.0
    @apiGroup Map
    @apiDescription 切换Tilelayers，layersname如果是一个字符串，则直接寻找字符串，是数据则遍历数组进行切换.
    @apiParam {String/Array} layersname 切换底图名称（数组）
*/


ZNXDMap.prototype.baseLayerChange = function (layersname) {
  // 这里应该增加判断，如果是一个字符串，则直接寻找字符串，是数据则遍历数组
  if (Array.isArray(layersname)) {
    for (var j = 0, len = this.Tilelayers.length; j < len; j++) {
      if (layersname.indexOf(this.Tilelayers[j].layerName) > -1) {
        this.Tilelayers[j].setVisible(true);
      } else {
        this.Tilelayers[j].setVisible(false);
      }
    }
  } else {
    for (var j = 0, len = this.Tilelayers.length; j < len; j++) {
      this.Tilelayers[j].setVisible(false);
    }

    var tile = this.getTileLayerByName(layersname);
    if (tile) tile.setVisible(true);
  }
};
/** @api {set} getAllDataLayers getAllDataLayers
    @apiVersion 0.1.0
    @apiGroup Map
    @apiDescription 获得所有或指定数据图层.
    @apiParam {String} layersname（可选） 数据图层名称（若无返回数组，有则返回指定名称的图层）
*/


ZNXDMap.prototype.getAllDataLayers = function (layersname) {
  if (layersname) return this.getDataLayerByName(layersname);
  var al = new Array();

  for (var j = 0; j < this.DataLayers.length; j++) {
    al.push({
      layerName: this.DataLayers[j].layerName,
      titleName: this.DataLayers[j].titleName
    });
  }

  return al;
};
/** @api {set} getAllTilelayers getAllTilelayers
    @apiVersion 0.1.0
    @apiGroup Map
    @apiDescription 获得所有或指定底图图层.
    @apiParam {String} layersname（可选） 底图图层名称（若无返回数组，有则返回指定名称的图层）
*/


ZNXDMap.prototype.getAllTilelayers = function (layersname) {
  if (layersname) return this.getTileLayerByName(layersname);
  var al = new Array();

  for (var j = 0; j < this.Tilelayers.length; j++) {
    al.push({
      layerName: this.Tilelayers[j].layerName,
      titleName: this.Tilelayers[j].titleName
    });
  }

  return al;
};
/** @api {set} getAllThemeLayers getAllThemeLayers
    @apiVersion 0.1.0
    @apiGroup Map
    @apiDescription 获得所有或指定专题图层.
    @apiParam {String} layersname（可选） 专题图层名称（若无返回数组，有则返回指定名称的图层）
*/


ZNXDMap.prototype.getAllThemeLayers = function (layersname) {
  if (layersname) return this.getThemeLayerByName(layersname);
  var al = new Array();

  for (var j = 0; j < this.ThemeLayers.length; j++) {
    al.push({
      layerName: this.ThemeLayers[j].layerName,
      titleName: this.ThemeLayers[j].titleName
    });
  }

  return al;
};
/** @api {set} getAllGraphicLayers getAllGraphicLayers
    @apiVersion 0.1.0
    @apiGroup Map
    @apiDescription 获得所有或指定渲染图层.
    @apiParam {String} layersname（可选） 渲染图层名称（若无返回数组，有则返回指定名称的图层）
*/


ZNXDMap.prototype.getAllGraphicLayers = function (layersname) {
  if (layersname) return this.getGraphicLayerByName(layersname);
  var al = new Array();

  for (var j = 0; j < this.GraphicLayers.length; j++) {
    al.push({
      layerName: this.GraphicLayers[j].layerName,
      titleName: this.GraphicLayers[j].titleName
    });
  }

  return al;
};
/** @api {set} getAllPopupLayers getAllPopupLayers
    @apiVersion 0.1.0
    @apiGroup Map
    @apiDescription 获得所有或指定覆盖图层.
    @apiParam {String} layersname（可选） 覆盖图层名称（若无返回数组，有则返回指定名称的图层）
*/


ZNXDMap.prototype.getAllPopupLayers = function (layersname) {
  if (layersname) return this.getPopupLayerByName(layersname);
  var al = new Array();

  for (var j = 0; j < this.PopupLayers.length; j++) {
    al.push({
      layerName: this.PopupLayers[j].layerName,
      titleName: this.PopupLayers[j].titleName
    });
  }

  return al;
};
/**
 * 生成目标样式(待完善)
 * @param option
 * return ol.style
 */


ZNXDMap.prototype.createStyle = function (opt_option) {
  var style;

  if (!opt_option) {
    opt_option = {
      fill: {
        color: "rgba(0,255,0,0.8)"
      },
      stroke: {
        color: "rgba(255,0,0,0.8)",
        width: 1
      },
      image: {
        type: "circle",
        //icon||circle
        param: {
          radius: 7,
          fill: {
            color: "rgba(0,255,0,0.8)"
          },
          stroke: {
            color: "rgba(255,0,0,0.8)",
            width: 1
          } // size: [26, 30],
          // src: "./img/marker.png"

        }
      },
      text: {
        font: "12px Calibri,sans-serif",
        fill: {
          color: "#000"
        },
        stroke: {
          color: "#fff",
          width: 1
        }
      }
    };
  }

  var image = null;

  if (opt_option.image.type == "circle") {
    image = new znxdmap.style.Circle({
      radius: opt_option.image.param.radius,
      fill: new znxdmap.style.Fill({
        color: opt_option.image.param.fill.color
      }),
      stroke: new znxdmap.style.Stroke({
        color: opt_option.image.param.stroke.color,
        width: opt_option.image.param.stroke.width
      })
    });
  } else if (opt_option.image.type == "icon") {
    image = new ol.style.Icon({
      size: opt_option.image.param.size,
      src: opt_option.image.param.src
    });
  } else {
    console.log("imageType error:" + opt_option.image.type);
  }

  style = new znxdmap.style.Style({
    fill: new znxdmap.style.Fill({
      color: opt_option.fill.color
    }),
    stroke: new znxdmap.style.Stroke({
      color: opt_option.stroke.color,
      width: opt_option.stroke.width
    }),
    image: image,
    text: new znxdmap.style.Text({
      font: opt_option.text.font,
      fill: new znxdmap.style.Fill({
        color: opt_option.text.fill.color
      }),
      stroke: new znxdmap.style.Stroke({
        color: opt_option.text.stroke.color,
        width: opt_option.text.stroke.width
      })
    })
  });
  return style;
};
/** @api {set} forEachFlashMarkerAtPixel forEachFlashMarkerAtPixel
    @apiVersion 0.1.0
    @apiGroup Map
    @apiDescription 根据pixel像素点缓冲10px查找flashmarker.
    @apiParam {Array} markers 要查找的markers
    @apiParam {Array} pixel 像素点
*/


ZNXDMap.prototype.forEachFlashMarkerAtPixel = function (markers, pixel) {
  var buffer = 10; //px

  for (var i = 0; i < markers.length; i++) {
    var tempixel = this.map.getPixelFromCoordinate(markers[i].lnglat);

    if (Math.abs(tempixel[0] - pixel[0]) < buffer && Math.abs(tempixel[1] - pixel[1]) < buffer) {
      return markers[i];
    }
  }

  return null;
};
/** @api {set} addLayer addLayer
    @apiVersion 0.1.0
    @apiGroup Map
    @apiDescription 添加OL图层.
    @apiParam {object} _layer vector图层
*/


ZNXDMap.prototype.addLayer = function (_layer) {
  this.map.addLayer(_layer);
};
/** @api {set} removeLayer removeLayer
    @apiVersion 0.1.0
    @apiGroup Map
    @apiDescription 移除OL图层.
    @apiParam {object} _layer vector图层
*/


ZNXDMap.prototype.removeLayer = function (_vector) {
  this.map.removeLayer(_vector);
};
/** @api {set} render render
    @apiVersion 0.1.0
    @apiGroup Map
    @apiDescription 地图渲染器，配合postcompose，precompose使用，用于动画效果.
*/


ZNXDMap.prototype.render = function () {
  this.map.render();
};
/** @api {set} addOverlay addOverlay
    @apiVersion 0.1.0
    @apiGroup Map
    @apiDescription 添加覆盖图层.
    @apiParam {object} overlayer 覆盖图层
*/


ZNXDMap.prototype.addOverlay = function (_overlay) {
  this.map.addOverlay(_overlay);
};
/** @api {set} removeOverlay removeOverlay
    @apiVersion 0.1.0
    @apiGroup Map
    @apiDescription 移除覆盖图层.
    @apiParam {object} overlayer 覆盖图层
*/


ZNXDMap.prototype.removeOverlay = function (_layer) {
  this.map.removeOverlay(_layer);
};
/** @api {set} addLayers addLayers
    @apiVersion 0.1.0
    @apiGroup Map
    @apiDescription 添加多个图层.
    @apiParam {Array} _layers 图层数组
*/


ZNXDMap.prototype.addLayers = function (_layers) {
  var t = this;
  $.each(_layers, function (i, o) {
    t.map.addLayer(o);
  });
};
/** @api {get} getLayerByName getLayerByName
    @apiVersion 0.1.0
    @apiGroup Map
    @apiDescription 根据图层名称获取图层，返回图层实例.
    @apiParam {Sting} _name 图层名称
*/


ZNXDMap.prototype.getLayerByName = function (_name) {
  var layer;
  this.map.getLayers().forEach(function (e) {
    if (e.get("name") == _name) {
      layer = e;
      return;
    }
  });
  return layer;
};

exports.default = ZNXDMap;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/** @api {OPTIONS} ZNXDTool Tool-交互工具
    @apiVersion 0.1.0
    @apiGroup 交互工具类

    @apiDescription 本类用于绘制，编辑，测量等交互操作.

    @apiExample 使用方法:
	new ZNXDWEBGIS.Tool.Tag({ map: map });
	new ZNXDWEBGIS.Tool.Measure({ map: map });
	new ZNXDWEBGIS.Tool.Edit({// url+"/"+workspace:注意这个值必须为创建工作区时的命名空间URI
		map: this.map,
		url: "http://xxxx:8080/geoserver",
		workspace: "znxd",
		layerName: "area",
		srsName: "EPSG:4326",
		uploadType: "polygon"
	});
	
    @apiParam {ZNXDMap} map 实例化map.
    @apiParam {function} initTool 根据参数加载绘制功能.
    @apiParam {function} finishDrawing 绘制强制结束.
    @apiParam {function} onDraw 绘制事件绑定监听：drawstart，drawend.
    @apiParam {function} unDraw 绘制事件解除绑定监听：drawstart，drawend.
    @apiParam {function} getFeatures 获取绘制vector.
    @apiParam {function} removeAll 清除全部.
    @apiParam {function} offDraw 关闭绘制.
    @apiParam {function} setType 设置绘制类型.
    @apiParam {function} getType 获取绘制类型.
    @apiParam {function} setModify 设置编辑并继续绘制类型.
    @apiParam {function} getModify 获得编辑状态.
    @apiParam {function} onModify 开启编辑.
    @apiParam {function} unModify 关闭编辑.
*/

/** @api {OPTIONS} Tag Tag-绘制
    @apiVersion 0.1.0
    @apiGroup 交互工具类
    @apiDescription 用于临时绘制工具.
    @apiParam {ALL} all 继承自ZNXDTool的方法
*/

/** @api {OPTIONS} Edit Edit-编辑
    @apiVersion 0.1.0
    @apiGroup 交互工具类
    @apiDescription 用于与服务shape或数据库交互.
    @apiParam {ALL} all 继承自ZNXDTool的方法
    @apiParam {function} upload 保存到源库
*/

/** @api {OPTIONS} Measure Measure-测量
    @apiVersion 0.1.0
    @apiGroup 交互工具类
    @apiDescription 用于测量工具.
    @apiParam {ALL} all 继承自ZNXDTool的方法
    @apiParam {function} formatArea 传递polygon返回面积
    @apiParam {function} formatLength 传递line返回长度
*/
var ZNXDTool = function ZNXDTool(opt_option) {
  if (!opt_option || !opt_option.map) return console.log("At least you need to initialize map.");

  var _this = this;

  this.func = 'Tool';
  this.map = opt_option.map;
  this.style = opt_option.style ? opt_option.style : new znxdmap.style.Style({
    fill: new znxdmap.style.Fill({
      color: 'rgba(0, 255, 10, 0.6)'
    }),
    stroke: new znxdmap.style.Stroke({
      color: '#006400',
      width: 3
    }),
    image: new znxdmap.style.Circle({
      radius: 7,
      fill: new znxdmap.style.Fill({
        color: '#ffcc33'
      })
    })
  });
  this.source = new znxdmap.source.Vector();
  this.modifyActive = false; //默认关闭编辑

  this.modify = new znxdmap.interaction.Modify({
    source: _this.source
  });
  this.vector = new znxdmap.layer.Vector({
    source: _this.source,
    style: _this.style,
    zIndex: 10000
  });

  _this.map.addLayer(this.vector);

  this.typeArr = ['Point', 'LineString', 'Polygon', 'Circle'];

  this.initTool = function (type) {
    _this.type = type ? type : 'Point';

    if (_this.typeArr.indexOf(_this.type) > -1) {} else {
      return console.log("Unknow type:" + type);
    }

    if (_this.draw) _this.map.map.removeInteraction(_this.draw);
    if (_this.draw) _this.map.map.removeInteraction(_this.snap);

    if (_this.modifyActive) {
      _this.map.map.addInteraction(_this.modify);
    } else {
      _this.map.map.removeInteraction(_this.modify);
    }

    _this.draw = new znxdmap.interaction.Draw({
      source: _this.source,
      type: _this.type
    });

    _this.map.map.addInteraction(_this.draw);

    _this.snap = new znxdmap.interaction.Snap({
      source: _this.source
    });

    _this.map.map.addInteraction(_this.snap);
  };

  return this;
};
/**
 * 绘制强制结束
 */


ZNXDTool.prototype.finishDrawing = function () {
  this.draw.finishDrawing();
};
/**
 * 绘制事件绑定监听：drawstart，drawend
 */


ZNXDTool.prototype.onDraw = function (name, func) {
  if (typeof func === "function") {
    this.draw.on(name, func);
  }
};
/**
 * 绘制事件解除绑定监听：drawstart，drawend
 */


ZNXDTool.prototype.unDraw = function (name, func) {
  if (typeof func === "function") {
    this.draw.un(name, func);
  }
};
/**
 * 获取vector
 */


ZNXDTool.prototype.getFeatures = function () {
  return this.source.getFeatures();
};
/**
 * 清除
 */


ZNXDTool.prototype.removeAll = function () {
  this.source.clear();

  if (this.measureTooltipArr && this.measureTooltipArr.length > 0) {
    var arr = this.measureTooltipArr;

    for (var i = 0, len = arr.length; i < len; i++) {
      this.map.removeOverlay(arr[i]);
    }

    this.measureTooltipArr.length = 0;
    this.createMeasureTooltip();
  }

  return;
};
/**
 * 关闭绘制
 */


ZNXDTool.prototype.offDraw = function () {
  if (this.draw) this.map.map.removeInteraction(this.draw);
  if (this.draw) this.map.map.removeInteraction(this.snap);
  if (this.helpTooltip) this.map.removeOverlay(this.helpTooltip);
  if (this.measureTooltip) this.map.removeOverlay(this.measureTooltip);
};
/**
 * 设置绘制类型
 * @param 'Point','LineString','Polygon','Circle'
 */


ZNXDTool.prototype.setType = function (type) {
  if (!type) return console.log("Please setType");

  if (this.typeArr.indexOf(type) > -1) {
    this.type = type;
    this.initTool(type);
  } else {
    console.log("Unknow type:" + type);
  }
};
/**
 * @return 'Point','LineString','Polygon','Circle'
 */


ZNXDTool.prototype.getType = function () {
  return this.type;
};
/**
 * 设置编辑并继续绘制类型
 * @param modify boolean
 * @param type 'Point','LineString','Polygon','Circle'
 */


ZNXDTool.prototype.setModify = function (modify, type) {
  this.modifyActive = modify;
  if (!type) return this.initTool();

  if (this.typeArr.indexOf(type) > -1) {
    this.type = type;
    this.initTool(type);
  } else {
    console.log("Unknow type:" + type);
  }
};
/**
 * @return boolean
 */


ZNXDTool.prototype.getModify = function () {
  return this.modifyActive;
};
/**
 * 开启编辑
 */


ZNXDTool.prototype.onModify = function () {
  if (this.modifyActive) return;
  this.modifyActive = true;
  this.map.map.addInteraction(this.modify);
};
/**
 * 关闭编辑
 */


ZNXDTool.prototype.unModify = function () {
  if (!this.modifyActive) return;
  this.modifyActive = false;
  this.map.map.removeInteraction(this.modify);
};
/**
 * 临时绘制，不保存
 */


ZNXDTool.Tag = function (opt_option) {
  if (!opt_option || !opt_option.map) return console.log("At least you need to initialize map.");
  ZNXDTool.call(this, opt_option);
  this.func = opt_option.func || 'Tag';
  return this;
};

ZNXDTool.Tag.prototype = Object.create(ZNXDTool.prototype);
ZNXDTool.Tag.prototype.constructor = ZNXDTool.Tag;
/**
 * 编辑工具，保存到库
 */

ZNXDTool.Edit = function (opt_option) {
  if (!opt_option || !opt_option.map) return console.log("At least you need to initialize map.");
  ZNXDTool.call(this, opt_option);
  this.func = opt_option.func || 'Edit';
  this.url = opt_option.url;
  this.workspace = opt_option.workspace;
  this.layerName = opt_option.layerName;
  this.uploadType = opt_option.uploadType;
  this.srsName = opt_option.srsName ? opt_option.srsName : "EPSG:4326";
  if (!(this.url && this.workspace && this.layerName)) return console.log("you need to initialize url/workspace/layerName.");
  if (this.uploadType !== "point" && this.uploadType !== "line" && this.uploadType !== "polygon") return console.log("uploadType error");
  return this;
};

ZNXDTool.Edit.prototype = Object.create(ZNXDTool.prototype);
ZNXDTool.Edit.prototype.constructor = ZNXDTool.Edit;
/**
 * 上传保存更新删除features
 * @param 	type="created/modified/deleted"
 * 			features=[feature,feature]
 * 			geometryName="the_geom/geom/Shape"
 * 			geomType="point/line/polygon"
 */

ZNXDTool.Edit.prototype.upload = function (type, features, geometryName) {
  if (typeof features == "undefined") features = this.source.getFeatures();
  if (!Array.isArray(features)) return this.$message.warning('features is not an array.');
  if (features.length == 0) return this.$message.warning('The length of features is 0.');

  var _this = this;

  var WFSTSerializer = new znxdmap.format.WFS(),
      featObject;

  if (type == "modified") {
    for (var m = 0; m < features.length; m++) {
      features[m].getGeometry().applyTransform(function (flatCoordinates, flatCoordinates2, stride) {
        for (var j = 0; j < flatCoordinates.length; j += stride) {
          var y = flatCoordinates[j];
          var x = flatCoordinates[j + 1];
          flatCoordinates[j] = x;
          flatCoordinates[j + 1] = y;
        }
      });
      features[m].setGeometryName(geometryName);
    }

    featObject = WFSTSerializer.writeTransaction(null, features, null, {
      featureType: _this.layerName,
      featureNS: _this.url + "/" + _this.workspace,
      // 注意这个值必须为创建工作区时的命名空间URI
      srsName: _this.srsName
    });
  } else if (type == "created") {
    var newfs = [];

    for (var m = 0; m < features.length; m++) {
      var geometry = features[m].getGeometry().clone();
      geometry.applyTransform(function (flatCoordinates, flatCoordinates2, stride) {
        for (var j = 0; j < flatCoordinates.length; j += stride) {
          var y = flatCoordinates[j];
          var x = flatCoordinates[j + 1];
          flatCoordinates[j] = x;
          flatCoordinates[j + 1] = y;
        }
      }); // 设置feature对应的属性，这些属性是根据数据源的字段来设置的

      var newFeature = new znxdmap.Feature();
      newFeature.setId(0);

      for (var p in features[m].getProperties()) {
        if (p !== "geometry") newFeature.set(p, features[m].getProperties()[p]);
      }

      newFeature.setGeometryName(geometryName);
      newFeature.set(geometryName, null);

      if (_this.uploadType == "point") {
        newFeature.setGeometry(new znxdmap.geom.MultiPoint([geometry.getCoordinates()]));
      } else if (_this.uploadType == "line") {
        newFeature.setGeometry(new znxdmap.geom.MultiLineString([geometry.getCoordinates()]));
      } else if (_this.uploadType == "polygon") {
        newFeature.setGeometry(new znxdmap.geom.MultiPolygon([geometry.getCoordinates()]));
      } else {
        return console.log("geomType error：" + _this.type);
      }

      newfs.push(newFeature);
    }

    featObject = WFSTSerializer.writeTransaction(newfs, null, null, {
      featureType: _this.layerName,
      featureNS: _this.url + "/" + _this.workspace,
      // 注意这个值必须为创建工作区时的命名空间URI
      srsName: _this.srsName
    });
  } else if (type == "deleted") {
    for (var m = 0; m < features.length; m++) {
      features[m].getGeometry().applyTransform(function (flatCoordinates, flatCoordinates2, stride) {
        for (var j = 0; j < flatCoordinates.length; j += stride) {
          var y = flatCoordinates[j];
          var x = flatCoordinates[j + 1];
          flatCoordinates[j] = x;
          flatCoordinates[j + 1] = y;
        }
      });
      features[m].setGeometryName(geometryName);
    }

    featObject = WFSTSerializer.writeTransaction(null, null, features, {
      featureType: _this.layerName,
      featureNS: _this.url + "/" + _this.workspace,
      // 注意这个值必须为创建工作区时的命名空间URI
      srsName: _this.srsName
    });
  } else {
    return this.$message.warning('type：created/modified/deleted');
  } // 转换为xml内容发送到服务器端


  var serializer = new XMLSerializer();
  var featString = serializer.serializeToString(featObject);
  var request = new XMLHttpRequest();
  request.open("POST", _this.url + "/wfs?service=wfs"); // 指定内容为xml类型

  request.setRequestHeader("Content-Type", "text/xml");
  request.send(featString);
}; // ZNXDTool.Edit.prototype.findLayerBy = function(){
// 	var _this = this;
// 	ZNXDUtil.POST(_this.url + "/ows", { 
// 		type: "geo", 
// 		obj: {
// 			service: "WFS",
// 			version: "1.0.0",
// 			request: "GetFeature",
// 			typename: _this.workspace + ":" + _this.layerName,
// 			srsName: ZNXDConfig.toProjection,
// 			outputFormat: "application/json"
// 		} 
// 	},function(resjson) {
// 		var fs = new znxdmap.format.GeoJSON().readFeatures(resjson);
// 		_this.source.addFeatures(fs);
// 	});
// }
//可以重写子类方法
//ZNXDTool.Edit.prototype.unModify = function(){
//	console.log(111);
//}

/**
 * 测量工具
 */


ZNXDTool.Measure = function (opt_option) {
  if (!opt_option || !opt_option.map) return console.log("At least you need to initialize map.");
  ZNXDTool.call(this, opt_option);
  this.func = opt_option.func || 'Measure';
  this.typeArr = ['LineString', 'Polygon'];
  this.measureTooltipArr = [];

  var _this = this;

  this.initTool = function (type) {
    _this.type = type ? type : 'LineString';

    if (_this.typeArr.indexOf(_this.type) > -1) {} else {
      return console.log("Unknow type:" + type);
    }

    if (_this.draw) _this.map.map.removeInteraction(_this.draw);
    if (_this.draw) _this.map.map.removeInteraction(_this.snap);

    if (_this.modifyActive) {
      _this.map.map.addInteraction(_this.modify);
    } else {
      _this.map.map.removeInteraction(_this.modify);
    }

    _this.draw = new znxdmap.interaction.Draw({
      source: _this.source,
      type: _this.type
    });

    _this.map.map.addInteraction(_this.draw);

    _this.snap = new znxdmap.interaction.Snap({
      source: _this.source
    });

    _this.map.map.addInteraction(_this.snap);

    _this.listener, _this.sketch, _this.helpTooltipElement, _this.helpTooltip, _this.measureTooltipElement, _this.measureTooltip;
    _this.continuePolygonMsg = '点击继续测量';
    _this.continueLineMsg = '点击继续测量';
    var temp = _this;

    _this.draw.on('drawstart', function (evt) {
      // set sketch
      temp.sketch = evt.feature;
      var tooltipCoord = evt.coordinate;
      var _temp = temp;
      temp.listener = temp.sketch.getGeometry().on('change', function (evt) {
        var mgeom = evt.target;
        var output;

        if (mgeom instanceof znxdmap.geom.Polygon) {
          output = _temp.formatArea(mgeom);
          tooltipCoord = mgeom.getInteriorPoint().getCoordinates();
        } else if (mgeom instanceof znxdmap.geom.LineString) {
          output = _temp.formatLength(mgeom);
          tooltipCoord = mgeom.getLastCoordinate();
        }

        _temp.measureTooltipElement.innerHTML = output;

        _temp.measureTooltip.setPosition(tooltipCoord);
      });
    }, _this);

    _this.draw.on('drawend', function () {
      temp.measureTooltipElement.className = 'tooltip tooltip-static';
      temp.measureTooltip.setOffset([0, -7]); // unset sketch

      temp.sketch = null; // unset tooltip so that a new one can be created

      temp.measureTooltipElement = null;
      temp.createMeasureTooltip();
      znxdmap.Observable.unByKey(temp.listener);
    }, _this);

    _this.map.on('pointermove', function (evt, _this) {
      if (evt.dragging) {
        return;
      }

      var helpMsg = '单击开始';

      if (temp.sketch) {
        var mgeom = temp.sketch.getGeometry();

        if (mgeom instanceof znxdmap.geom.Polygon) {
          helpMsg = temp.continuePolygonMsg;
        } else if (mgeom instanceof znxdmap.geom.LineString) {
          helpMsg = temp.continueLineMsg;
        }
      }

      temp.helpTooltipElement.innerHTML = helpMsg;
      temp.helpTooltip.setPosition(evt.coordinate);
      temp.helpTooltipElement.classList.remove('hidden');
    });

    _this.map.map.getViewport().addEventListener('mouseout', function () {
      temp.helpTooltipElement.classList.add('hidden');
    });

    _this.createMeasureTooltip();

    _this.createHelpTooltip();
  };

  return this;
};

ZNXDTool.Measure.prototype = Object.create(ZNXDTool.prototype);
ZNXDTool.Measure.prototype.constructor = ZNXDTool.Measure;

ZNXDTool.Measure.prototype.formatLength = function (line) {
  var length = znxdmap.sphere.getLength(line, {
    projection: "EPSG:4326"
  });
  var output;

  if (length > 1000) {
    output = Math.round(length / 1000 * 100) / 100 + ' ' + 'km'; //换算成KM单位
  } else {
    output = Math.round(length * 100) / 100 + ' ' + 'm'; //m为单位
  }

  return output;
};

ZNXDTool.Measure.prototype.formatArea = function (polygon) {
  var area = znxdmap.sphere.getArea(polygon, {
    projection: "EPSG:4326"
  });
  return (area * 0.0015).toFixed(6) + ' ' + '亩';
};
/**
 * Creates a new help tooltip
 */


ZNXDTool.Measure.prototype.createHelpTooltip = function () {
  var _this = this;

  if (_this.helpTooltipElement) {
    _this.helpTooltipElement.parentNode.removeChild(_this.helpTooltipElement);
  }

  _this.helpTooltipElement = document.createElement('div');
  _this.helpTooltipElement.className = 'tooltip hidden';
  _this.helpTooltip = new znxdmap.Overlay({
    element: _this.helpTooltipElement,
    offset: [15, 0],
    positioning: 'center-left'
  });

  _this.map.addOverlay(_this.helpTooltip);
};
/**
 * Creates a new measure tooltip
 */


ZNXDTool.Measure.prototype.createMeasureTooltip = function () {
  var _this = this;

  if (_this.measureTooltipElement) {
    _this.measureTooltipElement.parentNode.removeChild(_this.measureTooltipElement);
  }

  _this.measureTooltipElement = document.createElement('div');
  _this.measureTooltipElement.className = 'tooltip tooltip-measure';
  _this.measureTooltip = new znxdmap.Overlay({
    element: _this.measureTooltipElement,
    offset: [0, -15],
    positioning: 'bottom-center'
  });

  _this.measureTooltipArr.push(_this.measureTooltip);

  _this.map.addOverlay(_this.measureTooltip);
};

exports.default = ZNXDTool;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// let jsts = require("jsts");

/**
 * Created by Administrator on 2018-10-19.
 */

/** @api {OPTIONS} ZNXDJSTS jsts-分析
    @apiVersion 0.1.0
    @apiGroup 空间分析类

    @apiDescription 本类用于边界分析、缓冲区分析、凸壳分析、联合分析、相交分析、差异分析等空间分析

    @apiExample 使用方法:
    ZNXDWEBGIS.JSTS.boundary(feature.getGeometry());
    ZNXDWEBGIS.JSTS.buffer(feature.getGeometry(), 0.6);
    等等

	@apiParam {function} boundary 边界分析.
	@apiParam {function} buffer 缓冲分析.
	@apiParam {function} centroid 质心分析.
    @apiParam {function} convexHull 凸壳分析.
	@apiParam {function} union 联合分析.
	@apiParam {function} intersection 相交分析.
    @apiParam {function} difference 差异分析.
	@apiParam {function} symDifference 对称差异分析.
	@apiParam {function} splitPolygon 面切割.
*/

/** @api {set} boundary boundary-边界分析
    @apiVersion 0.1.0
    @apiGroup 空间分析类
    @apiDescription 边界分析
    @apiParam {geometry} geometry feature.geometry
    @apiSuccess {geometry} geometry feature.geometry(分析结果)
*/

/** @api {set} buffer buffer-缓冲分析
    @apiVersion 0.1.0
    @apiGroup 空间分析类
    @apiDescription 缓冲分析
    @apiParam {geometry} geometry feature.geometry
    @apiParam {String} num 缓、缓冲区半径（千米）
    @apiSuccess {geometry} geometry feature.geometry(分析结果)
*/

/** @api {set} centroid centroid-质心分析
    @apiVersion 0.1.0
    @apiGroup 空间分析类
    @apiDescription 质心分析
    @apiParam {geometry} geometry feature.geometry
    @apiSuccess {geometry} geometry feature.geometry(分析结果)
*/

/** @api {set} convexHull convexHull-凸壳分析
    @apiVersion 0.1.0
    @apiGroup 空间分析类
    @apiDescription 凸壳分析
    @apiParam {geometry} geometry feature.geometry
    @apiSuccess {geometry} geometry feature.geometry(分析结果)
*/

/** @api {set} union union-联合分析
    @apiVersion 0.1.0
    @apiGroup 空间分析类
    @apiDescription 联合分析
    @apiParam {geometry} geometryA featureA.geometry
    @apiParam {geometry} geometryB featureB.geometry
    @apiSuccess {geometry} geometry feature.geometry(分析结果)
*/

/** @api {set} intersection intersection-相交分析
    @apiVersion 0.1.0
    @apiGroup 空间分析类
    @apiDescription 相交分析
    @apiParam {geometry} geometryA featureA.geometry
    @apiParam {geometry} geometryB featureB.geometry
    @apiSuccess {geometry} geometry feature.geometry(分析结果)
*/

/** @api {set} difference difference-差异分析
    @apiVersion 0.1.0
    @apiGroup 空间分析类
    @apiDescription 差异分析,默认取A-B
    @apiParam {geometry} geometryA featureA.geometry
    @apiParam {geometry} geometryB featureB.geometry
    @apiSuccess {geometry} geometry feature.geometry(分析结果)
*/

/** @api {set} symDifference symDifference-对称差异
    @apiVersion 0.1.0
    @apiGroup 空间分析类
    @apiDescription 对称差异
    @apiParam {geometry} geometryA featureA.geometry
    @apiParam {geometry} geometryB featureB.geometry
    @apiSuccess {geometry} geometry feature.geometry(分析结果)
*/

/** @api {set} splitPolygon splitPolygon-面切割
    @apiVersion 0.1.0
    @apiGroup 空间分析类
    @apiParam {geometry} geometryA featureA.geometry
    @apiParam {geometry} geometryB featureB.geometry
    @apiDescription 面切割，默认取A:面，B:线
    @apiSuccess {geometry} geometry feature.geometry(分析结果)
*/
var ZNXDJSTS = {
  // parser: new jsts.io.OL3Parser(),
  // read: function read(geometry) {
  //   return this.parser.read(geometry);
  // },
  // write: function write(jsts_geometry) {
  //   return this.parser.write(jsts_geometry);
  // },
  // //边界
  // boundary: function boundary(geometry) {
  //   var jsts_geom = this.read(geometry);
  //   return this.write(jsts_geom.getBoundary());
  // },
  // //缓冲
  // buffer: function buffer(geometry, num) {
  //   var jsts_geom = this.read(geometry);
  //   return this.write(jsts_geom.buffer(num));
  // },
  // //质心
  // centroid: function centroid(geometry) {
  //   var jsts_geom = this.read(geometry);
  //   return this.write(jsts_geom.getCentroid());
  // },
  // //凸壳
  // convexHull: function convexHull(geometry) {
  //   var jsts_geom = this.read(geometry);
  //   return this.write(jsts_geom.convexHull());
  // },
  // //联合
  // union: function union(geometryA, geometryB) {
  //   var jsts_geomA = this.read(geometryA);
  //   var jsts_geomB = this.read(geometryB);
  //   return this.write(jsts_geomA.union(jsts_geomB));
  // },
  // //相交
  // intersection: function intersection(geometryA, geometryB) {
  //   var jsts_geomA = this.read(geometryA);
  //   var jsts_geomB = this.read(geometryB);
  //   return this.write(jsts_geomA.intersection(jsts_geomB));
  // },
  // //差异
  // difference: function difference(geometryA, geometryB) {
  //   var jsts_geomA = this.read(geometryA);
  //   var jsts_geomB = this.read(geometryB);
  //   return this.write(jsts_geomA.difference(jsts_geomB));
  // },
  // //对称差异
  // symDifference: function symDifference(geometryA, geometryB) {
  //   var jsts_geomA = this.read(geometryA);
  //   var jsts_geomB = this.read(geometryB);
  //   return this.write(jsts_geomA.symDifference(jsts_geomB));
  // },
  // //面切割
  // splitPolygon: function splitPolygon(geometryA, geometryB) {
  //   var k = this.read(geometryA);
  //   var l = k.getBoundary();
  //   var a = this.read(geometryB);

  //   if (!l.intersects(a)) {
  //     return [];
  //   }

  //   var r = new jsts.geom.GeometryFactory();
  //   var b = [];

  //   for (var o = 0; o < l.getNumGeometries(); o++) {
  //     b.push(l.getGeometryN(o));
  //   }

  //   for (var o = 0; o < a.getNumGeometries(); o++) {
  //     b.push(a.getGeometryN(o));
  //   }

  //   var f = new jsts.geom.MultiLineString(b, r);
  //   var n = r.createPoint(f.getCoordinate());
  //   var e = f.union(n);
  //   var m = new jsts.operation.polygonize.Polygonizer();
  //   m.add(e);
  //   var t = m.getPolygons();
  //   var j = [],
  //       inters;

  //   for (var o = 0, q = t.size(); o < q; o++) {
  //     var g = t.get(o);

  //     try {
  //       inters = g.intersection(k);
  //     } catch (s) {
  //       try {
  //         inters = k.intersection(g);
  //       } catch (h) {
  //         inters = g;
  //       }
  //     }

  //     if (inters instanceof jsts.geom.Polygon && inters.getArea() > 1e-10) {
  //       j.push(this.parser.write(inters));
  //     }
  //   }

  //   return j;
  // }
};
// ZNXDJSTS.parser.inject(znxdmap.geom.Point, znxdmap.geom.LineString, znxdmap.geom.LinearRing, znxdmap.geom.Polygon, znxdmap.geom.MultiPoint, znxdmap.geom.MultiLineString, znxdmap.geom.MultiPolygon, znxdmap.geom.Circle);
exports.default = ZNXDJSTS;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/** @api {OPTIONS} ZNXDWPS 用于WPS服务（可拓展）
    @apiVersion 0.1.0
    @apiGroup WPS服务

    @apiDescription 本类用于请求GISServer发布的WPS服务，通过后端进行数据处理并返回处理结果.

    @apiExample 使用方法:
	wps = new ZNXDWEBGIS.WPS("http://xxxx:xxxx/geoserver/ows?service=WPS&version=1.0.0")
	

    @apiParam {String} url GISServer发布的WPS服务地址.
	

	@apiParam {function} JTS_area 计算面积.
	@apiParam {function} JTS_boundary 计算边界点.
*/

/** @api {set} JTS_area JTS_area-计算面积
    @apiVersion 0.1.0
    @apiGroup WPS服务
    @apiDescription 根据geometry返回此图形面积.
    @apiParam {geometry} geometry feature.geometry
    @apiParam {function} callback 回调函数
*/

/** @api {set} JTS_boundary JTS_boundary-计算边界点
    @apiVersion 0.1.0
    @apiGroup WPS服务
    @apiDescription 根据geometry返回此图形边界点坐标.
    @apiParam {geometry} geometry feature.geometry
    @apiParam {function} callback 回调函数
*/
var ZNXDWPS = function ZNXDWPS(url) {
  if (!url) return;
  this.url = url;

  this.JTS = function () {
    this.url = url;
  };

  return this;
};

ZNXDWPS.prototype.post = function (object, callback) {
  fetch(this.url, {
    method: 'POST',
    headers: {
      "Content-Type": 'application/json'
    },
    body: object
  }).then(function (res) {
    return res.json();
  }).then(function (resjson) {
    callback(resjson);
  });
};

ZNXDWPS.prototype.JTS_area = function (geometry, callback) {
  var geomWKT = new znxdmap.format.WKT();
  var wktData = geomWKT.writeGeometry(geometry);
  var object = '<?xml version="1.0" encoding="UTF-8"?><wps:Execute version="1.0.0" service="WPS" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.opengis.net/wps/1.0.0" xmlns:wfs="http://www.opengis.net/wfs" xmlns:wps="http://www.opengis.net/wps/1.0.0" xmlns:ows="http://www.opengis.net/ows/1.1" xmlns:gml="http://www.opengis.net/gml" xmlns:ogc="http://www.opengis.net/ogc" xmlns:wcs="http://www.opengis.net/wcs/1.1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xsi:schemaLocation="http://www.opengis.net/wps/1.0.0 http://schemas.opengis.net/wps/1.0.0/wpsAll.xsd">' + '<ows:Identifier>JTS:area</ows:Identifier>' + '<wps:DataInputs>' + '<wps:Input>' + '<ows:Identifier>geom</ows:Identifier>' + '<wps:Data>' + '<wps:ComplexData mimeType="application/wkt"><![CDATA[' + wktData + ']]></wps:ComplexData>' + '</wps:Data>' + '</wps:Input>' + '</wps:DataInputs>' + '<wps:ResponseForm>' + '<wps:RawDataOutput mimeType="application/json">' + '<ows:Identifier>result</ows:Identifier>' + '</wps:RawDataOutput>' + '</wps:ResponseForm>' + '</wps:Execute>';
  this.post(object, function (resjson) {
    if (callback) {
      callback(resjson);
    }
  });
};

ZNXDWPS.prototype.JTS_boundary = function (geometry, callback) {
  var geomWKT = new znxdmap.format.WKT();
  var wktData = geomWKT.writeGeometry(geometry);
  var object = '<?xml version="1.0" encoding="UTF-8"?><wps:Execute version="1.0.0" service="WPS" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.opengis.net/wps/1.0.0" xmlns:wfs="http://www.opengis.net/wfs" xmlns:wps="http://www.opengis.net/wps/1.0.0" xmlns:ows="http://www.opengis.net/ows/1.1" xmlns:gml="http://www.opengis.net/gml" xmlns:ogc="http://www.opengis.net/ogc" xmlns:wcs="http://www.opengis.net/wcs/1.1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xsi:schemaLocation="http://www.opengis.net/wps/1.0.0 http://schemas.opengis.net/wps/1.0.0/wpsAll.xsd">' + '<ows:Identifier>JTS:boundary</ows:Identifier>' + '<wps:DataInputs>' + '<wps:Input>' + '<ows:Identifier>geom</ows:Identifier>' + '<wps:Data>' + '<wps:ComplexData mimeType="application/wkt"><![CDATA[' + wktData + ']]></wps:ComplexData>' + '</wps:Data>' + '</wps:Input>' + '</wps:DataInputs>' + '<wps:ResponseForm>' + '<wps:RawDataOutput mimeType="application/json">' + '<ows:Identifier>result</ows:Identifier>' + '</wps:RawDataOutput>' + '</wps:ResponseForm>' + '</wps:Execute>';
  this.post(object, function (resjson) {
    if (callback) {
      callback(resjson);
    }
  });
};

exports.default = ZNXDWPS;

/***/ })
/******/ ]);