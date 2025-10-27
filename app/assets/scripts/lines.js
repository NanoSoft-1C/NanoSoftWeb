const colorWhite = '#D0D0D0'
const colorBlack = '#494949'

const lineWidth = 16
const pointRadius = 16
const cornerLength = 32

const offsetWidth = 50
const offsetHeight = 25


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
            context.beginPath()

            //     context.strokeStyle = colorBlack
            //     context.fillStyle = colorBlack
            //     context.arc(
            //         x, y, 
            //         (mobile ? pointRadius/2 : pointRadius), 0, 
            //         Math.PI * 2, true
            //     )

            // context.fill()

                context.moveTo(x + (mobile ? pointRadius/2 : pointRadius), y)
                context.strokeStyle = colorWhite
                context.fillStyle = colorWhite
                context.arc(
                    x, y, 
                    (mobile ? pointRadius/2 : pointRadius), 0, 
                    Math.PI * 2, true
                )

            context.stroke()

            break;

        case 'point':
            context.lineWidth = 1
            context.beginPath()

                context.strokeStyle = colorWhite
                context.fillStyle = colorWhite
                context.arc(
                    x-1, y, 
                    (mobile ? pointRadius/3+pointRadius/2 : pointRadius/2+pointRadius/2), 0, 
                    Math.PI * 2, true
                )

            context.fill()

            //     context.moveTo(x + (mobile ? pointRadius/3+pointRadius/2 : pointRadius/2+pointRadius/2), y)
            //     context.strokeStyle = colorBlack
            //     context.fillStyle = colorBlack
            //     context.arc(
            //         x, y, 
            //         (mobile ? 2 : 2), 0, 
            //         Math.PI * 2, true
            //     )

            // context.fill()

            context.stroke()
            context.lineWidth = lineWidth

            break;

        case 'corner':
            context.beginPath()
                if (global.vertically == 'bottom') {
                    context.moveTo(
                        x + (global.horizontally == 'right' ? cornerLength : -cornerLength-2) + (paddingLeft ? paddingLeft : 0), 
                        y
                    )

                    context.bezierCurveTo(
                        x - 0 + (global.horizontally == 'right' ? cornerLength/2 : -cornerLength/2),  y,
                        x - 1, y + cornerLength/4,
                        x - 1, y + cornerLength,
                    )
                } else {
                    context.moveTo(
                        x + (paddingLeft ? paddingLeft : -1), 
                        y - cornerLength
                    )

                    context.bezierCurveTo(
                        x - 1 + (global.horizontally == 'right' ? 0 : 0) + (paddingLeft ? paddingLeft : 0),  y - cornerLength/4,
                        x - 0 + (global.horizontally == 'right' ? cornerLength/2 : -cornerLength/2) + (paddingLeft ? paddingLeft : 0),  y,
                        x - 2 + (global.horizontally == 'right' ? cornerLength : -cornerLength) + (paddingLeft ? paddingLeft : 0),  y,
                    )
                }
                
            context.stroke()

            break;
        
        case 'break':
            // context.beginPath()
            // context.strokeStyle = "rgba(208, 208, 208, 0)"
            // context.fillStyle = "rgba(208, 208, 208, 0)"
            // context.moveTo(x,y);
            // context.lineTo(x+20,y);
            // context.stroke()
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


    context.strokeStyle = colorWhite
    context.fillStyle = colorWhite
    context.lineWidth = lineWidth
    context.lineCap = "round"

    points.forEach((point, index) => {
        let nextPoint = points[index+1]

        printPoint(
            context, point.type, mobile, 
            point.position.global, point.paddingLeft,

            getPosition('x', point.margin, point.position),
            getPosition('y', point.margin, point.position)
        ) 

        if (nextPoint) printLine(
            context, point.line, point.lineRevert, mobile,

            point.type, point.position.global,
            getPosition('x', point.margin, point.position),
            getPosition('y', point.margin, point.position),

            nextPoint.type, nextPoint.position.global,
            getPosition('x', nextPoint.margin, nextPoint.position),
            getPosition('y', nextPoint.margin, nextPoint.position)
        )
    })
}

const DTLine = {
    initCanvas,
}
  
export  { DTLine }
