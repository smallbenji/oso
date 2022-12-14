import { createBoard } from '@wixc3/react-board';
import { Facebook } from '../../../components/facebook/facebook';

export default createBoard({
    name: 'Facebook',
    Board: () => <Facebook />,
    environmentProps: {
        windowWidth: 1000,
        windowHeight: 496,
    },
});
