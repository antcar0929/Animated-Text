/* THIS FILE IS FOR THE DEMO ONLY */

import * as React from "react"
import {
    Frame,
    addPropertyControls,
    ControlType,
    useAnimation,
    RenderTarget,
} from "framer"

export function RotateLoop(props) {
    if (RenderTarget.current() === RenderTarget.thumbnail) {
        return <Frame background={"#9C00FF"} />
    }

    const { firstLine, fontSize, fontColor } = props

    // Create an array of letters
    const string = Array.from(firstLine)

    // Create letter animation
    const letterAnimation = useAnimation()

    async function animateLoop() {
        for (;;) {
            await letterAnimation.start(i => ({
                rotate: 0,
                opacity: 1,
                transformOrigin: "left bottom",
                transition: {
                    ease: "easeOut",
                    delay: 1 + 0.06 * i,
                    y: { stiffness: 1000, velocity: -100 },
                },
            }))
            await letterAnimation.start(i => ({
                rotate: 90,
                opacity: 0,
                transformOrigin: "left bottom",
                transition: {
                    ease: "easeOut",
                    delay: 2 - 0.06 * i,
                    y: { stiffness: 1000, velocity: -100 },
                },
            }))
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
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={letterAnimation}
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

RotateLoop.defaultProps = {
    height: 28,
    width: 200,
    firstLine: "First Line",
    fontSize: 26,
    fontColor: "#FFF",
}

addPropertyControls(RotateLoop, {
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
