export const intro = {
    initial: {
        y: '100%',
        transition: {
            duration: 0.5,
            ease: 'easeInOut',
        }
    },
    animate: {
        y: '0%',
        transition: {
            duration: 0.5,
            ease: 'easeInOut',
        }
    }
}

export const titleAnim = {
    initial: {
        y: '100%',
    },
    animate: (i) => ({
        y: '-7%',
        transition: { duration: 0.75, delay: 0.1 * (0.1 * i), type: "tween", ease: [0.76, 0, 0.24, 1] }
    })
}

export const cursorAnim = {
    initial: {
        height: 0,
        width: 0,
        transition: { duration: 0.15, type: "tween", ease: [0.76, 0, 0.24, 1] }
    },
    animate: {
        height: '2.5rem',
        width: '2.5rem',
        transition: { duration: 0.15, type: "tween", ease: [0.76, 0, 0.24, 1] }
    },
    exit: {
        height: 0,
        width: 0,
        transition: { duration: 0.15, type: "tween", ease: [0.76, 0, 0.24, 1] }
    },
}
