import * as React from "react"
import { Frame, addPropertyControls, ControlType, RenderTarget } from "framer"

export function Fly(props) {
    if (RenderTarget.current() === RenderTarget.thumbnail) {
        return <Frame background={"#BA02FF"} />
    }

    const { width, firstLine, fontSize, fontColor, duration, stagger } = props

    // Create an array of letters
    const string = Array.from(firstLine)

    // Add staggering effect to the children of the container
    const containerVariants = {
        before: {},
        after: { transition: { staggerChildren: stagger } },
    }

    // Variants for animating each letter
    const letterVariants = {
        before: i => ({
            x: width,
            rotateX: 180 * numbersX[i],
            rotateY: 180 * numbersY[i],
            rotateZ: 180 * numbersZ[i],
        }),
        after: {
            x: 0,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            transition: {
                ease: "circOut",
                duration: duration,
            },
        },
    }

    // Create an array of random numbers
    let numbersX = []
    let numbersY = []
    let numbersZ = []

    for (let i = 0; i < string.length; i++) {
        let j = Math.random() * 2 - 1
        let k = Math.random() * 2 - 1
        let l = Math.random() * 2 - 1
        numbersX.push(j)
        numbersY.push(k)
        numbersZ.push(l)
    }

    return (
        <Frame size={"100%"} background={""}>
            {
                // Set the display and justifyContent properties to align the text correctly
            }
            <Frame
                center={"y"}
                height={fontSize * 1.2}
                width={"100%"}
                background={""}
                overflow={"hidden"}
                style={{
                    fontFamily: "Montserrat, Work Sans, sans-serif",
                    fontWeight: "bold",
                    letterSpacing: "-0.04em",
                    fontSize: fontSize,
                    color: fontColor,
                    display: "flex",
                    justifyContent: "center",
                }}
                variants={containerVariants}
                initial={"before"}
                animate={"after"}
            >
                {
                    // Map through the text and only animate if the letter is not a space
                }
                {string.map((l, i) => (
                    // Set width to "auto" in order to ensure default kerning
                    <Frame
                        key={i}
                        custom={i}
                        height={fontSize * 1.2}
                        background={""}
                        variants={letterVariants}
                        style={{ width: "auto", position: "relative" }}
                    >
                        {// Set space to a non-breaking space, or a space with a default width
                        l === " " ? "\u00A0" : l}
                    </Frame>
                ))}
            </Frame>
        </Frame>
    )
}

Fly.defaultProps = {
    height: 28,
    width: 200,
    firstLine: "First Line",
    fontSize: 26,
    fontColor: "#FFF",
    duration: 0.8,
    stagger: 0.1,
}

addPropertyControls(Fly, {
    firstLine: {
        title: "Text",
        type: ControlType.String,
        defaultValue: "First Line",
    },
    fontSize: {
        title: "Font Size",
        type: ControlType.Number,
        defaultValue: 26,
        min: 0,
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
    duration: {
        type: ControlType.Number,
        title: "Duration",
        defaultValue: 0.8,
        min: 0,
        max: 5,
        unit: "s",
        step: 0.1,
        displayStepper: true,
    },
    stagger: {
        type: ControlType.Number,
        title: "Stagger",
        defaultValue: 0.1,
        min: 0,
        max: 1,
        unit: "s",
        step: 0.01,
        displayStepper: true,
    },
})
