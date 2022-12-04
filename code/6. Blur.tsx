import * as React from "react"
import { Frame, addPropertyControls, ControlType, RenderTarget } from "framer"

export function Blur(props) {
    if (RenderTarget.current() === RenderTarget.thumbnail) {
        return <Frame background={"#8400FF"} />
    }

    const { firstLine, fontSize, fontColor, delay, blur } = props

    // Create an array of letters
    const string = Array.from(firstLine)

    // Variants for animating each letter
    const letterVariants = {
        before: i => ({
            opacity: 0,
            scale: 4,
            transition: {
                ease: "easeOut",
            },
            filter: `blur(${blur}px)`,
        }),
        after: i => ({
            opacity: 1,
            scale: 1,
            transition: {
                ease: "easeOut",
                // Delay the animations for each letter with the generated numbers
                delay: numbers[i] * delay,
            },
            filter: "blur(0px)",
        }),
    }

    // Create an array of random numbers
    let numbers = []

    for (let i = 0; i < string.length; i++) {
        let j = Math.floor(Math.random() * string.length)
        numbers.push(j)
    }

    return (
        <Frame size={"100%"} background={""}>
            {
                // Set the display and justifyContent properties to align the text correctly
            }
            <Frame
                center={"y"}
                height={fontSize}
                width={"100%"}
                background={""}
                style={{
                    fontFamily: "Montserrat, Work Sans, sans-serif",
                    fontWeight: "bold",
                    letterSpacing: "-0.04em",
                    fontSize: fontSize,
                    color: fontColor,
                    display: "flex",
                    justifyContent: "center",
                }}
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
                        height={fontSize}
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

Blur.defaultProps = {
    height: 28,
    width: 200,
    firstLine: "First Line",
    fontSize: 26,
    fontColor: "#FFF",
    delay: 0.04,
    blur: 10,
}

addPropertyControls(Blur, {
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
    delay: {
        type: ControlType.Number,
        title: "Stagger",
        defaultValue: 0.04,
        min: 0,
        max: 1,
        unit: "s",
        step: 0.01,
        displayStepper: true,
    },
    blur: {
        type: ControlType.Number,
        title: "Blur",
        defaultValue: 10,
        min: 0,
        max: 20,
        unit: "px",
        step: 1,
        displayStepper: true,
    },
})
