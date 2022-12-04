/* THIS FILE IS FOR THE DEMO ONLY */

import * as React from "react"
import { Frame, addPropertyControls, ControlType, RenderTarget } from "framer"

export function BackgroundLoop(props) {
    if (RenderTarget.current() === RenderTarget.thumbnail) {
        return <Frame background={"#0D6EFF"} />
    }

    const { firstLine, fontSize, fontColor, backgroundColor } = props

    // Add staggering effect to the children of the container
    const containerVariants = {
        before: {},
        after: { transition: { staggerChildren: 0.6 } },
    }

    // Variants to make sure the box elements animate at the same time
    const boxVariants = {
        before: {},
        after: {},
    }

    // Variants for animating the box elements
    const boxElementVariants = {
        before: { opacity: 0, width: "0%" },
        after: {
            opacity: [0, 1, 1, 1, 0],
            width: ["0%", "50%", "50%", "50%", "0%"],
            transition: {
                ease: "easeInOut",
                duration: 3,
                yoyo: Infinity,
                repeatDelay: 0.8,
            },
        },
    }

    // Variants for animating the text
    const textVariants = {
        before: {
            y: -2,
            opacity: 0,
        },
        after: {
            y: [-2, 0, 0, 0, -2],
            opacity: [0, 1, 1, 1, 0],
            transition: {
                ease: "easeInOut",
                duration: 3 - 0.6 * 2,
                yoyo: Infinity,
                repeatDelay: 0.8 + 0.6 * 2,
            },
        },
    }

    return (
        // Only set initial and animate to the parent container in order for stagger effect to work correctly
        <Frame
            size={"100%"}
            background={""}
            variants={containerVariants}
            initial={"before"}
            animate={"after"}
        >
            <Frame size={"100%"} background={""} variants={boxVariants}>
                <Frame
                    center={"y"}
                    height={fontSize * 2}
                    background={backgroundColor}
                    left={"50%"}
                    variants={boxElementVariants}
                ></Frame>
                <Frame
                    center={"y"}
                    height={fontSize * 2}
                    background={backgroundColor}
                    right={"50%"}
                    variants={boxElementVariants}
                ></Frame>
            </Frame>
            <Frame
                center={"y"}
                height={fontSize * 1.2}
                width={"100%"}
                overflow={"hidden"}
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
                {firstLine}
            </Frame>
        </Frame>
    )
}

BackgroundLoop.defaultProps = {
    height: 52,
    width: 200,
    firstLine: "First Line",
    fontSize: 26,
    fontColor: "#000",
    backgroundColor: "#FFF",
}

addPropertyControls(BackgroundLoop, {
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
        title: "Font Color",
        type: ControlType.Color,
        defaultValue: "#000",
    },
    backgroundColor: {
        title: "BG Color",
        type: ControlType.Color,
        defaultValue: "#FFF",
    },
})
