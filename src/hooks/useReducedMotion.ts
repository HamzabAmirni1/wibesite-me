import { useEffect, useState } from 'react';

/**
 * Returns true if:
 *  - the OS has "prefers-reduced-motion" enabled, OR
 *  - the device is a low-powered mobile (< 768 px width)
 *
 * Use this flag to skip heavy animations and keep the site fast on all devices.
 */
export function useReducedMotion(): boolean {
    const [reduced, setReduced] = useState(() => {
        if (typeof window === 'undefined') return false;
        const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
        const mobile = window.innerWidth < 768;
        return mq.matches || mobile;
    });

    useEffect(() => {
        const mq = window.matchMedia('(prefers-reduced-motion: reduce)');

        const handleChange = () => {
            const mobile = window.innerWidth < 768;
            setReduced(mq.matches || mobile);
        };

        mq.addEventListener('change', handleChange);
        window.addEventListener('resize', handleChange, { passive: true });

        return () => {
            mq.removeEventListener('change', handleChange);
            window.removeEventListener('resize', handleChange);
        };
    }, []);

    return reduced;
}
