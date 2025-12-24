// 初始化地图，上海中心
var map = L.map('map').setView([31.2304, 121.4737], 12);

// 添加 OpenStreetMap 图层
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// 上海回收箱位置示例
var locations = [
 // 中医诊所 / 药房（新增）
  { district: "闵行区", address: "上海好药师庆云中医诊所", lat: 31.1456, lng: 121.4312 },
  { district: "闵行区", address: "上海上虹大药房鲁汇中医坐堂诊所", lat: 31.0889, lng: 121.4375 },
  { district: "徐汇区", address: "上海宝杏堂中医诊所", lat: 31.2354, lng: 121.4762 },
  { district: "闵行区", address: "蒋家桥社区家庭医生神作社区药房", lat: 31.1978, lng: 121.3589 },
  { district: "闵行区", address: "汇丰大药房（梅陇店）", lat: 31.1204, lng: 121.4137 },
  { district: "闵行区", address: "上农家庭医生诊所社区药房", lat: 31.1683, lng: 121.3901 }
];

var redIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// 添加标记
locations.forEach(function(location) {
  L.marker([location.lat, location.lng], { icon: redIcon })
    .addTo(map)
    .bindPopup(
      "<b>" + location.address + "</b><br/>" +
      location.district
    );
});

