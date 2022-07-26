var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_MarquardSchenkvonCastell_1 = new ol.format.GeoJSON();
var features_MarquardSchenkvonCastell_1 = format_MarquardSchenkvonCastell_1.readFeatures(json_MarquardSchenkvonCastell_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MarquardSchenkvonCastell_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MarquardSchenkvonCastell_1.addFeatures(features_MarquardSchenkvonCastell_1);
var lyr_MarquardSchenkvonCastell_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MarquardSchenkvonCastell_1, 
                style: style_MarquardSchenkvonCastell_1,
                interactive: true,
                title: '<img src="styles/legend/MarquardSchenkvonCastell_1.png" /> Marquard Schenk von Castell'
            });
var format_LotharFriedrichvonMetternichBurscheid_2 = new ol.format.GeoJSON();
var features_LotharFriedrichvonMetternichBurscheid_2 = format_LotharFriedrichvonMetternichBurscheid_2.readFeatures(json_LotharFriedrichvonMetternichBurscheid_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LotharFriedrichvonMetternichBurscheid_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LotharFriedrichvonMetternichBurscheid_2.addFeatures(features_LotharFriedrichvonMetternichBurscheid_2);
var lyr_LotharFriedrichvonMetternichBurscheid_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LotharFriedrichvonMetternichBurscheid_2, 
                style: style_LotharFriedrichvonMetternichBurscheid_2,
                interactive: true,
                title: '<img src="styles/legend/LotharFriedrichvonMetternichBurscheid_2.png" /> Lothar Friedrich von Metternich-Burscheid'
            });
var format_KarlEmmerichFranzvonBreidbachBrresheim_3 = new ol.format.GeoJSON();
var features_KarlEmmerichFranzvonBreidbachBrresheim_3 = format_KarlEmmerichFranzvonBreidbachBrresheim_3.readFeatures(json_KarlEmmerichFranzvonBreidbachBrresheim_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KarlEmmerichFranzvonBreidbachBrresheim_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KarlEmmerichFranzvonBreidbachBrresheim_3.addFeatures(features_KarlEmmerichFranzvonBreidbachBrresheim_3);
var lyr_KarlEmmerichFranzvonBreidbachBrresheim_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KarlEmmerichFranzvonBreidbachBrresheim_3, 
                style: style_KarlEmmerichFranzvonBreidbachBrresheim_3,
                interactive: true,
                title: '<img src="styles/legend/KarlEmmerichFranzvonBreidbachBrresheim_3.png" /> Karl Emmerich Franz von Breidbach-Bürresheim'
            });
var format_JohannWilhelmWolffMetternichzurGracht_4 = new ol.format.GeoJSON();
var features_JohannWilhelmWolffMetternichzurGracht_4 = format_JohannWilhelmWolffMetternichzurGracht_4.readFeatures(json_JohannWilhelmWolffMetternichzurGracht_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JohannWilhelmWolffMetternichzurGracht_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JohannWilhelmWolffMetternichzurGracht_4.addFeatures(features_JohannWilhelmWolffMetternichzurGracht_4);
var lyr_JohannWilhelmWolffMetternichzurGracht_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JohannWilhelmWolffMetternichzurGracht_4, 
                style: style_JohannWilhelmWolffMetternichzurGracht_4,
                interactive: true,
                title: '<img src="styles/legend/JohannWilhelmWolffMetternichzurGracht_4.png" /> Johann Wilhelm Wolff-Metternich zur Gracht'
            });
var format_JohannPhilippFranzGrafvonSchnborn_5 = new ol.format.GeoJSON();
var features_JohannPhilippFranzGrafvonSchnborn_5 = format_JohannPhilippFranzGrafvonSchnborn_5.readFeatures(json_JohannPhilippFranzGrafvonSchnborn_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JohannPhilippFranzGrafvonSchnborn_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JohannPhilippFranzGrafvonSchnborn_5.addFeatures(features_JohannPhilippFranzGrafvonSchnborn_5);
var lyr_JohannPhilippFranzGrafvonSchnborn_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JohannPhilippFranzGrafvonSchnborn_5, 
                style: style_JohannPhilippFranzGrafvonSchnborn_5,
                interactive: true,
                title: '<img src="styles/legend/JohannPhilippFranzGrafvonSchnborn_5.png" /> Johann Philipp Franz Graf von Schönborn'
            });
var format_JohannHeppenheimgenanntvonSaal_6 = new ol.format.GeoJSON();
var features_JohannHeppenheimgenanntvonSaal_6 = format_JohannHeppenheimgenanntvonSaal_6.readFeatures(json_JohannHeppenheimgenanntvonSaal_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JohannHeppenheimgenanntvonSaal_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JohannHeppenheimgenanntvonSaal_6.addFeatures(features_JohannHeppenheimgenanntvonSaal_6);
var lyr_JohannHeppenheimgenanntvonSaal_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JohannHeppenheimgenanntvonSaal_6, 
                style: style_JohannHeppenheimgenanntvonSaal_6,
                interactive: true,
                title: '<img src="styles/legend/JohannHeppenheimgenanntvonSaal_6.png" /> Johann Heppenheim genannt von Saal'
            });
var format_HugoWolfgangvonKesselstatt_7 = new ol.format.GeoJSON();
var features_HugoWolfgangvonKesselstatt_7 = format_HugoWolfgangvonKesselstatt_7.readFeatures(json_HugoWolfgangvonKesselstatt_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HugoWolfgangvonKesselstatt_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HugoWolfgangvonKesselstatt_7.addFeatures(features_HugoWolfgangvonKesselstatt_7);
var lyr_HugoWolfgangvonKesselstatt_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HugoWolfgangvonKesselstatt_7, 
                style: style_HugoWolfgangvonKesselstatt_7,
                interactive: true,
                title: '<img src="styles/legend/HugoWolfgangvonKesselstatt_7.png" /> Hugo Wolfgang von Kesselstatt'
            });
var format_HugoFranzKarlvonEltzKempenich_8 = new ol.format.GeoJSON();
var features_HugoFranzKarlvonEltzKempenich_8 = format_HugoFranzKarlvonEltzKempenich_8.readFeatures(json_HugoFranzKarlvonEltzKempenich_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HugoFranzKarlvonEltzKempenich_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HugoFranzKarlvonEltzKempenich_8.addFeatures(features_HugoFranzKarlvonEltzKempenich_8);
var lyr_HugoFranzKarlvonEltzKempenich_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HugoFranzKarlvonEltzKempenich_8, 
                style: style_HugoFranzKarlvonEltzKempenich_8,
                interactive: true,
                title: '<img src="styles/legend/HugoFranzKarlvonEltzKempenich_8.png" /> Hugo Franz Karl von Eltz (-Kempenich)'
            });
var format_HeinrichWilhelmHarffvonDreyborn_9 = new ol.format.GeoJSON();
var features_HeinrichWilhelmHarffvonDreyborn_9 = format_HeinrichWilhelmHarffvonDreyborn_9.readFeatures(json_HeinrichWilhelmHarffvonDreyborn_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HeinrichWilhelmHarffvonDreyborn_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HeinrichWilhelmHarffvonDreyborn_9.addFeatures(features_HeinrichWilhelmHarffvonDreyborn_9);
var lyr_HeinrichWilhelmHarffvonDreyborn_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HeinrichWilhelmHarffvonDreyborn_9, 
                style: style_HeinrichWilhelmHarffvonDreyborn_9,
                interactive: true,
                title: '<img src="styles/legend/HeinrichWilhelmHarffvonDreyborn_9.png" /> Heinrich Wilhelm Harff von Dreyborn'
            });
var format_HeinrichFerdinandvonderLeyen_10 = new ol.format.GeoJSON();
var features_HeinrichFerdinandvonderLeyen_10 = format_HeinrichFerdinandvonderLeyen_10.readFeatures(json_HeinrichFerdinandvonderLeyen_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HeinrichFerdinandvonderLeyen_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HeinrichFerdinandvonderLeyen_10.addFeatures(features_HeinrichFerdinandvonderLeyen_10);
var lyr_HeinrichFerdinandvonderLeyen_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HeinrichFerdinandvonderLeyen_10, 
                style: style_HeinrichFerdinandvonderLeyen_10,
                interactive: true,
                title: '<img src="styles/legend/HeinrichFerdinandvonderLeyen_10.png" /> Heinrich Ferdinand von der Leyen'
            });
var format_DietrichKasparvonFrstenberg_11 = new ol.format.GeoJSON();
var features_DietrichKasparvonFrstenberg_11 = format_DietrichKasparvonFrstenberg_11.readFeatures(json_DietrichKasparvonFrstenberg_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DietrichKasparvonFrstenberg_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DietrichKasparvonFrstenberg_11.addFeatures(features_DietrichKasparvonFrstenberg_11);
var lyr_DietrichKasparvonFrstenberg_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DietrichKasparvonFrstenberg_11, 
                style: style_DietrichKasparvonFrstenberg_11,
                interactive: true,
                title: '<img src="styles/legend/DietrichKasparvonFrstenberg_11.png" /> Dietrich Kaspar von Fürstenberg'
            });
var format_DamianFriedrichvonderLeyenHohengeroldseck_12 = new ol.format.GeoJSON();
var features_DamianFriedrichvonderLeyenHohengeroldseck_12 = format_DamianFriedrichvonderLeyenHohengeroldseck_12.readFeatures(json_DamianFriedrichvonderLeyenHohengeroldseck_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DamianFriedrichvonderLeyenHohengeroldseck_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DamianFriedrichvonderLeyenHohengeroldseck_12.addFeatures(features_DamianFriedrichvonderLeyenHohengeroldseck_12);
var lyr_DamianFriedrichvonderLeyenHohengeroldseck_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DamianFriedrichvonderLeyenHohengeroldseck_12, 
                style: style_DamianFriedrichvonderLeyenHohengeroldseck_12,
                interactive: true,
                title: '<img src="styles/legend/DamianFriedrichvonderLeyenHohengeroldseck_12.png" /> Damian Friedrich von der Leyen-Hohengeroldseck'
            });
var format_ChristophRudolfvonStadion_13 = new ol.format.GeoJSON();
var features_ChristophRudolfvonStadion_13 = format_ChristophRudolfvonStadion_13.readFeatures(json_ChristophRudolfvonStadion_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ChristophRudolfvonStadion_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChristophRudolfvonStadion_13.addFeatures(features_ChristophRudolfvonStadion_13);
var lyr_ChristophRudolfvonStadion_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ChristophRudolfvonStadion_13, 
                style: style_ChristophRudolfvonStadion_13,
                interactive: true,
                title: '<img src="styles/legend/ChristophRudolfvonStadion_13.png" /> Christoph Rudolf von Stadion'
            });
var format_AdolphHundvonSaulheim_14 = new ol.format.GeoJSON();
var features_AdolphHundvonSaulheim_14 = format_AdolphHundvonSaulheim_14.readFeatures(json_AdolphHundvonSaulheim_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdolphHundvonSaulheim_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdolphHundvonSaulheim_14.addFeatures(features_AdolphHundvonSaulheim_14);cluster_AdolphHundvonSaulheim_14 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_AdolphHundvonSaulheim_14
});
var lyr_AdolphHundvonSaulheim_14 = new ol.layer.Vector({
                declutter: true,
                source:cluster_AdolphHundvonSaulheim_14, 
                style: style_AdolphHundvonSaulheim_14,
                interactive: true,
                title: '<img src="styles/legend/AdolphHundvonSaulheim_14.png" /> Adolph Hund von Saulheim'
            });

lyr_OSMStandard_0.setVisible(true);lyr_MarquardSchenkvonCastell_1.setVisible(true);lyr_LotharFriedrichvonMetternichBurscheid_2.setVisible(true);lyr_KarlEmmerichFranzvonBreidbachBrresheim_3.setVisible(true);lyr_JohannWilhelmWolffMetternichzurGracht_4.setVisible(true);lyr_JohannPhilippFranzGrafvonSchnborn_5.setVisible(true);lyr_JohannHeppenheimgenanntvonSaal_6.setVisible(true);lyr_HugoWolfgangvonKesselstatt_7.setVisible(true);lyr_HugoFranzKarlvonEltzKempenich_8.setVisible(true);lyr_HeinrichWilhelmHarffvonDreyborn_9.setVisible(true);lyr_HeinrichFerdinandvonderLeyen_10.setVisible(true);lyr_DietrichKasparvonFrstenberg_11.setVisible(true);lyr_DamianFriedrichvonderLeyenHohengeroldseck_12.setVisible(true);lyr_ChristophRudolfvonStadion_13.setVisible(true);lyr_AdolphHundvonSaulheim_14.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_MarquardSchenkvonCastell_1,lyr_LotharFriedrichvonMetternichBurscheid_2,lyr_KarlEmmerichFranzvonBreidbachBrresheim_3,lyr_JohannWilhelmWolffMetternichzurGracht_4,lyr_JohannPhilippFranzGrafvonSchnborn_5,lyr_JohannHeppenheimgenanntvonSaal_6,lyr_HugoWolfgangvonKesselstatt_7,lyr_HugoFranzKarlvonEltzKempenich_8,lyr_HeinrichWilhelmHarffvonDreyborn_9,lyr_HeinrichFerdinandvonderLeyen_10,lyr_DietrichKasparvonFrstenberg_11,lyr_DamianFriedrichvonderLeyenHohengeroldseck_12,lyr_ChristophRudolfvonStadion_13,lyr_AdolphHundvonSaulheim_14];
lyr_MarquardSchenkvonCastell_1.set('fieldAliases', {'FIELD1': 'FIELD1', 'pers_name': 'pers_name', 'event_after-date': 'event_after-date', 'event_before-date': 'event_before-date', 'event_start': 'event_start', 'event_end': 'event_end', 'display_date': 'display_date', 'event_type': 'event_type', 'pers_function': 'pers_function', 'inst_name': 'inst_name', 'place_name': 'place_name', 'place_count': 'place_count', 'country': 'country', '# Full Address': '# Full Address', 'comment': 'comment', 'source': 'source', });
lyr_LotharFriedrichvonMetternichBurscheid_2.set('fieldAliases', {'FIELD1': 'FIELD1', 'pers_name': 'pers_name', 'event_after-date': 'event_after-date', 'event_before-date': 'event_before-date', 'event_start': 'event_start', 'event_end': 'event_end', 'display_date': 'display_date', 'event_type': 'event_type', 'pers_function': 'pers_function', 'inst_name': 'inst_name', 'place_name': 'place_name', 'place_count': 'place_count', 'country': 'country', '# Full Address': '# Full Address', 'comment': 'comment', 'source': 'source', });
lyr_KarlEmmerichFranzvonBreidbachBrresheim_3.set('fieldAliases', {'FIELD1': 'FIELD1', 'pers_name': 'pers_name', 'event_after-date': 'event_after-date', 'event_before-date': 'event_before-date', 'event_start': 'event_start', 'event_end': 'event_end', 'display_date': 'display_date', 'event_type': 'event_type', 'pers_function': 'pers_function', 'inst_name': 'inst_name', 'place_name': 'place_name', 'place_count': 'place_count', 'country': 'country', '# Full Address': '# Full Address', 'comment': 'comment', 'source': 'source', });
lyr_JohannWilhelmWolffMetternichzurGracht_4.set('fieldAliases', {'FIELD1': 'FIELD1', 'pers_name': 'pers_name', 'event_after-date': 'event_after-date', 'event_before-date': 'event_before-date', 'event_start': 'event_start', 'event_end': 'event_end', 'display_date': 'display_date', 'event_type': 'event_type', 'pers_function': 'pers_function', 'inst_name': 'inst_name', 'place_name': 'place_name', 'place_count': 'place_count', 'country': 'country', '# Full Address': '# Full Address', 'comment': 'comment', 'source': 'source', });
lyr_JohannPhilippFranzGrafvonSchnborn_5.set('fieldAliases', {'FIELD1': 'FIELD1', 'pers_name': 'pers_name', 'event_after-date': 'event_after-date', 'event_before-date': 'event_before-date', 'event_start': 'event_start', 'event_end': 'event_end', 'display_date': 'display_date', 'event_type': 'event_type', 'pers_function': 'pers_function', 'inst_name': 'inst_name', 'place_name': 'place_name', 'place_count': 'place_count', 'country': 'country', '# Full Address': '# Full Address', 'comment': 'comment', 'source': 'source', });
lyr_JohannHeppenheimgenanntvonSaal_6.set('fieldAliases', {'FIELD1': 'FIELD1', 'pers_name': 'pers_name', 'event_after-date': 'event_after-date', 'event_before-date': 'event_before-date', 'event_start': 'event_start', 'event_end': 'event_end', 'display_date': 'display_date', 'event_type': 'event_type', 'pers_function': 'pers_function', 'inst_name': 'inst_name', 'place_name': 'place_name', 'place_count': 'place_count', 'country': 'country', '# Full Address': '# Full Address', 'comment': 'comment', 'source': 'source', });
lyr_HugoWolfgangvonKesselstatt_7.set('fieldAliases', {'FIELD1': 'FIELD1', 'pers_name': 'pers_name', 'event_after-date': 'event_after-date', 'event_before-date': 'event_before-date', 'event_start': 'event_start', 'event_end': 'event_end', 'display_date': 'display_date', 'event_type': 'event_type', 'pers_function': 'pers_function', 'inst_name': 'inst_name', 'place_name': 'place_name', 'place_count': 'place_count', 'country': 'country', '# Full Address': '# Full Address', 'comment': 'comment', 'source': 'source', });
lyr_HugoFranzKarlvonEltzKempenich_8.set('fieldAliases', {'FIELD1': 'FIELD1', 'pers_name': 'pers_name', 'event_after-date': 'event_after-date', 'event_before-date': 'event_before-date', 'event_start': 'event_start', 'event_end': 'event_end', 'display_date': 'display_date', 'event_type': 'event_type', 'pers_function': 'pers_function', 'inst_name': 'inst_name', 'place_name': 'place_name', 'place_count': 'place_count', 'country': 'country', '# Full Address': '# Full Address', 'comment': 'comment', 'source': 'source', });
lyr_HeinrichWilhelmHarffvonDreyborn_9.set('fieldAliases', {'FIELD1': 'FIELD1', 'pers_name': 'pers_name', 'event_after-date': 'event_after-date', 'event_before-date': 'event_before-date', 'event_start': 'event_start', 'event_end': 'event_end', 'display_date': 'display_date', 'event_type': 'event_type', 'pers_function': 'pers_function', 'inst_name': 'inst_name', 'place_name': 'place_name', 'place_count': 'place_count', 'country': 'country', '# Full Address': '# Full Address', 'comment': 'comment', 'source': 'source', });
lyr_HeinrichFerdinandvonderLeyen_10.set('fieldAliases', {'FIELD1': 'FIELD1', 'pers_name': 'pers_name', 'event_after-date': 'event_after-date', 'event_before-date': 'event_before-date', 'event_start': 'event_start', 'event_end': 'event_end', 'display_date': 'display_date', 'event_type': 'event_type', 'pers_function': 'pers_function', 'inst_name': 'inst_name', 'place_name': 'place_name', 'place_count': 'place_count', 'country': 'country', '# Full Address': '# Full Address', 'comment': 'comment', 'source': 'source', });
lyr_DietrichKasparvonFrstenberg_11.set('fieldAliases', {'FIELD1': 'FIELD1', 'pers_name': 'pers_name', 'event_after-date': 'event_after-date', 'event_before-date': 'event_before-date', 'event_start': 'event_start', 'event_end': 'event_end', 'display_date': 'display_date', 'event_type': 'event_type', 'pers_function': 'pers_function', 'inst_name': 'inst_name', 'place_name': 'place_name', 'place_count': 'place_count', 'country': 'country', '# Full Address': '# Full Address', 'comment': 'comment', 'source': 'source', });
lyr_DamianFriedrichvonderLeyenHohengeroldseck_12.set('fieldAliases', {'FIELD1': 'FIELD1', 'pers_name': 'pers_name', 'event_after-date': 'event_after-date', 'event_before-date': 'event_before-date', 'event_start': 'event_start', 'event_end': 'event_end', 'display_date': 'display_date', 'event_type': 'event_type', 'pers_function': 'pers_function', 'inst_name': 'inst_name', 'place_name': 'place_name', 'place_count': 'place_count', 'country': 'country', '# Full Address': '# Full Address', 'comment': 'comment', 'source': 'source', });
lyr_ChristophRudolfvonStadion_13.set('fieldAliases', {'FIELD1': 'FIELD1', 'pers_name': 'pers_name', 'event_after-date': 'event_after-date', 'event_before-date': 'event_before-date', 'event_start': 'event_start', 'event_end': 'event_end', 'display_date': 'display_date', 'event_type': 'event_type', 'pers_function': 'pers_function', 'inst_name': 'inst_name', 'place_name': 'place_name', 'place_count': 'place_count', 'country': 'country', '# Full Address': '# Full Address', 'comment': 'comment', 'source': 'source', });
lyr_AdolphHundvonSaulheim_14.set('fieldAliases', {'FIELD1': 'FIELD1', 'pers_name': 'pers_name', 'event_after-date': 'event_after-date', 'event_before-date': 'event_before-date', 'event_start': 'event_start', 'event_end': 'event_end', 'display_date': 'display_date', 'event_type': 'event_type', 'pers_function': 'pers_function', 'inst_name': 'inst_name', 'place_name': 'place_name', 'place_count': 'place_count', 'country': 'country', '# Full Address': '# Full Address', 'comment': 'comment', 'source': 'source', });
lyr_MarquardSchenkvonCastell_1.set('fieldImages', {'FIELD1': '', 'pers_name': '', 'event_after-date': '', 'event_before-date': '', 'event_start': '', 'event_end': '', 'display_date': '', 'event_type': '', 'pers_function': '', 'inst_name': '', 'place_name': '', 'place_count': '', 'country': '', '# Full Address': '', 'comment': '', 'source': '', });
lyr_LotharFriedrichvonMetternichBurscheid_2.set('fieldImages', {'FIELD1': '', 'pers_name': '', 'event_after-date': '', 'event_before-date': '', 'event_start': '', 'event_end': '', 'display_date': '', 'event_type': '', 'pers_function': '', 'inst_name': '', 'place_name': '', 'place_count': '', 'country': '', '# Full Address': '', 'comment': '', 'source': '', });
lyr_KarlEmmerichFranzvonBreidbachBrresheim_3.set('fieldImages', {'FIELD1': '', 'pers_name': '', 'event_after-date': '', 'event_before-date': '', 'event_start': '', 'event_end': '', 'display_date': '', 'event_type': '', 'pers_function': '', 'inst_name': '', 'place_name': '', 'place_count': '', 'country': '', '# Full Address': '', 'comment': '', 'source': '', });
lyr_JohannWilhelmWolffMetternichzurGracht_4.set('fieldImages', {'FIELD1': '', 'pers_name': '', 'event_after-date': '', 'event_before-date': '', 'event_start': '', 'event_end': '', 'display_date': '', 'event_type': '', 'pers_function': '', 'inst_name': '', 'place_name': '', 'place_count': '', 'country': '', '# Full Address': '', 'comment': '', 'source': '', });
lyr_JohannPhilippFranzGrafvonSchnborn_5.set('fieldImages', {'FIELD1': '', 'pers_name': '', 'event_after-date': '', 'event_before-date': '', 'event_start': '', 'event_end': '', 'display_date': '', 'event_type': '', 'pers_function': '', 'inst_name': '', 'place_name': '', 'place_count': '', 'country': '', '# Full Address': '', 'comment': '', 'source': '', });
lyr_JohannHeppenheimgenanntvonSaal_6.set('fieldImages', {'FIELD1': '', 'pers_name': '', 'event_after-date': '', 'event_before-date': '', 'event_start': '', 'event_end': '', 'display_date': '', 'event_type': '', 'pers_function': '', 'inst_name': '', 'place_name': '', 'place_count': '', 'country': '', '# Full Address': '', 'comment': '', 'source': '', });
lyr_HugoWolfgangvonKesselstatt_7.set('fieldImages', {'FIELD1': '', 'pers_name': '', 'event_after-date': '', 'event_before-date': '', 'event_start': '', 'event_end': '', 'display_date': '', 'event_type': '', 'pers_function': '', 'inst_name': '', 'place_name': '', 'place_count': '', 'country': '', '# Full Address': '', 'comment': '', 'source': '', });
lyr_HugoFranzKarlvonEltzKempenich_8.set('fieldImages', {'FIELD1': '', 'pers_name': '', 'event_after-date': '', 'event_before-date': '', 'event_start': '', 'event_end': '', 'display_date': '', 'event_type': '', 'pers_function': '', 'inst_name': '', 'place_name': '', 'place_count': '', 'country': '', '# Full Address': '', 'comment': '', 'source': '', });
lyr_HeinrichWilhelmHarffvonDreyborn_9.set('fieldImages', {'FIELD1': '', 'pers_name': '', 'event_after-date': '', 'event_before-date': '', 'event_start': '', 'event_end': '', 'display_date': '', 'event_type': '', 'pers_function': '', 'inst_name': '', 'place_name': '', 'place_count': '', 'country': '', '# Full Address': '', 'comment': '', 'source': '', });
lyr_HeinrichFerdinandvonderLeyen_10.set('fieldImages', {'FIELD1': '', 'pers_name': '', 'event_after-date': '', 'event_before-date': '', 'event_start': '', 'event_end': '', 'display_date': '', 'event_type': '', 'pers_function': '', 'inst_name': '', 'place_name': '', 'place_count': '', 'country': '', '# Full Address': '', 'comment': '', 'source': '', });
lyr_DietrichKasparvonFrstenberg_11.set('fieldImages', {'FIELD1': '', 'pers_name': '', 'event_after-date': '', 'event_before-date': '', 'event_start': '', 'event_end': '', 'display_date': '', 'event_type': '', 'pers_function': '', 'inst_name': '', 'place_name': '', 'place_count': '', 'country': '', '# Full Address': '', 'comment': '', 'source': '', });
lyr_DamianFriedrichvonderLeyenHohengeroldseck_12.set('fieldImages', {'FIELD1': '', 'pers_name': '', 'event_after-date': '', 'event_before-date': '', 'event_start': '', 'event_end': '', 'display_date': '', 'event_type': '', 'pers_function': '', 'inst_name': '', 'place_name': '', 'place_count': '', 'country': '', '# Full Address': '', 'comment': '', 'source': '', });
lyr_ChristophRudolfvonStadion_13.set('fieldImages', {'FIELD1': '', 'pers_name': '', 'event_after-date': '', 'event_before-date': '', 'event_start': '', 'event_end': '', 'display_date': '', 'event_type': '', 'pers_function': '', 'inst_name': '', 'place_name': '', 'place_count': '', 'country': '', '# Full Address': '', 'comment': '', 'source': '', });
lyr_AdolphHundvonSaulheim_14.set('fieldImages', {'FIELD1': '', 'pers_name': '', 'event_after-date': '', 'event_before-date': '', 'event_start': '', 'event_end': '', 'display_date': '', 'event_type': '', 'pers_function': '', 'inst_name': '', 'place_name': '', 'place_count': '', 'country': '', '# Full Address': '', 'comment': '', 'source': '', });
lyr_MarquardSchenkvonCastell_1.set('fieldLabels', {'FIELD1': 'no label', 'pers_name': 'no label', 'event_after-date': 'no label', 'event_before-date': 'no label', 'event_start': 'no label', 'event_end': 'no label', 'display_date': 'no label', 'event_type': 'no label', 'pers_function': 'no label', 'inst_name': 'no label', 'place_name': 'no label', 'place_count': 'no label', 'country': 'no label', '# Full Address': 'no label', 'comment': 'no label', 'source': 'no label', });
lyr_LotharFriedrichvonMetternichBurscheid_2.set('fieldLabels', {'FIELD1': 'no label', 'pers_name': 'no label', 'event_after-date': 'no label', 'event_before-date': 'no label', 'event_start': 'no label', 'event_end': 'no label', 'display_date': 'no label', 'event_type': 'no label', 'pers_function': 'no label', 'inst_name': 'no label', 'place_name': 'no label', 'place_count': 'no label', 'country': 'no label', '# Full Address': 'no label', 'comment': 'no label', 'source': 'no label', });
lyr_KarlEmmerichFranzvonBreidbachBrresheim_3.set('fieldLabels', {'FIELD1': 'no label', 'pers_name': 'no label', 'event_after-date': 'no label', 'event_before-date': 'no label', 'event_start': 'no label', 'event_end': 'no label', 'display_date': 'no label', 'event_type': 'no label', 'pers_function': 'no label', 'inst_name': 'no label', 'place_name': 'no label', 'place_count': 'no label', 'country': 'no label', '# Full Address': 'no label', 'comment': 'no label', 'source': 'no label', });
lyr_JohannWilhelmWolffMetternichzurGracht_4.set('fieldLabels', {'FIELD1': 'no label', 'pers_name': 'no label', 'event_after-date': 'no label', 'event_before-date': 'no label', 'event_start': 'no label', 'event_end': 'no label', 'display_date': 'no label', 'event_type': 'no label', 'pers_function': 'no label', 'inst_name': 'no label', 'place_name': 'no label', 'place_count': 'no label', 'country': 'no label', '# Full Address': 'no label', 'comment': 'no label', 'source': 'no label', });
lyr_JohannPhilippFranzGrafvonSchnborn_5.set('fieldLabels', {'FIELD1': 'no label', 'pers_name': 'no label', 'event_after-date': 'no label', 'event_before-date': 'no label', 'event_start': 'no label', 'event_end': 'no label', 'display_date': 'no label', 'event_type': 'no label', 'pers_function': 'no label', 'inst_name': 'no label', 'place_name': 'no label', 'place_count': 'no label', 'country': 'no label', '# Full Address': 'no label', 'comment': 'no label', 'source': 'no label', });
lyr_JohannHeppenheimgenanntvonSaal_6.set('fieldLabels', {'FIELD1': 'no label', 'pers_name': 'no label', 'event_after-date': 'no label', 'event_before-date': 'no label', 'event_start': 'no label', 'event_end': 'no label', 'display_date': 'no label', 'event_type': 'no label', 'pers_function': 'no label', 'inst_name': 'no label', 'place_name': 'no label', 'place_count': 'no label', 'country': 'no label', '# Full Address': 'no label', 'comment': 'no label', 'source': 'no label', });
lyr_HugoWolfgangvonKesselstatt_7.set('fieldLabels', {'FIELD1': 'no label', 'pers_name': 'no label', 'event_after-date': 'no label', 'event_before-date': 'no label', 'event_start': 'no label', 'event_end': 'no label', 'display_date': 'no label', 'event_type': 'no label', 'pers_function': 'no label', 'inst_name': 'no label', 'place_name': 'no label', 'place_count': 'no label', 'country': 'no label', '# Full Address': 'no label', 'comment': 'no label', 'source': 'no label', });
lyr_HugoFranzKarlvonEltzKempenich_8.set('fieldLabels', {'FIELD1': 'no label', 'pers_name': 'no label', 'event_after-date': 'no label', 'event_before-date': 'no label', 'event_start': 'no label', 'event_end': 'no label', 'display_date': 'no label', 'event_type': 'no label', 'pers_function': 'no label', 'inst_name': 'no label', 'place_name': 'no label', 'place_count': 'no label', 'country': 'no label', '# Full Address': 'no label', 'comment': 'no label', 'source': 'no label', });
lyr_HeinrichWilhelmHarffvonDreyborn_9.set('fieldLabels', {'FIELD1': 'no label', 'pers_name': 'no label', 'event_after-date': 'no label', 'event_before-date': 'no label', 'event_start': 'no label', 'event_end': 'no label', 'display_date': 'no label', 'event_type': 'no label', 'pers_function': 'no label', 'inst_name': 'no label', 'place_name': 'no label', 'place_count': 'no label', 'country': 'no label', '# Full Address': 'no label', 'comment': 'no label', 'source': 'no label', });
lyr_HeinrichFerdinandvonderLeyen_10.set('fieldLabels', {'FIELD1': 'no label', 'pers_name': 'no label', 'event_after-date': 'no label', 'event_before-date': 'no label', 'event_start': 'no label', 'event_end': 'no label', 'display_date': 'no label', 'event_type': 'no label', 'pers_function': 'no label', 'inst_name': 'no label', 'place_name': 'no label', 'place_count': 'no label', 'country': 'no label', '# Full Address': 'no label', 'comment': 'no label', 'source': 'no label', });
lyr_DietrichKasparvonFrstenberg_11.set('fieldLabels', {'FIELD1': 'no label', 'pers_name': 'no label', 'event_after-date': 'no label', 'event_before-date': 'no label', 'event_start': 'no label', 'event_end': 'no label', 'display_date': 'no label', 'event_type': 'no label', 'pers_function': 'no label', 'inst_name': 'no label', 'place_name': 'no label', 'place_count': 'no label', 'country': 'no label', '# Full Address': 'no label', 'comment': 'no label', 'source': 'no label', });
lyr_DamianFriedrichvonderLeyenHohengeroldseck_12.set('fieldLabels', {'FIELD1': 'no label', 'pers_name': 'no label', 'event_after-date': 'no label', 'event_before-date': 'no label', 'event_start': 'no label', 'event_end': 'no label', 'display_date': 'no label', 'event_type': 'no label', 'pers_function': 'no label', 'inst_name': 'no label', 'place_name': 'no label', 'place_count': 'no label', 'country': 'no label', '# Full Address': 'no label', 'comment': 'no label', 'source': 'no label', });
lyr_ChristophRudolfvonStadion_13.set('fieldLabels', {'FIELD1': 'no label', 'pers_name': 'no label', 'event_after-date': 'no label', 'event_before-date': 'no label', 'event_start': 'no label', 'event_end': 'no label', 'display_date': 'no label', 'event_type': 'no label', 'pers_function': 'no label', 'inst_name': 'no label', 'place_name': 'no label', 'place_count': 'no label', 'country': 'no label', '# Full Address': 'no label', 'comment': 'no label', 'source': 'no label', });
lyr_AdolphHundvonSaulheim_14.set('fieldLabels', {'FIELD1': 'no label', 'pers_name': 'no label', 'event_after-date': 'no label', 'event_before-date': 'no label', 'event_start': 'no label', 'event_end': 'no label', 'display_date': 'no label', 'event_type': 'no label', 'pers_function': 'no label', 'inst_name': 'no label', 'place_name': 'no label', 'place_count': 'no label', 'country': 'no label', '# Full Address': 'no label', 'comment': 'no label', 'source': 'no label', });
lyr_AdolphHundvonSaulheim_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});