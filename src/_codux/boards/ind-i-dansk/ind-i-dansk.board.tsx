import { createBoard } from '@wixc3/react-board';
import { IndIDansk } from '../../../components/ind-i-dansk/ind-i-dansk';

export default createBoard({
    name: 'IndIDansk',
    Board: () => <IndIDansk />,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768
    }
});
