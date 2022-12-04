import * as React from "react"
import { Frame, addPropertyControls, ControlType, RenderTarget } from "framer"

export function Background(props) {
    if (RenderTarget.current() === RenderTarget.thumbnail) {
        return <Frame background={"#0D6EFF"} />
    }

    const { firstLine, fontSize, fontColor, backgroundColor, stagger } = props

    // Add staggering effect to the children of the container
    const containerVariants = {
        before: {},
        after: { transition: { staggerChildren: stagger } },
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
            opacity: 1,
            width: "50%",
            transition: {
                ease: "easeInOut",
                duration: 0.6,
            },
        },
    }

    // Variants for animating the text
    const textVariants = {
        before: {
            y: -2,
            opacity: 0,
            transition: {
                ease: "easeInOut",
                duration: 0.3,
            },
        },
        after: {
            y: 0,
            opacity: 1,
            transition: {
                ease: "easeInOut",
                duration: 0.3,
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

Background.defaultProps = {
    height: 52,
    width: 200,
    firstLine: "First Line",
    fontSize: 26,
    fontColor: "#000",
    backgroundColor: "#FFF",
    stagger: 0.4,
}

addPropertyControls(Background, {
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
    stagger: {
        type: ControlType.Number,
        title: "Stagger",
        defaultValue: 0.4,
        min: 0,
        max: 5,
        unit: "s",
        step: 0.1,
        displayStepper: true,
    },
})
