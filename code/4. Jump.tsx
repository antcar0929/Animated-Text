import * as React from "react"
import { Frame, addPropertyControls, ControlType, RenderTarget } from "framer"

export function Jump(props) {
    if (RenderTarget.current() === RenderTarget.thumbnail) {
        return <Frame background={"#0499FF"} />
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
    const letterVariants = {
        before: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 16,
                stiffness: 200,
            },
        },
        after: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 16,
                stiffness: 200,
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
                        width={"auto"}
                        height={fontSize}
                        background={""}
                        variants={letterVariants}
                        style={{ position: "relative" }}
                    >
                        {// Set space to a non-breaking space, or a space with a default width
                        l === " " ? "\u00A0" : l}
                    </Frame>
                ))}
            </Frame>
        </Frame>
    )
}

Jump.defaultProps = {
    height: 28,
    width: 200,
    firstLine: "First Line",
    fontSize: 26,
    fontColor: "#FFF",
    stagger: 0.06,
}

addPropertyControls(Jump, {
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
