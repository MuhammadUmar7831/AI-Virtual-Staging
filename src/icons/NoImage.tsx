import React from 'react'

const NoImage = () => {
    return (
        <svg width="66" height="66" viewBox="0 0 66 66" fill="none" >
            <rect width="66" height="66" fill="url(#pattern0_172_1809)" />
            <defs>
                <pattern id="pattern0_172_1809" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_172_1809" transform="scale(0.01)" />
                </pattern>
                <image id="image0_172_1809" width="100" height="100" preserveAspectRatio="none" xlinkHref="data:image/png;base64,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" />
            </defs>
        </svg>

    )
}

export default NoImage
