import * as React from "react"
import { Frame, addPropertyControls, ControlType, RenderTarget } from "framer"

export function Color(props) {
    if (RenderTarget.current() === RenderTarget.thumbnail) {
        return <Frame background={"#6600FF"} />
    }

    const { firstLine, fontSize, colorOne, colorTwo, colorThree } = props

    return (
        <Frame size={"100%"} background={""}>
            {
                // Container for initial scale down effect
            }
            <Frame
                center={"y"}
                height={fontSize}
                width={"100%"}
                background={""}
                initial={{ scale: 10 }}
                animate={{ scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 90,
                    mass: 0.3,
                    velocity: 100,
                    damping: 8,
                }}
            >
                {
                    // Container for actual text
                }
                <Frame
                    width={"100%"}
                    height={fontSize * 1.2}
                    background={""}
                    style={{
                        fontFamily: "Montserrat, Work Sans, sans-serif",
                        fontWeight: "bold",
                        letterSpacing: "-0.04em",
                        fontSize: fontSize,
                        color: colorOne,
                    }}
                    animate={{
                        color: [colorOne, colorTwo, colorThree],
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        yoyo: Infinity,
                    }}
                >
                    {firstLine}
                </Frame>
            </Frame>
        </Frame>
    )
}

Color.defaultProps = {
    height: 28,
    width: 200,
    firstLine: "First Line",
    fontSize: 26,
    colorOne: "#8FFFB8",
    colorTwo: "#FFFB0A",
    colorThree: "#A16BFF",
}

addPropertyControls(Color, {
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
    colorOne: {
        title: "First Color",
        type: ControlType.Color,
        defaultValue: "#8FFFB8",
    },
    colorTwo: {
        title: "Second Color",
        type: ControlType.Color,
        defaultValue: "#FFFB0A",
    },
    colorThree: {
        title: "Third Color",
        type: ControlType.Color,
        defaultValue: "#A16BFF",
    },
})
