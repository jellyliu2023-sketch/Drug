// 初始化地图，上海中心
var map = L.map('map').setView([31.2304, 121.4737], 12);

// 添加 OpenStreetMap 图层
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// 上海回收箱位置示例
var locations = [
  { name: "黄浦区社区卫生服务中心", lat: 31.2305, lng: 121.4738 },
  { name: "徐汇区健康药房", lat: 31.1950, lng: 121.4375 },
  { name: "浦东新区康健诊所", lat: 31.2220, lng: 121.5430 },
  { name: "静安区人民医院药房", lat: 31.2295, lng: 121.4480 },
  { name: "虹口区爱心药房", lat: 31.2700, lng: 121.4920 },
  { name: "杨浦区社区诊所", lat: 31.2900, lng: 121.5200 }
];

// 添加标记
locations.forEach(function(location) {
    L.marker([location.lat, location.lng])
      .addTo(map)
      .bindPopup(location.name);
});
