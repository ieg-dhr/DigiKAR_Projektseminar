# DigiKAR_Projektseminar

<img src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Johannes_Gutenberg-Universit%C3%A4t_Mainz_logo.svg" width="200px" align="left"/>This repository contains data and visualisations of early modern clerical biographies. The data were collected by students of history at <a href="https://www.uni-mainz.de/eng/">Mainz University</a> as part of an MA seminar in the summer term of 2022.

The foremost aim of the seminar was to train the students in working with historical sources and understanding ontological problems arising from researchers' attempts to structure and normalise biographic and spatial information.

For further information on the historical components of the project seminar, please contact <a href="https://neueregeschichte.uni-mainz.de/mitarbeiter/apl-prof-dr-bettina-braun/">apl. Prof. Dr. Bettina Braun</a>.

<hr>

<img src="https://github.com/ieg-dhr/DigiKAR_Projektseminar/blob/main/Logos_DigiKAR/DigiKAR_logo-small.png" width="150px" align="left"/> The student project is affiliated with the <a href="https://digikar.eu/">DigiKAR</a> geohumanities project which experimentally visualises spatial relations and mobility in the early modern Holy Roman Empire.

E-Mail: digikar@ieg-mainz.de
Twitter: <a href="https://mobile.twitter.com/digi_kar">@digi_KAR</a>

<hr>

<hr2>Geocoding process</hr2>

The collected data refer to biographic events in the careers of several clerics ("Domherren") active in Electoral Mainz. The first geocoding attempt (v1) was carried out in QGIS, using the <a href="https://plugins.qgis.org/plugins/mmqgis/">MMQIGS</a> app and the <strong>Open Street Map / Nominatim</strong> web service for geodata. For 371 place names in the input file, the geocoding API found 1641 results, thus attributing alternatives to several non-unique place names:

<a href="">Domherren_v1.geojson</a>

This issue generally occurs when geocoding European towns which have "colonial twins" in North America, South Africa or Australia. 



