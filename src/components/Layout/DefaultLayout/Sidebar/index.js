import bindClass from '~/utils/bindClass';
import styles from './Sidebar.module.scss';

const cx = bindClass(styles);

function Sidebar() {
	return <aside className={cx('wrapper')}>Sidebar</aside>;
}

export default Sidebar;
