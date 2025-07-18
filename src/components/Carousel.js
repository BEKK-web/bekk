'use client';
import { Children, useMemo, useRef, useState, useEffect } from "react";
import styled from "styled-components";

const Carousel = ({
    children,
    visibleItemsCount = 1, // how many items to show
    isInfinite = true, // default to infinite loop
    withIndicator, // show dots?
    autoPlay = true, // enable auto-play by default
    autoPlayInterval = 3000 // 3 seconds
}) => {
    const indicatorContainerRef = useRef(null);
    const [timeoutInProgress, setTimeoutInProgress] = useState(false); // a boolean for if timeout is im progress, used to stop user from spam clicking next or back in certain conditions

    /**
     * Total item
     */
    const originalItemsLength = useMemo(() => Children.count(children), [
        children
    ]);

    /**
     * Is the carousel repeating it's item
     */
    const isRepeating = useMemo(
        () => isInfinite && Children.count(children) > visibleItemsCount,
        [children, isInfinite, visibleItemsCount]
    );

    /**
     * Current Index Item of the Carousel
     */
    const [currentIndex, setCurrentIndex] = useState(
        isRepeating ? visibleItemsCount : 0
    );

    /**
     * Is the carousel's transition enabled
     */
    const [isTransitionEnabled, setTransitionEnabled] = useState(true);

    /**
     * First touch position to be used in calculation for the swipe speed
     */
    const [touchPosition, setTouchPosition] = useState(null);

    // Auto-play effect
    useEffect(() => {
        if (!autoPlay) return;
        const interval = setInterval(() => {
            setCurrentIndex(prev => {
                if (isRepeating || prev < originalItemsLength - visibleItemsCount) {
                    return prev + 1;
                } else {
                    // Reset to start if not repeating
                    return 0;
                }
            });
        }, autoPlayInterval);
        return () => clearInterval(interval);
    }, [autoPlay, autoPlayInterval, isRepeating, originalItemsLength, visibleItemsCount]);

    /**
     * Handle if the carousel is repeating
     * and the currentIndex have been set to the last or first item
     */
    useEffect(() => {
        if (isRepeating) {
            if (
                currentIndex === visibleItemsCount ||
                currentIndex === originalItemsLength
            ) {
                setTransitionEnabled(true);
            }
        }
    }, [currentIndex, isRepeating, visibleItemsCount, originalItemsLength]);

    useEffect(() => {
        if (withIndicator) {
            const active = indicatorContainerRef.current?.querySelector(
                ".dots-active"
            );
            if (active) {
                let index = active.getAttribute("data-index");
                if (index !== null && indicatorContainerRef.current?.scrollTo) {
                    indicatorContainerRef.current?.scrollTo({
                        left: ((Number(index) - 2) / 5) * 50,
                        behavior: "smooth"
                    });
                }
            }
        }
    }, [withIndicator, currentIndex]);

    /**
     * Move forward to the next item
     */
    const nextItem = () => {
        const isOnEdgeForward = currentIndex > originalItemsLength;
        if (isOnEdgeForward) {
            setTimeoutInProgress(true);
        }

        if (isRepeating || currentIndex < originalItemsLength - visibleItemsCount) {
            setCurrentIndex((prevState) => prevState + 1);
        }
    };

    /**
     * Move backward to the previous item
     */
    const previousItem = () => {
        const isOnEdgeBack = isRepeating
            ? currentIndex <= visibleItemsCount
            : currentIndex === 0;

        if (isOnEdgeBack) {
            setTimeoutInProgress(true);
        }

        if (isRepeating || currentIndex > 0) {
            setCurrentIndex((prevState) => prevState - 1);
        }
    };

    /**
     * Handle when the user start the swipe gesture
     * @param e TouchEvent
     */
    const handleTouchStart = (e) => {
        // Save the first position of the touch
        const touchDown = e.touches[0].clientX;
        setTouchPosition(touchDown);
    };

    /**
     * Handle when the user move the finger in swipe gesture
     * @param e TouchEvent
     */
    const handleTouchMove = (e) => {
        // Get initial location
        const touchDown = touchPosition;

        // Proceed only if the initial position is not null
        if (touchDown === null) {
            return;
        }

        // Get current position
        const currentTouch = e.touches[0].clientX;

        // Get the difference between previous and current position
        const diff = touchDown - currentTouch;

        // Go to next item
        if (diff > 5) {
            nextItem();
        }

        // Go to previous item
        if (diff < -5) {
            previousItem();
        }

        // Reset initial touch position
        setTouchPosition(null);
    };

    /**
     * Handle when carousel transition's ended
     */
    const handleTransitionEnd = () => {
        if (isRepeating) {
            if (currentIndex === 0) {
                setTransitionEnabled(false);
                setCurrentIndex(originalItemsLength);
            } else if (currentIndex === originalItemsLength + visibleItemsCount) {
                setTransitionEnabled(false);
                setCurrentIndex(visibleItemsCount);
            }
        }

        setTimeoutInProgress(false);
    };

    /**
     * Render previous items before the first item
     */
    const extraPreviousItems = useMemo(() => {
        let output = [];
        for (let index = 0; index < visibleItemsCount; index++) {
            output.push(Children.toArray(children)[originalItemsLength - 1 - index]);
        }
        output.reverse();
        return output;
    }, [children, originalItemsLength, visibleItemsCount]);

    /**
     * Render next items after the last item
     */
    const extraNextItems = useMemo(() => {
        let output = [];
        for (let index = 0; index < visibleItemsCount; index++) {
            output.push(Children.toArray(children)[index]);
        }
        return output;
    }, [children, visibleItemsCount]);

    // render n (n being the count of original items / visibleItemsCount) dots
    const renderDots = useMemo(() => {
        let output = [];

        const localShow = isRepeating ? visibleItemsCount : 0;
        const localLength = isRepeating
            ? originalItemsLength
            : Math.ceil(originalItemsLength / visibleItemsCount);
        const calculatedActiveIndex =
            currentIndex - localShow < 0
                ? originalItemsLength + (currentIndex - localShow)
                : currentIndex - localShow;

        for (let index = 0; index < localLength; index++) {
            let className = "";
            if (calculatedActiveIndex === index) {
                className = "dots-active";
            } else {
                if (calculatedActiveIndex === 0) {
                    if (calculatedActiveIndex + index <= 2) {
                        className = "dots-close";
                    } else {
                        className = "dots-far";
                    }
                } else if (calculatedActiveIndex === localLength - 1) {
                    if (Math.abs(calculatedActiveIndex - index) <= 2) {
                        className = "dots-close";
                    } else {
                        className = "dots-far";
                    }
                } else {
                    if (Math.abs(calculatedActiveIndex - index) === 1) {
                        className = "dots-close";
                    } else {
                        className = "dots-far";
                    }
                }
            }
            output.push(<div key={index} data-index={index} className={className} />);
        }

        return output;
    }, [currentIndex, isRepeating, originalItemsLength, visibleItemsCount]);

    const isNextButtonVisible = useMemo(() => {
        return (
            isRepeating || currentIndex < originalItemsLength - visibleItemsCount
        );
    }, [isRepeating, currentIndex, originalItemsLength, visibleItemsCount]);

    const isPrevButtonVisible = useMemo(() => isRepeating || currentIndex > 0, [
        isRepeating,
        currentIndex
    ]);

    return (
        <StyledCarousel visibleItemsCount={visibleItemsCount}>
            <div className={`carousel-wrapper`}>
                {/* Hide arrows for auto-play */}
                <div
                    className={`carousel-content-wrapper`}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                >
                    <div
                        className={`carousel-content`}
                        style={{
                            transform: `translateX(-${currentIndex * (100 / visibleItemsCount)}%)`,
                            transition: !isTransitionEnabled ? "none" : undefined
                        }}
                        onTransitionEnd={() => handleTransitionEnd()}
                    >
                        {isRepeating && extraPreviousItems}
                        {children}
                        {isRepeating && extraNextItems}
                    </div>
                </div>
            </div>
            {withIndicator && (
                <div ref={indicatorContainerRef} className={`indicator-container `}>
                    {renderDots}
                </div>
            )}
        </StyledCarousel>
    );
};

const StyledCarousel = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .carousel-wrapper {
    display: flex;
    width: 100%;
    position: relative;
    justify-content: center;
  }

  .carousel-content-wrapper {
    overflow: hidden;
    width: 100%;
    height: 100%;
    // max-width: 700px;
    // max-height: 600px;
    padding: 2%;
  }

  .carousel-content {
    display: flex;
    transition: all 250ms linear;
    -ms-overflow-style: none;
    /* hide scrollbar in IE and Edge */
    scrollbar-width: none;
    /* hide scrollbar in Firefox */
    max-width: 800px;
  }

  /* hide scrollbar in webkit browser */

  .carousel-content::-webkit-scrollbar,
  .carousel-content::-webkit-scrollbar {
    display: none;
  }

  .carousel-content > * {
    flex-shrink: 0;
    flex-grow: 1;
    width: ${({ visibleItemsCount }) => `calc(100% / ${visibleItemsCount})`};
    height: 100%;
    padding: 2.5%;
    }

  @media (hover: none) and (pointer: coarse) {
    .left-arrow-button,
    .right-arrow-button {
      display: none;
    }
  }

  .indicator-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 auto;
    -ms-overflow-style: none;
    /* hide scrollbar in IE and Edge */
    scrollbar-width: none;
    /* hide scrollbar in Firefox */
  }

  .indicator-container::-webkit-scrollbar,
  .indicator-container::-webkit-scrollbar {
    display: none;
  }

  .indicator-container {
    max-width: 56px;
    overflow: auto;
  }

  .indicator-container > * {
    margin-left: 6px;
    border-radius: 12px;
    transition-property: all;
    transition-duration: 250ms;
    transition-timing-function: linear;
  }

  .indicator-container > div:first-child {
    margin-left: 0px;
  }

  .indicator-container > .dots-active {
    width: 12px;
    height: 6px;
    background-color: #00000096;
    flex-shrink: 0;
    flex-grow: 1;
  }

  .indicator-container > .dots-close {
    width: 6px;
    height: 6px;
    background-color: #00000033;
    flex-shrink: 0;
    flex-grow: 1;
  }

  .indicator-container > .dots-far {
    width: 4px;
    height: 4px;
    margin-top: 1px;
    margin-bottom: 1px;
    background-color: #00000033;
    flex-shrink: 0;
    flex-grow: 1;
  }
`;
export default Carousel;
