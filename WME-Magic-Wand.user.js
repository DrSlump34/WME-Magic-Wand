// ==UserScript==
// @name         WME Magic Wand
// @name:fr      WME Magic Wand
// @name:de      WME Magic Wand
// @name:es      WME Magic Wand
// @name:it      WME Magic Wand
// @name:pt-BR   WME Magic Wand
// @name:pt      WME Magic Wand
// @name:he      WME Magic Wand
// @icon         data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0Jz48cGF0aCBkPSdNMy41IDIwLjUgTDE0IDEwJyBzdHJva2U9JyM2MDdkOGInIHN0cm9rZS13aWR0aD0nMi44JyBzdHJva2UtbGluZWNhcD0ncm91bmQnLz48cGF0aCBkPSdNMTcgMi4yIEwxOC4yIDUuMyBMMjEuMyA2LjUgTDE4LjIgNy43IEwxNyAxMC44IEwxNS44IDcuNyBMMTIuNyA2LjUgTDE1LjggNS4zIFonIGZpbGw9JyNmYjhjMDAnLz48cGF0aCBkPSdNNy41IDMgTDguMSA0LjYgTDkuNyA1LjIgTDguMSA1LjggTDcuNSA3LjQgTDYuOSA1LjggTDUuMyA1LjIgTDYuOSA0LjYgWicgZmlsbD0nI2ZiOGMwMCcvPjxwYXRoIGQ9J00yMCAxNC4yIEwyMC41IDE1LjUgTDIxLjggMTYgTDIwLjUgMTYuNSBMMjAgMTcuOCBMMTkuNSAxNi41IEwxOC4yIDE2IEwxOS41IDE1LjUgWicgZmlsbD0nIzYwN2Q4YicvPjwvc3ZnPg==
// @namespace    https://github.com/DrSlump34
// @version      0.10.00
// @description  Click inside a lake, a forest or a field on the satellite imagery: the wand traces its outline and offers it as an area place. It also squares, simplifies, rotates, resizes and clones places. A rewrite for the WME SDK of WME MagicWand by WASD42.
// @description:fr Cliquez dans un lac, une forêt ou un champ sur l'imagerie satellite : la baguette en trace le contour et le propose comme lieu de type zone. Elle met aussi les lieux d'équerre, les simplifie, les fait pivoter, les redimensionne et les clone. Réécriture pour le SDK de WME MagicWand de WASD42.
// @description:de Im Satellitenbild in einen See, einen Wald oder ein Feld klicken: der Zauberstab zeichnet den Umriss und schlägt ihn als Flächen-Ort vor. Er macht Orte auch rechtwinklig, vereinfacht, dreht, skaliert und klont sie. Eine Neufassung für das WME-SDK von WME MagicWand von WASD42.
// @description:es Haga clic dentro de un lago, un bosque o un campo en la imagen satelital: la varita traza su contorno y lo propone como lugar de tipo área. También escuadra, simplifica, gira, redimensiona y clona lugares. Reescritura para el SDK de WME MagicWand de WASD42.
// @description:it Fai clic dentro un lago, un bosco o un campo sulle immagini satellitari: la bacchetta ne traccia il contorno e lo propone come luogo di tipo area. Squadra, semplifica, ruota, ridimensiona e clona anche i luoghi. Riscrittura per l'SDK di WME MagicWand di WASD42.
// @description:pt-BR Clique dentro de um lago, uma floresta ou um campo na imagem de satélite: a varinha traça o contorno e o propõe como lugar de tipo área. Também esquadreja, simplifica, gira, redimensiona e clona lugares. Reescrita para o SDK do WME MagicWand de WASD42.
// @description:pt Clique dentro de um lago, uma floresta ou um campo na imagem de satélite: a varinha traça o contorno e propõe-o como local de tipo área. Também esquadria, simplifica, roda, redimensiona e clona locais. Reescrita para o SDK do WME MagicWand de WASD42.
// @description:he לחצו בתוך אגם, יער או שדה בתצלום הלוויין: השרביט משרטט את קו המתאר ומציע אותו כמקום מסוג שטח. הוא גם מיישר זוויות, מפשט, מסובב, משנה גודל ומשכפל מקומות. כתיבה מחדש עבור ה-SDK של WME MagicWand מאת WASD42.
// @author       DrSlump34
// @copyright    2014-2018 Vadim Istratov (WASD42); 2026 DrSlump34
// @license      MIT
// @homepageURL  https://github.com/DrSlump34/WME-Magic-Wand
// @supportURL   https://www.waze.com/discuss/t/script-wme-magic-wand/415877
// @downloadURL  https://update.greasyfork.org/scripts/603149/WME%20Magic%20Wand.user.js
// @updateURL    https://update.greasyfork.org/scripts/603149/WME%20Magic%20Wand.meta.js
// @match        https://www.waze.com/*/editor*
// @match        https://www.waze.com/editor*
// @match        https://beta.waze.com/*/editor*
// @match        https://beta.waze.com/editor*
// @exclude      https://www.waze.com/*user/*editor/*
// @exclude      https://www.waze.com/discuss/*
// @exclude      https://www.waze.com/editor/sdk/*
// @exclude      https://beta.waze.com/*user/*editor/*
// @exclude      https://beta.waze.com/editor/sdk/*
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @connect      update.greasyfork.org
// @connect      raw.githubusercontent.com
// @connect      data.geopf.fr
// @connect      earthengine.googleapis.com
// @run-at       document-idle
// ==/UserScript==

/*  CREDITS — this script is a rewrite, not an original work.
 *
 *  WME MagicWand was created by WASD42 (Vadim Istratov), 2014-2018, MIT licence:
 *      https://greasyfork.org/scripts/6512 · https://github.com/WASD42/WME-MagicWand
 *  It was later maintained in the mapomatic fork by justins83, MapOMatic, FXZFun and karlsosha:
 *      https://github.com/mapomatic/WME-MagicWand
 *  Its squaring tool is the orthogonalize action of the OpenStreetMap editor iD (ISC licence,
 *  https://github.com/openstreetmap/iD), as adapted by WASD42; the port below follows his version.
 *  The colour comparison (sRGB → CIE Lab, CIE94 distance) also follows his code.
 *
 *  What is new here: the WME SDK instead of W/OpenLayers (W is retired on 24/11/2026), an outline
 *  traced exactly from the filled pixels instead of a concave hull, a live preview, and rotating
 *  and resizing by dragging on the map. See LICENSE for both copyright notices.
 */

/*  La baguette lit l'imagerie satellite que WME affiche déjà : elle relit les mêmes tuiles (le
 *  serveur les sert en CORS, alors que les <img> de la carte « salissent » tout canvas), remplit
 *  à partir du point cliqué les pixels de couleur voisine, trace le contour exact de cette tache
 *  et le propose comme lieu de type zone. Rien n'est créé avant « Créer le lieu ».
 *
 *  Les outils de forme (cloner, mettre d'équerre, simplifier, pivoter, redimensionner) agissent
 *  sur le lieu sélectionné. Toute modification passe par la pile d'annulation de WME : rien n'est
 *  enregistré sans l'éditeur.
 */

(function _wmeIntegre() {
    'use strict';

    // Tampermonkey exécute le script dans un `with` posé sur un Proxy : chaque lecture d'un global
    // traverse ce Proxy. Dans une boucle chaude (Math.max, Math.ceil pour chaque pixel), c'est 250 fois
    // plus lent — mesuré le 31/10/2026 : l'analyse d'un clic prenait 9 s dans Tampermonkey contre
    // 0,4 s injectée dans la page. Liés ici une fois, ces globaux deviennent des variables locales.
    const Math = globalThis.Math, Number = globalThis.Number, Date = globalThis.Date;

    const SCRIPT_ID = 'wme-magic-wand';
    const SCRIPT_NAME = 'WME Magic Wand';
    const VERSION = (typeof GM_info !== 'undefined' && GM_info.script && GM_info.script.version) || 'dev';
    const BAR_ID = 'wmw-bar';
    const CARTE_ID = 'wmw-carte';
    const TOAST_ID = 'wmw-toast';
    const FAB_ID = 'wmw-fab';
    const CALQUE_APERCU = 'wmw-apercu';
    const CALQUE_SURLIGNAGE = 'wmw-surlignage';
    const OPTS_KEY = 'wmw.opts';
    const URL_GH = 'https://github.com/DrSlump34/WME-Magic-Wand';
    const URL_GF = 'https://greasyfork.org/scripts/603149-wme-magic-wand';
    const URL_DISCUSS = 'https://www.waze.com/discuss/t/script-wme-magic-wand/415877';
    const URL_ORIG_GF = 'https://greasyfork.org/scripts/6512';
    const URL_ORIG_GH = 'https://github.com/WASD42/WME-MagicWand';
    const URL_FORK = 'https://github.com/mapomatic/WME-MagicWand';
    const URL_ID = 'https://github.com/openstreetmap/iD';

    // Bornes de la baguette. Un écran 4K couvre ~16 × 9 tuiles : au-delà de MAX_TUILES_COTE on
    // ne lit que le voisinage du clic, sinon le calcul et la mémoire s'envolent pour rien.
    const MAX_TUILES_COTE = 10;
    const MAX_SOMMETS = 1000;     // plafond STRICT d'un contour : au-delà, la précision est relâchée
    const MIN_PIXELS = 30;        // une tache plus petite n'est pas une zone
    const NIV_MAX = 60;           // tolérance la plus haute du curseur : l'inondation s'arrête là
    // L'écart CIE94 est multiplié par ce facteur pour parler la même échelle que l'écart par canal :
    // une même tolérance doit donner à peu près la même étendue avec les deux méthodes. Mesuré le
    // 31/10/2026 sur l'imagerie de Villepinte (7 points : bois, gravier, champ, pelouse, toits, route) :
    // tolérance par canal ÷ tolérance CIE94 de même surface = 2,58 en médiane (quartiles 2,2 et 2,77).
    const ECHELLE_CIE94 = 2.5;
    const DECALAGE_CLONE = 50;    // mètres Mercator : décalage d'une copie de lieu point, comme l'original (geometry.move(50, 50))
    const MARGE_CLONE = 10;       // mètres Mercator entre un lieu de type zone et sa copie posée à côté
    const RAYON_POINT_CLONE = 10; // mètres Mercator : une copie de lieu point n'est pas posée sur un autre point
    const ECART_SURLIGNAGE = 2;   // mètres Mercator, comme l'original
    const MAX_SURLIGNES = 400;
    const MAX_SOMMETS_SURLIGNES = 40; // au-delà, un contour est une forme naturelle : jamais surligné
    const MIN_COINS_EQUERRE = 3;      // coins presque droits exigés pour mettre d'équerre (n > 3)
    const MAX_DELTA_AIRE_EQUERRE = 0.08; // variation d'aire tolérée par la mise d'équerre (8 % : un rectangle
                                         // de 30 × 20 m au sommet presque plat en perd 4 %, banc)
    const MIN_M2 = 25;                // une tache plus petite au sol n'est pas un lieu (zooms 19-20)
    const MAX_PX_UNION = 4000000;     // trame d'une réunion de contours : au-delà, ses cases grossissent (× 2)
    const MAX_VIDE_UNION = 3;         // vide comblé entre deux zones à réunir, en cases de la trame (pixels de l'imagerie) :
                                      // deux taches de forêt voisines, tracées à la même tolérance, sont séparées de
                                      // quelques pixels hors tolérance (mesuré dans WME le 04/11/2026)
    const MAX_PX_EVITER = 4000000;    // trame des lieux à éviter : au-delà, ses cases grossissent (× 2)
    const R_TERRE = 6378137;

    const pw = (typeof unsafeWindow !== 'undefined') ? unsafeWindow : window;

    // L'icône de l'en-tête (@icon), détourée : baguette ardoise, étincelles orange.
    const icone = h => '<svg xmlns="http://www.w3.org/2000/svg" width="' + h + '" height="' + h + '" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
        '<path d="M3.5 20.5 L14 10" stroke="#607d8b" stroke-width="2.8" stroke-linecap="round"/><path d="M17 2.2 L18.2 5.3 L21.3 6.5 L18.2 7.7 L17 10.8 L15.8 7.7 L12.7 6.5 L15.8 5.3 Z" fill="#fb8c00"/><path d="M7.5 3 L8.1 4.6 L9.7 5.2 L8.1 5.8 L7.5 7.4 L6.9 5.8 L5.3 5.2 L6.9 4.6 Z" fill="#fb8c00"/><path d="M20 14.2 L20.5 15.5 L21.8 16 L20.5 16.5 L20 17.8 L19.5 16.5 L18.2 16 L19.5 15.5 Z" fill="#607d8b"/></svg>';

    let sdk = null;
    const OPTS_DEFAUT = { categorie: 'FOREST_GROVE', algo: 'rgb', tolerance: 15, lissage: 2, precision: 1.5, angle: 12, simplification: 3, surligner: false, toutesCategories: false, curseur: 'baguette', barre: 'dessus', eviter: true, marge: 50, verrou: 0, guideBdTopo: false };
    // Ce que la baguette trace le plus souvent : des zones naturelles. Les 132 catégories de WME
    // noyaient la liste (demande de l'auteur, 31/10/2026) ; la liste entière est une option de
    // l'onglet. Identifiants relevés dans WME le 31/10/2026 (getAllVenueCategories).
    // Pointeurs de la baguette (demande de l'auteur, 31/10/2026 : la croix se confondait avec la
    // création d'un giratoire). SVG 32 px, liseré blanc pour rester lisible sur l'imagerie ; le
    // point chaud est là où le clic analyse. La croix reste proposée, en dernier.
    const svgCurseur = (corps, x, y, repli) => 'url("data:image/svg+xml,' + encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'>" + corps + '</svg>') + '") ' + x + ' ' + y + ', ' + repli;
    // Place de la barre flottante des outils de forme (demande de jmbox, 04/11/2026 : elle gênait
    // le déplacement d'un lieu ponctuel).
    const POSITIONS_BARRE = ['dessus', 'dessous', 'masquee'];
    const CURSEURS = {
        baguette: svgCurseur(
            "<path d='M8 8L29 29' stroke='#fff' stroke-width='6.5' stroke-linecap='round'/>" +
            "<path d='M8 8L29 29' stroke='#37474f' stroke-width='3.5' stroke-linecap='round'/>" +
            "<path d='M8.5 8.5L12.5 12.5' stroke='#fff' stroke-width='3.5' stroke-linecap='round'/>" +
            "<path d='M5 .8l1.3 2.6 2.9.4-2.1 2 .5 2.9L5 7.3 2.4 8.7l.5-2.9-2.1-2 2.9-.4z' fill='#ffc107' stroke='#6d4c41' stroke-width='.9' stroke-linejoin='round'/>" +
            "<path d='M13 2.5v3M11.5 4h3M2.5 13v3M1 14.5h3' stroke='#ffc107' stroke-width='1.4' stroke-linecap='round'/>", 5, 5, 'crosshair'),
        pipette: svgCurseur(
            "<path d='M3 29l2-6 13-13 4 4L9 27z' fill='#fff' stroke='#37474f' stroke-width='1.8' stroke-linejoin='round'/>" +
            "<path d='M17 7l8 8' stroke='#fff' stroke-width='7.5' stroke-linecap='round'/>" +
            "<path d='M17 7l8 8' stroke='#37474f' stroke-width='4.5' stroke-linecap='round'/>" +
            "<circle cx='24.5' cy='7.5' r='5' fill='#37474f' stroke='#fff' stroke-width='1.5'/>", 3, 29, 'crosshair'),
        viseur: svgCurseur(
            "<circle cx='16' cy='16' r='9' fill='none' stroke='#fff' stroke-width='5'/>" +
            "<circle cx='16' cy='16' r='9' fill='none' stroke='#1976d2' stroke-width='2.5'/>" +
            "<circle cx='16' cy='16' r='2.6' fill='#1976d2' stroke='#fff' stroke-width='1.4'/>", 16, 16, 'crosshair'),
        fleche: 'default',
        croix: 'crosshair',
    };
    function appliquerCurseur() {
        try { document.documentElement.style.setProperty('--wmw-curseur', CURSEURS[opts.curseur] || CURSEURS.baguette); } catch (e) { }
    }

    const CATS_BASE = ['NATURAL_FEATURES', 'FOREST_GROVE', 'SEA_LAKE_POOL', 'RIVER_STREAM', 'CANAL', 'SWAMP_MARSH', 'ISLAND', 'BEACH', 'PARK', 'FARM', 'GOLF_COURSE'];
    // Bornes [min, max, pas] des réglages : lues par lireOpts, par les curseurs de l'onglet et par
    // celui de la carte d'aperçu (elles étaient recopiées en trois endroits, et divergeaient).
    const BORNES = { tolerance: [1, NIV_MAX, 1], lissage: [0, 5, 1], precision: [0.5, 6, 0.5], angle: [1, 30, 1], simplification: [0.5, 20, 0.5], marge: [0, 300, 5] };
    let opts = Object.assign({}, OPTS_DEFAUT);

    const log = m => console.log('[WMW] ' + m);
    const dejaDit = new Set();
    const logUneFois = (cle, m) => { if (!dejaDit.has(cle)) { dejaDit.add(cle); log(m); } };
    const escHtml = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

    // =====================================================================
    //  I18N — détection sur la locale de WME, repli sur l'anglais
    // =====================================================================

    const DICO = {
        en: {
            btnOn: 'Start the magic wand',
            btnOff: 'Stop the magic wand',
            tipFab: 'Magic wand: click inside an area on the satellite imagery',
            stOff: 'The wand is off.',
            stWait: 'Click inside an area on the satellite imagery.',
            stRead: 'Reading the imagery…',
            stTiles: (a, b) => 'Reading the imagery… ' + a + '/' + b + ' tiles',
            stColours: 'Comparing the colours…',
            sbHint: 'Click inside a lake, a forest or a field on the satellite imagery: the wand traces its outline and offers it as an area place. It also squares, simplifies, rotates, resizes and clones places.',
            secWand: 'Magic wand',
            secShape: 'Shape tools',
            lblCat: 'Category of new places',
            lblAlgo: 'Colour matching',
            algoRgb: 'Colour distance (per channel)',
            algoLab: 'Human-eye similarity (CIE94)',
            lblTol: 'Tolerance',
            lblTolHint: 'Higher takes in more shades. Usually 10 to 30.',
            lblSmooth: 'Smoothing',
            lblSmoothHint: 'Each pixel is averaged with its neighbours within this radius (pixels). 0: off.',
            lblDetail: 'Outline gap (px)',
            lblDetailHint: 'How far the outline may stray from the pixels. Higher: fewer points, coarser outline.',
            lblAngle: 'Squaring threshold (°)',
            lblAngleHint: 'Only corners within this many degrees of a right or a straight angle are squared.',
            lblSimp: 'Simplification (m)',
            lblSimpHint: 'Simplify removes the points closer than this to the outline.',
            lblHl: 'Highlight places that are almost square',
            lblHlHint: 'Outlines in orange the area places that Square would change.',
            noImagery: 'Show the satellite imagery first (Layers ▸ Satellite imagery): the wand reads it.',
            tileErr: 'The imagery could not be read. Move the map slightly and try again.',
            tooSmall: 'Nothing to trace here: the area is too small. Raise the tolerance or click elsewhere.',
            tooComplex: 'The outline is too intricate here to make a place of it. Lower the tolerance or click nearer the middle of the area; if need be, raise the outline gap (Scripts tab).',
            edge: 'The area continues beyond the screen: zoom out to take it in whole.',
            analysisErr: 'The analysis failed. Click again; if it keeps failing, reload WME.',
            invalidShape: 'The outline would cross itself: nothing was changed.',
            noPlace: 'Select a place first.',
            tilesMissing: 'Some imagery tiles could not be read: the outline may be incomplete.',
            edgeCut: 'The area goes beyond what the wand reads at once: zoom out to take it in whole.',
            dupe: 'An area place already overlaps this outline: check it before creating another.',
            dupeUnknown: 'The places could not be read: no duplicate check. Look at the map before creating.',
            closedGaps: 'Narrow gaps were filled so that the outline does not cross itself.',
            previewErr: 'The preview layer could not be added: reload WME.',
            tileFormat: 'The imagery tiles have changed format: the wand cannot read them. Please report it on the Discuss thread.',
            kEsc: 'Esc',
            creditGh: 'GitHub (WASD42)',
            relaxed: n => 'Outline simplified more than set, to stay under ' + n + ' points.',
            groundPx: m => '1 pixel of imagery ≈ ' + m,
            pvTitle: 'Magic wand',
            pvStats: (n, aire) => n + ' points · ' + aire,
            btnCreate: 'Create the place',
            btnCancel: 'Cancel',
            created: 'Place created: check it, then save.',
            createErr: m => 'WME refused the place: ' + m,
            lblShape: 'Shape',
            tipClone: 'Clone: copy this place next to it, with the same categories',
            tipOrtho: 'Square: straighten the corners that are almost right angles',
            tipSimp: 'Simplify: remove the points that add nothing to the outline',
            tipRot: 'Rotate: drag on the map (Shift: 15° steps)',
            tipRes: 'Resize: drag on the map, the shape is kept',
            tipPointOnly: 'Point place: only Clone applies',
            modeRot: 'Drag on the map to rotate the place. Shift: 15° steps. Esc to finish.',
            modeRes: 'Drag on the map to resize the place. Esc to finish.',
            nothingOrtho: 'No corner to square at this threshold.',
            nothingSimp: 'Nothing to simplify at this setting.',
            done: 'Done. Undo (Ctrl+Z) reverts it.',
            editErr: m => 'WME refused the change: ' + m,
            scToggle: 'Magic wand: start / stop',
            scClone: 'Clone the selected place',
            scOrtho: 'Square the selected place',
            scSimp: 'Simplify the selected place',
            scRot: 'Rotate the selected place (drag on the map)',
            scRes: 'Resize the selected place (drag on the map)',
            keysRot: 'Keys ← →: 1° steps (Shift: 15°).',
            keysRes: 'Keys ↑ ↓: 1% steps (Shift: 10%).',
            scCentre: 'Magic wand at the centre of the map',
            sbHelp: 'Help',
            hWandT: 'The wand',
            hWandB: '<p>Start the wand (map button, button above or shortcut), then click inside a lake, a forest or a field: it takes in the neighbouring pixels of a similar colour and draws their outline.</p><p>Adjust the <b>tolerance</b> in the card at the bottom of the map (the outline follows live), choose the category, then <b>Create the place</b> (<kbd>Enter</kbd>). <kbd>Esc</kbd> cancels.</p><p>The wand reads the satellite imagery that WME already shows, inside the editor and only for the calculation: nothing is kept or sent anywhere.</p>',
            hAlgoT: 'Colour matching',
            hAlgoB: e => '<p><b>Colour distance (per channel)</b> compares red, green and blue separately and keeps the largest of the three gaps. Simple and predictable: it is the default, and in our tests it was the easiest to set — the outline stayed stable over a wider range of the slider.</p><p><b>Human-eye similarity (CIE94)</b> converts the colours to CIE Lab, a space built on how the eye perceives them, and measures the CIE94 gap. Its scale is brought onto the per-channel one (× ' + e + ', measured), so the same tolerance takes in roughly the same extent with either method. Worth a try when the per-channel distance does not separate the area from its surroundings.</p><p><b>Smoothing</b> averages each pixel with its neighbours first: it irons out the texture of trees or crops. Changing the method or the smoothing redoes the analysis of the last click.</p>',
            hToolsT: 'Shape tools',
            hToolsB: '<p>Select one or more places: a bar of <b>shape tools</b> floats on the map, just above them.</p><table class="wmw-help-table"><tr><td>&#x29C9;</td><td>Clone: a copy placed beside it, never over it or over another area place, with the same categories; no name, and the default lock of a new place.</td></tr><tr><td>&#x221F;</td><td>Square: corners close to 90° or 180° become exact (threshold above).</td></tr><tr><td>&#x2248;</td><td>Simplify: removes the points that add nothing (Simplification setting above).</td></tr><tr><td>&#x27F3;</td><td>Rotate: drag on the map around the place. <kbd>Shift</kbd>: 15° steps.</td></tr><tr><td>&#x2922;</td><td>Resize: drag away from or towards the centre.</td></tr></table><p>Each action is one step in the WME undo stack.</p>',
            hKeysT: 'Keyboard',
            hKeysB: '<p>Seven shortcuts are listed <b>without keys</b> under Settings › Keyboard shortcuts, so as not to take any from another script. Assign the ones you want there.</p><p>The centre-of-map shortcut runs the wand where the map is centred: the keyboard alone is enough. In Rotate or Resize, the arrow keys turn or scale the selected place step by step.</p>',
            hCredT: 'Credits',
            hCredB: '<p>A rewrite, for the WME SDK, of <a href="' + URL_ORIG_GF + '" target="_blank" rel="noopener">WME MagicWand</a> by <b>WASD42</b> (Vadim Istratov, 2014-2018, MIT licence), later maintained in the <a href="' + URL_FORK + '" target="_blank" rel="noopener">mapomatic fork</a> by justins83, MapOMatic, FXZFun and karlsosha.</p><p>Squaring is the orthogonalize action of the OpenStreetMap editor <a href="' + URL_ID + '" target="_blank" rel="noopener">iD</a> (ISC licence), as adapted by WASD42. The colour comparison (CIE Lab, CIE94) also follows his code.</p><p>Changes: the outline is traced exactly from the pixels instead of a concave hull, and rotating and resizing are done by dragging on the map. The straight-angle helper (Shift while dragging a vertex) is gone: the SDK gives no access to WME\'s own vertex dragging.</p>',
            creditLine: 'Based on WME MagicWand by WASD42',
            hSafeB: 'Every change goes through the WME undo stack: nothing is saved until you save.',
            lnkDiscuss: 'Discuss thread',
            majBtn: v => 'Version ' + v + ' is available',
            majInstall: 'Install',
            lblAllCats: 'Offer every category',
            lblAllCatsHint: 'Off: only natural areas (forest, lake, beach, park…) are offered for new places.',
            lblBdTopo: 'Show BD TOPO outlines (France)',
            lblBdTopoHint: 'Vegetation, water and buildings from the IGN BD TOPO, drawn as dashed lines from zoom 16 (buildings from zoom 17). A guide to check your outline against the imagery: nothing is imported. Source accredited by Waze for display.',
            bdtopoEtat: 'BD TOPO: {n} outline(s) shown',
            bdtopoZoom: 'BD TOPO: zoom in (16 or more) to see the outlines',
            bdtopoErr: 'BD TOPO: not available ({e})',
            bdtopoTrop: 'BD TOPO: too many objects here, some are missing',
            lblAvoid: 'Stay out of places of the same category',
            lblAvoidHint: 'On: the traced area stops at the area places of the chosen category. The place selected before the click is not avoided (Replace, Extend).',
            lblMargin: 'Overlap allowed with a neighbour (m)',
            lblLock: "Lock of the places created",
            lockDefault: "WME default",
            lblLockHint: "Lock level given to a place created by the wand, capped at your own rank. Clone, Replace and Extend do not change it.",
            lockErr: m => "Place created, but its lock could not be set: " + m,
            lblMarginHint: 'The area may run this far into a neighbouring place, for a clean shared border, but never more than half its depth: a small place is never covered whole. 0: no overlap at all.',
            inPlace: n => n ? 'This click falls inside “' + n + '”, a place of the same category: nothing is traced.' : 'This click falls inside a place of the same category: nothing is traced.',
            inTraced: 'This click falls inside the area already traced: nothing to add.',
            surrounds: (n, nom) => n > 1 ? 'The area surrounds ' + n + ' places of the same category: it covers them (a place cannot have a hole).' : nom ? 'The area surrounds “' + nom + '”, a place of the same category: it covers it (a place cannot have a hole).' : 'The area surrounds a place of the same category: it covers it (a place cannot have a hole).',
            lblCursor: 'Wand pointer',
            curWand: 'Magic wand',
            curPicker: 'Eyedropper',
            curTarget: 'Target',
            curArrow: 'Arrow',
            curCross: 'Cross', lblBar: 'Toolbar on the map', barAbove: 'Above the place', barBelow: 'Below the place', barOff: 'Hidden',
            btnReplace: n => 'Replace the outline of “' + n + '”',
            btnReplaceAnon: 'Replace the outline of the place selected before the click',
            replaced: 'Outline replaced: check it, then save.',
            pvParts: n => n + ' areas',
            hintAdd: 'Alt + click: add an area',
            dragTip: 'Drag to move · double-click to put it back',
            apart: 'This click does not touch the area traced so far: it is not added.',
            btnExtend: n => 'Extend “' + n + '” with this area',
            btnExtendAnon: 'Extend the place selected before the click with this area',
            extended: 'Place extended: check it, then save.',
            extendApart: 'The traced area does not touch this place: nothing was changed.',
            lblOnSel: 'On the selection',
            lblOnSelHint: 'Clone, Square or Simplify every selected place at once.',
            oneOnly: 'Rotate and Resize work on one place at a time.',
            batchProgress: (a, b) => 'Batch: ' + a + '/' + b + '…',
            batchDone: (ok, n) => 'Batch done: ' + ok + ' of ' + n + ' places changed',
            batchSame: n => n + ' unchanged',
            batchRefused: n => n + ' refused by WME',
            batchQuota: (n, h) => n + ' not processed: hourly limit reached, resumes at ' + h,
            quotaFull: h => 'Hourly limit of scripted edits reached: resumes at ' + h + '.',
            hReplB: '<p>If one area place is selected when you click, the window also offers <b>Replace the outline</b> of that place with the traced one. It is a secondary button: <kbd>Enter</kbd> still creates a new place.</p><p><kbd>Alt</kbd> + click while the window is open <b>adds</b> an area to the outline (what the tolerance left out, or what was off-screen); the tolerance then adjusts the last click. If an area place was selected before the click, <b>Extend</b> merges the traced area into that place’s outline, if they touch or overlap. The merged outline is retraced at the wand’s precision.</p>',
            hAvoidT: 'Stay out of neighbouring places',
            hAvoidB: '<p>With <b>Stay out of places of the same category</b> (on by default), the traced area stops at the area places of the chosen category: it no longer lies over a forest or a lake that is already mapped. If a place cuts the area in two, only the part you clicked is kept. A click inside such a place traces nothing.</p><p>The <b>overlap allowed</b> (0 to 300 m, 50 by default) lets the area run a little into the neighbour, for a clean shared border, but never more than half its depth: a small place is never covered whole. A place entirely surrounded by the area (a clearing in the middle of a forest) cannot be avoided, since a Waze place cannot have a hole: the window says so.</p><p>With <kbd>Alt</kbd> + click, the same rule applies to every area added; a click inside the area already traced adds nothing. The place selected before the click is not avoided (Replace, Extend).</p>',
            hLotB: '<p>With several places selected, Clone, Square and Simplify apply to each of them (the “On the selection” buttons above, or the shortcuts), with a summary at the end. Each place changed counts towards the hourly limit (section below). Rotate and Resize work on one place at a time. These tools work on places only.</p>',
            quotaLeft: (r, m) => 'Scripted edits this hour: ' + r + ' left of ' + m,
            quotaShort: (r, m) => r + '/' + m,
            quotaTip: 'Sliding hour, every tool of the script included. One edit = one place changed between two saves; reserved when written, counted when saved.',
            quotaBlocked: 'The edit counter was altered: scripted edits are blocked for an hour.',
            cloneNoRoom: 'No free spot beside this place: nothing was cloned (the copy would have covered a place).',
            cloneUnknown: 'The places could not be read: nothing was cloned (no duplicate check possible).',
            batchNoRoom: n => n + ' not cloned: no free spot beside the original',
            hQuotaT: 'Hourly limit',
            hQuotaB: (e, m) => '<p>At most <b>' + m + ' scripted edits per sliding hour</b> and per editor (French scripts doctrine), whatever the tool: place created by the wand, outline replaced, Clone, Square, Simplify, Rotate, Resize, on one place or on a batch. What is left is shown in this tab, in the wand window and in the tool bar. No setting raises it.</p><p>One edit = one place changed between two saves, as WME saves it: several steps on the same place (arrow keys of Rotate, a clone and its categories) count once. An edit is reserved when the script writes it and counted when you save; leaving the page without saving gives the reservations back; an edit undone with Ctrl+Z stays reserved until its hour is over.</p>',
            hSrcT: 'Sources and data',
            hSrcB: '<p><b>Imagery</b>: the wand reads the satellite imagery displayed by WME (provided by Google through WME), including the extra imagery layers you have turned on in WME (Pléiades, WorldView…), stacked as on screen; their tiles come from earthengine.googleapis.com. Inside the editor, on your click, it re-reads the tiles WME has just shown — same address, without cookies — around the click only, and only for the calculation: nothing is kept once the wand is stopped, and nothing reaches the map but the outline you accept.</p><p><b>Version check</b>: at start-up the script reads <code>version-min.json</code> from its GitHub repository (raw.githubusercontent.com) — a withdrawn or altered version does not start; once a day it reads the version published on GreasyFork (update.greasyfork.org). These requests carry nothing but the request itself. For an unpublished version, your user name (read in WME, or from Waze Discuss on the same site) is compared on your computer only.</p><p>Nothing else leaves the browser. Credits: WASD42, the mapomatic fork and iD (next section).</p>',
        },
        fr: {
            btnOn: 'Activer la baguette',
            btnOff: 'Arrêter la baguette',
            tipFab: 'Baguette magique\u00a0: cliquez dans une zone sur l\'imagerie satellite',
            stOff: 'La baguette est arrêtée.',
            stWait: 'Cliquez dans une zone sur l\'imagerie satellite.',
            stRead: 'Lecture de l\'imagerie…',
            stTiles: (a, b) => 'Lecture de l\'imagerie… ' + a + '/' + b + ' tuiles',
            stColours: 'Comparaison des couleurs…',
            sbHint: 'Cliquez dans un lac, une forêt ou un champ sur l\'imagerie satellite\u00a0: la baguette en trace le contour et le propose comme lieu de type zone. Elle met aussi les lieux d\'équerre, les simplifie, les fait pivoter, les redimensionne et les clone.',
            secWand: 'Baguette magique',
            secShape: 'Outils de forme',
            lblCat: 'Catégorie des nouveaux lieux',
            lblAlgo: 'Comparaison des couleurs',
            algoRgb: 'Écart de couleur (par canal)',
            algoLab: 'Ressemblance pour l\'œil (CIE94)',
            lblTol: 'Tolérance',
            lblTolHint: 'Plus haut, elle englobe plus de nuances. En général de 10 à 30.',
            lblSmooth: 'Lissage',
            lblSmoothHint: 'Chaque pixel est moyenné avec ses voisins dans ce rayon (pixels). 0\u00a0: sans.',
            lblDetail: 'Écart permis du contour (px)',
            lblDetailHint: 'Distance permise entre le contour et les pixels. Plus haut\u00a0: moins de points, contour plus grossier.',
            lblAngle: 'Seuil d\'équerrage (°)',
            lblAngleHint: 'Seuls les angles à moins de ce nombre de degrés d\'un angle droit ou plat sont redressés.',
            lblSimp: 'Simplification (m)',
            lblSimpHint: 'Simplifier retire les points plus proches que cela du contour.',
            lblHl: 'Surligner les lieux presque d\'équerre',
            lblHlHint: 'Entoure en orange les lieux de type zone que «\u00a0D\'équerre\u00a0» modifierait.',
            noImagery: 'Affichez d\'abord l\'imagerie satellite (Calques ▸ Imagerie satellite)\u00a0: la baguette la lit.',
            tileErr: 'L\'imagerie n\'a pas pu être lue. Déplacez un peu la carte et recommencez.',
            tooSmall: 'Rien à tracer ici\u00a0: la zone est trop petite. Montez la tolérance ou cliquez ailleurs.',
            tooComplex: 'Le contour est trop découpé ici pour en faire un lieu. Baissez la tolérance ou cliquez plus près du centre de la zone\u00a0; au besoin, montez l\'écart permis du contour (onglet Scripts).',
            edge: 'La zone continue hors de l\'écran\u00a0: dézoomez pour la saisir en entier.',
            analysisErr: 'L\'analyse a échoué. Cliquez de nouveau\u00a0; si cela persiste, rechargez WME.',
            invalidShape: 'Le contour se croiserait\u00a0: rien n\'a été modifié.',
            noPlace: 'Sélectionnez d\'abord un lieu.',
            tilesMissing: 'Des tuiles d\'imagerie n\'ont pas pu être lues\u00a0: le contour est peut-être incomplet.',
            edgeCut: 'La zone dépasse ce que la baguette lit en une fois\u00a0: dézoomez pour la saisir en entier.',
            dupe: 'Un lieu de type zone recouvre déjà ce contour\u00a0: vérifiez-le avant d\'en créer un autre.',
            dupeUnknown: 'Les lieux n\'ont pas pu être lus\u00a0: pas de contrôle de doublon. Regardez la carte avant de créer.',
            closedGaps: 'Des goulets étroits ont été comblés pour que le contour ne se croise pas.',
            previewErr: 'Le calque d\'aperçu n\'a pas pu être ajouté\u00a0: rechargez WME.',
            tileFormat: 'Les tuiles d\'imagerie ont changé de format\u00a0: la baguette ne sait plus les lire. Merci de le signaler sur le fil Discuss.',
            kEsc: 'Échap',
            creditGh: 'GitHub (WASD42)',
            relaxed: n => 'Contour simplifié plus que réglé, pour rester sous ' + n + ' points.',
            groundPx: m => '1 pixel d\'imagerie ≈ ' + m,
            pvTitle: 'Baguette magique',
            pvStats: (n, aire) => n + ' points · ' + aire,
            btnCreate: 'Créer le lieu',
            btnCancel: 'Annuler',
            created: 'Lieu créé\u00a0: vérifiez-le, puis enregistrez.',
            createErr: m => 'WME a refusé le lieu\u00a0: ' + m,
            lblShape: 'Forme',
            tipClone: 'Cloner\u00a0: copier ce lieu à côté, avec les mêmes catégories',
            tipOrtho: 'D\'équerre\u00a0: redresser les angles presque droits',
            tipSimp: 'Simplifier\u00a0: retirer les points qui n\'apportent rien au contour',
            tipRot: 'Pivoter\u00a0: faites glisser sur la carte (Maj\u00a0: par pas de 15°)',
            tipRes: 'Redimensionner\u00a0: faites glisser sur la carte, la forme est gardée',
            tipPointOnly: 'Lieu ponctuel\u00a0: seul Cloner s\'applique',
            modeRot: 'Faites glisser sur la carte pour faire pivoter le lieu. Maj\u00a0: par pas de 15°. Échap pour finir.',
            modeRes: 'Faites glisser sur la carte pour redimensionner le lieu. Échap pour finir.',
            nothingOrtho: 'Aucun angle à redresser à ce seuil.',
            nothingSimp: 'Rien à simplifier avec ce réglage.',
            done: 'C\'est fait. Annuler (Ctrl+Z) revient en arrière.',
            editErr: m => 'WME a refusé la modification\u00a0: ' + m,
            scToggle: 'Baguette magique\u00a0: activer / arrêter',
            scClone: 'Cloner le lieu sélectionné',
            scOrtho: 'Mettre d\'équerre le lieu sélectionné',
            scSimp: 'Simplifier le lieu sélectionné',
            scRot: 'Faire pivoter le lieu sélectionné (glisser sur la carte)',
            scRes: 'Redimensionner le lieu sélectionné (glisser sur la carte)',
            keysRot: 'Touches ← →\u00a0: pas de 1° (Maj\u00a0: 15°).',
            keysRes: 'Touches ↑ ↓\u00a0: pas de 1\u00a0% (Maj\u00a0: 10\u00a0%).',
            scCentre: 'Baguette magique au centre de la carte',
            sbHelp: 'Aide',
            hWandT: 'La baguette',
            hWandB: '<p>Activez la baguette (bouton de la carte, bouton ci-dessus ou raccourci), puis cliquez dans un lac, une forêt ou un champ\u00a0: elle englobe les pixels voisins de couleur proche et en trace le contour.</p><p>Réglez la <b>tolérance</b> dans la fenêtre de la baguette, en bas de la carte (le contour suit en direct), choisissez la catégorie, puis <b>Créer le lieu</b> (<kbd>Entrée</kbd>). <kbd>Échap</kbd> annule.</p><p>La baguette lit l\'imagerie satellite que WME affiche déjà, dans l\'éditeur et le temps du calcul seulement\u00a0: rien n\'est conservé ni envoyé ailleurs.</p>',
            hAlgoT: 'Comparaison des couleurs',
            hAlgoB: e => '<p><b>Écart de couleur (par canal)</b> compare le rouge, le vert et le bleu séparément et retient le plus grand des trois écarts. Simple et prévisible\u00a0: c\'est le réglage par défaut et, dans nos essais, le plus facile à régler — le contour restait stable sur une plus large plage du curseur.</p><p><b>Ressemblance pour l\'œil (CIE94)</b> convertit les couleurs dans l\'espace CIE Lab, construit sur la façon dont l\'œil les perçoit, et mesure l\'écart CIE94. Son échelle est ramenée sur celle de l\'écart de couleur (× ' + e + ', mesuré)\u00a0: une même tolérance englobe à peu près la même étendue avec les deux méthodes. À tenter quand l\'écart de couleur ne sépare pas bien la zone de son voisinage.</p><p>Le <b>lissage</b> moyenne d\'abord chaque pixel avec ses voisins\u00a0: il gomme la texture des arbres ou des cultures. Changer de méthode ou de lissage refait l\'analyse du dernier clic.</p>',
            hToolsT: 'Outils de forme',
            hToolsB: '<p>Sélectionnez un ou plusieurs lieux\u00a0: une barre d\'<b>outils de forme</b> flotte sur la carte, juste au-dessus.</p><table class="wmw-help-table"><tr><td>&#x29C9;</td><td>Cloner\u00a0: une copie posée à côté, jamais sur l\'original ni sur un autre lieu de type zone, avec les mêmes catégories\u00a0; sans nom, au verrou par défaut d\'un lieu neuf.</td></tr><tr><td>&#x221F;</td><td>D\'équerre\u00a0: les angles proches de 90° ou de 180° deviennent exacts (seuil ci-dessus).</td></tr><tr><td>&#x2248;</td><td>Simplifier\u00a0: retire les points qui n\'apportent rien (réglage Simplification ci-dessus).</td></tr><tr><td>&#x27F3;</td><td>Pivoter\u00a0: faites glisser sur la carte autour du lieu. <kbd>Maj</kbd>\u00a0: par pas de 15°.</td></tr><tr><td>&#x2922;</td><td>Redimensionner\u00a0: éloignez-vous du centre ou rapprochez-vous-en.</td></tr></table><p>Chaque action est une étape de la pile d\'annulation de WME.</p>',
            hKeysT: 'Clavier',
            hKeysB: '<p>Sept raccourcis sont listés <b>sans touches</b> dans Paramètres › Raccourcis clavier, pour n\'en prendre aucune à un autre script. Attribuez-y ceux que vous voulez.</p><p>Le raccourci «\u00a0au centre de la carte\u00a0» lance la baguette au centre de la vue\u00a0: le clavier suffit. En mode Pivoter ou Redimensionner, les flèches tournent ou agrandissent le lieu sélectionné pas à pas.</p>',
            hCredT: 'Crédits',
            hCredB: '<p>Réécriture, pour le SDK de WME, de <a href="' + URL_ORIG_GF + '" target="_blank" rel="noopener">WME MagicWand</a> de <b>WASD42</b> (Vadim Istratov, 2014-2018, licence MIT), maintenu ensuite dans le <a href="' + URL_FORK + '" target="_blank" rel="noopener">fork de mapomatic</a> par justins83, MapOMatic, FXZFun et karlsosha.</p><p>La mise d\'équerre est l\'action «\u00a0orthogonalize\u00a0» de l\'éditeur OpenStreetMap <a href="' + URL_ID + '" target="_blank" rel="noopener">iD</a> (licence ISC), telle qu\'adaptée par WASD42. La comparaison des couleurs (CIE Lab, CIE94) suit aussi son code.</p><p>Ce qui change\u00a0: le contour est tracé exactement à partir des pixels au lieu d\'une enveloppe concave, et pivoter ou redimensionner se fait en glissant sur la carte. L\'aide aux angles droits (Maj en tirant un sommet) disparaît\u00a0: le SDK ne donne pas accès au déplacement des sommets par WME.</p>',
            creditLine: 'D\'après WME MagicWand de WASD42',
            hSafeB: 'Toute modification passe par la pile d\'annulation de WME\u00a0: rien n\'est enregistré sans vous.',
            lnkDiscuss: 'Fil Discuss',
            majBtn: v => 'La version ' + v + ' est disponible',
            majInstall: 'Installer',
            lblAllCats: 'Proposer toutes les catégories',
            lblAllCatsHint: 'Décoché\u00a0: seules les zones naturelles (forêt, lac, plage, parc…) sont proposées pour les nouveaux lieux.',
            lblBdTopo: 'Afficher les contours BD TOPO (France)',
            lblBdTopoHint: 'Végétation, eau et bâti de la BD TOPO de l\'IGN, en tirets à partir du zoom 16 (le bâti à partir du zoom 17). Un repère pour vérifier ton tracé sur l\'imagerie : rien n\'est importé. Source accréditée par Waze pour l\'affichage.',
            bdtopoEtat: 'BD TOPO : {n} contour(s) affiché(s)',
            bdtopoZoom: 'BD TOPO : zoome (16 ou plus) pour voir les contours',
            bdtopoErr: 'BD TOPO : indisponible ({e})',
            bdtopoTrop: 'BD TOPO : trop d\'objets ici, certains manquent',
            lblAvoid: 'Éviter les lieux de même catégorie',
            lblAvoidHint: 'Coché\u00a0: la zone tracée s\'arrête aux lieux de type zone de la catégorie choisie. Le lieu choisi avant le clic n\'est pas évité (Remplacer, Agrandir).',
            lblMargin: 'Chevauchement toléré avec un voisin (m)',
            lblLock: "Verrou des lieux créés",
            lockDefault: "Celui de WME",
            lblLockHint: "Niveau de verrouillage donné au lieu créé par la baguette, plafonné à votre propre rang. Cloner, Remplacer et Agrandir ne le changent pas.",
            lockErr: m => "Lieu créé, mais son verrou n’a pas pu être posé\u00a0: " + m,
            lblMarginHint: 'La zone peut empiéter jusque-là sur un lieu voisin, pour une frontière commune propre, mais jamais de plus de la moitié de sa profondeur\u00a0: un petit lieu n\'est jamais recouvert en entier. 0\u00a0: aucun chevauchement.',
            inPlace: n => n ? 'Ce clic tombe dans «\u00a0' + n + '\u00a0», un lieu de même catégorie\u00a0: rien n\'est tracé.' : 'Ce clic tombe dans un lieu de même catégorie\u00a0: rien n\'est tracé.',
            inTraced: 'Ce clic tombe dans la zone déjà tracée\u00a0: rien à ajouter.',
            surrounds: (n, nom) => n > 1 ? 'La zone entoure ' + n + ' lieux de même catégorie\u00a0: elle les recouvre (un lieu ne peut pas avoir de trou).' : nom ? 'La zone entoure «\u00a0' + nom + '\u00a0», un lieu de même catégorie\u00a0: elle le recouvre (un lieu ne peut pas avoir de trou).' : 'La zone entoure un lieu de même catégorie\u00a0: elle le recouvre (un lieu ne peut pas avoir de trou).',
            lblCursor: 'Pointeur de la baguette',
            curWand: 'Baguette magique',
            curPicker: 'Pipette',
            curTarget: 'Viseur',
            curArrow: 'Flèche',
            curCross: 'Croix', lblBar: 'Barre d\'outils sur la carte', barAbove: 'Au-dessus du lieu', barBelow: 'Sous le lieu', barOff: 'Masquée',
            btnReplace: n => 'Remplacer le contour de «\u00a0' + n + '\u00a0»',
            btnReplaceAnon: 'Remplacer le contour du lieu choisi avant le clic',
            replaced: 'Contour remplacé\u00a0: vérifiez-le, puis enregistrez.',
            pvParts: n => n + ' zones',
            hintAdd: 'Alt + clic : ajouter une zone',
            dragTip: 'Glisser pour déplacer · double-clic pour la remettre en place',
            apart: 'Ce clic ne touche pas la zone déjà tracée : il n\'est pas ajouté.',
            btnExtend: n => 'Agrandir « ' + n + ' » avec cette zone',
            btnExtendAnon: 'Agrandir le lieu choisi avant le clic avec cette zone',
            extended: 'Lieu agrandi : vérifiez-le, puis enregistrez.',
            extendApart: 'La zone tracée ne touche pas ce lieu : rien n\'a été modifié.',
            lblOnSel: 'Sur la sélection',
            lblOnSelHint: 'Cloner, mettre d\'équerre ou simplifier tous les lieux sélectionnés d\'un coup.',
            oneOnly: 'Pivoter et Redimensionner traitent un lieu à la fois.',
            batchProgress: (a, b) => 'Lot\u00a0: ' + a + '/' + b + '…',
            batchDone: (ok, n) => 'Lot terminé\u00a0: ' + ok + ' lieux modifiés sur ' + n,
            batchSame: n => n + ' sans changement',
            batchRefused: n => n + ' refusés par WME',
            batchQuota: (n, h) => n + ' non traités\u00a0: plafond horaire atteint, reprise à ' + h,
            quotaFull: h => 'Plafond horaire des éditions scriptées atteint\u00a0: reprise à ' + h + '.',
            hReplB: '<p>Si un lieu de type zone est sélectionné au moment du clic, la fenêtre propose aussi de <b>remplacer le contour</b> de ce lieu par celui tracé. C\'est un bouton secondaire\u00a0: <kbd>Entrée</kbd> crée toujours un nouveau lieu.</p><p><kbd>Alt</kbd> + clic, fenêtre ouverte, <b>ajoute</b> une zone au contour (ce que la tolérance a laissé, ou ce qui était hors de l\'écran) ; la tolérance règle alors le dernier clic. Si un lieu de type zone était sélectionné avant le clic, <b>Agrandir</b> réunit la zone tracée au contour de ce lieu, s\'ils se touchent ou se recouvrent. Le contour réuni est retracé à la finesse de la baguette.</p>',
            hAvoidT: 'Éviter les lieux voisins',
            hAvoidB: '<p>Avec <b>Éviter les lieux de même catégorie</b> (coché par défaut), la zone tracée s\'arrête aux lieux de type zone de la catégorie choisie\u00a0: elle ne se superpose plus à un bois ou à un lac déjà cartographié. Si un lieu coupe la zone en deux, seul le morceau cliqué est gardé. Un clic dans un tel lieu ne trace rien.</p><p>Le <b>chevauchement toléré</b> (0 à 300\u00a0m, 50 par défaut) laisse la zone empiéter un peu sur le voisin, pour une frontière commune propre, mais jamais de plus de la moitié de sa profondeur\u00a0: un petit lieu n\'est jamais recouvert en entier. Un lieu entièrement entouré par la zone (une clairière au milieu d\'un bois) ne peut pas être évité, un lieu Waze ne pouvant pas avoir de trou\u00a0: la fenêtre le signale.</p><p>Avec <kbd>Alt</kbd>\u00a0+\u00a0clic, la même règle vaut pour chaque zone ajoutée\u00a0; un clic dans la zone déjà tracée n\'ajoute rien. Le lieu choisi avant le clic n\'est pas évité (Remplacer, Agrandir).</p>',
            hLotB: '<p>Avec plusieurs lieux sélectionnés, Cloner, D\'équerre et Simplifier s\'appliquent à chacun (boutons «\u00a0Sur la sélection\u00a0» ci-dessus, ou raccourcis), avec un bilan à la fin. Chaque lieu modifié compte dans le plafond horaire (section ci-dessous). Pivoter et Redimensionner traitent un lieu à la fois. Ces outils ne s\'appliquent qu\'aux lieux.</p>',
            quotaLeft: (r, m) => 'Éditions scriptées cette heure\u00a0: reste ' + r + ' sur ' + m,
            quotaShort: (r, m) => r + '/' + m,
            quotaTip: 'Heure glissante, tous les outils du script compris. Une édition = un lieu modifié entre deux enregistrements\u00a0; réservée à l\'écriture, comptée à l\'enregistrement.',
            quotaBlocked: 'Le compteur d\'éditions a été retouché\u00a0: les éditions scriptées sont bloquées pendant une heure.',
            cloneNoRoom: 'Pas de place libre à côté de ce lieu\u00a0: rien n\'est cloné (la copie aurait recouvert un lieu).',
            cloneUnknown: 'Les lieux n\'ont pas pu être lus\u00a0: rien n\'est cloné (contrôle de doublon impossible).',
            batchNoRoom: n => n + ' non clonés\u00a0: pas de place libre à côté de l\'original',
            hQuotaT: 'Plafond horaire',
            hQuotaB: (e, m) => '<p>Au plus <b>' + m + ' éditions scriptées par heure glissante</b> et par éditeur (doctrine France des scripts), quel que soit l\'outil\u00a0: lieu créé à la baguette, contour remplacé, Cloner, D\'équerre, Simplifier, Pivoter, Redimensionner, sur un lieu ou sur un lot. Le reste est affiché dans cet onglet, dans la fenêtre de la baguette et dans la barre d\'outils. Aucun réglage ne le relève.</p><p>Une édition = un lieu modifié entre deux enregistrements, comme WME l\'enregistre\u00a0: plusieurs pas sur le même lieu (flèches de Pivoter, un clone et ses catégories) comptent une fois. Une édition est réservée quand le script l\'écrit et comptée à l\'enregistrement\u00a0; quitter la page sans enregistrer rend les réservations\u00a0; une édition annulée par Ctrl+Z reste réservée jusqu\'à la fin de son heure.</p>',
            hSrcT: 'Sources et données',
            hSrcB: '<p><b>Imagerie</b>\u00a0: la baguette lit l\'imagerie satellite affichée par WME (fournie par Google à travers WME), y compris les imageries supplémentaires que vous avez allumées dans WME (Pléiades, WorldView…), empilées comme à l\'écran\u00a0; leurs tuiles viennent de earthengine.googleapis.com. Dans l\'éditeur, à votre clic, elle relit les tuiles que WME vient d\'afficher — même adresse, sans cookie —, autour du clic seulement et le temps du calcul\u00a0: rien n\'est gardé une fois la baguette arrêtée, et rien n\'entre dans la carte que le contour que vous acceptez.</p><p><b>Contrôle de version</b>\u00a0: au démarrage, le script lit <code>version-min.json</code> dans son dépôt GitHub (raw.githubusercontent.com) — une version retirée ou modifiée ne démarre pas\u00a0; une fois par jour, il lit la version publiée sur GreasyFork (update.greasyfork.org). Ces requêtes n\'envoient rien d\'autre que la requête elle-même. Pour une version non publiée, votre pseudo (lu dans WME, ou sur Waze Discuss, même site) est comparé sur votre ordinateur seulement.</p><p>Rien d\'autre ne quitte le navigateur. Crédits\u00a0: WASD42, le fork de mapomatic et iD (section suivante).</p>',
        },
        de: {
            btnOn: 'Zauberstab starten',
            btnOff: 'Zauberstab beenden',
            tipFab: 'Zauberstab: im Satellitenbild in eine Fläche klicken',
            stOff: 'Der Zauberstab ist aus.',
            stWait: 'Im Satellitenbild in eine Fläche klicken.',
            stRead: 'Satellitenbild wird gelesen …',
            stTiles: (a, b) => 'Satellitenbild wird gelesen … ' + a + '/' + b + ' Kacheln',
            stColours: 'Farben werden verglichen …',
            sbHint: 'Im Satellitenbild in einen See, einen Wald oder ein Feld klicken: der Zauberstab zeichnet den Umriss und schlägt ihn als Flächen-Ort vor. Er macht Orte auch rechtwinklig, vereinfacht, dreht, skaliert und klont sie.',
            secWand: 'Zauberstab',
            secShape: 'Formwerkzeuge',
            lblCat: 'Kategorie neuer Orte',
            lblAlgo: 'Farbvergleich',
            algoRgb: 'Farbabstand (je Kanal)',
            algoLab: 'Ähnlichkeit fürs Auge (CIE94)',
            lblTol: 'Toleranz',
            lblTolHint: 'Höher erfasst mehr Farbtöne. Meist 10 bis 30.',
            lblSmooth: 'Glättung',
            lblSmoothHint: 'Jedes Pixel wird mit seinen Nachbarn in diesem Radius (Pixel) gemittelt. 0: aus.',
            lblDetail: 'Erlaubte Umrissabweichung (px)',
            lblDetailHint: 'Wie weit der Umriss von den Pixeln abweichen darf. Höher: weniger Punkte, gröberer Umriss.',
            lblAngle: 'Schwelle für rechte Winkel (°)',
            lblAngleHint: 'Nur Ecken, die höchstens so viele Grad von einem rechten oder gestreckten Winkel abweichen, werden begradigt.',
            lblSimp: 'Vereinfachung (m)',
            lblSimpHint: 'Vereinfachen entfernt Punkte, die näher als dieser Wert am Umriss liegen.',
            lblHl: 'Fast rechtwinklige Orte hervorheben',
            lblHlHint: 'Umrandet die Flächen-Orte orange, die „Rechtwinklig“ ändern würde.',
            noImagery: 'Zuerst das Satellitenbild einblenden (Ebenen ▸ Satellitenbild): der Zauberstab liest es.',
            tileErr: 'Das Satellitenbild ließ sich nicht lesen. Karte leicht verschieben und erneut versuchen.',
            tooSmall: 'Hier gibt es nichts zu zeichnen: die Fläche ist zu klein. Toleranz erhöhen oder woanders klicken.',
            tooComplex: 'Der Umriss ist hier zu zerklüftet für einen Ort. Toleranz senken oder näher an der Mitte der Fläche klicken; notfalls die erlaubte Umrissabweichung erhöhen (Reiter Scripts).',
            edge: 'Die Fläche geht über den Bildschirm hinaus: herauszoomen, um sie ganz zu erfassen.',
            analysisErr: 'Die Analyse ist fehlgeschlagen. Erneut klicken; bleibt der Fehler, WME neu laden.',
            invalidShape: 'Der Umriss würde sich selbst schneiden: nichts wurde geändert.',
            noPlace: 'Zuerst einen Ort auswählen.',
            tilesMissing: 'Einige Bildkacheln konnten nicht gelesen werden: der Umriss ist vielleicht unvollständig.',
            edgeCut: 'Die Fläche ist größer als das, was der Zauberstab auf einmal liest: herauszoomen, um sie ganz zu erfassen.',
            dupe: 'Ein Flächen-Ort überdeckt diesen Umriss bereits: vor dem Anlegen eines weiteren prüfen.',
            dupeUnknown: 'Die Orte konnten nicht gelesen werden: keine Doppelprüfung. Vor dem Anlegen die Karte ansehen.',
            closedGaps: 'Schmale Engstellen wurden gefüllt, damit sich der Umriss nicht schneidet.',
            previewErr: 'Die Vorschauebene konnte nicht angelegt werden: WME neu laden.',
            tileFormat: 'Die Bildkacheln haben ihr Format geändert: der Zauberstab kann sie nicht lesen. Bitte im Discuss-Thema melden.',
            kEsc: 'Esc',
            creditGh: 'GitHub (WASD42)',
            relaxed: n => 'Umriss stärker vereinfacht als eingestellt, um unter ' + n + ' Punkten zu bleiben.',
            groundPx: m => '1 Bildpixel ≈ ' + m,
            pvTitle: 'Zauberstab',
            pvStats: (n, aire) => n + ' Punkte · ' + aire,
            btnCreate: 'Ort anlegen',
            btnCancel: 'Abbrechen',
            created: 'Ort angelegt: prüfen, dann speichern.',
            createErr: m => 'WME hat den Ort abgelehnt: ' + m,
            lblShape: 'Form',
            tipClone: 'Klonen: diesen Ort daneben kopieren, mit denselben Kategorien',
            tipOrtho: 'Rechtwinklig: fast rechte Winkel begradigen',
            tipSimp: 'Vereinfachen: Punkte entfernen, die zum Umriss nichts beitragen',
            tipRot: 'Drehen: auf der Karte ziehen (Umschalt: 15°-Schritte)',
            tipRes: 'Skalieren: auf der Karte ziehen, die Form bleibt',
            tipPointOnly: 'Punkt-Ort: nur Klonen ist möglich',
            modeRot: 'Auf der Karte ziehen, um den Ort zu drehen. Umschalt: 15°-Schritte. Esc beendet.',
            modeRes: 'Auf der Karte ziehen, um den Ort zu skalieren. Esc beendet.',
            nothingOrtho: 'Bei dieser Schwelle gibt es keine Ecke zu begradigen.',
            nothingSimp: 'Mit dieser Einstellung gibt es nichts zu vereinfachen.',
            done: 'Erledigt. Rückgängig (Strg+Z) macht es rückgängig.',
            editErr: m => 'WME hat die Änderung abgelehnt: ' + m,
            scToggle: 'Zauberstab: starten / beenden',
            scClone: 'Ausgewählten Ort klonen',
            scOrtho: 'Ausgewählten Ort rechtwinklig machen',
            scSimp: 'Ausgewählten Ort vereinfachen',
            scRot: 'Ausgewählten Ort drehen (auf der Karte ziehen)',
            scRes: 'Ausgewählten Ort skalieren (auf der Karte ziehen)',
            keysRot: 'Tasten ← →: 1°-Schritte (Umschalt: 15°).',
            keysRes: 'Tasten ↑ ↓: 1-%-Schritte (Umschalt: 10 %).',
            scCentre: 'Zauberstab in der Kartenmitte',
            sbHelp: 'Hilfe',
            hWandT: 'Der Zauberstab',
            hWandB: '<p>Zauberstab starten (Kartenknopf, Knopf oben oder Tastenkürzel), dann in einen See, einen Wald oder ein Feld klicken: er erfasst die benachbarten Pixel ähnlicher Farbe und zeichnet ihren Umriss.</p><p>Die <b>Toleranz</b> im Fenster des Zauberstabs unten einstellen (der Umriss folgt sofort), die Kategorie wählen, dann <b>Ort anlegen</b> (<kbd>Enter</kbd>). <kbd>Esc</kbd> bricht ab.</p><p>Der Zauberstab liest das Satellitenbild, das WME bereits zeigt, im Editor und nur für die Berechnung: nichts wird gespeichert oder anderswohin gesendet.</p>',
            hAlgoT: 'Farbvergleich',
            hAlgoB: e => '<p><b>Farbabstand (je Kanal)</b> vergleicht Rot, Grün und Blau getrennt und nimmt den größten der drei Abstände. Einfach und vorhersehbar: die Voreinstellung, und in unseren Tests am leichtesten einzustellen — der Umriss blieb über einen breiteren Bereich des Reglers stabil.</p><p><b>Ähnlichkeit fürs Auge (CIE94)</b> rechnet die Farben in den Farbraum CIE Lab um, der auf der Wahrnehmung des Auges beruht, und misst den CIE94-Abstand. Seine Skala ist an die des Farbabstands angeglichen (× ' + e + ', gemessen): dieselbe Toleranz erfasst mit beiden Methoden etwa dieselbe Fläche. Einen Versuch wert, wenn der Farbabstand die Fläche nicht gut von ihrer Umgebung trennt.</p><p>Die <b>Glättung</b> mittelt zuerst jedes Pixel mit seinen Nachbarn: sie bügelt die Textur von Bäumen oder Feldern glatt. Ein Wechsel von Methode oder Glättung wiederholt die Analyse des letzten Klicks.</p>',
            hToolsT: 'Formwerkzeuge',
            hToolsB: '<p>Einen oder mehrere Orte auswählen: direkt darüber schwebt auf der Karte eine Leiste mit <b>Formwerkzeugen</b>.</p><table class="wmw-help-table"><tr><td>&#x29C9;</td><td>Klonen: eine Kopie daneben, nie auf dem Original oder einem anderen Flächen-Ort, mit denselben Kategorien; ohne Namen, mit der Standardsperre eines neuen Ortes.</td></tr><tr><td>&#x221F;</td><td>Rechtwinklig: Ecken nahe 90° oder 180° werden exakt (Schwelle oben).</td></tr><tr><td>&#x2248;</td><td>Vereinfachen: entfernt Punkte, die nichts beitragen (Einstellung Vereinfachung oben).</td></tr><tr><td>&#x27F3;</td><td>Drehen: auf der Karte um den Ort ziehen. <kbd>Umschalt</kbd>: 15°-Schritte.</td></tr><tr><td>&#x2922;</td><td>Skalieren: vom Mittelpunkt weg oder zu ihm hin ziehen.</td></tr></table><p>Jede Aktion ist ein Schritt im Rückgängig-Verlauf von WME.</p>',
            hKeysT: 'Tastatur',
            hKeysB: '<p>Sieben Tastenkürzel stehen <b>ohne Tasten</b> unter Einstellungen › Tastenkürzel, um keinem anderen Skript eine wegzunehmen. Dort nach Wunsch belegen.</p><p>Das Kürzel „in der Kartenmitte“ startet den Zauberstab in der Mitte der Ansicht: die Tastatur genügt. Im Modus Drehen oder Skalieren drehen oder skalieren die Pfeiltasten den ausgewählten Ort schrittweise.</p>',
            hCredT: 'Danksagung',
            hCredB: '<p>Eine Neufassung für das WME-SDK von <a href="' + URL_ORIG_GF + '" target="_blank" rel="noopener">WME MagicWand</a> von <b>WASD42</b> (Vadim Istratov, 2014-2018, MIT-Lizenz), später im <a href="' + URL_FORK + '" target="_blank" rel="noopener">Fork von mapomatic</a> gepflegt von justins83, MapOMatic, FXZFun und karlsosha.</p><p>Das Begradigen ist die Aktion „orthogonalize“ des OpenStreetMap-Editors <a href="' + URL_ID + '" target="_blank" rel="noopener">iD</a> (ISC-Lizenz), in der Anpassung von WASD42. Auch der Farbvergleich (CIE Lab, CIE94) folgt seinem Code.</p><p>Neu: der Umriss wird genau aus den Pixeln gezeichnet statt als konkave Hülle, und Drehen und Skalieren geschehen durch Ziehen auf der Karte. Die Hilfe für rechte Winkel (Umschalt beim Ziehen eines Punktes) entfällt: das SDK gibt keinen Zugriff auf das Ziehen von Punkten in WME.</p>',
            creditLine: 'Nach WME MagicWand von WASD42',
            hSafeB: 'Jede Änderung läuft über den Rückgängig-Verlauf von WME: nichts wird ohne Sie gespeichert.',
            lnkDiscuss: 'Discuss-Thread',
            majBtn: v => 'Version ' + v + ' ist verfügbar',
            majInstall: 'Installieren',
            lblAllCats: 'Alle Kategorien anbieten',
            lblAllCatsHint: 'Aus: Für neue Orte werden nur Naturflächen (Wald, See, Strand, Park…) angeboten.',
            lblBdTopo: 'BD-TOPO-Umrisse anzeigen (Frankreich)',
            lblBdTopoHint: 'Vegetation, Gewässer und Gebäude aus der BD TOPO des IGN, gepunktet ab Zoom 16. Eine Orientierung, um deinen Umriss am Luftbild zu prüfen: Es wird nichts importiert. Von Waze für die Anzeige akkreditierte Quelle.',
            bdtopoEtat: 'BD TOPO: {n} Umriss(e) angezeigt',
            bdtopoZoom: 'BD TOPO: hineinzoomen (16 oder mehr), um die Umrisse zu sehen',
            bdtopoErr: 'BD TOPO: nicht verfügbar ({e})',
            bdtopoTrop: 'BD TOPO: zu viele Objekte hier, einige fehlen',
            lblAvoid: 'Orte derselben Kategorie aussparen',
            lblAvoidHint: 'An: die gezeichnete Fläche endet an den Flächenorten der gewählten Kategorie. Der vor dem Klick gewählte Ort wird nicht ausgespart (Ersetzen, Erweitern).',
            lblMargin: 'Erlaubte Überlappung mit einem Nachbarn (m)',
            lblLock: "Sperre der erstellten Orte",
            lockDefault: "WME-Standard",
            lblLockHint: "Sperrstufe für einen mit dem Zauberstab erstellten Ort, höchstens dein eigener Rang. Klonen, Ersetzen und Erweitern ändern sie nicht.",
            lockErr: m => "Ort erstellt, aber die Sperre konnte nicht gesetzt werden: " + m,
            lblMarginHint: 'So weit darf die Fläche in einen Nachbarort hineinreichen, für eine saubere gemeinsame Grenze, aber nie mehr als die Hälfte seiner Tiefe: ein kleiner Ort wird nie ganz überdeckt. 0: keine Überlappung.',
            inPlace: n => n ? 'Dieser Klick liegt in „' + n + '“, einem Ort derselben Kategorie: nichts wird gezeichnet.' : 'Dieser Klick liegt in einem Ort derselben Kategorie: nichts wird gezeichnet.',
            inTraced: 'Dieser Klick liegt in der bereits gezeichneten Fläche: nichts hinzuzufügen.',
            surrounds: (n, nom) => n > 1 ? 'Die Fläche umschließt ' + n + ' Orte derselben Kategorie: sie überdeckt sie (ein Ort kann kein Loch haben).' : nom ? 'Die Fläche umschließt „' + nom + '“, einen Ort derselben Kategorie: sie überdeckt ihn (ein Ort kann kein Loch haben).' : 'Die Fläche umschließt einen Ort derselben Kategorie: sie überdeckt ihn (ein Ort kann kein Loch haben).',
            lblCursor: 'Zeiger des Zauberstabs',
            curWand: 'Zauberstab',
            curPicker: 'Pipette',
            curTarget: 'Zielkreis',
            curArrow: 'Pfeil',
            curCross: 'Kreuz', lblBar: 'Werkzeugleiste auf der Karte', barAbove: 'Über dem Ort', barBelow: 'Unter dem Ort', barOff: 'Ausgeblendet',
            btnReplace: n => 'Umriss von „' + n + '“ ersetzen',
            btnReplaceAnon: 'Umriss des vor dem Klick gewählten Orts ersetzen',
            replaced: 'Umriss ersetzt: prüfen, dann speichern.',
            pvParts: n => n + ' Flächen',
            hintAdd: 'Alt + Klick: Fläche hinzufügen',
            dragTip: 'Ziehen zum Verschieben · Doppelklick setzt es zurück',
            apart: 'Dieser Klick berührt die bisher gezeichnete Fläche nicht: er wird nicht hinzugefügt.',
            btnExtend: n => '„' + n + '“ um diese Fläche erweitern',
            btnExtendAnon: 'Den vor dem Klick gewählten Ort um diese Fläche erweitern',
            extended: 'Ort erweitert: prüfen, dann speichern.',
            extendApart: 'Die gezeichnete Fläche berührt diesen Ort nicht: nichts wurde geändert.',
            lblOnSel: 'Auf die Auswahl',
            lblOnSelHint: 'Alle ausgewählten Orte auf einmal klonen, begradigen oder vereinfachen.',
            oneOnly: 'Drehen und Skalieren bearbeiten einen Ort nach dem anderen.',
            batchProgress: (a, b) => 'Stapel: ' + a + '/' + b + '…',
            batchDone: (ok, n) => 'Stapel fertig: ' + ok + ' von ' + n + ' Orten geändert',
            batchSame: n => n + ' unverändert',
            batchRefused: n => n + ' von WME abgelehnt',
            batchQuota: (n, h) => n + ' nicht bearbeitet: Stundenlimit erreicht, weiter ab ' + h,
            quotaFull: h => 'Stundenlimit für Skript-Bearbeitungen erreicht: weiter ab ' + h + '.',
            hReplB: '<p>Ist beim Klick genau ein Flächenort ausgewählt, bietet das Fenster zusätzlich <b>Umriss ersetzen</b> an: der Ort erhält den gezeichneten Umriss. Das ist eine Nebenschaltfläche: <kbd>Enter</kbd> legt weiterhin einen neuen Ort an.</p><p><kbd>Alt</kbd> + Klick bei offenem Fenster <b>fügt</b> dem Umriss eine Fläche <b>hinzu</b> (was die Toleranz ausgelassen hat oder außerhalb des Bildschirms lag); die Toleranz gilt dann für den letzten Klick. War vor dem Klick ein Flächenort ausgewählt, vereint <b>Erweitern</b> die gezeichnete Fläche mit dessen Umriss, sofern sie sich berühren oder überlappen. Der vereinte Umriss wird mit der Genauigkeit des Zauberstabs neu gezeichnet.</p>',
            hAvoidT: 'Nachbarorte aussparen',
            hAvoidB: '<p>Mit <b>Orte derselben Kategorie aussparen</b> (standardmäßig an) endet die gezeichnete Fläche an den Flächenorten der gewählten Kategorie: sie liegt nicht mehr über einem bereits erfassten Wald oder See. Teilt ein Ort die Fläche in zwei, bleibt nur der angeklickte Teil. Ein Klick in einen solchen Ort zeichnet nichts.</p><p>Die <b>erlaubte Überlappung</b> (0 bis 300 m, standardmäßig 50) lässt die Fläche ein wenig in den Nachbarn hineinreichen, für eine saubere gemeinsame Grenze, aber nie mehr als die Hälfte seiner Tiefe: ein kleiner Ort wird nie ganz überdeckt. Ein von der Fläche ganz umschlossener Ort (eine Lichtung mitten im Wald) lässt sich nicht aussparen, da ein Waze-Ort kein Loch haben kann: das Fenster weist darauf hin.</p><p>Mit <kbd>Alt</kbd> + Klick gilt dieselbe Regel für jede hinzugefügte Fläche; ein Klick in die bereits gezeichnete Fläche fügt nichts hinzu. Der vor dem Klick gewählte Ort wird nicht ausgespart (Ersetzen, Erweitern).</p>',
            hLotB: '<p>Sind mehrere Orte ausgewählt, wirken Klonen, Begradigen und Vereinfachen auf jeden davon (Schaltflächen „Auf die Auswahl“ oben oder Tastenkürzel), mit einer Bilanz am Ende. Jeder geänderte Ort zählt zum Stundenlimit (Abschnitt unten). Drehen und Skalieren bearbeiten einen Ort nach dem anderen. Diese Werkzeuge gelten nur für Orte.</p>',
            quotaLeft: (r, m) => 'Skript-Bearbeitungen in dieser Stunde: noch ' + r + ' von ' + m,
            quotaShort: (r, m) => r + '/' + m,
            quotaTip: 'Gleitende Stunde, alle Werkzeuge des Skripts zusammen. Eine Bearbeitung = ein zwischen zwei Speichervorgängen geänderter Ort; beim Schreiben reserviert, beim Speichern gezählt.',
            quotaBlocked: 'Der Bearbeitungszähler wurde verändert: Skript-Bearbeitungen sind eine Stunde lang gesperrt.',
            cloneNoRoom: 'Kein freier Platz neben diesem Ort: nichts geklont (die Kopie hätte einen Ort überdeckt).',
            cloneUnknown: 'Die Orte konnten nicht gelesen werden: nichts geklont (keine Doppelprüfung möglich).',
            batchNoRoom: n => n + ' nicht geklont: kein freier Platz neben dem Original',
            hQuotaT: 'Stundenlimit',
            hQuotaB: (e, m) => '<p>Höchstens <b>' + m + ' Skript-Bearbeitungen pro gleitender Stunde</b> und Editor (Skript-Doktrin Frankreich), gleich mit welchem Werkzeug: mit dem Zauberstab angelegter Ort, ersetzter Umriss, Klonen, Begradigen, Vereinfachen, Drehen, Skalieren, für einen Ort oder einen Stapel. Der Rest wird in diesem Tab, im Fenster des Zauberstabs und in der Werkzeugleiste angezeigt. Keine Einstellung hebt ihn an.</p><p>Eine Bearbeitung = ein zwischen zwei Speichervorgängen geänderter Ort, so wie WME speichert: mehrere Schritte am selben Ort (Pfeiltasten beim Drehen, ein Klon und seine Kategorien) zählen einmal. Eine Bearbeitung wird beim Schreiben reserviert und beim Speichern gezählt; wer die Seite ohne Speichern verlässt, erhält die Reservierungen zurück; eine mit Strg+Z rückgängig gemachte Bearbeitung bleibt bis zum Ende ihrer Stunde reserviert.</p>',
            hSrcT: 'Quellen und Daten',
            hSrcB: '<p><b>Bilder</b>: der Zauberstab liest das von WME angezeigte Satellitenbild (von Google über WME bereitgestellt), einschließlich der zusätzlichen Bildebenen, die Sie in WME eingeschaltet haben (Pléiades, WorldView…), so übereinander gelegt wie auf dem Bildschirm; deren Kacheln kommen von earthengine.googleapis.com. Im Editor, bei Ihrem Klick, liest er die Kacheln erneut, die WME gerade angezeigt hat — gleiche Adresse, ohne Cookies —, nur um den Klick und nur für die Berechnung: nach dem Ausschalten des Zauberstabs wird nichts behalten, und nur der Umriss, den Sie annehmen, gelangt in die Karte.</p><p><b>Versionsprüfung</b>: beim Start liest das Skript <code>version-min.json</code> aus seinem GitHub-Repository (raw.githubusercontent.com) — eine zurückgezogene oder veränderte Version startet nicht; einmal am Tag liest es die auf GreasyFork veröffentlichte Version (update.greasyfork.org). Diese Anfragen übertragen nichts außer der Anfrage selbst. Bei einer unveröffentlichten Version wird Ihr Benutzername (in WME gelesen, oder bei Waze Discuss auf derselben Website) nur auf Ihrem Rechner verglichen.</p><p>Sonst verlässt nichts den Browser. Danksagung: WASD42, der Fork von mapomatic und iD (nächster Abschnitt).</p>',
        },
        es: {
            btnOn: 'Activar la varita',
            btnOff: 'Detener la varita',
            tipFab: 'Varita mágica: haga clic dentro de un área en la imagen satelital',
            stOff: 'La varita está detenida.',
            stWait: 'Haga clic dentro de un área en la imagen satelital.',
            stRead: 'Leyendo la imagen…',
            stTiles: (a, b) => 'Leyendo la imagen… ' + a + '/' + b + ' teselas',
            stColours: 'Comparando los colores…',
            sbHint: 'Haga clic dentro de un lago, un bosque o un campo en la imagen satelital: la varita traza su contorno y lo propone como lugar de tipo área. También escuadra, simplifica, gira, redimensiona y clona lugares.',
            secWand: 'Varita mágica',
            secShape: 'Herramientas de forma',
            lblCat: 'Categoría de los lugares nuevos',
            lblAlgo: 'Comparación de colores',
            algoRgb: 'Distancia de color (por canal)',
            algoLab: 'Parecido para el ojo (CIE94)',
            lblTol: 'Tolerancia',
            lblTolHint: 'Más alta abarca más matices. Por lo general de 10 a 30.',
            lblSmooth: 'Suavizado',
            lblSmoothHint: 'Cada píxel se promedia con sus vecinos en este radio (píxeles). 0: sin suavizado.',
            lblDetail: 'Desvío permitido del contorno (px)',
            lblDetailHint: 'Cuánto puede apartarse el contorno de los píxeles. Más alto: menos puntos, contorno más tosco.',
            lblAngle: 'Umbral de escuadra (°)',
            lblAngleHint: 'Solo se enderezan los ángulos a menos de estos grados de un ángulo recto o llano.',
            lblSimp: 'Simplificación (m)',
            lblSimpHint: 'Simplificar quita los puntos más cercanos que esto al contorno.',
            lblHl: 'Resaltar los lugares casi en escuadra',
            lblHlHint: 'Rodea en naranja los lugares de tipo área que «En escuadra» cambiaría.',
            noImagery: 'Muestre primero la imagen satelital (Capas ▸ Imagen satelital): la varita la lee.',
            tileErr: 'No se pudo leer la imagen. Mueva un poco el mapa y vuelva a intentarlo.',
            tooSmall: 'Nada que trazar aquí: el área es demasiado pequeña. Suba la tolerancia o haga clic en otro sitio.',
            tooComplex: 'El contorno es demasiado recortado aquí para hacer un lugar. Baje la tolerancia o haga clic más cerca del centro del área; si hace falta, aumente el desvío permitido del contorno (pestaña Scripts).',
            edge: 'El área continúa fuera de la pantalla: aleje el zoom para abarcarla entera.',
            analysisErr: 'El análisis ha fallado. Haga clic de nuevo; si persiste, recargue WME.',
            invalidShape: 'El contorno se cruzaría consigo mismo: no se ha cambiado nada.',
            noPlace: 'Seleccione primero un lugar.',
            tilesMissing: 'Algunas teselas de la imagen no se han podido leer: el contorno puede estar incompleto.',
            edgeCut: 'El área supera lo que la varita lee de una vez: aleje el zoom para abarcarla entera.',
            dupe: 'Un lugar de tipo área ya se superpone a este contorno: revíselo antes de crear otro.',
            dupeUnknown: 'No se pudieron leer los lugares: sin control de duplicados. Mire el mapa antes de crear.',
            closedGaps: 'Se han rellenado pasos estrechos para que el contorno no se cruce.',
            previewErr: 'No se ha podido añadir la capa de vista previa: recargue WME.',
            tileFormat: 'Las teselas de la imagen han cambiado de formato: la varita no puede leerlas. Por favor, avise en el hilo de Discuss.',
            kEsc: 'Esc',
            creditGh: 'GitHub (WASD42)',
            relaxed: n => 'Contorno simplificado más de lo ajustado, para no pasar de ' + n + ' puntos.',
            groundPx: m => '1 píxel de imagen ≈ ' + m,
            pvTitle: 'Varita mágica',
            pvStats: (n, aire) => n + ' puntos · ' + aire,
            btnCreate: 'Crear el lugar',
            btnCancel: 'Cancelar',
            created: 'Lugar creado: revíselo y luego guarde.',
            createErr: m => 'WME rechazó el lugar: ' + m,
            lblShape: 'Forma',
            tipClone: 'Clonar: copiar este lugar al lado, con las mismas categorías',
            tipOrtho: 'En escuadra: enderezar los ángulos casi rectos',
            tipSimp: 'Simplificar: quitar los puntos que no aportan nada al contorno',
            tipRot: 'Girar: arrastre sobre el mapa (Mayús: pasos de 15°)',
            tipRes: 'Redimensionar: arrastre sobre el mapa, se conserva la forma',
            tipPointOnly: 'Lugar de punto: solo se aplica Clonar',
            modeRot: 'Arrastre sobre el mapa para girar el lugar. Mayús: pasos de 15°. Esc para terminar.',
            modeRes: 'Arrastre sobre el mapa para redimensionar el lugar. Esc para terminar.',
            nothingOrtho: 'Ningún ángulo que enderezar con este umbral.',
            nothingSimp: 'Nada que simplificar con este ajuste.',
            done: 'Hecho. Deshacer (Ctrl+Z) lo revierte.',
            editErr: m => 'WME rechazó el cambio: ' + m,
            scToggle: 'Varita mágica: activar / detener',
            scClone: 'Clonar el lugar seleccionado',
            scOrtho: 'Poner en escuadra el lugar seleccionado',
            scSimp: 'Simplificar el lugar seleccionado',
            scRot: 'Girar el lugar seleccionado (arrastrar sobre el mapa)',
            scRes: 'Redimensionar el lugar seleccionado (arrastrar sobre el mapa)',
            keysRot: 'Teclas ← →: pasos de 1° (Mayús: 15°).',
            keysRes: 'Teclas ↑ ↓: pasos del 1 % (Mayús: 10 %).',
            scCentre: 'Varita mágica en el centro del mapa',
            sbHelp: 'Ayuda',
            hWandT: 'La varita',
            hWandB: '<p>Active la varita (botón del mapa, botón de arriba o atajo) y haga clic dentro de un lago, un bosque o un campo: abarca los píxeles vecinos de color parecido y traza su contorno.</p><p>Ajuste la <b>tolerancia</b> en la tarjeta de abajo (el contorno sigue en directo), elija la categoría y luego <b>Crear el lugar</b> (<kbd>Intro</kbd>). <kbd>Esc</kbd> cancela.</p><p>La varita lee la imagen satelital que WME ya muestra, dentro del editor y solo para el cálculo: nada se guarda ni se envía a otro sitio.</p>',
            hAlgoT: 'Comparación de colores',
            hAlgoB: e => '<p><b>Distancia de color (por canal)</b> compara el rojo, el verde y el azul por separado y se queda con la mayor de las tres diferencias. Sencilla y previsible: es el ajuste por defecto y, en nuestras pruebas, la más fácil de ajustar — el contorno se mantenía estable en un tramo más amplio del cursor.</p><p><b>Parecido para el ojo (CIE94)</b> convierte los colores al espacio CIE Lab, construido sobre cómo los percibe el ojo, y mide la diferencia CIE94. Su escala se ajusta a la de la distancia de color (× ' + e + ', medido): una misma tolerancia abarca más o menos la misma extensión con los dos métodos. Vale la pena probarla cuando la distancia de color no separa bien el área de su entorno.</p><p>El <b>suavizado</b> promedia primero cada píxel con sus vecinos: borra la textura de los árboles o los cultivos. Cambiar de método o de suavizado rehace el análisis del último clic.</p>',
            hToolsT: 'Herramientas de forma',
            hToolsB: '<p>Seleccione uno o varios lugares: una barra de <b>herramientas de forma</b> flota en el mapa, justo encima.</p><table class="wmw-help-table"><tr><td>&#x29C9;</td><td>Clonar: una copia al lado, nunca encima del original ni de otro lugar de tipo área, con las mismas categorías; sin nombre, con el bloqueo por defecto de un lugar nuevo.</td></tr><tr><td>&#x221F;</td><td>En escuadra: los ángulos cercanos a 90° o 180° pasan a ser exactos (umbral de arriba).</td></tr><tr><td>&#x2248;</td><td>Simplificar: quita los puntos que no aportan nada (ajuste Simplificación de arriba).</td></tr><tr><td>&#x27F3;</td><td>Girar: arrastre sobre el mapa alrededor del lugar. <kbd>Mayús</kbd>: pasos de 15°.</td></tr><tr><td>&#x2922;</td><td>Redimensionar: aléjese del centro o acérquese a él.</td></tr></table><p>Cada acción es un paso en el historial de deshacer de WME.</p>',
            hKeysT: 'Teclado',
            hKeysB: '<p>Siete atajos aparecen <b>sin teclas</b> en Ajustes › Atajos de teclado, para no quitarle ninguna a otro script. Asigne allí los que quiera.</p><p>El atajo «en el centro del mapa» lanza la varita en el centro de la vista: basta el teclado. En Girar o Redimensionar, las flechas giran o escalan el lugar seleccionado paso a paso.</p>',
            hCredT: 'Créditos',
            hCredB: '<p>Reescritura, para el SDK de WME, de <a href="' + URL_ORIG_GF + '" target="_blank" rel="noopener">WME MagicWand</a> de <b>WASD42</b> (Vadim Istratov, 2014-2018, licencia MIT), mantenido después en el <a href="' + URL_FORK + '" target="_blank" rel="noopener">fork de mapomatic</a> por justins83, MapOMatic, FXZFun y karlsosha.</p><p>La escuadra es la acción «orthogonalize» del editor de OpenStreetMap <a href="' + URL_ID + '" target="_blank" rel="noopener">iD</a> (licencia ISC), tal como la adaptó WASD42. La comparación de colores (CIE Lab, CIE94) también sigue su código.</p><p>Cambios: el contorno se traza exactamente a partir de los píxeles en lugar de una envolvente cóncava, y girar o redimensionar se hace arrastrando sobre el mapa. Desaparece la ayuda de ángulos rectos (Mayús al arrastrar un vértice): el SDK no da acceso al arrastre de vértices de WME.</p>',
            creditLine: 'Basado en WME MagicWand de WASD42',
            hSafeB: 'Todo cambio pasa por el historial de deshacer de WME: nada se guarda sin usted.',
            lnkDiscuss: 'Hilo en Discuss',
            majBtn: v => 'La versión ' + v + ' está disponible',
            majInstall: 'Instalar',
            lblAllCats: 'Ofrecer todas las categorías',
            lblAllCatsHint: 'Desactivado: para los lugares nuevos solo se ofrecen zonas naturales (bosque, lago, playa, parque…).',
            lblBdTopo: 'Mostrar los contornos BD TOPO (Francia)',
            lblBdTopoHint: 'Vegetación, agua y edificios de la BD TOPO del IGN, en punteado a partir del zoom 16. Una referencia para comprobar tu contorno sobre las imágenes: no se importa nada. Fuente acreditada por Waze para la visualización.',
            bdtopoEtat: 'BD TOPO: {n} contorno(s) mostrado(s)',
            bdtopoZoom: 'BD TOPO: acerca el mapa (16 o más) para ver los contornos',
            bdtopoErr: 'BD TOPO: no disponible ({e})',
            bdtopoTrop: 'BD TOPO: demasiados objetos aquí, faltan algunos',
            lblAvoid: 'Evitar los lugares de la misma categoría',
            lblAvoidHint: 'Activado: la zona trazada se detiene en los lugares de tipo área de la categoría elegida. El lugar elegido antes del clic no se evita (Reemplazar, Ampliar).',
            lblMargin: 'Solapamiento tolerado con un vecino (m)',
            lblLock: "Bloqueo de los lugares creados",
            lockDefault: "El de WME",
            lblLockHint: "Nivel de bloqueo del lugar creado con la varita, limitado a tu propio rango. Clonar, Reemplazar y Ampliar no lo cambian.",
            lockErr: m => "Lugar creado, pero no se pudo poner su bloqueo: " + m,
            lblMarginHint: 'La zona puede invadir un lugar vecino hasta esta distancia, para un límite común limpio, pero nunca más de la mitad de su profundidad: un lugar pequeño nunca queda cubierto entero. 0: ningún solapamiento.',
            inPlace: n => n ? 'Este clic cae dentro de «' + n + '», un lugar de la misma categoría: no se traza nada.' : 'Este clic cae dentro de un lugar de la misma categoría: no se traza nada.',
            inTraced: 'Este clic cae dentro de la zona ya trazada: nada que añadir.',
            surrounds: (n, nom) => n > 1 ? 'La zona rodea ' + n + ' lugares de la misma categoría: los cubre (un lugar no puede tener agujeros).' : nom ? 'La zona rodea «' + nom + '», un lugar de la misma categoría: lo cubre (un lugar no puede tener agujeros).' : 'La zona rodea un lugar de la misma categoría: lo cubre (un lugar no puede tener agujeros).',
            lblCursor: 'Puntero de la varita',
            curWand: 'Varita mágica',
            curPicker: 'Cuentagotas',
            curTarget: 'Mira',
            curArrow: 'Flecha',
            curCross: 'Cruz', lblBar: 'Barra de herramientas en el mapa', barAbove: 'Encima del lugar', barBelow: 'Debajo del lugar', barOff: 'Oculta',
            btnReplace: n => 'Reemplazar el contorno de «' + n + '»',
            btnReplaceAnon: 'Reemplazar el contorno del lugar elegido antes del clic',
            replaced: 'Contorno reemplazado: revíselo y luego guarde.',
            pvParts: n => n + ' zonas',
            hintAdd: 'Alt + clic: añadir una zona',
            dragTip: 'Arrastre para mover · doble clic para devolverla a su sitio',
            apart: 'Este clic no toca la zona ya trazada: no se añade.',
            btnExtend: n => 'Ampliar «' + n + '» con esta zona',
            btnExtendAnon: 'Ampliar el lugar elegido antes del clic con esta zona',
            extended: 'Lugar ampliado: revíselo y luego guarde.',
            extendApart: 'La zona trazada no toca este lugar: no se ha cambiado nada.',
            lblOnSel: 'En la selección',
            lblOnSelHint: 'Clonar, escuadrar o simplificar de una vez todos los lugares seleccionados.',
            oneOnly: 'Girar y Redimensionar tratan un lugar cada vez.',
            batchProgress: (a, b) => 'Lote: ' + a + '/' + b + '…',
            batchDone: (ok, n) => 'Lote terminado: ' + ok + ' de ' + n + ' lugares modificados',
            batchSame: n => n + ' sin cambios',
            batchRefused: n => n + ' rechazados por WME',
            batchQuota: (n, h) => n + ' sin tratar: límite por hora alcanzado, se reanuda a las ' + h,
            quotaFull: h => 'Límite por hora de las ediciones del script alcanzado: se reanuda a las ' + h + '.',
            hReplB: '<p>Si hay un lugar de tipo área seleccionado al hacer clic, la ventana ofrece además <b>Reemplazar el contorno</b> de ese lugar por el trazado. Es un botón secundario: <kbd>Intro</kbd> sigue creando un lugar nuevo.</p><p><kbd>Alt</kbd> + clic con la ventana abierta <b>añade</b> una zona al contorno (lo que la tolerancia dejó fuera o lo que estaba fuera de la pantalla); la tolerancia ajusta entonces el último clic. Si había un lugar de tipo área seleccionado antes del clic, <b>Ampliar</b> une la zona trazada al contorno de ese lugar, si se tocan o se superponen. El contorno unido se vuelve a trazar con la precisión de la varita.</p>',
            hAvoidT: 'Evitar los lugares vecinos',
            hAvoidB: '<p>Con <b>Evitar los lugares de la misma categoría</b> (activado por defecto), la zona trazada se detiene en los lugares de tipo área de la categoría elegida: ya no se superpone a un bosque o a un lago ya cartografiado. Si un lugar corta la zona en dos, solo se conserva la parte en la que hizo clic. Un clic dentro de uno de esos lugares no traza nada.</p><p>El <b>solapamiento tolerado</b> (0 a 300 m, 50 por defecto) deja que la zona invada un poco el lugar vecino, para un límite común limpio, pero nunca más de la mitad de su profundidad: un lugar pequeño nunca queda cubierto entero. Un lugar rodeado por completo por la zona (un claro en medio de un bosque) no se puede evitar, porque un lugar de Waze no puede tener agujeros: la ventana lo indica.</p><p>Con <kbd>Alt</kbd> + clic, la misma regla vale para cada zona añadida; un clic dentro de la zona ya trazada no añade nada. El lugar elegido antes del clic no se evita (Reemplazar, Ampliar).</p>',
            hLotB: '<p>Con varios lugares seleccionados, Clonar, Escuadrar y Simplificar se aplican a cada uno (botones «En la selección» de arriba, o los atajos), con un resumen al final. Cada lugar modificado cuenta en el límite por hora (sección de abajo). Girar y Redimensionar tratan un lugar cada vez. Estas herramientas solo se aplican a lugares.</p>',
            quotaLeft: (r, m) => 'Ediciones del script en esta hora: quedan ' + r + ' de ' + m,
            quotaShort: (r, m) => r + '/' + m,
            quotaTip: 'Hora móvil, todas las herramientas del script incluidas. Una edición = un lugar modificado entre dos guardados; reservada al escribirla, contada al guardar.',
            quotaBlocked: 'El contador de ediciones fue alterado: las ediciones del script quedan bloqueadas una hora.',
            cloneNoRoom: 'No hay sitio libre junto a este lugar: no se clonó nada (la copia habría cubierto un lugar).',
            cloneUnknown: 'No se pudieron leer los lugares: no se clonó nada (control de duplicados imposible).',
            batchNoRoom: n => n + ' sin clonar: no hay sitio libre junto al original',
            hQuotaT: 'Límite por hora',
            hQuotaB: (e, m) => '<p>Como máximo <b>' + m + ' ediciones del script por hora móvil</b> y por editor (doctrina de scripts de Francia), sea cual sea la herramienta: lugar creado con la varita, contorno reemplazado, Clonar, Escuadrar, Simplificar, Girar, Redimensionar, en un lugar o en un lote. Lo que queda se muestra en esta pestaña, en la ventana de la varita y en la barra de herramientas. Ningún ajuste lo sube.</p><p>Una edición = un lugar modificado entre dos guardados, como lo guarda WME: varios pasos sobre el mismo lugar (flechas de Girar, un clon y sus categorías) cuentan una vez. Una edición se reserva cuando el script la escribe y se cuenta al guardar; salir de la página sin guardar devuelve las reservas; una edición deshecha con Ctrl+Z sigue reservada hasta que acabe su hora.</p>',
            hSrcT: 'Fuentes y datos',
            hSrcB: '<p><b>Imágenes</b>: la varita lee la imagen satelital que muestra WME (proporcionada por Google a través de WME), incluidas las capas de imágenes adicionales que haya activado en WME (Pléiades, WorldView…), superpuestas como en pantalla; sus teselas vienen de earthengine.googleapis.com. Dentro del editor, con su clic, vuelve a leer las teselas que WME acaba de mostrar — misma dirección, sin cookies —, solo alrededor del clic y solo para el cálculo: nada se guarda una vez apagada la varita, y al mapa solo llega el contorno que usted acepta.</p><p><b>Control de versión</b>: al arrancar, el script lee <code>version-min.json</code> en su repositorio de GitHub (raw.githubusercontent.com) — una versión retirada o alterada no arranca; una vez al día lee la versión publicada en GreasyFork (update.greasyfork.org). Estas peticiones no envían nada más que la propia petición. Para una versión no publicada, su nombre de usuario (leído en WME, o en Waze Discuss, mismo sitio) se compara solo en su ordenador.</p><p>Nada más sale del navegador. Créditos: WASD42, el fork de mapomatic e iD (sección siguiente).</p>',
        },
        it: {
            btnOn: 'Attiva la bacchetta',
            btnOff: 'Ferma la bacchetta',
            tipFab: 'Bacchetta magica: fai clic dentro un\'area sulle immagini satellitari',
            stOff: 'La bacchetta è ferma.',
            stWait: 'Fai clic dentro un\'area sulle immagini satellitari.',
            stRead: 'Lettura delle immagini…',
            stTiles: (a, b) => 'Lettura delle immagini… ' + a + '/' + b + ' tasselli',
            stColours: 'Confronto dei colori…',
            sbHint: 'Fai clic dentro un lago, un bosco o un campo sulle immagini satellitari: la bacchetta ne traccia il contorno e lo propone come luogo di tipo area. Squadra, semplifica, ruota, ridimensiona e clona anche i luoghi.',
            secWand: 'Bacchetta magica',
            secShape: 'Strumenti di forma',
            lblCat: 'Categoria dei nuovi luoghi',
            lblAlgo: 'Confronto dei colori',
            algoRgb: 'Distanza di colore (per canale)',
            algoLab: 'Somiglianza per l\'occhio (CIE94)',
            lblTol: 'Tolleranza',
            lblTolHint: 'Più alta abbraccia più sfumature. Di solito da 10 a 30.',
            lblSmooth: 'Smussatura',
            lblSmoothHint: 'Ogni pixel viene mediato con i vicini entro questo raggio (pixel). 0: nessuna.',
            lblDetail: 'Scarto ammesso del contorno (px)',
            lblDetailHint: 'Quanto il contorno può scostarsi dai pixel. Più alto: meno punti, contorno più grossolano.',
            lblAngle: 'Soglia di squadratura (°)',
            lblAngleHint: 'Si raddrizzano solo gli angoli entro questi gradi da un angolo retto o piatto.',
            lblSimp: 'Semplificazione (m)',
            lblSimpHint: 'Semplifica toglie i punti più vicini di così al contorno.',
            lblHl: 'Evidenzia i luoghi quasi in squadra',
            lblHlHint: 'Contorna in arancione i luoghi di tipo area che «In squadra» cambierebbe.',
            noImagery: 'Mostra prima le immagini satellitari (Livelli ▸ Immagini satellitari): la bacchetta le legge.',
            tileErr: 'Impossibile leggere le immagini. Sposta un po\' la mappa e riprova.',
            tooSmall: 'Niente da tracciare qui: l\'area è troppo piccola. Alza la tolleranza o fai clic altrove.',
            tooComplex: 'Il contorno qui è troppo frastagliato per farne un luogo. Abbassa la tolleranza o fai clic più vicino al centro dell\'area; se serve, aumenta lo scarto ammesso del contorno (scheda Scripts).',
            edge: 'L\'area continua fuori dallo schermo: riduci lo zoom per prenderla per intero.',
            analysisErr: 'L\'analisi non è riuscita. Fai di nuovo clic; se persiste, ricarica WME.',
            invalidShape: 'Il contorno si incrocerebbe: non è stato cambiato nulla.',
            noPlace: 'Seleziona prima un luogo.',
            tilesMissing: 'Alcune tessere delle immagini non sono state lette: il contorno potrebbe essere incompleto.',
            edgeCut: 'L\'area supera ciò che la bacchetta legge in una volta: riduci lo zoom per prenderla per intero.',
            dupe: 'Un luogo di tipo area si sovrappone già a questo contorno: controllalo prima di crearne un altro.',
            dupeUnknown: 'Non è stato possibile leggere i luoghi: nessun controllo dei doppioni. Guarda la mappa prima di creare.',
            closedGaps: 'Sono state colmate strettoie perché il contorno non si incroci.',
            previewErr: 'Non è stato possibile aggiungere il livello di anteprima: ricarica WME.',
            tileFormat: 'Le tessere delle immagini hanno cambiato formato: la bacchetta non riesce a leggerle. Segnalalo nella discussione su Discuss.',
            kEsc: 'Esc',
            creditGh: 'GitHub (WASD42)',
            relaxed: n => 'Contorno semplificato più del previsto, per restare sotto i ' + n + ' punti.',
            groundPx: m => '1 pixel di immagine ≈ ' + m,
            pvTitle: 'Bacchetta magica',
            pvStats: (n, aire) => n + ' punti · ' + aire,
            btnCreate: 'Crea il luogo',
            btnCancel: 'Annulla',
            created: 'Luogo creato: controllalo, poi salva.',
            createErr: m => 'WME ha rifiutato il luogo: ' + m,
            lblShape: 'Forma',
            tipClone: 'Clona: copia questo luogo accanto, con le stesse categorie',
            tipOrtho: 'In squadra: raddrizza gli angoli quasi retti',
            tipSimp: 'Semplifica: togli i punti che non aggiungono nulla al contorno',
            tipRot: 'Ruota: trascina sulla mappa (Maiusc: passi di 15°)',
            tipRes: 'Ridimensiona: trascina sulla mappa, la forma resta',
            tipPointOnly: 'Luogo puntuale: vale solo Clona',
            modeRot: 'Trascina sulla mappa per ruotare il luogo. Maiusc: passi di 15°. Esc per finire.',
            modeRes: 'Trascina sulla mappa per ridimensionare il luogo. Esc per finire.',
            nothingOrtho: 'Nessun angolo da raddrizzare con questa soglia.',
            nothingSimp: 'Niente da semplificare con questa impostazione.',
            done: 'Fatto. Annulla (Ctrl+Z) torna indietro.',
            editErr: m => 'WME ha rifiutato la modifica: ' + m,
            scToggle: 'Bacchetta magica: attiva / ferma',
            scClone: 'Clona il luogo selezionato',
            scOrtho: 'Metti in squadra il luogo selezionato',
            scSimp: 'Semplifica il luogo selezionato',
            scRot: 'Ruota il luogo selezionato (trascina sulla mappa)',
            scRes: 'Ridimensiona il luogo selezionato (trascina sulla mappa)',
            keysRot: 'Tasti ← →: passi di 1° (Maiusc: 15°).',
            keysRes: 'Tasti ↑ ↓: passi dell\'1% (Maiusc: 10%).',
            scCentre: 'Bacchetta magica al centro della mappa',
            sbHelp: 'Aiuto',
            hWandT: 'La bacchetta',
            hWandB: '<p>Attiva la bacchetta (pulsante della mappa, pulsante qui sopra o scorciatoia), poi fai clic dentro un lago, un bosco o un campo: abbraccia i pixel vicini di colore simile e ne traccia il contorno.</p><p>Regola la <b>tolleranza</b> nel riquadro della bacchetta in basso (il contorno segue dal vivo), scegli la categoria, poi <b>Crea il luogo</b> (<kbd>Invio</kbd>). <kbd>Esc</kbd> annulla.</p><p>La bacchetta legge le immagini satellitari che WME mostra già, dentro l\'editor e solo per il calcolo: niente viene conservato né inviato altrove.</p>',
            hAlgoT: 'Confronto dei colori',
            hAlgoB: e => '<p><b>Distanza di colore (per canale)</b> confronta rosso, verde e blu separatamente e tiene la maggiore delle tre differenze. Semplice e prevedibile: è l\'impostazione predefinita e, nelle nostre prove, la più facile da regolare — il contorno restava stabile su un tratto più ampio del cursore.</p><p><b>Somiglianza per l\'occhio (CIE94)</b> converte i colori nello spazio CIE Lab, costruito su come l\'occhio li percepisce, e misura la differenza CIE94. La sua scala è riportata su quella della distanza di colore (× ' + e + ', misurato): la stessa tolleranza abbraccia più o meno la stessa estensione con i due metodi. Da tentare quando la distanza di colore non separa bene l\'area da ciò che la circonda.</p><p>La <b>smussatura</b> media prima ogni pixel con i vicini: cancella la trama degli alberi o delle colture. Cambiare metodo o smussatura rifà l\'analisi dell\'ultimo clic.</p>',
            hToolsT: 'Strumenti di forma',
            hToolsB: '<p>Seleziona uno o più luoghi: una barra di <b>strumenti di forma</b> galleggia sulla mappa, appena sopra.</p><table class="wmw-help-table"><tr><td>&#x29C9;</td><td>Clona: una copia accanto, mai sull\'originale né su un altro luogo di tipo area, con le stesse categorie; senza nome, con il blocco predefinito di un luogo nuovo.</td></tr><tr><td>&#x221F;</td><td>In squadra: gli angoli vicini a 90° o 180° diventano esatti (soglia qui sopra).</td></tr><tr><td>&#x2248;</td><td>Semplifica: toglie i punti che non aggiungono nulla (impostazione Semplificazione qui sopra).</td></tr><tr><td>&#x27F3;</td><td>Ruota: trascina sulla mappa attorno al luogo. <kbd>Maiusc</kbd>: passi di 15°.</td></tr><tr><td>&#x2922;</td><td>Ridimensiona: allontanati dal centro o avvicinati.</td></tr></table><p>Ogni azione è un passo della cronologia di annullamento di WME.</p>',
            hKeysT: 'Tastiera',
            hKeysB: '<p>Sette scorciatoie sono elencate <b>senza tasti</b> in Impostazioni › Scorciatoie da tastiera, per non toglierne a un altro script. Assegna lì quelle che vuoi.</p><p>La scorciatoia «al centro della mappa» avvia la bacchetta al centro della vista: basta la tastiera. In Ruota o Ridimensiona, le frecce ruotano o scalano il luogo selezionato passo dopo passo.</p>',
            hCredT: 'Riconoscimenti',
            hCredB: '<p>Riscrittura, per l\'SDK di WME, di <a href="' + URL_ORIG_GF + '" target="_blank" rel="noopener">WME MagicWand</a> di <b>WASD42</b> (Vadim Istratov, 2014-2018, licenza MIT), mantenuto poi nel <a href="' + URL_FORK + '" target="_blank" rel="noopener">fork di mapomatic</a> da justins83, MapOMatic, FXZFun e karlsosha.</p><p>La squadratura è l\'azione «orthogonalize» dell\'editor OpenStreetMap <a href="' + URL_ID + '" target="_blank" rel="noopener">iD</a> (licenza ISC), come adattata da WASD42. Anche il confronto dei colori (CIE Lab, CIE94) segue il suo codice.</p><p>Cosa cambia: il contorno è tracciato esattamente dai pixel invece che con un inviluppo concavo, e ruotare o ridimensionare si fa trascinando sulla mappa. L\'aiuto per gli angoli retti (Maiusc trascinando un vertice) non c\'è più: l\'SDK non dà accesso al trascinamento dei vertici di WME.</p>',
            creditLine: 'Basato su WME MagicWand di WASD42',
            hSafeB: 'Ogni modifica passa dalla cronologia di annullamento di WME: niente viene salvato senza di te.',
            lnkDiscuss: 'Discussione su Discuss',
            majBtn: v => 'La versione ' + v + ' è disponibile',
            majInstall: 'Installa',
            lblAllCats: 'Proponi tutte le categorie',
            lblAllCatsHint: 'Disattivato: per i nuovi luoghi sono proposte solo le aree naturali (bosco, lago, spiaggia, parco…).',
            lblBdTopo: 'Mostra i contorni BD TOPO (Francia)',
            lblBdTopoHint: 'Vegetazione, acqua ed edifici della BD TOPO dell\'IGN, tratteggiati a partire dallo zoom 16. Un riferimento per verificare il tuo contorno sulle immagini: non viene importato nulla. Fonte accreditata da Waze per la visualizzazione.',
            bdtopoEtat: 'BD TOPO: {n} contorno/i mostrato/i',
            bdtopoZoom: 'BD TOPO: ingrandisci (16 o più) per vedere i contorni',
            bdtopoErr: 'BD TOPO: non disponibile ({e})',
            bdtopoTrop: 'BD TOPO: troppi oggetti qui, alcuni mancano',
            lblAvoid: 'Evita i luoghi della stessa categoria',
            lblAvoidHint: 'Attivato: la zona tracciata si ferma ai luoghi di tipo area della categoria scelta. Il luogo scelto prima del clic non è evitato (Sostituisci, Amplia).',
            lblMargin: 'Sovrapposizione tollerata con un vicino (m)',
            lblLock: "Blocco dei luoghi creati",
            lockDefault: "Quello di WME",
            lblLockHint: "Livello di blocco dato al luogo creato con la bacchetta, limitato al tuo grado. Clona, Sostituisci e Amplia non lo cambiano.",
            lockErr: m => "Luogo creato, ma non è stato possibile impostarne il blocco: " + m,
            lblMarginHint: 'La zona può sconfinare fin qui in un luogo vicino, per un confine comune pulito, ma mai oltre la metà della sua profondità: un luogo piccolo non viene mai coperto per intero. 0: nessuna sovrapposizione.',
            inPlace: n => n ? 'Questo clic cade dentro «' + n + '», un luogo della stessa categoria: non viene tracciato nulla.' : 'Questo clic cade dentro un luogo della stessa categoria: non viene tracciato nulla.',
            inTraced: 'Questo clic cade dentro la zona già tracciata: niente da aggiungere.',
            surrounds: (n, nom) => n > 1 ? 'La zona circonda ' + n + ' luoghi della stessa categoria: li copre (un luogo non può avere buchi).' : nom ? 'La zona circonda «' + nom + '», un luogo della stessa categoria: lo copre (un luogo non può avere buchi).' : 'La zona circonda un luogo della stessa categoria: lo copre (un luogo non può avere buchi).',
            lblCursor: 'Puntatore della bacchetta',
            curWand: 'Bacchetta magica',
            curPicker: 'Contagocce',
            curTarget: 'Mirino',
            curArrow: 'Freccia',
            curCross: 'Croce', lblBar: 'Barra degli strumenti sulla mappa', barAbove: 'Sopra il luogo', barBelow: 'Sotto il luogo', barOff: 'Nascosta',
            btnReplace: n => 'Sostituisci il contorno di «' + n + '»',
            btnReplaceAnon: 'Sostituisci il contorno del luogo scelto prima del clic',
            replaced: 'Contorno sostituito: controllalo, poi salva.',
            pvParts: n => n + ' zone',
            hintAdd: 'Alt + clic: aggiungi una zona',
            dragTip: 'Trascina per spostare · doppio clic per rimetterla al suo posto',
            apart: 'Questo clic non tocca la zona già tracciata: non viene aggiunto.',
            btnExtend: n => 'Amplia «' + n + '» con questa zona',
            btnExtendAnon: 'Amplia il luogo scelto prima del clic con questa zona',
            extended: 'Luogo ampliato: controllalo, poi salva.',
            extendApart: 'La zona tracciata non tocca questo luogo: non è stato modificato nulla.',
            lblOnSel: 'Sulla selezione',
            lblOnSelHint: 'Clona, squadra o semplifica in una volta tutti i luoghi selezionati.',
            oneOnly: 'Ruota e Ridimensiona trattano un luogo alla volta.',
            batchProgress: (a, b) => 'Lotto: ' + a + '/' + b + '…',
            batchDone: (ok, n) => 'Lotto terminato: ' + ok + ' luoghi modificati su ' + n,
            batchSame: n => n + ' invariati',
            batchRefused: n => n + ' rifiutati da WME',
            batchQuota: (n, h) => n + ' non trattati: limite orario raggiunto, si riprende alle ' + h,
            quotaFull: h => 'Limite orario delle modifiche dello script raggiunto: si riprende alle ' + h + '.',
            hReplB: '<p>Se al momento del clic è selezionato un luogo di tipo area, la finestra propone anche di <b>sostituire il contorno</b> di quel luogo con quello tracciato. È un pulsante secondario: <kbd>Invio</kbd> crea sempre un nuovo luogo.</p><p><kbd>Alt</kbd> + clic a finestra aperta <b>aggiunge</b> una zona al contorno (ciò che la tolleranza ha escluso o ciò che era fuori schermo); la tolleranza regola allora l\'ultimo clic. Se prima del clic era selezionato un luogo di tipo area, <b>Amplia</b> unisce la zona tracciata al contorno di quel luogo, se si toccano o si sovrappongono. Il contorno unito viene ritracciato con la precisione della bacchetta.</p>',
            hAvoidT: 'Evitare i luoghi vicini',
            hAvoidB: '<p>Con <b>Evita i luoghi della stessa categoria</b> (attivo per impostazione predefinita), la zona tracciata si ferma ai luoghi di tipo area della categoria scelta: non si sovrappone più a un bosco o a un lago già mappato. Se un luogo taglia la zona in due, resta solo la parte cliccata. Un clic dentro uno di questi luoghi non traccia nulla.</p><p>La <b>sovrapposizione tollerata</b> (da 0 a 300 m, 50 per impostazione predefinita) lascia sconfinare un po\' la zona nel vicino, per un confine comune pulito, ma mai oltre la metà della sua profondità: un luogo piccolo non viene mai coperto per intero. Un luogo interamente circondato dalla zona (una radura in mezzo a un bosco) non si può evitare, perché un luogo Waze non può avere buchi: la finestra lo segnala.</p><p>Con <kbd>Alt</kbd> + clic, la stessa regola vale per ogni zona aggiunta; un clic dentro la zona già tracciata non aggiunge nulla. Il luogo scelto prima del clic non è evitato (Sostituisci, Amplia).</p>',
            hLotB: '<p>Con più luoghi selezionati, Clona, Squadra e Semplifica si applicano a ciascuno (pulsanti «Sulla selezione» qui sopra, o le scorciatoie), con un riepilogo alla fine. Ogni luogo modificato conta nel limite orario (sezione qui sotto). Ruota e Ridimensiona trattano un luogo alla volta. Questi strumenti valgono solo per i luoghi.</p>',
            quotaLeft: (r, m) => 'Modifiche dello script in quest\'ora: ne restano ' + r + ' su ' + m,
            quotaShort: (r, m) => r + '/' + m,
            quotaTip: 'Ora mobile, tutti gli strumenti dello script insieme. Una modifica = un luogo cambiato tra due salvataggi; riservata quando viene scritta, contata al salvataggio.',
            quotaBlocked: 'Il contatore delle modifiche è stato alterato: le modifiche dello script sono bloccate per un\'ora.',
            cloneNoRoom: 'Nessuno spazio libero accanto a questo luogo: nulla è stato clonato (la copia avrebbe coperto un luogo).',
            cloneUnknown: 'Non è stato possibile leggere i luoghi: nulla è stato clonato (controllo dei doppioni impossibile).',
            batchNoRoom: n => n + ' non clonati: nessuno spazio libero accanto all\'originale',
            hQuotaT: 'Limite orario',
            hQuotaB: (e, m) => '<p>Al massimo <b>' + m + ' modifiche dello script per ora mobile</b> e per editor (dottrina degli script per la Francia), qualunque sia lo strumento: luogo creato con la bacchetta, contorno sostituito, Clona, Squadra, Semplifica, Ruota, Ridimensiona, su un luogo o su un lotto. Il resto è mostrato in questa scheda, nella finestra della bacchetta e nella barra degli strumenti. Nessuna impostazione lo alza.</p><p>Una modifica = un luogo cambiato tra due salvataggi, come lo salva WME: più passi sullo stesso luogo (frecce di Ruota, un clone e le sue categorie) contano una volta. Una modifica è riservata quando lo script la scrive e contata al salvataggio; lasciare la pagina senza salvare restituisce le riserve; una modifica annullata con Ctrl+Z resta riservata fino alla fine della sua ora.</p>',
            hSrcT: 'Fonti e dati',
            hSrcB: '<p><b>Immagini</b>: la bacchetta legge le immagini satellitari mostrate da WME (fornite da Google tramite WME), compresi i livelli di immagini aggiuntivi che hai acceso in WME (Pléiades, WorldView…), sovrapposti come sullo schermo; le loro tessere vengono da earthengine.googleapis.com. Nell\'editor, al tuo clic, rilegge le tessere che WME ha appena mostrato — stesso indirizzo, senza cookie —, solo attorno al clic e solo per il calcolo: nulla è conservato una volta spenta la bacchetta, e nella mappa entra solo il contorno che accetti.</p><p><b>Controllo della versione</b>: all\'avvio lo script legge <code>version-min.json</code> nel suo repository GitHub (raw.githubusercontent.com) — una versione ritirata o alterata non si avvia; una volta al giorno legge la versione pubblicata su GreasyFork (update.greasyfork.org). Queste richieste non inviano nient\'altro che la richiesta stessa. Per una versione non pubblicata, il tuo nome utente (letto in WME, o su Waze Discuss, stesso sito) è confrontato solo sul tuo computer.</p><p>Nient\'altro lascia il browser. Riconoscimenti: WASD42, il fork di mapomatic e iD (sezione successiva).</p>',
        },
        'pt-BR': {
            btnOn: 'Ativar a varinha',
            btnOff: 'Parar a varinha',
            tipFab: 'Varinha mágica: clique dentro de uma área na imagem de satélite',
            stOff: 'A varinha está parada.',
            stWait: 'Clique dentro de uma área na imagem de satélite.',
            stRead: 'Lendo a imagem…',
            stTiles: (a, b) => 'Lendo a imagem… ' + a + '/' + b + ' blocos',
            stColours: 'Comparando as cores…',
            sbHint: 'Clique dentro de um lago, uma floresta ou um campo na imagem de satélite: a varinha traça o contorno e o propõe como lugar de tipo área. Também esquadreja, simplifica, gira, redimensiona e clona lugares.',
            secWand: 'Varinha mágica',
            secShape: 'Ferramentas de forma',
            lblCat: 'Categoria dos novos lugares',
            lblAlgo: 'Comparação de cores',
            algoRgb: 'Distância de cor (por canal)',
            algoLab: 'Semelhança para o olho (CIE94)',
            lblTol: 'Tolerância',
            lblTolHint: 'Mais alta abrange mais tons. Em geral de 10 a 30.',
            lblSmooth: 'Suavização',
            lblSmoothHint: 'Cada pixel é calculado pela média com os vizinhos neste raio (pixels). 0: sem.',
            lblDetail: 'Desvio permitido do contorno (px)',
            lblDetailHint: 'Quanto o contorno pode se afastar dos pixels. Mais alto: menos pontos, contorno mais grosseiro.',
            lblAngle: 'Limite de esquadro (°)',
            lblAngleHint: 'Só os ângulos a menos destes graus de um ângulo reto ou raso são endireitados.',
            lblSimp: 'Simplificação (m)',
            lblSimpHint: 'Simplificar remove os pontos mais próximos do contorno do que isso.',
            lblHl: 'Destacar os lugares quase no esquadro',
            lblHlHint: 'Contorna em laranja os lugares de tipo área que «No esquadro» mudaria.',
            noImagery: 'Mostre primeiro a imagem de satélite (Camadas ▸ Imagem de satélite): a varinha a lê.',
            tileErr: 'Não foi possível ler a imagem. Mova um pouco o mapa e tente de novo.',
            tooSmall: 'Nada a traçar aqui: a área é pequena demais. Aumente a tolerância ou clique em outro lugar.',
            tooComplex: 'O contorno está recortado demais aqui para virar um lugar. Diminua a tolerância ou clique mais perto do centro da área; se preciso, aumente o desvio permitido do contorno (aba Scripts).',
            edge: 'A área continua fora da tela: diminua o zoom para pegá-la inteira.',
            analysisErr: 'A análise falhou. Clique de novo; se continuar, recarregue o WME.',
            invalidShape: 'O contorno se cruzaria: nada foi alterado.',
            noPlace: 'Selecione um lugar primeiro.',
            tilesMissing: 'Alguns blocos da imagem não puderam ser lidos: o contorno pode estar incompleto.',
            edgeCut: 'A área passa do que a varinha lê de uma vez: diminua o zoom para pegá-la inteira.',
            dupe: 'Um lugar de tipo área já se sobrepõe a este contorno: confira-o antes de criar outro.',
            dupeUnknown: 'Não foi possível ler os lugares: sem verificação de duplicados. Olhe o mapa antes de criar.',
            closedGaps: 'Passagens estreitas foram preenchidas para que o contorno não se cruze.',
            previewErr: 'Não foi possível adicionar a camada de prévia: recarregue o WME.',
            tileFormat: 'Os blocos da imagem mudaram de formato: a varinha não consegue lê-los. Avise no tópico do Discuss.',
            kEsc: 'Esc',
            creditGh: 'GitHub (WASD42)',
            relaxed: n => 'Contorno simplificado além do ajuste, para ficar abaixo de ' + n + ' pontos.',
            groundPx: m => '1 pixel da imagem ≈ ' + m,
            pvTitle: 'Varinha mágica',
            pvStats: (n, aire) => n + ' pontos · ' + aire,
            btnCreate: 'Criar o lugar',
            btnCancel: 'Cancelar',
            created: 'Lugar criado: confira e depois salve.',
            createErr: m => 'O WME recusou o lugar: ' + m,
            lblShape: 'Forma',
            tipClone: 'Clonar: copiar este lugar ao lado, com as mesmas categorias',
            tipOrtho: 'No esquadro: endireitar os ângulos quase retos',
            tipSimp: 'Simplificar: remover os pontos que nada acrescentam ao contorno',
            tipRot: 'Girar: arraste no mapa (Shift: passos de 15°)',
            tipRes: 'Redimensionar: arraste no mapa, a forma é mantida',
            tipPointOnly: 'Lugar de ponto: só Clonar se aplica',
            modeRot: 'Arraste no mapa para girar o lugar. Shift: passos de 15°. Esc para terminar.',
            modeRes: 'Arraste no mapa para redimensionar o lugar. Esc para terminar.',
            nothingOrtho: 'Nenhum ângulo a endireitar com este limite.',
            nothingSimp: 'Nada a simplificar com esta configuração.',
            done: 'Feito. Desfazer (Ctrl+Z) reverte.',
            editErr: m => 'O WME recusou a alteração: ' + m,
            scToggle: 'Varinha mágica: ativar / parar',
            scClone: 'Clonar o lugar selecionado',
            scOrtho: 'Pôr no esquadro o lugar selecionado',
            scSimp: 'Simplificar o lugar selecionado',
            scRot: 'Girar o lugar selecionado (arrastar no mapa)',
            scRes: 'Redimensionar o lugar selecionado (arrastar no mapa)',
            keysRot: 'Teclas ← →: passos de 1° (Shift: 15°).',
            keysRes: 'Teclas ↑ ↓: passos de 1% (Shift: 10%).',
            scCentre: 'Varinha mágica no centro do mapa',
            sbHelp: 'Ajuda',
            hWandT: 'A varinha',
            hWandB: '<p>Ative a varinha (botão do mapa, botão acima ou atalho) e clique dentro de um lago, uma floresta ou um campo: ela abrange os pixels vizinhos de cor parecida e traça o contorno.</p><p>Ajuste a <b>tolerância</b> no cartão embaixo (o contorno acompanha ao vivo), escolha a categoria e depois <b>Criar o lugar</b> (<kbd>Enter</kbd>). <kbd>Esc</kbd> cancela.</p><p>A varinha lê a imagem de satélite que o WME já mostra, dentro do editor e só para o cálculo: nada é guardado nem enviado a outro lugar.</p>',
            hAlgoT: 'Comparação de cores',
            hAlgoB: e => '<p><b>Distância de cor (por canal)</b> compara o vermelho, o verde e o azul separadamente e fica com a maior das três diferenças. Simples e previsível: é o padrão e, nos nossos testes, a mais fácil de ajustar — o contorno ficava estável numa faixa maior do controle.</p><p><b>Semelhança para o olho (CIE94)</b> converte as cores para o espaço CIE Lab, construído sobre a forma como o olho as percebe, e mede a diferença CIE94. A escala dela é ajustada à da distância de cor (× ' + e + ', medido): a mesma tolerância abrange mais ou menos a mesma extensão com os dois métodos. Vale tentar quando a distância de cor não separa bem a área do entorno.</p><p>A <b>suavização</b> faz primeiro a média de cada pixel com os vizinhos: apaga a textura das árvores ou das plantações. Trocar de método ou de suavização refaz a análise do último clique.</p>',
            hToolsT: 'Ferramentas de forma',
            hToolsB: '<p>Selecione um ou mais lugares: uma barra de <b>ferramentas de forma</b> flutua no mapa, logo acima deles.</p><table class="wmw-help-table"><tr><td>&#x29C9;</td><td>Clonar: uma cópia ao lado, nunca sobre o original nem sobre outro lugar de tipo área, com as mesmas categorias; sem nome, com o bloqueio padrão de um lugar novo.</td></tr><tr><td>&#x221F;</td><td>No esquadro: ângulos próximos de 90° ou 180° ficam exatos (limite acima).</td></tr><tr><td>&#x2248;</td><td>Simplificar: remove os pontos que nada acrescentam (ajuste Simplificação acima).</td></tr><tr><td>&#x27F3;</td><td>Girar: arraste no mapa ao redor do lugar. <kbd>Shift</kbd>: passos de 15°.</td></tr><tr><td>&#x2922;</td><td>Redimensionar: afaste-se do centro ou aproxime-se dele.</td></tr></table><p>Cada ação é um passo no histórico de desfazer do WME.</p>',
            hKeysT: 'Teclado',
            hKeysB: '<p>Sete atalhos aparecem <b>sem teclas</b> em Configurações › Atalhos de teclado, para não tirar nenhuma de outro script. Atribua lá os que quiser.</p><p>O atalho “no centro do mapa” usa a varinha no centro da vista: só o teclado basta. Em Girar ou Redimensionar, as setas giram ou escalam o lugar selecionado passo a passo.</p>',
            hCredT: 'Créditos',
            hCredB: '<p>Reescrita, para o SDK do WME, do <a href="' + URL_ORIG_GF + '" target="_blank" rel="noopener">WME MagicWand</a> de <b>WASD42</b> (Vadim Istratov, 2014-2018, licença MIT), mantido depois no <a href="' + URL_FORK + '" target="_blank" rel="noopener">fork de mapomatic</a> por justins83, MapOMatic, FXZFun e karlsosha.</p><p>O esquadro é a ação «orthogonalize» do editor do OpenStreetMap <a href="' + URL_ID + '" target="_blank" rel="noopener">iD</a> (licença ISC), como adaptada por WASD42. A comparação de cores (CIE Lab, CIE94) também segue o código dele.</p><p>O que muda: o contorno é traçado exatamente a partir dos pixels em vez de uma envoltória côncava, e girar ou redimensionar se faz arrastando no mapa. A ajuda de ângulos retos (Shift ao arrastar um vértice) sai: o SDK não dá acesso ao arrasto de vértices do WME.</p>',
            creditLine: 'Baseado no WME MagicWand de WASD42',
            hSafeB: 'Toda alteração passa pelo histórico de desfazer do WME: nada é salvo sem você.',
            lnkDiscuss: 'Tópico no Discuss',
            majBtn: v => 'A versão ' + v + ' está disponível',
            majInstall: 'Instalar',
            lblAllCats: 'Oferecer todas as categorias',
            lblAllCatsHint: 'Desligado: para lugares novos, só são oferecidas áreas naturais (floresta, lago, praia, parque…).',
            lblBdTopo: 'Mostrar os contornos BD TOPO (França)',
            lblBdTopoHint: 'Vegetação, água e edificações da BD TOPO do IGN, pontilhados a partir do zoom 16. Uma referência para conferir seu contorno nas imagens: nada é importado. Fonte credenciada pelo Waze para exibição.',
            bdtopoEtat: 'BD TOPO: {n} contorno(s) exibido(s)',
            bdtopoZoom: 'BD TOPO: aproxime (16 ou mais) para ver os contornos',
            bdtopoErr: 'BD TOPO: indisponível ({e})',
            bdtopoTrop: 'BD TOPO: objetos demais aqui, alguns estão faltando',
            lblAvoid: 'Evitar os lugares da mesma categoria',
            lblAvoidHint: 'Ligado: a zona traçada para nos lugares do tipo área da categoria escolhida. O lugar escolhido antes do clique não é evitado (Substituir, Ampliar).',
            lblMargin: 'Sobreposição tolerada com um vizinho (m)',
            lblLock: "Bloqueio dos lugares criados",
            lockDefault: "O do WME",
            lblLockHint: "Nível de bloqueio dado ao lugar criado pela varinha, limitado ao seu próprio nível. Clonar, Substituir e Ampliar não o alteram.",
            lockErr: m => "Lugar criado, mas não foi possível definir o bloqueio: " + m,
            lblMarginHint: 'A zona pode avançar até aqui sobre um lugar vizinho, para um limite comum limpo, mas nunca mais que a metade da profundidade dele: um lugar pequeno nunca é coberto por inteiro. 0: nenhuma sobreposição.',
            inPlace: n => n ? 'Este clique cai dentro de «' + n + '», um lugar da mesma categoria: nada é traçado.' : 'Este clique cai dentro de um lugar da mesma categoria: nada é traçado.',
            inTraced: 'Este clique cai dentro da zona já traçada: nada a adicionar.',
            surrounds: (n, nom) => n > 1 ? 'A zona envolve ' + n + ' lugares da mesma categoria: ela os cobre (um lugar não pode ter buraco).' : nom ? 'A zona envolve «' + nom + '», um lugar da mesma categoria: ela o cobre (um lugar não pode ter buraco).' : 'A zona envolve um lugar da mesma categoria: ela o cobre (um lugar não pode ter buraco).',
            lblCursor: 'Ponteiro da varinha',
            curWand: 'Varinha mágica',
            curPicker: 'Conta-gotas',
            curTarget: 'Mira',
            curArrow: 'Seta',
            curCross: 'Cruz', lblBar: 'Barra de ferramentas no mapa', barAbove: 'Acima do local', barBelow: 'Abaixo do local', barOff: 'Oculta',
            btnReplace: n => 'Substituir o contorno de “' + n + '”',
            btnReplaceAnon: 'Substituir o contorno do lugar escolhido antes do clique',
            replaced: 'Contorno substituído: confira e depois salve.',
            pvParts: n => n + ' zonas',
            hintAdd: 'Alt + clique: adicionar uma zona',
            dragTip: 'Arraste para mover · clique duplo para voltar ao lugar',
            apart: 'Este clique não toca a zona já traçada: ele não é adicionado.',
            btnExtend: n => 'Ampliar “' + n + '” com esta zona',
            btnExtendAnon: 'Ampliar o lugar escolhido antes do clique com esta zona',
            extended: 'Lugar ampliado: confira e depois salve.',
            extendApart: 'A zona traçada não toca este lugar: nada foi alterado.',
            lblOnSel: 'Na seleção',
            lblOnSelHint: 'Clonar, esquadrar ou simplificar de uma vez todos os lugares selecionados.',
            oneOnly: 'Girar e Redimensionar tratam um lugar de cada vez.',
            batchProgress: (a, b) => 'Lote: ' + a + '/' + b + '…',
            batchDone: (ok, n) => 'Lote concluído: ' + ok + ' de ' + n + ' lugares alterados',
            batchSame: n => n + ' sem alteração',
            batchRefused: n => n + ' recusados pelo WME',
            batchQuota: (n, h) => n + ' não tratados: limite por hora atingido, retoma às ' + h,
            quotaFull: h => 'Limite por hora das edições do script atingido: retoma às ' + h + '.',
            hReplB: '<p>Se um lugar do tipo área estiver selecionado no momento do clique, a janela também oferece <b>Substituir o contorno</b> desse lugar pelo traçado. É um botão secundário: <kbd>Enter</kbd> continua criando um lugar novo.</p><p><kbd>Alt</kbd> + clique com a janela aberta <b>adiciona</b> uma zona ao contorno (o que a tolerância deixou de fora ou o que estava fora da tela); a tolerância então ajusta o último clique. Se um lugar do tipo área estava selecionado antes do clique, <b>Ampliar</b> une a zona traçada ao contorno desse lugar, se elas se tocam ou se sobrepõem. O contorno unido é retraçado com a precisão da varinha.</p>',
            hAvoidT: 'Evitar os lugares vizinhos',
            hAvoidB: '<p>Com <b>Evitar os lugares da mesma categoria</b> (ligado por padrão), a zona traçada para nos lugares do tipo área da categoria escolhida: ela não se sobrepõe mais a uma floresta ou a um lago já mapeado. Se um lugar corta a zona em duas, só a parte clicada é mantida. Um clique dentro de um desses lugares não traça nada.</p><p>A <b>sobreposição tolerada</b> (de 0 a 300 m, 50 por padrão) deixa a zona avançar um pouco sobre o vizinho, para um limite comum limpo, mas nunca mais que a metade da profundidade dele: um lugar pequeno nunca é coberto por inteiro. Um lugar totalmente cercado pela zona (uma clareira no meio de uma floresta) não pode ser evitado, já que um lugar do Waze não pode ter buraco: a janela avisa.</p><p>Com <kbd>Alt</kbd> + clique, a mesma regra vale para cada zona adicionada; um clique dentro da zona já traçada não adiciona nada. O lugar escolhido antes do clique não é evitado (Substituir, Ampliar).</p>',
            hLotB: '<p>Com vários lugares selecionados, Clonar, Esquadrar e Simplificar se aplicam a cada um (botões “Na seleção” acima, ou os atalhos), com um resumo no final. Cada lugar alterado conta no limite por hora (seção abaixo). Girar e Redimensionar tratam um lugar de cada vez. Essas ferramentas valem só para lugares.</p>',
            quotaLeft: (r, m) => 'Edições do script nesta hora: restam ' + r + ' de ' + m,
            quotaShort: (r, m) => r + '/' + m,
            quotaTip: 'Hora móvel, todas as ferramentas do script juntas. Uma edição = um lugar alterado entre dois salvamentos; reservada ao ser escrita, contada ao salvar.',
            quotaBlocked: 'O contador de edições foi alterado: as edições do script ficam bloqueadas por uma hora.',
            cloneNoRoom: 'Não há espaço livre ao lado deste lugar: nada foi clonado (a cópia teria coberto um lugar).',
            cloneUnknown: 'Não foi possível ler os lugares: nada foi clonado (verificação de duplicados impossível).',
            batchNoRoom: n => n + ' não clonados: não há espaço livre ao lado do original',
            hQuotaT: 'Limite por hora',
            hQuotaB: (e, m) => '<p>No máximo <b>' + m + ' edições do script por hora móvel</b> e por editor (doutrina de scripts da França), seja qual for a ferramenta: lugar criado com a varinha, contorno substituído, Clonar, Esquadrar, Simplificar, Girar, Redimensionar, em um lugar ou em um lote. O que resta aparece nesta aba, na janela da varinha e na barra de ferramentas. Nenhuma configuração o aumenta.</p><p>Uma edição = um lugar alterado entre dois salvamentos, como o WME salva: vários passos no mesmo lugar (setas de Girar, um clone e suas categorias) contam uma vez. Uma edição é reservada quando o script a escreve e contada ao salvar; sair da página sem salvar devolve as reservas; uma edição desfeita com Ctrl+Z continua reservada até o fim da sua hora.</p>',
            hSrcT: 'Fontes e dados',
            hSrcB: '<p><b>Imagens</b>: a varinha lê a imagem de satélite exibida pelo WME (fornecida pelo Google através do WME), incluindo as camadas de imagens extras que você ativou no WME (Pléiades, WorldView…), sobrepostas como na tela; os blocos delas vêm de earthengine.googleapis.com. No editor, no seu clique, ela relê os blocos que o WME acabou de exibir — mesmo endereço, sem cookies —, só em volta do clique e só para o cálculo: nada é guardado depois que a varinha é desligada, e só o contorno que você aceita entra no mapa.</p><p><b>Verificação de versão</b>: ao iniciar, o script lê <code>version-min.json</code> no seu repositório do GitHub (raw.githubusercontent.com) — uma versão retirada ou alterada não inicia; uma vez por dia lê a versão publicada no GreasyFork (update.greasyfork.org). Essas requisições não enviam nada além da própria requisição. Para uma versão não publicada, seu nome de usuário (lido no WME, ou no Waze Discuss, mesmo site) é comparado só no seu computador.</p><p>Nada mais sai do navegador. Créditos: WASD42, o fork de mapomatic e iD (seção seguinte).</p>',
        },
        'pt-PT': {
            btnOn: 'Ativar a varinha',
            btnOff: 'Parar a varinha',
            tipFab: 'Varinha mágica: clique dentro de uma área na imagem de satélite',
            stOff: 'A varinha está parada.',
            stWait: 'Clique dentro de uma área na imagem de satélite.',
            stRead: 'A ler a imagem…',
            stTiles: (a, b) => 'A ler a imagem… ' + a + '/' + b + ' mosaicos',
            stColours: 'A comparar as cores…',
            sbHint: 'Clique dentro de um lago, uma floresta ou um campo na imagem de satélite: a varinha traça o contorno e propõe-o como local de tipo área. Também esquadria, simplifica, roda, redimensiona e clona locais.',
            secWand: 'Varinha mágica',
            secShape: 'Ferramentas de forma',
            lblCat: 'Categoria dos novos locais',
            lblAlgo: 'Comparação de cores',
            algoRgb: 'Distância de cor (por canal)',
            algoLab: 'Semelhança para o olho (CIE94)',
            lblTol: 'Tolerância',
            lblTolHint: 'Mais alta abrange mais tons. Em geral de 10 a 30.',
            lblSmooth: 'Suavização',
            lblSmoothHint: 'Cada píxel é calculado pela média com os vizinhos neste raio (píxeis). 0: sem.',
            lblDetail: 'Desvio permitido do contorno (px)',
            lblDetailHint: 'Quanto o contorno se pode afastar dos píxeis. Mais alto: menos pontos, contorno mais grosseiro.',
            lblAngle: 'Limiar de esquadria (°)',
            lblAngleHint: 'Só os ângulos a menos destes graus de um ângulo reto ou raso são endireitados.',
            lblSimp: 'Simplificação (m)',
            lblSimpHint: 'Simplificar remove os pontos mais próximos do contorno do que isto.',
            lblHl: 'Destacar os locais quase em esquadria',
            lblHlHint: 'Contorna a laranja os locais de tipo área que «Em esquadria» alteraria.',
            noImagery: 'Mostre primeiro a imagem de satélite (Camadas ▸ Imagem de satélite): a varinha lê-a.',
            tileErr: 'Não foi possível ler a imagem. Mova um pouco o mapa e tente de novo.',
            tooSmall: 'Nada a traçar aqui: a área é demasiado pequena. Aumente a tolerância ou clique noutro sítio.',
            tooComplex: 'O contorno está demasiado recortado aqui para fazer um local. Diminua a tolerância ou clique mais perto do centro da área; se preciso, aumente o desvio permitido do contorno (separador Scripts).',
            edge: 'A área continua fora do ecrã: reduza o zoom para a apanhar inteira.',
            analysisErr: 'A análise falhou. Clique novamente; se persistir, recarregue o WME.',
            invalidShape: 'O contorno cruzar-se-ia: nada foi alterado.',
            noPlace: 'Selecione primeiro um local.',
            tilesMissing: 'Alguns mosaicos da imagem não puderam ser lidos: o contorno pode estar incompleto.',
            edgeCut: 'A área ultrapassa o que a varinha lê de uma vez: reduza o zoom para a apanhar inteira.',
            dupe: 'Um local de tipo área já se sobrepõe a este contorno: verifique-o antes de criar outro.',
            dupeUnknown: 'Não foi possível ler os locais: sem verificação de duplicados. Veja o mapa antes de criar.',
            closedGaps: 'Foram preenchidas passagens estreitas para que o contorno não se cruze.',
            previewErr: 'Não foi possível adicionar a camada de pré-visualização: recarregue o WME.',
            tileFormat: 'Os mosaicos da imagem mudaram de formato: a varinha não os consegue ler. Avise no tópico do Discuss.',
            kEsc: 'Esc',
            creditGh: 'GitHub (WASD42)',
            relaxed: n => 'Contorno simplificado além do definido, para ficar abaixo de ' + n + ' pontos.',
            groundPx: m => '1 píxel da imagem ≈ ' + m,
            pvTitle: 'Varinha mágica',
            pvStats: (n, aire) => n + ' pontos · ' + aire,
            btnCreate: 'Criar o local',
            btnCancel: 'Cancelar',
            created: 'Local criado: verifique-o e depois guarde.',
            createErr: m => 'O WME recusou o local: ' + m,
            lblShape: 'Forma',
            tipClone: 'Clonar: copiar este local ao lado, com as mesmas categorias',
            tipOrtho: 'Em esquadria: endireitar os ângulos quase retos',
            tipSimp: 'Simplificar: remover os pontos que nada acrescentam ao contorno',
            tipRot: 'Rodar: arraste no mapa (Shift: passos de 15°)',
            tipRes: 'Redimensionar: arraste no mapa, a forma mantém-se',
            tipPointOnly: 'Local de ponto: só Clonar se aplica',
            modeRot: 'Arraste no mapa para rodar o local. Shift: passos de 15°. Esc para terminar.',
            modeRes: 'Arraste no mapa para redimensionar o local. Esc para terminar.',
            nothingOrtho: 'Nenhum ângulo a endireitar com este limiar.',
            nothingSimp: 'Nada a simplificar com esta definição.',
            done: 'Feito. Anular (Ctrl+Z) reverte.',
            editErr: m => 'O WME recusou a alteração: ' + m,
            scToggle: 'Varinha mágica: ativar / parar',
            scClone: 'Clonar o local selecionado',
            scOrtho: 'Pôr em esquadria o local selecionado',
            scSimp: 'Simplificar o local selecionado',
            scRot: 'Rodar o local selecionado (arrastar no mapa)',
            scRes: 'Redimensionar o local selecionado (arrastar no mapa)',
            keysRot: 'Teclas ← →: passos de 1° (Shift: 15°).',
            keysRes: 'Teclas ↑ ↓: passos de 1% (Shift: 10%).',
            scCentre: 'Varinha mágica no centro do mapa',
            sbHelp: 'Ajuda',
            hWandT: 'A varinha',
            hWandB: '<p>Ative a varinha (botão do mapa, botão acima ou atalho) e clique dentro de um lago, uma floresta ou um campo: abrange os píxeis vizinhos de cor parecida e traça o contorno.</p><p>Ajuste a <b>tolerância</b> no cartão em baixo (o contorno acompanha em direto), escolha a categoria e depois <b>Criar o local</b> (<kbd>Enter</kbd>). <kbd>Esc</kbd> cancela.</p><p>A varinha lê a imagem de satélite que o WME já mostra, dentro do editor e só para o cálculo: nada é guardado nem enviado para outro lado.</p>',
            hAlgoT: 'Comparação de cores',
            hAlgoB: e => '<p><b>Distância de cor (por canal)</b> compara o vermelho, o verde e o azul separadamente e fica com a maior das três diferenças. Simples e previsível: é a predefinição e, nos nossos testes, a mais fácil de afinar — o contorno mantinha-se estável numa faixa maior do cursor.</p><p><b>Semelhança para o olho (CIE94)</b> converte as cores para o espaço CIE Lab, construído sobre a forma como o olho as percebe, e mede a diferença CIE94. A escala é ajustada à da distância de cor (× ' + e + ', medido): a mesma tolerância abrange mais ou menos a mesma extensão com os dois métodos. Vale a pena experimentar quando a distância de cor não separa bem a área do que a rodeia.</p><p>A <b>suavização</b> faz primeiro a média de cada píxel com os vizinhos: apaga a textura das árvores ou das culturas. Mudar de método ou de suavização refaz a análise do último clique.</p>',
            hToolsT: 'Ferramentas de forma',
            hToolsB: '<p>Selecione um ou mais locais: uma barra de <b>ferramentas de forma</b> flutua no mapa, logo acima deles.</p><table class="wmw-help-table"><tr><td>&#x29C9;</td><td>Clonar: uma cópia ao lado, nunca sobre o original nem sobre outro local de tipo área, com as mesmas categorias; sem nome, com o bloqueio predefinido de um local novo.</td></tr><tr><td>&#x221F;</td><td>Em esquadria: ângulos próximos de 90° ou 180° ficam exatos (limiar acima).</td></tr><tr><td>&#x2248;</td><td>Simplificar: remove os pontos que nada acrescentam (definição Simplificação acima).</td></tr><tr><td>&#x27F3;</td><td>Rodar: arraste no mapa em volta do local. <kbd>Shift</kbd>: passos de 15°.</td></tr><tr><td>&#x2922;</td><td>Redimensionar: afaste-se do centro ou aproxime-se dele.</td></tr></table><p>Cada ação é um passo no histórico de anular do WME.</p>',
            hKeysT: 'Teclado',
            hKeysB: '<p>Sete atalhos aparecem <b>sem teclas</b> em Definições › Atalhos de teclado, para não tirar nenhuma a outro script. Atribua lá os que quiser.</p><p>O atalho «no centro do mapa» usa a varinha no centro da vista: basta o teclado. Em Rodar ou Redimensionar, as setas rodam ou escalam o local selecionado passo a passo.</p>',
            hCredT: 'Créditos',
            hCredB: '<p>Reescrita, para o SDK do WME, do <a href="' + URL_ORIG_GF + '" target="_blank" rel="noopener">WME MagicWand</a> de <b>WASD42</b> (Vadim Istratov, 2014-2018, licença MIT), mantido depois no <a href="' + URL_FORK + '" target="_blank" rel="noopener">fork de mapomatic</a> por justins83, MapOMatic, FXZFun e karlsosha.</p><p>A esquadria é a ação «orthogonalize» do editor do OpenStreetMap <a href="' + URL_ID + '" target="_blank" rel="noopener">iD</a> (licença ISC), tal como adaptada por WASD42. A comparação de cores (CIE Lab, CIE94) também segue o código dele.</p><p>O que muda: o contorno é traçado exatamente a partir dos píxeis em vez de um invólucro côncavo, e rodar ou redimensionar faz-se arrastando no mapa. A ajuda de ângulos retos (Shift ao arrastar um vértice) desaparece: o SDK não dá acesso ao arrasto de vértices do WME.</p>',
            creditLine: 'Baseado no WME MagicWand de WASD42',
            hSafeB: 'Qualquer alteração passa pelo histórico de anular do WME: nada é guardado sem si.',
            lnkDiscuss: 'Tópico no Discuss',
            majBtn: v => 'A versão ' + v + ' está disponível',
            majInstall: 'Instalar',
            lblAllCats: 'Propor todas as categorias',
            lblAllCatsHint: 'Desligado: para locais novos, só são propostas zonas naturais (floresta, lago, praia, parque…).',
            lblBdTopo: 'Mostrar os contornos BD TOPO (França)',
            lblBdTopoHint: 'Vegetação, água e edifícios da BD TOPO do IGN, a ponteado a partir do zoom 16. Uma referência para verificar o teu contorno nas imagens: nada é importado. Fonte acreditada pelo Waze para visualização.',
            bdtopoEtat: 'BD TOPO: {n} contorno(s) mostrado(s)',
            bdtopoZoom: 'BD TOPO: aproxima (16 ou mais) para ver os contornos',
            bdtopoErr: 'BD TOPO: indisponível ({e})',
            bdtopoTrop: 'BD TOPO: demasiados objetos aqui, faltam alguns',
            lblAvoid: 'Evitar os locais da mesma categoria',
            lblAvoidHint: 'Ligado: a zona traçada para nos locais do tipo área da categoria escolhida. O local escolhido antes do clique não é evitado (Substituir, Ampliar).',
            lblMargin: 'Sobreposição tolerada com um vizinho (m)',
            lblLock: "Bloqueio dos locais criados",
            lockDefault: "O do WME",
            lblLockHint: "Nível de bloqueio dado ao local criado pela varinha, limitado ao seu próprio nível. Clonar, Substituir e Ampliar não o alteram.",
            lockErr: m => "Local criado, mas não foi possível definir o bloqueio: " + m,
            lblMarginHint: 'A zona pode avançar até aqui sobre um local vizinho, para um limite comum limpo, mas nunca mais do que metade da sua profundidade: um local pequeno nunca é coberto por inteiro. 0: nenhuma sobreposição.',
            inPlace: n => n ? 'Este clique cai dentro de «' + n + '», um local da mesma categoria: nada é traçado.' : 'Este clique cai dentro de um local da mesma categoria: nada é traçado.',
            inTraced: 'Este clique cai dentro da zona já traçada: nada a acrescentar.',
            surrounds: (n, nom) => n > 1 ? 'A zona envolve ' + n + ' locais da mesma categoria: cobre-os (um local não pode ter buracos).' : nom ? 'A zona envolve «' + nom + '», um local da mesma categoria: cobre-o (um local não pode ter buracos).' : 'A zona envolve um local da mesma categoria: cobre-o (um local não pode ter buracos).',
            lblCursor: 'Ponteiro da varinha',
            curWand: 'Varinha mágica',
            curPicker: 'Conta-gotas',
            curTarget: 'Mira',
            curArrow: 'Seta',
            curCross: 'Cruz', lblBar: 'Barra de ferramentas no mapa', barAbove: 'Acima do local', barBelow: 'Abaixo do local', barOff: 'Oculta',
            btnReplace: n => 'Substituir o contorno de «' + n + '»',
            btnReplaceAnon: 'Substituir o contorno do local escolhido antes do clique',
            replaced: 'Contorno substituído: verifique-o e depois guarde.',
            pvParts: n => n + ' zonas',
            hintAdd: 'Alt + clique: acrescentar uma zona',
            dragTip: 'Arraste para mover · duplo clique para a repor no lugar',
            apart: 'Este clique não toca a zona já traçada: não é acrescentado.',
            btnExtend: n => 'Ampliar «' + n + '» com esta zona',
            btnExtendAnon: 'Ampliar o local escolhido antes do clique com esta zona',
            extended: 'Local ampliado: verifique-o e depois guarde.',
            extendApart: 'A zona traçada não toca este local: nada foi alterado.',
            lblOnSel: 'Na seleção',
            lblOnSelHint: 'Clonar, esquadriar ou simplificar de uma vez todos os locais selecionados.',
            oneOnly: 'Rodar e Redimensionar tratam um local de cada vez.',
            batchProgress: (a, b) => 'Lote: ' + a + '/' + b + '…',
            batchDone: (ok, n) => 'Lote concluído: ' + ok + ' de ' + n + ' locais alterados',
            batchSame: n => n + ' sem alteração',
            batchRefused: n => n + ' recusados pelo WME',
            batchQuota: (n, h) => n + ' não tratados: limite por hora atingido, retoma às ' + h,
            quotaFull: h => 'Limite por hora das edições do script atingido: retoma às ' + h + '.',
            hReplB: '<p>Se um local do tipo área estiver selecionado no momento do clique, a janela propõe também <b>Substituir o contorno</b> desse local pelo traçado. É um botão secundário: <kbd>Enter</kbd> continua a criar um local novo.</p><p><kbd>Alt</kbd> + clique com a janela aberta <b>acrescenta</b> uma zona ao contorno (o que a tolerância deixou de fora ou o que estava fora do ecrã); a tolerância ajusta então o último clique. Se um local do tipo área estava selecionado antes do clique, <b>Ampliar</b> junta a zona traçada ao contorno desse local, se se tocarem ou sobrepuserem. O contorno unido é retraçado com a precisão da varinha.</p>',
            hAvoidT: 'Evitar os locais vizinhos',
            hAvoidB: '<p>Com <b>Evitar os locais da mesma categoria</b> (ligado por omissão), a zona traçada para nos locais do tipo área da categoria escolhida: deixa de se sobrepor a uma floresta ou a um lago já cartografado. Se um local cortar a zona em duas, só a parte clicada é mantida. Um clique dentro de um desses locais não traça nada.</p><p>A <b>sobreposição tolerada</b> (de 0 a 300 m, 50 por omissão) deixa a zona avançar um pouco sobre o vizinho, para um limite comum limpo, mas nunca mais do que metade da sua profundidade: um local pequeno nunca é coberto por inteiro. Um local totalmente rodeado pela zona (uma clareira no meio de uma floresta) não pode ser evitado, pois um local do Waze não pode ter buracos: a janela assinala-o.</p><p>Com <kbd>Alt</kbd> + clique, a mesma regra vale para cada zona acrescentada; um clique dentro da zona já traçada não acrescenta nada. O local escolhido antes do clique não é evitado (Substituir, Ampliar).</p>',
            hLotB: '<p>Com vários locais selecionados, Clonar, Esquadriar e Simplificar aplicam-se a cada um (botões «Na seleção» acima, ou os atalhos), com um resumo no fim. Cada local alterado conta no limite por hora (secção abaixo). Rodar e Redimensionar tratam um local de cada vez. Estas ferramentas aplicam-se só a locais.</p>',
            quotaLeft: (r, m) => 'Edições do script nesta hora: restam ' + r + ' de ' + m,
            quotaShort: (r, m) => r + '/' + m,
            quotaTip: 'Hora móvel, todas as ferramentas do script juntas. Uma edição = um local alterado entre duas gravações; reservada ao ser escrita, contada ao gravar.',
            quotaBlocked: 'O contador de edições foi alterado: as edições do script ficam bloqueadas durante uma hora.',
            cloneNoRoom: 'Não há espaço livre ao lado deste local: nada foi clonado (a cópia teria coberto um local).',
            cloneUnknown: 'Não foi possível ler os locais: nada foi clonado (verificação de duplicados impossível).',
            batchNoRoom: n => n + ' não clonados: não há espaço livre ao lado do original',
            hQuotaT: 'Limite por hora',
            hQuotaB: (e, m) => '<p>No máximo <b>' + m + ' edições do script por hora móvel</b> e por editor (doutrina de scripts de França), seja qual for a ferramenta: local criado com a varinha, contorno substituído, Clonar, Esquadriar, Simplificar, Rodar, Redimensionar, num local ou num lote. O que resta é apresentado neste separador, na janela da varinha e na barra de ferramentas. Nenhuma definição o aumenta.</p><p>Uma edição = um local alterado entre duas gravações, como o WME grava: vários passos no mesmo local (setas de Rodar, um clone e as suas categorias) contam uma vez. Uma edição é reservada quando o script a escreve e contada ao gravar; sair da página sem gravar devolve as reservas; uma edição anulada com Ctrl+Z continua reservada até ao fim da sua hora.</p>',
            hSrcT: 'Fontes e dados',
            hSrcB: '<p><b>Imagens</b>: a varinha lê a imagem de satélite apresentada pelo WME (fornecida pela Google através do WME), incluindo as camadas de imagens adicionais que ativou no WME (Pléiades, WorldView…), sobrepostas como no ecrã; os mosaicos delas vêm de earthengine.googleapis.com. No editor, ao seu clique, volta a ler os mosaicos que o WME acabou de apresentar — mesmo endereço, sem cookies —, só à volta do clique e só para o cálculo: nada é guardado depois de a varinha ser desligada, e só o contorno que aceita entra no mapa.</p><p><b>Verificação de versão</b>: ao arrancar, o script lê <code>version-min.json</code> no seu repositório do GitHub (raw.githubusercontent.com) — uma versão retirada ou alterada não arranca; uma vez por dia lê a versão publicada no GreasyFork (update.greasyfork.org). Estes pedidos não enviam nada além do próprio pedido. Para uma versão não publicada, o seu nome de utilizador (lido no WME, ou no Waze Discuss, mesmo site) é comparado apenas no seu computador.</p><p>Nada mais sai do navegador. Créditos: WASD42, o fork de mapomatic e iD (secção seguinte).</p>',
        },
        he: {
            btnOn: 'הפעלת השרביט',
            btnOff: 'עצירת השרביט',
            tipFab: 'שרביט קסמים: לחצו בתוך שטח בתצלום הלוויין',
            stOff: 'השרביט כבוי.',
            stWait: 'לחצו בתוך שטח בתצלום הלוויין.',
            stRead: 'קריאת תצלום הלוויין…',
            stTiles: (a, b) => 'קריאת תצלום הלוויין… ' + a + '/' + b + ' אריחים',
            stColours: 'השוואת הצבעים…',
            sbHint: 'לחצו בתוך אגם, יער או שדה בתצלום הלוויין: השרביט משרטט את קו המתאר ומציע אותו כמקום מסוג שטח. הוא גם מיישר זוויות, מפשט, מסובב, משנה גודל ומשכפל מקומות.',
            secWand: 'שרביט קסמים',
            secShape: 'כלי צורה',
            lblCat: 'הקטגוריה של מקומות חדשים',
            lblAlgo: 'השוואת צבעים',
            algoRgb: 'מרחק צבע (לכל ערוץ)',
            algoLab: 'דמיון לעין (CIE94)',
            lblTol: 'סבולת',
            lblTolHint: 'ערך גבוה יותר כולל יותר גוונים. בדרך כלל 10 עד 30.',
            lblSmooth: 'החלקה',
            lblSmoothHint: 'כל פיקסל ממוצע עם שכניו ברדיוס הזה (פיקסלים). 0: ללא.',
            lblDetail: 'סטייה מותרת של קו המתאר (פיקסלים)',
            lblDetailHint: 'כמה קו המתאר רשאי לסטות מהפיקסלים. ערך גבוה: פחות נקודות, קו מתאר גס יותר.',
            lblAngle: 'סף יישור זוויות (°)',
            lblAngleHint: 'רק זוויות הקרובות בפחות ממספר מעלות זה לזווית ישרה או שטוחה מיושרות.',
            lblSimp: 'פישוט (מ\')',
            lblSimpHint: 'פישוט מסיר נקודות הקרובות לקו המתאר יותר מערך זה.',
            lblHl: 'הדגשת מקומות שכמעט ישרי זווית',
            lblHlHint: 'מקיף בכתום את המקומות מסוג שטח ש„יישור” היה משנה.',
            noImagery: 'הציגו קודם את תצלום הלוויין (שכבות ▸ תצלום לוויין): השרביט קורא אותו.',
            tileErr: 'לא ניתן היה לקרוא את התצלום. הזיזו מעט את המפה ונסו שוב.',
            tooSmall: 'אין כאן מה לשרטט: השטח קטן מדי. העלו את הסבולת או לחצו במקום אחר.',
            tooComplex: 'קו המתאר מפורט מדי כאן כדי ליצור ממנו מקום. הורידו את הסבולת או לחצו קרוב יותר למרכז השטח; אם צריך, הגדילו את הסטייה המותרת של קו המתאר (לשונית Scripts).',
            edge: 'השטח ממשיך מחוץ למסך: התרחקו כדי לתפוס אותו במלואו.',
            analysisErr: 'הניתוח נכשל. לחצו שוב; אם זה חוזר, טענו מחדש את WME.',
            invalidShape: 'קו המתאר היה חוצה את עצמו: דבר לא שונה.',
            noPlace: 'בחרו קודם מקום.',
            tilesMissing: 'חלק מאריחי התצלום לא נקראו: ייתכן שקו המתאר חלקי.',
            edgeCut: 'השטח גדול ממה שהשרביט קורא בבת אחת: התרחקו כדי לתפוס אותו במלואו.',
            dupe: 'מקום מסוג שטח כבר חופף לקו מתאר זה: בדקו אותו לפני יצירת מקום נוסף.',
            dupeUnknown: 'לא ניתן היה לקרוא את המקומות: אין בדיקת כפילויות. הביטו במפה לפני היצירה.',
            closedGaps: 'מעברים צרים מולאו כדי שקו המתאר לא יחצה את עצמו.',
            previewErr: 'לא ניתן היה להוסיף את שכבת התצוגה המקדימה: טענו מחדש את WME.',
            tileFormat: 'אריחי התצלום שינו פורמט: השרביט אינו יכול לקרוא אותם. אנא דווחו בשרשור ב-Discuss.',
            kEsc: 'Esc',
            creditGh: 'GitHub (WASD42)',
            relaxed: n => 'קו המתאר פושט יותר מההגדרה, כדי להישאר מתחת ל-' + n + ' נקודות.',
            groundPx: m => 'פיקסל אחד בתצלום ≈ ' + m,
            pvTitle: 'שרביט קסמים',
            pvStats: (n, aire) => n + ' נקודות · ' + aire,
            btnCreate: 'יצירת המקום',
            btnCancel: 'ביטול',
            created: 'המקום נוצר: בדקו אותו ואז שמרו.',
            createErr: m => 'WME דחה את המקום: \u2068' + m + '\u2069',
            lblShape: 'צורה',
            tipClone: 'שכפול: העתקת המקום לידו, עם אותן קטגוריות',
            tipOrtho: 'יישור: יישור הזוויות שכמעט ישרות',
            tipSimp: 'פישוט: הסרת נקודות שאינן מוסיפות לקו המתאר',
            tipRot: 'סיבוב: גררו על המפה (Shift: צעדים של 15°)',
            tipRes: 'שינוי גודל: גררו על המפה, הצורה נשמרת',
            tipPointOnly: 'מקום נקודתי: רק שכפול אפשרי',
            modeRot: 'גררו על המפה כדי לסובב את המקום. Shift: צעדים של 15°. Esc לסיום.',
            modeRes: 'גררו על המפה כדי לשנות את גודל המקום. Esc לסיום.',
            nothingOrtho: 'אין זווית ליישר בסף הזה.',
            nothingSimp: 'אין מה לפשט בהגדרה הזו.',
            done: 'בוצע. ביטול פעולה (Ctrl+Z) מחזיר אחורה.',
            editErr: m => 'WME דחה את השינוי: \u2068' + m + '\u2069',
            scToggle: 'שרביט קסמים: הפעלה / עצירה',
            scClone: 'שכפול המקום הנבחר',
            scOrtho: 'יישור זוויות המקום הנבחר',
            scSimp: 'פישוט המקום הנבחר',
            scRot: 'סיבוב המקום הנבחר (גרירה על המפה)',
            scRes: 'שינוי גודל המקום הנבחר (גרירה על המפה)',
            keysRot: 'מקשים ← →: צעדים של 1° (Shift: 15°).',
            keysRes: 'מקשים ↑ ↓: צעדים של 1% (Shift: 10%).',
            scCentre: 'שרביט קסמים במרכז המפה',
            sbHelp: 'עזרה',
            hWandT: 'השרביט',
            hWandB: '<p>הפעילו את השרביט (כפתור המפה, הכפתור למעלה או קיצור), ואז לחצו בתוך אגם, יער או שדה: הוא כולל את הפיקסלים השכנים בצבע דומה ומשרטט את קו המתאר שלהם.</p><p>כוונו את ה<b>סבולת</b> בכרטיס שבתחתית המפה (קו המתאר מתעדכן מיד), בחרו קטגוריה, ואז <b>יצירת המקום</b> (<kbd>Enter</kbd>). <kbd>Esc</kbd> מבטל.</p><p>השרביט קורא את תצלום הלוויין ש-WME כבר מציג, בתוך העורך ורק לצורך החישוב: דבר אינו נשמר או נשלח לשום מקום.</p>',
            hAlgoT: 'השוואת צבעים',
            hAlgoB: e => '<p><b>מרחק צבע (לכל ערוץ)</b> משווה אדום, ירוק וכחול בנפרד ושומר את הגדול מבין שלושת ההפרשים. פשוט וצפוי: זו ברירת המחדל, ובבדיקות שלנו הקלה ביותר לכוונון — קו המתאר נשאר יציב בטווח רחב יותר של המחוון.</p><p><b>דמיון לעין (CIE94)</b> ממיר את הצבעים למרחב CIE Lab, הבנוי על האופן שבו העין קולטת אותם, ומודד את הפרש CIE94. הסקאלה שלו מותאמת לזו של מרחק הצבע (× ' + e + ', נמדד): אותה סבולת כוללת בערך אותו שטח בשתי השיטות. כדאי לנסות כשמרחק הצבע אינו מפריד היטב בין השטח לסביבתו.</p><p><b>ההחלקה</b> ממצעת קודם כל פיקסל עם שכניו: היא מעלימה את המרקם של עצים או גידולים. החלפת שיטה או החלקה מחדשת את ניתוח הלחיצה האחרונה.</p>',
            hToolsT: 'כלי צורה',
            hToolsB: '<p>בחרו מקום אחד או כמה: סרגל <b>כלי צורה</b> מרחף על המפה, ממש מעליהם.</p><table class="wmw-help-table"><tr><td>&#x29C9;</td><td>שכפול: עותק לצדו, לעולם לא על המקור או על מקום שטח אחר, עם אותן קטגוריות; ללא שם, עם נעילת ברירת המחדל של מקום חדש.</td></tr><tr><td>&#x221F;</td><td>יישור: זוויות הקרובות ל-90° או 180° נעשות מדויקות (הסף למעלה).</td></tr><tr><td>&#x2248;</td><td>פישוט: מסיר נקודות שאינן מוסיפות דבר (הגדרת הפישוט למעלה).</td></tr><tr><td>&#x27F3;</td><td>סיבוב: גררו על המפה סביב המקום. <kbd>Shift</kbd>: צעדים של 15°.</td></tr><tr><td>&#x2922;</td><td>שינוי גודל: התרחקו מהמרכז או התקרבו אליו.</td></tr></table><p>כל פעולה היא צעד אחד בהיסטוריית הביטול של WME.</p>',
            hKeysT: 'מקלדת',
            hKeysB: '<p>שבעה קיצורים מופיעים <b>ללא מקשים</b> בהגדרות › קיצורי מקלדת, כדי לא לקחת מקש מסקריפט אחר. הקצו שם את אלה שתרצו.</p><p>הקיצור "במרכז המפה" מפעיל את השרביט במרכז התצוגה: המקלדת לבדה מספיקה. במצב סיבוב או שינוי גודל, החיצים מסובבים או משנים את גודל המקום הנבחר צעד אחר צעד.</p>',
            hCredT: 'קרדיטים',
            hCredB: '<p>כתיבה מחדש, עבור ה-SDK של WME, של <a href="' + URL_ORIG_GF + '" target="_blank" rel="noopener"><bdi>WME MagicWand</bdi></a> מאת <b><bdi>WASD42</bdi></b> (<bdi>Vadim Istratov</bdi>, 2014-2018, רישיון MIT), שתוחזק לאחר מכן ב<a href="' + URL_FORK + '" target="_blank" rel="noopener">פיצול של mapomatic</a> על ידי <bdi>justins83, MapOMatic, FXZFun, karlsosha</bdi>.</p><p>היישור הוא פעולת „orthogonalize” של עורך OpenStreetMap ‏<a href="' + URL_ID + '" target="_blank" rel="noopener">iD</a> (רישיון ISC), כפי שעיבד אותה <bdi>WASD42</bdi>. גם השוואת הצבעים (CIE Lab, CIE94) מבוססת על הקוד שלו.</p><p>מה השתנה: קו המתאר משורטט במדויק מהפיקסלים במקום מעטפת קעורה, וסיבוב ושינוי גודל נעשים בגרירה על המפה. העזרה לזוויות ישרות (Shift בגרירת קודקוד) הוסרה: ה-SDK אינו נותן גישה לגרירת הקודקודים של WME.</p>',
            creditLine: 'מבוסס על WME MagicWand מאת WASD42',
            hSafeB: 'כל שינוי עובר דרך היסטוריית הביטול של WME: דבר אינו נשמר בלעדיכם.',
            lnkDiscuss: 'שרשור ב-Discuss',
            majBtn: v => 'גרסה ' + v + ' זמינה',
            majInstall: 'התקנה',
            lblAllCats: 'להציע את כל הקטגוריות',
            lblAllCatsHint: 'כבוי: למקומות חדשים מוצעים רק שטחים טבעיים (יער, אגם, חוף, פארק…).',
            lblBdTopo: 'הצג קווי מתאר של BD TOPO (צרפת)',
            lblBdTopoHint: 'צמחייה, מים ומבנים מתוך BD TOPO של IGN, בקו מנוקד מזום 16. נקודת ייחוס לבדיקת קו המתאר שלך מול התצלום: שום דבר אינו מיובא. מקור מאושר על ידי Waze לתצוגה.',
            bdtopoEtat: 'BD TOPO: מוצגים {n} קווי מתאר',
            bdtopoZoom: 'BD TOPO: התקרב (16 ומעלה) כדי לראות את קווי המתאר',
            bdtopoErr: 'BD TOPO: לא זמין ({e})',
            bdtopoTrop: 'BD TOPO: יותר מדי עצמים כאן, חלקם חסרים',
            lblAvoid: 'להימנע ממקומות באותה קטגוריה',
            lblAvoidHint: 'מופעל: האזור המסומן נעצר במקומות מסוג שטח בקטגוריה שנבחרה. המקום שנבחר לפני הלחיצה אינו נמנע (החלפה, הרחבה).',
            lblMargin: 'חפיפה מותרת עם שכן (מ׳)',
            lblLock: "נעילת המקומות שנוצרים",
            lockDefault: "של WME",
            lblLockHint: "רמת הנעילה למקום שנוצר בשרביט, עד הדרגה שלך. שכפול, החלפה והרחבה אינם משנים אותה.",
            lockErr: m => "המקום נוצר, אך לא ניתן היה להגדיר את נעילתו: " + m,
            lblMarginHint: 'האזור יכול לחרוג עד מרחק זה לתוך מקום שכן, לגבול משותף נקי, אך לעולם לא יותר ממחצית העומק שלו: מקום קטן לעולם אינו מכוסה כולו. 0: ללא חפיפה כלל.',
            inPlace: n => n ? 'הלחיצה נמצאת בתוך „\u2068' + n + '\u2069”, מקום באותה קטגוריה: לא סומן דבר.' : 'הלחיצה נמצאת בתוך מקום באותה קטגוריה: לא סומן דבר.',
            inTraced: 'הלחיצה נמצאת בתוך האזור שכבר סומן: אין מה להוסיף.',
            surrounds: (n, nom) => n > 1 ? 'האזור מקיף ' + n + ' מקומות באותה קטגוריה: הוא מכסה אותם (למקום לא יכול להיות חור).' : nom ? 'האזור מקיף את „\u2068' + nom + '\u2069”, מקום באותה קטגוריה: הוא מכסה אותו (למקום לא יכול להיות חור).' : 'האזור מקיף מקום באותה קטגוריה: הוא מכסה אותו (למקום לא יכול להיות חור).',
            lblCursor: 'הסמן של השרביט',
            curWand: 'שרביט קסמים',
            curPicker: 'טפטפת',
            curTarget: 'כוונת',
            curArrow: 'חץ',
            curCross: 'צלב', lblBar: 'סרגל הכלים על המפה', barAbove: 'מעל המקום', barBelow: 'מתחת למקום', barOff: 'מוסתר',
            btnReplace: n => 'להחליף את קו המתאר של "⁨' + n + '⁩"',
            btnReplaceAnon: 'להחליף את קו המתאר של המקום שנבחר לפני הלחיצה',
            replaced: 'קו המתאר הוחלף: בדקו אותו ואז שמרו.',
            pvParts: n => n + ' אזורים',
            hintAdd: 'Alt + לחיצה: הוספת אזור',
            dragTip: 'גררו כדי להזיז · לחיצה כפולה מחזירה למקום',
            apart: 'הלחיצה הזו לא נוגעת באזור שכבר סומן: היא לא נוספה.',
            btnExtend: n => 'להרחיב את "⁨' + n + '⁩" עם האזור הזה',
            btnExtendAnon: 'להרחיב את המקום שנבחר לפני הלחיצה עם האזור הזה',
            extended: 'המקום הורחב: בדקו אותו ואז שמרו.',
            extendApart: 'האזור שסומן לא נוגע במקום הזה: שום דבר לא שונה.',
            lblOnSel: 'על הבחירה',
            lblOnSelHint: 'לשכפל, ליישר או לפשט בבת אחת את כל המקומות הנבחרים.',
            oneOnly: 'סיבוב ושינוי גודל פועלים על מקום אחד בכל פעם.',
            batchProgress: (a, b) => 'אצווה: ' + a + '/' + b + '…',
            batchDone: (ok, n) => 'האצווה הסתיימה: ' + ok + ' מתוך ' + n + ' מקומות שונו',
            batchSame: n => n + ' ללא שינוי',
            batchRefused: n => n + ' נדחו על ידי WME',
            batchQuota: (n, h) => n + ' לא טופלו: הגעתם למגבלה השעתית, ממשיכים ב-' + h,
            quotaFull: h => 'הגעתם למגבלה השעתית של עריכות הסקריפט: ממשיכים ב-' + h + '.',
            hReplB: '<p>אם בזמן הלחיצה נבחר מקום אחד מסוג שטח, החלון מציע גם <b>להחליף את קו המתאר</b> של המקום בקו שסומן. זה כפתור משני: <kbd>Enter</kbd> עדיין יוצר מקום חדש.</p><p><kbd>Alt</kbd> + לחיצה כשהחלון פתוח <b>מוסיפה</b> אזור לקו המתאר (מה שהסבילות השאירה בחוץ, או מה שהיה מחוץ למסך); הסבילות מכוונת אז את הלחיצה האחרונה. אם לפני הלחיצה נבחר מקום מסוג שטח, <b>הרחבה</b> מאחדת את האזור שסומן עם קו המתאר של המקום, אם הם נוגעים או חופפים. קו המתאר המאוחד משורטט מחדש בדיוק של שרביט הקסם.</p>',
            hAvoidT: 'הימנעות ממקומות שכנים',
            hAvoidB: '<p>עם <b>להימנע ממקומות באותה קטגוריה</b> (מופעל כברירת מחדל), האזור המסומן נעצר במקומות מסוג שטח בקטגוריה שנבחרה: הוא כבר לא מונח מעל יער או אגם שכבר מופו. אם מקום חוצה את האזור לשניים, נשמר רק החלק שבו לחצתם. לחיצה בתוך מקום כזה לא מסמנת דבר.</p><p><b>החפיפה המותרת</b> (0 עד 300 מ׳, 50 כברירת מחדל) מאפשרת לאזור לחרוג מעט לתוך השכן, לגבול משותף נקי, אך לעולם לא יותר ממחצית העומק שלו: מקום קטן לעולם אינו מכוסה כולו. מקום שהאזור מקיף לגמרי (קרחת יער באמצע יער) אי אפשר לעקוף, כי למקום ב־Waze לא יכול להיות חור: החלון מציין זאת.</p><p>עם <kbd>Alt</kbd> + לחיצה, אותו כלל חל על כל אזור שנוסף; לחיצה בתוך האזור שכבר סומן לא מוסיפה דבר. המקום שנבחר לפני הלחיצה אינו נמנע (החלפה, הרחבה).</p>',
            hLotB: '<p>כשנבחרו כמה מקומות, שכפול, יישור ופישוט חלים על כל אחד מהם (הכפתורים "על הבחירה" למעלה, או קיצורי המקלדת), עם סיכום בסוף. כל מקום ששונה נספר במגבלה השעתית (הסעיף למטה). סיבוב ושינוי גודל פועלים על מקום אחד בכל פעם. כלים אלה חלים על מקומות בלבד.</p>',
            quotaLeft: (r, m) => 'עריכות סקריפט בשעה זו: נותרו ' + r + ' מתוך ' + m,
            quotaShort: (r, m) => r + '/' + m,
            quotaTip: 'שעה נעה, כל כלי הסקריפט יחד. עריכה = מקום ששונה בין שתי שמירות; מוזמנת בעת הכתיבה, נספרת בעת השמירה.',
            quotaBlocked: 'מונה העריכות שונה: עריכות הסקריפט חסומות למשך שעה.',
            cloneNoRoom: 'אין מקום פנוי לצד מקום זה: לא שוכפל דבר (העותק היה מכסה מקום).',
            cloneUnknown: 'לא ניתן היה לקרוא את המקומות: לא שוכפל דבר (בדיקת כפילויות אינה אפשרית).',
            batchNoRoom: n => n + ' לא שוכפלו: אין מקום פנוי לצד המקור',
            hQuotaT: 'מגבלה שעתית',
            hQuotaB: (e, m) => '<p>לכל היותר <b>' + m + ' עריכות סקריפט לשעה נעה</b> ולעורך (תורת הסקריפטים של צרפת), בכל כלי: מקום שנוצר בשרביט, קו מתאר שהוחלף, שכפול, יישור, פישוט, סיבוב, שינוי גודל, על מקום אחד או על אצווה. היתרה מוצגת בלשונית זו, בחלון השרביט ובסרגל הכלים. שום הגדרה אינה מעלה אותה.</p><p>עריכה = מקום ששונה בין שתי שמירות, כפי ש-WME שומר: כמה צעדים על אותו מקום (מקשי החצים בסיבוב, שכפול והקטגוריות שלו) נספרים פעם אחת. עריכה מוזמנת כשהסקריפט כותב אותה ונספרת בשמירה; יציאה מהדף בלי לשמור מחזירה את ההזמנות; עריכה שבוטלה ב-Ctrl+Z נשארת מוזמנת עד סוף השעה שלה.</p>',
            hSrcT: 'מקורות ונתונים',
            hSrcB: '<p><b>צילומים</b>: השרביט קורא את תצלום הלוויין ש-WME מציג (מסופק על ידי <bdi>Google</bdi> דרך WME), כולל שכבות הצילום הנוספות שהפעלתם ב-WME (<bdi>Pléiades</bdi>, <bdi>WorldView</bdi>…), זו על גבי זו כמו על המסך; האריחים שלהן מגיעים מ-<bdi>earthengine.googleapis.com</bdi>. בתוך העורך, בלחיצה שלכם, הוא קורא שוב את האריחים ש-WME הציג זה עתה — אותה כתובת, ללא עוגיות —, רק סביב הלחיצה ורק לצורך החישוב: דבר אינו נשמר לאחר כיבוי השרביט, ורק קו המתאר שאתם מאשרים נכנס למפה.</p><p><b>בדיקת גרסה</b>: בהפעלה, הסקריפט קורא את <code>version-min.json</code> ממאגר ה-<bdi>GitHub</bdi> שלו (<bdi>raw.githubusercontent.com</bdi>) — גרסה שנמשכה או שונתה אינה מופעלת; פעם ביום הוא קורא את הגרסה שפורסמה ב-<bdi>GreasyFork</bdi> (<bdi>update.greasyfork.org</bdi>). בקשות אלה אינן שולחות דבר מלבד הבקשה עצמה. בגרסה שלא פורסמה, שם המשתמש שלכם (נקרא ב-WME, או ב-<bdi>Waze Discuss</bdi>, באותו אתר) מושווה במחשב שלכם בלבד.</p><p>דבר אחר אינו יוצא מהדפדפן. קרדיטים: <bdi>WASD42</bdi>, הפיצול של <bdi>mapomatic</bdi> ו-<bdi>iD</bdi> (הסעיף הבא).</p>',
        },
    };

    // Seul « br » distingue le portugais brésilien ; d'anciens navigateurs rendent encore « iw »
    // pour l'hébreu. La locale se lit dans I18n de WME, puis sur la page : jamais par W, retiré
    // le 24/11/2026.
    const detectLang = () => {
        try {
            const l = String((pw.I18n && pw.I18n.locale) || document.documentElement.lang || navigator.language || 'en').toLowerCase();
            if (l.startsWith('pt')) return l.includes('br') ? 'pt-BR' : 'pt-PT';
            if (l.startsWith('he') || l.startsWith('iw')) return 'he';
            return ['fr', 'de', 'es', 'it', 'en'].find(c => l.startsWith(c)) || 'en';
        } catch (e) { return 'en'; }
    };
    let _lang = 'en';
    const t = (key, ...args) => {
        const v = (DICO[_lang] && DICO[_lang][key]) || DICO.en[key];
        if (typeof v === 'function') return v(...args);
        return v !== undefined ? v : key;
    };

    // Les choix du verrou des lieux créés (0.08.01) : celui de WME, puis L1 à L6 ; au-dessus du rang de l'éditeur,
    // grisés (le rang est relu au démarrage, voir rangEditeur).
    let rangEditeur = 5;
    function optionsVerrou() {
        let h = '<option value="0"' + (opts.verrou === 0 ? ' selected' : '') + '>' + escHtml(t('lockDefault')) + '</option>';
        for (let n = 1; n <= 6; n++) h += '<option value="' + n + '"' + (opts.verrou === n ? ' selected' : '') + (n - 1 > rangEditeur ? ' disabled' : '') + '>L' + n + '</option>';
        return h;
    }
    // Le rang n'est connu de WME qu'un peu après le démarrage (mesuré sur un autre script : 1 à 2 s) : relu jusqu'à
    // une minute, puis les niveaux au-dessus sont grisés dans l'onglet.
    async function relireRang() {
        for (let k = 0; k < 120; k++) {
            let u = null;
            try { u = await sdk.State.getUserInfo(); } catch (e) { }
            if (u && u.userName && Number.isFinite(u.rank)) {
                rangEditeur = u.rank;
                const sel = document.getElementById('wmw-verrou');
                if (sel) for (const o of sel.options) o.disabled = Number(o.value) - 1 > rangEditeur;
                return;
            }
            await new Promise(r => setTimeout(r, 500));
        }
    }
    function lireOpts() {
        let o = {};
        try { o = JSON.parse(localStorage.getItem(OPTS_KEY) || '{}') || {}; } catch (e) { o = {}; }
        const r = Object.assign({}, OPTS_DEFAUT, o);
        // Un réglage abîmé ne doit pas empêcher la baguette de tourner : on retombe sur le défaut.
        for (const [k, [a, b]] of Object.entries(BORNES)) { const v = Number(r[k]); r[k] = Number.isFinite(v) ? Math.min(b, Math.max(a, v)) : OPTS_DEFAUT[k]; }
        if (r.algo !== 'rgb' && r.algo !== 'lab') r.algo = OPTS_DEFAUT.algo;
        r.surligner = !!r.surligner;
        r.toutesCategories = !!r.toutesCategories;
        r.eviter = !!r.eviter;
        r.guideBdTopo = !!r.guideBdTopo;
        // 0.08.01 — Verrou des lieux créés : 0 = celui de WME, 1 à 6 = L1 à L6.
        { const v = Math.round(Number(r.verrou)); r.verrou = Number.isFinite(v) && v >= 0 && v <= 6 ? v : 0; }
        if (!(r.curseur in CURSEURS)) r.curseur = OPTS_DEFAUT.curseur;
        if (!POSITIONS_BARRE.includes(r.barre)) r.barre = OPTS_DEFAUT.barre;
        r.categorie = String(r.categorie || OPTS_DEFAUT.categorie);
        return r;
    }
    function ecrireOpts() {
        try { localStorage.setItem(OPTS_KEY, JSON.stringify(opts)); } catch (e) { }
    }

    // =====================================================================
    //  Projections — tuiles « slippy map » et Web Mercator
    // =====================================================================

    // Pixel global au zoom z pour des tuiles de T pixels, et retour. Les tuiles Google de WME
    // suivent le découpage XYZ standard : la tuile (x, y) couvre les pixels [x·T, (x+1)·T[.
    function lonVersPx(lon, z, T) { return (lon + 180) / 360 * T * Math.pow(2, z); }
    function latVersPx(lat, z, T) {
        const s = Math.sin(lat * Math.PI / 180);
        return (0.5 - Math.log((1 + s) / (1 - s)) / (4 * Math.PI)) * T * Math.pow(2, z);
    }
    function pxVersLon(px, z, T) { return px / (T * Math.pow(2, z)) * 360 - 180; }
    function pxVersLat(py, z, T) {
        const n = Math.PI * (1 - 2 * py / (T * Math.pow(2, z)));
        return Math.atan(Math.sinh(n)) * 180 / Math.PI;
    }

    // Web Mercator en mètres : conforme, donc une rotation ou une homothétie y garde les angles
    // tels qu'on les voit sur la carte.
    function versMerc(lon, lat) {
        const l = Math.max(-85.05112878, Math.min(85.05112878, lat));
        return [R_TERRE * lon * Math.PI / 180, R_TERRE * Math.log(Math.tan(Math.PI / 4 + l * Math.PI / 360))];
    }
    function deMerc(x, y) {
        return [x / R_TERRE * 180 / Math.PI, (2 * Math.atan(Math.exp(y / R_TERRE)) - Math.PI / 2) * 180 / Math.PI];
    }

    // =====================================================================
    //  Couleurs — sRGB → CIE Lab et distance CIE94, comme l'original
    // =====================================================================

    // Linéarisation sRGB des 256 valeurs entières, calculée une fois : Math.pow(…, 2.4) trois fois
    // par pixel faisait l'essentiel du coût de la comparaison « pour l'œil » (660 ms mesurées).
    const LIN_SRGB = (() => {
        const t = new Float64Array(256);
        for (let v = 0; v < 256; v++) { const c = v / 255; t[v] = 100 * (c > 0.04045 ? Math.pow((c + 0.055) / 1.055, 2.4) : c / 12.92); }
        return t;
    })();

    function linSrgb(c) {
        if (Number.isInteger(c) && c >= 0 && c < 256) return LIN_SRGB[c];
        c /= 255;
        return 100 * (c > 0.04045 ? Math.pow((c + 0.055) / 1.055, 2.4) : c / 12.92);
    }
    function fLab(v) { return v > 0.008856 ? Math.cbrt(v) : 7.787 * v + 16 / 116; }
    // Écrit le Lab de (r, g, b) dans `o` : appelée pour chaque pixel en « pour l'œil », elle n'alloue
    // rien (un tableau et deux fermetures par pixel coûtaient ~38 % de l'analyse, audit du 31/10).
    function labDans(r, g, b, o) {
        const R = linSrgb(r), G = linSrgb(g), B = linSrgb(b);
        const X = fLab((R * 0.4124 + G * 0.3576 + B * 0.1805) / 95.047);
        const Y = fLab((R * 0.2126 + G * 0.7152 + B * 0.0722) / 100);
        const Z = fLab((R * 0.0193 + G * 0.1192 + B * 0.9505) / 108.883);
        o[0] = 116 * Y - 16; o[1] = 500 * (X - Y); o[2] = 200 * (Y - Z);
        return o;
    }
    function rgbVersLab(r, g, b) { return labDans(r, g, b, [0, 0, 0]); }
    function cie94(p, q) {
        const c1 = Math.hypot(p[1], p[2]), c2 = Math.hypot(q[1], q[2]);
        const dl = p[0] - q[0], dc = c1 - c2, da = p[1] - q[1], db = p[2] - q[2];
        const dh2 = Math.max(0, da * da + db * db - dc * dc);
        const sc = 1 + 0.045 * c1, sh = 1 + 0.015 * c1;
        return Math.sqrt(dl * dl + (dc / sc) * (dc / sc) + dh2 / (sh * sh));
    }

    // =====================================================================
    //  Le masque — remplissage, pincements, trous
    // =====================================================================

    // Inondation par niveaux (4-connexité) depuis (sx, sy) : pour chaque pixel, la PLUS PETITE
    // tolérance qui le fait entrer dans la tache — le maximum des écarts le long du meilleur chemin
    // depuis le clic. La tache d'une tolérance T est alors exactement { niveau ≤ T } : le curseur
    // relit ce tableau au lieu de tout recalculer (c'était lui qui figeait la page à chaque cran).
    // Files par niveau entier (0…max) : chaque pixel n'entre qu'une fois, au premier niveau qui
    // l'atteint, et c'est le bon puisque les niveaux sont vidés dans l'ordre.
    // `ecart(i)` rend l'écart du pixel i à la référence ; 255 = hors d'atteinte. `pause`, si fourni,
    // rend la main à la page toutes les ~40 ms ; il reçoit la part de l'image déjà parcourue (0…1),
    // une borne BASSE de l'avancement : l'inondation s'arrête souvent bien avant d'avoir tout vu.
    // Le tableau rendu porte `boites` : pour chaque niveau l, le rectangle [x0, y0, x1, y1] des pixels
    // de niveau ≤ l. Le seuil d'un cran de curseur ne parcourt plus que ce rectangle, et non W × H.
    // Les pixels jugés trop loin restent marqués 254 : toujours au-dessus de NIV_MAX, ils ne passent
    // aucun seuil (la passe qui les remettait à 255 parcourait l'image pour rien).
    async function niveauxDepuis(W, H, sx, sy, ecart, max, pause) {
        const niv = new Uint8Array(W * H).fill(255);
        const boites = new Int32Array((max + 1) * 4);
        for (let l = 0; l <= max; l++) { boites[l * 4] = W; boites[l * 4 + 1] = H; boites[l * 4 + 2] = -1; boites[l * 4 + 3] = -1; }
        const files = [];
        for (let l = 0; l <= max; l++) files.push([]);
        const i0 = sy * W + sx;
        niv[i0] = 0;
        files[0].push(i0);
        let compte = 0, t0 = Date.now();
        const voir = (q, l) => {
            if (niv[q] !== 255) return;
            const lq = Math.max(l, Math.ceil(ecart(q)));
            if (lq <= max) { niv[q] = lq; files[lq].push(q); }
            else niv[q] = 254;            // trop loin, quel que soit le chemin
        };
        for (let l = 0; l <= max; l++) {
            const f = files[l], b = l * 4;
            while (f.length) {
                const i = f.pop(), x = i % W, y = (i - x) / W;
                if (x < boites[b]) boites[b] = x;
                if (y < boites[b + 1]) boites[b + 1] = y;
                if (x > boites[b + 2]) boites[b + 2] = x;
                if (y > boites[b + 3]) boites[b + 3] = y;
                if (x > 0) voir(i - 1, l);
                if (x < W - 1) voir(i + 1, l);
                if (i >= W) voir(i - W, l);
                if (i < (H - 1) * W) voir(i + W, l);
                if (pause && (++compte & 0x3fff) === 0 && Date.now() - t0 > 40) { await pause(compte / (W * H)); t0 = Date.now(); }
            }
        }
        for (let l = 1; l <= max; l++) {
            const b = l * 4, a = b - 4;
            boites[b] = Math.min(boites[b], boites[a]); boites[b + 1] = Math.min(boites[b + 1], boites[a + 1]);
            boites[b + 2] = Math.max(boites[b + 2], boites[a + 2]); boites[b + 3] = Math.max(boites[b + 3], boites[a + 3]);
        }
        niv.boites = boites;
        return niv;
    }

    // Le masque d'une tolérance, recadré sur la tache (plus une marge d'un pixel vide) : les
    // traitements suivants ne parcourent plus que ce rectangle.
    // `cotes` dit quels bords de l'image la tache touche (o, e, n, s).
    function masqueAuSeuil(niv, W, H, T) {
        let x0 = W, y0 = H, x1 = -1, y1 = -1, n = 0;
        let xa = 0, ya = 0, xb = W - 1, yb = H - 1;
        const B = niv.boites;
        if (B) {
            const l = Math.min(Math.floor(T), B.length / 4 - 1) * 4;
            if (l >= 0) { xa = B[l]; ya = B[l + 1]; xb = B[l + 2]; yb = B[l + 3]; }
        }
        for (let y = ya; y <= yb; y++) {
            const base = y * W;
            for (let x = xa; x <= xb; x++) {
                if (niv[base + x] > T) continue;
                n++;
                if (x < x0) x0 = x; if (x > x1) x1 = x;
                if (y < y0) y0 = y; if (y > y1) y1 = y;
            }
        }
        if (!n) return { masque: new Uint8Array(0), w: 0, h: 0, ox: 0, oy: 0, n: 0, bord: false, cotes: {} };
        const cotes = { o: x0 === 0, e: x1 === W - 1, n: y0 === 0, s: y1 === H - 1 };
        const bord = cotes.o || cotes.e || cotes.n || cotes.s;
        const ox = x0 - 1, oy = y0 - 1, w = x1 - x0 + 3, h = y1 - y0 + 3;
        const masque = new Uint8Array(w * h);
        for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) if (niv[y * W + x] <= T) masque[(y - oy) * w + (x - ox)] = 1;
        return { masque, w, h, ox, oy, n, bord, cotes };
    }

    // Deux pixels pleins qui ne se touchent que par un coin font passer le contour deux fois par
    // le même sommet : WME refuserait ce polygone qui se touche lui-même. On comble le coin.
    function boucherPincements(m, W, H) {
        let change = true, tours = 0;
        while (change && tours++ < 8) {
            change = false;
            for (let y = 0; y < H - 1; y++) {
                for (let x = 0; x < W - 1; x++) {
                    const a = m[y * W + x], b = m[y * W + x + 1], c = m[(y + 1) * W + x], d = m[(y + 1) * W + x + 1];
                    if (a && d && !b && !c) { m[y * W + x + 1] = 1; change = true; }
                    else if (b && c && !a && !d) { m[y * W + x] = 1; change = true; }
                }
            }
        }
    }

    // =====================================================================
    //  Le contour — suivi de frontière le long des arêtes de pixels
    // =====================================================================

    // Seul le bord EXTÉRIEUR est suivi : un bateau sur un lac, une clairière dans un bois (les trous de
    // la tache) n'entrent pas dans le contour, sans qu'il faille les combler d'abord (la passe qui le
    // faisait, à chaque cran du curseur, ne changeait pas un sommet — banc).
    // Sommets aux COINS des pixels, l'intérieur toujours à droite (sens horaire à l'écran, donc
    // anti-horaire une fois en latitude : le sens des anneaux extérieurs de GeoJSON).
    // Départ : coin haut-gauche du premier pixel plein en lecture ligne à ligne. On y arrive en
    // montant (bord gauche) et on en repart vers l'est : c'est donc un sommet.
    // À chaque coin, les deux pixels devant décident : celui de droite vide ⇒ on tourne à droite
    // (un plein seulement en diagonale n'est pas relié, 4-connexité) ; les deux pleins ⇒ à gauche ;
    // sinon tout droit. Seuls les changements de cap donnent un sommet. Sans pincement (voir
    // boucherPincements), le contour ne repasse jamais par un même coin : revenir au départ, c'est
    // avoir fait le tour.
    function tracerContour(m, W, H) {
        let debut = -1;
        for (let i = 0; i < W * H; i++) if (m[i]) { debut = i; break; }
        if (debut < 0) return [];
        const plein = (x, y) => x >= 0 && y >= 0 && x < W && y < H && m[y * W + x] === 1;
        const DX = [1, 0, -1, 0], DY = [0, 1, 0, -1];
        // Pixel du quadrant (qx, qy) ∈ {-1, +1}² autour du coin (x, y).
        const quadrant = (x, y, qx, qy) => plein(x + (qx > 0 ? 0 : -1), y + (qy > 0 ? 0 : -1));
        const sx = debut % W, sy = (debut - sx) / W;
        const pts = [[sx, sy]];
        let d = 0, x = sx + 1, y = sy;
        const limite = 4 * (W + 1) * (H + 1);
        for (let pas = 0; pas < limite && !(x === sx && y === sy); pas++) {
            const fx = DX[d], fy = DY[d], rx = DX[(d + 1) % 4], ry = DY[(d + 1) % 4];
            const devantDroite = quadrant(x, y, fx + rx, fy + ry);
            const devantGauche = quadrant(x, y, fx - rx, fy - ry);
            const nd = !devantDroite ? (d + 1) % 4 : (devantGauche ? (d + 3) % 4 : d);
            if (nd !== d) pts.push([x, y]);
            d = nd;
            x += DX[d]; y += DY[d];
        }
        return retirerAlignes(pts);
    }

    function retirerAlignes(pts) {
        if (pts.length < 4) return pts;
        const out = [];
        const n = pts.length;
        for (let i = 0; i < n; i++) {
            const a = pts[(i - 1 + n) % n], b = pts[i], c = pts[(i + 1) % n];
            const cr = (b[0] - a[0]) * (c[1] - b[1]) - (b[1] - a[1]) * (c[0] - b[0]);
            if (cr !== 0) out.push(b);
        }
        return out;
    }

    // =====================================================================
    //  Simplification — Douglas-Peucker sur un anneau ouvert
    // =====================================================================

    // Distance AU CARRÉ d'un point à un segment : Douglas-Peucker compare au carré de la tolérance,
    // sans racine (Math.hypot, appelé des millions de fois par cran de curseur sur un grand contour).
    function distSegment2(p, a, b) {
        const dx = b[0] - a[0], dy = b[1] - a[1];
        const l2 = dx * dx + dy * dy;
        let u = l2 === 0 ? 0 : ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / l2;
        u = Math.max(0, Math.min(1, u));
        const ex = p[0] - (a[0] + u * dx), ey = p[1] - (a[1] + u * dy);
        return ex * ex + ey * ey;
    }

    // Rend les INDICES gardés d'une polyligne ouverte (les deux bouts toujours gardés).
    function dpIndices(pts, tol) {
        const n = pts.length;
        if (n < 3) return pts.map((p, i) => i);
        const garde = new Uint8Array(n);
        garde[0] = 1; garde[n - 1] = 1;
        const pile = [[0, n - 1]], tol2 = tol * tol;
        while (pile.length) {
            const [a, b] = pile.pop();
            let dmax = -1, imax = -1;
            for (let i = a + 1; i < b; i++) {
                const dd = distSegment2(pts[i], pts[a], pts[b]);
                if (dd > dmax) { dmax = dd; imax = i; }
            }
            if (imax >= 0 && dmax > tol2) { garde[imax] = 1; pile.push([a, imax], [imax, b]); }
        }
        const out = [];
        for (let i = 0; i < n; i++) if (garde[i]) out.push(i);
        return out;
    }

    // Anneau ouvert (sans point de fermeture) : on le coupe au point le plus éloigné du premier,
    // et chaque moitié est simplifiée seule — un anneau n'a pas de « bouts » naturels.
    function simplifierAnneau(pts, tol) {
        const n = pts.length;
        if (n <= 4 || tol <= 0) return pts.slice();
        let loin = 0, dmax = -1;
        for (let i = 1; i < n; i++) {
            const ex = pts[i][0] - pts[0][0], ey = pts[i][1] - pts[0][1], dd = ex * ex + ey * ey;
            if (dd > dmax) { dmax = dd; loin = i; }
        }
        const a = pts.slice(0, loin + 1), b = pts.slice(loin).concat([pts[0]]);
        const ia = dpIndices(a, tol), ib = dpIndices(b, tol);
        const out = ia.map(i => a[i]);
        for (let k = 1; k < ib.length - 1; k++) out.push(b[ib[k]]);
        return out;
    }

    // =====================================================================
    //  Validité — un anneau que WME acceptera
    // =====================================================================

    function segmentsSeCoupent(a, b, c, d) {
        const o = (p, q, r) => Math.sign((q[0] - p[0]) * (r[1] - p[1]) - (q[1] - p[1]) * (r[0] - p[0]));
        const o1 = o(a, b, c), o2 = o(a, b, d), o3 = o(c, d, a), o4 = o(c, d, b);
        if (o1 !== o2 && o3 !== o4) return true;
        const sur = (p, q, r) => Math.min(p[0], q[0]) <= r[0] && r[0] <= Math.max(p[0], q[0]) && Math.min(p[1], q[1]) <= r[1] && r[1] <= Math.max(p[1], q[1]);
        if (o1 === 0 && sur(a, b, c)) return true;
        if (o2 === 0 && sur(a, b, d)) return true;
        if (o3 === 0 && sur(c, d, a)) return true;
        if (o4 === 0 && sur(c, d, b)) return true;
        return false;
    }

    // Anneau ouvert : au moins trois sommets distincts, une aire non nulle, et aucune arête qui en
    // croise ou en touche une autre non voisine.
    // Les arêtes sont rangées dans une grille d'environ √n × √n cases, et ne sont comparées qu'à
    // celles des mêmes cases : comparer toutes les paires coûtait n²/2, soit des millions de tests
    // sur un contour de forêt déchiqueté.
    function anneauValide(pts) {
        const n = pts.length;
        if (n < 3) return false;
        if (Math.abs(aireBrute(pts)) < 1e-12) return false;
        let minx = Infinity, miny = Infinity, maxx = -Infinity, maxy = -Infinity;
        for (let i = 0; i < n; i++) {
            const a = pts[i], b = pts[(i + 1) % n];
            if (a[0] === b[0] && a[1] === b[1]) return false;
            if (a[0] < minx) minx = a[0]; if (a[0] > maxx) maxx = a[0];
            if (a[1] < miny) miny = a[1]; if (a[1] > maxy) maxy = a[1];
        }
        const k = Math.max(1, Math.ceil(Math.sqrt(n)));
        const lx = (maxx - minx) / k || 1, ly = (maxy - miny) / k || 1;
        const cx = v => Math.min(k - 1, Math.floor((v - minx) / lx)), cy = v => Math.min(k - 1, Math.floor((v - miny) / ly));
        // Cases couvertes par l'emprise de chaque arête.
        const gx0 = new Int32Array(n), gx1 = new Int32Array(n), gy0 = new Int32Array(n), gy1 = new Int32Array(n);
        const cases = new Map();
        for (let i = 0; i < n; i++) {
            const a = pts[i], b = pts[(i + 1) % n];
            gx0[i] = cx(Math.min(a[0], b[0])); gx1[i] = cx(Math.max(a[0], b[0]));
            gy0[i] = cy(Math.min(a[1], b[1])); gy1[i] = cy(Math.max(a[1], b[1]));
            for (let gx = gx0[i]; gx <= gx1[i]; gx++) {
                for (let gy = gy0[i]; gy <= gy1[i]; gy++) {
                    const c = gx * k + gy;
                    const l = cases.get(c);
                    if (l) l.push(i); else cases.set(c, [i]);
                }
            }
        }
        for (const [c, l] of cases) {
            const gx = Math.floor(c / k), gy = c - gx * k;
            for (let u = 0; u < l.length; u++) {
                for (let v = u + 1; v < l.length; v++) {
                    const i = Math.min(l[u], l[v]), j = Math.max(l[u], l[v]);
                    if (j - i < 2 || (i === 0 && j === n - 1)) continue;
                    // Deux arêtes qui partagent plusieurs cases ne sont comparées que dans la première :
                    // sans cela, une arête longue répétait la même comparaison dans chaque case.
                    if (gx !== Math.max(gx0[i], gx0[j]) || gy !== Math.max(gy0[i], gy0[j])) continue;
                    if (gx0[i] > gx1[j] || gx0[j] > gx1[i] || gy0[i] > gy1[j] || gy0[j] > gy1[i]) continue;
                    if (segmentsSeCoupent(pts[i], pts[(i + 1) % n], pts[j], pts[(j + 1) % n])) return false;
                }
            }
        }
        return true;
    }

    // Le point (x, y) est-il dans l'anneau (fermé ou non) ? Rayon horizontal, règle pair-impair.
    function dansAnneau(x, y, anneau) {
        let dedans = false;
        for (let i = 0, j = anneau.length - 1; i < anneau.length; j = i++) {
            const [xi, yi] = anneau[i], [xj, yj] = anneau[j];
            if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) dedans = !dedans;
        }
        return dedans;
    }

    function aireBrute(pts) {
        let s = 0;
        for (let i = 0, n = pts.length; i < n; i++) {
            const a = pts[i], b = pts[(i + 1) % n];
            s += a[0] * b[1] - b[0] * a[1];
        }
        return s / 2;
    }

    // Aire en m² d'un anneau [lon, lat] : approximation locale, largement suffisante à l'échelle
    // d'un lieu.
    function aireM2(anneau) {
        if (anneau.length < 3) return 0;
        const lat0 = anneau.reduce((s, p) => s + p[1], 0) / anneau.length;
        const kx = 111320 * Math.cos(lat0 * Math.PI / 180), ky = 110540;
        return Math.abs(aireBrute(anneau.map(p => [p[0] * kx, p[1] * ky])));
    }

    // =====================================================================
    //  D'équerre — l'action « orthogonalize » d'iD, telle qu'adaptée par WASD42
    // =====================================================================

    const latVersLatp = lat => 180 / Math.PI * Math.log(Math.tan(Math.PI / 4 + lat * (Math.PI / 180) / 2));
    const latpVersLat = a => 180 / Math.PI * (2 * Math.atan(Math.exp(a * Math.PI / 180)) - Math.PI / 2);

    // `anneau` : sommets [lon, lat] SANS le point de fermeture. Rend { anneau, retires, bouge }
    // (anneau ouvert, sommets alignés retirés), ou null s'il n'y a rien à faire.
    // Les angles à moins de `seuil` degrés d'un angle droit ou plat sont attirés vers lui ; les
    // autres ne bougent pas (filtre du produit scalaire). Calcul en « latitude Mercator », où
    // les angles sont ceux de la carte.
    function orthogonaliser(anneau, seuil) {
        const n = anneau.length;
        if (n < 3) return null;
        const bas = Math.cos((90 - seuil) * Math.PI / 180), haut = Math.cos(seuil * Math.PI / 180);
        const eps = 1e-4;
        const filtrer = dp => (bas > Math.abs(dp) || Math.abs(dp) > haut) ? dp : 0;
        const sous = (a, b) => ({ x: a.x - b.x, y: a.y - b.y });
        const plus = (a, b) => ({ x: a.x + b.x, y: a.y + b.y });
        const norm = (p, k) => { const l = Math.hypot(p.x, p.y); return l === 0 ? { x: 0, y: 0 } : { x: p.x / l * k, y: p.y / l * k }; };
        const scal = (i, pts) => {
            const a = pts[(i - 1 + pts.length) % pts.length], b = pts[i], c = pts[(i + 1) % pts.length];
            const p = norm(sous(a, b), 1), q = norm(sous(c, b), 1);
            return p.x * q.x + p.y * q.y;
        };
        const equerrage = pts => pts.reduce((s, v, i, arr) => {
            const dp = filtrer(scal(i, arr));
            return s + 2 * Math.min(Math.abs(dp - 1), Math.min(Math.abs(dp), Math.abs(dp + 1)));
        }, 0);
        const coin = { i: 0, dp: 1 };
        const mouvement = (b, i, arr) => {
            const a = arr[(i - 1 + arr.length) % arr.length], c = arr[(i + 1) % arr.length];
            let p = sous(a, b), q = sous(c, b);
            const echelle = 2 * Math.min(Math.hypot(p.x, p.y), Math.hypot(q.x, q.y));
            p = norm(p, 1); q = norm(q, 1);
            let dp = filtrer(p.x * q.x + p.y * q.y);
            // Les segments presque alignés (angle plus proche de 180° que de 90°) sont tirés vers
            // l'alignement : c'est le « nasty hack » d'iD, gardé tel quel.
            if (arr.length > 3) { if (dp < -0.707106781186547) dp += 1.0; }
            else if (dp && Math.abs(dp) < coin.dp) { coin.i = i; coin.dp = Math.abs(dp); }
            return norm(plus(p, q), 0.1 * dp * echelle);
        };
        let pts = anneau.map(([lon, lat]) => ({ x: lon, y: latVersLatp(lat) }));
        const origine = pts.map(p => ({ x: p.x, y: p.y }));
        if (n === 3) {
            for (let k = 0; k < 1000; k++) {
                const mv = pts.map(mouvement);
                pts[coin.i] = plus(pts[coin.i], mv[coin.i]);
                if (coin.dp < eps) break;
            }
        } else {
            let meilleur = null, score = Infinity;
            for (let k = 0; k < 1000; k++) {
                const mv = pts.map(mouvement);
                pts = pts.map((p, i) => plus(p, mv[i]));
                const s = equerrage(pts);
                if (s < score) { meilleur = pts.map(p => ({ x: p.x, y: p.y })); score = s; }
                if (score < eps) break;
            }
            pts = meilleur || pts;
        }
        // On retire les sommets qui ne sont plus que des points sur une droite.
        const sortie = [];
        let retires = 0, bouge = 0;
        for (let i = 0; i < n; i++) {
            const p = pts[i];
            if (n > 3 && scal(i, pts) < -1 + eps) { retires++; continue; }
            const ll = [p.x, latpVersLat(p.y)];
            const m0 = versMerc(anneau[i][0], anneau[i][1]), m1 = versMerc(ll[0], ll[1]);
            bouge = Math.max(bouge, Math.hypot(m1[0] - m0[0], m1[1] - m0[1]));
            sortie.push(ll);
        }
        if (sortie.length < 3) return null;
        if (!retires && bouge < 1e-3) return null;
        // Garde (audit du 31/10/2026) : sur une forme ronde, le « nasty hack » aligne les sommets
        // presque plats et l'itération écrase la forme — cercle de 100 m à 32 sommets : −41 % d'aire,
        // 35 m de déplacement ; seuil 30° : la forme disparaît. Un lieu qu'on met d'équerre a des
        // COINS : il en faut au moins MIN_COINS_EQUERRE proches d'un angle droit (1 pour un triangle),
        // et l'aire ne doit pas bouger de plus de MAX_DELTA_AIRE_EQUERRE.
        const presqueDroits = origine.filter((p, i) => { const dp = scal(i, origine); return Math.abs(dp) < bas; }).length;
        if (presqueDroits < (n === 3 ? 1 : MIN_COINS_EQUERRE)) return null;
        const aireAvant = Math.abs(aireBrute(origine.map(p => [p.x, p.y])));
        const aireApres = Math.abs(aireBrute(sortie.map(([lon, lat]) => [lon, latVersLatp(lat)])));
        if (!(aireAvant > 0) || Math.abs(aireApres - aireAvant) / aireAvant > MAX_DELTA_AIRE_EQUERRE) return null;
        return { anneau: sortie, retires, bouge };
    }

    // =====================================================================
    //  Transformations — dans le plan Mercator, autour du centre de gravité
    // =====================================================================

    // Calculé autour du premier sommet : en coordonnées Mercator absolues (~5·10⁶ m), les produits
    // croisés atteignent 10¹³ et la formule perd ses décimales — le centre tombait à côté (banc).
    function centreMerc(anneauMerc) {
        const o = anneauMerc[0];
        let a = 0, cx = 0, cy = 0;
        for (let i = 0, n = anneauMerc.length; i < n; i++) {
            const px = anneauMerc[i][0] - o[0], py = anneauMerc[i][1] - o[1];
            const qx = anneauMerc[(i + 1) % n][0] - o[0], qy = anneauMerc[(i + 1) % n][1] - o[1];
            const k = px * qy - qx * py;
            a += k; cx += (px + qx) * k; cy += (py + qy) * k;
        }
        if (Math.abs(a) < 1e-9) {
            const m = anneauMerc.reduce((s, p) => [s[0] + p[0], s[1] + p[1]], [0, 0]);
            return [m[0] / anneauMerc.length, m[1] / anneauMerc.length];
        }
        return [o[0] + cx / (3 * a), o[1] + cy / (3 * a)];
    }

    // Applique (angle en radians, facteur d'échelle) à TOUS les anneaux d'un polygone GeoJSON.
    function transformerPolygone(coords, centre, angle, echelle) {
        const c = Math.cos(angle), s = Math.sin(angle);
        return coords.map(anneau => anneau.map(([lon, lat]) => {
            const [x, y] = versMerc(lon, lat);
            const dx = (x - centre[0]) * echelle, dy = (y - centre[1]) * echelle;
            return deMerc(centre[0] + dx * c - dy * s, centre[1] + dx * s + dy * c);
        }));
    }

    const ouvrir = anneau => (anneau.length > 1 && anneau[0][0] === anneau[anneau.length - 1][0] && anneau[0][1] === anneau[anneau.length - 1][1]) ? anneau.slice(0, -1) : anneau.slice();
    const fermer = anneau => anneau.concat([anneau[0].slice()]);

    // =====================================================================
    //  L'imagerie — les tuiles que WME affiche, relues en CORS
    // =====================================================================

    const RE_TUILE = /\/tiles\/(\d+)\/(\d+)\/(\d+)/;
    // 0.10.00 : outre l'imagerie Google par défaut (`googleapis.com/tile/`), WME propose des couches
    // d'imagerie en plus (Pléiades, WorldView, GeoEye, SkySat, Sentinel-2, mosaïques), servies par
    // Earth Engine (`earthengine.googleapis.com/…/maps/<id>/tiles/z/x/y`). Mesuré le 14/11/2026 :
    // posées AU-DESSUS de l'imagerie par défaut (z-index 2020+ contre 2010), mêmes tuiles de 256 px au
    // même zoom, et TRANSPARENTES hors de leur couverture (PNG vide de 334 octets). La baguette lit
    // donc ce que l'éditeur voit : chaque couche visible, empilée dans l'ordre de WME.
    // ⚠️ WME interdit à la page d'appeler earthengine.googleapis.com (fetch refusé, même en no-cors) :
    // ces tuiles passent par GM_xmlhttpRequest, sans cookie (la tuile se lit ainsi : mesuré).
    const RE_IMAGERIE = /googleapis\.com\/tile\/|earthengine\.googleapis\.com\/.*\/maps\/[^/]+\/tiles\//;
    const estEarthEngine = src => /earthengine\.googleapis\.com\//.test(src);

    // Les couches d'imagerie visibles dans la vue, de la plus basse à la plus haute : pour chacune, une
    // URL modèle (le jeton de session y est). Toutes au zoom le plus représenté. Rien ⇒ l'imagerie
    // n'est pas affichée.
    // { inconnu: true } : des tuiles d'imagerie sont là, mais leur URL n'a plus la forme attendue — le
    // message « affichez l'imagerie » serait faux (elle est affichée).
    function lireModeleTuiles(vue) {
        const r = vue.getBoundingClientRect();
        const parCouche = new Map();     // modèle sans session ni clé → { modele, ordre, ee, z: Map(z → n) }
        let imagerie = 0;
        for (const img of document.querySelectorAll('img')) {
            if (!RE_IMAGERIE.test(img.src)) continue;
            imagerie++;
            const m = RE_TUILE.exec(img.src);
            if (!m) continue;
            const b = img.getBoundingClientRect();
            if (!b.width || b.right < r.left || b.left > r.right || b.bottom < r.top || b.top > r.bottom) continue;
            let el = img, visible = true, ordre = 0;
            for (let k = 0; el && el !== document.body && k < 12; k++, el = el.parentElement) {
                const cs = getComputedStyle(el);
                if (cs.display === 'none' || cs.visibility === 'hidden' || Number(cs.opacity) === 0) { visible = false; break; }
                // L'ordre d'empilement : le premier z-index chiffré en remontant (le calque OpenLayers).
                if (!ordre && cs.zIndex && cs.zIndex !== 'auto') ordre = Number(cs.zIndex) || 0;
            }
            if (!visible) continue;
            const modele = img.src.replace(RE_TUILE, '/tiles/{z}/{x}/{y}');
            // Earth Engine : l'identifiant de carte est « <couche>-<jeton> » et le jeton change quand la
            // couche est rallumée ; pendant la transition, OpenLayers garde les anciennes tuiles dans un
            // calque tampon placé juste en dessous (z-index − 1, vu le 14/11/2026). Une seule entrée par
            // couche, et c'est le calque le plus haut (le vivant) qui donne le modèle.
            const cle = estEarthEngine(img.src) ? modele.replace(/(\/maps\/[^/-]+)-[^/]+/, '$1')
                : modele.replace(/([?&])(session|key)=[^&]*/g, '$1');
            const c = parCouche.get(cle) || { modele, ordre, ee: estEarthEngine(img.src), z: new Map() };
            if (ordre > c.ordre) { c.modele = modele; c.ordre = ordre; }
            const z = Number(m[1]);
            c.z.set(z, (c.z.get(z) || 0) + 1);
            parCouche.set(cle, c);
        }
        // Le zoom le plus représenté, toutes couches confondues.
        const total = new Map();
        for (const c of parCouche.values()) for (const [z, n] of c.z) total.set(z, (total.get(z) || 0) + n);
        let zMeilleur = null, nMeilleur = 0;
        for (const [z, n] of total) if (n > nMeilleur) { zMeilleur = z; nMeilleur = n; }
        if (zMeilleur === null) return imagerie ? { inconnu: true } : null;
        const couches = [...parCouche.values()].filter(c => c.z.has(zMeilleur))
            .sort((a, b) => a.ordre - b.ordre).map(c => ({ modele: c.modele, ee: c.ee }));
        return { z: zMeilleur, couches };
    }

    // Une tuile Earth Engine, par GM_xmlhttpRequest (WME bloque l'appel depuis la page).
    function tuileParGM(url) {
        return new Promise((ok, ko) => {
            if (typeof GM_xmlhttpRequest !== 'function') { ko(new Error('GM_xmlhttpRequest')); return; }
            GM_xmlhttpRequest({ method: 'GET', url, timeout: 30000, anonymous: true, responseType: 'blob',
                onload: x => (x.status >= 200 && x.status < 300 && x.response) ? ok(x.response) : ko(new Error('HTTP ' + x.status)),
                onerror: () => ko(new Error('réseau')), ontimeout: () => ko(new Error('délai')) });
        });
    }

    const cacheTuiles = new Map();     // 'z/x/y' → ImageBitmap
    const MAX_CACHE = 160;
    async function chargerTuile(modele, z, x0, y, ee) {
        // Une vue à cheval sur l'antiméridien demande des colonnes hors de [0, 2^z[ : on les replie.
        const nz = Math.pow(2, z), x = ((x0 % nz) + nz) % nz;
        // La couche (le modèle sans session ni clé, qui changent sans que l'image change) fait partie de
        // la clé : une autre imagerie ne reprend pas les tuiles de la précédente.
        const cle = modele.replace(/([?&])(session|key)=[^&]*/g, '$1') + '|' + z + '/' + x + '/' + y;
        if (cacheTuiles.has(cle)) return cacheTuiles.get(cle);
        const url = modele.replace('{z}', z).replace('{x}', x).replace('{y}', y);
        let blob;
        if (ee) blob = await tuileParGM(url);
        else {
            const r = await fetch(url, { mode: 'cors', credentials: 'omit' });
            if (!r.ok) throw new Error('HTTP ' + r.status);
            blob = await r.blob();
        }
        const bm = await createImageBitmap(blob);
        cacheTuiles.set(cle, bm);
        if (cacheTuiles.size > MAX_CACHE) {
            const premier = cacheTuiles.keys().next().value;
            const vieux = cacheTuiles.get(premier);
            cacheTuiles.delete(premier);
            try { vieux.close(); } catch (e) { }
        }
        return bm;
    }

    // L'image composée des tuiles qui couvrent la vue (bornée autour du clic). Rend les pixels,
    // les dimensions et l'origine en pixels globaux.
    // 0.10.00 : `couches` = les imageries visibles, de la plus basse à la plus haute ; chaque tuile de
    // l'image est leur superposition, comme à l'écran. La première couche (la base) est obligatoire ;
    // une couche du dessus illisible laisse voir celle d'en dessous, comme dans WME.
    async function composer(couches, z, extent, lon, lat, progres) {
        const base = couches[0];
        // Taille des tuiles : celle d'une tuile réellement reçue (256, ou 512 sur écran dense).
        const tx0 = Math.floor(lonVersPx(lon, z, 1)), ty0 = Math.floor(latVersPx(lat, z, 1));
        const temoin = await chargerTuile(base.modele, z, tx0, ty0, base.ee);
        const T = temoin.width;
        // Plafond compté en PIXELS (MAX_TUILES_COTE tuiles de 256 px) : des tuiles de 512 px ne doivent
        // pas quadrupler la mémoire. Au plus `cote` tuiles par côté, exactement.
        const cote = Math.max(4, Math.round(MAX_TUILES_COTE * 256 / T));
        // Les tuiles de la vue ; si elle est plus large que le plafond, une fenêtre de `cote` tuiles qui
        // contient le clic, centrée sur lui mais GLISSÉE dans la vue : le budget qu'un bord de l'écran
        // laisse inutilisé passe de l'autre côté (audit du 31/10/2026 : la tache était coupée en pleine
        // vue). Rend aussi les côtés où la fenêtre s'arrête avant le bord de la vue.
        const fenetre = (a, b, c) => {
            a = Math.min(a, c); b = Math.max(b, c);
            if (b - a + 1 <= cote) return [a, b, false, false];
            const d = Math.max(a, Math.min(c - Math.floor((cote - 1) / 2), b - cote + 1));
            return [d, d + cote - 1, d > a, d + cote - 1 < b];
        };
        const [xa, xb, coupeO, coupeE] = fenetre(Math.floor(lonVersPx(extent[0], z, 1)), Math.floor(lonVersPx(extent[2], z, 1) - 1e-9), tx0);
        const [ya, yb, coupeN, coupeS] = fenetre(Math.floor(latVersPx(extent[3], z, 1)), Math.floor(latVersPx(extent[1], z, 1) - 1e-9), ty0);
        const nx = xb - xa + 1, ny = yb - ya + 1;
        const W = nx * T, H = ny * T;
        const toile = typeof OffscreenCanvas !== 'undefined' ? new OffscreenCanvas(W, H) : Object.assign(document.createElement('canvas'), { width: W, height: H });
        const ctx = toile.getContext('2d', { willReadFrequently: true });
        const travaux = [];
        let rateesDessus = 0;
        const total = nx * ny;
        let fait = 0;
        for (let y = ya; y <= yb; y++) {
            for (let x = xa; x <= xb; x++) {
                travaux.push(Promise.all(couches.map((c, i) => chargerTuile(c.modele, z, x, y, c.ee).catch(e => {
                    if (i === 0) throw e;
                    rateesDessus++;
                    return null;
                }))).then(bms => { for (const bm of bms) if (bm) ctx.drawImage(bm, (x - xa) * T, (y - ya) * T, T, T); })
                    .finally(() => { if (progres) progres(++fait, total); }));
            }
        }
        const res = await Promise.allSettled(travaux);
        const rates = res.filter(r => r.status === 'rejected').length;
        if (rates === res.length) throw new Error(res[0].reason && res[0].reason.message || 'tuiles');
        if (rateesDessus) log(rateesDessus + " tuile(s) d'imagerie du dessus illisible(s) : celle du dessous les remplace");
        return { px: ctx.getImageData(0, 0, W, H).data, W, H, z, T, ox: xa * T, oy: ya * T, rates, coupes: { o: coupeO, e: coupeE, n: coupeN, s: coupeS } };
    }

    // Images intégrales des trois canaux : la moyenne d'un carré de (2r+1)² pixels coûte alors
    // quatre lectures, quelle que soit sa taille.
    function integrales(px, W, H) {
        const L = W + 1;
        const I = [new Uint32Array(L * (H + 1)), new Uint32Array(L * (H + 1)), new Uint32Array(L * (H + 1))];
        for (let y = 0; y < H; y++) {
            const s = [0, 0, 0];
            for (let x = 0; x < W; x++) {
                const p = (y * W + x) * 4;
                for (let c = 0; c < 3; c++) {
                    s[c] += px[p + c];
                    I[c][(y + 1) * L + x + 1] = I[c][y * L + x + 1] + s[c];
                }
            }
        }
        return I;
    }

    // =====================================================================
    //  La baguette
    // =====================================================================

    let baguetteActive = false;
    let image = null;             // la dernière image composée (réutilisée par le curseur de tolérance)
    let analyse = null;           // { sx, sy, niveaux } pour le dernier clic
    let apercu = null;            // { anneau, n, aire, bord } : le contour proposé
    let calqueOk = false;
    let posBas = null;            // position du dernier « mouse-down » de la carte
    let dernierClic = null;       // { sx, sy } du clic en cours d'analyse (relu si lissage ou méthode changent)
    let doublon = false;          // true : un lieu de type zone recouvre le contour tracé ; 'inconnu' : lieux illisibles
    let zonesClic = [];           // les lieux de type zone lus au clic ; null : lecture échouée
    let raison = null;            // clé du message quand la tolérance ne donne rien ('tooSmall', 'tooComplex')
    let acquis = null;            // Alt + clic : le contour déjà tracé, auquel le dernier clic s'ajoute
    let nbAcquis = 0;             // clics déjà réunis dans `acquis` (le contour proposé en compte un de plus s'il s'y ajoute)
    let ajoutClic = false;        // la touche Alt était enfoncée à l'appui du dernier clic sur la carte
    let vueCarte = null;          // l'élément de la vue de la carte, relu régulièrement

    function majEtatBaguette() {
        const b = document.getElementById('wmw-sb-baguette');
        if (b) { b.textContent = baguetteActive ? t('btnOff') : t('btnOn'); b.setAttribute('aria-pressed', String(baguetteActive)); }
        const st = document.getElementById('wmw-sb-etat');
        if (st) st.textContent = baguetteActive ? t('stWait') : t('stOff');
        const fab = document.getElementById(FAB_ID);
        if (fab) { fab.classList.toggle('on', baguetteActive); fab.setAttribute('aria-pressed', String(baguetteActive)); dsxDock.actif(fab, baguetteActive); }
        sdk.Map.getMapViewportElement && Promise.resolve(sdk.Map.getMapViewportElement()).then(v => { if (v) v.classList.toggle('wmw-curseur', baguetteActive); }, () => { });
    }

    // Baguette éteinte : l'image composée, ses intégrales et les tuiles en cache (60 à 100 Mo sur un
    // grand écran) ne servent plus à rien.
    function libererImagerie() {
        image = null;
        for (const bm of cacheTuiles.values()) { try { bm.close(); } catch (e) { } }
        cacheTuiles.clear();
    }

    function basculerBaguette(etat) {
        baguetteActive = typeof etat === 'boolean' ? etat : !baguetteActive;
        if (!baguetteActive) { fermerApercu(); libererImagerie(); }
        if (baguetteActive && modeForme) finirModeForme();
        majEtatBaguette();
        if (baguetteActive) toast(t('stWait'));
    }

    // Rend la main à la page : sans cela, un calcul d'un seul tenant fige WME (constaté le 31/10).
    const pause = () => new Promise(r => setTimeout(r, 0));

    // Un clic = une analyse : l'écart de chaque pixel à la couleur du clic, puis l'inondation par
    // niveaux (niveauxDepuis). Ensuite, la tolérance ne fait que relire ces niveaux.
    // L'écart est calculé sans rien allouer (la moyenne du voisinage lit quatre cases des images
    // intégrales) ; en « pour l'œil », les canaux sont arrondis pour profiter de la table LIN_SRGB.
    async function preparerAnalyse(img, sx, sy, generation) {
        const { px, W, H } = img;
        const r = Math.round(opts.lissage);
        const L = W + 1;
        const I = r > 0 ? (img.integ || (img.integ = integrales(px, W, H))) : null;
        let mr = 0, mg = 0, mb = 0;
        const moyenne = i => {
            if (!I) { const p = i * 4; mr = px[p]; mg = px[p + 1]; mb = px[p + 2]; return; }
            const x = i % W, y = (i - x) / W;
            const x0 = Math.max(0, x - r), x1 = Math.min(W, x + r + 1), y0 = Math.max(0, y - r), y1 = Math.min(H, y + r + 1);
            const k = (x1 - x0) * (y1 - y0), a = y1 * L + x1, b = y0 * L + x1, c = y1 * L + x0, d = y0 * L + x0;
            // Les intégrales Uint32 débordent au-delà de ~16,8 Mpx clairs ; la somme d'un carré, elle,
            // tient toujours : lue modulo 2³² (>>> 0), elle est exacte.
            mr = ((I[0][a] - I[0][b] - I[0][c] + I[0][d]) >>> 0) / k;
            mg = ((I[1][a] - I[1][b] - I[1][c] + I[1][d]) >>> 0) / k;
            mb = ((I[2][a] - I[2][b] - I[2][c] + I[2][d]) >>> 0) / k;
        };
        moyenne(sy * W + sx);
        const rr = mr, rg = mg, rb = mb;
        const refLab = rgbVersLab(Math.round(rr), Math.round(rg), Math.round(rb));
        // Un pixel transparent est une tuile non reçue (403, coupure) : hors d'atteinte. Sans cela, le
        // carré noir était englobé ou coupait le contour net (audit du 31/10/2026).
        const lab = new Float64Array(3);
        const ecart = opts.algo === 'lab'
            ? i => { if (px[i * 4 + 3] === 0) return 255; moyenne(i); labDans(Math.round(mr), Math.round(mg), Math.round(mb), lab); return ECHELLE_CIE94 * cie94(lab, refLab); }
            : i => { if (px[i * 4 + 3] === 0) return 255; moyenne(i); return Math.max(Math.abs(mr - rr), Math.abs(mg - rg), Math.abs(mb - rb)); };
        const niveaux = await niveauxDepuis(W, H, sx, sy, ecart, NIV_MAX, async part => {
            if (generation === generationAnalyse) etatCarte(t('stColours'), PART_TUILES + (1 - PART_TUILES) * part);
            await pause();
            if (generation !== generationAnalyse) throw new Error('abandon');
        });
        return { sx, sy, niveaux };
    }

    // Du masque recadré au contour [lon, lat] : pincements, trous, suivi, simplification, validité.
    // Rend { anneau, n, aire }, null (rien à tracer) ou { complexe: true } : aucun contour valide de
    // moins de MAX_SOMMETS sommets. Le contour brut n'est JAMAIS rendu : ses dizaines de milliers de
    // sommets figeaient WME (31/10).
    // La page reprend la main avant chaque fermeture (jusqu'à ~1 s sur un contour complexe), et une
    // génération changée entre-temps abandonne (rend null).
    // `fermeture` (rayon du recours, 0 sinon) et `relache` (écart relâché pour tenir sous le plafond)
    // sont dits dans la carte : la surface peut avoir gonflé, ou le contour être plus grossier que réglé.
    async function contourDepuis(img, m, generation) {
        let t = Date.now();
        boucherPincements(m.masque, m.w, m.h);
        mesurer('pincements', t); t = Date.now();
        const brut = tracerContour(m.masque, m.w, m.h);
        mesurer('suivi', t); t = Date.now();
        mesures.brut = brut.length;
        if (brut.length < 3) return null;
        let pts = contourPlafonne(brut, opts.precision), dx = 0, dy = 0, fermeture = 0;
        mesurer('simplification+validite', t); t = Date.now();
        // Second recours : une fermeture morphologique comble les goulets d'un ou deux pixels, là où
        // deux bords proches se croisaient une fois simplifiés.
        for (let r = 1; !pts && r <= 2; r++) {
            await pause();
            if (generation !== undefined && generation !== generationAnalyse) return null;
            const f = fermerMasque(m.masque, m.w, m.h, r);
            boucherPincements(f.masque, f.w, f.h);
            pts = contourPlafonne(tracerContour(f.masque, f.w, f.h), opts.precision);
            dx = -f.marge; dy = -f.marge;
            fermeture = r;
        }
        if (fermeture) { mesures.fermeture = fermeture; mesurer('recours', t); }
        if (!pts) return { complexe: true };
        const anneau = pts.map(([x, y]) => [pxVersLon(img.ox + m.ox + x + dx, img.z, img.T), pxVersLat(img.oy + m.oy + y + dy, img.z, img.T)]);
        return { anneau, n: anneau.length, aire: aireM2(anneau), fermeture, relache: pts.tol > opts.precision * 1.05 };
    }

    // La simplification la plus fidèle qui tienne sous MAX_SOMMETS ET soit un anneau valide. Une
    // simplification peut faire se croiser deux bords d'un goulet : on essaie alors un peu moins, puis
    // un peu plus de tolérance — jamais au-delà du plafond. null si rien ne convient.
    // Rend l'anneau, avec `tol` : l'écart réellement appliqué (plus grand que tol0 si le plafond l'a
    // exigé — la carte le dit alors).
    function contourPlafonne(brut, tol0) {
        if (brut.length < 3) return null;
        let tol = tol0, pts = simplifierAnneau(brut, tol);
        if (pts.length > MAX_SOMMETS) {
            // La plus petite tolérance sous le plafond, à 2 % près : les anciens paliers × 1,5 la
            // relâchaient jusqu'à 1,5 fois plus que nécessaire (audit du 31/10/2026).
            let bas = tol, haut = tol;
            while (pts.length > MAX_SOMMETS && haut < 64) { bas = haut; haut *= 2; pts = simplifierAnneau(brut, haut); }
            if (pts.length <= MAX_SOMMETS) {
                while (haut / bas > 1.02) {
                    const mi = Math.sqrt(bas * haut), p = simplifierAnneau(brut, mi);
                    if (p.length > MAX_SOMMETS) bas = mi; else { haut = mi; pts = p; }
                }
            }
            tol = haut;
        }
        for (const k of [1, 0.75, 1.5, 2, 3]) {
            const p = k === 1 ? pts : simplifierAnneau(brut, tol * k);
            if (p.length >= 3 && p.length <= MAX_SOMMETS && anneauValide(p)) { p.tol = tol * k; return p; }
        }
        return null;
    }

    // Fermeture (dilatation puis érosion par un carré 3 × 3, r fois) dans une copie élargie de r + 1
    // pixels : les vides de moins de 2r pixels entre deux parties de la tache sont comblés, sans jamais
    // séparer la tache. Avec une croix (voisinage 4), l'érosion retirait aussitôt le pixel comblé (banc).
    // Rend { masque, w, h, marge }.
    function fermerMasque(src, w0, h0, r) {
        const marge = r + 1, w = w0 + 2 * marge, h = h0 + 2 * marge;
        let a = new Uint8Array(w * h);
        for (let y = 0; y < h0; y++) for (let x = 0; x < w0; x++) a[(y + marge) * w + x + marge] = src[y * w0 + x];
        const pas = (m, dilater) => {
            const o = new Uint8Array(w * h);
            for (let y = 1; y < h - 1; y++) {
                for (let x = 1; x < w - 1; x++) {
                    const i = y * w + x, a = i - w, b = i + w;
                    const v = dilater
                        ? (m[a - 1] | m[a] | m[a + 1] | m[i - 1] | m[i] | m[i + 1] | m[b - 1] | m[b] | m[b + 1])
                        : (m[a - 1] & m[a] & m[a + 1] & m[i - 1] & m[i] & m[i + 1] & m[b - 1] & m[b] & m[b + 1]);
                    o[i] = v;
                }
            }
            return o;
        };
        for (let k = 0; k < r; k++) a = pas(a, true);
        for (let k = 0; k < r; k++) a = pas(a, false);
        return { masque: a, w, h, marge };
    }

    // =====================================================================
    //  Réunion de contours — Alt + clic (ajouter une zone) et « Agrandir » un lieu
    // =====================================================================

    // La trame est-elle d'un seul tenant (voisinage 4, celui du suivi de contour) ?
    function uneTache(m, W, H) {
        let total = 0, debut = -1;
        for (let i = 0; i < W * H; i++) if (m[i]) { total++; if (debut < 0) debut = i; }
        if (!total) return false;
        const vu = new Uint8Array(W * H), pile = new Int32Array(total);
        let n = 0, h = 0;
        pile[h++] = debut; vu[debut] = 1;
        while (h) {
            const i = pile[--h], x = i % W;
            n++;
            if (x > 0 && m[i - 1] && !vu[i - 1]) { vu[i - 1] = 1; pile[h++] = i - 1; }
            if (x < W - 1 && m[i + 1] && !vu[i + 1]) { vu[i + 1] = 1; pile[h++] = i + 1; }
            if (i >= W && m[i - W] && !vu[i - W]) { vu[i - W] = 1; pile[h++] = i - W; }
            if (i < (H - 1) * W && m[i + W] && !vu[i + W]) { vu[i + W] = 1; pile[h++] = i + W; }
        }
        return n === total;
    }

    // Réunit des anneaux [lon, lat] en un seul contour, sans calcul d'intersections : chaque anneau est
    // rempli dans une trame (les pixels de l'imagerie au zoom z ; des cases k fois plus grandes si
    // l'emprise dépasse MAX_PX_UNION), puis le contour de la tache est suivi et simplifié comme celui de
    // la baguette (tracerContour, contourPlafonne). Le contour rendu a donc la finesse de la baguette
    // (± une case), pas les sommets d'origine. Comme pour la baguette, seul le bord EXTÉRIEUR compte.
    // Un vide d'une case entre deux morceaux est comblé (bords qui se touchent à l'arrondi près) ; plus
    // large, les morceaux restent séparés : { disjoint: true }, rien n'est réuni.
    // Rend { anneau, n, aire, relache, k }, { disjoint: true }, { complexe: true } ou null.
    function unirAnneaux(anneaux, z, T, tol) {
        const pxs = anneaux.filter(a => a && a.length >= 3).map(a => a.map(([lon, lat]) => [lonVersPx(lon, z, T), latVersPx(lat, z, T)]));
        if (!pxs.length) return null;
        let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
        for (const a of pxs) for (const [x, y] of a) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
        let k = 1;
        while (((x1 - x0) / k + 6) * ((y1 - y0) / k + 6) > MAX_PX_UNION) k *= 2;
        const ox = Math.floor(x0 / k) - 2, oy = Math.floor(y0 / k) - 2;
        let W = Math.ceil(x1 / k) - ox + 3, H = Math.ceil(y1 / k) - oy + 3;
        let m = new Uint8Array(W * H);
        // Remplissage ligne à ligne, au centre des cases, pair-impair anneau par anneau : la case
        // [x, x + 1[ est pleine si son milieu tombe dans l'anneau.
        const xs = [];
        for (const a of pxs) {
            const g = a.map(([x, y]) => [x / k - ox, y / k - oy]), n = g.length;
            for (let ligne = 0; ligne < H; ligne++) {
                const yc = ligne + 0.5;
                xs.length = 0;
                for (let i = 0; i < n; i++) {
                    const p = g[i], q = g[(i + 1) % n];
                    if ((p[1] <= yc) !== (q[1] <= yc)) xs.push(p[0] + (yc - p[1]) * (q[0] - p[0]) / (q[1] - p[1]));
                }
                if (xs.length < 2) continue;
                xs.sort((u, v) => u - v);
                for (let j = 0; j + 1 < xs.length; j += 2) {
                    const xa = Math.max(0, Math.ceil(xs[j] - 0.5)), xb = Math.min(W - 1, Math.floor(xs[j + 1] - 0.5));
                    for (let x = xa; x <= xb; x++) m[ligne * W + x] = 1;
                }
            }
        }
        boucherPincements(m, W, H);
        let marge = 0;
        if (!uneTache(m, W, H)) {
            // La plus petite fermeture qui relie les morceaux : elle comble un vide de moins de 2r cases (et les
            // creux aussi étroits du contour), jamais plus de MAX_VIDE_UNION.
            let f = null;
            for (let r = 1; r <= Math.ceil(MAX_VIDE_UNION / 2) && !f; r++) {
                const g = fermerMasque(m, W, H, r);
                boucherPincements(g.masque, g.w, g.h);
                if (uneTache(g.masque, g.w, g.h)) f = g;
            }
            if (!f) {
                // L'écart entre les deux premiers anneaux, en pixels de l'imagerie (sommets à sommets) : de quoi
                // dire « à n pixels » et diagnostiquer chez l'éditeur (data-wmw-mesures).
                let ecart = Infinity;
                if (pxs.length >= 2) for (const a of pxs[0]) for (const b of pxs[1]) { const d = Math.hypot(a[0] - b[0], a[1] - b[1]); if (d < ecart) ecart = d; }
                return { disjoint: true, ecart };
            }
            m = f.masque; W = f.w; H = f.h; marge = f.marge;
        }
        const brut = tracerContour(m, W, H);
        if (brut.length < 3) return null;
        const tolCase = Math.max(0.5, tol / k);
        const pts = contourPlafonne(brut, tolCase);
        if (!pts) return { complexe: true };
        const anneau = pts.map(([x, y]) => [pxVersLon((ox + x - marge) * k, z, T), pxVersLat((oy + y - marge) * k, z, T)]);
        return { anneau, n: anneau.length, aire: aireM2(anneau), relache: pts.tol > tolCase * 1.05, k };
    }

    // Durées des phases du dernier aperçu, écrites en clair dans la console ET en attribut sur <html>
    // (data-wmw-mesures) : les journaux d'un script Tampermonkey n'arrivent pas toujours jusqu'à qui
    // les cherche, et « ça fige, on ne sait pas pourquoi » doit pouvoir se diagnostiquer chez l'éditeur.
    let mesures = {};
    const mesurer = (phase, depuis) => { mesures[phase] = (mesures[phase] || 0) + (Date.now() - depuis); };
    function publierMesures() {
        const texte = Object.entries(mesures).map(([k, v]) => k + ' ' + v).join(', ');
        try { document.documentElement.setAttribute('data-wmw-mesures', texte); } catch (e) { }
        const total = Object.entries(mesures).filter(([k]) => !['brut', 'sommets', 'fermeture', 'ecart'].includes(k)).reduce((s, [, v]) => s + v, 0);
        if (total > 300) log('aperçu lent (' + total + ' ms) : ' + texte);
    }

    // =====================================================================
    //  Éviter les lieux de même catégorie (demande de l'auteur, 10/11/2026 : chaque Alt + clic
    //  débordait sur les lieux voisins et sur la zone déjà tracée, la carte devenait illisible)
    // =====================================================================

    // Retire du masque m (recadré dans l'image img, comme le rend masqueAuSeuil) ce qui tombe dans les
    // anneaux [lon, lat] donnés à plus de rPx pixels de leur bord : jusqu'à rPx, la zone peut empiéter
    // sur le voisin, pour une frontière commune propre (0 : aucun empiètement). Puis seule la tache
    // d'un seul tenant (voisinage 4) qui contient le pixel cliqué (sx, sy, pixels de l'image) est
    // gardée : un lieu qui coupe la zone en deux laisse de côté le morceau d'en face.
    // Les anneaux sont remplis dans une trame qui couvre le masque élargi de rPx, au centre des cases
    // comme unirAnneaux ; au-delà de MAX_PX_EVITER cases, elles grossissent (× 2). La distance au bord
    // est une distance de chanfrein (1, √2 : ± 8 %), comptée depuis l'extérieur VU dans la trame : hors
    // trame, un lieu est supposé continuer (on évite un peu trop plutôt que pas assez).
    // Rend un masque de même forme (masque, w, h, ox, oy, n, cotes, bord), ou m tel quel si aucun
    // anneau n'approche.
    function exclureAnneaux(m, img, anneaux, rPx, sx, sy) {
        if (!m.n || !anneaux.length) return m;
        const R = Math.max(0, rPx || 0);
        const gx0 = m.ox - R - 1, gy0 = m.oy - R - 1, gx1 = m.ox + m.w + R + 1, gy1 = m.oy + m.h + R + 1;
        let k = 1;
        while (((gx1 - gx0) / k + 2) * ((gy1 - gy0) / k + 2) > MAX_PX_EVITER) k *= 2;
        const ox = Math.floor(gx0 / k), oy = Math.floor(gy0 / k);
        const W = Math.ceil(gx1 / k) - ox + 1, H = Math.ceil(gy1 / k) - oy + 1;
        const obs = new Uint8Array(W * H);
        const xs = [];
        let touche = false;
        for (const a of anneaux) {
            if (!a || a.length < 3) continue;
            const g = a.map(([lon, lat]) => [(lonVersPx(lon, img.z, img.T) - img.ox) / k - ox, (latVersPx(lat, img.z, img.T) - img.oy) / k - oy]);
            let ya = Infinity, yb = -Infinity, xa = Infinity, xb = -Infinity;
            for (const [x, y] of g) { if (x < xa) xa = x; if (x > xb) xb = x; if (y < ya) ya = y; if (y > yb) yb = y; }
            if (xb < 0 || yb < 0 || xa > W || ya > H) continue;
            touche = true;
            const n = g.length;
            for (let ligne = Math.max(0, Math.floor(ya)); ligne < Math.min(H, Math.ceil(yb) + 1); ligne++) {
                const yc = ligne + 0.5;
                xs.length = 0;
                for (let i = 0; i < n; i++) {
                    const p = g[i], q = g[(i + 1) % n];
                    if ((p[1] <= yc) !== (q[1] <= yc)) xs.push(p[0] + (yc - p[1]) * (q[0] - p[0]) / (q[1] - p[1]));
                }
                if (xs.length < 2) continue;
                xs.sort((u, v) => u - v);
                for (let j = 0; j + 1 < xs.length; j += 2) {
                    const x0 = Math.max(0, Math.ceil(xs[j] - 0.5)), x1 = Math.min(W - 1, Math.floor(xs[j + 1] - 0.5));
                    for (let x = x0; x <= x1; x++) obs[ligne * W + x] = 1;
                }
            }
        }
        if (!touche) return m;
        // Distance de chanfrein (1, √2) dans une grille L × M : depuis les cases où D vaut 0, vers celles où
        // D vaut Infinity (les autres gardent leur valeur). Deux passes, sans rien allouer.
        const chanfrein = (D, L, M) => {
            const r2 = Math.SQRT2;
            for (let y = 0; y < M; y++) for (let x = 0; x < L; x++) {
                const i = y * L + x;
                if (!D[i]) continue;
                let d = D[i];
                if (x > 0 && D[i - 1] + 1 < d) d = D[i - 1] + 1;
                if (y > 0) {
                    if (D[i - L] + 1 < d) d = D[i - L] + 1;
                    if (x > 0 && D[i - L - 1] + r2 < d) d = D[i - L - 1] + r2;
                    if (x < L - 1 && D[i - L + 1] + r2 < d) d = D[i - L + 1] + r2;
                }
                D[i] = d;
            }
            for (let y = M - 1; y >= 0; y--) for (let x = L - 1; x >= 0; x--) {
                const i = y * L + x;
                if (!D[i]) continue;
                let d = D[i];
                if (x < L - 1 && D[i + 1] + 1 < d) d = D[i + 1] + 1;
                if (y < M - 1) {
                    if (D[i + L] + 1 < d) d = D[i + L] + 1;
                    if (x < L - 1 && D[i + L + 1] + r2 < d) d = D[i + L + 1] + r2;
                    if (x > 0 && D[i + L - 1] + r2 < d) d = D[i + L - 1] + r2;
                }
                D[i] = d;
            }
        };
        // plafond[case] : jusqu'où (en cases de la trame) la zone peut entrer dans le lieu de cette case.
        // La marge ne dépasse jamais la MOITIÉ de la profondeur du lieu (sa plus grande distance du cœur au
        // bord) : sans ce plafond, 50 m avalaient tout lieu de moins de 100 m d'épaisseur (mesuré dans WME le
        // 10/11/2026 : un bosquet de 989 m² recouvert à 977 m², comme sans le réglage ; décision de l'auteur).
        // La profondeur se lit par tache de la trame (voisinage 4) : deux lieux qui se touchent comptent pour un.
        const Rk = R / k;
        let plafond = null;
        if (Rk > 0) {
            const D = new Float32Array(W * H);
            for (let i = 0; i < W * H; i++) D[i] = obs[i] ? Infinity : 0;
            chanfrein(D, W, H);
            const tache = new Int32Array(W * H).fill(-1), prof = [], pile = [];
            for (let i0 = 0; i0 < W * H; i0++) {
                if (!obs[i0] || tache[i0] >= 0) continue;
                const id = prof.length;
                let p = 0;
                tache[i0] = id; pile.push(i0);
                while (pile.length) {
                    const i = pile.pop(), x = i % W;
                    if (D[i] > p) p = D[i];
                    if (x > 0 && obs[i - 1] && tache[i - 1] < 0) { tache[i - 1] = id; pile.push(i - 1); }
                    if (x < W - 1 && obs[i + 1] && tache[i + 1] < 0) { tache[i + 1] = id; pile.push(i + 1); }
                    if (i >= W && obs[i - W] && tache[i - W] < 0) { tache[i - W] = id; pile.push(i - W); }
                    if (i < (H - 1) * W && obs[i + W] && tache[i + W] < 0) { tache[i + W] = id; pile.push(i + W); }
                }
                prof.push(Math.min(Rk, p / 2));
            }
            plafond = new Float32Array(W * H);
            for (let i = 0; i < W * H; i++) if (obs[i]) plafond[i] = prof[tache[i]];
        }
        // 1) Coupe NETTE : aucun pixel d'un lieu.
        const w = m.w, h = m.h, libre = new Uint8Array(w * h), caseDe = new Int32Array(w * h);
        for (let y = 0; y < h; y++) {
            const cy = Math.floor((m.oy + y + 0.5) / k) - oy;
            for (let x = 0; x < w; x++) {
                const i = y * w + x, c = cy * W + Math.floor((m.ox + x + 0.5) / k) - ox;
                caseDe[i] = c;
                if (m.masque[i] && !obs[c]) libre[i] = 1;
            }
        }
        // 2) La tache du clic seulement (voisinage 4).
        const tacheDu = (permis, depuis) => {
            const g = new Uint8Array(w * h), p = [depuis];
            g[depuis] = 1;
            while (p.length) {
                const i = p.pop(), x = i % w;
                if (x > 0 && permis[i - 1] && !g[i - 1]) { g[i - 1] = 1; p.push(i - 1); }
                if (x < w - 1 && permis[i + 1] && !g[i + 1]) { g[i + 1] = 1; p.push(i + 1); }
                if (i >= w && permis[i - w] && !g[i - w]) { g[i - w] = 1; p.push(i - w); }
                if (i < (h - 1) * w && permis[i + w] && !g[i + w]) { g[i + w] = 1; p.push(i + w); }
            }
            return g;
        };
        const cx = sx - m.ox, cy = sy - m.oy;
        if (cx < 0 || cy < 0 || cx >= w || cy >= h || !libre[cy * w + cx]) return { masque: new Uint8Array(w * h), w, h, ox: m.ox, oy: m.oy, n: 0, cotes: {}, bord: false };
        let garde = tacheDu(libre, cy * w + cx);
        // 3) La marge, rendue depuis la tache GARDÉE seulement : un pixel d'un lieu revient s'il est à moins du
        //    plafond de cette tache. Rendue par l'intérieur du lieu (les bandes le long de ses bords), elle servait
        //    de passage pour le CONTOURNER, et le contour extérieur l'avalait (mesuré dans WME le 10/11/2026).
        if (plafond) {
            const E = new Float32Array(w * h);
            for (let i = 0; i < w * h; i++) E[i] = garde[i] ? 0 : Infinity;
            chanfrein(E, w, h);
            const permis = garde.slice();
            let ajout = false;
            for (let i = 0; i < w * h; i++) {
                if (!m.masque[i] || garde[i] || !obs[caseDe[i]]) continue;
                if (E[i] <= plafond[caseDe[i]] * k) { permis[i] = 1; ajout = true; }
            }
            if (ajout) garde = tacheDu(permis, cy * w + cx);
        }
        let n = 0, x0 = w, y0 = h, x1 = -1, y1 = -1;
        for (let i = 0; i < w * h; i++) {
            if (!garde[i]) continue;
            const x = i % w, y = (i - x) / w;
            n++;
            if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y;
        }
        const cotes = { o: m.ox + x0 === 0, e: m.ox + x1 === img.W - 1, n: m.oy + y0 === 0, s: m.oy + y1 === img.H - 1 };
        return { masque: garde, w, h, ox: m.ox, oy: m.oy, n, cotes, bord: cotes.o || cotes.e || cotes.n || cotes.s };
    }

    // Mètres au sol par pixel de l'imagerie au zoom z, à la latitude lat.
    const metresParPx = (lat, z, T) => 2 * Math.PI * R_TERRE * Math.cos(lat * Math.PI / 180) / (T * Math.pow(2, z));

    // Les lieux que la baguette évite : ceux de type zone de la catégorie choisie, sauf le lieu choisi
    // avant le clic (Remplacer et Agrandir travaillent sur lui).
    const evite = z => opts.eviter && (z.cats || []).includes(opts.categorie) && !(cibleClic && z.id === cibleClic.id);

    let nomDedans = '';           // le lieu évité où tombe le clic (message « inPlace »)
    let entoures = [];            // les lieux évités que le contour proposé entoure (message « surrounds »)

    // Un lieu évité ENTOURÉ par la zone (une clairière déjà cartographiée au milieu d'un bois) y fait un
    // trou ; le contour, qui ne garde que le bord extérieur, le recouvre : un lieu Waze n'a pas de trou.
    // Il est DIT dans la fenêtre, pas évité (décision de l'auteur, 10/11/2026 : une entaille jusqu'à lui
    // serait laide sur la carte et fragile au tracé). Entouré = tous ses sommets dans le contour : un lieu
    // seulement empiété de la marge garde ses sommets du côté opposé hors du contour.
    function lieuxEntoures(anneau, zones) {
        if (!anneau || !zones.length) return [];
        const b = emprise(anneau);
        return zones.filter(z => z.b[0] >= b[0] && z.b[1] >= b[1] && z.b[2] <= b[2] && z.b[3] <= b[3] &&
            z.anneau.every(p => dansAnneau(p[0], p[1], anneau)));
    }

    async function calculerApercu(generation) {
        if (!image || !analyse) return null;
        const t = Date.now();
        let m = masqueAuSeuil(analyse.niveaux, image.W, image.H, opts.tolerance);
        mesurer('seuil', t);
        if (opts.eviter && m.n) {
            const t2 = Date.now();
            const lon = pxVersLon(image.ox + analyse.sx + 0.5, image.z, image.T), lat = pxVersLat(image.oy + analyse.sy + 0.5, image.z, image.T);
            const zones = (zonesClic || []).filter(evite);
            const dedans = zones.find(z => dansAnneau(lon, lat, z.anneau));
            if (dedans) { nomDedans = dedans.nom || ''; return { vide: true, pourquoi: 'inPlace' }; }
            if (acquis && dansAnneau(lon, lat, acquis)) return { vide: true, pourquoi: 'inTraced' };
            // La zone déjà tracée (Alt + clic) n'est PAS un obstacle : ce que le clic atteint en la traversant la
            // touche, et la réunion le recolle (décision de l'auteur, 10/11/2026 : le jeter donnait « trop petite »
            // là où la 0.07.06 ajoutait 2 137 m²).
            if (zones.length) m = exclureAnneaux(m, image, zones.map(z => z.anneau), opts.marge / metresParPx(lat, image.z, image.T), analyse.sx, analyse.sy);
            mesurer('eviter', t2);
        }
        if (m.n < MIN_PIXELS) return { vide: true };
        const c = await contourDepuis(image, m, generation);
        if (!c) return { vide: true };
        if (c.complexe) return c;
        // Au zoom 20, 30 pixels font moins d'un mètre carré : la taille minimale se compte au sol.
        if (c.aire < MIN_M2) return { vide: true };
        c.bord = m.bord;
        // Le bord touché est-il celui de l'écran, ou celui de la fenêtre lue (plus petite que l'écran) ?
        const k = image.coupes || {};
        c.coupe = (m.cotes.o && k.o) || (m.cotes.e && k.e) || (m.cotes.n && k.n) || (m.cotes.s && k.s);
        return c;
    }

    // Un nouveau clic (ou un changement de lissage ou de comparaison) abandonne l'analyse en cours.
    let generationAnalyse = 0;

    async function surClicCarte(lon, lat, ajouter) {
        let dessin = false;
        try { dessin = await sdk.Editing.isDrawingInProgress(); } catch (e) { }
        if (dessin) return;
        // Alt + clic, fenêtre ouverte : la zone proposée est gardée, le nouveau clic s'y ajoute (comme la
        // baguette de Photoshop, où c'est Maj : dans WME, Maj + clic zoome, mesuré le 04/11/2026). Le curseur de tolérance ne règle plus que ce dernier clic. Un clic
        // simple repart de zéro.
        if (ajouter && carte && !carte.hidden && (apercu || acquis)) {
            if (apercu) { acquis = apercu.anneau; nbAcquis = apercu.parties || 1; }
        } else { acquis = null; nbAcquis = 0; }
        const t0 = Date.now();
        const vue = await sdk.Map.getMapViewportElement();
        const tuiles = lireModeleTuiles(vue);
        if (!tuiles || tuiles.inconnu) {
            // Un nouveau clic sans imagerie lisible : l'aperçu précédent ne répond plus à la demande, et
            // une analyse en cours ne doit pas laisser sa barre figée.
            fermerApercu();
            toast(t(tuiles ? 'tileFormat' : 'noImagery'), true);
            return;
        }
        if (!calqueOk) { fermerApercu(); toast(t('previewErr'), true); return; }
        const generation = ++generationAnalyse;
        analyse = null;
        apercu = null;
        raison = null;
        dernierClic = null;
        zonesClic = (await lireLieux() || {}).zones || null;
        doublon = zonesClic ? false : 'inconnu';
        if (generation !== generationAnalyse) return;
        await dessinerApercu(null);
        await montrerCarte();
        etatCarte(t('stRead'), 0);
        const extent = await sdk.Map.getMapExtent();
        // 0.10.00 : l'empilement des imageries fait partie de l'image — une couche allumée ou éteinte sans
        // bouger la carte impose de relire les tuiles.
        const couchesCle = tuiles.couches.map(c => c.modele.replace(/([?&])(session|key)=[^&]*/g, '$1')).join('|');
        const memeImage = image && !image.rates && image.z === tuiles.z && image.extentCle === extent.join(',') &&
            image.couchesCle === couchesCle &&
            lonVersPx(lon, image.z, image.T) - image.ox >= 0 && lonVersPx(lon, image.z, image.T) - image.ox < image.W &&
            latVersPx(lat, image.z, image.T) - image.oy >= 0 && latVersPx(lat, image.z, image.T) - image.oy < image.H;
        if (!memeImage) {
            let img;
            try {
                img = await composer(tuiles.couches, tuiles.z, extent, lon, lat, (fait, total) => {
                    if (generation === generationAnalyse) etatCarte(t('stTiles', fait, total), PART_TUILES * fait / total);
                });
            } catch (e) {
                if (generation !== generationAnalyse) return;
                log('tuiles : ' + e.message);
                // Jeton de session périmé : les tuiles en cache ne servent plus à rien.
                libererImagerie();
                etatCarte(null);
                toast(t('tileErr'), true);
                return;
            }
            if (generation !== generationAnalyse) return;
            image = img;
            image.extentCle = extent.join(',');
            image.couchesCle = couchesCle;
            if (image.rates) log(image.rates + ' tuile(s) illisible(s), zone partielle');
        }
        const t1 = Date.now();
        const sx = Math.floor(lonVersPx(lon, image.z, image.T) - image.ox);
        const sy = Math.floor(latVersPx(lat, image.z, image.T) - image.oy);
        if (sx < 0 || sy < 0 || sx >= image.W || sy >= image.H) { etatCarte(null); toast(t('tileErr'), true); return; }
        dernierClic = { sx, sy };
        await analyser(sx, sy, generation);
        log('clic : imagerie ' + (t1 - t0) + ' ms, analyse ' + (Date.now() - t1) + ' ms (' + image.W + ' × ' + image.H + ' px)');
    }

    async function analyser(sx, sy, generation) {
        etatCarte(t('stColours'), PART_TUILES);
        await pause();
        let a;
        try { a = await preparerAnalyse(image, sx, sy, generation); }
        catch (e) {
            if (e.message === 'abandon' || generation !== generationAnalyse) return;
            // Sans cela, la barre restait figée et « Créer » grisé, sans un mot (audit du 31/10/2026).
            log('analyse : ' + e.message);
            etatCarte(null);
            toast(t('analysisErr'), true);
            return;
        }
        if (generation !== generationAnalyse) return;
        analyse = a;
        etatCarte(null);
        demanderApercu();
    }

    // Lissage ou comparaison changés : les niveaux ne valent plus, on refait l'analyse du même clic.
    // Pendant l'analyse aussi : sinon le réglage changé était ignoré, et l'onglet affichait une valeur
    // qui n'avait pas servi. Pendant la lecture des tuiles, rien à faire : l'analyse lira le réglage.
    function reanalyser() {
        if (!dernierClic || !image) return;
        analyser(dernierClic.sx, dernierClic.sy, ++generationAnalyse).catch(e => log('analyse : ' + e.message));
    }

    // Le curseur ne déclenche pas un calcul par cran : il demande un aperçu, et seul le DERNIER
    // réglage est calculé quand le précédent a fini.
    let apercuEnCours = false, apercuDemande = false;
    function demanderApercu() {
        apercuDemande = true;
        if (apercuEnCours) return;
        apercuEnCours = true;
        (async () => {
            try {
                while (apercuDemande) {
                    apercuDemande = false;
                    await rafraichirApercu();
                    await pause();
                }
            } catch (e) { log('aperçu : ' + e.message); }
            finally { apercuEnCours = false; }
        })();
    }

    // Après chaque attente, la génération est relue : Échap, Annuler ou un nouveau clic pendant le
    // calcul ne doivent pas faire revenir la carte (audit du 31/10/2026).
    async function rafraichirApercu() {
        if (!analyse) return;
        const generation = generationAnalyse;
        mesures = {};
        let c = await calculerApercu(generation);
        if (generation !== generationAnalyse) return;
        if (acquis && image) {
            // Le dernier clic (Alt + clic) est réuni à la zone déjà tracée. S'il ne donne rien, ou ne la
            // touche pas, la zone déjà tracée reste proposée, et la carte dit pourquoi.
            const t = Date.now();
            const u = c && !c.vide && !c.complexe ? unirAnneaux([acquis, c.anneau], image.z, image.T, opts.precision) : null;
            mesurer('reunion', t);
            if (u && u.disjoint && Number.isFinite(u.ecart)) mesures.ecart = Math.round(u.ecart * 10) / 10;
            if (u && u.anneau) c = Object.assign(c, { anneau: u.anneau, n: u.n, aire: u.aire, relache: c.relache || u.relache, parties: nbAcquis + 1 });
            else {
                const pourquoi = c && c.pourquoi ? c.pourquoi : u && u.disjoint ? 'apart' : (u && u.complexe) || (c && c.complexe) ? 'tooComplex' : 'tooSmall';
                c = { anneau: acquis, n: acquis.length, aire: aireM2(acquis), separe: pourquoi, parties: nbAcquis };
            }
        }
        if (!c || c.vide || c.complexe) {
            apercu = null;
            // La raison s'affiche DANS la carte, là où l'éditeur regarde (elle partait en haut, 6 s).
            raison = c && c.complexe ? 'tooComplex' : (c && c.pourquoi) || 'tooSmall';
            doublon = zonesClic ? false : 'inconnu';
            entoures = [];
            await dessinerApercu(null);
            if (generation !== generationAnalyse) return;
            await montrerCarte();
            publierMesures();
            return;
        }
        apercu = c;
        raison = null;
        // Le doublon se juge sur la SURFACE tracée, pas sur le seul point cliqué : un contour peut
        // recouvrir un lieu sans que le clic tombe dedans.
        // Un lieu évité peut être empiété de la marge tolérée, à dessein : ce n'est pas un doublon.
        if (zonesClic) { const b = emprise(c.anneau); doublon = zonesClic.some(z => !evite(z) && recouvre(c.anneau, b, z)); }
        else doublon = 'inconnu';
        entoures = lieuxEntoures(c.anneau, (zonesClic || []).filter(evite));
        mesures.sommets = c.n;
        const t = Date.now();
        await dessinerApercu(c.anneau);
        mesurer('dessin', t);
        if (generation !== generationAnalyse) return;
        await montrerCarte();
        publierMesures();
    }

    // =====================================================================
    //  Guide BD TOPO (0.09.00) — AFFICHAGE SEUL
    //
    //  La BD TOPO (IGN) fait partie des sources accréditées par Waze « pour l'affichage et la
    //  comparaison » (12/11/2026). Elle est donc MONTRÉE sous le tracé, jamais copiée dans un lieu :
    //  aucune fonction du script ne lit ces contours pour créer ou modifier quoi que ce soit.
    //  Trois thèmes utiles aux lieux naturels et bâtis : végétation, eau, bâti. Chargés pour la vue,
    //  à partir du zoom 16 (en deçà, une vue couvre des kilomètres et des milliers d'objets).
    //  ⚠️ WME interdit à la page d'appeler data.geopf.fr : l'appel passe par GM_xmlhttpRequest.
    // =====================================================================
    //  Tirets francs et couleurs vives : le style « dot » d'OpenLayers (1 px tous les 8 px) et un
    //  bâti orange disparaissaient sur la photo aérienne et les toits de tuile (essai WME du 13/11).
    const BDTOPO_THEMES = [
        { cle: 'veg', zmin: 16, type: 'BDTOPO_V3:zone_de_vegetation', style: { strokeColor: '#c6ff00', strokeWidth: 2, strokeOpacity: 1, strokeDashstyle: '6 4', fillOpacity: 0, pointerEvents: 'none' } },
        { cle: 'eau', zmin: 16, type: 'BDTOPO_V3:surface_hydrographique', style: { strokeColor: '#00e5ff', strokeWidth: 2, strokeOpacity: 1, strokeDashstyle: '6 4', fillOpacity: 0, pointerEvents: 'none' } },
        { cle: 'bati', zmin: 17, type: 'BDTOPO_V3:batiment', style: { strokeColor: '#ff40ff', strokeWidth: 1.5, strokeOpacity: 1, strokeDashstyle: '4 3', fillOpacity: 0, pointerEvents: 'none' } }
    ];
    const BDTOPO_ZOOM_MIN = 16, BDTOPO_MAX = 2000;
    const calqueBdTopo = cle => 'wmw-bdtopo-' + cle;
    let bdtopoPoses = false, bdtopoGeneration = 0, bdtopoMinuteur = null;

    /** Les anneaux extérieurs d'un Polygon ou MultiPolygon GeoJSON, en 2D (la BD TOPO a un Z). */
    function anneauxBdTopo(g) {
        if (!g) return [];
        const polys = g.type === 'Polygon' ? [g.coordinates] : g.type === 'MultiPolygon' ? g.coordinates : [];
        return polys.filter(p => p && p[0] && p[0].length >= 4).map(p => p[0].map(c => [c[0], c[1]]));
    }

    function getBdTopo(type, bbox) {
        const url = 'https://data.geopf.fr/wfs/ows?SERVICE=WFS&VERSION=2.0.0&REQUEST=GetFeature&TYPENAMES=' + type +
            '&outputFormat=application/json&count=' + BDTOPO_MAX + '&PROPERTYNAME=geometrie' +
            '&BBOX=' + [bbox[1], bbox[0], bbox[3], bbox[2]].map(v => v.toFixed(6)).join(',') + ',urn:ogc:def:crs:EPSG::4326';
        return new Promise((ok, ko) => {
            if (typeof GM_xmlhttpRequest !== 'function') { ko(new Error('GM_xmlhttpRequest')); return; }
            GM_xmlhttpRequest({ method: 'GET', url, timeout: 30000, anonymous: true,
                onload: r => {
                    if (r.status < 200 || r.status >= 300) { ko(new Error('HTTP ' + r.status)); return; }
                    try {
                        const j = JSON.parse(r.responseText);
                        // Format changé = erreur, jamais « rien ici ».
                        if (!j || !Array.isArray(j.features)) { ko(new Error('format')); return; }
                        ok(j.features);
                    } catch (e) { ko(new Error('JSON')); }
                },
                onerror: () => ko(new Error('réseau')), ontimeout: () => ko(new Error('délai')) });
        });
    }

    function etatBdTopo(texte) { const e = document.getElementById('wmw-bdtopo-etat'); if (e) e.textContent = texte || ''; }

    async function viderBdTopo() {
        for (const th of BDTOPO_THEMES) {
            try { await sdk.Map.removeAllFeaturesFromLayer({ layerName: calqueBdTopo(th.cle) }); } catch (e) { /* calque absent */ }
        }
    }

    async function poserCalquesBdTopo() {
        if (bdtopoPoses) return;
        for (const th of BDTOPO_THEMES) {
            await sdk.Map.addLayer({ layerName: calqueBdTopo(th.cle), styleRules: [{ style: th.style }] });
            // Sous l'aperçu de la baguette (2500) : le guide ne doit jamais masquer le tracé en cours.
            try { await sdk.Map.setLayerZIndex({ layerName: calqueBdTopo(th.cle), zIndex: 2400 }); } catch (e) { /* */ }
        }
        bdtopoPoses = true;
    }

    function planifierGuideBdTopo(delai) {
        clearTimeout(bdtopoMinuteur);
        bdtopoMinuteur = setTimeout(() => { majGuideBdTopo().catch(e => log('BD TOPO : ' + e.message)); }, delai == null ? 700 : delai);
    }

    async function majGuideBdTopo() {
        const gen = ++bdtopoGeneration;
        if (!opts.guideBdTopo) { await viderBdTopo(); etatBdTopo(''); return; }
        const zoom = await sdk.Map.getZoomLevel();
        if (gen !== bdtopoGeneration) return;
        if (zoom < BDTOPO_ZOOM_MIN) { await viderBdTopo(); etatBdTopo(t('bdtopoZoom')); return; }
        const bbox = await sdk.Map.getMapExtent();
        let lots;
        // Le bâti n'est chargé qu'à partir du zoom 17 : mesuré le 12/11 à Saint-Laurent-des-Arbres,
        // 1 135 bâtiments (435 Ko) pour une vue d'environ un kilomètre.
        try { lots = await Promise.all(BDTOPO_THEMES.map(th => zoom >= th.zmin ? getBdTopo(th.type, bbox) : Promise.resolve([]))); }
        catch (e) { if (gen === bdtopoGeneration) etatBdTopo(t('bdtopoErr').replace('{e}', e.message)); return; }
        // La carte a bougé pendant le chargement : seule la dernière demande dessine.
        if (gen !== bdtopoGeneration) return;
        await poserCalquesBdTopo();
        await viderBdTopo();
        let n = 0, trop = false;
        for (let i = 0; i < BDTOPO_THEMES.length; i++) {
            const th = BDTOPO_THEMES[i];
            if (lots[i].length >= BDTOPO_MAX) trop = true;
            const feats = [];
            lots[i].forEach((f, k) => anneauxBdTopo(f && f.geometry).forEach((a, m) => {
                feats.push({ type: 'Feature', id: 'wmw-bdt-' + th.cle + '-' + k + '-' + m, geometry: { type: 'LineString', coordinates: a }, properties: {} });
            }));
            if (feats.length) await ajouterSansValidation(calqueBdTopo(th.cle), feats);
            n += feats.length;
        }
        etatBdTopo(t('bdtopoEtat').replace('{n}', String(n)) + (trop ? ' — ' + t('bdtopoTrop') : ''));
    }

    async function poserCalques() {
        try {
            await sdk.Map.addLayer({
                layerName: CALQUE_APERCU,
                styleRules: [{ style: { fillColor: '#2196f3', fillOpacity: 0.18, strokeColor: '#1565c0', strokeWidth: 2.5, strokeOpacity: 1, strokeDashstyle: 'dash', pointerEvents: 'none' } }]
            });
            await sdk.Map.addLayer({
                layerName: CALQUE_SURLIGNAGE,
                styleRules: [{ style: { fillColor: '#FFD38D', fillOpacity: 0.35, strokeColor: '#FFC138', strokeWidth: 3, strokeOpacity: 1, pointerEvents: 'none' } }]
            });
            calqueOk = true;
            for (const n of [CALQUE_SURLIGNAGE, CALQUE_APERCU]) {
                try { await sdk.Map.setLayerZIndex({ layerName: n, zIndex: 2500 }); } catch (e) { logUneFois('z-' + n, 'calque ' + n + ' : ' + e.message); }
            }
        } catch (e) { log('calques : ' + e.message); }
    }

    // Le SDK valide chaque polygone qu'on lui confie, et cette validation croît comme le CARRÉ du
    // nombre de sommets (mesuré dans WME le 31/10 : 147 ms à 2000 sommets, plusieurs secondes au-delà
    // de 5000) — c'était elle qui figeait la page à chaque cran du curseur. Les contours de l'aperçu
    // sont déjà vérifiés par anneauValide : on passe par la voie sans validation (5 ms), et par la voie
    // normale seulement si une version du SDK ne l'offrait plus.
    async function ajouterSansValidation(calque, features) {
        if (typeof sdk.Map.dangerouslyAddFeaturesToLayerWithoutValidation === 'function') {
            await sdk.Map.dangerouslyAddFeaturesToLayerWithoutValidation({ layerName: calque, features });
        } else {
            logUneFois('sans-validation', 'dangerouslyAddFeaturesToLayerWithoutValidation absente : aperçu validé par le SDK, plus lent');
            await sdk.Map.addFeaturesToLayer({ layerName: calque, features });
        }
    }

    // Les dessins passent un par un, dans l'ordre des appels : deux dessins concurrents (curseur et
    // geste, ou un aperçu et sa fermeture) laissaient sinon un contour fantôme sur le calque.
    let fileDessin = Promise.resolve();
    function dessinerApercu(anneauOuvert) {
        fileDessin = fileDessin.then(() => dessinerMaintenant(anneauOuvert), () => dessinerMaintenant(anneauOuvert));
        return fileDessin;
    }
    async function dessinerMaintenant(anneauOuvert) {
        if (!calqueOk) return;
        try {
            await sdk.Map.removeAllFeaturesFromLayer({ layerName: CALQUE_APERCU });
            if (!anneauOuvert) return;
            await ajouterSansValidation(CALQUE_APERCU, [
                { type: 'Feature', id: 'wmw-apercu', geometry: { type: 'Polygon', coordinates: [fermer(anneauOuvert)] }, properties: {} }
            ]);
        } catch (e) { logUneFois('apercu', 'aperçu : ' + e.message); }
    }

    // =====================================================================
    //  La carte d'aperçu, en bas de la carte
    // =====================================================================

    let carte = null;
    let cible = null;             // { id, nom } : le lieu de type zone dont le contour peut être remplacé
    let cibleClic = null;         // le lieu sélectionné à l'appui du dernier clic de baguette
    let categories = [];          // [{id, localizedName}], triées

    async function lireCategories() {
        try {
            const l = await sdk.DataModel.Venues.getAllVenueCategories();
            const coll = new Intl.Collator(_lang);
            categories = (l || []).filter(c => c && c.id).sort((a, b) => coll.compare(String(a.localizedName || a.id), String(b.localizedName || b.id)));
        } catch (e) { log('catégories : ' + e.message); categories = []; }
        if (categories.length && !categories.some(c => c.id === opts.categorie)) opts.categorie = categories.some(c => c.id === OPTS_DEFAUT.categorie) ? OPTS_DEFAUT.categorie : categories[0].id;
    }

    // Liste de base, sauf option : la catégorie déjà choisie y reste même si elle n'en est pas (un
    // réglage ne doit pas changer en silence parce que la liste a raccourci).
    // Si WME renommait ces identifiants, la liste de base serait vide : on retombe sur la liste entière.
    function categoriesProposees() {
        if (opts.toutesCategories) return categories;
        const l = categories.filter(c => CATS_BASE.includes(c.id) || c.id === opts.categorie);
        return l.some(c => CATS_BASE.includes(c.id)) ? l : categories;
    }
    const optionsCategories = () => categoriesProposees().map(c => '<option value="' + escHtml(c.id) + '"' + (c.id === opts.categorie ? ' selected' : '') + '>' + escHtml(c.localizedName || c.id) + '</option>').join('');

    const nombre = (v, d) => new Intl.NumberFormat(_lang, { maximumFractionDigits: d }).format(v);
    function texteAire(m2) {
        const nb = (v, d) => new Intl.NumberFormat(_lang, { maximumFractionDigits: d, minimumFractionDigits: d }).format(v);
        if (imperial) {
            const ft2 = m2 * 10.7639;
            return ft2 < 43560 ? nb(ft2, 0) + ' ft²' : nb(ft2 / 43560, ft2 < 435600 ? 2 : 1) + ' ac';
        }
        return m2 < 10000 ? nb(m2, 0) + ' m²' : nb(m2 / 10000, m2 < 100000 ? 2 : 1) + ' ha';
    }
    let imperial = false;
    async function lireUnite() {
        try { imperial = !!(await sdk.Settings.getUserSettings()).isImperial; } catch (e) { logUneFois('unite', 'unité des réglages illisible, mètres par défaut : ' + e.message); }
    }

    // Ce que la baguette est en train de faire (lecture des tuiles, analyse), dans la carte : sans ce
    // signe de vie, l'attente ressemblait à un plantage. null efface la ligne.
    // `part` (0…1) remplit la barre : les tuiles comptent pour PART_TUILES (le réseau domine le premier
    // clic), la comparaison des couleurs pour le reste. La barre ne recule jamais pendant un même clic.
    const PART_TUILES = 0.7;
    let partAffichee = 0;
    function etatCarte(texte, part) {
        const e = carte && carte.querySelector('.wmw-pv-etat');
        if (!e) return;
        e.hidden = !texte;
        if (!texte) { partAffichee = 0; return; }
        const p = Math.max(part === 0 ? 0 : partAffichee, Math.min(1, Number(part) || 0));
        partAffichee = p;
        const pc = Math.round(p * 100);
        e.querySelector('.wmw-pv-etat-t').textContent = texte;
        const barre = e.querySelector('.wmw-pv-barre');
        barre.setAttribute('aria-valuenow', String(pc));
        const pcTexte = new Intl.NumberFormat(_lang, { style: 'percent' }).format(pc / 100);
        barre.setAttribute('aria-valuetext', texte + ' ' + pcTexte);
        e.querySelector('.wmw-pv-etat-p').textContent = pcTexte;
        barre.firstChild.style.width = pc + '%';
    }

    function construireCarte() {
        carte = document.createElement('div');
        carte.id = CARTE_ID;
        // Une région, pas un dialogue : le focus reste sur la carte de WME pendant le glisser du curseur.
        carte.setAttribute('role', 'region');
        carte.setAttribute('aria-label', t('pvTitle'));
        carte.hidden = true;
        coucheScript().appendChild(carte);
        // En-tête déplaçable (charte de la collection) : la position se retient au relâchement ; un
        // double-clic la rend au placement automatique.
        carte.addEventListener('mousedown', e => {
            const tete = e.target.closest('.wmw-pv-tete');
            if (!tete || e.button !== 0 || e.target.closest('button')) return;
            e.preventDefault();
            const r = carte.getBoundingClientRect(), ox = e.clientX - r.left, oy = e.clientY - r.top;
            const mv = ev => poserCarte(ev.clientX - ox, ev.clientY - oy);
            const up = () => {
                document.removeEventListener('mousemove', mv); document.removeEventListener('mouseup', up);
                const rr = carte.getBoundingClientRect();
                try { localStorage.setItem(CLE_POS_CARTE, JSON.stringify({ x: Math.round(rr.left), y: Math.round(rr.top) })); } catch (er) { }
            };
            document.addEventListener('mousemove', mv); document.addEventListener('mouseup', up);
        });
        carte.addEventListener('dblclick', e => {
            if (!e.target.closest('.wmw-pv-tete') || e.target.closest('button')) return;
            try { localStorage.removeItem(CLE_POS_CARTE); } catch (er) { }
            placerCarte();
        });
        carte.addEventListener('input', ev => {
            const el = ev.target;
            if (el.id === 'wmw-pv-tol') {
                opts.tolerance = Number(el.value);
                const v = carte.querySelector('#wmw-pv-tol-v');
                if (v) v.textContent = String(opts.tolerance);
                const s = document.getElementById('wmw-tolerance');
                if (s) { s.value = String(opts.tolerance); const sv = document.getElementById('wmw-tolerance-v'); if (sv) sv.textContent = String(opts.tolerance); }
                ecrireOpts();
                demanderApercu();
            }
        });
        carte.addEventListener('change', ev => {
            if (ev.target.id === 'wmw-pv-cat') { opts.categorie = ev.target.value; ecrireOpts(); const s = document.getElementById('wmw-categorie'); if (s) s.value = opts.categorie; demanderApercu(); }
        });
        carte.addEventListener('click', ev => {
            const b = ev.target.closest('[data-wmw-pv]');
            if (!b || b.disabled) return;
            const q = b.getAttribute('data-wmw-pv');
            if (q === 'creer') creerLieu().catch(e => log('création : ' + e.message));
            else if (q === 'remplacer') remplacerContour().catch(e => log('remplacement : ' + e.message));
            else if (q === 'agrandir') agrandirLieu().catch(e => log('agrandissement : ' + e.message));
            else if (q === 'maj') window.open(URL_INSTALLER, '_blank', 'noopener');
            else fermerApercu();
        });
    }

    // La carte est construite une fois par ouverture, puis seuls ses chiffres, son alerte et l'état
    // du bouton changent : la reconstruire à chaque cran du curseur de tolérance arrachait le
    // curseur de sous le pointeur en plein glisser.
    async function montrerCarte() {
        if (!carte) construireCarte();
        await lireUnite();
        if (carte.hidden || !carte.querySelector('#wmw-pv-tol')) {
            carte.dir = _lang === 'he' ? 'rtl' : 'ltr';
            carte.innerHTML =
                '<div class="wmw-pv-tete" title="' + escHtml(t('dragTip')) + '"><span class="wmw-pv-titre"><span class="wmw-pv-ico">' + icone(16) + '</span>' +
                SCRIPT_NAME + ' <span class="wmw-pv-v">v' + escHtml(VERSION) + '</span></span>' +
                '<span class="wmw-pv-btns"><button type="button" class="wmw-pv-x wmw-pv-maj" data-wmw-pv="maj" hidden>' + ICONE_MAJ + '</button>' +
                '<button type="button" class="wmw-pv-x" data-wmw-pv="annuler" title="' + escHtml(t('btnCancel')) + '" aria-label="' + escHtml(t('btnCancel')) + '">&#x2715;</button></span></div>' +
                '<div class="wmw-pv-corps"><div class="wmw-pv-sous"><span class="wmw-pv-stats" role="status"></span></div>' +
                '<div class="wmw-pv-etat" hidden><div class="wmw-pv-etat-l"><span class="wmw-pv-etat-t"></span><span class="wmw-pv-etat-p"></span></div>' +
                '<div class="wmw-pv-barre" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" aria-label="' + escHtml(t('pvTitle')) + '"><span></span></div></div>' +
                '<p class="wmw-pv-alerte" role="alert" hidden></p>' +
                '<div class="wmw-pv-ligne"><label for="wmw-pv-tol">' + t('lblTol') + '</label>' +
                '<input type="range" id="wmw-pv-tol" min="' + BORNES.tolerance[0] + '" max="' + BORNES.tolerance[1] + '" step="' + BORNES.tolerance[2] + '" value="' + opts.tolerance + '">' +
                '<output id="wmw-pv-tol-v" for="wmw-pv-tol">' + opts.tolerance + '</output></div>' +
                '<div class="wmw-pv-ligne"><select id="wmw-pv-cat" aria-label="' + escHtml(t('lblCat')) + '">' + optionsCategories() + '</select></div>' +
                '<button type="button" class="wmw-btn-sec wmw-pv-remplacer" data-wmw-pv="remplacer" hidden></button>' +
                '<button type="button" class="wmw-btn-sec wmw-pv-remplacer" data-wmw-pv="agrandir" hidden></button>' +
                '<p class="wmw-pv-quota" data-wmw-quota="long">' + escHtml(texteQuota(false)) + '</p>' +
                '<p class="wmw-pv-astuce">' + escHtml(t('hintAdd')) + '</p>' +
                '<div class="wmw-pv-boutons"><button type="button" class="wmw-btn-sec" data-wmw-pv="annuler">' + t('btnCancel') + ' <kbd>' + t('kEsc') + '</kbd></button>' +
                '<button type="button" class="wmw-btn" data-wmw-pv="creer">' + t('btnCreate') + ' <kbd>&#x21B5;</kbd></button></div></div>';
            carte.hidden = false;
            majRendre();
        }
        const ok = !!apercu;
        const stats = carte.querySelector('.wmw-pv-stats');
        let texte = ok ? t('pvStats', nombre(apercu.n, 0), texteAire(apercu.aire)) : '';
        // Clics réunis (Alt + clic) : celui qui n'a rien ajouté ne compte pas.
        if (ok && apercu.parties > 1) texte += ' · ' + t('pvParts', nombre(apercu.parties, 0));
        if (ok && image) {
            // Taille au sol d'un pixel de l'imagerie lue : la finesse possible du contour. Affichée
            // (« ± x m ») : au zoom 13, un contour grossier s'expliquait sans qu'on le voie (audit, lot 9).
            const m = 2 * Math.PI * R_TERRE * Math.cos(apercu.anneau[0][1] * Math.PI / 180) / (image.T * Math.pow(2, image.z));
            const dist = imperial ? nombre(m * 3.28084, m * 3.28084 < 10 ? 1 : 0) + ' ft' : nombre(m, m < 1 ? 2 : m < 10 ? 1 : 0) + ' m';
            texte += ' · ± ' + dist;
            stats.title = t('groundPx', dist);
        }
        if (stats.textContent !== texte) stats.textContent = texte;
        // Avertissements, jamais des verrous : « Créer » reste disponible.
        const alertes = [];
        if (!ok && raison) alertes.push(t(raison, nomDedans));
        if (ok && apercu.separe) alertes.push(t(apercu.separe, nomDedans));
        if (ok && apercu.bord) alertes.push(t(apercu.coupe ? 'edgeCut' : 'edge'));
        // dernierClic : l'image est bien celle de ce clic (au premier affichage, c'est encore la précédente).
        if (dernierClic && image && image.rates) alertes.push(t('tilesMissing'));
        if (ok && apercu.fermeture) alertes.push(t('closedGaps'));
        if (ok && apercu.relache) alertes.push(t('relaxed', nombre(MAX_SOMMETS, 0)));
        if (doublon === 'inconnu') alertes.push(t('dupeUnknown'));
        else if (doublon) alertes.push(t('dupe'));
        if (ok && entoures.length) alertes.push(t('surrounds', entoures.length, (entoures.find(z => z.nom) || {}).nom || ''));
        const al = carte.querySelector('.wmw-pv-alerte');
        const cleAl = alertes.join('|');
        if (al.getAttribute('data-txt') !== cleAl) {
            al.innerHTML = alertes.map(a => '<span>&#x26A0;&#xFE0F; ' + escHtml(a) + '</span>').join('');
            al.setAttribute('data-txt', cleAl);
        }
        al.hidden = !alertes.length;
        carte.querySelector('[data-wmw-pv="creer"]').disabled = !ok;
        // Un seul lieu de type zone sélectionné : son contour peut être remplacé par celui tracé.
        // Bouton SECONDAIRE : Entrée crée toujours (un seul bouton plein, consigne de l'auteur).
        const rp = carte.querySelector('[data-wmw-pv="remplacer"]');
        // Le lieu sélectionné maintenant, sinon celui qui l'était à l'appui du clic de baguette.
        const v = ok ? await lieuSelectionne() : null;
        cible = !ok ? null : v && v.geometry.type === 'Polygon' ? { id: String(v.id), nom: String(v.name || '').trim() } : cibleClic;
        if (rp && carte.contains(rp)) {
            const txt = cible ? (cible.nom ? t('btnReplace', cible.nom) : t('btnReplaceAnon')) : '';
            if (rp.textContent !== txt) { rp.textContent = txt; rp.title = txt; }
            rp.hidden = !cible;
        }
        // Agrandir : le même lieu reçoit la zone tracée EN PLUS de son contour (ils doivent se toucher).
        const ag = carte.querySelector('[data-wmw-pv="agrandir"]');
        if (ag) {
            const txt = cible ? (cible.nom ? t('btnExtend', cible.nom) : t('btnExtendAnon')) : '';
            if (ag.textContent !== txt) { ag.textContent = txt; ag.title = txt; }
            ag.hidden = !cible;
        }
        placerCarte();
    }

    // Centrée en bas de la carte, au-dessus de la barre d'état : elle ne cache pas la zone cliquée,
    // qui est le plus souvent au milieu de l'écran.
    const CLE_POS_CARTE = 'wmw.carte.pos';
    // La zone permise : la carte, à gauche de la colonne de boutons et au-dessus de son pied (charte).
    function bornesCarte() {
        const vue = document.getElementById('WazeMap') || document.querySelector('.olMapViewport');
        const pied = document.querySelector('.wz-map-ol-footer');
        const btns = document.querySelector('.overlay-buttons-container.top') || document.querySelector('.overlay-buttons-container');
        const r = vue ? vue.getBoundingClientRect() : { left: 0, top: 40, right: window.innerWidth, bottom: window.innerHeight };
        const rb = btns ? btns.getBoundingClientRect() : null;
        return {
            gauche: Math.round(r.left) + 6, haut: Math.round(r.top) + 6,
            droite: Math.round(rb && rb.width ? rb.left - 8 : r.right - 8),
            bas: Math.round(pied && pied.getBoundingClientRect().height ? pied.getBoundingClientRect().top - 6 : r.bottom - 6),
        };
    }
    function poserCarte(x, y) {
        const z = bornesCarte(), w = carte.offsetWidth, h = carte.offsetHeight;
        carte.style.bottom = '';
        carte.style.left = Math.round(Math.max(z.gauche, Math.min(x, z.droite - w))) + 'px';
        carte.style.top = Math.round(Math.max(z.haut, Math.min(y, z.bas - h))) + 'px';
    }
    async function placerCarte() {
        if (!carte || carte.hidden) return;
        // Déplacée par l'éditeur : elle reste où il l'a mise (ramenée dans la carte si celle-ci a rétréci).
        let memo = null;
        try { memo = JSON.parse(localStorage.getItem(CLE_POS_CARTE) || 'null'); } catch (e) { }
        if (memo && Number.isFinite(memo.x) && Number.isFinite(memo.y)) { poserCarte(memo.x, memo.y); return; }
        let r = null;
        try { r = (await sdk.Map.getMapViewportElement()).getBoundingClientRect(); } catch (e) { }
        if (!r) r = { left: 0, width: window.innerWidth, bottom: window.innerHeight };
        const w = carte.offsetWidth, zb = bornesCarte();
        carte.style.left = Math.max(zb.gauche, Math.min(Math.round(r.left + (r.width - w) / 2), zb.droite - w)) + 'px';
        // Ancrée par le BAS : la ligne d'état qui apparaît pendant l'analyse la fait grandir vers le
        // haut, sans faire sauter les boutons sous le pointeur (ancrée par le haut, ils bougeaient de 30 px).
        carte.style.top = '';
        carte.style.bottom = Math.max(8, Math.round(window.innerHeight - r.bottom + 44)) + 'px';
        // La zone tracée descend sous la carte : celle-ci passe en haut de la vue.
        if (!apercu) return;
        try {
            const lons = apercu.anneau.map(p => p[0]), lats = apercu.anneau.map(p => p[1]);
            const bas = await sdk.Map.getPixelFromLonLat({ lonLat: { lon: (Math.min(...lons) + Math.max(...lons)) / 2, lat: Math.min(...lats) } });
            const rc = carte.getBoundingClientRect();
            if (bas && bas.y > rc.top) { carte.style.bottom = ''; carte.style.top = Math.round(r.top + 60) + 'px'; }
        } catch (e) { logUneFois('carte-haut', 'position de la zone illisible : ' + e.message); }
    }

    // La fenêtre vit dans une COUCHE posée dans la zone de carte de WME (.edit-area-main, niveau 1), pas sur
    // <body> : sur <body>, elle recouvrait le panneau « Calques » de WME (charte de la collection, mesuré sur
    // WRP le 15/10/2026). La couche est de taille nulle : elle ne prend aucun clic. Sans cette zone (WME
    // changé), repli sur <body>.
    function coucheScript() {
        const zone = document.querySelector('div.edit-area-main');
        if (!zone) return document.body;
        let c = document.getElementById('wmw-couche');
        if (!c) {
            c = document.createElement('div');
            c.id = 'wmw-couche';
            c.style.cssText = 'position:absolute;top:0;left:0;width:0;height:0;z-index:1';
        }
        if (c.parentElement !== zone) zone.appendChild(c);
        return c;
    }

    // Ferme l'aperçu ET arrête l'analyse en cours : sans cela, Échap ou Annuler pendant la lecture des
    // tuiles laissaient le calcul finir, et la carte revenait seule avec « Créer » actif (audit 31/10).
    function fermerApercu() {
        generationAnalyse++;
        apercuDemande = false;
        apercu = null;
        analyse = null;
        dernierClic = null;
        doublon = false;
        zonesClic = [];
        raison = null;
        cible = null;
        acquis = null;
        nbAcquis = 0;
        etatCarte(null);
        const avaitFocus = !!(carte && carte.contains(document.activeElement));
        if (carte) carte.hidden = true;
        dessinerApercu(null);
        if (avaitFocus) rendreFocus();
    }

    // Le focus était dans la carte qui disparaît : il revient au bouton de la baguette, pas au <body>.
    function rendreFocus() {
        for (const el of [document.getElementById(FAB_ID), document.getElementById('wmw-sb-baguette')]) {
            if (el && el.offsetParent) { el.focus(); return; }
        }
    }

    // Les lieux chargés dans WME : ceux de type zone avec leur emprise, et les points. De quoi dire si
    // un contour ou une copie en recouvre un. null : lecture échouée — on ne conclut alors JAMAIS
    // « pas de doublon ».
    async function lireLieux() {
        let lieux;
        try { lieux = await sdk.DataModel.Venues.getAll(); }
        catch (e) { logUneFois('doublon', 'lieux illisibles, contrôle de doublon indisponible : ' + e.message); return null; }
        const zones = [], points = [];
        for (const v of lieux || []) {
            const g = v && v.geometry;
            if (!g || !g.coordinates) continue;
            if (g.type === 'Polygon' && g.coordinates[0]) { const a = ouvrir(g.coordinates[0]); zones.push({ id: String(v.id), anneau: a, b: emprise(a), nom: String(v.name || '').trim(), cats: (v.categories || []).slice() }); }
            else if (g.type === 'Point') points.push({ id: String(v.id), p: g.coordinates });
        }
        return { zones, points };
    }
    const emprise = a => {
        let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
        for (const [x, y] of a) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
        return [x0, y0, x1, y1];
    };
    // Deux anneaux ouverts (a et la zone z) se recouvrent-ils ? Un sommet de l'un dans l'autre, ou deux
    // arêtes qui se croisent : deux formes en croix n'ont aucun sommet l'une dans l'autre. Se toucher
    // par un bord compte : un voisin collé mérite d'être regardé avant de créer.
    function recouvre(a, ba, z) {
        const bb = z.b, b = z.anneau;
        if (ba[0] > bb[2] || bb[0] > ba[2] || ba[1] > bb[3] || bb[1] > ba[3]) return false;
        if (a.some(p => dansAnneau(p[0], p[1], b)) || b.some(p => dansAnneau(p[0], p[1], a))) return true;
        for (let i = 0; i < a.length; i++) {
            const p = a[i], q = a[(i + 1) % a.length];
            if (Math.max(p[0], q[0]) < bb[0] || Math.min(p[0], q[0]) > bb[2] || Math.max(p[1], q[1]) < bb[1] || Math.min(p[1], q[1]) > bb[3]) continue;
            for (let j = 0; j < b.length; j++) if (segmentsSeCoupent(p, q, b[j], b[(j + 1) % b.length])) return true;
        }
        return false;
    }

    // Avant toute écriture : le plafond horaire laisse-t-il passer ce lieu (null : un lieu à créer) ?
    // Sinon, le message, et rien n'est écrit.
    function quotaPermet(vid) {
        if (peutEcrire(vid, Date.now())) return true;
        const e = etatQuota(Date.now());
        toast(e.altere ? t('quotaBlocked') : t('quotaFull', heureLocale(e.libre)), true);
        majQuota();
        return false;
    }
    // Le reste du plafond, affiché en permanence : onglet, fenêtre de la baguette, barre des outils.
    function texteQuota(court) {
        const e = etatQuota(Date.now());
        if (e.altere) return court ? '0/' + nombre(e.max, 0) : t('quotaBlocked');
        return t(court ? 'quotaShort' : 'quotaLeft', nombre(e.reste, 0), nombre(e.max, 0));
    }
    function majQuota() {
        const e = etatQuota(Date.now());
        const bas = e.altere || e.reste <= Math.ceil(e.max / 10);
        for (const el of document.querySelectorAll('[data-wmw-quota]')) {
            const txt = texteQuota(el.getAttribute('data-wmw-quota') === 'court');
            if (el.textContent !== txt) el.textContent = txt;
            el.title = t('quotaTip');
            el.classList.toggle('wmw-quota-bas', bas);
        }
    }

    // Baguette éteinte : rien ne se crée. Verrou : une 2e Entrée ou un clic sur « Créer » pendant
    // addVenue ne crée pas un second lieu.
    let creationEnCours = false;
    async function creerLieu() {
        if (!apercu || !baguetteActive || creationEnCours) return;
        creationEnCours = true;
        try { await creerLieuMaintenant(); } finally { creationEnCours = false; }
    }
    async function creerLieuMaintenant() {
        const geometrie = { type: 'Polygon', coordinates: [fermer(apercu.anneau)] };
        if (!quotaPermet(null)) return;
        let id;
        try {
            id = await sdk.DataModel.Venues.addVenue({ category: opts.categorie, geometry: geometrie });
        } catch (e) {
            toast(t('createErr', e.message), true);
            log('addVenue : ' + e.message);
            return;
        }
        compterEdition(id, Date.now());
        majQuota();
        fermerApercu();
        // 0.08.01 — Le verrou choisi dans l'onglet (demande d'un éditeur, 11/11/2026 : lacs et rivières au niveau 3),
        // plafonné au rang de l'éditeur : WME refuse un verrou au-dessus. Même lieu : rien de plus au quota.
        let erreurVerrou = '';
        if (opts.verrou > 0) {
            let rang = 0;
            try { const u = await sdk.State.getUserInfo(); rang = u && Number.isFinite(u.rank) ? u.rank : 0; } catch (e) { }
            const niveau = Math.min(opts.verrou - 1, rang);
            try { await sdk.DataModel.Venues.updateVenue({ venueId: String(id), lockRank: niveau }); }
            catch (e) { erreurVerrou = e.message; log('verrou : ' + e.message); }
        }
        // addVenue rend un nombre (négatif tant que le lieu n'est pas enregistré) ; toutes les
        // autres méthodes veulent une chaîne.
        try { await sdk.Editing.setSelection({ selection: { ids: [String(id)], objectType: 'venue' } }); } catch (e) { log('sélection : ' + e.message); }
        toast(erreurVerrou ? t('lockErr', erreurVerrou) : t('created'), !!erreurVerrou);
    }

    // Le contour tracé remplace celui du lieu sélectionné (ses catégories, son nom, ses horaires
    // restent). Le lieu est relu au clic : la sélection a pu changer depuis l'affichage du bouton.
    async function remplacerContour() {
        if (!apercu || !baguetteActive || creationEnCours || !cible) return;
        creationEnCours = true;
        try {
            // Relu par son id : il n'est plus forcément sélectionné (le clic de baguette l'a désélectionné).
            let v = null;
            try { v = await sdk.DataModel.Venues.getById({ venueId: cible.id }); } catch (e) { }
            if (!v || !v.geometry || v.geometry.type !== 'Polygon') { toast(t('noPlace'), true); return; }
            if (await ecrireGeometrie(v, [fermer(apercu.anneau)])) {
                fermerApercu();
                try { await sdk.Editing.setSelection({ selection: { ids: [String(v.id)], objectType: 'venue' } }); } catch (e) { log('sélection : ' + e.message); }
                toast(t('replaced'));
            }
        } finally { creationEnCours = false; }
    }

    // La zone tracée est réunie au contour du lieu choisi (catégories, nom, horaires restent). Ils
    // doivent se toucher ou se recouvrir : sinon, rien n'est écrit. Le contour réuni est retracé à la
    // finesse de la baguette (unirAnneaux) : ses sommets d'origine ne sont pas gardés tels quels.
    async function agrandirLieu() {
        if (!apercu || !baguetteActive || creationEnCours || !cible || !image) return;
        creationEnCours = true;
        try {
            let v = null;
            try { v = await sdk.DataModel.Venues.getById({ venueId: cible.id }); } catch (e) { }
            if (!v || !v.geometry || v.geometry.type !== 'Polygon') { toast(t('noPlace'), true); return; }
            const anneauLieu = ouvrir(v.geometry.coordinates[0]);
            const u = unirAnneaux([anneauLieu, apercu.anneau], image.z, image.T, opts.precision);
            // Diagnostic (data-wmw-mesures) : ce que la réunion a rendu, et sur quoi.
            try {
                document.documentElement.setAttribute('data-wmw-agrandir', JSON.stringify({ z: image.z, T: image.T, tol: opts.precision,
                    lieu: anneauLieu.length, trace: apercu.anneau.length, rendu: u ? Object.keys(u) : null, ecart: u && u.ecart, k: u && u.k }));
            } catch (e) { }
            if (!u || u.disjoint) { toast(t('extendApart'), true); return; }
            if (u.complexe) { toast(t('tooComplex'), true); return; }
            if (await ecrireGeometrie(v, [fermer(u.anneau)])) {
                fermerApercu();
                try { await sdk.Editing.setSelection({ selection: { ids: [String(v.id)], objectType: 'venue' } }); } catch (e) { log('sélection : ' + e.message); }
                toast(t('extended'));
            }
        } finally { creationEnCours = false; }
    }

    // =====================================================================
    //  Outils de forme sur le lieu sélectionné
    // =====================================================================

    async function lieuSelectionne() {
        let sel;
        try { sel = await sdk.Editing.getSelection(); } catch (e) { return null; }
        if (!sel || sel.objectType !== 'venue' || !sel.ids || sel.ids.length !== 1) return null;
        try {
            const v = await sdk.DataModel.Venues.getById({ venueId: String(sel.ids[0]) });
            return v && v.geometry ? v : null;
        } catch (e) { return null; }
    }

    async function ecrireGeometrie(v, coords) {
        if (!quotaPermet(v.id)) return false;
        try {
            await sdk.DataModel.Venues.updateVenue({ venueId: String(v.id), geometry: { type: 'Polygon', coordinates: coords } });
            compterEdition(v.id, Date.now());
            majQuota();
            return true;
        } catch (e) {
            toast(t('editErr', e.message), true);
            log('updateVenue : ' + e.message);
            return false;
        }
    }

    // Le lieu sélectionné, ou un message : les outils et leurs raccourcis restaient muets sans lieu
    // (les raccourcis contournent le grisage de la barre).
    async function lieuOuMessage(polygoneExige) {
        const v = await lieuSelectionne();
        if (!v) {
            // Plusieurs lieux sélectionnés : Pivoter et Redimensionner n'en traitent qu'un (un geste).
            let n = 0;
            try { const s = await sdk.Editing.getSelection(); n = s && s.objectType === 'venue' && s.ids ? s.ids.length : 0; } catch (e) { }
            toast(t(n > 1 ? 'oneOnly' : 'noPlace'), true);
            return null;
        }
        if (polygoneExige && v.geometry.type !== 'Polygon') { toast(t('tipPointOnly'), true); return null; }
        return v;
    }

    // Chaque outil existe en deux temps : un CŒUR qui traite un lieu et rend son état
    // ({ etat: 'ok' | 'rien' | 'invalide' | 'refus' | 'point', id?, msg? }), sans rien afficher, et
    // un appel qui choisit le message — pour un lieu seul, ou le bilan d'un lot.

    // La place d'une copie, À CÔTÉ de l'original et sans rien recouvrir. Un lieu de type zone est décalé
    // de la largeur (ou de la hauteur) de son emprise plus MARGE_CLONE, vers l'est, sinon le nord,
    // l'ouest, le sud : la copie ne touche jamais l'original. La première place qui ne recouvre aucun
    // lieu de type zone (voisin, ou copie déjà posée par le même lot) est retenue. Un lieu point est
    // décalé en diagonale de DECALAGE_CLONE, loin de tout autre point (RAYON_POINT_CLONE).
    // null : aucune place libre.
    function placeClone(v, lieux) {
        const g = v.geometry;
        const decale = (dx, dy) => ([lon, lat]) => { const [x, y] = versMerc(lon, lat); return deMerc(x + dx, y + dy); };
        if (g.type === 'Point') {
            const d = DECALAGE_CLONE;
            for (const [sx, sy] of [[1, 1], [-1, 1], [-1, -1], [1, -1]]) {
                const p = decale(sx * d, sy * d)(g.coordinates), [px, py] = versMerc(p[0], p[1]);
                if (!lieux.points.some(o => { const [ox, oy] = versMerc(o.p[0], o.p[1]); return Math.hypot(ox - px, oy - py) < RAYON_POINT_CLONE; }))
                    return { type: 'Point', coordinates: p };
            }
            return null;
        }
        const bm = emprise(ouvrir(g.coordinates[0]).map(([lon, lat]) => versMerc(lon, lat)));
        const w = bm[2] - bm[0] + MARGE_CLONE, h = bm[3] - bm[1] + MARGE_CLONE;
        for (const [dx, dy] of [[w, 0], [0, h], [-w, 0], [0, -h]]) {
            const coords = g.coordinates.map(a => a.map(decale(dx, dy)));
            const a = ouvrir(coords[0]), b = emprise(a);
            if (!lieux.zones.some(z => recouvre(a, b, z))) return { type: 'Polygon', coordinates: coords };
        }
        return null;
    }

    // Une copie n'a ni nom ni adresse, et garde le verrou par défaut de WME pour un lieu neuf (celui
    // de l'original n'est pas recopié) : une ébauche à compléter, comme un lieu tracé à la main.
    // ctx.lieux : les lieux lus une fois pour tout le lot, complétés des copies posées.
    async function clonerUn(v, ctx) {
        if (ctx.lieux === undefined) ctx.lieux = await lireLieux();
        if (!ctx.lieux) return { etat: 'inconnu' };
        if (!peutEcrire(null, Date.now())) return { etat: 'quota' };
        const g = placeClone(v, ctx.lieux);
        if (!g) return { etat: 'occupe' };
        const cats = (v.categories || []).slice();
        let id;
        try {
            id = await sdk.DataModel.Venues.addVenue({ category: cats[0] || opts.categorie, geometry: g });
        } catch (e) { log('clone : ' + e.message); return { etat: 'refus', msg: e.message }; }
        compterEdition(id, Date.now());
        if (g.type === 'Point') ctx.lieux.points.push({ id: String(id), p: g.coordinates });
        else { const a = ouvrir(g.coordinates[0]); ctx.lieux.zones.push({ id: String(id), anneau: a, b: emprise(a) }); }
        // Le clone existe : un refus sur ses autres catégories ne doit pas le faire passer pour refusé.
        if (cats.length > 1) {
            try { await sdk.DataModel.Venues.updateVenue({ venueId: String(id), categories: cats }); }
            catch (e) { log('clone, catégories : ' + e.message); return { etat: 'ok', id: String(id), msg: e.message }; }
        }
        return { etat: 'ok', id: String(id) };
    }

    async function ecrireCoeur(v, coords) {
        if (!peutEcrire(v.id, Date.now())) return { etat: 'quota' };
        try {
            await sdk.DataModel.Venues.updateVenue({ venueId: String(v.id), geometry: { type: 'Polygon', coordinates: coords } });
            compterEdition(v.id, Date.now());
            return { etat: 'ok' };
        } catch (e) { log('updateVenue : ' + e.message); return { etat: 'refus', msg: e.message }; }
    }

    async function equerreUn(v) {
        if (v.geometry.type !== 'Polygon') return { etat: 'point' };
        const r = orthogonaliser(ouvrir(v.geometry.coordinates[0]), opts.angle);
        if (!r) return { etat: 'rien' };
        // Un résultat qui se croise n'est pas « rien à faire » : le dire, sinon l'éditeur monte le seuil.
        if (!anneauValide(r.anneau)) return { etat: 'invalide' };
        return ecrireCoeur(v, [fermer(r.anneau)].concat(v.geometry.coordinates.slice(1)));
    }

    async function simplifierUn(v) {
        if (v.geometry.type !== 'Polygon') return { etat: 'point' };
        const anneau = ouvrir(v.geometry.coordinates[0]);
        // En mètres locaux, pour que le réglage soit une vraie distance au sol.
        const lat0 = anneau.reduce((s, p) => s + p[1], 0) / anneau.length;
        const kx = 111320 * Math.cos(lat0 * Math.PI / 180), ky = 110540;
        const loc = anneau.map(p => [p[0] * kx, p[1] * ky]);
        const garde = simplifierAnneau(loc, opts.simplification);
        if (garde.length >= anneau.length || garde.length < 3) return { etat: 'rien' };
        // simplifierAnneau rend les MÊMES objets que ceux reçus : les sommets gardés reprennent
        // leurs coordonnées d'origine exactes.
        const exact = garde.map(p => anneau[loc.indexOf(p)]);
        if (!anneauValide(exact)) return { etat: 'invalide' };
        return ecrireCoeur(v, [fermer(exact)].concat(v.geometry.coordinates.slice(1)));
    }

    const COEURS = { clone: clonerUn, ortho: equerreUn, simp: simplifierUn };
    const RIEN = { ortho: 'nothingOrtho', simp: 'nothingSimp' };

    // Tous les lieux sélectionnés (un ou plusieurs).
    async function lieuxSelectionnes() {
        let sel;
        try { sel = await sdk.Editing.getSelection(); } catch (e) { return []; }
        if (!sel || sel.objectType !== 'venue' || !sel.ids || !sel.ids.length) return [];
        const l = [];
        for (const id of sel.ids) {
            try { const v = await sdk.DataModel.Venues.getById({ venueId: String(id) }); if (v && v.geometry) l.push(v); } catch (e) { }
        }
        return l;
    }

    // Un lieu : le message de toujours. Plusieurs : le lot, sous plafond horaire.
    async function outil(q) {
        const lieux = await lieuxSelectionnes();
        if (!lieux.length) { toast(t('noPlace'), true); return; }
        if (lieux.length > 1) { await enLot(q, lieux); return; }
        const v = lieux[0];
        const r = await COEURS[q](v, {});
        majQuota();
        if (r.etat === 'point') toast(t('tipPointOnly'), true);
        else if (r.etat === 'quota') quotaPermet(v.id);
        else if (r.etat === 'occupe') toast(t('cloneNoRoom'), true);
        else if (r.etat === 'inconnu') toast(t('cloneUnknown'), true);
        else if (r.etat === 'rien') toast(t(RIEN[q]));
        else if (r.etat === 'invalide') toast(t('invalidShape'), true);
        else if (r.etat === 'refus') toast(t('editErr', r.msg), true);
        else {
            if (q === 'clone') { try { await sdk.Editing.setSelection({ selection: { ids: [r.id], objectType: 'venue' } }); } catch (e) { log('sélection : ' + e.message); } }
            toast(r.msg ? t('editErr', r.msg) : t('done'), !!r.msg);
        }
    }
    const outilCloner = () => outil('clone');
    const outilEquerre = () => outil('ortho');
    const outilSimplifier = () => outil('simp');

    // Le lot : un lieu après l'autre, la page reprend la main entre deux, un bilan à la fin. Chaque
    // lieu MODIFIÉ compte dans le plafond horaire (doctrine France des scripts, § 3.3), comme toute
    // écriture du script ; un lieu inchangé ou refusé ne compte pas.
    let lotEnCours = false;
    async function enLot(q, lieux) {
        if (lotEnCours) return;
        lotEnCours = true;
        try {
            await lireQuotaUser();
            const e0 = etatQuota(Date.now());
            if (e0.altere || e0.reste <= 0) { toast(e0.altere ? t('quotaBlocked') : t('quotaFull', heureLocale(e0.libre)), true); return; }
            // Le clonage lit les lieux une fois : illisibles, rien n'est cloné (pas de doublon à l'aveugle).
            const ctx = {};
            if (q === 'clone') { ctx.lieux = await lireLieux(); if (!ctx.lieux) { toast(t('cloneUnknown'), true); return; } }
            const b = { ok: 0, rien: 0, refus: 0, quota: 0, occupe: 0 }, clones = [];
            for (let i = 0; i < lieux.length; i++) {
                toast(t('batchProgress', i + 1, lieux.length), false, 0);
                const r = await COEURS[q](lieux[i], ctx);
                if (r.etat === 'ok') { b.ok++; if (r.id) clones.push(r.id); }
                else if (r.etat === 'refus') b.refus++;
                else if (r.etat === 'quota') b.quota++;
                else if (r.etat === 'occupe') b.occupe++;
                else b.rien++;
                majQuota();
                await pause();
            }
            b.libre = etatQuota(Date.now()).libre;
            if (clones.length) { try { await sdk.Editing.setSelection({ selection: { ids: clones, objectType: 'venue' } }); } catch (e) { log('sélection : ' + e.message); } }
            const parts = [t('batchDone', nombre(b.ok, 0), nombre(lieux.length, 0))];
            if (b.rien) parts.push(t('batchSame', nombre(b.rien, 0)));
            if (b.refus) parts.push(t('batchRefused', nombre(b.refus, 0)));
            if (b.occupe) parts.push(t('batchNoRoom', nombre(b.occupe, 0)));
            if (b.quota) parts.push(t('batchQuota', nombre(b.quota, 0), heureLocale(b.libre)));
            toast(parts.join(' · '), !!(b.refus || b.quota || b.occupe), b.quota ? 12000 : 8000);
        } finally { lotEnCours = false; }
    }

    const heureLocale = ms => Number.isFinite(ms) ? new Date(ms).toLocaleTimeString(_lang, { hour: '2-digit', minute: '2-digit' }) : '—';

    // ==== banc:quota ====
    /* ⭐⭐⭐ LE PLAFOND DE LA DOCTRINE FRANCE DES SCRIPTS : au plus le plafond d'éditions scriptées par
       heure GLISSANTE et PAR ÉDITEUR, TOUTES les écritures du script comprises (création à la baguette,
       Remplacer le contour, Agrandir, Cloner, D'équerre, Simplifier sur un lieu ou en lot, Pivoter, Redimensionner).
       Compté comme WME BAN Coverage : une édition est RÉSERVÉE quand le script écrit (jamais plus que le
       plafond en attente), puis COMPTÉE à l'enregistrement réussi. L'unité est le lieu modifié entre deux
       enregistrements, comme dans l'enregistrement de WME : plusieurs écritures du script sur le même lieu
       avant d'enregistrer (pas de flèche de Pivoter, clone puis ses catégories, Simplifier après
       Remplacer) n'en font qu'une. Page quittée sans enregistrer : ses réservations sont rendues (ses
       modifications sont perdues). Une écriture annulée (Ctrl+Z) reste réservée jusqu'à la fin de son heure.
       Entrée : { t: heure, v: lieu, e: 0 réservée | 1 enregistrée, p: page }.
       ⛔ AUCUN RÉGLAGE NE LE RELÈVE, et il n'est pas écrit en clair : le cœur (`_pm`, `_pf` : plafond et
          fenêtre en ms, en hexadécimal) est SONDÉ par un auto-test fonctionnel (`_pc`) avec sa propre copie
          (`_pk`), recoupée par une somme XOR (`_ps ^ plafond ^ fenêtre === _pq`). Changer le cœur seul, ou
          la sonde seule, BLOQUE toute écriture.
       La liste est brouillée par une clé tirée du pseudo et SCELLÉE : une copie retouchée bloque les
       écritures une heure. ⚠️ Limite d'un contrôle dans le navigateur : décourager, pas empêcher. */
    const _px = s => { let x = 0x811c9dc5;
        for (let i = 0; i < s.length; i++) { x ^= s.charCodeAt(i); x = Math.imul(x, 0x01000193) >>> 0; }
        return x >>> 0; };
    const _pm = 0x1f4, _pf = 0x36ee80;
    const _pk = [0x1f4, 0x36ee80];
    const _ps = 0x4d1c3d5;
    const _pq = 0x4e72ca1;
    const _ph = x => (x && typeof x === 'object' && typeof x.t === 'number' ? x.t : NaN);
    function quotaLot(entrees, maintenant) {
        const max = _pm, f = _pf;
        const r = (entrees || []).filter(x => _ph(x) > maintenant - f).sort((a, b) => _ph(a) - _ph(b));
        const reste = Math.max(0, max - r.length);
        return { utilises: r.length, reste, max, libre: reste ? maintenant : _ph(r[r.length - max]) + f };
    }
    function _pc() {
        const m = Date.now(), [a, f] = _pk;
        const pl = n => Array.from({ length: n }, (_, i) => ({ t: m - i }));
        return quotaLot(pl(a), m).reste === 0 && quotaLot(pl(a - 1), m).reste === 1
            && quotaLot([{ t: m - f + 6e4 }], m).utilises === 1 && quotaLot([{ t: m - f - 6e4 }], m).utilises === 0
            && ((_ps ^ a ^ f) >>> 0) === _pq;
    }
    // Identifiant de CETTE page : ses réservations lui appartiennent (rendues si elle part sans enregistrer).
    const _qs = Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
    let _quotaUser = '?', _quotaMem = null;
    async function lireQuotaUser() {
        try { const u = await sdk.State.getUserInfo(); if (u && u.userName) _quotaUser = String(u.userName); } catch (e) { }
    }
    const _qn = () => 'wmw.q.' + _px('q|' + _quotaUser).toString(36);
    const _qk = () => { let x = _px('k|' + _quotaUser) || 1;
        return () => { x ^= x << 13; x >>>= 0; x ^= x >>> 17; x ^= x << 5; x >>>= 0; return x & 255; }; };
    const _qt = b => _px(_quotaUser + '|' + b + '|' + _pq).toString(36);
    function _qf(l) {
        const j = new TextEncoder().encode(JSON.stringify(l)), k = _qk();
        let o = '';
        for (let i = 0; i < j.length; i++) o += String.fromCharCode(j[i] ^ k());
        const b = btoa(o);
        return 'p1.' + _qt(b) + '.' + b;
    }
    // null : copie absente ; false : copie retouchée ou illisible ; sinon la liste.
    function _qo(v) {
        if (v == null || v === '') return null;
        const m = /^p1\.([0-9a-z]+)\.([A-Za-z0-9+/=]*)$/.exec(String(v));
        if (!m || _qt(m[2]) !== m[1]) return false;
        try {
            const o = atob(m[2]), k = _qk(), j = new Uint8Array(o.length);
            for (let i = 0; i < o.length; i++) j[i] = o.charCodeAt(i) ^ k();
            const l = JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(j));
            return Array.isArray(l) ? l : false;
        } catch (e) { return false; }
    }
    // Réunion des copies (mémoire de la page, localStorage) : effacer l'une ne rend rien. Une même entrée
    // vue réservée ici et enregistrée là est gardée enregistrée.
    function _qu(listes) {
        const vus = new Map();
        for (const l of listes) for (const x of l || []) {
            if (!x || typeof x !== 'object' || typeof x.t !== 'number') continue;
            const c = [x.t, x.v, x.p].join('|'), y = vus.get(c);
            if (!y || (x.e === 1 && y.e !== 1)) vus.set(c, x);
        }
        return [...vus.values()];
    }
    // La mémoire de la page ne garde que SES entrées : les réservations qu'une autre page a rendues en
    // partant ne reviennent pas par elle.
    function ecrireQuota(l) {
        const garde = l.filter(x => _ph(x) > Date.now() - _pf);
        _quotaMem = garde.filter(x => x.p === _qs);
        try { localStorage.setItem(_qn(), _qf(garde)); } catch (e) { /* la mémoire de la page tient */ }
    }
    function lireQuota() {
        let v = null;
        try { v = localStorage.getItem(_qn()); } catch (e) { /* mémoire seule */ }
        const lu = _qo(v), listes = [_quotaMem || []];
        if (lu) listes.push(lu);
        let l = _qu(listes);
        if (lu === false) {
            const m = Date.now();
            l = l.concat(Array.from({ length: _pm }, (_, i) => ({ t: m + i / 1e3, v: '', e: 1, p: _qs })));
            ecrireQuota(l);
        }
        return l;
    }
    function etatQuota(maintenant) {
        if (!_pc()) return { altere: true, utilises: 0, reste: 0, max: _pm, libre: Infinity };
        return quotaLot(lireQuota(), maintenant);
    }
    const _qr = (l, vid) => vid != null && l.some(x => x.e !== 1 && x.p === _qs && x.v === String(vid));
    // Le plafond laisse-t-il écrire sur ce lieu ? (vid null : un lieu à créer.) Un lieu déjà réservé par
    // cette page depuis le dernier enregistrement passe toujours : l'écriture ne coûte rien de plus.
    function peutEcrire(vid, maintenant) {
        if (!_pc()) return false;
        const l = lireQuota();
        return _qr(l, vid) || quotaLot(l, maintenant).reste > 0;
    }
    function compterEdition(vid, maintenant) {
        const l = lireQuota();
        if (_qr(l, vid)) return;
        ecrireQuota(l.concat([{ t: maintenant, v: String(vid), e: 0, p: _qs }]));
    }
    // Enregistrement réussi : les réservations de la page deviennent des éditions comptées.
    function confirmerEditions() {
        const l = lireQuota();
        if (!l.some(x => x.p === _qs && x.e !== 1)) return;
        ecrireQuota(l.map(x => x.p === _qs && x.e !== 1 ? Object.assign({}, x, { e: 1 }) : x));
    }
    // Page quittée sans enregistrer : ses modifications sont perdues, ses réservations rendues.
    function rendreEditions() {
        const l = lireQuota();
        if (l.some(x => x.p === _qs && x.e !== 1)) ecrireQuota(l.filter(x => !(x.p === _qs && x.e !== 1)));
    }
    // ==== fin banc:quota ====

    // --- Pivoter et redimensionner : un geste sur la carte ----------------------------------------

    let modeForme = null;         // 'pivoter' | 'redim' | null
    let geste = null;             // { v, centre, depart, coords, angle, echelle }
    let clicAAvaler = false;

    const texteMode = () => modeForme === 'pivoter' ? t('modeRot') + ' ' + t('keysRot') : t('modeRes') + ' ' + t('keysRes');

    // Pivoter et Redimensionner au clavier (WCAG 2.5.7 : le glisser ne doit pas être le seul moyen).
    // Chaque pas est une étape de la pile d'annulation.
    async function pasClavier(sens, grand) {
        const v = await lieuOuMessage(true);
        if (!v) return;
        const anneauM = ouvrir(v.geometry.coordinates[0]).map(([lon, lat]) => versMerc(lon, lat));
        const centre = centreMerc(anneauM);
        const angle = modeForme === 'pivoter' ? sens * (grand ? 15 : 1) * Math.PI / 180 : 0;
        const echelle = modeForme === 'redim' ? Math.pow(grand ? 1.1 : 1.01, sens) : 1;
        const coords = transformerPolygone(v.geometry.coordinates, centre, angle, echelle);
        if (!anneauValide(ouvrir(coords[0]))) { toast(t('invalidShape'), true); return; }
        await ecrireGeometrie(v, coords);
    }

    // Le mode d'emploi reste affiché tant que le mode dure : il disparaissait après 3,5 s, et la carte
    // qui n'obéit plus au glisser semblait alors bloquée.
    async function entrerModeForme(mode) {
        if (modeForme === mode) { finirModeForme(); return; }
        const v = await lieuOuMessage(true);
        if (!v) return;
        if (baguetteActive) basculerBaguette(false);
        modeForme = mode;
        majBarre();
        toast(texteMode(), false, 0);
        Promise.resolve(sdk.Map.getMapViewportElement()).then(v => { if (v) v.classList.add(mode === 'pivoter' ? 'wmw-curseur-rot' : 'wmw-curseur-redim'); }, () => { });
    }

    function finirModeForme() {
        modeForme = null;
        geste = null;
        dessinerApercu(null);
        majBarre();
        cacherToast();
        Promise.resolve(sdk.Map.getMapViewportElement()).then(v => { if (v) v.classList.remove('wmw-curseur-rot', 'wmw-curseur-redim'); }, () => { });
    }

    async function lonLatEcran(ev) {
        const ll = await sdk.Map.getLonLatFromPixel({ x: ev.clientX, y: ev.clientY });
        return versMerc(ll.lon, ll.lat);
    }

    let generationGeste = 0;
    async function debuterGeste(ev) {
        const v = await lieuSelectionne();
        if (!v || v.geometry.type !== 'Polygon') { finirModeForme(); return; }
        const anneauM = ouvrir(v.geometry.coordinates[0]).map(([lon, lat]) => versMerc(lon, lat));
        const centre = centreMerc(anneauM);
        const rayon = anneauM.reduce((m, q) => Math.max(m, Math.hypot(q[0] - centre[0], q[1] - centre[1])), 0);
        const p = await lonLatEcran(ev);
        geste = { v, centre, rayon, depart: p, angle: 0, echelle: 1, coords: v.geometry.coordinates };
    }

    async function suivreGeste(ev) {
        if (!geste) return;
        const g = geste;
        const generation = ++generationGeste;
        const p = await lonLatEcran(ev);
        if (generation !== generationGeste || geste !== g) return;
        const a0 = Math.atan2(g.depart[1] - g.centre[1], g.depart[0] - g.centre[0]);
        const a1 = Math.atan2(p[1] - g.centre[1], p[0] - g.centre[0]);
        // Près du centre, l'angle et le rapport des distances s'affolent au moindre pixel : en deçà de
        // 5 % du rayon du lieu, le pointeur ne compte plus (l'angle garde sa dernière valeur).
        const pres = 0.05 * g.rayon;
        const d0 = Math.max(pres, Math.hypot(g.depart[0] - g.centre[0], g.depart[1] - g.centre[1]));
        const d1 = Math.hypot(p[0] - g.centre[0], p[1] - g.centre[1]);
        if (modeForme === 'pivoter') {
            if (d1 >= pres) {
                let a = a1 - a0;
                if (ev.shiftKey) { const pas = Math.PI / 12; a = Math.round(a / pas) * pas; }
                g.angle = Math.atan2(Math.sin(a), Math.cos(a));
            }
            g.echelle = 1;
        } else {
            g.angle = 0; g.echelle = Math.min(20, Math.max(0.05, Math.max(pres, d1) / d0));
        }
        // La valeur du geste, lisible pendant le glisser (rien ne la montrait).
        const valeur = modeForme === 'pivoter' ? nombre(Math.round(g.angle * 180 / Math.PI), 0) + '°' : '× ' + nombre(g.echelle, 2);
        toast(texteMode() + ' — ' + valeur, false, 0);
        const coords = transformerPolygone(g.coords, g.centre, g.angle, g.echelle);
        await dessinerApercu(ouvrir(coords[0]));
    }

    async function finirGeste() {
        const g = geste;
        geste = null;
        generationGeste++;
        await dessinerApercu(null);
        if (!g || (Math.abs(g.angle) < 1e-6 && Math.abs(g.echelle - 1) < 1e-6)) return;
        const coords = transformerPolygone(g.coords, g.centre, g.angle, g.echelle);
        // La forme vue dans l'aperçu ne s'applique pas : le dire (elle était jetée en silence).
        if (!anneauValide(ouvrir(coords[0]))) { toast(t('invalidShape'), true); return; }
        if (await ecrireGeometrie(g.v, coords) && modeForme) toast(texteMode(), false, 0);
    }

    function annulerGeste() {
        geste = null;
        generationGeste++;
        dessinerApercu(null);
        if (modeForme) toast(texteMode(), false, 0);
    }

    // Le geste est pris AVANT WME (phase de capture sur window) : sinon le glisser déplacerait la
    // carte. La molette n'est pas touchée, on peut zoomer en mode. preventDefault sur pointerdown
    // supprime les mousedown/mouseup de compatibilité ; le click qui suit est avalé à part, sinon
    // WME désélectionnerait le lieu.
    // La vue est relue à chaque événement (vueCarte, rafraîchie toutes les 2 s) : WME peut la recréer.
    function brancherGeste() {
        const garde = ev => modeForme && ev.button === 0 && vueCarte && vueCarte.contains(ev.target) && !ev.target.closest('#' + CARTE_ID + ', #' + FAB_ID + ', .overlay-buttons-container');
        window.addEventListener('pointerdown', ev => {
            if (!garde(ev)) return;
            ev.preventDefault(); ev.stopImmediatePropagation();
            clicAAvaler = true;
            debuterGeste(ev).catch(e => log('geste : ' + e.message));
        }, true);
        window.addEventListener('mousedown', ev => { if (garde(ev) || geste) { ev.preventDefault(); ev.stopImmediatePropagation(); } }, true);
        window.addEventListener('pointermove', ev => {
            if (!geste) return;
            ev.stopImmediatePropagation();
            // Bouton relâché hors de la fenêtre (aucun pointerup reçu) : le geste se termine là.
            if (ev.buttons === 0) { finirGeste().catch(e => log('geste : ' + e.message)); return; }
            suivreGeste(ev).catch(e => log('geste : ' + e.message));
        }, true);
        window.addEventListener('pointercancel', () => { if (geste) { clicAAvaler = false; annulerGeste(); } }, true);
        window.addEventListener('mousemove', ev => { if (geste) ev.stopImmediatePropagation(); }, true);
        window.addEventListener('pointerup', ev => { if (geste) { ev.stopImmediatePropagation(); finirGeste().catch(e => log('geste : ' + e.message)); } }, true);
        window.addEventListener('mouseup', ev => { if (clicAAvaler) ev.stopImmediatePropagation(); }, true);
        window.addEventListener('click', ev => { if (clicAAvaler) { clicAAvaler = false; ev.preventDefault(); ev.stopImmediatePropagation(); } }, true);
        // Pas de click (bouton relâché hors de la carte) : le prochain vrai clic ne doit pas être avalé.
        window.addEventListener('pointerup', () => { setTimeout(() => { clicAAvaler = false; }, 0); });
    }

    // =====================================================================
    //  Surlignage des lieux presque d'équerre
    // =====================================================================

    let minuteurSurlignage = null;
    function planifierSurlignage() {
        clearTimeout(minuteurSurlignage);
        minuteurSurlignage = setTimeout(() => { surligner().catch(e => logUneFois('surlignage', 'surlignage : ' + e.message)); }, 300);
    }

    // Au-delà de MAX_SOMMETS_SURLIGNES sommets, un contour est une forme naturelle (forêt, lac) : on ne
    // lui cherche pas d'angles, et la page reprend la main tous les 25 lieux (1 à 7 s de gel mesurées).
    let generationSurlignage = 0;
    async function surligner() {
        if (!calqueOk) return;
        const generation = ++generationSurlignage;
        await sdk.Map.removeAllFeaturesFromLayer({ layerName: CALQUE_SURLIGNAGE });
        if (!opts.surligner) return;
        const [w, s, e, n] = await sdk.Map.getMapExtent();
        let sel = null;
        try { sel = await sdk.Editing.getSelection(); } catch (er) { }
        const choisis = new Set(sel && sel.objectType === 'venue' ? sel.ids.map(String) : []);
        const lieux = await sdk.DataModel.Venues.getAll();
        const feats = [];
        let vus = 0;
        for (const v of lieux || []) {
            if (feats.length >= MAX_SURLIGNES) break;
            if (!v || !v.geometry || v.geometry.type !== 'Polygon' || choisis.has(String(v.id))) continue;
            if (v.geometry.coordinates[0].length > MAX_SOMMETS_SURLIGNES + 1) continue;
            if (++vus % 25 === 0) { await pause(); if (generation !== generationSurlignage) return; }
            const a = ouvrir(v.geometry.coordinates[0]);
            if (!a.some(([x, y]) => x >= w && x <= e && y >= s && y <= n)) continue;
            const r = orthogonaliser(a, opts.angle);
            if (!r || (!r.retires && r.bouge <= ECART_SURLIGNAGE)) continue;
            feats.push({ type: 'Feature', id: 'wmw-hl-' + v.id, geometry: { type: 'Polygon', coordinates: v.geometry.coordinates }, properties: {} });
        }
        // Des lieux de WME, valides par construction : pas besoin de les faire revalider par le SDK.
        if (feats.length && generation === generationSurlignage) await ajouterSansValidation(CALQUE_SURLIGNAGE, feats);
    }

    // =====================================================================
    //  La barre du panneau du lieu — une seule ligne
    // =====================================================================

    const chip = (q, txt) => '<button type="button" class="wmw-chip" data-wmw="' + q + '">' + txt + '</button>';

    // La baguette sans souris : le « clic » est le centre de la carte (accessibilité, audit du 31/10/2026).
    async function baguetteAuCentre() {
        if (!baguetteActive) basculerBaguette(true);
        const c = await sdk.Map.getMapCenter();
        if (c && Number.isFinite(c.lon)) await surClicCarte(c.lon, c.lat);
    }

    function lancerAction(q) {
        const f = { clone: outilCloner, ortho: outilEquerre, simp: outilSimplifier }[q];
        if (f) { f().catch(e => log(q + ' : ' + e.message)); return; }
        if (q === 'rot' || q === 'res') entrerModeForme(q === 'rot' ? 'pivoter' : 'redim').catch(e => log(q + ' : ' + e.message));
        else if (q === 'baguette') basculerBaguette();
        else if (q === 'centre') baguetteAuCentre().catch(e => log('centre : ' + e.message));
    }

    function titrer(bar, polygone) {
        const tips = { clone: 'tipClone', ortho: 'tipOrtho', simp: 'tipSimp', rot: 'tipRot', res: 'tipRes' };
        const plusieurs = bar.getAttribute('data-n') !== '1';
        for (const [q, k] of Object.entries(tips)) {
            const el = bar.querySelector('[data-wmw="' + q + '"]');
            if (!el) continue;
            const geste = q === 'rot' || q === 'res';
            const seulPoly = q !== 'clone';
            // Plusieurs lieux : Cloner, D'équerre et Simplifier traitent le lot ; Pivoter et
            // Redimensionner restent un geste sur UN lieu.
            el.disabled = (seulPoly && !polygone) || (geste && plusieurs);
            el.title = geste && plusieurs ? t('oneOnly') : el.disabled ? t('tipPointOnly') : t(k);
            el.setAttribute('aria-label', t(k));
            if (q === 'rot' || q === 'res') {
                const on = modeForme === (q === 'rot' ? 'pivoter' : 'redim');
                el.classList.toggle('on', on);
                el.setAttribute('aria-pressed', String(on));
            }
        }
    }

    function majBarre() {
        const bar = document.getElementById(BAR_ID);
        if (!bar) return;
        titrer(bar, bar.getAttribute('data-poly') === '1');
    }

    // La barre des outils flotte AU-DESSUS du lieu sélectionné, sur la carte (idée de l'auteur,
    // 31/10/2026 : « comme le bouton qui déplace un lieu de type zone »), au lieu d'une ligne dans le
    // panneau. Elle couvre aussi une sélection de plusieurs lieux, que le panneau de WME n'affiche pas
    // (mesuré : pas d'en-tête de lieu à 2 lieux). Posée sur le body, positionnée en coordonnées
    // écran ; reposée à chaque fin de déplacement de la carte, cachée si le lieu sort de la vue.
    let generationPlacement = 0;
    async function placerBarre() {
        const generation = ++generationPlacement;
        const lieux = await lieuxSelectionnes();
        if (generation !== generationPlacement) return;
        let bar = document.getElementById(BAR_ID);
        // Sur un lieu ponctuel, seul Cloner servait (les outils de forme sont grisés) et la barre
        // couvrait l'épingle de WME, qu'on saisit pour déplacer le point (jmbox, 04/11/2026) : pas de
        // barre. Cloner reste dans l'onglet (« Sur la sélection »).
        const sansBarre = opts.barre === 'masquee' || lieux.every(v => v.geometry.type === 'Point');
        if (lieux.length && sansBarre) {
            // Un geste lancé au clavier (Pivoter, Redimensionner) continue sans la barre.
            if (bar) bar.remove();
            return;
        }
        if (!lieux.length) {
            if (bar) bar.remove();
            if (modeForme) finirModeForme();
            return;
        }
        const poly = lieux.some(v => v.geometry.type === 'Polygon') ? '1' : '0';
        const n = lieux.length === 1 ? '1' : 'n';
        const sig = _lang + poly + lieux.map(v => v.id).join(',');
        if (bar && bar.getAttribute('data-sig') !== sig) {
            if (modeForme && bar.getAttribute('data-id') !== String(lieux[0].id)) finirModeForme();
        }
        if (!bar) {
            bar = document.createElement('div');
            bar.id = BAR_ID;
            bar.className = 'wmw-row';
            bar.setAttribute('role', 'toolbar');
            bar.addEventListener('click', ev => {
                const b = ev.target.closest('[data-wmw]');
                if (!b || b.disabled) return;
                lancerAction(b.getAttribute('data-wmw'));
            });
            // Un clic sur la barre ne doit atteindre ni la carte ni le geste de Pivoter.
            for (const type of ['pointerdown', 'mousedown', 'mouseup']) bar.addEventListener(type, ev => ev.stopPropagation());
            document.body.appendChild(bar);
        }
        if (bar.getAttribute('data-sig') !== sig) {
            bar.setAttribute('data-sig', sig);
            bar.setAttribute('data-id', String(lieux[0].id));
            bar.setAttribute('data-poly', poly);
            bar.setAttribute('data-n', n);
            bar.dir = _lang === 'he' ? 'rtl' : 'ltr';
            bar.setAttribute('aria-label', t('lblShape'));
            bar.innerHTML = '<span class="wmw-ico-bar">' + icone(16) + '</span>' + (n === '1' ? '' : '<span class="wmw-lbl">' + nombre(lieux.length, 0) + '</span>') +
                chip('clone', '&#x29C9;') + '<span class="wmw-sep"></span>' + chip('ortho', '&#x221F;') + chip('simp', '&#x2248;') +
                '<span class="wmw-sep"></span>' + chip('rot', '&#x27F3;') + chip('res', '&#x2922;') +
                '<span class="wmw-sep"></span><span class="wmw-lbl wmw-bar-quota" data-wmw-quota="court">' + escHtml(texteQuota(true)) + '</span>';
            majQuota();
        }
        titrer(bar, poly === '1');
        await positionnerBarre(bar, lieux, generation);
    }

    // Au-dessus du contour (centre de sa boîte) ; bornée à la vue de la carte.
    async function positionnerBarre(bar, lieux, generation) {
        let lons = [], lats = [];
        for (const v of lieux) {
            const pts = v.geometry.type === 'Point' ? [v.geometry.coordinates] : v.geometry.coordinates[0];
            for (const p of pts) { lons.push(p[0]); lats.push(p[1]); }
        }
        let haut = null, bas = null, r = null;
        try {
            const lonC = (Math.min(...lons) + Math.max(...lons)) / 2;
            haut = await sdk.Map.getPixelFromLonLat({ lonLat: { lon: lonC, lat: Math.max(...lats) } });
            bas = await sdk.Map.getPixelFromLonLat({ lonLat: { lon: lonC, lat: Math.min(...lats) } });
            r = (await sdk.Map.getMapViewportElement()).getBoundingClientRect();
        } catch (e) { logUneFois('barre-pos', 'position du lieu illisible : ' + e.message); }
        if (generation !== generationPlacement || !document.body.contains(bar)) return;
        if (!haut || !r) { bar.hidden = true; return; }
        // Le lieu entier hors de la vue : la barre se cache (elle flotterait sur autre chose).
        const horsVue = bas.y < r.top || haut.y > r.bottom || haut.x < r.left || haut.x > r.right;
        bar.hidden = horsVue;
        if (horsVue) return;
        const w = bar.offsetWidth, h = bar.offsetHeight;
        const x = Math.min(r.right - w - 60, Math.max(r.left + 8, Math.round(haut.x - w / 2)));
        // 24 px d'écart : la poignée de déplacement de WME est posée au milieu du bord haut du lieu
        // (mesuré le 31/10/2026 : à 12 px, la barre la frôlait).
        // En dessous : même écart sous le bord bas du contour.
        const yVoulu = opts.barre === 'dessous' ? Math.round(bas.y + 24) : Math.round(haut.y - h - 24);
        const y = Math.min(r.bottom - h - 40, Math.max(r.top + 44, yVoulu));
        bar.style.left = x + 'px';
        bar.style.top = y + 'px';
    }

    let placementPrevu = false;
    function planifierPlacement() {
        if (placementPrevu) return;
        placementPrevu = true;
        setTimeout(() => { placementPrevu = false; placerBarre().catch(e => log('barre : ' + e.message)); }, 30);
    }

    // =====================================================================
    //  Messages — une bulle discrète en bas de la carte
    // =====================================================================

    // La bulle existe dès le démarrage, vide : une région « live » créée et remplie dans la même tâche
    // n'est pas annoncée par les lecteurs d'écran. Une alerte passe en role=alert.
    function creerToast() {
        let el = document.getElementById(TOAST_ID);
        if (el) return el;
        el = document.createElement('div');
        el.id = TOAST_ID;
        el.setAttribute('role', 'status');
        el.setAttribute('aria-live', 'polite');
        el.hidden = true;
        document.body.appendChild(el);
        return el;
    }

    // `duree` : en ms ; 0 = jusqu'au prochain message (mode d'emploi de Pivoter / Redimensionner).
    let minuteurToast = null;
    function toast(texte, alerte, duree) {
        const el = creerToast();
        el.setAttribute('role', alerte ? 'alert' : 'status');
        el.setAttribute('aria-live', alerte ? 'assertive' : 'polite');
        el.dir = _lang === 'he' ? 'rtl' : 'ltr';
        el.textContent = texte;
        el.classList.toggle('alerte', !!alerte);
        el.hidden = false;
        Promise.resolve(sdk.Map.getMapViewportElement()).then(v => {
            const r = v ? v.getBoundingClientRect() : { left: 0, width: window.innerWidth, top: 0 };
            el.style.left = Math.round(r.left + r.width / 2) + 'px';
            el.style.top = Math.round(r.top + 52) + 'px';
        }, () => { });
        clearTimeout(minuteurToast);
        const d = duree === undefined ? (alerte ? 6000 : 3500) : duree;
        // Un message passé pendant un mode de forme rend la place au mode d'emploi, pas au vide.
        if (d > 0) minuteurToast = setTimeout(() => { if (modeForme && !geste) toast(texteMode(), false, 0); else cacherToast(); }, d);
    }
    function cacherToast() {
        clearTimeout(minuteurToast);
        const el = document.getElementById(TOAST_ID);
        if (el) el.hidden = true;
    }

    // =====================================================================
    //  Bouton de la carte — dans la colonne native de WME, comme celui de WCT
    // =====================================================================

    // >>> DSX-DOCK 1.0.4 — rangement partagé des boutons de carte des scripts de DrSlump34.
    // Copie IDENTIQUE dans chaque script (source : Projets/DSX-Dock/dsx-dock.js ; contrôle :
    // node Projets/DSX-Dock/verifier-copies.js). Ne pas modifier ici : modifier la source, puis recopier.
    //
    // Chaque script pose son bouton dans la colonne de droite de WME, et à sept ils débordaient sur la
    // règle, Street View et le zoom (constaté le 31/10/2026). Ce module garde visibles les boutons qui
    // tiennent, et range les autres derrière un bouton « ⋯ » qui les montre dans un panneau.
    //  - Il ne parle que par le DOM : les scripts tournent chacun dans leur bac à sable.
    //  - Un bouton se déclare par ses attributs : data-dsx-dock (identifiant), data-dsx-nom (libellé),
    //    data-dsx-actif="1" quand son script est en cours d'usage (jamais rangé alors).
    //  - Le module de la version la plus récente range ; les autres se taisent (attributs sur <html>).
    //  - Le VRAI élément est déplacé, jamais recréé : ses écouteurs suivent.
    //  - Priorité pour rester visible : actif, puis épinglé (📌 dans le panneau), puis ordre d'arrivée.
    const dsxDock = (() => {
        const V = '1.0.4';
        const cmp = (a, b) => {
            const x = String(a).split('.').map(Number), y = String(b).split('.').map(Number);
            for (let i = 0; i < 3; i++) { const d = (x[i] || 0) - (y[i] || 0); if (d) return d < 0 ? -1 : 1; }
            return 0;
        };
        const moi = Math.random().toString(36).slice(2);
        const proprio = () => document.documentElement.getAttribute('data-dsx-dock-proprio') === moi;
        const CLE_EPINGLES = 'dsx.dock.epingles';
        const lireEpingles = () => { try { const a = JSON.parse(localStorage.getItem(CLE_EPINGLES) || '[]'); return Array.isArray(a) ? a : []; } catch (e) { return []; } };
        const ecrireEpingles = a => { try { localStorage.setItem(CLE_EPINGLES, JSON.stringify(a)); } catch (e) { } };
        const langue = () => { const l = String(document.documentElement.lang || navigator.language || 'en').toLowerCase(); return l.startsWith('pt') ? (l.includes('br') ? 'pt-BR' : 'pt') : (l.startsWith('iw') ? 'he' : l.slice(0, 2)); };
        const TXT = {
            en: { plus: n => n + ' more script button' + (n > 1 ? 's' : ''), titre: 'Other script buttons', epingler: 'Keep in the column', desepingler: 'Stop keeping in the column', aide: 'Right-click a button in the column to pin or unpin it.' },
            fr: { plus: n => n + ' autre' + (n > 1 ? 's' : '') + ' bouton' + (n > 1 ? 's' : '') + ' de script', titre: 'Autres boutons de scripts', epingler: 'Garder dans la colonne', desepingler: 'Ne plus garder dans la colonne', aide: 'Clic droit sur un bouton de la colonne pour l\'épingler ou le désépingler.' },
            de: { plus: n => n + ' weitere Skript-Schaltfläche' + (n > 1 ? 'n' : ''), titre: 'Weitere Skript-Schaltflächen', epingler: 'In der Leiste behalten', desepingler: 'Nicht mehr in der Leiste behalten', aide: 'Rechtsklick auf eine Schaltfläche der Leiste, um sie anzuheften oder zu lösen.' },
            es: { plus: n => n + ' botón' + (n > 1 ? 'es' : '') + ' de script más', titre: 'Otros botones de scripts', epingler: 'Mantener en la columna', desepingler: 'Dejar de mantener en la columna', aide: 'Clic derecho en un botón de la columna para anclarlo o desanclarlo.' },
            it: { plus: n => n > 1 ? 'Altri ' + n + ' pulsanti di script' : 'Un altro pulsante di script', titre: 'Altri pulsanti di script', epingler: 'Tieni nella colonna', desepingler: 'Non tenere più nella colonna', aide: 'Clic destro su un pulsante della colonna per agganciarlo o sganciarlo.' },
            'pt-BR': { plus: n => 'Mais ' + n + ' botão' + (n > 1 ? 'ões' : '') + ' de script', titre: 'Outros botões de scripts', epingler: 'Manter na coluna', desepingler: 'Deixar de manter na coluna', aide: 'Clique com o botão direito num botão da coluna para fixá-lo ou desafixá-lo.' },
            pt: { plus: n => 'Mais ' + n + ' botão' + (n > 1 ? 'ões' : '') + ' de script', titre: 'Outros botões de scripts', epingler: 'Manter na coluna', desepingler: 'Deixar de manter na coluna', aide: 'Clique com o botão direito num botão da coluna para o fixar ou desafixar.' },
            he: { plus: n => n > 1 ? 'עוד ' + n + ' כפתורי סקריפטים' : 'עוד כפתור סקריפט אחד', titre: 'כפתורי סקריפטים נוספים', epingler: 'להשאיר בעמודה', desepingler: 'להפסיק להשאיר בעמודה', aide: 'לחיצה ימנית על כפתור בעמודה מצמידה אותו או מבטלת את ההצמדה.' },
        };
        const tx = () => TXT[langue()] || TXT.en;

        const STYLE = `
/* Certains scripts imposent un order CSS a leur bouton (PEU 100, WNA 99) : inscrits, c'est le dock qui
   decide de leur rang, et « ⋯ » reste le dernier de la colonne. Dans le panneau aussi : chaque ligne est
   une rangee flexible, et le bouton de PEU s'y affichait APRES son nom (signale par l'auteur, 31/10). */
.overlay-buttons-container [data-dsx-dock], #dsx-panneau [data-dsx-dock] { order: 0 !important; }
.overlay-buttons-container #dsx-plus { order: 1000 !important; }
.overlay-buttons-container [data-dsx-epingle="1"] { position: relative; }
.overlay-buttons-container [data-dsx-epingle="1"]::after { content: '\\1F4CC'; position: absolute; top: -5px; left: -5px; font-size: 13px; line-height: 1; pointer-events: none; }
#dsx-plus { position: relative; display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; min-height: 0; margin: 0; padding: 0; border: none; border-radius: 50%; background: #fff; color: #37474f; font: 700 20px/1 Rubik, 'Open Sans', sans-serif; cursor: pointer; box-shadow: 0 2px 6px rgba(0,0,0,.3); }
#dsx-plus:hover, #dsx-plus[aria-expanded="true"] { box-shadow: 0 3px 10px rgba(0,0,0,.4); background: #e3f2fd; }
#dsx-plus:focus-visible { outline: 2px solid #1976d2; outline-offset: 2px; }
#dsx-plus[hidden] { display: none !important; }
#dsx-plus .dsx-compte { position: absolute; top: -4px; right: -4px; min-width: 18px; height: 18px; box-sizing: border-box; padding: 0 4px; border: 2px solid #fff; border-radius: 50px; background: #1976d2; color: #fff; font: 700 10px/14px Rubik, sans-serif; }
#dsx-panneau { position: fixed; z-index: 10040; min-width: 220px; max-height: calc(100vh - 16px); overflow: auto; box-sizing: border-box; padding: 8px; background: #fff; border: 1px solid #dde3ea; border-radius: 12px; box-shadow: 0 8px 32px rgba(0,0,0,.22), 0 2px 8px rgba(0,0,0,.12); font: 12px Rubik, 'Open Sans', sans-serif; color: #2d3748; }
#dsx-panneau[hidden] { display: none !important; }
#dsx-panneau .dsx-titre { margin: 0 4px 6px; font-size: 11px; font-weight: 700; color: #1976d2; text-transform: uppercase; letter-spacing: .05em; }
#dsx-panneau .dsx-ligne { display: flex; align-items: center; gap: 8px; padding: 4px; border-radius: 8px; }
#dsx-panneau .dsx-ligne:hover { background: #f5f7f9; }
#dsx-panneau .dsx-ligne > :first-child { flex-shrink: 0; margin: 0 !important; }
#dsx-panneau .dsx-nom { flex: 1; min-width: 0; padding: 0; border: none; background: none; text-align: start; font: 600 12px Rubik, 'Open Sans', sans-serif; color: inherit; cursor: pointer; }
#dsx-panneau .dsx-epingle { width: 26px; height: 26px; min-height: 0; padding: 0; border: none; border-radius: 50%; background: none; cursor: pointer; opacity: .45; font-size: 13px; }
#dsx-panneau .dsx-epingle[aria-pressed="true"], #dsx-panneau .dsx-epingle:hover { opacity: 1; background: #e3f2fd; }
#dsx-panneau :focus-visible { outline: 2px solid #1976d2; outline-offset: 1px; }
#dsx-panneau .dsx-aide { margin: 6px 4px 0; font-size: 11px; color: #566372; }
html:is([data-wme-studio-theme="dark"],[data-wme-studio-theme="black"]) #dsx-panneau { background: var(--wme-studio-surface, #2b2f33); color: var(--wme-studio-text, #e8eaed); border-color: var(--wme-studio-border, #4a5056); }
html:is([data-wme-studio-theme="dark"],[data-wme-studio-theme="black"]) #dsx-panneau .dsx-ligne:hover { background: var(--wme-studio-hover, #454b52); }
html:is([data-wme-studio-theme="dark"],[data-wme-studio-theme="black"]) #dsx-panneau .dsx-aide { color: var(--wme-studio-text-secondary, #b6c0ca); }
/* Anneau de focus lisible sur fond sombre (#1976d2 n'y faisait que 2,93:1). */
html:is([data-wme-studio-theme="dark"],[data-wme-studio-theme="black"]) :is(#dsx-panneau :focus-visible, #dsx-plus:focus-visible) { outline-color: #64b5f6; }
html:is([data-wme-studio-theme="dark"],[data-wme-studio-theme="black"]) #dsx-panneau .dsx-titre { color: #64b5f6; }
`;

        let ordre = 0;
        let enCours = false;

        function plus(haut) {
            let b = document.getElementById('dsx-plus');
            if (!b) {
                b = document.createElement('button');
                b.id = 'dsx-plus';
                b.type = 'button';
                b.setAttribute('aria-haspopup', 'true');
                b.setAttribute('aria-expanded', 'false');
                b.setAttribute('aria-controls', 'dsx-panneau');
                b.innerHTML = '&#x22EF;<span class="dsx-compte"></span>';
                b.addEventListener('click', ev => { ev.stopPropagation(); basculerPanneau(); });
            }
            if (b.parentElement !== haut) haut.appendChild(b);
            return b;
        }

        function panneau() {
            let p = document.getElementById('dsx-panneau');
            if (!p) {
                p = document.createElement('div');
                p.id = 'dsx-panneau';
                p.setAttribute('role', 'dialog');
                p.hidden = true;
                p.innerHTML = '<p class="dsx-titre"></p><div class="dsx-liste"></div><p class="dsx-aide"></p>';
                p.addEventListener('click', ev => {
                    const ep = ev.target.closest('.dsx-epingle');
                    const ligne = ev.target.closest('.dsx-ligne');
                    if (!ligne) return;
                    const el = ligne.firstElementChild;
                    if (ep) {
                        const id = el.getAttribute('data-dsx-dock');
                        const a = lireEpingles();
                        ecrireEpingles(a.includes(id) ? a.filter(x => x !== id) : a.concat([id]));
                        planifier();
                        return;
                    }
                    if (ev.target.closest('.dsx-nom')) {
                        // Le libellé déclenche le vrai bouton du script, puis le panneau se ferme.
                        const cible = el.matches('button') ? el : (el.querySelector('button') || el);
                        fermerPanneau();
                        cible.click();
                    }
                });
                document.body.appendChild(p);
                // Un bouton rangé qui devient actif doit revenir dans la colonne.
                new MutationObserver(() => { if (!enCours) planifier(); }).observe(p, { attributes: true, attributeFilter: ['data-dsx-actif'], subtree: true });
            }
            if (p.getAttribute('data-dsx-v') !== V && proprio()) mettreANiveau(p);
            return p;
        }

        // Le panneau est partagé : il a pu être créé par la copie PLUS ANCIENNE d'un autre script, chargé
        // avant (mesuré le 31/10 : un panneau de la 1.0.3 sous un rangement 1.0.4). On lui ajoute ce que la
        // version apporte, sans rien doubler de ce qu'il a déjà (son écouteur de clic reste le sien).
        function mettreANiveau(p) {
            p.setAttribute('data-dsx-v', V);
            const titre = p.querySelector('.dsx-titre');
            if (titre) { titre.id = 'dsx-titre'; p.setAttribute('aria-labelledby', 'dsx-titre'); }
            // Le bouton rangé lui-même : le panneau se ferme AVANT son action, en phase de capture — le
            // script peut arrêter la propagation de son clic, et le panneau restait alors ouvert.
            p.addEventListener('click', ev => {
                const ligne = ev.target.closest('.dsx-ligne');
                if (ligne && ligne.firstElementChild && ligne.firstElementChild.contains(ev.target)) fermerPanneau();
            }, true);
        }

        function placerPanneau() {
            const p = document.getElementById('dsx-panneau'), b = document.getElementById('dsx-plus');
            if (!p || p.hidden || !b) return;
            const r = b.getBoundingClientRect();
            const rtl = getComputedStyle(document.body).direction === 'rtl';
            const w = p.offsetWidth, h = p.offsetHeight;
            const x = rtl ? r.right + 8 : r.left - 8 - w;
            const y = Math.max(8, Math.min(r.top, window.innerHeight - h - 8));
            p.style.left = Math.max(8, x) + 'px';
            p.style.top = y + 'px';
        }

        function basculerPanneau() { const p = panneau(); if (p.hidden) ouvrirPanneau(); else fermerPanneau(); }
        function ouvrirPanneau() {
            const p = panneau();
            p.hidden = false;
            const b = document.getElementById('dsx-plus');
            if (b) b.setAttribute('aria-expanded', 'true');
            placerPanneau();
            const premier = p.querySelector('.dsx-nom');
            if (premier) premier.focus();
        }
        function fermerPanneau() {
            const p = document.getElementById('dsx-panneau');
            if (!p || p.hidden) return;
            // Le focus était dans le panneau : il revient à « ⋯ », pas au <body>.
            const avaitFocus = p.contains(document.activeElement);
            p.hidden = true;
            const b = document.getElementById('dsx-plus');
            if (b) { b.setAttribute('aria-expanded', 'false'); if (avaitFocus && !b.hidden) b.focus(); }
        }

        // Le calcul : la place entre le haut de la colonne et la colonne du bas (règle, zoom), moins
        // ce qu'occupent les boutons qui ne sont pas les nôtres ; le pas d'un bouton vient de la mesure.
        function ranger() {
            if (!proprio() || enCours) return;
            const haut = document.querySelector('.overlay-buttons-container.top') || document.querySelector('.overlay-buttons-container');
            if (!haut) return;
            enCours = true;
            try {
                // La feuille est celle du module qui range : un script plus ancien chargé avant avait posé
                // la sienne, et la 1.0.4 rangeait avec la feuille de la 1.0.3 (épingle invisible, mesuré le 31/10).
                let st = document.getElementById('dsx-style');
                if (!st) { st = document.createElement('style'); st.id = 'dsx-style'; document.head.appendChild(st); }
                if (st.getAttribute('data-dsx-v') !== V) { st.textContent = STYLE; st.setAttribute('data-dsx-v', V); }
                const p = panneau(), liste = p.querySelector('.dsx-liste');
                const t = tx();
                p.querySelector('.dsx-titre').textContent = t.titre;
                p.querySelector('.dsx-aide').textContent = t.aide;
                // Un script qui a repris (ou reconstruit) son bouton laisse une ligne vide : on la retire.
                for (const l of [...liste.children]) if (!l.firstElementChild || !l.firstElementChild.hasAttribute('data-dsx-dock')) l.remove();
                const items = [...document.querySelectorAll('[data-dsx-dock]')].filter(el => el.id !== 'dsx-plus');
                for (const el of items) if (!el.hasAttribute('data-dsx-ordre')) el.setAttribute('data-dsx-ordre', String(Date.now() * 100 + (ordre++ % 100)));
                const rang = el => Number(el.getAttribute('data-dsx-ordre')) || 0;
                items.sort((a, b) => rang(a) - rang(b));
                const epingles = lireEpingles();
                const prio = el => el.getAttribute('data-dsx-actif') === '1' ? 0 : (epingles.includes(el.getAttribute('data-dsx-dock')) ? 1 : 2);
                // L'épingle se voit sur le bouton, dans la colonne comme dans le panneau.
                for (const el of items) {
                    const v = epingles.includes(el.getAttribute('data-dsx-dock')) ? '1' : '0';
                    if (el.getAttribute('data-dsx-epingle') !== v) el.setAttribute('data-dsx-epingle', v);
                }

                const cs = getComputedStyle(haut);
                const ecart = parseFloat(cs.rowGap) || parseFloat(cs.gap) || 12;
                const rh = haut.getBoundingClientRect();
                const bas = document.querySelector('.overlay-buttons-container.bottom');
                const rb = bas && bas.getBoundingClientRect();
                const limite = (rb && rb.height && rb.top > rh.top + 40 ? rb.top : window.innerHeight) - 8;
                let occupe = 0;
                for (const c of haut.children) {
                    if (c.id === 'dsx-plus' || c.hasAttribute('data-dsx-dock')) continue;
                    const r = c.getBoundingClientRect();
                    if (r.height) occupe += r.height + ecart;
                }
                const pas = 40 + ecart;
                const place = Math.max(0, Math.floor((limite - rh.top - occupe + ecart) / pas));
                let visibles;
                if (items.length <= place) visibles = new Set(items);
                else {
                    const n = Math.max(0, place - 1);      // une place pour « ⋯ »
                    const choix = items.slice().sort((a, b) => prio(a) - prio(b) || rang(a) - rang(b));
                    visibles = new Set(choix.filter((el, i) => i < n || prio(el) === 0));
                }
                // Appliquer en ne déplaçant que ce qui doit bouger (les déplacements réveillent les
                // observateurs des scripts).
                const b = plus(haut);
                for (const el of items) {
                    if (visibles.has(el)) {
                        const ligne = el.parentElement && el.parentElement.classList.contains('dsx-ligne') ? el.parentElement : null;
                        if (el.parentElement !== haut) haut.insertBefore(el, b);
                        if (ligne) ligne.remove();
                    } else if (!(el.parentElement && el.parentElement.classList.contains('dsx-ligne'))) {
                        const ligne = document.createElement('div');
                        ligne.className = 'dsx-ligne';
                        ligne.appendChild(el);
                        ligne.insertAdjacentHTML('beforeend', '<button type="button" class="dsx-nom"></button><button type="button" class="dsx-epingle">&#x1F4CC;</button>');
                        liste.appendChild(ligne);
                    }
                }
                // Lignes dans l'ordre d'arrivée, libellés et état des épingles à jour.
                for (const el of items.filter(x => !visibles.has(x))) {
                    const ligne = el.parentElement;
                    liste.appendChild(ligne);
                    ligne.querySelector('.dsx-nom').textContent = el.getAttribute('data-dsx-nom') || el.getAttribute('data-dsx-dock');
                    const ep = ligne.querySelector('.dsx-epingle');
                    const on = epingles.includes(el.getAttribute('data-dsx-dock'));
                    ep.setAttribute('aria-pressed', String(on));
                    ep.title = on ? t.desepingler : t.epingler;
                    ep.setAttribute('aria-label', ep.title);
                }
                const caches = items.length - visibles.size;
                b.hidden = caches === 0;
                if (b.nextElementSibling) haut.appendChild(b);
                b.querySelector('.dsx-compte').textContent = String(caches);
                b.title = t.plus(caches);
                b.setAttribute('aria-label', b.title);
                if (!caches) fermerPanneau(); else placerPanneau();
            } finally {
                // Les mutations faites ici reviennent par l'observateur : on les laisse passer.
                setTimeout(() => { enCours = false; }, 0);
            }
        }

        let prevu = false;
        function planifier() {
            if (prevu) return;
            prevu = true;
            setTimeout(() => { prevu = false; ranger(); }, 60);
        }

        let observe = null;
        function brancher() {
            const haut = document.querySelector('.overlay-buttons-container.top') || document.querySelector('.overlay-buttons-container');
            if (!haut || observe === haut) return;
            observe = haut;
            new MutationObserver(() => { if (!enCours) planifier(); }).observe(haut, { childList: true, attributes: true, attributeFilter: ['data-dsx-actif', 'data-dsx-dock'], subtree: true });
        }

        // La mise en route attend la PREMIÈRE inscription d'un bouton : charger le script ne touche à rien
        // (ni écouteur, ni minuterie, ni attribut sur <html>) tant qu'il ne pose pas de bouton. Le banc de
        // démarrage de WCT évalue le script sans DOM complet, et il avait raison de le refuser.
        let demarre = false;
        function demarrer() {
            if (demarre) return;
            demarre = true;
            const html = document.documentElement;
            if (!html.getAttribute('data-dsx-dock-v') || cmp(V, html.getAttribute('data-dsx-dock-v')) > 0) {
                html.setAttribute('data-dsx-dock-v', V);
                html.setAttribute('data-dsx-dock-proprio', moi);
            }
            window.addEventListener('resize', planifier);
            // En capture : les copies plus anciennes ferment aussi sur Échap, sans rendre le focus ; la nôtre passe avant.
            window.addEventListener('keydown', ev => { if (ev.key === 'Escape') fermerPanneau(); }, true);
            document.addEventListener('click', ev => {
                const p = document.getElementById('dsx-panneau');
                if (p && !p.hidden && !p.contains(ev.target) && ev.target.id !== 'dsx-plus') fermerPanneau();
            }, true);
            // Clic droit sur un bouton de la colonne : on l'épingle, ou on le désépingle. Il n'agissait que
            // sur un bouton DÉJÀ épinglé : ailleurs, le menu du navigateur s'ouvrait (signalé par l'auteur,
            // 31/10/2026).
            document.addEventListener('contextmenu', ev => {
                const el = ev.target.closest && ev.target.closest('.overlay-buttons-container [data-dsx-dock]');
                if (!el || !proprio()) return;
                ev.preventDefault();
                const id = el.getAttribute('data-dsx-dock');
                const a = lireEpingles();
                ecrireEpingles(a.includes(id) ? a.filter(x => x !== id) : a.concat([id]));
                planifier();
            });
            // WME reconstruit parfois sa colonne : on se rebranche, et on range.
            setInterval(() => { brancher(); if (proprio()) planifier(); }, 2000);
        }

        return {
            // À appeler après avoir posé (ou reposé) son bouton dans la colonne.
            inscrire: (el, id, nom) => {
                demarrer();
                el.setAttribute('data-dsx-dock', id);
                el.setAttribute('data-dsx-nom', nom);
                brancher();
                planifier();
            },
            // Un script en cours d'usage garde son bouton visible.
            actif: (el, oui) => {
                if (!el) return;
                demarrer();
                const v = oui ? '1' : '0';
                // Rien si l'état ne change pas : un script peut le redire deux fois par seconde (WCT).
                if (el.getAttribute('data-dsx-actif') === v) return;
                el.setAttribute('data-dsx-actif', v);
                planifier();
            },
        };
    })();
    // <<< DSX-DOCK

    function poserFab() {
        if (document.getElementById(FAB_ID)) return;
        const c = document.querySelector('.overlay-buttons-container.top') || document.querySelector('.overlay-buttons-container');
        if (!c) { logUneFois('fab', 'colonne de boutons de la carte introuvable : bouton de la baguette non posé'); return; }
        const b = document.createElement('button');
        b.id = FAB_ID;
        b.type = 'button';
        b.title = t('tipFab');
        b.setAttribute('aria-label', t('tipFab'));
        b.setAttribute('aria-pressed', String(baguetteActive));
        b.innerHTML = icone(22);
        b.classList.toggle('on', baguetteActive);
        b.addEventListener('click', ev => { ev.stopPropagation(); basculerBaguette(); });
        c.appendChild(b);
        dsxDock.inscrire(b, SCRIPT_ID, SCRIPT_NAME);
        dsxDock.actif(b, baguetteActive);
    }

    // =====================================================================
    //  Apparence — mêmes jetons, même typo et mêmes gabarits que WCT et WJN
    // =====================================================================

    // ⚠️ Pas d'accent grave dans ce bloc : il vit dans un template literal.
    const CSS = `
:root {
    --wmw-blue: #2196f3; --wmw-blue-btn: #1976d2; --wmw-blue-dk: #1565c0; --wmw-grey: #9e9e9e;
    --wmw-surface: #ffffff; --wmw-bg: #f5f7f9; --wmw-border: #dde3ea;
    --wmw-text: #2d3748; --wmw-text2: #566372;
    --wmw-radius: 8px; --wmw-shadow: 0 8px 32px rgba(0,0,0,.22), 0 2px 8px rgba(0,0,0,.12);
}
.wmw-curseur, .wmw-curseur * { cursor: var(--wmw-curseur, crosshair) !important; }
.wmw-curseur-rot, .wmw-curseur-rot * { cursor: alias !important; }
.wmw-curseur-redim, .wmw-curseur-redim * { cursor: nwse-resize !important; }
:is(.wmw-curseur, .wmw-curseur-rot, .wmw-curseur-redim) :is(.overlay-buttons-container, .overlay-buttons-container *) { cursor: pointer !important; }
.wmw-row { display: flex; align-items: center; gap: 4px; font-family: 'Rubik','Open Sans',sans-serif; font-size: 12px; }
/* Barre des outils de forme : flottante au-dessus du lieu, sur la carte. */
#${BAR_ID} {
    position: fixed; z-index: 10040; padding: 4px 8px; gap: 3px;
    background: var(--wmw-surface); border: 1px solid var(--wmw-border); border-radius: 18px; box-shadow: 0 2px 8px rgba(0,0,0,.25);
}
#${BAR_ID}[hidden] { display: none; }
#${BAR_ID} .wmw-ico-bar { display: inline-flex; margin-inline-end: 2px; }
.wmw-lbl { font-size: 10px; font-weight: 600; color: var(--wmw-text2); text-transform: uppercase; letter-spacing: .04em; margin-inline-end: 2px; white-space: nowrap; }
.wmw-sep { width: 1px; height: 14px; background: var(--wmw-border); margin: 0 3px; flex-shrink: 0; }
/* Pastille ronde de 22 px, le gabarit de WJN. WME impose height:32px a tout bouton. */
.wmw-chip {
    display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0;
    width: 22px; height: 22px; min-height: 0; padding: 0; margin: 0;
    font-family: inherit; font-size: 13px; font-weight: 700; line-height: 1;
    border-radius: 50%; border: 1px solid var(--wmw-border);
    background: var(--wmw-surface); color: var(--wmw-text2); cursor: pointer; user-select: none;
    transition: background .12s, color .12s, border-color .12s, transform .1s;
}
.wmw-chip:hover, .wmw-chip.on { background: var(--wmw-blue-btn); border-color: var(--wmw-blue-btn); color: #fff; }
.wmw-chip:active { transform: scale(.92); }
.wmw-chip[disabled] { opacity: .4; cursor: not-allowed; }
.wmw-chip[disabled]:hover { background: var(--wmw-surface); border-color: var(--wmw-border); color: var(--wmw-text2); }
.wmw-chip:focus-visible, #wmw-sidebar :focus-visible, #${CARTE_ID} :focus-visible, #${FAB_ID}:focus-visible { outline: 2px solid var(--wmw-blue); outline-offset: 1px; }
/* Bouton de la carte : le gabarit du bouton de WCT. */
#${FAB_ID} {
    display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; min-height: 0;
    margin: 0; padding: 0; border: none; border-radius: 50%; background: #fff; cursor: pointer;
    box-shadow: 0 2px 6px rgba(0,0,0,.3); transition: box-shadow .15s, background .15s;
}
#${FAB_ID}:hover { box-shadow: 0 3px 10px rgba(0,0,0,.4); }
#${FAB_ID}.on { background: #e3f2fd; box-shadow: 0 0 0 2px var(--wmw-blue-btn), 0 2px 6px rgba(0,0,0,.3); }
/* Fenêtre d'aperçu : dans la couche de .edit-area-main (sous le panneau Calques) ; bulle : sur le body. */
#${CARTE_ID} {
    position: fixed; z-index: 10050; width: 320px; max-width: calc(100vw - 16px); box-sizing: border-box;
    padding: 0; overflow: hidden; background: var(--wmw-surface); border: 1px solid var(--wmw-border);
    border-radius: 12px; box-shadow: var(--wmw-shadow);
    font-family: 'Rubik','Open Sans',sans-serif; font-size: 12px; color: var(--wmw-text);
}
/* En-tête bleu déplaçable, comme les fenêtres des autres scripts de la collection (WRP, WCT, WBC). */
#${CARTE_ID} .wmw-pv-tete { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin: 0; padding: 7px 10px 7px 12px;
    background: linear-gradient(135deg, #1e88e5 0%, #1565c0 100%); color: #fff; cursor: move; user-select: none; }
.wmw-pv-titre { display: flex; align-items: center; gap: 6px; min-width: 0; font-size: 13px; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.wmw-pv-v { font-size: 11px; font-weight: 400; opacity: .9; }
.wmw-pv-x { flex-shrink: 0; width: 24px; height: 24px; min-height: 0; margin: 0; padding: 0; border: none; border-radius: 50%;
    background: rgba(255,255,255,.18); color: #fff; font-size: 12px; line-height: 1; cursor: pointer; display: flex; align-items: center; justify-content: center; }
.wmw-pv-x:hover { background: rgba(255,255,255,.35); }
.wmw-pv-btns { display: flex; gap: 5px; flex-shrink: 0; }
.wmw-pv-x[hidden] { display: none; }
.wmw-pv-x.wmw-pv-maj { background: #e53935; }
.wmw-pv-x.wmw-pv-maj:hover { background: #ef5350; }
.wmw-pv-maj svg { width: 14px; height: 14px; display: block; fill: currentColor; }
#${CARTE_ID} .wmw-pv-tete :focus-visible { outline-color: #fff; }
.wmw-pv-corps { padding: 8px 12px 10px; }
.wmw-pv-sous { display: flex; align-items: center; gap: 6px; margin-bottom: 6px; }
.wmw-pv-sous b { color: #1976d2; font-size: 13px; }
#${CARTE_ID}[hidden], #${TOAST_ID}[hidden], .wmw-pv-alerte[hidden], .wmw-pv-etat[hidden] { display: none !important; }
.wmw-pv-ico { display: inline-flex; }
.wmw-pv-stats { margin-inline-start: auto; font-size: 11px; color: var(--wmw-text2); font-variant-numeric: tabular-nums; white-space: nowrap; }
.wmw-pv-alerte > span { display: block; }
.wmw-pv-alerte > span + span { margin-top: 3px; }
.wmw-pv-alerte { margin: 0 0 6px; padding: 5px 8px; border-radius: 8px; background: #fff3e0; color: #8d4b00; font-size: 11px; font-weight: 600; }
.wmw-pv-etat { margin: 0 0 8px; }
.wmw-pv-etat-l { display: flex; justify-content: space-between; gap: 8px; margin-bottom: 3px; font-size: 11px; font-weight: 600; color: var(--wmw-blue-dk); }
.wmw-pv-etat-p { font-variant-numeric: tabular-nums; }
.wmw-pv-barre { height: 6px; border-radius: 50px; background: #e3f2fd; overflow: hidden; }
.wmw-pv-barre > span { display: block; width: 0; height: 100%; border-radius: 50px; background: var(--wmw-blue-btn); transition: width .15s linear; }
@media (prefers-reduced-motion: reduce) { .wmw-pv-barre > span { transition: none; } }
.wmw-pv-ligne { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; }
.wmw-pv-ligne label { font-size: 12px; font-weight: 600; white-space: nowrap; }
.wmw-pv-ligne input[type=range] { flex: 1; min-width: 0; accent-color: var(--wmw-blue-btn); }
.wmw-pv-ligne output { width: 2.5em; text-align: end; font-variant-numeric: tabular-nums; font-weight: 600; }
.wmw-pv-ligne select, #wmw-sidebar select { width: 100%; min-width: 0; height: 26px; box-sizing: border-box; font-family: inherit; font-size: 12px; border: 1px solid var(--wmw-border); border-radius: 6px; background: #fff; color: var(--wmw-text); }
.wmw-pv-boutons { display: flex; justify-content: flex-end; gap: 6px; margin-top: 4px; }
/* Remplacer le contour : sur sa propre ligne, le nom du lieu peut etre long. */
.wmw-pv-remplacer { display: block; width: 100%; margin-top: 6px !important; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.wmw-pv-remplacer[hidden] { display: none; }
.wmw-sb-lot { display: flex; align-items: center; gap: 4px; margin-top: 10px; }
.wmw-btn, .wmw-btn-sec {
    height: auto; min-height: 0; margin: 0; padding: 3px 10px; border: none; border-radius: 50px; cursor: pointer;
    font: 600 11px 'Rubik','Open Sans',sans-serif; line-height: 1.6;
}
.wmw-btn { background: var(--wmw-blue-btn); color: #fff; }
.wmw-btn:hover { background: var(--wmw-blue-dk); }
.wmw-btn[disabled] { opacity: .45; cursor: not-allowed; }
.wmw-btn-sec { background: #dde3ea; color: var(--wmw-text); }
.wmw-btn-sec:hover { background: #cfd8e2; }
.wmw-btn kbd, .wmw-btn-sec kbd { font: inherit; font-weight: 400; background: none; border: none; color: inherit; padding: 0; }
#${TOAST_ID} {
    position: fixed; z-index: 10060; transform: translateX(-50%); max-width: 480px;
    padding: 6px 12px; border-radius: 50px; background: #263238; color: #fff;
    font: 600 12px/1.5 'Rubik','Open Sans',sans-serif; box-shadow: 0 2px 8px rgba(0,0,0,.25); pointer-events: none;
}
#${TOAST_ID}.alerte { background: #c62828; }
/* Onglet Scripts — calque sur #wct-sidebar */
html:is([data-wme-studio-theme="dark"],[data-wme-studio-theme="black"]) #wmw-sidebar { color: var(--wme-studio-text, #e8eaed); }
html:is([data-wme-studio-theme="dark"],[data-wme-studio-theme="black"]) #wmw-sidebar :is(p,td,th,li,label,b,strong,bdi,dd,dt):not([class]) { color: inherit; }
html:is([data-wme-studio-theme="dark"],[data-wme-studio-theme="black"]) #wmw-sidebar :is([class*="hint"],[class*="-ver"],[class*="foot"],[class*="links"],[class*="-lbl"],[class*="etat"]) { color: var(--wme-studio-text-secondary, #b6c0ca); }
html:is([data-wme-studio-theme="dark"],[data-wme-studio-theme="black"]) #wmw-sidebar :is(h2,[class*="-sec"]:not(button)) { color: #64b5f6; }
html:is([data-wme-studio-theme="dark"],[data-wme-studio-theme="black"]) #wmw-sidebar :is([class*="help-hdr"],kbd,select,input[type=number]) { background: var(--wme-studio-input, #3a3f44); color: var(--wme-studio-text, #e8eaed); border-color: var(--wme-studio-border, #4a5056); }
html:is([data-wme-studio-theme="dark"],[data-wme-studio-theme="black"]) #wmw-sidebar [class*="help-hdr"].on { background: var(--wme-studio-hover, #454b52); color: var(--wme-studio-text, #e8eaed); }
html:is([data-wme-studio-theme="dark"],[data-wme-studio-theme="black"]) #wmw-sidebar [class*="help-body"] { color: var(--wme-studio-text, #e8eaed); }
html:is([data-wme-studio-theme="dark"],[data-wme-studio-theme="black"]) #wmw-sidebar a { color: #90caf9; }
html:is([data-wme-studio-theme="dark"],[data-wme-studio-theme="black"]) #${BAR_ID} .wmw-lbl { color: var(--wme-studio-text-secondary, #b6c0ca); }
html:is([data-wme-studio-theme="dark"],[data-wme-studio-theme="black"]) #${BAR_ID} .wmw-sep { background: var(--wme-studio-border, #4a5056); }
#wmw-sidebar { padding: 10px 12px; font-family: 'Rubik','Open Sans',sans-serif; font-size: 12px; color: var(--wmw-text); }
#wmw-sidebar h2 { display: flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 700; color: #1976d2; margin: 0 0 8px; }
#wmw-sidebar h2 .wmw-sb-ico { display: inline-flex; }
#wmw-sidebar h2 .wmw-sb-ver { font-size: 11px; font-weight: 400; color: var(--wmw-text2); }
.wmw-sb-hint { font-size: 11px; color: var(--wmw-text2); line-height: 1.6; margin: 0; }
.wmw-sb-sec { font-size: 11px; font-weight: 700; color: #1976d2; text-transform: uppercase; letter-spacing: .05em; margin: 14px 0 6px; }
.wmw-sb-action { display: flex; align-items: center; gap: 8px; margin-top: 10px; flex-wrap: wrap; }
.wmw-sb-etat { font-size: 11px; color: var(--wmw-text2); }
.wmw-sb-quota { margin: 6px 0 0; font-size: 11px; color: var(--wmw-text2); }
.wmw-pv-quota { margin: 2px 0 4px; font-size: 11px; color: var(--wmw-text2); }
.wmw-pv-astuce { margin: 0 0 4px; font-size: 11px; color: var(--wmw-text2); }
.wmw-bar-quota { text-transform: none; letter-spacing: 0; }
.wmw-quota-bas { color: #c62828 !important; font-weight: 600; }
.wmw-champ { margin-top: 8px; }
.wmw-champ > label { display: block; font-size: 12px; font-weight: 600; margin-bottom: 3px; }
.wmw-champ .wmw-sb-hint { margin-top: 2px; }
.wmw-curseur-ligne { display: flex; align-items: center; gap: 8px; }
.wmw-curseur-ligne input[type=range] { flex: 1; min-width: 0; accent-color: var(--wmw-blue-btn); }
.wmw-curseur-ligne output { width: 2.5em; text-align: end; font-variant-numeric: tabular-nums; font-weight: 600; }
.wmw-toggle-row { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-top: 12px; }
.wmw-toggle-lbl { font-size: 12px; font-weight: 600; cursor: pointer; }
.wmw-toggle { position: relative; width: 36px; height: 20px; flex-shrink: 0; }
.wmw-toggle input { opacity: 0; width: 0; height: 0; }
.wmw-toggle-slider { position: absolute; cursor: pointer; inset: 0; background: #8a94a0; border-radius: 50px; transition: background .2s; }
.wmw-toggle-slider:before { content: ''; position: absolute; width: 14px; height: 14px; inset-inline-start: 3px; bottom: 3px; background: #fff; border-radius: 50%; transition: transform .2s; }
.wmw-toggle input:checked + .wmw-toggle-slider { background: var(--wmw-blue); }
.wmw-toggle input:focus-visible + .wmw-toggle-slider { outline: 2px solid var(--wmw-blue-dk); outline-offset: 2px; }
.wmw-toggle input:checked + .wmw-toggle-slider:before { transform: translateX(16px); }
#wmw-sidebar[dir="rtl"] .wmw-toggle input:checked + .wmw-toggle-slider:before { transform: translateX(-16px); }
.wmw-help-section { border: 1px solid var(--wmw-border); border-radius: var(--wmw-radius); margin-bottom: 4px; overflow: hidden; }
.wmw-help-hdr {
    display: flex; align-items: center; justify-content: space-between; width: 100%;
    height: auto; min-height: 0; margin: 0; border: none; font-family: inherit; text-align: start;
    padding: 5px 9px; font-size: 11px; font-weight: 700; cursor: pointer; background: var(--wmw-bg); color: var(--wmw-text); user-select: none;
}
.wmw-help-hdr.on { color: var(--wmw-blue-dk); background: #e3f2fd; }
.wmw-help-hdr:hover { background: #eef4fb; }
.wmw-help-body { padding: 7px 9px; font-size: 11px; line-height: 1.5; color: var(--wmw-text); }
.wmw-help-body p { margin: 0 0 5px; }
.wmw-help-body a { color: var(--wmw-blue-dk); }
.wmw-help-table { width: 100%; border-collapse: collapse; }
.wmw-help-table td { padding: 3px 5px; vertical-align: top; border-bottom: 1px solid var(--wmw-border); }
.wmw-help-table td:first-child { width: 22px; white-space: nowrap; color: var(--wmw-text2); font-size: 13px; text-align: center; }
#wmw-sidebar kbd {
    display: inline-block; background: var(--wmw-bg); color: var(--wmw-text);
    border: 1px solid var(--wmw-border); border-bottom-width: 2px; border-radius: 3px;
    padding: 0 4px; font-family: ui-monospace,Menlo,Consolas,monospace; font-size: 10px; line-height: 1.5;
}
.wmw-sb-credit { margin-top: 12px; font-size: 11px; color: var(--wmw-text2); text-align: center; }
.wmw-sb-credit a, .wmw-sb-links a { color: var(--wmw-blue-dk); }
.wmw-sb-links { margin-top: 8px; padding-top: 10px; border-top: 1px solid var(--wmw-border); font-size: 11px; color: var(--wmw-text2); text-align: center; }
.wmw-sb-maj { margin: 0 0 8px; padding: 5px 8px; border-radius: 8px; background: #ffebee; color: #c62828; font-size: 11px; font-weight: 600; }
.wmw-sb-maj[hidden] { display: none; }
.wmw-sb-maj a { color: #c62828; }
.wmw-sb-foot { margin-top: 10px; font-size: 11px; color: var(--wmw-text2); line-height: 1.6; }
`;

    // =====================================================================
    //  Nouvelle version publiée — même mécanique que WCT, WRP, WDA et WJN
    // =====================================================================

    const gmScript = () => (typeof GM_info !== 'undefined' && GM_info.script) || {};
    const URL_MAJ = gmScript().updateURL || '';
    const URL_INSTALLER = gmScript().downloadURL || URL_GF || URL_GH;
    const VER_RE = /^\d+(\.\d+)*$/;
    const MAJ_KEY = 'wmw.maj.v1', MAJ_DELAI = 864e5;
    let majEnLigne = null;
    const majCmp = (a, b) => {
        const pa = String(a).split('.'), pb = String(b).split('.');
        for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
            const x = Number(pa[i]) || 0, y = Number(pb[i]) || 0;
            if (x !== y) return x < y ? -1 : 1;
        }
        return 0;
    };
    // Icône de mise à jour de l'en-tête de la fenêtre (comme WRP) : rouge, visible seulement si une version
    // plus récente est publiée ; elle ouvre la page d'installation.
    const ICONE_MAJ = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"/></svg>';
    function majRendre() {
        const b = carte && carte.querySelector('[data-wmw-pv="maj"]');
        if (b) { b.hidden = !majEnLigne; if (majEnLigne) { b.title = t('majBtn', majEnLigne); b.setAttribute('aria-label', t('majBtn', majEnLigne)); } }
        const e = document.getElementById('wmw-sb-maj');
        if (e) { e.hidden = !majEnLigne; if (majEnLigne) e.querySelector('span').textContent = t('majBtn', majEnLigne); }
    }
    function verifierMaj() {
        // Tant que le script n'est pas publié, il n'a pas d'URL de mise à jour : rien à lire.
        if (!URL_MAJ || !VER_RE.test(VERSION) || typeof GM_xmlhttpRequest !== 'function') return;
        let memo = null;
        try { memo = JSON.parse(localStorage.getItem(MAJ_KEY) || 'null'); } catch (e) { }
        if (memo && Date.now() - memo.t < MAJ_DELAI) {
            if (memo.v && VER_RE.test(memo.v) && majCmp(VERSION, memo.v) < 0) { majEnLigne = memo.v; majRendre(); }
            return;
        }
        const retenir = v => { try { localStorage.setItem(MAJ_KEY, JSON.stringify({ t: Date.now(), v })); } catch (e) { } };
        GM_xmlhttpRequest({
            method: 'GET', url: URL_MAJ, timeout: 10000, nocache: true,
            onload: r => {
                if (r.status < 200 || r.status >= 300) { retenir(null); return; }
                const m = (r.responseText || '').match(/^\/\/\s*@version\s+(\S+)/m);
                retenir(m && VER_RE.test(m[1]) ? m[1] : null);
                if (!m || !VER_RE.test(m[1]) || majCmp(VERSION, m[1]) >= 0) return;
                majEnLigne = m[1];
                majRendre();
                log('nouvelle version publiée : ' + m[1] + ' (installée : ' + VERSION + ')');
            },
            onerror: () => { }, ontimeout: () => { },
        });
    }

    // =====================================================================
    //  Onglet Scripts — même ossature que celui de WCT et WJN
    // =====================================================================

    const AIDE = [
        { id: 'wand', t: 'hWandT', b: 'hWandB', plus: 'hReplB' },
        { id: 'avoid', t: 'hAvoidT', b: 'hAvoidB' },
        { id: 'algo', t: 'hAlgoT', b: 'hAlgoB' },
        { id: 'tools', t: 'hToolsT', b: 'hToolsB', plus: 'hLotB' },
        { id: 'quota', t: 'hQuotaT', b: 'hQuotaB' },
        { id: 'keys', t: 'hKeysT', b: 'hKeysB' },
        { id: 'src', t: 'hSrcT', b: 'hSrcB' },
        { id: 'cred', t: 'hCredT', b: 'hCredB' },
    ];

    // Flèche d'une section d'aide fermée : vers la fin de ligne, donc à gauche en hébreu.
    const FLECHE = () => _lang === 'he' ? '&#x25C0;' : '&#x25B6;';

    const curseur = id => {
        const [min, max, pas] = BORNES[id], val = opts[id];
        return '<div class="wmw-curseur-ligne"><input type="range" id="wmw-' + id + '" min="' + min + '" max="' + max + '" step="' + pas + '" value="' + val + '"><output id="wmw-' + id + '-v" for="wmw-' + id + '">' + val + '</output></div>';
    };

    const construireOnglet = () => `
<div id="wmw-sidebar" dir="${_lang === 'he' ? 'rtl' : 'ltr'}">
    <h2><span class="wmw-sb-ico">${icone(18)}</span>${SCRIPT_NAME} <span class="wmw-sb-ver">v${VERSION}</span></h2>
    <p class="wmw-sb-maj" id="wmw-sb-maj" hidden><span></span> <a href="#" id="wmw-maj">${t('majInstall')}</a></p>
    <p class="wmw-sb-hint">${t('sbHint')}</p>
    <div class="wmw-sb-action">
        <button type="button" class="wmw-btn" id="wmw-sb-baguette" aria-pressed="${baguetteActive}">${baguetteActive ? t('btnOff') : t('btnOn')}</button>
        <span class="wmw-sb-etat" id="wmw-sb-etat" role="status">${baguetteActive ? t('stWait') : t('stOff')}</span>
    </div>
    <p class="wmw-sb-quota" data-wmw-quota="long" title="${escHtml(t('quotaTip'))}">${escHtml(texteQuota(false))}</p>
    <div class="wmw-sb-sec">&#x2728; ${t('secWand')}</div>
    <div class="wmw-champ"><label for="wmw-categorie">${t('lblCat')}</label><select id="wmw-categorie">${optionsCategories()}</select></div>
    <div class="wmw-toggle-row">
        <label class="wmw-toggle-lbl" for="wmw-toutes-cats">${t('lblAllCats')}</label>
        <label class="wmw-toggle"><input type="checkbox" id="wmw-toutes-cats" ${opts.toutesCategories ? 'checked' : ''}><span class="wmw-toggle-slider"></span></label>
    </div>
    <p class="wmw-sb-hint" style="margin-top:4px">${t('lblAllCatsHint')}</p>
    <div class="wmw-toggle-row">
        <label class="wmw-toggle-lbl" for="wmw-eviter">${t('lblAvoid')}</label>
        <label class="wmw-toggle"><input type="checkbox" id="wmw-eviter" ${opts.eviter ? 'checked' : ''}><span class="wmw-toggle-slider"></span></label>
    </div>
    <p class="wmw-sb-hint" style="margin-top:4px">${t('lblAvoidHint')}</p>
    <div class="wmw-toggle-row">
        <label class="wmw-toggle-lbl" for="wmw-bdtopo">${t('lblBdTopo')}</label>
        <label class="wmw-toggle"><input type="checkbox" id="wmw-bdtopo" ${opts.guideBdTopo ? 'checked' : ''}><span class="wmw-toggle-slider"></span></label>
    </div>
    <p class="wmw-sb-hint" style="margin-top:4px">${t('lblBdTopoHint')}</p>
    <p class="wmw-sb-hint" id="wmw-bdtopo-etat" role="status" style="margin-top:2px"></p>
    <div class="wmw-champ"><label for="wmw-verrou">${t('lblLock')}</label><select id="wmw-verrou">${optionsVerrou()}</select><p class="wmw-sb-hint">${t('lblLockHint')}</p></div>
    <div class="wmw-champ" id="wmw-marge-champ"${opts.eviter ? '' : ' hidden'}><label for="wmw-marge">${t('lblMargin')}</label>${curseur('marge')}<p class="wmw-sb-hint">${t('lblMarginHint')}</p></div>
    <div class="wmw-champ"><label for="wmw-curseur">${t('lblCursor')}</label><select id="wmw-curseur">${[['baguette', 'curWand'], ['pipette', 'curPicker'], ['viseur', 'curTarget'], ['fleche', 'curArrow'], ['croix', 'curCross']].map(([v, k]) => '<option value="' + v + '"' + (opts.curseur === v ? ' selected' : '') + '>' + t(k) + '</option>').join('')}</select></div>
    <div class="wmw-champ"><label for="wmw-barre">${t('lblBar')}</label><select id="wmw-barre">${[['dessus', 'barAbove'], ['dessous', 'barBelow'], ['masquee', 'barOff']].map(([v, k]) => '<option value="' + v + '"' + (opts.barre === v ? ' selected' : '') + '>' + t(k) + '</option>').join('')}</select></div>
    <div class="wmw-champ"><label for="wmw-algo">${t('lblAlgo')}</label><select id="wmw-algo"><option value="rgb"${opts.algo === 'rgb' ? ' selected' : ''}>${t('algoRgb')}</option><option value="lab"${opts.algo === 'lab' ? ' selected' : ''}>${t('algoLab')}</option></select></div>
    <div class="wmw-champ"><label for="wmw-tolerance">${t('lblTol')}</label>${curseur('tolerance')}<p class="wmw-sb-hint">${t('lblTolHint')}</p></div>
    <div class="wmw-champ"><label for="wmw-lissage">${t('lblSmooth')}</label>${curseur('lissage')}<p class="wmw-sb-hint">${t('lblSmoothHint')}</p></div>
    <div class="wmw-champ"><label for="wmw-precision">${t('lblDetail')}</label>${curseur('precision')}<p class="wmw-sb-hint">${t('lblDetailHint')}</p></div>
    <div class="wmw-sb-sec">&#x1F4D0; ${t('secShape')}</div>
    <div class="wmw-champ"><label for="wmw-angle">${t('lblAngle')}</label>${curseur('angle')}<p class="wmw-sb-hint">${t('lblAngleHint')}</p></div>
    <div class="wmw-champ"><label for="wmw-simplification">${t('lblSimp')}</label>${curseur('simplification')}<p class="wmw-sb-hint">${t('lblSimpHint')}</p></div>
    <div class="wmw-sb-lot wmw-row"><span class="wmw-lbl">${t('lblOnSel')}</span>${[['clone', '&#x29C9;', 'tipClone'], ['ortho', '&#x221F;', 'tipOrtho'], ['simp', '&#x2248;', 'tipSimp']].map(([q, g, k]) => '<button type="button" class="wmw-chip" data-wmw="' + q + '" title="' + escHtml(t(k)) + '" aria-label="' + escHtml(t(k)) + '">' + g + '</button>').join('')}</div>
    <p class="wmw-sb-hint" style="margin-top:4px">${t('lblOnSelHint')}</p>
    <div class="wmw-toggle-row">
        <label class="wmw-toggle-lbl" for="wmw-surligner">${t('lblHl')}</label>
        <label class="wmw-toggle"><input type="checkbox" id="wmw-surligner" ${opts.surligner ? 'checked' : ''}><span class="wmw-toggle-slider"></span></label>
    </div>
    <p class="wmw-sb-hint" style="margin-top:4px">${t('lblHlHint')}</p>
    <div class="wmw-sb-sec">&#x2753; ${t('sbHelp')}</div>
    ${AIDE.map((s, i) => `
    <div class="wmw-help-section">
        <button type="button" class="wmw-help-hdr${i === 0 ? ' on' : ''}" data-aide="${s.id}" aria-expanded="${i === 0}">${t(s.t)} <span aria-hidden="true">${i === 0 ? '&#x25BC;' : FLECHE()}</span></button>
        <div class="wmw-help-body" data-corps="${s.id}"${i === 0 ? '' : ' hidden'}>${t(s.b, nombre(ECHELLE_CIE94, 1), nombre(_pm, 0))}${s.plus ? t(s.plus) : ''}</div>
    </div>`).join('')}
    <p class="wmw-sb-credit">&#x2728; <a href="${URL_ORIG_GF}" target="_blank" rel="noopener">${t('creditLine')}</a> &nbsp;&#xB7;&nbsp; <a href="${URL_ORIG_GH}" target="_blank" rel="noopener">${t('creditGh')}</a></p>
    <div class="wmw-sb-links">${URL_DISCUSS ? `&#x1F4AC; <a href="${URL_DISCUSS}" target="_blank" rel="noopener">${t('lnkDiscuss')}</a> &nbsp;&#xB7;&nbsp; ` : ''}${URL_GF ? `&#x1F517; <a href="${URL_GF}" target="_blank" rel="noopener">GreasyFork</a> &nbsp;&#xB7;&nbsp; ` : ''}<a href="${URL_GH}" target="_blank" rel="noopener">GitHub</a></div>
    <p class="wmw-sb-foot">&#x1F512; ${t('hSafeB')}</p>
</div>`;

    async function poserOnglet() {
        try {
            const res = await sdk.Sidebar.registerScriptTab();
            res.tabLabel.innerHTML = '<span style="display:inline-flex;vertical-align:middle">' + icone(20) + '</span>';
            res.tabLabel.title = SCRIPT_NAME;
            res.tabLabel.setAttribute('aria-label', SCRIPT_NAME);
            res.tabPane.innerHTML = construireOnglet();
            majRendre();
            const p = res.tabPane;
            p.addEventListener('input', ev => {
                const el = ev.target;
                const cle = el.id && el.id.replace(/^wmw-/, '');
                if (!el.matches('input[type=range]') || !(cle in OPTS_DEFAUT)) return;
                opts[cle] = Number(el.value);
                const v = p.querySelector('#wmw-' + cle + '-v');
                if (v) v.textContent = String(opts[cle]);
                ecrireOpts();
                if (cle === 'angle') planifierSurlignage();
                if (cle === 'tolerance') { const pv = document.getElementById('wmw-pv-tol'); if (pv) { pv.value = el.value; const pvv = document.getElementById('wmw-pv-tol-v'); if (pvv) pvv.textContent = el.value; } }
                if (cle === 'tolerance' || cle === 'precision' || cle === 'marge') demanderApercu();
            });
            p.addEventListener('change', ev => {
                const el = ev.target;
                // La catégorie dit aussi quels lieux la baguette évite : l'aperçu ouvert est recalculé.
                if (el.id === 'wmw-categorie') { opts.categorie = el.value; ecrireOpts(); const s = document.getElementById('wmw-pv-cat'); if (s) s.value = opts.categorie; demanderApercu(); }
                else if (el.id === 'wmw-eviter') {
                    opts.eviter = el.checked;
                    ecrireOpts();
                    const c = document.getElementById('wmw-marge-champ');
                    if (c) c.hidden = !opts.eviter;
                    demanderApercu();
                }
                // Lissage et comparaison changent l'écart de chaque pixel : l'analyse du clic est refaite,
                // une fois, quand le curseur est relâché (pas à chaque cran).
                else if (el.id === 'wmw-lissage') reanalyser();
                else if (el.id === 'wmw-verrou') { const v = Number(el.value); opts.verrou = v >= 0 && v <= 6 ? v : 0; ecrireOpts(); }
                else if (el.id === 'wmw-algo') { opts.algo = el.value === 'lab' ? 'lab' : 'rgb'; ecrireOpts(); reanalyser(); }
                else if (el.id === 'wmw-surligner') { opts.surligner = el.checked; ecrireOpts(); planifierSurlignage(); }
                else if (el.id === 'wmw-curseur') { opts.curseur = el.value in CURSEURS ? el.value : OPTS_DEFAUT.curseur; ecrireOpts(); appliquerCurseur(); }
                else if (el.id === 'wmw-barre') { opts.barre = POSITIONS_BARRE.includes(el.value) ? el.value : OPTS_DEFAUT.barre; ecrireOpts(); placerBarre().catch(e => log('barre : ' + e.message)); }
                else if (el.id === 'wmw-bdtopo') { opts.guideBdTopo = el.checked; ecrireOpts(); planifierGuideBdTopo(0); }
                else if (el.id === 'wmw-toutes-cats') {
                    opts.toutesCategories = el.checked;
                    ecrireOpts();
                    // Les deux listes (onglet et fenêtre de la baguette) suivent l'option tout de suite.
                    for (const id of ['wmw-categorie', 'wmw-pv-cat']) { const s = document.getElementById(id); if (s) s.innerHTML = optionsCategories(); }
                }
            });
            p.addEventListener('click', ev => {
                if (ev.target.closest('#wmw-maj')) { ev.preventDefault(); window.open(URL_INSTALLER, '_blank', 'noopener'); return; }
                if (ev.target.closest('#wmw-sb-baguette')) { basculerBaguette(); return; }
                const outilSb = ev.target.closest('.wmw-sb-lot [data-wmw]');
                if (outilSb) { lancerAction(outilSb.getAttribute('data-wmw')); return; }
                const h = ev.target.closest('[data-aide]');
                if (!h) return;
                const corps = p.querySelector('[data-corps="' + h.getAttribute('data-aide') + '"]');
                const ouvert = corps.hidden;
                corps.hidden = !ouvert;
                h.classList.toggle('on', ouvert);
                h.setAttribute('aria-expanded', String(ouvert));
                h.querySelector('span').innerHTML = ouvert ? '&#x25BC;' : FLECHE();
            });
        } catch (e) { log('onglet : ' + e.message); }
    }

    // =====================================================================
    //  Raccourcis — déclarés sans touches, retenus d'une session à l'autre (comme WJN)
    // =====================================================================

    // WME ne garde PAS les touches attribuées aux raccourcis d'un script : au rechargement, le
    // script les redéclare et elles repartent à « None ». Le script les relit donc et les redonne
    // à createShortcut au chargement, au format « SA+j » que celui-ci affiche correctement.
    function versFormatSdk(k) {
        const m = /^(\d+),(\d+)$/.exec(String(k || ''));
        if (!m) return k || null;
        const bits = +m[1], code = +m[2];
        const touche = (code >= 48 && code <= 57) || (code >= 65 && code <= 90) ? String.fromCharCode(code).toLowerCase() : null;
        if (!touche) return null;
        const mods = (bits & 1 ? 'C' : '') + (bits & 2 ? 'S' : '') + (bits & 4 ? 'A' : '');
        return (mods ? mods + '+' : '') + touche;
    }
    const TOUCHES_KEY = 'wmw.raccourcis';
    let touchesConnues = '{}';
    function lireTouches() {
        try { const o = JSON.parse(localStorage.getItem(TOUCHES_KEY) || '{}'); return o && typeof o === 'object' ? o : {}; }
        catch (e) { return {}; }
    }
    let raccourcisLus = null;
    async function relireTouches() {
        try { raccourcisLus = await sdk.Shortcuts.getAllShortcuts(); } catch (e) { logUneFois('touches', 'raccourcis illisibles : ' + e.message); }
    }
    function retenirTouches() {
        ecrireTouches(raccourcisLus);
        relireTouches().then(() => ecrireTouches(raccourcisLus), () => { });
    }
    function ecrireTouches(liste) {
        if (!liste) return;
        const o = {};
        for (const r of liste || []) {
            if (!r || !/^wmw-/.test(r.shortcutId) || !r.shortcutKeys) continue;
            const k = versFormatSdk(r.shortcutKeys);
            if (k) o[r.shortcutId] = k;
            else logUneFois('touche-' + r.shortcutId, 'raccourci ' + r.shortcutId + ' : touche spéciale ' + r.shortcutKeys + ' non retenue');
        }
        const s = JSON.stringify(o);
        if (s === touchesConnues) return;
        try { localStorage.setItem(TOUCHES_KEY, s); touchesConnues = s; } catch (e) { }
    }

    async function poserRaccourcis() {
        const defs = [
            { id: 'wmw-wand', desc: 'scToggle', act: 'baguette' },
            { id: 'wmw-clone', desc: 'scClone', act: 'clone' },
            { id: 'wmw-square', desc: 'scOrtho', act: 'ortho' },
            { id: 'wmw-simplify', desc: 'scSimp', act: 'simp' },
            { id: 'wmw-rotate', desc: 'scRot', act: 'rot' },
            { id: 'wmw-resize', desc: 'scRes', act: 'res' },
            { id: 'wmw-wand-centre', desc: 'scCentre', act: 'centre' },
        ];
        const touches = lireTouches();
        touchesConnues = JSON.stringify(touches);
        for (const d of defs) {
            const creer = cles => sdk.Shortcuts.createShortcut({ shortcutId: d.id, shortcutKeys: cles, description: t(d.desc), callback: () => lancerAction(d.act) });
            try {
                await creer(versFormatSdk(touches[d.id]));
            } catch (e) {
                log('raccourci ' + d.id + ' : ' + e.message + (touches[d.id] ? ' — reposé sans touche' : ''));
                if (touches[d.id]) { try { await creer(null); } catch (e2) { log('raccourci ' + d.id + ' : ' + e2.message); } }
            }
        }
        await relireTouches();
        setInterval(() => { relireTouches(); }, 10000);
        pw.addEventListener('beforeunload', retenirTouches);
        document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') retenirTouches(); });
    }

    // =====================================================================
    //  Événements de la carte
    // =====================================================================

    async function brancherCarte() {
        const ecouter = (nom, f) => { try { sdk.Events.on({ eventName: nom, eventHandler: f }); } catch (e) { log('événement ' + nom + ' : ' + e.message); } };
        ecouter('wme-map-mouse-down', p => {
            posBas = p ? { x: p.x, y: p.y } : null;
            // Le clic de baguette désélectionne le lieu (WME, mesuré le 31/10/2026) : le lieu à
            // remplacer est relevé à l'appui, avant que la sélection ne tombe.
            if (baguetteActive) lieuSelectionne().then(v => { cibleClic = v && v.geometry.type === 'Polygon' ? { id: String(v.id), nom: String(v.name || '').trim() } : null; }, () => { cibleClic = null; });
        });
        // Un clic, pas un glisser : le pointeur n'a (presque) pas bougé entre l'appui et le relâché.
        // Mesuré dans WME le 31/10/2026 : les deux événements portent x/y (écran) ; un glisser de 60 px
        // les écarte de 83 px, alors que lon/lat restent ceux du point saisi.
        ecouter('wme-map-mouse-up', p => {
            if (!baguetteActive || !p || !Number.isFinite(p.lon)) return;
            if (posBas && Math.hypot(p.x - posBas.x, p.y - posBas.y) > 4) return;
            surClicCarte(p.lon, p.lat, ajoutClic).catch(e => { log('baguette : ' + e.message); etatCarte(null); toast(t('analysisErr'), true); });
        });
        ecouter('wme-selection-changed', () => {
            planifierPlacement(); planifierSurlignage();
            // Le bouton « Remplacer le contour » suit la sélection tant que la fenêtre est ouverte.
            if (carte && !carte.hidden) montrerCarte().catch(e => log('carte : ' + e.message));
        });
        ecouter('wme-map-move-end', () => { planifierSurlignage(); placerCarte(); planifierPlacement(); planifierGuideBdTopo(); });
        // Un enregistrement réussi compte les éditions réservées par la page ; la quitter sans
        // enregistrer les rend (ses modifications sont perdues). L'heure glisse et une autre page de
        // WME peut écrire : le reste affiché est relu.
        if (opts.guideBdTopo) planifierGuideBdTopo(1500);
        ecouter('wme-save-finished', r => { if (r && r.success) { confirmerEditions(); majQuota(); } });
        pw.addEventListener('pagehide', ev => { if (!ev.persisted) rendreEditions(); });
        window.addEventListener('storage', ev => { if (ev.key === _qn()) majQuota(); });
        setInterval(majQuota, 30000);
        // Pendant le glisser de la carte, la barre suit le lieu (une fois par image au plus).
        let suiviPrevu = false;
        ecouter('wme-map-move', () => {
            if (suiviPrevu || !document.getElementById(BAR_ID)) return;
            suiviPrevu = true;
            requestAnimationFrame(() => { suiviPrevu = false; planifierPlacement(); });
        });
        ecouter('wme-map-data-loaded', planifierSurlignage);
        ecouter('wme-after-edit', () => { planifierSurlignage(); planifierPlacement(); });
        ecouter('wme-after-undo', () => { planifierSurlignage(); planifierPlacement(); });
        document.addEventListener('keydown', ev => {
            if (!ev.target) return;
            const saisie = ev.target && ev.target.closest && ev.target.closest('input, textarea, select, [contenteditable="true"], wz-text-input, wz-textarea');
            if (modeForme && !geste && !saisie && !ev.repeat && ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(ev.key)) {
                // Gauche = sens anti-horaire, haut = plus grand. Les flèches ne déplacent plus la carte
                // tant que le mode dure.
                const pivoter = modeForme === 'pivoter';
                const sens = pivoter ? (ev.key === 'ArrowLeft' ? 1 : ev.key === 'ArrowRight' ? -1 : 0) : (ev.key === 'ArrowUp' ? 1 : ev.key === 'ArrowDown' ? -1 : 0);
                if (!sens) return;
                ev.preventDefault(); ev.stopPropagation();
                pasClavier(sens, ev.shiftKey).catch(e => log('clavier : ' + e.message));
                return;
            }
            if (ev.key === 'Escape') {
                // Échap déjà pris par WME (fermeture d'un menu, d'une fenêtre) : pas pour nous.
                if (ev.defaultPrevented) return;
                if (geste) { annulerGeste(); return; }
                if (modeForme) { finirModeForme(); return; }
                if (carte && !carte.hidden) { fermerApercu(); return; }
                // Échap ailleurs (un menu, une fenêtre de WME) n'éteint pas la baguette : seulement depuis
                // la carte, la page ou nos propres boutons.
                const libre = ev.target === document.body || ev.target === document.documentElement ||
                    (vueCarte && vueCarte.contains(ev.target)) || (ev.target.closest && ev.target.closest('#' + FAB_ID + ', #wmw-sidebar'));
                if (baguetteActive && !saisie && libre) basculerBaguette(false);
            } else if (ev.key === 'Enter' && !ev.repeat && carte && !carte.hidden && apercu && (!saisie || carte.contains(ev.target))) {
                // Entrée sur un bouton, un lien ou une liste garde son effet : sur « Annuler », elle CRÉAIT
                // le lieu (audit du 31/10/2026). Seuls « Créer », le curseur et la page créent.
                const ctrl = ev.target && ev.target.closest && ev.target.closest('button, a, [role=button], wz-button, summary, select');
                if (ctrl && !ctrl.matches('[data-wmw-pv="creer"]')) return;
                ev.preventDefault();
                creerLieu().catch(e => log('création : ' + e.message));
            }
        });
        try { vueCarte = await sdk.Map.getMapViewportElement(); } catch (e) { log('vue de la carte : ' + e.message); }
        // Les événements de carte du SDK ne disent pas si Alt était enfoncée : l'appui est relevé sur la
        // vue elle-même, en phase de capture (avant WME). Pas Maj : WME zoome sur Maj + clic.
        if (vueCarte) vueCarte.addEventListener('pointerdown', ev => { ajoutClic = !!ev.altKey; }, true);
        brancherGeste();
        window.addEventListener('resize', () => { placerCarte(); });
    }

    // =====================================================================
    //  INIT
    // =====================================================================

    // ─── VERSION MINIMALE ET INTÉGRITÉ (consignes de l'auteur, 11/10/2026, comme les autres scripts) ───
    // Au démarrage, le script lit version-min.json à la racine de son dépôt GitHub. Il NE DÉMARRE PAS :
    //  - si sa version est plus ancienne que `min` (version retirée après une correction) ;
    //  - si son code ne correspond pas à l'empreinte publiée pour sa version (`empreintes`) ;
    //  - si sa version n'est pas publiée (absente de `empreintes`) — sauf pour l'auteur.
    // Fichier injoignable ou illisible : le script démarre (une panne de GitHub ne doit pas paralyser
    // les éditeurs). ⚠️ Tout cela tourne dans le navigateur : il arrête la copie périmée ou bricolée,
    // pas celui qui retire ces lignes.
    const _VM_URL = 'https://raw.githubusercontent.com/DrSlump34/WME-Magic-Wand/master/version-min.json';
    const _VM_MAJ = URL_GF || URL_GH;
    const _vmCmp = (a, b) => {
        const x = String(a).split('.').map(Number), y = String(b).split('.').map(Number);
        for (let i = 0; i < Math.max(x.length, y.length); i++) { const d = (x[i] || 0) - (y[i] || 0); if (d) return d < 0 ? -1 : 1; }
        return 0;
    };
    const _vmJson = () => new Promise(res => {
        setTimeout(() => res(null), 7000);
        try {
            GM_xmlhttpRequest({ method: 'GET', url: _VM_URL + '?t=' + Date.now(), timeout: 6000,
                onload: r => { try { res(r.status === 200 ? JSON.parse(r.responseText) : null); } catch (e) { res(null); } },
                onerror: () => res(null), ontimeout: () => res(null) });
        } catch (e) { res(null); }
    });
    const _vmHx = s => { let x = 0x811c9dc5; for (let i = 0; i < s.length; i++) { x ^= s.charCodeAt(i); x = Math.imul(x, 0x01000193) >>> 0; } return x >>> 0; };
    const _vmAuteur = async () => {
        const estAuteur = n => !!n && _vmHx(String(n).toLowerCase()) === 0xc0bef069;
        try {
            const w = (typeof unsafeWindow !== 'undefined' && unsafeWindow.getWmeSdk) ? unsafeWindow : window;
            const sdkVm = w.getWmeSdk({ scriptId: 'wme-magic-wand-vm', scriptName: String(SCRIPT_NAME) + ' (version)', mode: 'async' });
            for (let i = 0; i < 20; i++) {
                let u = null;
                try { u = await sdkVm.State.getUserInfo(); } catch (e) { u = null; }
                if (u && u.userName) return estAuteur(u.userName);
                await new Promise(r => setTimeout(r, 500));
            }
        } catch (e) { /* SDK indisponible : on tente Discuss */ }
        try {
            const w = (typeof unsafeWindow !== 'undefined' && unsafeWindow.fetch) ? unsafeWindow : window;
            const r = await w.fetch('/discuss/session/current.json', { credentials: 'same-origin' });
            const j = r.ok ? await r.json() : null;
            return estAuteur(j && j.current_user && j.current_user.username);
        } catch (e) { return false; }
    };
    const _vmEmpreinte = async src => {
        const s = String(src).replace(/\r\n/g, '\n').split('\n').filter(l => !/^\/\/ @(downloadURL|updateURL)\b/.test(l)).join('\n');
        const h = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s));
        return [...new Uint8Array(h)].map(b => b.toString(16).padStart(2, '0')).join('');
    };
    const _vmVerdict = async () => {
        const src = (() => { try { return _wmeIntegre.toString(); } catch (e) { return ''; } })();
        let h = '';
        if (typeof src === 'string' && src.length) {
            try { h = await _vmEmpreinte(src); console.info('[' + String(SCRIPT_NAME) + ' v' + String(VERSION) + '] empreinte ' + h); } catch (e) { h = ''; }
        }
        try { document.documentElement.setAttribute('data-vm-' + _vmHx(_VM_URL).toString(36), h || 'sans-source'); } catch (e) { }
        const j = await _vmJson();
        if (!j || typeof j !== 'object') return null;
        const v = String(VERSION), num = /^\d+(\.\d+)*$/;
        if (num.test(v) && typeof j.min === 'string' && num.test(j.min) && _vmCmp(v, j.min) < 0) return { motif: 'retiree', min: j.min };
        if (!j.empreintes || typeof j.empreintes !== 'object') return null;
        const attendue = j.empreintes[v];
        if (!attendue) return (await _vmAuteur()) ? null : { motif: 'inconnue' };
        if (typeof src !== 'string' || !src.length) return null;
        if (!h) return null;
        return h === String(attendue).toLowerCase() ? null : { motif: 'modifiee' };
    };
    const _vmBandeau = j => {
        const ident = 'vm-' + _vmHx(_VM_URL).toString(36);
        if (document.getElementById(ident)) return;
        // pt-BR a son entrée : le portugais d'Europe « arranca » se lisait mal au Brésil.
    const lm = location.pathname.match(/^\/([a-z]{2})(-[A-Za-z]{2})?\//), l0 = (lm ? lm[1] + (lm[2] || '') : (navigator.language || 'en')).toLowerCase();
    const l = l0.startsWith('pt-br') ? 'pt-br' : l0.slice(0, 2);
        const n = String(SCRIPT_NAME), v = String(VERSION), m = j.min;
        const T = {
            fr: { retiree: `${n} v${v} est retirée\u00a0: une version corrigée est publiée (v${m} ou plus récente). Le script ne démarre pas tant qu’il n’est pas mis à jour (Tampermonkey ▸ Rechercher des mises à jour).`,
                  modifiee: `${n} v${v} ne correspond pas au code publié (copie modifiée ou abîmée). Le script ne démarre pas\u00a0: réinstallez-le depuis sa page officielle.`,
                  inconnue: `${n} v${v} n’est pas une version publiée. Le script ne démarre pas\u00a0: installez-le depuis sa page officielle.`,
                  maj: 'Mettre à jour', page: 'Page officielle', fermer: 'Fermer' },
            en: { retiree: `${n} v${v} has been withdrawn: a fixed version is published (v${m} or later). The script will not start until it is updated (Tampermonkey ▸ Check for updates).`,
                  modifiee: `${n} v${v} does not match the published code (modified or damaged copy). The script will not start: reinstall it from its official page.`,
                  inconnue: `${n} v${v} is not a published version. The script will not start: install it from its official page.`,
                  maj: 'Update', page: 'Official page', fermer: 'Close' },
            it: { retiree: `${n} v${v} è stata ritirata: è pubblicata una versione corretta (v${m} o successiva). Lo script non si avvia finché non viene aggiornato (Tampermonkey ▸ Cerca aggiornamenti).`,
                  modifiee: `${n} v${v} non corrisponde al codice pubblicato (copia modificata o danneggiata). Lo script non si avvia: reinstallalo dalla sua pagina ufficiale.`,
                  inconnue: `${n} v${v} non è una versione pubblicata. Lo script non si avvia: installalo dalla sua pagina ufficiale.`,
                  maj: 'Aggiorna', page: 'Pagina ufficiale', fermer: 'Chiudi' },
            de: { retiree: `${n} v${v} wurde zurückgezogen: eine korrigierte Version ist veröffentlicht (v${m} oder neuer). Das Skript startet erst nach dem Update (Tampermonkey ▸ Nach Updates suchen).`,
                  modifiee: `${n} v${v} entspricht nicht dem veröffentlichten Code (veränderte oder beschädigte Kopie). Das Skript startet nicht: von der offiziellen Seite neu installieren.`,
                  inconnue: `${n} v${v} ist keine veröffentlichte Version. Das Skript startet nicht: von der offiziellen Seite installieren.`,
                  maj: 'Aktualisieren', page: 'Offizielle Seite', fermer: 'Schließen' },
            es: { retiree: `${n} v${v} ha sido retirada: hay una versión corregida publicada (v${m} o posterior). El script no se inicia hasta que se actualice (Tampermonkey ▸ Buscar actualizaciones).`,
                  modifiee: `${n} v${v} no coincide con el código publicado (copia modificada o dañada). El script no se inicia: reinstálelo desde su página oficial.`,
                  inconnue: `${n} v${v} no es una versión publicada. El script no se inicia: instálelo desde su página oficial.`,
                  maj: 'Actualizar', page: 'Página oficial', fermer: 'Cerrar' },
            pt: { retiree: `${n} v${v} foi retirada: há uma versão corrigida publicada (v${m} ou mais recente). O script não arranca enquanto não for atualizado (Tampermonkey ▸ Procurar atualizações).`,
                  modifiee: `${n} v${v} não corresponde ao código publicado (cópia modificada ou danificada). O script não arranca: reinstale-o a partir da página oficial.`,
                  inconnue: `${n} v${v} não é uma versão publicada. O script não arranca: instale-o a partir da página oficial.`,
                  maj: 'Atualizar', page: 'Página oficial', fermer: 'Fechar' },
            'pt-br': { retiree: `${n} v${v} foi retirada: há uma versão corrigida publicada (v${m} ou mais recente). O script não inicia até ser atualizado (Tampermonkey ▸ Procurar atualizações).`,
                  modifiee: `${n} v${v} não corresponde ao código publicado (cópia modificada ou danificada). O script não inicia: reinstale-o pela página oficial.`,
                  inconnue: `${n} v${v} não é uma versão publicada. O script não inicia: instale-o pela página oficial.`,
                  maj: 'Atualizar', page: 'Página oficial', fermer: 'Fechar' },
            he: { retiree: `${n} v${v} הוסרה: פורסמה גרסה מתוקנת (v${m} ומעלה). הסקריפט לא יופעל עד שיעודכן (Tampermonkey ▸ חיפוש עדכונים).`,
                  modifiee: `${n} v${v} אינו תואם לקוד שפורסם (עותק ששונה או נפגם). הסקריפט לא יופעל: התקינו אותו מחדש מהדף הרשמי.`,
                  inconnue: `${n} v${v} אינה גרסה שפורסמה. הסקריפט לא יופעל: התקינו אותו מהדף הרשמי.`,
                  maj: 'עדכון', page: 'הדף הרשמי', fermer: 'סגירה' },
        };
        const L = T[l] || T.en;
        const d = document.createElement('div');
        d.id = ident;
        d.dir = l === 'he' ? 'rtl' : 'ltr';
        d.setAttribute('role', 'alert');
        d.style.cssText = 'position:fixed;top:56px;left:50%;transform:translateX(-50%);z-index:100000;max-width:560px;padding:10px 14px;' +
            'background:#ffebee;color:#b71c1c;border:1px solid #c62828;border-radius:8px;font:600 12px/1.5 Rubik,Arial,sans-serif;box-shadow:0 2px 8px rgba(0,0,0,.25)';
        const p = document.createElement('div'); p.textContent = L[j.motif] || L.inconnue; d.appendChild(p);
        const a = document.createElement('a'); a.href = _VM_MAJ; a.target = '_blank'; a.rel = 'noopener';
        a.textContent = (j.motif === 'retiree' ? L.maj : L.page) + ' ↗';
        a.style.cssText = 'display:inline-block;margin-top:6px;padding:3px 10px;border-radius:50px;background:#c62828;color:#fff;text-decoration:none';
        const x = document.createElement('button'); x.type = 'button'; x.textContent = '×'; x.setAttribute('aria-label', L.fermer || 'Close');
        x.style.cssText = 'position:absolute;top:2px;inset-inline-end:6px;border:0;background:none;color:#b71c1c;font-size:16px;cursor:pointer';
        x.onclick = () => d.remove();
        d.appendChild(a); d.appendChild(x);
        (document.body || document.documentElement).appendChild(d);
    };
    const _vmBloque = async () => { const j = await _vmVerdict(); if (j) { _vmBandeau(j); return true; } return false; };

    const init = async () => {
        if (await _vmBloque()) return;
        if (pw.__WMW_LOADED) return;
        pw.__WMW_LOADED = true;

        sdk = pw.getWmeSdk({ scriptId: SCRIPT_ID, scriptName: SCRIPT_NAME, mode: 'async' });
        // Le compteur du plafond horaire est rangé sous le pseudo : lu avant toute écriture.
        await lireQuotaUser();
        _lang = detectLang();
        opts = lireOpts();
        appliquerCurseur();

        const st = document.createElement('style');
        st.textContent = CSS;
        document.head.appendChild(st);

        await lireCategories();
        await poserCalques();
        await poserRaccourcis();
        await poserOnglet();
        relireRang().catch(e => log('rang : ' + e.message));
        await brancherCarte();
        creerToast();
        poserFab();
        // WME reconstruit sa colonne de boutons, et parfois sa vue : le bouton est reposé s'il a
        // disparu, la vue relue.
        setInterval(() => {
            poserFab();
            Promise.resolve(sdk.Map.getMapViewportElement()).then(v => { if (v) vueCarte = v; }, () => { });
        }, 2000);
        verifierMaj();

        planifierPlacement();
        planifierSurlignage();
        // Diagnostic, seulement sur demande (localStorage « wmw.debug » = « 1 ») : l'état et les
        // fonctions du calcul, pour chronométrer chaque phase sur la vraie imagerie.
        try {
            if (localStorage.getItem('wmw.debug') === '1') {
                pw.__wmwDebug = { etat: () => ({ image, analyse, apercu, opts, mesures, generation: generationAnalyse }), masqueAuSeuil, contourDepuis, boucherPincements, tracerContour, simplifierAnneau, anneauValide, niveauxDepuis, preparerAnalyse };
            }
        } catch (e) { }
        log('v' + VERSION + ' prêt — langue ' + _lang);
    };

    const lancer = () => { init().catch(e => log('démarrage : ' + e.message)); };
    // Démarrage dès que le SDK est prêt, à tous les zooms (comme WJN). Garde : wme-initialized et
    // wme-ready peuvent arriver tous les deux.
    (() => {
        let lance = false;
        const go = () => { if (lance) return; lance = true; clearInterval(minuterie); Promise.resolve(pw.SDK_INITIALIZED).then(lancer); };
        const pret = () => !!pw.SDK_INITIALIZED;
        const minuterie = setInterval(() => { if (pret()) go(); }, 300);
        if (pret()) go();
        document.addEventListener('wme-initialized', go, { once: true });
        document.addEventListener('wme-ready', go, { once: true });
    })();

})();
