import {Children, cloneElement, ReactElement, useEffect, useRef} from "react";
import {Box, BoxProps} from "@mui/material";

function getPos(current: HTMLElement) {
    const {children, scrollTop} = current, {length} = children
    let index = -1, most = Infinity
    for (let i = 0; i < length; i++) {
        const element = children[i]
        const {offsetTop, offsetHeight} = element as HTMLElement
        if (offsetTop - current.offsetTop + offsetHeight >= scrollTop && offsetTop < most) {
            index = i
            most = offsetTop
        }
    }
    const element = children[index] as HTMLElement
    return element ?
        {i: index, j: (scrollTop + current.offsetTop - element.offsetTop) / element.offsetHeight} :
        {i: index, j: 1}
}

function setPos(current: HTMLElement, pos: { i: number, j: number }) {
    const {i, j} = pos
    const element = current.children[i] as HTMLElement
    current.scrollTop = element ?
        element.offsetTop - current.offsetTop + element.offsetHeight * j :
        current.scrollHeight
}

function syncScroller(nodes: HTMLElement[]) {
    const {length} = nodes
    let sign = 0
    const connected = nodes.map(ele => {
        const listener = () => {
            if (sign) --sign
            else {
                sign = length - 1
                const pos = getPos(ele)
                for (const node of nodes) if (node !== ele) setPos(node, pos)
            }
        }
        ele.addEventListener('scroll', listener)
        return () => ele.removeEventListener('scroll', listener)
    })
    return () => connected.forEach(value => value())
}

export default function Rope({children, ...props}: BoxProps) {
    const ref = useRef(new Array<HTMLElement>(Children.count(children)))
    useEffect(() => syncScroller(ref.current), [ref])
    return <Box {...props}>
        {Children.map(children, (child, index) => cloneElement(
            child as ReactElement,
            {
                ref: (current: HTMLElement) => {
                    ref.current[index] = current
                }
            }
        ))}
    </Box>
}
