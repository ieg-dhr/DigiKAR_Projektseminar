# DigiKAR_Projektseminar

<img src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Johannes_Gutenberg-Universit%C3%A4t_Mainz_logo.svg" width="200px" align="left"/>This repository contains data and visualisations of early modern clerical biographies. The data were collected by students of history at <a href="https://www.uni-mainz.de/eng/">Mainz University</a> as part of an MA seminar in the summer term of 2022.

The foremost aim of the seminar was to train the students in working with historical sources and understanding ontological problems arising from researchers' attempts to structure and normalise biographic and spatial information.

For further information on the historical components of the project seminar, please contact <a href="https://neueregeschichte.uni-mainz.de/mitarbeiter/apl-prof-dr-bettina-braun/">apl. Prof. Dr. Bettina Braun</a>.

<hr>

<img src="https://github.com/ieg-dhr/DigiKAR_Projektseminar/blob/main/Logos_DigiKAR/DigiKAR_logo-small.png" width="150px" align="left"/> The student project is affiliated with the <a href="https://digikar.eu/">DigiKAR</a> geohumanities project which experimentally visualises spatial relations and mobility in the early modern Holy Roman Empire.

E-Mail: digikar@ieg-mainz.de
Twitter: <a href="https://mobile.twitter.com/digi_kar">@digi_KAR</a>

<hr>

<hr2><strong>Geocoding process</strong></hr2>

The collected data refer to biographic events in the careers of several clerics ("Domherren") active in Electoral Mainz. The first geocoding attempt (v1) was carried out in QGIS, using the <a href="https://plugins.qgis.org/plugins/mmqgis/">MMQIGS</a> app and the <strong>Open Street Map / Nominatim</strong> web service for geodata. For 371 place names in the input file, the geocoding API found 1641 results, thus attributing alternatives to several non-unique place names. This issue generally occurs when geocoding European towns which have "colonial twins" in North America, South Africa or Australia.

View raw file of 1st geocoding attempt: <a href="./GeoJSON%20layers/Domherren_v1_new.geojson">Domherren_v1.geojson</a>

For the second geocoding trial, the input data therefore needed to be enriched and cleaned. In order to improve the automated place-matching, a separate table column named "modern_region" was introduced to specify in which modern countries (e.g. Germany and France) the places ought to be located. In cases where the country was not immediately clear, "Europe" was added to at least exclude overseas locations. 

Moreover, the four date columns (before, after, start, end) specifying the time-frame of events were merged into one "display date" column in order to make creating a chronologically categorised map easier. The more detailed date information, however, has been kept for display in the map labels.

Please view or downloaded the<a href="https://github.com/ieg-dhr/DigiKAR_Projektseminar/blob/main/CSV%20tables/FactoidList_27Juni2022_enriched.csv">updated data table in CSV format</a> or check the geocoded version in GeoJSON format (v2).

The first static map based on this GeoJSON file shows each cleric's biographically relevant places in a different colour: 



 



