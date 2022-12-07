import { createBoard } from '@wixc3/react-board';
import { Instagram } from '../../../components/instagram/instagram';

export default createBoard({
    name: 'Instagram',
    Board: () => <Instagram />,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768
    }
});
