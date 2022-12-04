/* THIS FILE IS FOR THE DEMO ONLY */

import * as React from "react"
import {
    Frame,
    addPropertyControls,
    ControlType,
    useAnimation,
    RenderTarget,
} from "framer"

export function FlyLoop(props) {
    if (RenderTarget.current() === RenderTarget.thumbnail) {
        return <Frame background={"#BA02FF"} />
    }

    const { width, firstLine, fontSize, fontColor } = props

    // Create an array of letters
    const string = Array.from(firstLine)

    // Create letter animation
    const letterAnimation = useAnimation()
    async function animateLoop() {
        for (;;) {
            await letterAnimation.start(i => ({
                x: 0,
                rotateX: 0,
                rotateY: 0,
                rotateZ: 0,
                transition: {
                    ease: "circOut",
                    duration: 0.8,
                    delay: 1 + 0.08 * i,
                },
            }))
            await letterAnimation.start(i => ({
                x: width,
                rotateX: 180 * numbersX[i],
                rotateY: 180 * numbersY[i],
                rotateZ: 180 * numbersZ[i],
                transition: {
                    ease: "circIn",
                    duration: 0.8,
                    delay: 2 - 0.08 * i,
                },
            }))
        }
    }

    animateLoop()

    // Create an array of random numbers
    let numbersX = []
    let numbersY = []
    let numbersZ = []

    for (let i = 0; i < string.length; i++) {
        let j = Math.random() * 2 - 1
        let k = Math.random() * 2 - 1
        let l = Math.random() * 2 - 1
        numbersX.push(j)
        numbersY.push(k)
        numbersZ.push(l)
    }

    return (
        <Frame size={"100%"} background={""}>
            {
                // Set the display and justifyContent properties to align the text correctly
            }
            <Frame
                center={"y"}
                height={fontSize * 1.2}
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
                        height={fontSize * 1.2}
                        background={""}
                        initial={{
                            x: width,
                            rotateX: 180 * numbersX[i],
                            rotateY: 180 * numbersY[i],
                            rotateZ: 180 * numbersZ[i],
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

FlyLoop.defaultProps = {
    height: 28,
    width: 200,
    firstLine: "First Line",
    fontSize: 26,
    fontColor: "#FFF",
}

addPropertyControls(FlyLoop, {
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
