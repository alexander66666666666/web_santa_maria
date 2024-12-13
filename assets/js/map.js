var map = L.map('map', {
    center: [-12.399506217208321, -76.77389213408068],
    zoom: 15,
    minZoom: 10,
    maxZoom: 20,
    maxBounds: [[-12.399506217208321, -76.77389213408068], [-12.399506217208321, -76.77389213408068]]
});

var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'
});
basemapOSM.addTo(map);

var bgoogleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{ maxZoom: 20,subdomains:['mt0','mt1','mt2','mt3'] });

bgoogleSat.addTo(map);

var Mercado = L.tileLayer.wms("http://localhost:8080/geoserver/web_santa_maria_del_mar/wms?", {
    layers: "web_santa_maria_del_mar:aeroclub_santa_maria", //gisweb: Mercado
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
 Mercado.addTo(map);

var Colegio = L.tileLayer.wms("http://localhost:8080/geoserver/web_santa_maria_del_mar/wms?", {
    layers: "web_santa_maria_del_mar:colegios_santa_maria_mar", //gisweb: lotes sencico
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
Colegio.addTo(map);



var Iglesia = L.tileLayer.wms("http://localhost:8080/geoserver/web_santa_maria_del_mar/wms?", {
    layers: "web_santa_maria_del_mar:iglesia_santa_maria_", //gisweb: lotes sencico
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
Iglesia.addTo(map);


var Hospital = L.tileLayer.wms("http://localhost:8080/geoserver/web_santa_maria_del_mar/wms?", {
    layers: "web_santa_maria_del_mar:puestodesalud_santa_maria", //gisweb: lotes sencico
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
Hospital.addTo(map);




var curvas_nivel = L.tileLayer.wms("http://localhost:8080/geoserver/web_santa_maria_del_mar/wms?", {
    layers: "web_santa_maria_del_mar:curvas_nivel", //gisweb: lotes sencico
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
 Mercado.addTo(map);




var santa_maria = L.tileLayer.wms("http://localhost:8080/geoserver/web_santa_maria_del_mar/wms?", {
   layers: "web_santa_maria_del_mar:santamariadelmar", //gisweb: lotes sencico
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
santa_maria.addTo(map);













var baseMaps = {
    "OSM": basemapOSM,
    "Satelite": bgoogleSat
};

var overlayMaps = {
    "Mercado":Mercado,
    "Colegio":Colegio,
    "Iglesia":Iglesia,
    "Hospital":Hospital,
    "curvas_nivel":curvas_nivel,
    "santa_maria":santa_maria

};

L.control.layers(baseMaps, overlayMaps,{
    position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
    collapsed: false // true
}).addTo(map);
