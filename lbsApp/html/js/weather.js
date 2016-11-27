/**
 * Created by perry on 16/11/27.
 */
var map = new AMap.Map('container', {
  zoom: 15
});
map.plugin(["AMap.ToolBar"], function () {
  //加载工具条
  var tool = new AMap.ToolBar();
  map.addControl(tool);
});
map.plugin(["AMap.Scale"], function () {
  var scale = new AMap.Scale();
  map.addControl(scale);
});

// 拿到用户位置经纬度
// 地理编码／逆地理编码
// 天气服务插件只能传入城市／城市编码
function showWeather(center) {
  var marker = new Amap.Marker({
    position: center,
    map: map,
    content: '<div class="loc_circle"></div><img class="loc_img" src="location.png"/>'
  });


  AMap.service('AMap.Geocoder', function () {
    var geo = new AMap.Geocoder();
    geo.getAddress(center, function (status, result) {
      if (status === 'complete' && result.info === 'OK') {
        // 获取天气信息
        var district = result.regeocode.addressComponent.district;
        AMap.service('AMap.Weather', function () {
          var weather = new AMap.Weather();
          weather.getLive(district, function (err, result) {
            if (err) return;
            document.querySelector('#weather_pro').innerHTML = result.province;
            document.querySelector('#weather_city').innerHTML = result.city;
            document.querySelector('#weather_weather').innerHTML = result.weather;
            document.querySelector('#weather_wind').innerHTML = result.windDirection;
            document.querySelector('#weather_temp').innerHTML = result.temperature;
            document.querySelector('#weather_time').innerHTML = result.reportTime;
          });
        })

      }else{
        alert("该地区不支持天气服务！");
      }
    });
  });
}

function locationComplete(data) {
  map.clearMap();
  map.setZoom(16);
  showWeather([data.position.lng, data.position.lat]);
}

function locationError() {
  alert('定位失败，请在手机上开启定位：设置->隐私->定位服务－>LBSAPP->使用定位期间－－打开');
}
var locationIcon = "<div></div>";

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

  // 直接定位
  // map.addControl(geolocation);
  geolocation.getCurrentPosition();
  AMap.event.addListener(geolocation, 'complete', locationComplete); //返回定位信息
  AMap.event.addListener(geolocation, 'error', locationError); //返回定位出错信息
});

document.querySelector('a.amap-logo').onclick = function(){
  return false;
};



