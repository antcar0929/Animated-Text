/* THIS FILE IS FOR THE DEMO ONLY */

import * as React from "react"
import {
    Frame,
    addPropertyControls,
    ControlType,
    useAnimation,
    RenderTarget,
} from "framer"

export function JumpLoop(props) {
    if (RenderTarget.current() === RenderTarget.thumbnail) {
        return <Frame background={"#0499FF"} />
    }

    const { firstLine, fontSize, fontColor } = props

    // Create an array of letters
    const string = Array.from(firstLine)

    const letterAnimation = useAnimation()

    async function animateLoop() {
        for (;;) {
            await letterAnimation.start({ opacity: 1, y: 0 })
            await letterAnimation.start({ opacity: 0, y: 40 })
        }
    }

    animateLoop()

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
                        initial={{ opacity: 0, y: 40 }}
                        animate={letterAnimation}
                        style={{ position: "relative" }}
                        transition={{
                            type: "spring",
                            damping: 16,
                            stiffness: 240,
                            delay: 0.06 * i,
                        }}
                    >
                        {// Set space to a non-breaking space, or a space with a default width
                        l === " " ? "\u00A0" : l}
                    </Frame>
                ))}
            </Frame>
        </Frame>
    )
}

JumpLoop.defaultProps = {
    height: 28,
    width: 200,
    firstLine: "First Line",
    fontSize: 26,
    fontColor: "#FFF",
}

addPropertyControls(JumpLoop, {
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
