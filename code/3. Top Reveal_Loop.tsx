/* THIS FILE IS FOR THE DEMO ONLY */

import * as React from "react"
import { Frame, addPropertyControls, ControlType, RenderTarget } from "framer"

export function TopRevealLoop(props) {
    if (RenderTarget.current() === RenderTarget.thumbnail) {
        return <Frame background={"#1184FE"} />
    }

    const {
        firstLine,
        secondLine,
        thirdLine,
        lineGap,
        fontSize,
        fontColor,
    } = props

    // Array of text to loop through
    const items = [firstLine, secondLine, thirdLine]

    // Variants for animating the text
    const textVariants = {
        before: {
            y: -fontSize * 1.2,
            opacity: 0.6,
        },
        after: i => ({
            y: 0,
            opacity: 1,
            transition: {
                ease: "easeOut",
                duration: 0.3,
                delay: 0.3 * i,
                yoyo: Infinity,
                repeatDelay: 2,
            },
        }),
    }

    // Variants for animating the line container
    const lineContainerVariants = {
        before: {},
        after: {},
    }

    // Variants for animating the lines
    const lineVariants = {
        before: {
            opacity: 0,
            width: 0,
        },
        after: {
            opacity: 1,
            width: 35,
            transition: {
                ease: "easeIn",
                duration: 0.3,
                delay: 0.3 * 3,
                yoyo: Infinity,
                repeatDelay: 2,
            },
        },
    }

    return (
        <Frame size={"100%"} background={""}>
            <Frame
                height={(fontSize * 1.2 + lineGap) * 3 + 6}
                width={"100%"}
                center={"y"}
                background={""}
                initial={"before"}
                animate={"after"}
            >
                {
                    // Dynamically render components to reduce redundant code
                }
                {items.map((item, i) => (
                    <Frame
                        key={i}
                        width={"100%"}
                        height={fontSize * 1.2}
                        y={(fontSize * 1.2 + lineGap) * i}
                        overflow={"hidden"}
                        background={""}
                    >
                        <Frame
                            custom={i}
                            size={"100%"}
                            background={""}
                            style={{
                                fontFamily: "Montserrat, Work Sans, sans-serif",
                                fontWeight: "bold",
                                letterSpacing: "-0.04em",
                                fontSize: fontSize,
                                color: fontColor,
                            }}
                            variants={textVariants}
                        >
                            {item}
                        </Frame>
                    </Frame>
                ))}
                <Frame
                    size={"100%"}
                    background={""}
                    variants={lineContainerVariants}
                >
                    <Frame
                        background={""}
                        height={4}
                        y={(fontSize * 1.2 + lineGap) * 3 + 10}
                        backgroundColor={fontColor}
                        left={"50%"}
                        style={{ position: "absolute" }}
                        variants={lineVariants}
                    />
                    <Frame
                        background={""}
                        height={4}
                        y={(fontSize * 1.2 + lineGap) * 3 + 10}
                        backgroundColor={fontColor}
                        right={"50%"}
                        style={{ position: "absolute" }}
                        variants={lineVariants}
                    />
                </Frame>
            </Frame>
        </Frame>
    )
}

TopRevealLoop.defaultProps = {
    height: 104,
    width: 200,
    firstLine: "First Line",
    secondLine: "Second Line",
    thirdLine: "Third Line",
    lineGap: 0,
    fontSize: 26,
    fontColor: "#FFF",
}

addPropertyControls(TopRevealLoop, {
    firstLine: {
        title: "First Line",
        type: ControlType.String,
        defaultValue: "First Line",
    },
    secondLine: {
        title: "Second Line",
        type: ControlType.String,
        defaultValue: "Second Line",
    },
    thirdLine: {
        title: "Third Line",
        type: ControlType.String,
        defaultValue: "Third Line",
    },
    lineGap: {
        title: "Line Gap",
        type: ControlType.Number,
        defaultValue: 0,
        min: 0,
        max: 10,
        unit: "px",
        step: 1,
        displayStepper: true,
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
})
