<h2>1st geocoding test and disambiguation issues</h2>

<p align="justify">The collected data refer to biographic events in the careers of several clerics ("Domherren") active in Electoral Mainz. The first geocoding attempt (v1) was carried out in QGIS, using the <a href="https://plugins.qgis.org/plugins/mmqgis/">MMQIGS</a> plug-in and the <strong>Open Street Map / Nominatim</strong> web service for geodata. For 281 entries in the input file, the geocoding API found 1641 results, attributing alternative coordinates to several non-unique place names. This problem generally occurs when geocoding European towns which have "colonial twins" in North America, South Africa or Australia.</p>

View raw file of 1st geocoding attempt: <a href="./GeoJSON%20layers/Domherren_v1_new.geojson">Domherren_v1.geojson</a>

<h2>2nd geocoding test based on enriched CSV table</strong></h2>

<p align="justify">For the second geocoding test, the input data needed to be enriched and cleaned. In order to improve the automated place-matching, a separate table column named <code>modern_region</code> was introduced to specify in which modern countries (e.g. Germany and France) the places ought to be located. In cases where the country was not immediately clear, <code>Europe</code> was added to at least exclude overseas locations.</p> 

<img src="./images/MMQGIS_geocoding-settings.png" align="left" padding="15px" width="630px"/> 
<p align="justify">In MMQGIS, both the <code>city</code> and <code>country</code> fields could thus be filled with input data to retrieve better geocoding results (cf. QGIS screenshot above). Out of 281 table entries, 215 could now be matched with a unique location. The entries <em>not</em> geocoded did not contain spatial information in the first place.</p>

<p align="justify">Moreover, the four date columns (<code>before</code>, <code>after</code>, <code>start</code>, <code>end</code>) specifying the time-frames of events in the original CSV table were merged into one <code>display date</code> column in order to make creating a chronologically categorised map easier. The more detailed date information, however, has been kept for display in the map labels.</p>

<p align="justify">Please view or download the <a href="./CSV%20tables/FactoidList_27Juni2022_enriched.csv">updated data table in CSV format</a> or check the data with coordinates in <a href="./GeoJSON%20layers/Domherren_v2.geojson">GeoJSON format (v2)</a>.</p>

