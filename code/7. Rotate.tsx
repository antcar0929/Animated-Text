import * as React from "react"
import { Frame, addPropertyControls, ControlType, RenderTarget } from "framer"

export function Rotate(props) {
    if (RenderTarget.current() === RenderTarget.thumbnail) {
        return <Frame background={"#9C00FF"} />
    }

    const { firstLine, fontSize, fontColor, stagger } = props

    // Create an array of letters
    const string = Array.from(firstLine)

    // Add staggering effect to the children of the container
    const containerVariants = {
        before: {},
        after: { transition: { staggerChildren: stagger } },
    }

    // Variants for animating each letter
    // Set transform origin for desired effect
    const letterVariants = {
        before: {
            rotate: 90,
            opacity: 0,
            transformOrigin: "left bottom",
            transition: {
                ease: "easeOut",
                y: { stiffness: 1000, velocity: -100 },
            },
        },
        after: {
            rotate: 0,
            opacity: 1,
            transformOrigin: "left bottom",
            transition: {
                ease: "easeOut",
                y: { stiffness: 1000, velocity: -100 },
            },
        },
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

Rotate.defaultProps = {
    height: 28,
    width: 200,
    firstLine: "First Line",
    fontSize: 26,
    fontColor: "#FFF",
    stagger: 0.06,
}

addPropertyControls(Rotate, {
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
    stagger: {
        type: ControlType.Number,
        title: "Stagger",
        defaultValue: 0.06,
        min: 0,
        max: 1,
        unit: "s",
        step: 0.01,
        displayStepper: true,
    },
})
