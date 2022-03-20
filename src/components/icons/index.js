import { ReactComponent as StarSVG } from './card/star.svg'
import { ReactComponent as BackDiamondSVG } from './card/diamond.svg'
import { ReactComponent as BackFlowerSVG } from './card/flower.svg'
import { ReactComponent as BackIcosSVG } from './card/icos.svg'
import { ReactComponent as BackPrettySVG } from './card/pretty.svg'
import { ReactComponent as BackSimpleSVG } from './card/simple.svg'
import { ReactComponent as DetailSVG } from './card/rays.svg'
import { ReactComponent as PlaySVG } from './ui/play.svg'
import { ReactComponent as PauseSVG } from './ui/pause.svg'
import { ReactComponent as NotEqualSVG } from './ui/notequal.svg'
import { ReactComponent as EqualSVG } from './ui/equal.svg'
import { ReactComponent as LockSVG } from './ui/lock.svg'
import { ReactComponent as UnlockSVG } from './ui/unlock.svg'
import { ReactComponent as QuestionSVG } from './ui/question.svg'
import { ReactComponent as CloseSVG } from './ui/close.svg'
import { ReactComponent as MenuSVG } from './ui/menu.svg'

function Icon({ type, data }) {



    let classes = ``

    switch (data.desc) {
        case 'small':
            classes = `h-content w-content ${type}`
            break;
        case 'large':
            classes = `absolute ${type} h-full w-full animate-swivel md:pb-1`
            break;
        case 'background':
            classes = `${type} w-full h-full`
            break;
        case 'play':
            classes = `${type} h-content w-content pointer-events-none text-white `
            break;
        case 'pause':
            classes = `${type} h-content w-content pointer-events-none `
            break;
        case 'detail':
            classes = `absolute h-full w-full animate-clockwise opacity-10 text-neutral-700 grid content-center justify-center pointer-events-none`
            break;
        case 'score':
            classes = `h-conent w-content pb-1 ${type}`
            break;
        case 'notequal':
            classes = `h-content w-content  ${type}`
            break;
        case 'equal':
            classes = `h-content w-content  ${type}`
            break;
        case 'lock':
            classes = `h-content w-content  ${type}`
            break;
        case 'unlock':
            classes = `h-content w-content  ${type}`
            break;
        case 'question':
            classes = `h-content w-content  ${type}`
            break;
            case 'close':
                classes = `h-content w-content  ${type}`
                break;
                case 'menu':
                    classes = `h-content w-content  ${type}`
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
        score: <StarSVG className={classes} />,
        notequal: <NotEqualSVG className={classes} />,
        equal: <EqualSVG className={classes} />,
        pause: <PauseSVG className={classes} />,
        lock: <LockSVG className={classes} />,
        unlock: <UnlockSVG className={classes} />,
        question: <QuestionSVG className={classes} />,
        close: <CloseSVG className={classes} />,
        menu: <MenuSVG className={classes} />,
    }
    return library[data.desc]
}

export default Icon