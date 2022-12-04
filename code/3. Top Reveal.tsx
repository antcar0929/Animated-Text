import * as React from "react"
import { Frame, addPropertyControls, ControlType, RenderTarget } from "framer"

export function TopReveal(props) {
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
        stagger,
        duration,
    } = props

    // Array of text to loop through
    const items = [firstLine, secondLine, thirdLine]

    // Add staggering effect to the children of the container
    const containerVariants = {
        before: {},
        after: { transition: { staggerChildren: stagger } },
    }

    // Variants for animating the text
    const textVariants = {
        before: {
            y: -fontSize * 1.2,
            opacity: 0.6,
        },
        after: {
            y: 0,
            opacity: 1,
            transition: { ease: "easeOut", duration: duration },
        },
    }

    // Variants for animating the line container
    const lineContainerVariants = {
        before: {},
        after: { transition: { delayChildren: stagger * 3 } },
    }

    // Variants for animating the lines
    const lineVariants = {
        before: {
            opacity: 0,
            width: 0,
        },
        after: {
            opacity: 1,
            width: 20,
            transition: { ease: "easeIn", duration: 0.2 },
        },
    }

    return (
        <Frame size={"100%"} background={""}>
            <Frame
                height={(fontSize * 1.2 + lineGap) * 3 + 6}
                width={"100%"}
                center={"y"}
                background={""}
                variants={containerVariants}
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
                        height={2}
                        y={(fontSize * 1.2 + lineGap) * 3 + 8}
                        backgroundColor={fontColor}
                        left={"50%"}
                        style={{ position: "absolute" }}
                        variants={lineVariants}
                    />
                    <Frame
                        background={""}
                        height={2}
                        y={(fontSize * 1.2 + lineGap) * 3 + 8}
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

TopReveal.defaultProps = {
    height: 108,
    width: 200,
    firstLine: "First Line",
    secondLine: "Second Line",
    thirdLine: "Third Line",
    lineGap: 0,
    fontSize: 26,
    fontColor: "#FFF",
    stagger: 0.3,
    duration: 0.4,
}

addPropertyControls(TopReveal, {
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
    stagger: {
        type: ControlType.Number,
        title: "Stagger",
        defaultValue: 0.3,
        min: 0,
        max: 5,
        unit: "s",
        step: 0.1,
        displayStepper: true,
    },
    duration: {
        type: ControlType.Number,
        title: "Duration",
        defaultValue: 0.4,
        min: 0,
        max: 5,
        unit: "s",
        step: 0.1,
        displayStepper: true,
    },
})
