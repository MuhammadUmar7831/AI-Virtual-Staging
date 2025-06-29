import React from 'react'

const Create = () => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" >
            <rect width="20" height="20" fill="url(#pattern0_136_955)" />
            <defs>
                <pattern id="pattern0_136_955" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_136_955" transform="scale(0.01)" />
                </pattern>
                <image id="image0_136_955" width="100" height="100" preserveAspectRatio="none" xlinkHref="data:image/png;base64,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" />
            </defs>
        </svg>

    )
}

export default Create
