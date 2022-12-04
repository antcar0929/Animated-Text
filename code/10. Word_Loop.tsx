import * as React from "react"
import { Frame, addPropertyControls, ControlType, RenderTarget } from "framer"

export function WordLoop(props) {
    if (RenderTarget.current() === RenderTarget.thumbnail) {
        return <Frame background={"#FFB442"} />
    }

    const { firstLine, fontSize, fontColor } = props

    // Create an array of words
    let wordStrings = firstLine.split(" ")

    // Variants for animating the container
    const wordContainerVariants = {
        before: { opacity: 0 },
        after: i => ({
            opacity: 1,
            transition: {
                ease: "circInOut",
                duration: 0.15,
                delay: i * 0.15,
                when: "beforeChildren",
            },
        }),
    }

    // Variants for animating the words
    const wordVariants = {
        before: { y: 15 },
        after: i => ({
            y: 0,
            transition: {
                ease: "easeOut",
                duration: 0.15,
                yoyo: Infinity,
                repeatDelay: 2,
            },
        }),
    }

    return (
        // Set the display and justifyContent properties to align the text correctly
        <Frame
            center={"y"}
            height={fontSize}
            width={"100%"}
            background={""}
            style={{
                display: "flex",
                justifyContent: "center",
            }}
        >
            {
                // Map through the words
            }
            {wordStrings.map((word, index) => (
                // Animate the container for staggering fade in effect
                <Frame
                    key={index}
                    custom={index}
                    width={"auto"}
                    height={fontSize * 1.2}
                    background={""}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        position: "relative",
                    }}
                    variants={wordContainerVariants}
                    initial={"before"}
                    animate={"after"}
                >
                    {
                        // Animate the text for jump up effect
                    }
                    <Frame
                        width={"auto"}
                        height={fontSize}
                        background={""}
                        style={{
                            position: "relative",
                            fontFamily: "Montserrat, Work Sans, sans-serif",
                            fontWeight: "bold",
                            letterSpacing: "-0.04em",
                            fontSize: fontSize,
                            color: fontColor,
                        }}
                        variants={wordVariants}
                    >
                        {word}
                    </Frame>
                    {// Add space after word only if it is not the last word
                    index !== wordStrings.length - 1 ? (
                        <Frame
                            width={fontSize / 3}
                            height={fontSize}
                            background={""}
                            style={{
                                position: "relative",
                            }}
                        />
                    ) : null}
                </Frame>
            ))}
        </Frame>
    )
}

WordLoop.defaultProps = {
    height: 28,
    width: 200,
    firstLine: "First Line",
    fontSize: 26,
    fontColor: "#FFF",
}

addPropertyControls(WordLoop, {
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
})
