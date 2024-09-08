import React, { useRef, useEffect, useState } from 'react';
import { useIntersection } from 'react-use';

import gsap from 'gsap';
import './description.scss';

function Description() {
    const sectionRef = useRef(null);
    const sectionTwoRef = useRef(null);
    const [sectionHeight, setSectionHeight] = useState(0);

    const intersection = useIntersection(sectionRef, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    });

    useEffect(() => {
        const updateHeight = () => {
            if (sectionRef.current) {
                setSectionHeight(sectionRef.current.clientHeight);
            }
        };

        window.addEventListener('resize', updateHeight);
        updateHeight();

        return () => window.removeEventListener('resize', updateHeight);
    }, []);

    useEffect(() => {
        if (sectionHeight) {
            const isIntersecting = intersection?.isIntersecting;

            gsap.to('.sectionFirst', {
                height: isIntersecting ? `${sectionHeight * 0.5}px` : '100vh',
                duration: 1,
                ease: 'power4.out',
            });

            gsap.to('.sectionSecond', {
                height: isIntersecting ? `${sectionHeight * 1.5}px` : '100vh',
                duration: 1,
                ease: 'power4.out',
                transform: isIntersecting ? `translateY(-${sectionHeight * 0.5}px)` : 'translateY(0)',
            });

            gsap.to(sectionTwoRef.current, {
                transform: isIntersecting ? `translateY(-${sectionHeight * 0.5}px)` : 'translateY(0)',
                duration: 1,
                ease: 'power4.out',
            });
        }
    }, [intersection, sectionHeight]);

    return (
        <div>
            <div className='sectionFirst'>
                <div className='inner flex items-center justify-center space-x-8'>
                    <img src="./jammu.jpg" alt="" className="w-200 h-80 object-cover" />
                    <span className="text-center text-lg">
                        Jammu and Kashmir, often referred to as "Paradise on Earth," 
                        is a region located in the northern part of the Indian subcontinent. Renowned for its breathtaking landscapes, it encompasses the picturesque valleys, lush meadows, and snow-capped mountains of the Himalayas. The region is divided into two union territories: Jammu and Kashmir, and Ladakh, each offering its unique charm. Jammu, with its historic temples and vibrant festivals, contrasts beautifully with Kashmir's serene lakes, verdant gardens, and rich cultural heritage.
                    </span>
                    <img src="./jammu1.jpg" alt="" className="w-200 h-80 object-cover" />
                </div>
            </div>

            <div className='sectionSecond' ref={sectionRef}>
                <div className='inner' ref={sectionTwoRef}>
                    <p className='text-black'>
                        This is the new section that will appear on top of the first section.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Description;
