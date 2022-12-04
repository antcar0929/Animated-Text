/* THIS FILE IS FOR THE DEMO ONLY */

import * as React from "react"
import {
    Frame,
    addPropertyControls,
    ControlType,
    useAnimation,
    RenderTarget,
} from "framer"

export function BlurLoop(props) {
    if (RenderTarget.current() === RenderTarget.thumbnail) {
        return <Frame background={"#8400FF"} />
    }

    const { firstLine, fontSize, fontColor } = props

    // Create an array of letters
    const string = Array.from(firstLine)

    // Create an array of random numbers
    let numbers = []

    for (let i = 0; i < string.length; i++) {
        let j = Math.floor(Math.random() * string.length)
        numbers.push(j)
    }

    // Create letter animation
    const letterAnimation = useAnimation()

    async function animateLoop() {
        for (;;) {
            await letterAnimation.start(i => ({
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
                transition: {
                    duration: 0.4,
                    ease: "easeOut",
                    delay: numbers[i] * 0.05,
                },
            }))
            await letterAnimation.start(i => ({
                opacity: 0,
                scale: 4,
                filter: "blur(10px)",
                transition: {
                    duration: 0.4,
                    ease: "easeOut",
                    delay: 1.4 + numbers[i] * 0.05,
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
                        initial={{
                            opacity: 0,
                            scale: 4,
                            filter: "blur(10px)",
                        }}
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

BlurLoop.defaultProps = {
    height: 28,
    width: 200,
    firstLine: "First Line",
    fontSize: 26,
    fontColor: "#FFF",
}

addPropertyControls(BlurLoop, {
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
