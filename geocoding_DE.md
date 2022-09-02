<h2>Geokodierung und Disambiguierung</h2>

<p align="justify">Die gesammelten Daten beziehen sich auf zentrale Ereignisse in den Lebensläufen mehrerer im Kurfürstentum Mainz tätiger Domherren. Die erste Geokodierung (v1) wurde mit dem QGIS-Plug-In <a href="https://plugins.qgis.org/plugins/mmqgis/">MMQIGS</a> und der <strong>Open Street Map / Nominatim API</strong> für Geodaten durchgeführt. Für die 281 Ortseinträge in der Eingabedatei fand die Geokodierungs-API zunächst 1641 Ergebnisse, wobei nicht eindeutige Ortsnamen mehreren alternativen Koordinaten zugeordnet wurden. Dieses Problem tritt im Allgemeinen bei der Geokodierung europäischer Städte auf, die "koloniale Zwillinge" in Nordamerika, Südafrika oder Australien haben.</p>

Rohdaten der ersten Geokodierung: <a href="./GeoJSON%20layers/Domherren_v1_new.geojson">Domherren_v1.geojson</a>

<h2>Verbesserte Geokodierung basierend auf der erweiterten CSV Tabelle</h2>

<p align="justify">Für den zweiten Geokodierungstest mussten die Eingabedaten angereichert und bereinigt werden. Um die automatische Ortszuordnung zu verbessern, wurde eine separate Tabellenspalte namens <code>modern_region</code> eingeführt, um anzugeben, in welchen modernen Ländern (z. B. Deutschland und Frankreich) die Orte liegen sollten. In Fällen, in denen das Land nicht klar war, wurde <code>Europa</code> hinzugefügt, um zumindest Orte in Übersee auszuschließen.</p> 

<img src="./images/MMQGIS_geocoding-settings.png" align="left" padding="15px" width="630px"/> 
<p align="justify">Im MMQGIS-Bedienfeld konnten sowohl die <code>city</code> als auch die <code>country</code> Felder nun mit Eingabedaten gefüllt werden, um bessere Geokodierungsergebnisse zu erhalten (siehe QGIS-Screenshot oben). Von den 281 Tabelleneinträgen konnten schließlich 215 mit einem eindeutigen geographischen Ort verknüpft werden. Die Einträge, die <em>nicht</em> geokodiert wurden, enthielten von Anfang an keine Ortsinformationen.</p>

<p align="justify">Darüber hinaus wurden die vier Datumsspalten (<code>before</code>, <code>after</code>, <code>start</code>, <code>end</code>), die den Zeitrahmen der Ereignisse in der ursprünglichen CSV-Tabelle angeben, zu einer einzigen Spalte <code>display date</code> zusammengeführt, um die spätere Erstellung einer zeitlich möglichst feinteilig kategorisierten Karte zu vereinfachen. Die detaillierteren Datumsangaben wurden jedoch für die Anzeige in den Kartenbeschriftungen beibehalten.</p>

<p align="justify">Darüber hinaus wurden die Häufigkeiten aller Ortsnennungen gezählt und in eine weitere zusätzliche Spalte eingetragen. Diese Angaben können als <code>weight</code> verwendet werden, um bei der Erstellung einer Karte festzulegen, in welcher Größe Punktgeometrien dargestellt werden sollen.</p>

<h2>Lokalisieren aufgelöster Einrichtungen und zerstörter Gebäude</h2>

Ein Problem, das auch durch die Anreicherung der Daten nicht gelöst werden konnte, ist jedoch, dass viele frühneuzeitliche (religiöse) Einrichtungen heute nicht mehr existieren und die mit diesen Einrichtungen verbundenen Gebäude zerstört wurden. Da moderne Geokodierungs-APIs keine historischen Geodaten enthalten, müssen die Standorte solcher Orte aus Primärquellen und Sekundärwerken rekonstruiert werden. Im Fall unseres Mainzer Datensatzes konnten weder die Google- noch die Geonames-APIs die Standorte der ehemaligen Stifte <strong>St. Viktor</strong> und <strong>Mariengreden</strong> zuordnen. Die Zuordnung der ungefähren Geodaten war dank der Informationen möglich, die das <strong>Institut für Geschichtliche Landeskunde</strong> an der Universität Mainz veröffentlicht hat:

<a href="https://www.klosterlexikon-rlp.de/rheinhessen/mainz-st-victor.html">Stift St. Victor</a><br><br>
<a href="https://www.klosterlexikon-rlp.de/rheinhessen/mainz-liebfrauen-maria-ad-gradus-mariengreden.html">Liebfrauen - Maria ad gradus - Mariengreden</a>

<p align="justify">Laden Sie gerne unsere <a href="./CSV%20tables/DigiKAR_geocoding_Clerics_1August2022.csv">aktualisierte Datentabelle im CSV Format</a> herunter oder verwenden Sie den Datenexport mit Koordinaten im <a href="./GeoJSON%20layers/Domherren_v6.geojson">GeoJSON Format (v6)</a>.</p>
