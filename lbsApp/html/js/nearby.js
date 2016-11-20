/**
 * Created by perry on 16/11/14.
 */
var isiPhone = navigator.userAgent.toLocaleLowerCase().match(/iPhone/i);
var map = new AMap.Map('container', {
  zoom: 15,
  resizeEnable: true
});
var walking;
var locationIcon = '<div class="locationIcon"><img src="./location.png"> </div>';
map.plugin(["AMap.ToolBar"], function () {
  //加载工具条
  var tool = new AMap.ToolBar();
  map.addControl(tool);
});

var locationComplete = function (data) {
  map.clearMap();
  doSearch([data.position.lng, data.position.lat]);
};

var onError = function () {
  alert('定位失败，请在手机上开启定位：设置->隐私->定位服务－>LBSAPP->使用定位期间－－打开');
};

AMap.service('AMap.Walking', function () {
  walking = new AMap.Walking({
    map: map
  });
});
map.plugin('AMap.Geolocation', function () {
  geolocation = new AMap.Geolocation({
    enableHighAccuracy: true, //是否使用高精度定位，默认:true
    timeout: 10000, //超过10秒后停止定位，默认：无穷大
    maximumAge: 0, //定位结果缓存0毫秒，默认：0
    convert: true, //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
    showButton: true, //显示定位按钮，默认：true
    buttonPosition: 'LB', //定位按钮停靠位置，默认：'LB'，左下角
    buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
    showMarker: true, //定位成功后在定位到的位置显示点标记，默认：true
    showCircle: true, //定位成功后用圆圈表示定位精度范围，默认：true
    panToLocation: true, //定位成功后将定位到的位置作为地图中心点，默认：true
    zoomToAccuracy: true, //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
    buttonDom: locationIcon
  });
  map.addControl(geolocation);
  AMap.event.addListener(geolocation, 'complete', locationComplete); //返回定位信息
  AMap.event.addListener(geolocation, 'error', onError); //返回定位出错信息
});

function _closeInfoWindow() {
  map.clearInfoWindow();
}

// TODO:
// 1）点击marker，展示详细信息的infowindow
// 2) 点击marker，进行路径规划和导航
function doSearch(center) {
  AMap.service(["AMap.PlaceSearch"], function () {
    var placeSearch = new AMap.PlaceSearch({ //构造地点查询类
      pageSize: 10,
      extension: 'base',
      type: '200300|200301|200302|200303'
    });

    new AMap.Marker({
      position: center,
      map: map,
      content: '<div class="loc_circle"><img class="loc_img" src="./yuandian.png"></div>'
    });

    placeSearch.searchNearBy('卫生间', center, 2000, function (status, result) {
      if (result.info === 'OK' && status === 'complete') {
        var pois = result.poiList.pois;
        pois.forEach(function (poi) {
          var divStr = '<div class="makerStyle">' + poi.distance + '米</div>';
          var info = '<div class="infoWindow"><div class="info_title">卫生间</div>'
            + '<div class="info_name">名称: ' + poi.name + '</div>'
            + '<div class="info_dis">距您: ' + '<span class="dis_span">' + poi.distance + '米</span>'
            + '</div>' + '<div class="info_address">地址: ' + poi.address + '</div>'
            + '<div class="info_type">类型: ' + (poi.type || '卫生间') + '</div>'
            + '<div class="info_arrow"></div>';
          if (isiPhone && isiPhone.length) {
            info += '<div class="info_close" ontouchstart="_closeInfoWindow()"><img src="close_blue.png" style="" /></div>' + '</div>';
          } else {
            info += '<div class="info_close" onclick="_closeInfoWindow()"><img src="close_blue.png" style="" /></div>' + '</div>';
          }
          var marker = new AMap.Marker({
            position: poi.location,
            title: poi['name'],
            map: map,
            content: divStr,
            offset: new AMap.Pixel(10, -25)
          });

          function showInfo() {
            var infowindow = new AMap.InfoWindow({
              content: info,
              offset: new AMap.Pixel(40, -35),
              isCustom: true
            });
            infowindow.open(map, poi.location);
            //步行路径规划
            walking.clear();
            var start = new AMap.LngLat(center[0], center[1]);
            var end = poi.location;
            walking.search(start, end, function (status, result) { }, function (status, result) { });
          }

          if (isiPhone && isiPhone.length) {
            Map.event.addListener(marker, 'touchstart', showInfo);
          } else {
            AMap.event.addListener(marker, 'click', showInfo);
          }
        });
        map.setZoom(16);
      } else {
        alert("没有相关数据！");
      }
    });
    AMap.event.addListener(geolocation, 'complete', function (data) {
      console.log(data);
    }); //
  });
}
map.plugin(["AMap.Scale"], function () {
  var scale = new AMap.Scale();
  map.addControl(scale);
});

document.querySelector('a.amap-logo').onclick = function(){
  return false;
};
