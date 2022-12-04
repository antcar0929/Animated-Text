import * as React from "react"
import { Frame, addPropertyControls, ControlType, RenderTarget } from "framer"

export function Glitch(props) {
    if (RenderTarget.current() === RenderTarget.thumbnail) {
        return <Frame background={"#FF9900"} />
    }

    const { width, firstLine, fontSize, fontColor, rowNum } = props

    // Create array as long as the number of slices
    let items = []
    for (let m = 0; m < rowNum; m++) {
        items.push(0)
    }

    // Variants for animating each slice
    const boxVariants = {
        before: i => ({
            x: -width * directions[i],
            opacity: 0.6,
        }),
        after: i => ({
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 4,
                mass: 0.1,
                velocity: 500,
                delay: numbers[i] * 0.03,
            },
        }),
    }

    // Create an array of random numbers and directions
    let numbers = []
    let directions = []

    while (numbers.length < rowNum) {
        let j = Math.floor(Math.random() * rowNum) + 1
        let k = Math.round(Math.random()) * 2 - 1
        // Make sure that the number is unique
        numbers.indexOf(j) === -1 ? numbers.push(j) : null
        directions.push(k)
    }

    return (
        <Frame
            center={"y"}
            height={fontSize * 1.3}
            width={"100%"}
            background={""}
            overflow={"hidden"}
            initial={"before"}
            animate={"after"}
        >
            {items.map((item, i) => (
                // Create the clipping mask for each slice and position them accordingly
                <Frame
                    key={i}
                    custom={i}
                    center={"y"}
                    width={"100%"}
                    height={(fontSize * 1.3) / rowNum}
                    overflow={"hidden"}
                    background={""}
                    y={((fontSize * 1.3) / rowNum) * i - (fontSize * 1.3) / 2}
                    variants={boxVariants}
                >
                    {
                        // Create containers for the text and position them accordingly
                    }
                    <Frame
                        size={"100%"}
                        background={""}
                        y={((fontSize * 1.3) / rowNum) * (rowNum / 2 - i)}
                        style={{
                            fontFamily: "Montserrat, Work Sans, sans-serif",
                            fontWeight: "bold",
                            letterSpacing: "-0.04em",
                            fontSize: fontSize,
                            color: fontColor,
                        }}
                    >
                        {firstLine}
                    </Frame>
                </Frame>
            ))}
        </Frame>
    )
}

Glitch.defaultProps = {
    height: 28,
    width: 200,
    firstLine: "First Line",
    fontSize: 26,
    fontColor: "#FFF",
    rowNum: 10,
}

addPropertyControls(Glitch, {
    firstLine: {
        title: "Text",
        type: ControlType.String,
        defaultValue: "First Line",
    },
    fontSize: {
        title: "Font Size",
        type: ControlType.Number,
        defaultValue: 26,
        min: 12,
        max: 120,
        unit: "pt",
        step: 1,
        displayStepper: true,
    },
    fontColor: {
        title: "Color",
        type: ControlType.Color,
        defaultValue: "#FFF",
    },
    rowNum: {
        title: "Slices",
        type: ControlType.Number,
        defaultValue: 10,
        min: 4,
        max: 26,
        step: 2,
        displayStepper: true,
    },
})
