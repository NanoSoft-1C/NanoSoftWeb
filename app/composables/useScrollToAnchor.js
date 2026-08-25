/**
 * Плавный скролл к якорю с учётом высоты фиксированной шапки.
 * На страницах без блока обратной связи ссылки на #callback ведут к контактам в футере.
 */
export function useScrollToAnchor() {
    return function scrollToAnchor(anchorId) {
        if (import.meta.server) return

        const element = document.querySelector('#' + anchorId)
            || (anchorId === 'callback' ? document.querySelector('#footer') : null)

        if (!element) return

        const header = document.querySelector('#header')

        const elementTop = element.getBoundingClientRect().top + window.scrollY
        const scrollPosition = elementTop - (header ? header.offsetHeight : 0)

        window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
        })
    }
}
