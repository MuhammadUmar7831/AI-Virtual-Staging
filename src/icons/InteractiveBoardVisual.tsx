import React from 'react'

const InteractiveBoardVisual = () => {
    return (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <rect width="50" height="50" fill="url(#pattern0_43_514)" />
            <defs>
                <pattern id="pattern0_43_514" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_43_514" transform="scale(0.01)" />
                </pattern>
                <image id="image0_43_514" width="100" height="100" preserveAspectRatio="none" xlinkHref="data:image/png;base64,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" />
            </defs>
        </svg>

    )
}

export default InteractiveBoardVisual
