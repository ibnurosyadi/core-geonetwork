OpenLayers.DOTS_PER_INCH = 90.71;
//OpenLayers.ImgPath = '../js/OpenLayers/theme/default/img/';
OpenLayers.ImgPath = '../../apps/js/OpenLayers/img/';

OpenLayers.IMAGE_RELOAD_ATTEMPTS = 3;

// Define a constant with the base url to the MapFish web service.
//mapfish.SERVER_BASE_URL = '../../../../../'; // '../../';

// Remove pink background when a tile fails to load
OpenLayers.Util.onImageLoadErrorColor = "transparent";

// Lang
OpenLayers.Lang.setCode(GeoNetwork.defaultLocale);

OpenLayers.Util.onImageLoadError = function () {
    this._attempts = (this._attempts) ? (this._attempts + 1) : 1;
    if (this._attempts <= OpenLayers.IMAGE_RELOAD_ATTEMPTS) {
        this.src = this.src;
    } else {
        this.style.backgroundColor = OpenLayers.Util.onImageLoadErrorColor;
        this.style.display = "none";
    }
};

// add Proj4js.defs here
// Proj4js.defs["EPSG:27572"] = "+proj=lcc +lat_1=46.8 +lat_0=46.8 +lon_0=0 +k_0=0.99987742 +x_0=600000 +y_0=2200000 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +no_defs";
Proj4js.defs["EPSG:28992"] = "+proj=sterea +lat_0=52.15616055555555 +lon_0=5.38763888888889 +k=0.9999079 +x_0=155000 +y_0=463000 +ellps=bessel +units=m +no_defs";
Proj4js.defs["EPSG:2154"] = "+proj=lcc +lat_1=49 +lat_2=44 +lat_0=46.5 +lon_0=3 +x_0=700000 +y_0=6600000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs";
//new OpenLayers.Projection("EPSG:900913")


GeoNetwork.map.printCapabilities = "../../pdf";

// Config for WGS84 based maps
//GeoNetwork.map.PROJECTION = "EPSG:4326";
//GeoNetwork.map.EXTENT = new OpenLayers.Bounds(-180,-90,180,90);
//GeoNetwork.map.EXTENT = new OpenLayers.Bounds(-5.1,41,9.7,51);

// NGR Projection and layer definition
GeoNetwork.map.PROJECTION = "EPSG:28992";
GeoNetwork.map.EXTENT = new OpenLayers.Bounds(-285401.92,22598.08,595401.92,903401.92);
GeoNetwork.map.MAXEXTENT = new OpenLayers.Bounds(-285401.92,22598.08,595401.92,903401.92);

GeoNetwork.map.BACKGROUND_LAYERS = [
    new OpenLayers.Layer.WMS("BRT Achtergrondkaart", "http://geodata.nationaalgeoregister.nl/wmsc?",
        {layers: 'brtachtergrondkaart', format: 'image/png8'}, {isBaseLayer: true, 'buffer':1}),
    new OpenLayers.Layer.WMS("NLR Nederland Aster mosaic", "http://gdsc.nlr.nl/wms/aster_all?",
        {layers: 'aster_all', format: 'image/jpeg'}, {isBaseLayer: true, 'buffer':1})
    //new OpenLayers.Layer.WMS("Background layer", "/geoserver/wms", {layers: 'gn:world,gn:ne_50m_boundary_da,gn:ne_50m_boundary_lines_land,gn:ne_50m_coastline', format: 'image/jpeg'}, {isBaseLayer: true})
    //new OpenLayers.Layer.WMS("Background layer", "http://www2.demis.nl/mapserver/wms.asp?", {layers: 'Countries', format: 'image/jpeg'}, {isBaseLayer: true})
];

//// Config for OSM based maps
//GeoNetwork.map.PROJECTION = "EPSG:900913";
////GeoNetwork.map.EXTENT = new OpenLayers.Bounds(-550000, 5000000, 1200000, 7000000);
//GeoNetwork.map.EXTENT = new OpenLayers.Bounds(-20037508, -20037508, 20037508, 20037508.34);
//GeoNetwork.map.BACKGROUND_LAYERS = [
//    new OpenLayers.Layer.OSM()
//    //new OpenLayers.Layer.Google("Google Streets");
//];
GeoNetwork.map.RESOLUTIONS = [3440.64,1720.32,860.16,430.08,215.04,107.52,53.76,26.88,13.44,6.72,3.36,1.68,0.84];

//GeoNetwork.map.RESOLUTIONS = [];

GeoNetwork.map.MAP_OPTIONS = {
    projection: GeoNetwork.map.PROJECTION,
    maxExtent: GeoNetwork.map.MAXEXTENT,
    restrictedExtent: GeoNetwork.map.EXTENT,
    resolutions: GeoNetwork.map.RESOLUTIONS,
    controls: []
};
GeoNetwork.map.MAIN_MAP_OPTIONS = {
    projection: GeoNetwork.map.PROJECTION,
    maxExtent: GeoNetwork.map.MAXEXTENT,
    restrictedExtent: GeoNetwork.map.EXTENT,
    resolutions: GeoNetwork.map.RESOLUTIONS,
    controls: []
};

// NGR custom geocoder
GeoNetwork.GEOCODER_URL = 'http://geodata.nationaalgeoregister.nl/geocoder/Geocoder?';
//GeoNetwork.GEOCODER_URL = 'http://geoserver.nl/geocoder/NLaddress.aspx';