var CACHE = 'MicrobeTraceD2019-05-20R5206';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE).then(function(cache) {
      return cache.addAll([
        './',
        'index.html',
        'package.json',
        'manifest.json',
        'favicon.ico',
        'humans.txt',
        'LICENSE',
        'vendor/bioseq.min.js',
        'vendor/patristic.min.js',
        'vendor/README.md',
        'vendor/tn93.min.js',
        'dist/bundle.js',
        'dist/bundle.min.css',
        'dist/common.js',
        'dist/index.js',
        'dist/main.css',
        'workers/align-sw.js',
        'workers/compute-consensus-distances.js',
        'workers/compute-consensus.js',
        'workers/compute-directionality.js',
        'workers/compute-dm.js',
        'workers/compute-links.js',
        'workers/compute-nn.js',
        'workers/compute-patristic-matrix.js',
        'workers/compute-tree.js',
        'workers/compute-triangulation.js',
        'workers/parse-fasta.js',
        'workers/README.md',
        'components/2d_network.html',
        'components/3d_network.html',
        'components/aggregation.html',
        'components/auditor.html',
        'components/bubbles.html',
        'components/files.html',
        'components/flow_diagram.html',
        'components/gantt.html',
        'components/geo_map.html',
        'components/globe.html',
        'components/heatmap.html',
        'components/help.html',
        'components/histogram.html',
        'components/phylogenetic_tree.html',
        'components/scatterplot.html',
        'components/sequences.html',
        'components/table.html',
        'components/timeline.html',
        'components/waterfall.html',
        'fonts/open-iconic.eot',
        'fonts/open-iconic.otf',
        'fonts/open-iconic.svg',
        'fonts/open-iconic.ttf',
        'fonts/open-iconic.woff',
        'img/android-chrome-192x192.png',
        'img/android-chrome-512x512.png',
        'img/apple-touch-icon.png',
        'img/browserconfig.xml',
        'img/favicon-16x16.png',
        'img/favicon-32x32.png',
        'img/favicon-48x48.png',
        'img/humanstxt-isolated-blank.gif',
        'img/Molecule.svg',
        'img/mstile-144x144.png',
        'img/mstile-150x150.png',
        'img/mstile-310x150.png',
        'img/mstile-310x310.png',
        'img/mstile-70x70.png',
        'img/safari-pinned-tab.svg',
        'data/counties.json',
        'data/countries.json',
        'data/land.json',
        'data/stars.json',
        'data/states.json',
        'data/tracts.csv',
        'data/zipcodes.csv',
        'help/3D-Network.md',
        'help/Acknowledgements.md',
        'help/Alignment.md',
        'help/Bubbles.md',
        'help/Contributing.md',
        'help/Distance-Matrices.md',
        'help/Distance-Metrics.md',
        'help/Edge-CSVs.md',
        'help/FASTA-Files.md',
        'help/Flow-Diagram.md',
        'help/_Footer.md',
        'help/Geospatial-Data.md',
        'help/Heatmap.md',
        'help/Histogram.md',
        'help/Home.md',
        'help/Inputs.md',
        'help/Installation.md',
        'help/Internet-Explorer.md',
        'help/Loading-Files.md',
        'help/Map.md',
        'help/MicrobeTrace-and-its-Alternatives.md',
        'help/Network-View.md',
        'help/Node-CSVs.md',
        'help/Offline.md',
        'help/References.md',
        'help/Security.md',
        'help/Sequences.md',
        'help/SNPs.md',
        'help/Style-Files.md',
        'help/Suspicious-Network-Topologies.md',
        'help/System-Requirements.md',
        'help/Table.md',
        'help/Theory.md',
        'help/Tile-Maps.md',
        'help/Troubleshooting.md',
        'help/z-Assimilating-MicrobeTrace.md',
        'help/z-Create-a-New-View.md',
        'help/z-Deployment.md',
        'help/z-Development.md',
        'help/z-Nomenclature.md',
        'help/z-Security-Considerations.md',
      ]);
    })
  );
});

self.addEventListener('fetch', function(evt){
  evt.respondWith(fetch(evt.request).catch(function(){
    return caches.open(CACHE).then(function(cache){
      return cache.match(evt.request).then(function(matching){
        return matching || Promise.reject('No Match for ', evt.request, 'in Service Worker Cache!');
      });
    });
  }));
});

