import * as React from "react"
import { Frame, addPropertyControls, ControlType, RenderTarget } from "framer"

export function MiddleReveal(props) {
    if (RenderTarget.current() === RenderTarget.thumbnail) {
        return <Frame background={"#0055FF"} />
    }

    const { firstLine, secondLine, duration, fontSize, fontColor } = props

    // Variants for animating the first line
    const textVariantsTop = {
        before: { y: fontSize * 1.2 },
        after: { y: 0 },
    }

    // Variants for animating the second line
    const textVariantsBottom = {
        before: { y: -fontSize * 1.2 },
        after: { y: 0 },
    }

    return (
        <Frame size={"100%"} background={""}>
            <Frame height={"auto"} width={"100%"} background={""} center>
                <Frame
                    width={"100%"}
                    height={fontSize * 1.2}
                    y={-fontSize * 1.2}
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
                        variants={textVariantsTop}
                        initial={"before"}
                        animate={"after"}
                        transition={{
                            ease: "easeOut",
                            duration: duration,
                        }}
                    >
                        {firstLine}
                    </Frame>
                </Frame>
                <Frame
                    width={"100%"}
                    height={fontSize * 1.2}
                    y={0}
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
                        variants={textVariantsBottom}
                        initial={"before"}
                        animate={"after"}
                        transition={{
                            ease: "easeOut",
                            duration: duration,
                        }}
                    >
                        {secondLine}
                    </Frame>
                </Frame>
            </Frame>
        </Frame>
    )
}

MiddleReveal.defaultProps = {
    height: 56,
    width: 200,
    firstLine: "First Line",
    secondLine: "Second Line",
    duration: 0.4,
    fontSize: 26,
    fontColor: "#FFF",
}

addPropertyControls(MiddleReveal, {
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
    duration: {
        title: "Duration",
        type: ControlType.Number,
        defaultValue: 0.4,
        min: 0,
        max: 2,
        unit: "s",
        step: 0.1,
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
