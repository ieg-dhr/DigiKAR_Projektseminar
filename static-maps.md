<hr2><strong>Static maps highlighting alternative data aspects</strong></hr2>

As part of the seminar at JGU Mainz, the participating students were asked to create several static maps highlighting alternative data aspects:

<em>1) One approach was to visualise event times using the colouring of point geometries.</em>

(Links to student maps to be added!)

<p><em>2) Another approach was to connect events in one person's biography with straight lines to highlight individual mobility. In QGIS2, the best plug-in for converting point geometries to line geometries was <a href="https://plugins.qgis.org/plugins/pointstopaths_v02/">PointsToPaths</a>, an application developed for wildlife tracking. Unfortunately, this plug-in is no longer available in QGIS3. Alternatively, the <a href="https://plugins.qgis.org/plugins/PointConnector/">PointConnector</a> plug-in can be used. This plug-in, however, requires a separate source-to-target list in CSV or TXT format.</em></p>
  
<p><em>The comma separated txt-file (CSV-file) containing the rules need to be formatted like this: <code>[from], [to]</code>. Each row results in a straight line between the two corresponding points.</em></p>

<hr>

<stong>Example:</strong>
<blockquote>Stockholm, Paris</blockquote>
<blockquote>London, New York</blockquote>
<blockquote>Paris, London</blockquote>

<hr>
 
<p><em>Users with coding skills can write <a href="https://docs.qgis.org/2.18/en/docs/user_manual/plugins/python_console.html">Python scripts</a> to connect point geometries based on rules.</em></p>

(Links to student maps to be added!)

<em>3) The third visualisation option used <em>point clustering</em> to show the overall density of biographic events in the mapped places.</em>

(Links to student maps to be added!)
