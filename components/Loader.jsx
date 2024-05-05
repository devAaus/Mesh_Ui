import React from 'react';

const Loader = () => {
    const progressAnimationKeyframes = `
        @keyframes progressAnimation {
            from {
                width: 0%;
            }
            to {
                width: 100%;
            }
        }
    `;

    return (
        <div className="progress-container w-[100%] h-[6px] rounded-3xl overflow-hidden">
            <style>{progressAnimationKeyframes}</style>
            <div className="progress-bar h-full bg-[#007bff] rounded-3xl animate-progressAnimation"
                style={{ animationDuration: '3s', animationTimingFunction: 'ease', animationFillMode: 'forwards' }}>
            </div>
        </div>
    );
}

export default Loader;
