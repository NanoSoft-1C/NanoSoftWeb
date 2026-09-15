import VectorTileLayer from 'ol/layer/VectorTile'
import { applyStyle } from 'ol-mapbox-style'

/**
 * Единая подложка для всех карт сайта (футер + блок «Компании, которые нам доверяют»).
 *
 * Раньше здесь был CARTO dark_all — он закрыл анонимный доступ и теперь отдаёт
 * тайлы с водяным знаком «API KEY REQUIRED». Замена — OpenFreeMap: тёмный стиль
 * того же тона (фон rgb(12,12,12)), без API-ключа, без лимитов и с разрешённым
 * коммерческим использованием.
 *
 * Тайлы векторные, поэтому подписи остаются резкими на любом зуме и ретине,
 * а слой не упирается в потолок масштаба, как растровые подложки.
 *
 * Копирайт подтягивается автоматически из TileJSON источника, дублировать его
 * в attributions не нужно.
 */

const BASEMAP_STYLE_URL = 'https://tiles.openfreemap.org/styles/dark'

// в стиле два источника (векторный + растровая подсветка рельефа для мелких
// зумов), берём явно векторный — рельеф на наших зумах всё равно не виден
const BASEMAP_SOURCE = 'openmaptiles'

/**
 * Создаёт слой подложки. className: 'grayTiles' — фильтр из main.scss ложится
 * только на подложку, маркеры остаются нетронутыми.
 */
export function createBasemapLayer() {
    const layer = new VectorTileLayer({
        className: 'grayTiles',
        declutter: true
    })

    applyStyle(layer, BASEMAP_STYLE_URL, BASEMAP_SOURCE).catch(error => {
        console.warn('Не удалось загрузить стиль подложки карты', error)
    })

    return layer
}
