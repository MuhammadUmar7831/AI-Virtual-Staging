import React from 'react'

const Gallery = () => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" >
            <rect width="20" height="20" fill="url(#pattern0_190_1844)" />
            <defs>
                <pattern id="pattern0_190_1844" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_190_1844" transform="scale(0.01)" />
                </pattern>
                <image id="image0_190_1844" width="100" height="100" preserveAspectRatio="none" xlinkHref="data:image/png;base64,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" />
            </defs>
        </svg>

    )
}

export default Gallery
