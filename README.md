# DigiKAR_Projektseminar

<img src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Johannes_Gutenberg-Universit%C3%A4t_Mainz_logo.svg" width="200px" align="left"/><p align="justify">This repository contains data and visualisations of early modern clerical biographies. The data were collected by students of history at <a href="https://www.uni-mainz.de/eng/">Mainz University</a> as part of an MA seminar in the summer term of 2022. The foremost aim of the seminar was to train the students in working with historical sources and understanding ontological problems arising from researchers' attempts to structure and normalise biographic and spatial information.</p>

<p align="justify">For further information on the historical components of the project seminar, please contact <a href="https://neueregeschichte.uni-mainz.de/mitarbeiter/apl-prof-dr-bettina-braun/">apl. Prof. Dr. Bettina Braun</a>.</p>

<hr>

<img src="./Logos_DigiKAR/DigiKAR_logo-small.png" width="150px" align="left"/><p align="justify">The student project is affiliated with the <a href="https://digikar.eu/">DigiKAR</a> geohumanities project which experimentally visualises spatial relations and mobility in the early modern Holy Roman Empire.</p>

E-Mail: digikar@ieg-mainz.de
Twitter: <a href="https://mobile.twitter.com/digi_kar">@digi_KAR</a>

<hr>

<hr2><strong>1st geocoding test and disambiguation issues</strong></hr2>

<p align="justify">The collected data refer to biographic events in the careers of several clerics ("Domherren") active in Electoral Mainz. The first geocoding attempt (v1) was carried out in QGIS, using the <a href="https://plugins.qgis.org/plugins/mmqgis/">MMQIGS</a> app and the <strong>Open Street Map / Nominatim</strong> web service for geodata. For 281 entries in the input file, the geocoding API found 1641 results, attributing alternative coordinates to several non-unique place names. This problem generally occurs when geocoding European towns which have "colonial twins" in North America, South Africa or Australia.</p>

View raw file of 1st geocoding attempt: <a href="./GeoJSON%20layers/Domherren_v1_new.geojson">Domherren_v1.geojson</a>

<hr2><strong>2nd geocoding test based on enriched CSV table</strong></hr2>

<p align="justify">For the second geocoding test, the input data needed to be enriched and cleaned. In order to improve the automated place-matching, a separate table column named "modern_region" was introduced to specify in which modern countries (e.g. Germany and France) the places ought to be located. In cases where the country was not immediately clear, "Europe" was added to at least exclude overseas locations.</p> 

<img src="./images/MMQGIS_geocoding-settings.png" align="left" width="500px"/><p align="justify">In MMQGIS, both the "city" and "country" fields could thus be filled with input data to retrieve better geocoding results (cf. QGIS screenshot on the left). Out of 281 table entries, 215 could now be matched with a unique location. The entries not geocoded did not have spatial information in the first place.</p>

<p align="justify">Moreover, the four date columns (before, after, start, end) specifying the time-frame of events in the original CSV table were merged into one "display date" column in order to make creating a chronologically categorised map easier. The more detailed date information, however, has been kept for display in the map labels.</p>

<p align="justify">Please view or downloaded the <a href="./CSV%20tables/FactoidList_27Juni2022_enriched.csv">updated data table in CSV format</a> or check the version with coordinates in <a href="./GeoJSON%20layers/Domherren_v2.geojson">GeoJSON format (v2)</a>.</p>

<hr2><strong>1st static map showing places linked with persons</strong></hr2>

<p align="justify">The first <a href="https://ieg-dhr.github.io/DigiKAR_Projektseminar/qgis2web_Domherren_v2/index.html">zoomable map</a> based on this GeoJSON file shows each cleric's biographically relevant places in a different colour. THe individual layers per person can be (de-)selected in the interactive legend on the right. However, this map needs improvement as points in one place are currently overlapping, so not all relevant events might be visible at all ZOOM levels.</p>

<a href="https://ieg-dhr.github.io/DigiKAR_Projektseminar/qgis2web_Domherren_v2/index.html"><img src="./images/Domherren_v2_map-screenshot.png" width="600px" align="center"/></a>



 



