const colorWhite = '#D0D0D0'
const colorBlack = '#494949'

const lineWidth = 16
const pointRadius = 16
const cornerLength = 32

const offsetWidth = 50
const offsetHeight = 25


function initAllLines() {
    const wrappers = document.querySelectorAll('.canvasItem')

    wrappers.forEach(wrapper => {
        const canvas = document.createElement('canvas')
            canvas.width = wrapper.offsetWidth + offsetWidth*2
            canvas.style.width = `${wrapper.offsetWidth + offsetWidth*2}px`;
            canvas.height = wrapper.clientHeight
            canvas.classList.add('lineCanvas')
        const ctx = canvas.getContext('2d')

        wrapper.style.position = wrapper.style.position || 'relative'
        wrapper.appendChild(canvas)

        const pointsString = wrapper.getAttribute('points')
        const points = new Function(`return (${pointsString})`)()

        if (!points) return

        points.forEach(point => {

            let x, y = 0
            const wrapperRect = wrapper.getBoundingClientRect()

            const targetRectX = point.position.x.elem ? 
                document.getElementById(point.position.x.elem).getBoundingClientRect() :
                wrapperRect
            const targetRectY = point.position.y.elem ? 
                document.getElementById(point.position.y.elem).getBoundingClientRect() :
                wrapperRect

            // const cornerHoriz = point.corner == 'right' || point.corner == 'left'
            // const directionHoriz = point.direction == 'right' || point.direction == 'left'


            const pos = point.position || {}
            switch (pos.x.value) {
                case 'center':
                    x = targetRectX.left - wrapperRect.left + targetRectX.width / 2;
                    break;
            }

            switch (pos.y.value) {
                case 'center':
                    y = targetRectY.top - wrapperRect.top + targetRectY.height / 2;
                    break;
            }


            switch (point.type) {
                case 'start':
                    ctx.moveTo(x, y)

                    break;

                case 'point':
                    // рисуем внешний кружок
                    ctx.beginPath()
                    ctx.arc(x, y, pointRadius, 0, Math.PI * 2)
                    ctx.fillStyle = colorWhite
                    ctx.fill()

                    // внутренний кружок
                    ctx.beginPath()
                    ctx.arc(x, y, pointRadius/2, 0, Math.PI * 2)
                    ctx.fillStyle = colorBlack
                    ctx.fill()

                    ctx.beginPath()
                    ctx.moveTo(
                        point.direction == 'left' ? x + pointRadius/2 : 
                            point.direction == 'right' ? x - pointRadius/2 : x, 
                        point.direction == 'top' ? y + pointRadius/2 : 
                            point.direction == 'bottom' ? y + pointRadius/2 : y
                    )

                    break;

                // case 'line':
                //     if (point.direction) {
                //         const dx = cornerLength * Math.cos(Math.PI / 4)

                //         ctx.lineTo(
                //             x-dx, 
                //             directionHoriz ? y : y + 50
                //         )
                //     } else {
                //         ctx.lineTo(
                //             x, 
                //             cornerHoriz ? y - lineWidth : y
                //         )
                //     }

                //     ctx.lineWidth = lineWidth
                //     ctx.strokeStyle = colorWhite
                //     ctx.stroke()

                //     break;
            
                default:
                    break;
            }

            // if (point.corner && !point.direction) {
            //     const dx = cornerLength * Math.cos(Math.PI / 4)
            //     const dy = cornerLength * Math.sin(Math.PI / 4)

            //     ctx.lineTo(
            //         x + (point.corner == 'right' ? dx : -dx), 
            //         (cornerHoriz ? y - lineWidth : y) + dy
            //     )
            //     ctx.lineWidth = lineWidth
            //     ctx.strokeStyle = colorWhite
            //     ctx.stroke()
            // }
        })

    })
}

const DTLine = {
    initAllLines,
}
  
export  { DTLine }










function relativePos(item, parent) {
    return {
        top    : item.getBoundingClientRect().top - parent.getBoundingClientRect().top,
        right  : item.getBoundingClientRect().right - parent.getBoundingClientRect().right,
        bottom : item.getBoundingClientRect().bottom - parent.getBoundingClientRect().bottom,
        left   : item.getBoundingClientRect().left - parent.getBoundingClientRect().left,
    }
}

function getPosition(value, margin, position) {
    let x, y

    let elemHoriz = document.querySelector(position.horizontally.value)
    let parentHoriz = document.querySelector(position.horizontally.parent)
    let elemVerti = document.querySelector(position.vertically.value)
    let parentVerti = document.querySelector(position.vertically.parent)

    if (position.horizontally.type == 'elem') {
        x = relativePos( elemHoriz, parentHoriz ).left + 
        (position.horizontally.align == "right" ? elemHoriz.offsetWidth + margin.horizontally : 0) + 
        (position.horizontally.align == "left" ? 0 - margin.horizontally : 0) + 
        (position.horizontally.align == "center" ? elemHoriz.offsetWidth/2 : 0)
    } else if (position.horizontally.type == 'wrap') {
        x = position.horizontally.value == "right" ? parentHoriz.offsetWidth : 0 ;
        if (window.innerWidth < 768) x-= 10
    }

    if (position.vertically.type == 'elem') {
        y = relativePos( elemVerti, parentVerti ).top + 
        (position.vertically.align == "bottom" ? elemVerti.offsetHeight + margin.vertically : 0) + 
        (position.vertically.align == "top" ? 0 - margin.vertically : 0) + 
        (position.vertically.align == "center" ? elemVerti.offsetHeight/2 : 0)

        console.log(relativePos( elemVerti, parentVerti ).top);
    } else if (position.vertically.type == 'wrap') {
        y = position.vertically.value == "bottom" ? parentVerti.offsetHeight - margin.vertically : 0 + margin.vertically
    }

    return value == 'x' ? x : y ;
}

function printPoint(context, type, mobile, global, paddingLeft, x, y) {
    switch (type) {
        case 'start':
            context.lineCap = 'round';
            context.beginPath()
                context.arc(
                    x, y, 
                    (mobile ? 5 : 8), 0, 
                    Math.PI * 2, true
                );
                context.fill()

                context.moveTo(x + (mobile ? 15 : 22), y)
                context.arc(
                    x, y, 
                    (mobile ? 15 : 22), 0, 
                    Math.PI * 2, true
                );
            context.setLineDash([0, 0])
            context.stroke()

            break;

        case 'point':
            context.lineCap = 'round';
            context.beginPath()
                context.arc(
                    x, y, 
                    (mobile ? 2 : 4), 0, 
                    Math.PI * 2, true
                );
                context.fill()
            context.setLineDash([0, 0])
            context.stroke()

            break;

        case 'corner':
            context.beginPath()
                if (global.vertically == 'bottom') {
                    context.moveTo(
                        x + (global.horizontally == 'right' ? 32 : -33) + (paddingLeft ? paddingLeft : 0), 
                        y
                    )

                    context.bezierCurveTo(
                        x - 1 + (global.horizontally == 'right' ? 16 : -16),  y,
                        x - 1, y + 8,
                        x - 1, y + 32,
                    )
                } else {
                    context.moveTo(
                        x + (paddingLeft ? paddingLeft - 1 : 0), 
                        y - 32
                    )

                    context.bezierCurveTo(
                        x - 1 + (global.horizontally == 'right' ? 0 : 0)    + (paddingLeft ? paddingLeft : 0),  y - 8,
                        x - 1 + (global.horizontally == 'right' ? 16 : -16) + (paddingLeft ? paddingLeft : 0),  y,
                        x - 1 + (global.horizontally == 'right' ? 32 : -32) + (paddingLeft ? paddingLeft : 0),  y,
                    )
                }
                
                
            context.setLineDash([5, 5])
            context.stroke()

            break;
    
        default:
            //console.log('switch none');
            break;
    }
}

function printLine(context, line, lineRevert, mobile, type1, global1, x1, y1, type2, global2, x2, y2) {
    if (line == "move") return

    function getPoint(type, line, global, position) {
        let result = 0

        if (position == "horizontally" && line == "horizontally") {
            if (type == 'start') result = lineRevert ? -(mobile ? 16 : 23) : (mobile ? 16 : 23)
            if (type == 'corner') result = global && global.horizontally == "right" ? 32 : -32
        } else if (position == "vertically" && line == "vertically") {
            if (type == 'start') result = 23
            if (type == 'corner') result = 32
        }

        return result
    }

    context.beginPath()
        context.moveTo(
            x1 + getPoint(type1, line, global1, 'horizontally') - 1, 
            y1 + getPoint(type1, line, global1, 'vertically')
        )
        context.lineTo(
            x2 + getPoint(type2, line, global2, 'horizontally') - 1, 
            y2 - getPoint(type2, line, global2, 'vertically')
        )
    context.setLineDash([5, 5])
    context.stroke()
}

function initCanvas( canvas ) {
    let mobile = window.innerWidth <= 768 ? true : false ;

    let points = JSON.parse(canvas.getAttribute('points'))
        points = points[mobile ? 'tablet' : 'laptop']
    let setting = JSON.parse(canvas.getAttribute('setting'))

    let parentHeight = document.querySelector(setting.height).offsetHeight
    let parentWidth = document.querySelector(setting.width).offsetWidth
        canvas.height = parentHeight
        canvas.style.height = `${parentHeight}px`
        canvas.width = parentWidth
        canvas.style.width = `${parentWidth}px`
    let context = canvas.getContext("2d");


    context.strokeStyle = "#04B8FF"
    context.fillStyle = "#04B8FF";
    context.lineWidth = 2

    for (const key in points) {
        printPoint(
            context, points[Number(key)].type, mobile, 
            points[Number(key)].position.global, points[Number(key)].paddingLeft,

            getPosition('x', points[Number(key)].margin, points[Number(key)].position),
            getPosition('y', points[Number(key)].margin, points[Number(key)].position)
        ) 

        if (points[Number(key)+1]) printLine(
            context, points[Number(key)].line, points[Number(key)].lineRevert, mobile,

            points[Number(key)].type, points[Number(key)].position.global,
            getPosition('x', points[Number(key)].margin, points[Number(key)].position),
            getPosition('y', points[Number(key)].margin, points[Number(key)].position),

            points[Number(key)+1].type, points[Number(key)+1].position.global,
            getPosition('x', points[Number(key)+1].margin, points[Number(key)+1].position),
            getPosition('y', points[Number(key)+1].margin, points[Number(key)+1].position)
        )
    }
}