import { ReactComponent as StarSVG } from './star.svg'
import { ReactComponent as BackDiamondSVG } from './backside/diamond.svg'
import { ReactComponent as BackFlowerSVG } from './backside/flower.svg'
import { ReactComponent as BackIcosSVG } from './backside/icos.svg'
import { ReactComponent as BackPrettySVG } from './backside/pretty.svg'
import { ReactComponent as BackSimpleSVG } from './backside/simple.svg'
import { ReactComponent as PlaySVG } from './play.svg'
import { ReactComponent as DetailSVG } from './rays.svg'

function Icon({ index, type, data }) {


    let classes = ``

    switch (data.desc) {
        case 'small':
            classes = `h-5 w-5 text-white m-2 `
            break;
        case 'large':
            classes = `absolute text-white h-full w-full animate-swivel lg:pb-1`
            break;
        case 'background':
            classes = `text-neutral-700 w-full h-full`
            break;
        case 'play':
            classes = `text-white h-28 w-28 pointer-events-none`
            break;
        case 'detail':
            classes = `absolute h-full w-full animate-clockwise opacity-10 text-white grid content-center justify-center pointer-events-none`
            break;
        case 'score':
            classes = `h-10 w-10 lg:h-16 lg:w-16 text-white`
            break;

        default:
            break;
    }

    const library = {
        small: <StarSVG className={classes} />,
        large: <StarSVG className={classes} />,
        background: <BackSimpleSVG className={classes} />,
        play: <PlaySVG className={classes} />,
        detail: <DetailSVG className={classes} />,
        score: <StarSVG className={classes} />
    }
    return library[data.desc]
}

export default Icon