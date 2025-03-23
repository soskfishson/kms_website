import React, { useEffect, useRef, useState } from 'react';

declare global {
    interface Window {
        createjs: any;
        AdobeAn: any;
        init: () => void;
        canvas: HTMLCanvasElement;
        stage: any;
        exportRoot: any;
        anim_container: HTMLDivElement;
        dom_overlay_container: HTMLDivElement;
        fnStartAnimation: () => void;
    }
}

const AnimateCanvas: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    const calculateDimensions = () => {
        if (!containerRef.current) return;

        const originalWidth = 1920;
        const originalHeight = 1080;
        const aspectRatio = originalWidth / originalHeight;

        const parentWidth = containerRef.current.parentElement?.clientWidth || window.innerWidth;

        const newWidth = Math.min(parentWidth, originalWidth);
        const newHeight = newWidth / aspectRatio;

        setDimensions({ width: newWidth, height: newHeight });
    };

    useEffect(() => {
        calculateDimensions();

        const handleResize = () => {
            calculateDimensions();

            if (window.AdobeAn && window.canvas && window.anim_container && window.dom_overlay_container) {
                window.AdobeAn.makeResponsive(
                    true,
                    'both',
                    true,
                    1,
                    [window.canvas, window.anim_container, window.dom_overlay_container]
                );
            }
        };

        window.addEventListener('resize', handleResize);

        const createjsScript = document.createElement('script');
        createjsScript.src = 'https://code.createjs.com/1.0.0/createjs.min.js';
        createjsScript.async = true;
        document.body.appendChild(createjsScript);

        const animationScript = document.createElement('script');
        animationScript.src = 'karta_HTML5 Canvas.js';
        animationScript.async = true;
        document.body.appendChild(animationScript);

        window.init = function() {
            if (!canvasRef.current || !containerRef.current || !overlayRef.current) return;

            window.canvas = canvasRef.current;
            window.anim_container = containerRef.current;
            window.dom_overlay_container = overlayRef.current;

            const comp = window.AdobeAn.getComposition("09C7F407DE4DF7418A94BD18D8338E1A");
            const lib = comp.getLibrary();

            const loader = new window.createjs.LoadQueue(false);
            loader.installPlugin(window.createjs.Sound);

            loader.addEventListener("fileload", (evt: any) => handleFileLoad(evt, comp));
            loader.addEventListener("complete", (evt: any) => handleComplete(evt, comp));

            loader.loadManifest(lib.properties.manifest);
        };

        function handleFileLoad(evt: any, comp: any) {
            const images = comp.getImages();
            if (evt && (evt.item.type === "image")) {
                images[evt.item.id] = evt.result;
            }
        }

        function handleComplete(evt: any, comp: any) {
            const lib = comp.getLibrary();
            const ss = comp.getSpriteSheet();
            const queue = evt.target;
            const ssMetadata = lib.ssMetadata;

            for (let i = 0; i < ssMetadata.length; i++) {
                ss[ssMetadata[i].name] = new window.createjs.SpriteSheet({
                    "images": [queue.getResult(ssMetadata[i].name)],
                    "frames": ssMetadata[i].frames
                });
            }

            window.exportRoot = new lib.karta_HTML5Canvas();
            window.stage = new lib.Stage(window.canvas);
            window.stage.enableMouseOver();

            window.fnStartAnimation = function() {
                window.stage.addChild(window.exportRoot);
                window.createjs.Ticker.framerate = lib.properties.fps;
                window.createjs.Ticker.addEventListener("tick", window.stage);
            };

            window.AdobeAn.makeResponsive(
                true,
                'both',
                true,
                1,
                [window.canvas, window.anim_container, window.dom_overlay_container]
            );

            window.AdobeAn.compositionLoaded(lib.properties.id);
            window.fnStartAnimation();
        }

        (window as any).playSound = function(id: string, loop?: boolean, offset?: number) {
            return window.createjs.Sound.play(id, {
                'interrupt': window.createjs.Sound.INTERRUPT_EARLY,
                'loop': loop,
                'offset': offset
            });
        };

        const checkIfScriptsLoaded = () => {
            if (window.createjs && window.AdobeAn) {
                window.init();
            } else {
                setTimeout(checkIfScriptsLoaded, 100);
            }
        };

        animationScript.onload = () => {
            checkIfScriptsLoaded();
        };

        return () => {
            document.body.removeChild(createjsScript);
            document.body.removeChild(animationScript);
            window.removeEventListener('resize', handleResize);
            if (window.createjs && window.createjs.Ticker) {
                window.createjs.Ticker.removeAllEventListeners();
            }
        };
    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                backgroundColor: 'rgba(255, 255, 255, 1.00)',
                width: `${dimensions.width}px`,
                height: `${dimensions.height}px`,
                position: 'relative',
                overflow: 'hidden',
                margin: '0 auto'
            }}
        >
            <canvas
                ref={canvasRef}
                width="1920"
                height="1080"
                style={{
                    position: 'absolute',
                    display: 'block',
                    backgroundColor: 'rgba(255, 255, 255, 1.00)',
                    width: '100%',
                    height: 'auto'
                }}
            />
            <div
                ref={overlayRef}
                style={{
                    pointerEvents: 'none',
                    overflow: 'hidden',
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    display: 'block'
                }}
            />
        </div>
    );
};

export default AnimateCanvas;